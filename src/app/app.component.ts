import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // aquí era styleUrl -> styleUrls
})
export class AppComponent {
  title = 'una-pagina';

  // Propiedad para controlar el menú en móviles
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
