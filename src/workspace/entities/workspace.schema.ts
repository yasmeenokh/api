import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface User {
  id: string;
  name: string;
  email: string;
}
@Schema()
export class Workspace extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  logo?: string;

  @Prop({ type: [{ id: String, name: String, email: String }] })
  users: User[];
}

export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
