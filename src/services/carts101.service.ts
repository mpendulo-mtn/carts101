import { Injectable } from '@nestjs/common';

@Injectable()
export class Carts101Service {
    findAll(): string {
        return 'Hello from carts101 service';
    }
}