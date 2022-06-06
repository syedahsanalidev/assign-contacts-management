import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  constructor(
    private ContactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute
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
        this.router.navigate([`/contacts/${1}`], { relativeTo: this.route });
      });
    } catch (error) {
      console.log(error);
    }
  }

  getContactById(id: any) {
    this.router.navigate([`/contacts/${id}`], { relativeTo: this.route });

  }

}
