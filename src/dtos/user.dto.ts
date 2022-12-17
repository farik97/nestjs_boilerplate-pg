import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GetUserDto {
    @IsNotEmpty()
    @IsString()
    device_token: string;

    @IsNotEmpty()
    @IsString()
    lat: string;

    @IsNotEmpty()
    @IsString()
    lon: string;
}