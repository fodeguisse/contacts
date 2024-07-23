import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class AddContactPage {
  newContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  };

  constructor(private contactService: ContactService, private router: Router) {}

  addContact() {
    this.contactService.addContact(this.newContact);
    this.router.navigate(['/contacts']);
  }
}
