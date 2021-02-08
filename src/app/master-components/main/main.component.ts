import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notifications/notification.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private $notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.setSlide(true);
  }

  public setSlide(value): void {
    this.$notification.setSlideValue(value);
  }
}
