import { Controller, Get, Inject } from '@nestjs/common';

import { Carts101Service } from '../services/carts101.service';

@Controller('carts101')
export class Carts101Controller {
    @Inject(Carts101Service)
    private readonly carts101Service: Carts101Service;

    constructor(carts101Service: Carts101Service) {
        this.carts101Service = carts101Service;
    }

    @Get()
    findAll(): string {
        return this.carts101Service.findAll();
    }
}