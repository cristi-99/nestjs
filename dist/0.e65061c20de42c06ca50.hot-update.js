exports.id = 0;
exports.modules = {

/***/ 61:
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstDto = void 0;
const class_validator_1 = __webpack_require__(31);
class ConstDto {
    constructor(config) {
        console.log('here');
        this.JWT_SECRET = config.get('JWT_SECRET');
        this.JWT_EXPIRATION_TIME = config.get('JWT_EXPIRATION_TIME');
        this.POSTGRES_HOST = config.get('POSTGRES_HOST');
        this.POSTGRES_PORT = config.get('POSTGRES_PORT');
        this.POSTGRES_USER = config.get('POSTGRES_USER');
        this.POSTGRES_PASSWORD = config.get('POSTGRES_PASSWORD');
        this.PORT = config.get('PORT');
        this.POSTGRES_DB = config.get('POSTGRES_DB');
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ConstDto.prototype, "JWT_SECRET", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ConstDto.prototype, "JWT_EXPIRATION_TIME", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ConstDto.prototype, "POSTGRES_HOST", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ConstDto.prototype, "POSTGRES_PORT", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ConstDto.prototype, "POSTGRES_USER", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ConstDto.prototype, "POSTGRES_PASSWORD", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ConstDto.prototype, "POSTGRES_DB", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ConstDto.prototype, "PORT", void 0);
exports.ConstDto = ConstDto;


/***/ })

};