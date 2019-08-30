import { Component } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operator';

export interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  foo = 'A R T I S T A';

  constructor() {
    of('PIKACHU PANTERA')
      .pipe(
        tap(_ => {
          throw 'ERROR PANTERA!!'
        })
      )
      .subscribe(
        (_: string) => this.foo = _
        , err => console.error('SUB ERR: ', err)
        , () => console.log('SUB C O M P L E T E ⚡')
      )
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */