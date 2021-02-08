import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { NotificationService } from "../notifications/notification.service";

@Injectable()
export class ValidationTokenActived implements CanActivate {
    constructor(
        private $notification: NotificationService
    ) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean{
        let url = "https://identity-sandbox.vwgroup.io/oidc/v1/authorize?client_id=2a616150-fc53-4156-83ca-9ec7e5302797@apps_vw-dilab_com&scope=openid&response_type=code&redirect_uri=http://localhost:4200/portalonlinesales&state=http://localhost:4200/portalonlinesales"
        let hasParams: boolean;
        if (next.queryParams.state || next.queryParams.code) {
            this.$notification.setFirstToken(next.queryParams.code);
            hasParams = true;
        } else {
            hasParams = false;
            window.location.href = url;
        }

        return hasParams;
    }
}