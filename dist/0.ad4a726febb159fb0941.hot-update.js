exports.id = 0;
exports.modules = {

/***/ 29:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(10);
const country_schema_1 = __webpack_require__(17);
const mongoose_2 = __webpack_require__(18);
const population_schema_1 = __webpack_require__(19);
let CountriesService = class CountriesService {
    constructor(PopulationModel, CountryModel) {
        this.PopulationModel = PopulationModel;
        this.CountryModel = CountryModel;
    }
    createCountry(data, res) {
        console.log(data);
        const PopulationToDB = new this.PopulationModel({
            year: data.year,
            population: data.population,
        });
        const CountryToDB = new this.CountryModel({
            country: data.country_name,
            detailsOfCountry: PopulationToDB.id,
        });
        PopulationToDB.save((err) => {
            if (err)
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
        CountryToDB.save((err) => {
            if (err)
                throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
        return res.status(200).send({ message: 'Data saved' });
    }
    async updateCountryPopulation(data, res) {
        const newPopulation = data.population;
        const newYear = data.year;
        const newData = { newPopulation, newYear };
        await this.CountryModel.findOne({ country: data.country_name })
            .then((response) => {
            const id = { _id: response.detailsOfCountry };
            this.PopulationModel.update(id, { year: newYear, population: newPopulation }, (err, result) => {
                console.log(id);
                if (err)
                    throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                else
                    res
                        .status(200)
                        .send({
                        message: `Population of ${data.country_name} was edited`,
                    });
            });
        })
            .catch((err) => {
            throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
    deleteCountry(countryToDelete) { }
};
CountriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(population_schema_1.Population.name)),
    __param(1, mongoose_1.InjectModel(country_schema_1.Country.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], CountriesService);
exports.CountriesService = CountriesService;


/***/ })

};