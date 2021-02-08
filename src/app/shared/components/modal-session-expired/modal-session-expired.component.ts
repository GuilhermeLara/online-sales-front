import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../auth-guard/services/auth.service';

@Component({
  selector: 'app-modal-session-expired',
  templateUrl: './modal-session-expired.component.html',
  styleUrls: ['./modal-session-expired.component.scss']
})
export class ModalSessionExpiredComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalSessionExpiredComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: AuthService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
    // this.service.logout();
  }

}