import { CarsService } from './Car.service';
import { NewCarInput } from './dto/NewCarInput';
import { Car } from './entities/Car.entity';
export declare class CarsResolver {
    private carsService;
    constructor(carsService: CarsService);
    cars(): Promise<Car[]>;
    addNewCar(newCarData: NewCarInput): Promise<Car>;
}
