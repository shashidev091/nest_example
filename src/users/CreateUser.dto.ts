import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, isNumber, IsNumber, IsNumberString, IsString, ValidateNested } from "class-validator";


export class CreateAddressDto {
    @IsString()
    address1: string;

    @IsString()
    address2: string;

    @IsNumber()
    pincode: number;

    @IsString()
    state: string;

    @IsString()
    district: string;

    @IsString()
    country: string;
}

export class CreateUserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;
}