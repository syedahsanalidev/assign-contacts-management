import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../../services/contacts.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.sass']
})
export class ContactDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ContactsService: ContactsService,
  ) {
  }

  contactsById: any;

  ngOnInit(): void {
    new Promise((resolve, reject) => {
      this.getContactById(resolve);
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  getContactById(resolve: any) {
    this.route.params.subscribe(async param => {
      this.ContactsService.getContactById(param['id']).subscribe(data => {
        console.log(data)
        this.contactsById = data;
        resolve(this.contactsById)
      })
    });
  }
}
