import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/notifications/notification.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  public changeImg: any;

  constructor(
    private $notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.getChangeImage();
  }

  public getChangeImage(): void {
    this.$notification.slides.subscribe((res) => {
      this.changeImg = res;
      console.log(res);
    });
  }

}
