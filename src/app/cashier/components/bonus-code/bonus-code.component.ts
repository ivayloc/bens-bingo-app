import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CashierPageActions } from '../../state/actions';

@Component({
  selector: 'app-bonus-code',
  templateUrl: './bonus-code.component.html',
  styleUrls: ['./bonus-code.component.scss'],
})
export class BonusCodeComponent {
  bonusCodeForm = this.fb.group({ code: ['', Validators.required] });

  public get bonusCodeField(): UntypedFormControl {
    return this.bonusCodeForm.get('code') as UntypedFormControl;
  }

  constructor(private store: Store, private fb: UntypedFormBuilder) {}

  submitCode() {
    const code = this.bonusCodeField.value;
    this.store.dispatch(CashierPageActions.redeemBonusCode({ code }));
  }
}
