import { NestFactory } from '@nestjs/core';

import { Carts101Module } from './carts101.module';

const bootstrap = async () => {
    const app = await NestFactory.create(Carts101Module);
    await app.listen(3000);
}

bootstrap();