import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class NotificationService {
    constructor() { }

    public firstToken = new BehaviorSubject<string>(null);
    public firstTokens = this.firstToken.asObservable();

    public slide = new BehaviorSubject<string>(null);
    public slides = this.slide.asObservable();

    public setFirstToken(value): void {
        this.firstToken.next(value);
        console.log(value);
    }

    public setSlideValue(value): void {
        this.slide.next(value);
    }
}