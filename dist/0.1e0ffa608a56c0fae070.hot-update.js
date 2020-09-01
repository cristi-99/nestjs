exports.id = 0;
exports.modules = {

/***/ 28:
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const common_1 = __webpack_require__(7);
const countries_service_1 = __webpack_require__(29);
const readFile_service_1 = __webpack_require__(14);
const express_1 = __webpack_require__(27);
const createCountry_dto_1 = __webpack_require__(30);
let CountriesController = class CountriesController {
    constructor(readFileService, countriesService) {
        this.readFileService = readFileService;
        this.countriesService = countriesService;
        this.logger = new common_1.Logger();
    }
    createCountry(body, res) {
        this.countriesService.createCountry(body, res);
    }
    updateCountryPopulation(body, res) {
        return this.countriesService.updateCountryPopulation(body, res);
    }
    deleteCountry(countryToDelete, res) {
        this.countriesService.deleteCountry(countryToDelete, res);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof createCountry_dto_1.CreateCountryDto !== "undefined" && createCountry_dto_1.CreateCountryDto) === "function" ? _a : Object, typeof (_b = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "createCountry", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof createCountry_dto_1.CreateCountryDto !== "undefined" && createCountry_dto_1.CreateCountryDto) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "updateCountryPopulation", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "deleteCountry", null);
CountriesController = __decorate([
    common_1.Controller('api/countries'),
    __metadata("design:paramtypes", [typeof (_f = typeof readFile_service_1.ReadFileService !== "undefined" && readFile_service_1.ReadFileService) === "function" ? _f : Object, typeof (_g = typeof countries_service_1.CountriesService !== "undefined" && countries_service_1.CountriesService) === "function" ? _g : Object])
], CountriesController);
exports.CountriesController = CountriesController;


/***/ })

};