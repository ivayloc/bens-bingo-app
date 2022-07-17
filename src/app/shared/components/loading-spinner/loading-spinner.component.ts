import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() appearance: 'standard' | 'fill' = 'standard';
  showSpinner$ = new Observable<boolean>();

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.showSpinner$ = this.loaderService.isLoading$;
  }
}
