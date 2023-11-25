import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Workspace } from './entities/workspace.schema';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectModel(Workspace.name) private workspaceRepository: Model<Workspace>,
  ) {}

  async create(createWorkspaceDto: any) {
    const createdWorkspace = await new this.workspaceRepository(
      createWorkspaceDto,
    );
    return await createdWorkspace.save();
  }

  async findAll() {
    return await this.workspaceRepository.find().exec();
  }

  async findOne(id: string) {
    return await this.workspaceRepository.findById(id).exec();
  }

  async update(id: string, updateWorkspaceDto) {
    return await this.workspaceRepository
      .findByIdAndUpdate(id, updateWorkspaceDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.workspaceRepository.findByIdAndDelete(id);
  }
}
