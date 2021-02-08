import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationTokenActived } from 'src/app/shared/interceptors/validation-token-interceptor.service';
import { MainComponent } from './main.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
    {
        path: '', component: MainComponent,
        canActivate: [ValidationTokenActived],
        children: [
            {path: '', redirectTo:'review', pathMatch: 'full'},
            {
                path: 'review',
                component: ReviewComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }