import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  constructor(
    private ContactsService: ContactsService,
    private router: Router,
  ) {
  }

  contactsList: any;

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    try {
      this.ContactsService.getAllContacts().subscribe(res => {
        this.contactsList = res;
      });
    } catch (error) {
      console.log(error);
    }
  }

  getContactById(id: any) {
    this.router.navigate([`/contacts/${id}`]);
  }

}
