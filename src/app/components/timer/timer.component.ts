import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  public currentTime = 0;
  public timerIsActive = false;
  private timerInterval = 1000;
  private timerSource$: Observable<number>;
  private timerSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.timerSource$ = timer(0, this.timerInterval);
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  public toggleTimer(): void {
    if (this.timerIsActive) {
      this.timerSubscription.unsubscribe();
    } else {
      this.timerSubscription = this.timerSource$.subscribe(value => {
        this.currentTime += this.timerInterval;
      });
    }
    this.timerIsActive = !this.timerIsActive;
  }

  public pauseTimer(): void {
    this.timerIsActive = false;
    this.timerSubscription.unsubscribe();
  }

  public resetTimer(): void {
    this.currentTime = 0;
  }
}
