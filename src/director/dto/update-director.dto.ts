import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsEmpty, IsNotEmpty } from 'class-validator';
import { CreateDirectorDto } from './create-director.dto';

export class UpdateDirectorDto {
    @IsNotEmpty()
    name ?: string;

    @IsEmpty()
    @IsDateString()
    dob ?: Date;

    @IsNotEmpty()
    nationality ?: string;
}
