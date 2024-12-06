import { ApiProperty } from '@nestjs/swagger';
import { Validate } from 'class-validator';
import { NonEmptyStringValidator } from 'src/utilities/validator/non-empty-string';
import { PositiveIntNumberValidator } from 'src/utilities/validator/positive-number';

export class SearchInfoDto {
  @ApiProperty({
    example: 'cute cat',
    required: true,
  })
  @Validate(NonEmptyStringValidator)
  word: string;

  @ApiProperty({
    example: 4,
    required: true,
  })
  @Validate(PositiveIntNumberValidator)
  imageNumber: number;
}
