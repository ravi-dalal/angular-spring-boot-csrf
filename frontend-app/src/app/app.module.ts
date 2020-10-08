import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule} from '@angular/common/http';
import { AppComponent } from './app.component';
//import { Routes, RouterModule } from '@angular/router';
import { CsrfHttpInterceptor } from 'src/services/CsrfHttpInterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CsrfHttpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
