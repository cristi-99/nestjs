exports.id = 0;
exports.modules = {

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(5);
const app_module_1 = __webpack_require__(6);
const hbs = __webpack_require__(59);
const path = __webpack_require__(60);
const cookieParser = __webpack_require__(61);
const common_1 = __webpack_require__(7);
const const_dto_1 = __webpack_require__(58);
const config_1 = __webpack_require__(37);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setViewEngine('hbs');
    hbs.registerPartials(path.join(__dirname, '../views/partials'));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    new const_dto_1.ConstDto(new config_1.ConfigService);
    await app.listen(3000);
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();


/***/ })

};