import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/NewCarInput';
import { Car } from './entities/Car.entity';

// service that would inject data comes from entities to database
@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}
  // getting all from database cars
  public async FindallCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }
  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });
    return newCar;
  }
}
