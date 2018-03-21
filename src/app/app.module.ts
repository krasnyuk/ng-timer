import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TimerComponent} from './components/timer/timer.component';
import {DebounceClickDirective} from './directives/debounce-click.directive';
import { TimerFormatPipe } from './pipes/timer-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DebounceClickDirective,
    TimerFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
