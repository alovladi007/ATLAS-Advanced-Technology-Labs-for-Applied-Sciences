import { Controller, Get, Post, Delete, Param, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('datasets')
@Controller('datasets')
@ApiBearerAuth()
export class DatasetsController {
  @Get()
  @ApiOperation({ summary: 'List datasets' })
  @ApiResponse({ status: 200, description: 'List of datasets' })
  list(@Query('kind') kind?: string, @Query('workspaceId') workspaceId?: string) {
    return { datasets: [], total: 0, filters: { kind, workspaceId } };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get dataset by ID' })
  @ApiResponse({ status: 200, description: 'Dataset details' })
  get(@Param('id') id: string) {
    return {
      id,
      name: 'Sample Dataset',
      kind: 'csv',
      uri: 's3://aurion-data/datasets/sample.csv',
      sizeBytes: 1024000,
      metadata: {},
      createdAt: new Date().toISOString(),
    };
  }

  @Post()
  @ApiOperation({ summary: 'Create dataset metadata' })
  @ApiResponse({ status: 201, description: 'Dataset created' })
  create(@Body() body: { name: string; kind: string; uri: string; metadata?: Record<string, unknown> }) {
    return { id: 'new-dataset-id', ...body, createdAt: new Date().toISOString() };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete dataset' })
  @ApiResponse({ status: 204, description: 'Dataset deleted' })
  delete(@Param('id') id: string) {
    return { deleted: true };
  }

  @Post('upload-url')
  @ApiOperation({ summary: 'Get presigned upload URL' })
  @ApiResponse({ status: 200, description: 'Presigned upload URL' })
  getUploadUrl(@Body() body: { filename: string; contentType: string }) {
    return {
      uploadUrl: `https://storage.aurionlabs.ai/upload?token=xxx`,
      key: `uploads/${body.filename}`,
      expiresIn: 3600,
    };
  }

  @Get(':id/download-url')
  @ApiOperation({ summary: 'Get presigned download URL' })
  @ApiResponse({ status: 200, description: 'Presigned download URL' })
  getDownloadUrl(@Param('id') id: string) {
    return {
      downloadUrl: `https://storage.aurionlabs.ai/download?token=xxx`,
      expiresIn: 3600,
    };
  }
}
