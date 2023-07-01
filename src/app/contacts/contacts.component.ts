import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public linkedInLink : string  = "https://www.linkedin.com/company/kittyp/";
  public instagramLink: string = "https://www.instagram.com/pookietalks_shit/";
  public gmailLink: string = "mailto:kittypindia@gmail.com"

  constructor() { }

  ngOnInit(): void {
  }

}
