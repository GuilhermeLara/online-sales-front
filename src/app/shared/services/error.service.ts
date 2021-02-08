import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs';

/*
*  Serviço para gerenciar os erros de http
* */
@Injectable()
export class ErrorService {

  private goals: any = new BehaviorSubject<any>(false);
  public goalBehavior: any;

  constructor() {
    this.goalBehavior = this.goals.asObservable();
  }

  public changeGoal(goal: boolean): void {
    this.goals.next(goal);
  }
}
