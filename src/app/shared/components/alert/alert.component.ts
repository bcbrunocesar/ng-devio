import { Component, Input, OnInit } from '@angular/core';

import { AlertModel } from '@sharedModels/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

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
