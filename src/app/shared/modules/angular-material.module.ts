import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDateFnsModule } from '@angular/material-date-fns-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { enGB } from 'date-fns/locale';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatDialogModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDateFnsModule,
    MatCheckboxModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: enGB },
    // {
    //   provide: DateAdapter,
    //   useClass: MomentDateAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    // },
    // { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AngularMaterialModule {}
