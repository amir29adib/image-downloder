import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'PasswordValidator', async: false })
export class PasswordValidator implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments): boolean {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,50}$/;
    return passwordPattern.test(password);
  }

  defaultMessage(args: ValidationArguments): string {
    return 'Password must be 6-50 characters long, include at least one uppercase letter, one lowercase letter, and one number.';
  }
}
