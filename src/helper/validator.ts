import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class ValidatorStringToDate implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    if (text === undefined) return false;
    return !!text.match('^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$'); // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return `${args.property} format must be YYYY-MM-DD`;
  }
}
