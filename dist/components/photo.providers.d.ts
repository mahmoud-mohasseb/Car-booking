import { Connection } from 'typeorm';
import { Carstable } from './photo.entity';
export declare const photoProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Carstable>;
    inject: string[];
}[];
