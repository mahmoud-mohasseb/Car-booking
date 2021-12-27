import { Mutation, Resolver, Args, Query } from '@nestjs/graphql';
import { CarsService } from './Car.service';
import { NewCarInput } from './dto/NewCarInput';
import { Car } from './entities/Car.entity';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.FindallCars().catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
}
