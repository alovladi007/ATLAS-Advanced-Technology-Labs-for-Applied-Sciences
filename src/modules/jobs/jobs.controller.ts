import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('jobs')
@Controller('jobs')
@ApiBearerAuth()
export class JobsController {
  @Get()
  @ApiOperation({ summary: 'List jobs' })
  @ApiResponse({ status: 200, description: 'List of jobs' })
  list(@Query('status') status?: string, @Query('kind') kind?: string) {
    return { jobs: [], total: 0, filters: { status, kind } };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get job by ID' })
  @ApiResponse({ status: 200, description: 'Job details' })
  get(@Param('id') id: string) {
    return {
      id,
      kind: 'code_generation',
      status: 'completed',
      progress: 100,
      payload: {},
      result: {},
      createdAt: new Date().toISOString(),
    };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new job' })
  @ApiResponse({ status: 201, description: 'Job created' })
  create(@Body() body: { kind: string; payload: Record<string, unknown> }) {
    return {
      id: 'new-job-id',
      ...body,
      status: 'pending',
      progress: 0,
      createdAt: new Date().toISOString(),
    };
  }

  @Post(':id/cancel')
  @ApiOperation({ summary: 'Cancel a job' })
  @ApiResponse({ status: 200, description: 'Job cancelled' })
  cancel(@Param('id') id: string) {
    return { id, status: 'cancelled' };
  }

  @Post(':id/retry')
  @ApiOperation({ summary: 'Retry a failed job' })
  @ApiResponse({ status: 200, description: 'Job retried' })
  retry(@Param('id') id: string) {
    return { id, status: 'pending', retriedAt: new Date().toISOString() };
  }

  @Get(':id/logs')
  @ApiOperation({ summary: 'Get job logs' })
  @ApiResponse({ status: 200, description: 'Job logs' })
  logs(@Param('id') id: string) {
    return { id, logs: [] };
  }
}
