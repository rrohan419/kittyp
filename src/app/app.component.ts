import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = 'myStore'
  
  contactsComponent : ContactsComponent = new ContactsComponent();
  hideFooter: boolean = false;

  constructor(private router: Router){
    console.log(this.contactsComponent.linkedInLink)
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideFooter = event.url === '/contacts';
      }
    });
  }
  
}
