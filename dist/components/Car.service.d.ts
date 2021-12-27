import { Repository } from 'typeorm';
import { NewCarInput } from './dto/NewCarInput';
import { Car } from './entities/Car.entity';
export declare class CarsService {
    private carRepository;
    constructor(carRepository: Repository<Car>);
    FindallCars(): Promise<Car[]>;
    addCar(newCarData: NewCarInput): Promise<Car>;
}
