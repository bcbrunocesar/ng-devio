import { Component, Input, OnInit } from '@angular/core';

import { AlertModel } from 'src/app/custom/alert/models/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.scss']
})
export class AppAlertComponent implements OnInit {

  @Input() alertModel: AlertModel;

  public alertStyle: string = 'alert';

  ngOnInit(): void {
    this.handleAlertStyle();
  }

  private handleAlertStyle(): void {
    const styles = {
      success: `${this.alertStyle} alert--success`,
      info: `${this.alertStyle} alert--info`,
      warning: `${this.alertStyle} alert--warning`,
      danger: `${this.alertStyle} alert--danger`
    }

    this.alertStyle = styles[this.alertModel.type];
  }
}
