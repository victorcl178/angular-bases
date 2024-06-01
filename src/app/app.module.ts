import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CounterModule} from './counter/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './heroes/Hero.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
