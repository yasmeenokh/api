import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  @Header('Accept', 'application/json')
  @UseInterceptors(FileInterceptor('logo')) // 'logo' should match the field name in the form data
  async createWorkspace(
    @UploadedFile() file: Express.Multer.File, // Access the uploaded file
    @Body() body: any, // Access other form fields sent as JSON data
  ): Promise<any> {
    const data = {
      name: body.name,
      logo: file.buffer.toString('base64'), // Convert the file to base64 or use other appropriate handling
      users: JSON.parse(body.users), // Parse the stringified JSON back to an array
      // Other form fields
    };
    // Process and save the data using your workspace service
    const workspace = await this.workspaceService.create(data);
    return workspace;
  }

  @Get()
  @Header('Accept', 'application/json')
  async findAll() {
    return await this.workspaceService.findAll();
  }

  @Get(':id')
  @Header('Accept', 'application/json')
  async findOne(@Param('id') id: string) {
    return await this.workspaceService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWorkspace) {
    return await this.workspaceService.update(id, updateWorkspace);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.workspaceService.remove(id);
  }
}
