import { Movie } from './movie.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MovieDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    detail: string;

    @OneToOne(
        ()=>Movie,
        movie => movie.id
    )
    movie:Movie;
}