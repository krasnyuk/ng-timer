import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat'
})
export class TimerFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return this.msToHMS(value);
  }

  private msToHMS(ms): string {
    let seconds: number = ms / 1000;
    let hours: number = parseInt((seconds / 3600).toString());
    seconds = seconds % 3600;
    let minutes: number = parseInt((seconds / 60).toString());
    seconds = seconds % 60;
    return this.formatNumber(hours) + ':' + this.formatNumber(minutes) + ':' + this.formatNumber(seconds);
  }

  private formatNumber(value: string | number): string | number {
    return (value < 10) ? '0' + value : value;
  }

}
