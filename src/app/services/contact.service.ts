import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', phone: '123456789', email: 'john.doe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', phone: '987654321', email: 'jane.doe@example.com' },
    { id: 3, firstName: 'Jack', lastName: 'Doe', phone: '123456789', email: 'jack.doe@example.com' },
    { id: 4, firstName: 'Julie', lastName: 'Doe', phone: '987654321', email: 'julie.doe@example.com' }
  ];

  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact) {
    contact.id = this.contacts.length + 1; 
    this.contacts.push(contact);
  }

}
