import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'UsernameValidator', async: false })
export class UsernameValidator implements ValidatorConstraintInterface {
  validate(username: string, args: ValidationArguments): boolean {
    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    return usernamePattern.test(username);
  }

  defaultMessage(args: ValidationArguments): string {
    return 'Username must be 3-20 characters long and contain only letters and numbers.';
  }
}
