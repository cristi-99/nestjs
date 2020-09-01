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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = __webpack_require__(7);
const core_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(32);
let RolesGuard = class RolesGuard {
    constructor(reflector, jwtSerivice) {
        this.reflector = reflector;
        this.jwtSerivice = jwtSerivice;
    }
    canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        let token = request.headers.cookie;
        let decoded = this.jwtSerivice.decode(token.replace('Authorization', '').trim());
        console.log(request.cookie);
        console.log(request.headers);
        console.log(request.Cookie);
        const hasRole = () => user.roles.some((role) => roles.includes(role));
        return user && user.roles && hasRole();
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], RolesGuard);
exports.RolesGuard = RolesGuard;


/***/ })

};