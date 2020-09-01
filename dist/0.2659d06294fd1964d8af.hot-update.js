exports.id = 0;
exports.modules = {

/***/ 21:
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopController = void 0;
const common_1 = __webpack_require__(7);
const top_service_1 = __webpack_require__(22);
const jwt_auth_guard_1 = __webpack_require__(23);
const roles_decorator_1 = __webpack_require__(25);
let TopController = class TopController {
    constructor(topService) {
        this.topService = topService;
        this.logger = new common_1.Logger();
    }
    async getTop() {
        await this.topService.getTop();
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    roles_decorator_1.Roles('Administrator'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TopController.prototype, "getTop", null);
TopController = __decorate([
    common_1.Controller('api/top'),
    __metadata("design:paramtypes", [typeof (_a = typeof top_service_1.TopService !== "undefined" && top_service_1.TopService) === "function" ? _a : Object])
], TopController);
exports.TopController = TopController;


/***/ })

};