import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {uriGlobal} from './global';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  uri = `${uriGlobal + 'contacts'}`;

  constructor(private http: HttpClient) {
  }

  // Get all the contacts from mockapi
  public getAllContacts() {
    return this.http.get(`${this.uri}`)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
      )
  }

  // Get the contact by id from mockapi
  public getContactById(contactId: number) {
    return this.http.get(`${this.uri}/${contactId}`)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
      )
  }
}
