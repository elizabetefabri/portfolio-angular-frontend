import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-message',
  standalone: true,
  templateUrl: './qr-message.html',
  styleUrl: './qr-message.scss',
})
export class QrMessage implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly message = signal('Nenhuma mensagem encontrada.');

  ngOnInit(): void {
    const encoded = this.route.snapshot.queryParamMap.get('c');
    this.message.set(this.decodeMessage(encoded));
  }

  private decodeMessage(encoded: string | null): string {
    if (!encoded) return 'Nenhuma mensagem encontrada.';
    try {
      const decoded = atob(encoded);
      return decodeURIComponent(escape(decoded));
    } catch {
      return 'Erro ao decodificar a mensagem.';
    }
  }
}
