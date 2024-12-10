import { Exclude, Expose, Transform } from "class-transformer";

export class Movie {
    // id: number;
    // title: string;

    // @Transform(
    //     ({value}) => value.toString().toUpperCase(),
    // )
    // genre : string;
    id: number;
    title: string;

    @Expose()
    @Exclude()
    genre : string;
  }