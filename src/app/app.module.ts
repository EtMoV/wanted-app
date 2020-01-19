import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { OkComponent } from './ok/ok.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    OkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
