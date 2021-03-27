import { Component } from '@angular/core';
import { Observable, Subscription, from } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent{

  number = [1,2,3,4,5];
  numberObs$ = from(this.number);


  obs$ = new Observable((observer) => {
    setTimeout(() => {
      observer.next('First Package')
    }, 2000);
    setTimeout(() => {
      observer.next('Second Package')
    }, 4000);
    setTimeout(() => {
      observer.next('Third Package')
    }, 6000);
    setTimeout(() => {
      //observer.next('Fourth Package')
      observer.error(new Error('something bas happend.....'));
    }, 9000);
    setTimeout(() => {
      observer.complete()
    }, 10000);
  });

  packages : Array<string> = [];
  unsub$ : Subscription;
  unSubNumber$ : Subscription;

  onSub() {

    this.unSubNumber$ = this.numberObs$
    .pipe(map(val => val*2))
    .pipe(tap(value => console.log("TAP", value)))
    .pipe(take(2))
    .subscribe(value => console.log(value));


    this.unsub$ = this.obs$.subscribe(
      (data: string) => {
        this.packages.push(data);
      },
      (err) => {
        console.error(err);
      },
      () => {
        console.log('[COMPLETED]');
      }
    );
  }

  onUnsub(){
    this.unsub$.unsubscribe();
    this.unSubNumber$.unsubscribe();
  }


}
