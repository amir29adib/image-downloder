import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'NonEmptyStringValidator', async: false })
export class NonEmptyStringValidator implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments): boolean {
    return value.length > 0;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'string must contain charactors and have length more than 0.';
  }
}
