import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  urlOpenFoodFactory = "https://world.openfoodfacts.org/api/v0/product/"

  productSubject = new Subject<any>()

  productScan //Current product scanned

  constructor(private http: HttpClient) { }

  emitProductSubject() {
    this.productSubject.next()
  }

  callOpenFoodFactory(idFoodObject) {
    return this.http.get(`${this.urlOpenFoodFactory}${idFoodObject}.json`).subscribe((produitAPI: any) => {
      if (produitAPI.product) {
        const { product_name, allergens, traces } = produitAPI.product


        let filterElement = el => el.trim().length > 0

        const allergensSplit = allergens.split(',')
        const tracesSplit = traces.split(',')

        const allergensFormatted = allergensSplit.filter(filterElement)
        const tracesFormatted = tracesSplit.filter(filterElement)

        this.productScan = {
          name: product_name,
          allergens: allergensFormatted,
          traces: tracesFormatted
        }
        this.emitProductSubject()
      } else {
        alert('Désolé une erreur est survenue. Merci de contacter le support')
      }
    }, error => {
      console.log(error)
      alert('Désolé une erreur est survenue. Merci de contacter le support')
    });
  }


}
