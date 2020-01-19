import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../call-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.scss']
})
export class OkComponent implements OnInit {

  currentProduct

  isValid

  constructor(private callApiService: CallApiService, private router: Router) { }

  ngOnInit() {
    this.currentProduct = this.callApiService.productScan

    if (!this.currentProduct) {
      this.router.navigateByUrl("/")
    } else {
      if (this.currentProduct.allergens.length !== 0 && this.currentProduct.traces.length !== 0) {
        this.isValid = false
      } else {
        this.isValid = true
      }
    }


  }

}
