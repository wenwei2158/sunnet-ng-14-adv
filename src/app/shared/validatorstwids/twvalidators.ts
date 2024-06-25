import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { isNationalIdentificationNumberValid } from "taiwan-id-validator2";


export const twIdvalidator = (errorMessage = '錯誤的身份證字號'): ValidatorFn => (control: AbstractControl): ValidationErrors | null => {

  if (!control.value) {
    return null;
  }

  if (isNationalIdentificationNumberValid(control.value)) {
    return null;
  }

  return {
    twId: {
      errorMessage: errorMessage,
    }
  };
};
