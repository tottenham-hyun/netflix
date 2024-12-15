import { IsDateString, IsEmpty, IsNotEmpty } from "class-validator";

export class CreateDirectorDto {
    @IsNotEmpty()
    name : string;

    @IsEmpty()
    @IsDateString()
    dob : Date;

    @IsNotEmpty()
    nationality : string;
}
