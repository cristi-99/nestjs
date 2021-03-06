exports.id = 0;
exports.modules = {

/***/ 45:
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = __webpack_require__(7);
const auth_service_1 = __webpack_require__(29);
const register_dto_1 = __webpack_require__(46);
const local_auth_guard_1 = __webpack_require__(48);
const requestWithUser_1 = __webpack_require__(49);
const express_1 = __webpack_require__(26);
const requestWithRole_1 = __webpack_require__(56);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registrationData, req) {
        return this.authService.register(registrationData, req.role);
    }
    async logIn(request, response) {
        const { user } = request;
        const cookie = this.authService.getCookieWithJwtToken(user.id);
        response.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        return response.send(user);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()), __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof register_dto_1.default !== "undefined" && register_dto_1.default) === "function" ? _a : Object, typeof (_b = typeof requestWithRole_1.default !== "undefined" && requestWithRole_1.default) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.HttpCode(200),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('login'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof requestWithUser_1.default !== "undefined" && requestWithUser_1.default) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logIn", null);
AuthController = __decorate([
    common_1.Controller('authentication'),
    __metadata("design:paramtypes", [typeof (_e = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _e : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ })

};