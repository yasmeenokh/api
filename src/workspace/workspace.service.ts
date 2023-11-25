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
    const createdWorkspace = new this.workspaceRepository(createWorkspaceDto);
    return createdWorkspace.save();
  }

  async findAll() {
    return this.workspaceRepository.find().exec();
  }

  async findOne(id: string) {
    return this.workspaceRepository.findById(id).exec();
  }

  async update(id: string, updateWorkspaceDto) {
    return this.workspaceRepository
      .findByIdAndUpdate(id, updateWorkspaceDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.workspaceRepository.findByIdAndRemove(id).exec();
  }
}
