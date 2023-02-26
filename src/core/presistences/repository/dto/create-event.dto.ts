import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ValidatorStringToDate } from '../../../../helper';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'name event' })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Validate(ValidatorStringToDate)
  @ApiProperty({ type: String, description: 'datetime event' })
  readonly date: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'location event' })
  readonly location: string;

  banner!: string;
  slug!: string;
}
