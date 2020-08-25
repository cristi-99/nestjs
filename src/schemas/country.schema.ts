import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose from 'mongoose';
import {Document} from 'mongoose'

@Schema()
export class Country extends Document{
    @Prop()
    country:string;

    @Prop()
    detailsOfCountry: string

}

export const CountrySchema = SchemaFactory.createForClass(Country);