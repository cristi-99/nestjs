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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesController = void 0;
const common_1 = __webpack_require__(7);
const countries_service_1 = __webpack_require__(59);
const readFile_service_1 = __webpack_require__(14);
let CountriesController = class CountriesController {
    constructor(readFileService, countriesService) {
        this.readFileService = readFileService;
        this.countriesService = countriesService;
        this.logger = new common_1.Logger();
    }
    createCountry() {
        this.countriesService.createCountry();
    }
};
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "createCountry", null);
CountriesController = __decorate([
    common_1.Controller('api/countries'),
    __metadata("design:paramtypes", [typeof (_a = typeof readFile_service_1.ReadFileService !== "undefined" && readFile_service_1.ReadFileService) === "function" ? _a : Object, typeof (_b = typeof countries_service_1.CountriesService !== "undefined" && countries_service_1.CountriesService) === "function" ? _b : Object])
], CountriesController);
exports.CountriesController = CountriesController;


/***/ })

};