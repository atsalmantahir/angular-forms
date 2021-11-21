import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: 'Salman Tahir',
    emailOffers: true,
    interfaceStyle: 'light',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  }

  userSettings: UserSettings = { ...this.originalUserSettings };
  hasError = false;
  errorMessage = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }


  onBlur(field: NgModel) {
    console.log('onBlur event: ', field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.hasError = true;
    this.errorMessage = errorResponse.message;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('in onsubmit: ', form.valid);
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error),
      );
    }
    else {
      this.hasError = true;
      this.errorMessage = "Please fix the above error";
    }
  }


}
