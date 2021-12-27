import { Repository } from 'typeorm';
import { Carstable } from './photo.entity';
export declare class PhotoService {
    private photoRepository;
    constructor(photoRepository: Repository<Carstable>);
    findAll(): Promise<Carstable[]>;
}
