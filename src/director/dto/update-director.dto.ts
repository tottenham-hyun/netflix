import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsEmpty, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateDirectorDto } from './create-director.dto';

export class UpdateDirectorDto extends PartialType(CreateDirectorDto){
}
