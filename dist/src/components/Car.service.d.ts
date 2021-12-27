import { Repository } from 'typeorm';
import { NewCarInput } from './entities/NewCarInput';
import { Car } from './entities/Car';
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    getAllCars(): Promise<Car[]>;
    addCar(newCarData: NewCarInput): Promise<Car>;
}
