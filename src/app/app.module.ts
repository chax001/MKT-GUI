import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbgboComponent } from './components/bbgbo/bbgbo.component';
import { BbgboserviceService } from './services/bbgboservice.service';

@NgModule({
  declarations: [
    AppComponent,
    BbgboComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BbgboserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
