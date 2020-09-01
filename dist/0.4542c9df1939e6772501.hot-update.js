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
const app_controller_1 = __webpack_require__(8);
const app_service_1 = __webpack_require__(18);
const mongoose_1 = __webpack_require__(13);
const readFile_module_1 = __webpack_require__(19);
const local_strategy_1 = __webpack_require__(33);
const nest_csv_parser_1 = __webpack_require__(27);
const auth_service_1 = __webpack_require__(11);
const userModel_1 = __webpack_require__(12);
const jwt_1 = __webpack_require__(16);
const auth_config_1 = __webpack_require__(35);
const jwt_auth_guard_1 = __webpack_require__(30);
const jwt_strategy_1 = __webpack_require__(36);
const config_1 = __webpack_require__(17);
const typeorm_1 = __webpack_require__(38);
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
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'admin',
                password: 'admin',
                database: 'nestjs',
                entities: [],
                synchronize: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            jwt_1.JwtModule.register({
                secret: auth_config_1.authSecret.secret,
                signOptions: { expiresIn: '60s' },
            }),
            nest_csv_parser_1.CsvModule,
            mongoose_1.MongooseModule.forRoot(new Service(new config_1.ConfigService).getConst('DATABASE_PATH')),
            readFile_module_1.ReadFileModule,
            mongoose_1.MongooseModule.forFeature([{ name: userModel_1.Users.name, schema: userModel_1.UserSchema }]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_auth_guard_1.JwtAuthGuard, jwt_strategy_1.JwtStrategy, config_1.ConfigService, Service],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ })

};