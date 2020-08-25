import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Users extends Document{
  @Prop()
  username: string;

  @Prop()
  password: string;
};

export const UserSchema = SchemaFactory.createForClass(Users)