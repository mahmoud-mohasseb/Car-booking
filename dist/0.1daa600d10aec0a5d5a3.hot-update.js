"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 17:
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CarsResolver = void 0;
const graphql_1 = __webpack_require__(10);
const Car_service_1 = __webpack_require__(16);
const NewCarInput_1 = __webpack_require__(18);
const Car_entity_1 = __webpack_require__(15);
let CarsResolver = class CarsResolver {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async cars() {
        return await this.carsService.getAllCars().catch((err) => {
            throw err;
        });
    }
    async addNewCar(newCarData) {
        return await this.carsService.addCar(newCarData).catch((err) => {
            throw err;
        });
    }
};
__decorate([
    (0, graphql_1.Query)(() => [Car_entity_1.Car]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], CarsResolver.prototype, "cars", null);
__decorate([
    (0, graphql_1.Mutation)(() => Car_entity_1.Car),
    __param(0, (0, graphql_1.Args)('newCarData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof NewCarInput_1.NewCarInput !== "undefined" && NewCarInput_1.NewCarInput) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CarsResolver.prototype, "addNewCar", null);
CarsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [typeof (_d = typeof Car_service_1.CarsService !== "undefined" && Car_service_1.CarsService) === "function" ? _d : Object])
], CarsResolver);
exports.CarsResolver = CarsResolver;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("85ff81a3b41a617c74f8")
/******/ })();
/******/ 
/******/ }
;