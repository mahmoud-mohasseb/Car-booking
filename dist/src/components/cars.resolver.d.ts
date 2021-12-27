import { CarsService } from './Car.service';
import { NewCarInput } from './entities/NewCarInput';
import { Car } from './entities/Car';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<Car[]>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
}
