import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular'; 
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
  standalone: true,
  imports: [CommonModule,  IonicModule]
})

export class ContactsPage implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  openContactDetail(contactId: number) {
    this.router.navigate(['/contact-detail', contactId]);
  }

  openAddContact() {
    this.router.navigate(['/add-contact']);
  }
  
}

