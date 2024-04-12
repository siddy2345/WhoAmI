import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  public get age(): number {
    return new Date().getUTCFullYear() - 2004;
  }

  public helloMessages: string[] = ['Hallo', 'Hello', 'Bonjour'];
  public currentLanguageIndex = signal(0);

  public changeHelloMessage(): void {
    const newLanguageIndex =
      this.currentLanguageIndex() === this.helloMessages.length - 1
        ? 0
        : this.currentLanguageIndex() + 1;
    this.currentLanguageIndex.set(newLanguageIndex);
  }
}
