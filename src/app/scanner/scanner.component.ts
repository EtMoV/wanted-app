import { Component, OnInit, OnDestroy } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { Subscription } from 'rxjs';
import { CallApiService } from '../call-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit, OnDestroy {

  allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/];

  private productSubscription: Subscription;

  constructor(private callApiService: CallApiService, private router: Router) { }

  ngOnInit() {
    this.productSubscription = this.callApiService.productSubject.subscribe(
      () => {
        this.router.navigateByUrl("/ok");
      }
    );

    // For dev only
    //let numberTest = 3017760314497 //3068320080000 3017760314497
    //this.callApiService.callOpenFoodFactory(numberTest)
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }

  // Scan Handler
  scanSuccessHandler(number) {
    this.callApiService.callOpenFoodFactory(number)
  }

}
