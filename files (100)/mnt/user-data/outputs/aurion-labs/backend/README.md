# AURION Research Labs - Backend API

AI-powered meta-automation platform for engineering innovation.

## Architecture

```
backend/
├── docker-compose.yml      # Infrastructure services
├── init-db.sql            # Database initialization
├── .env.example           # Environment variables template
└── apps/
    └── api/               # NestJS API application
        ├── src/
        │   ├── main.ts
        │   └── modules/
        │       ├── health/      # Health checks
        │       ├── auth/        # Authentication
        │       ├── orgs/        # Organizations
        │       ├── jobs/        # Async job processing
        │       ├── datasets/    # Data management
        │       ├── models/      # ML model registry
        │       └── domain/      # Division-specific APIs
        │           ├── electroai.controller.ts
        │           ├── photonai.controller.ts
        │           └── bioai.controller.ts
        ├── Dockerfile
        ├── package.json
        └── tsconfig.json
```

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Node.js 20+
- pnpm (recommended) or npm

### 1. Start Infrastructure

```bash
# Copy environment template
cp .env.example .env

# Start PostgreSQL, Redis, NATS, MinIO
docker compose up -d postgres redis nats minio

# Wait for services to be healthy
docker compose ps
```

### 2. Run the API

```bash
cd apps/api

# Install dependencies
pnpm install

# Run in development mode
pnpm dev
```

### 3. Access Services

- **API**: http://localhost:8080
- **Swagger Docs**: http://localhost:8080/docs
- **MinIO Console**: http://localhost:9001 (aurion/aurion_minio_secret)
- **NATS Monitoring**: http://localhost:8222

## API Endpoints

### Core Services

| Endpoint | Description |
|----------|-------------|
| `GET /api/v1/health` | Health check |
| `POST /api/v1/auth/login` | User login |
| `GET /api/v1/orgs` | List organizations |
| `GET /api/v1/jobs` | List async jobs |
| `GET /api/v1/datasets` | List datasets |
| `GET /api/v1/models` | List ML models |

### ElectroAI Division

| Endpoint | Description |
|----------|-------------|
| `POST /api/v1/electroai/spc/analyze` | SPC analysis |
| `POST /api/v1/electroai/yield/predict` | Yield prediction |
| `POST /api/v1/electroai/fdc/analyze` | Fault detection |
| `POST /api/v1/electroai/cmp/optimize` | CMP optimization |

### PhotonAI Division

| Endpoint | Description |
|----------|-------------|
| `POST /api/v1/photonai/fdtd/run` | FDTD simulation |
| `POST /api/v1/photonai/waveguide/design` | Waveguide design |
| `POST /api/v1/photonai/bandgap/optimize` | Band gap optimization |
| `POST /api/v1/photonai/layout/generate` | Layout generation |

### BioAI Division

| Endpoint | Description |
|----------|-------------|
| `POST /api/v1/bioai/ecg/analyze` | ECG analysis |
| `POST /api/v1/bioai/eeg/analyze` | EEG analysis |
| `POST /api/v1/bioai/dicom/process` | DICOM processing |
| `POST /api/v1/bioai/hrv/analyze` | HRV analysis |

## Infrastructure

### PostgreSQL + pgvector

Domain Intelligence Graph storage with vector similarity search.

```sql
-- Example: Semantic search for domain concepts
SELECT name, description, 
       1 - (embedding <=> query_embedding) AS similarity
FROM dig.concepts
WHERE domain = 'semiconductor'
ORDER BY embedding <=> query_embedding
LIMIT 10;
```

### Redis

- Session management
- API caching
- BullMQ job queues

### NATS

Event-driven messaging for:
- Job status updates
- Real-time notifications
- Service communication

### MinIO

S3-compatible object storage for:
- Dataset files
- Model artifacts
- Simulation results

## Development

### Running Tests

```bash
pnpm test
pnpm test:cov
```

### Database Migrations

```bash
pnpm db:migrate    # Run migrations
pnpm db:generate   # Generate Prisma client
pnpm db:studio     # Open Prisma Studio
```

### Code Style

```bash
pnpm lint
pnpm lint:fix
```

## Deployment

### Docker

```bash
# Build and run all services
docker compose up -d

# View logs
docker compose logs -f api
```

### Kubernetes

Helm charts available in `/ops/helm/` (not included in this scaffold).

## Environment Variables

See `.env.example` for all configuration options.

Key variables:
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_URL` - Redis connection string
- `JWT_SECRET` - JWT signing secret
- `ANTHROPIC_API_KEY` - Claude API key
- `OPENAI_API_KEY` - OpenAI API key (for embeddings)

## License

Proprietary - AURION Research Labs © 2025
