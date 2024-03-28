import { Module } from '@nestjs/common';

import { Carts101Controller } from './controller/carts101.controller';
import { Carts101Service } from './services/carts101.service';

@Module({
    controllers: [Carts101Controller],
    providers: [Carts101Service]
})
export class Carts101Module {}