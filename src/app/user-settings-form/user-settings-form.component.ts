import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings : UserSettings = {
    name: 'Salman Tahir',
    emailOffers: true,
    interfaceStyle: 'light',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
