exports.id = 0;
exports.modules = {

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadFileModule = void 0;
const common_1 = __webpack_require__(7);
const readFile_controller_1 = __webpack_require__(12);
const readFile_service_1 = __webpack_require__(14);
const mongoose_1 = __webpack_require__(10);
const country_schema_1 = __webpack_require__(17);
const population_schema_1 = __webpack_require__(19);
const top_controller_1 = __webpack_require__(21);
const top_service_1 = __webpack_require__(22);
const nest_csv_parser_1 = __webpack_require__(20);
const view_controller_1 = __webpack_require__(26);
const countries_controller_1 = __webpack_require__(58);
const countries_service_1 = __webpack_require__(59);
let ReadFileModule = class ReadFileModule {
};
ReadFileModule = __decorate([
    common_1.Module({
        imports: [
            nest_csv_parser_1.CsvModule,
            mongoose_1.MongooseModule.forFeature([{ name: country_schema_1.Country.name, schema: country_schema_1.CountrySchema }, { name: population_schema_1.Population.name, schema: population_schema_1.PopulationSchema }]),
        ],
        controllers: [readFile_controller_1.ReadFileController, top_controller_1.TopController, view_controller_1.ViewController, countries_controller_1.CountriesController],
        providers: [readFile_service_1.ReadFileService, top_service_1.TopService, countries_service_1.CountriesService],
    })
], ReadFileModule);
exports.ReadFileModule = ReadFileModule;


/***/ }),

/***/ 58:
/***/ (function(module, exports) {



/***/ }),

/***/ 59:
/***/ (function(module, exports) {



/***/ })

};