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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(9);
const country_schema_1 = __webpack_require__(16);
const mongoose_2 = __webpack_require__(17);
const population_schema_1 = __webpack_require__(18);
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
        await this.CountryModel.findOne({ id: data.id })
            .then((response) => {
            if (!response)
                throw new common_1.HttpException('Country does not exist', common_1.HttpStatus.BAD_REQUEST);
            const id = { _id: response.detailsOfCountry };
            this.PopulationModel.update(id, { year: newYear, population: newPopulation }, (err, result) => {
                console.log(id);
                if (err)
                    throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                else
                    res.status(200).send({
                        message: `Population of ${data.country_name} was edited`,
                    });
            });
        })
            .catch((err) => {
            throw new common_1.HttpException(err, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        });
    }
    async deleteCountry(countryToDelete, res) {
        countryToDelete = countryToDelete.id;
        try {
            const country = await this.CountryModel.findOne({ _id: countryToDelete });
            if (!country)
                return res.status(400).send({ message: "Country not found" });
            country.deleteOne();
            let popDeleted = await this.PopulationModel.deleteOne({
                _id: country.detailsOfCountry,
            });
            return res.status(200).send({ message: `Country ${country.country} has been deleted` });
        }
        catch (_a) {
            (err) => {
                return res.status(500).send({ message: err });
            };
        }
    }
    getPopulation(id) {
        this.PopulationModel.findById({ _id: id }).then((res) => {
            return res;
        });
    }
    async GetAllCountries() {
        let result = [];
        await this.CountryModel.find({}).then((response) => {
            result = response;
        });
        let val = [];
        for (let i = 0; i < result.length; i++) {
            await this.PopulationModel.findById({
                _id: result[i].detailsOfCountry,
            }).then((res) => {
                val.push([result[i], res]);
            });
        }
        return val;
    }
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