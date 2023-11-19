import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS,  HttpClientModule } from '@angular/common/http';
import { AppInterceptor } from './services/app-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: true,
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskDirective, NgxMaskPipe

  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true,
  },provideNgxMask(maskConfig)],
  bootstrap: [AppComponent]
})
export class AppModule { }
