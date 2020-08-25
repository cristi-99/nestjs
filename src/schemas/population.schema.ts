import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';

@Schema()
export class Population extends Document{
    @Prop()
    year:Array<string>;

    @Prop()
    population:Array<string>;

}

export const PopulationSchema = SchemaFactory.createForClass(Population);