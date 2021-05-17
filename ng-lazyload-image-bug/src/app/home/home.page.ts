import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { merge, Observable, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slide') slide: IonSlides;
  public spiner: string = "assets/img/spiner.svg";
  public error: string = "assets/img/error.svg";
  public images: string[] = [
    'https://images.unsplash.com/photo-1422004707501-e8dad229e17a?fm=jpg',
    'https://images.unsplash.com/photo-1439931444800-9bcc83f804a6?fm=jpg',
    'https://images.unsplash.com/photo-1417128281290-30a42da46277?fm=jpg',
  ];

  customerObervable$: Observable<any>;
  customerSubject$: Subject<any> = new Subject<any>();

  constructor() {
  }

  onSlideDidLoadHandler() {
    this.slide.update();
    this.customerObervable$ = merge(
      this.slide.ionSlideWillChange,
      this.customerSubject$
    );
    this.customerSubject$.next();
  }

  onSlideWillChangeHandler() {
    this.customerSubject$.next();
  }
}
