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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const Car_service_1 = require("./Car.service");
const NewCarInput_1 = require("./dto/NewCarInput");
const Car_entity_1 = require("./entities/Car.entity");
let CarsResolver = class CarsResolver {
    constructor(carsService) {
        this.carsService = carsService;
    }
    async cars() {
        return await this.carsService.FindallCars().catch((err) => {
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
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "cars", null);
__decorate([
    (0, graphql_1.Mutation)(() => Car_entity_1.Car),
    __param(0, (0, graphql_1.Args)('newCarData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [NewCarInput_1.NewCarInput]),
    __metadata("design:returntype", Promise)
], CarsResolver.prototype, "addNewCar", null);
CarsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Car_service_1.CarsService])
], CarsResolver);
exports.CarsResolver = CarsResolver;
//# sourceMappingURL=cars.resolver.js.map