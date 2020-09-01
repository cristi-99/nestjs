import { Module } from "@nestjs/common";
import { ConstDto } from "./const.dto";

@Module({
    providers:[ ConstDto],
    exports: [ConstDto]
})

export class ConstDtoModule{}
