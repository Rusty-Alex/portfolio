import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MainVariableService } from '../main-variable.service';
import { MatDialog, } from '@angular/material/dialog';
import { ContactdialogComponent } from './contactdialog/contactdialog.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-contact-me',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('messagelInput') messagelInput!: ElementRef;
  showInputName: boolean = true;
  showInputEmail: boolean = true;
  showInputMessage: boolean = true;
  checkboxControl = new FormControl(false);
  sendMessageTrue: boolean = false;
  

  constructor(public http: HttpClient, public mainVariableService: MainVariableService, public dialog: MatDialog) {

  }

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Za-zÄÖÜäöüß\s-]+$/)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ]),
    message: new FormControl('', Validators.required),
  });


  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }


  onBlurName() {
    if (this.name.invalid && this.name.touched) {
      if (this.name.errors?.['required']) {
        this.name.setValue('');
      }
      this.name.markAsTouched();
      this.name.updateValueAndValidity();
      this.showInputName = false;
    }
  }

  focusInputName() {
    this.showInputName = true;
    setTimeout(() => {
      if (this.nameInput) {
        this.nameInput.nativeElement.focus();
      }
    }, 0);
  }

  get namePlaceholder(): string {
    if (this.showInputName) {
      return this.mainVariableService.activeEN
        ? 'Your name goes here'
        : 'Ihr Name kommt hier';
    }
    return this.mainVariableService.activeEN
      ? 'Your name goes here'
      : 'Ihr Name kommt hier';
  }



  get emailPlaceholder(): string {
    if (this.showInputEmail) {
      return this.mainVariableService.activeEN
        ? 'youremail@email.com'
        : 'deine-email@email.de';
    }
    return this.mainVariableService.activeEN
      ? 'youremail@email.com'
      : 'deine-email@email.de';
  }

  onBlurEmail() {
    if (this.email.invalid && this.email.touched) {
      if (this.email.errors?.['required']) {
        this.email.setValue('');
      }

      this.email.markAsTouched();
      this.email.updateValueAndValidity();
      this.showInputEmail = false;
    }
  }

  focusInputEmail() {
    this.showInputEmail = true;
    setTimeout(() => {
      if (this.emailInput) {
        this.emailInput.nativeElement.focus();
      }
    }, 0);
  }

  onBlurMessage() {
    if (this.message.invalid && this.message.touched) {
      if (this.message.errors?.['required']) {
        this.message.setValue('');
      }

      this.message.markAsTouched();
      this.message.updateValueAndValidity();
      this.showInputMessage = false;
    }
  }

  focusInputMessage() {
    this.showInputMessage = true;
    setTimeout(() => {
      if (this.messagelInput) {
        this.messagelInput.nativeElement.focus();
      }
    }, 0);
  }
  get messagePlaceholder(): string {
    if (this.showInputMessage) {
      return this.mainVariableService.activeEN
        ? 'Hello Alexander, I am interested in...'
        : 'Hallo Alexander, ich bin interessiert an...';
    }
    return this.mainVariableService.activeEN
      ? 'Hello Alexander, I am interested in...'
      : 'Hallo Alexander, ich bin interessiert an...';
  }


  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    if (this.contactForm.valid) {
      // Extrahiere die Formulardaten
      const contactData = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      // Sende die Daten per HTTP POST an die PHP-Datei
      this.http.post('https://winkler-entwicklung.de/sendMail.php', contactData, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe({
        next: (response) => {
          this.contactForm.reset();
          this.checkboxControl.reset();
        },
        error: (error) => {
          this.dialog.open(ContactdialogComponent, {
            data: { sendMessageTrue: false }
          });
        },
        complete: () => {
          this.sendMessageTrue = true;
          this.dialog.open(ContactdialogComponent, {
            data: { sendMessageTrue: this.sendMessageTrue }
          });
        },
      });
    } else {
      alert('Bitte füllen Sie alle Felder korrekt aus.');
    }
  }

}



