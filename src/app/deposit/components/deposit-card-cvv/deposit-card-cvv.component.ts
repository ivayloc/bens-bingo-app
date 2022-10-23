import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NonNullableFormBuilder,
} from '@angular/forms';
import { PaymentMethod } from 'src/app/shared/models/payment-method';

@Component({
  selector: 'app-deposit-card-cvv',
  templateUrl: './deposit-card-cvv.component.html',
  styleUrls: ['./deposit-card-cvv.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DepositCardCvvComponent,
      multi: true,
    },
  ],
})
export class DepositCardCvvComponent
  implements OnInit, ControlValueAccessor, AfterViewInit
{
  @Input() paymentMethod!: PaymentMethod;
  cvvField = this.fb.control('');

  onChange!: (val: any) => void;
  onTouched!: () => void;

  constructor(private fb: NonNullableFormBuilder) {}

  writeValue(cvv: any): void {
    this.cvvField.setValue(cvv);
  }
  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cvvField.valueChanges.subscribe((cvv) => this.onChange(cvv));
  }
}
