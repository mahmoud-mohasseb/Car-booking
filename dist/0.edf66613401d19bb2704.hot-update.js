"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 16:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CarsService = void 0;
const common_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(13);
const typeorm_2 = __webpack_require__(12);
const Car_entity_1 = __webpack_require__(15);
let CarsService = class CarsService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }
    async getAllCars() {
        return await this.carRepository.find({}).catch((err) => {
            throw new common_1.InternalServerErrorException();
        });
    }
    async addCar(newCarData) {
        const newCar = this.carRepository.create(newCarData);
        await this.carRepository.save(newCar).catch((err) => {
            new common_1.InternalServerErrorException();
        });
        return newCar;
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Car_entity_1.Car)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CarsService);
exports.CarsService = CarsService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1daa600d10aec0a5d5a3")
/******/ })();
/******/ 
/******/ }
;