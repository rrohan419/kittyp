import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = 'kittyp'
  
  contactsComponent : ContactsComponent = new ContactsComponent();
  hideFooter: boolean = false;
  hideBackground: boolean = false;

  constructor(private router: Router){
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideFooter = event.url === '/contacts';
        this.hideBackground = event.url === '/contacts';
      }
    });
  }

  isContactPage(): boolean {

    const currentUrl = this.router.url;

    return currentUrl.includes('/contact');
  }
  
}
