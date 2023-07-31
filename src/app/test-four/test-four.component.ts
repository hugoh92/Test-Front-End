import { Component, OnInit } from '@angular/core';

interface FormData {
  name: string;
  email: string;
  message: string;

}

@Component({
  selector: 'app-test-four',
  templateUrl: './test-four.component.html',
  styleUrls: ['./test-four.component.css']
})
export class TestFourComponent implements OnInit {
  formData: FormData = {
    name: '',
    email: '',
    message: ''
  };

  formSubmitted = false;
  contactForm: any;

  onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm?.invalid) {
      return;
    }

    // Verifica se todos os campos obrigatórios estão preenchidos corretamente
    if (
      this.formData.name.trim() === '' ||
      this.formData.email.trim() === '' ||
      !this.isValidEmail(this.formData.email)
    ) {
      return;
    }

    // Lógica para enviar o formulário (substitua pelo código de envio real)
    console.log('Formulário enviado:', this.formData);

    // Exibe a mensagem apenas se o formulário for válido
    alert('Formulário Enviado!');

    // Limpar os campos
    this.onClear();
  }

  onClear() {
    this.formData.name = '';
    this.formData.email = '';
    this.formData.message = '';
    this.formSubmitted = false;
    this.clearErrorMessages();
  }

  displayErrorMessage(elementId: string, message: string) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
    }
  }

  clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => {
      errorMessage.textContent = '';
    });
  }

  isValidEmail(email: string): boolean {
    // Expressão regular para validar o formato do e-mail
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  ngOnInit(): void {
  }

}
