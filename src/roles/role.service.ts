import { Injectable } from "@nestjs/common";
import { Role } from './role.entity'
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRoleDto } from './dto/createRole.dto'
import { Certificate } from "crypto";

@Injectable()
export class RoleService{
    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ){}

    async getRole(role:string) {
        return await this.roleRepository.findOne({role:role})
    }
}