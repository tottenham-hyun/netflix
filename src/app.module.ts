import { Movie } from './movie/entity/movie.entity';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import * as Joi from 'joi';
import { MovieDetail } from './movie/entity/movie-detail.entity';
import { DirectorModule } from './director/director.module';
import { Director } from './director/entity/director.entity';
import { GenreModule } from './genre/genre.module';
import { Genre } from './genre/entities/genre.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      validationSchema : Joi.object({
        ENV : Joi.string().valid('dev','prod').required(),
        DB_TYPE : Joi.string().valid('postgres').required(),
        DB_HOST : Joi.string().required(),
        DB_PORT : Joi.number().required(),
        DB_USERNAME : Joi.string().required(),
        DB_PASSWORD : Joi.string().required(),
        DB_DATABASE : Joi.string().required(),
        HASH_ROUNDS : Joi.number().required()
      })
    }),
    TypeOrmModule.forRootAsync({
      useFactory:(configService: ConfigService)=>({
        type : configService.get<string>('DB_TYPE') as "postgres",
        host : configService.get<string>('DB_HOST'),
        port : configService.get<number>('DB_PORT'),
        username : configService.get<string>('DB_USERNAME'),
        password : configService.get<string>('DB_PASSWORD'),
        database : configService.get<string>('DB_DATABASE'),
        entities : [
          Movie,
          MovieDetail,
          Director,
          Genre,
          User
        ],
        synchronize : true, // 개발때만 true 켜놓음
      }),
      inject: [ConfigService]
    }),

    // TypeOrmModule.forRoot({
    //   type : process.env.DB_TYPE as "postgres",
    //   host : process.env.DB_HOST,
    //   port : parseInt(process.env.DB_PORT),
    //   username : process.env.DB_USERNAME,
    //   password : process.env.DB_PASSWORD,
    //   database : process.env.DB_DATABASE,
    //   entities : [],
    //   synchronize : true, // 개발때만 true 켜놓음
    // }),
    MovieModule,

    DirectorModule,

    GenreModule,

    AuthModule,

    UserModule,
  ],
})
export class AppModule {}
