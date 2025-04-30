import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  teacherName: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
