import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatDateFnsModule,
  MAT_DATE_FNS_FORMATS,
} from '@angular/material-date-fns-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatRippleModule,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { enGB } from 'date-fns/locale';

const dateFormats = {
  parse: {
    dateInput: 'yyyy-MM-dd',
  },
  display: {
    dateInput: 'yyyy-MM-dd',
    monthYearLabel: 'MM yyyy',
    dateA11yLabel: 'yyyy-MM-dd',
    monthYearA11yLabel: 'MM yyyy',
  },
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatCheckboxModule,
    MatDateFnsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: enGB },
    {
      provide: MAT_DATE_FORMATS,
      useValue: dateFormats,
    },
  ],
})
export class AngularMaterialModule {}
