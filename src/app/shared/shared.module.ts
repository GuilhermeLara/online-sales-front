import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notifications/notification.service';
import { MaterialModule } from './material/material.module';
import { ValidationTokenActived } from './interceptors/validation-token-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalSessionExpiredComponent } from './components/modal-session-expired/modal-session-expired.component';



@NgModule({
  declarations: [ModalSessionExpiredComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    NotificationService,
    ValidationTokenActived
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    }
  }
}
