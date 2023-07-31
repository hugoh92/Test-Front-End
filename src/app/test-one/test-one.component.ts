import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {


  alterarTexto() {
    // Obtém o parágrafo pelo ID
    const text = document.getElementById('text');

    // Verifica se o parágrafo foi encontrado antes de alterar o texto
    if (text) {
      // Checks if the paragraph was found before changing the text
      text.textContent = 'This is new paragraph text, changed by the button';
    }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
