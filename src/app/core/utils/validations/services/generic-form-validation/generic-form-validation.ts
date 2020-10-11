import { FormGroup } from '@angular/forms';

import { ValidationMessagesModel } from '@core/utils/validations/models/validation-messages.model';

export class GenericValidator {
  constructor(private validationMessages: ValidationMessagesModel) {}

  public processMessages(container: FormGroup): { [key: string]: string } {
    let messages = { };

    for (let controlKey in container.controls) {
      if (container.controls.hasOwnProperty(controlKey)) {
        let control = container.controls[controlKey];

        if (control instanceof FormGroup) {
          let childMessages = this.processMessages(control);
          Object.assign(messages, childMessages);
        } else {
          if (this.validationMessages[controlKey]) {
            messages[controlKey] = '';

            if ((control.dirty || control.touched) && control.errors) {
              Object.keys(control.errors).map(messageKey => {
                if (this.validationMessages[controlKey][messageKey]) {
                  messages[controlKey] += this.validationMessages[controlKey][messageKey];
                }
              });
            }
          }
        }
      }
    }

    return messages;
  }
}
