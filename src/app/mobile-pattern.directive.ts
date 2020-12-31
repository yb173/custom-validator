import { AbstractControl, ValidatorFn } from '@angular/forms';

export function mobilePatternValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const regExp = /^0[789]0[0-9]{4}[0-9]{4}$/;
    const matched = regExp.test(control.value);
    return matched ? {ummatchedPattern: {value: control.value}} : null;
  }
}
