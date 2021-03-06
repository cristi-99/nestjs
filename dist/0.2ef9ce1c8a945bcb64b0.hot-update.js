exports.id = 0;
exports.modules = {

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = __webpack_require__(7);
const role_controller_1 = __webpack_require__(53);
const role_service_1 = __webpack_require__(39);
const typeorm_1 = __webpack_require__(35);
const role_entity_1 = __webpack_require__(38);
const jwt_1 = __webpack_require__(32);
const config_1 = __webpack_require__(33);
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([role_entity_1.Role]), jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
                    },
                }),
            }),
        ],
        controllers: [role_controller_1.default],
        providers: [role_service_1.RoleService],
        exports: [role_service_1.RoleService]
    })
], RoleModule);
exports.RoleModule = RoleModule;


/***/ })

};