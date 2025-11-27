-- AURION Research Labs - Database Initialization
-- Enable required extensions

-- Enable pgvector for Domain Intelligence Graph embeddings
CREATE EXTENSION IF NOT EXISTS vector;

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable trigram search for fuzzy matching
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Create schemas for organization
CREATE SCHEMA IF NOT EXISTS aurion;
CREATE SCHEMA IF NOT EXISTS dig;  -- Domain Intelligence Graph

-- Set search path
SET search_path TO aurion, public;

-- Organizations table
CREATE TABLE IF NOT EXISTS aurion.organizations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    plan VARCHAR(50) DEFAULT 'free',
    hipaa_mode BOOLEAN DEFAULT FALSE,
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workspaces within organizations
CREATE TABLE IF NOT EXISTS aurion.workspaces (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES aurion.organizations(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    division VARCHAR(50), -- 'bioai', 'photonai', 'electroai'
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Users
CREATE TABLE IF NOT EXISTS aurion.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    avatar_url TEXT,
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Organization memberships with roles
CREATE TABLE IF NOT EXISTS aurion.memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES aurion.users(id) ON DELETE CASCADE,
    org_id UUID NOT NULL REFERENCES aurion.organizations(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL DEFAULT 'member', -- 'owner', 'admin', 'member', 'viewer'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, org_id)
);

-- Jobs for async processing (simulations, code generation, etc.)
CREATE TABLE IF NOT EXISTS aurion.jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES aurion.organizations(id) ON DELETE CASCADE,
    workspace_id UUID REFERENCES aurion.workspaces(id) ON DELETE SET NULL,
    user_id UUID REFERENCES aurion.users(id) ON DELETE SET NULL,
    kind VARCHAR(100) NOT NULL, -- 'code_generation', 'simulation', 'inference', etc.
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'running', 'completed', 'failed', 'cancelled'
    priority INTEGER DEFAULT 0,
    payload JSONB NOT NULL DEFAULT '{}',
    result JSONB,
    error_message TEXT,
    progress REAL DEFAULT 0,
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Datasets (files, data sources)
CREATE TABLE IF NOT EXISTS aurion.datasets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES aurion.organizations(id) ON DELETE CASCADE,
    workspace_id UUID REFERENCES aurion.workspaces(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    kind VARCHAR(100) NOT NULL, -- 'csv', 'dicom', 'simulation', 'biosignal', etc.
    uri TEXT NOT NULL, -- S3 URI or other storage location
    size_bytes BIGINT,
    mime_type VARCHAR(100),
    metadata JSONB DEFAULT '{}',
    is_phi BOOLEAN DEFAULT FALSE, -- Protected Health Information flag
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ML Models registry
CREATE TABLE IF NOT EXISTS aurion.models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES aurion.organizations(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    version VARCHAR(50) NOT NULL,
    kind VARCHAR(100) NOT NULL, -- 'pytorch', 'onnx', 'sklearn', etc.
    registry_uri TEXT NOT NULL, -- MLflow or model storage URI
    metrics JSONB DEFAULT '{}',
    tags JSONB DEFAULT '[]',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(org_id, name, version)
);

-- Results from jobs
CREATE TABLE IF NOT EXISTS aurion.results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id UUID NOT NULL REFERENCES aurion.jobs(id) ON DELETE CASCADE,
    uri TEXT NOT NULL,
    kind VARCHAR(100),
    summary JSONB DEFAULT '{}',
    metrics JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Audit logs for compliance
CREATE TABLE IF NOT EXISTS aurion.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    org_id UUID NOT NULL REFERENCES aurion.organizations(id) ON DELETE CASCADE,
    user_id UUID REFERENCES aurion.users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(100),
    resource_id UUID,
    details JSONB DEFAULT '{}',
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Domain Intelligence Graph - Concepts/Entities
CREATE TABLE IF NOT EXISTS dig.concepts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain VARCHAR(50) NOT NULL, -- 'semiconductor', 'photonics', 'biomedical'
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    aliases JSONB DEFAULT '[]',
    properties JSONB DEFAULT '{}',
    embedding vector(1536), -- OpenAI ada-002 dimension
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Domain Intelligence Graph - Relationships
CREATE TABLE IF NOT EXISTS dig.relationships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    source_id UUID NOT NULL REFERENCES dig.concepts(id) ON DELETE CASCADE,
    target_id UUID NOT NULL REFERENCES dig.concepts(id) ON DELETE CASCADE,
    relation_type VARCHAR(100) NOT NULL,
    properties JSONB DEFAULT '{}',
    weight REAL DEFAULT 1.0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Domain Intelligence Graph - Documents (for RAG)
CREATE TABLE IF NOT EXISTS dig.documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain VARCHAR(50) NOT NULL,
    title VARCHAR(500),
    source VARCHAR(255),
    content TEXT NOT NULL,
    chunk_index INTEGER DEFAULT 0,
    metadata JSONB DEFAULT '{}',
    embedding vector(1536),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_workspaces_org ON aurion.workspaces(org_id);
CREATE INDEX IF NOT EXISTS idx_memberships_user ON aurion.memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_memberships_org ON aurion.memberships(org_id);
CREATE INDEX IF NOT EXISTS idx_jobs_org ON aurion.jobs(org_id);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON aurion.jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_workspace ON aurion.jobs(workspace_id);
CREATE INDEX IF NOT EXISTS idx_datasets_org ON aurion.datasets(org_id);
CREATE INDEX IF NOT EXISTS idx_datasets_workspace ON aurion.datasets(workspace_id);
CREATE INDEX IF NOT EXISTS idx_models_org ON aurion.models(org_id);
CREATE INDEX IF NOT EXISTS idx_audit_org ON aurion.audit_logs(org_id);
CREATE INDEX IF NOT EXISTS idx_audit_created ON aurion.audit_logs(created_at);

-- Vector similarity search indexes
CREATE INDEX IF NOT EXISTS idx_concepts_embedding ON dig.concepts USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX IF NOT EXISTS idx_documents_embedding ON dig.documents USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX IF NOT EXISTS idx_concepts_domain ON dig.concepts(domain);
CREATE INDEX IF NOT EXISTS idx_documents_domain ON dig.documents(domain);

-- Full-text search indexes
CREATE INDEX IF NOT EXISTS idx_concepts_name_trgm ON dig.concepts USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_documents_content_trgm ON dig.documents USING gin (content gin_trgm_ops);

-- Update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply update trigger to relevant tables
CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON aurion.organizations FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_workspaces_updated_at BEFORE UPDATE ON aurion.workspaces FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON aurion.users FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON aurion.jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_datasets_updated_at BEFORE UPDATE ON aurion.datasets FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_models_updated_at BEFORE UPDATE ON aurion.models FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_concepts_updated_at BEFORE UPDATE ON dig.concepts FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Grant permissions
GRANT ALL PRIVILEGES ON SCHEMA aurion TO aurion;
GRANT ALL PRIVILEGES ON SCHEMA dig TO aurion;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA aurion TO aurion;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA dig TO aurion;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA aurion TO aurion;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA dig TO aurion;

-- Insert sample domain concepts for DIG
INSERT INTO dig.concepts (domain, name, description, category) VALUES
('semiconductor', 'CMP', 'Chemical Mechanical Polishing - a process used in semiconductor manufacturing to planarize wafer surfaces', 'process'),
('semiconductor', 'SPC', 'Statistical Process Control - methods for monitoring and controlling a process', 'methodology'),
('semiconductor', 'Yield', 'The percentage of good dies produced from a wafer', 'metric'),
('photonics', 'FDTD', 'Finite-Difference Time-Domain - numerical method for solving Maxwell equations', 'simulation'),
('photonics', 'Waveguide', 'Structure that guides electromagnetic waves along its length', 'component'),
('biomedical', 'ECG', 'Electrocardiogram - measures electrical activity of the heart', 'signal'),
('biomedical', 'DICOM', 'Digital Imaging and Communications in Medicine - standard for medical images', 'standard');

COMMIT;
