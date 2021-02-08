import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MaterialIconsService } from './shared/material/register-icons/material-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-sales';
  private materialIcons: MaterialIconsService;

  constructor(
    public overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    ) {
    overlayContainer.getContainerElement().classList.add('unicorn-dark-theme'); //adicionando classe do tema alternartivo
    this.materialIcons = new MaterialIconsService(this.matIconRegistry, this.domSanitizer);
    this.materialIcons.addIcons();
   }
}
