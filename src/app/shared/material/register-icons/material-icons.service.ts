import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export class MaterialIconsService {

  private matIconRegistry: MatIconRegistry;
  private domSanitizer: DomSanitizer;

  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
  }

  public addIcons(): void {
      /**
       * @example this.matIconRegistry.addSvgIcon('nameSvg', this.domSanitizer.bypassSecurityTrustResourceUrl('value'));
       */
      this.matIconRegistry.addSvgIcon('home', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/home.svg'));
      this.matIconRegistry.addSvgIcon('profile', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/profile.svg'));
      this.matIconRegistry.addSvgIcon('settings', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/settings.svg'));
      this.matIconRegistry.addSvgIcon('notification', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/notification.svg'));
      this.matIconRegistry.addSvgIcon('exit', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/exit.svg'));
      this.matIconRegistry.addSvgIcon('car-check', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/car-check.svg'));
      this.matIconRegistry.addSvgIcon('car-review', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/car-review.svg'));
      this.matIconRegistry.addSvgIcon('settings-check', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/settings-check.svg'));
      this.matIconRegistry.addSvgIcon('security', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/security.svg'));
      this.matIconRegistry.addSvgIcon('chevron_direita', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../assets/images/icons/chevron_direita.svg'));
  }

}
