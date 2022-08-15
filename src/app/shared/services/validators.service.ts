import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { UserRegistrationService } from './user-registration.service';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor(private userRegistration: UserRegistrationService) {}

  password(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userRegistration.validatePassword(control.value);
    };
  }
}
