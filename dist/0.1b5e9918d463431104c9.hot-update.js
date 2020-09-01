exports.id = 0;
exports.modules = {

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(7);
const core_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(32);
const user_service_1 = __webpack_require__(34);
let RolesGuard = class RolesGuard {
    constructor(reflector, jwtSerivice, userService) {
        this.reflector = reflector;
        this.jwtSerivice = jwtSerivice;
        this.userService = userService;
    }
    async canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        let token = request.headers.cookie;
        let decoded = this.jwtSerivice.decode(token.replace('Authentication=', '').trim());
        const user = await this.userService.getById(decoded["userId"]);
        const userRole = user.role.role;
        console.log(roles);
        console.log(roles.includes(userRole));
        return roles.includes(userRole);
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object])
], RolesGuard);
exports.RolesGuard = RolesGuard;


/***/ })

};