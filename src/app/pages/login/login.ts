import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  readonly showPassword = signal(false);
  readonly email = signal('');
  readonly password = signal('');
  readonly message = signal('');

  togglePassword(): void {
    this.showPassword.update((value) => !value);
  }

  handleSubmit(event: Event): void {
    event.preventDefault();

    if (!this.email() || !this.password()) {
      this.message.set('Por favor, preencha todos os campos.');
      return;
    }

    this.message.set(
      `Tentativa de login bem-sucedida! E-mail: ${this.email()}, Senha: ${this.password().length} caracteres.`,
    );
  }
}
