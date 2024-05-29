import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Cambia esta URL por la de tu base de datos MongoDB
    ClientsModule,
  ],
})
export class AppModule {}
