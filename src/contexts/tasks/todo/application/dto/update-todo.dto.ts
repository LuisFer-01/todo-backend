import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateTodoDto {
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title?: string;

    @IsBoolean()
    @IsOptional()
    completed?: boolean;
}
