import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'PositiveIntNumberValidator', async: false })
export class PositiveIntNumberValidator
  implements ValidatorConstraintInterface
{
  validate(value: number, args: ValidationArguments): boolean {
    return Number.isInteger(value) && value > 0;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'number must be integer and greater than 0.';
  }
}
