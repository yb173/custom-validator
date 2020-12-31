import { AbstractControl, ValidatorFn } from '@angular/forms';

export function mobileOwnerValidator(): ValidatorFn {
  return (fg: AbstractControl): {[key: string]: any} | null => {
    const mobile = fg.get('mobile')?.value;
    const owner = fg.get('owner')?.value;
    return mobile && !owner
      ? {noMobileOwner: {value: true}}
      : null;
  }
}
