import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import e from "express";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/user.service";


@Injectable()

export class RolesGuard implements CanActivate{
    constructor (private reflector: Reflector,
        private jwtSerivice: JwtService,
        private userService: UserService){}

    async canActivate(context:ExecutionContext){
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        
        if(!roles){
            return true;
        }
        
        const request = context.switchToHttp().getRequest();
        
        let token  = request.headers.cookie
        let decoded = this.jwtSerivice.decode(token.replace('Authentication=','').trim())
        const user = await this.userService.getById(decoded["userId"])
        const userRole = user.role.role
        return roles.includes(userRole);
    }
}