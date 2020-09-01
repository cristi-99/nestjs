exports.id = 0;
exports.modules = {

/***/ 58:
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const common_1 = __webpack_require__(7);
const countries_service_1 = __webpack_require__(59);
const readFile_service_1 = __webpack_require__(14);
const express_1 = __webpack_require__(27);
let CountriesController = class CountriesController {
    constructor(readFileService, countriesService) {
        this.readFileService = readFileService;
        this.countriesService = countriesService;
        this.logger = new common_1.Logger();
    }
    createCountry(req, res) {
        this.countriesService.createCountry(req.body, res);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "createCountry", null);
CountriesController = __decorate([
    common_1.Controller('api/countries'),
    __metadata("design:paramtypes", [typeof (_c = typeof readFile_service_1.ReadFileService !== "undefined" && readFile_service_1.ReadFileService) === "function" ? _c : Object, typeof (_d = typeof countries_service_1.CountriesService !== "undefined" && countries_service_1.CountriesService) === "function" ? _d : Object])
], CountriesController);
exports.CountriesController = CountriesController;


/***/ })

};