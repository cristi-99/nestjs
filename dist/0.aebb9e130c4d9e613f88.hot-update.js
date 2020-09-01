exports.id = 0;
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(38);
const config_1 = __webpack_require__(36);
const user_entity_1 = __webpack_require__(40);
const role_entity_1 = __webpack_require__(41);
const _1598535373755_Roles_1 = __webpack_require__(59);
const const_dto_1 = __webpack_require__(60);
const const_module_1 = __webpack_require__(61);
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule, const_module_1.ConstDtoModule],
                inject: [config_1.ConfigService, const_dto_1.ConstDto],
                useFactory: (configService, constDto) => ({
                    type: 'postgres',
                    host: constDto.POSTGRES_HOST,
                    port: constDto.POSTGRES_PORT,
                    username: constDto.POSTGRES_USER,
                    password: constDto.POSTGRES_PASSWORD,
                    database: constDto.POSTGRES_DB,
                    synchronize: true,
                    migrations: [_1598535373755_Roles_1.Roles1598535373755],
                    migrationsRun: true,
                    entities: [user_entity_1.User, role_entity_1.Role],
                }),
            }),
        ],
        providers: [const_dto_1.ConstDto]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles1598535373755 = void 0;
const role_entity_1 = __webpack_require__(41);
class Roles1598535373755 {
    async up(queryRunner) {
        const roleTable = queryRunner.connection.getRepository(role_entity_1.Role);
        await roleTable.insert([
            { id: 1, role: 'Administrator' },
            { id: 2, role: 'Employee' },
            { id: 3, role: 'Guest' },
        ]);
    }
    async down(queryRunner) { }
}
exports.Roles1598535373755 = Roles1598535373755;


/***/ }),

/***/ 60:
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
exports.ConstDto = void 0;
const config_1 = __webpack_require__(36);
const class_validator_1 = __webpack_require__(30);
const common_1 = __webpack_require__(7);
let ConstDto = class ConstDto {
    constructor(config) {
        this.JWT_SECRET = config.get('JWT_SECRET');
        this.JWT_EXPIRATION_TIME = config.get('JWT_EXPIRATION_TIME');
        this.POSTGRES_HOST = config.get('POSTGRES_HOST');
        this.POSTGRES_PORT = config.get('POSTGRES_PORT');
        this.POSTGRES_USER = config.get('POSTGRES_USER');
        this.POSTGRES_PASSWORD = config.get('POSTGRES_PASSWORD');
        this.PORT = config.get('PORT');
        this.POSTGRES_DB = config.get('POSTGRES_DB');
        const errors = class_validator_1.validate(this);
        console.log(errors);
    }
    valid() {
    }
};
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
ConstDto = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], ConstDto);
exports.ConstDto = ConstDto;


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstDtoModule = void 0;
const common_1 = __webpack_require__(7);
const const_dto_1 = __webpack_require__(60);
let ConstDtoModule = class ConstDtoModule {
};
ConstDtoModule = __decorate([
    common_1.Module({
        providers: [const_dto_1.ConstDto],
        exports: [const_dto_1.ConstDto]
    })
], ConstDtoModule);
exports.ConstDtoModule = ConstDtoModule;


/***/ })

};