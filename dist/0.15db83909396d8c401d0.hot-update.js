exports.id = 0;
exports.modules = {

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = __webpack_require__(7);
const Joi = __webpack_require__(8);
const app_service_1 = __webpack_require__(9);
const mongoose_1 = __webpack_require__(10);
const readFile_module_1 = __webpack_require__(11);
const local_strategy_1 = __webpack_require__(32);
const nest_csv_parser_1 = __webpack_require__(20);
const auth_service_1 = __webpack_require__(34);
const jwt_1 = __webpack_require__(36);
const jwt_auth_guard_1 = __webpack_require__(23);
const jwt_strategy_1 = __webpack_require__(44);
const config_1 = __webpack_require__(37);
const user_module_1 = __webpack_require__(46);
const database_module_1 = __webpack_require__(48);
const auth_module_1 = __webpack_require__(50);
const role_module_1 = __webpack_require__(55);
const core_1 = __webpack_require__(5);
const roles_guard_1 = __webpack_require__(57);
class Service {
    constructor(configService) {
        this.configService = configService;
    }
    getConst(name) {
        return this.configService.get(name);
    }
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            role_module_1.RoleModule,
            user_module_1.UserModule,
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot({
                validationSchema: Joi.object({
                    JWT_SECRET: Joi.string().required(),
                    JWT_EXPIRATION_TIME: Joi.string().required(),
                    POSTGRES_HOST: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_DB: Joi.string().required(),
                    PORT: Joi.number(),
                })
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
                    },
                }),
            }),
            nest_csv_parser_1.CsvModule,
            mongoose_1.MongooseModule.forRoot(new Service(new config_1.ConfigService).getConst('DATABASE_PATH')),
            readFile_module_1.ReadFileModule,
            auth_module_1.AuthModule
        ],
        controllers: [],
        providers: [app_service_1.AppService, auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_auth_guard_1.JwtAuthGuard, jwt_strategy_1.JwtStrategy, config_1.ConfigService, Service, {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            }],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ })

};