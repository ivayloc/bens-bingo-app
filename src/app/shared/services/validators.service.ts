import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UserRegistrationService } from './user-registration.service';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor(private userRegistration: UserRegistrationService) {}

  password(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userRegistration.validatePassword(control.value).pipe(
        map((data) => {
          if ('message' in data && !data.valid) {
            return { password: data.message };
          }
          return null;
        })
      );
    };
  }

  email(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userRegistration.validateEmail(control.value).pipe(
        map((data) => {
          if ('message' in data && !data.valid) {
            return { invalidEmail: data.message };
          }
          return null;
        })
      );
    };
  }

  username(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userRegistration.validateUsername(control.value).pipe(
        map((data) => {
          if ('message' in data && !data.valid) {
            return { username: data.message };
          }
          return null;
        })
      );
    };
  }
}
