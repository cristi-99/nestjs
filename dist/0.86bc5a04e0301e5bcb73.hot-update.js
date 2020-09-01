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
const _1598535373755_Roles_1 = __webpack_require__(48);
const const_dto_1 = __webpack_require__(49);
const const_module_1 = __webpack_require__(50);
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
                    port: constDto.PORT,
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


/***/ })

};