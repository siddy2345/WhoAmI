import { Component, signal } from '@angular/core';
/** Main Component to present myself */
@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss',
})
export class AboutmeComponent {
  /** Getter to calculate the age of someone who was born in 2004 */
  public get age(): number {
    return new Date().getUTCFullYear() - 2004;
  }

  /** List of the word "Hello" in different languages */
  public helloMessages: string[] = ['Hallo', 'Hello', 'Bonjour'];
  /** The current index of the chosen language, that can changes based on user interactions */
  public currentLanguageIndex = signal(0);

  /** Changes the "Hello" index by rotating through the helloMessages List */
  public changeHelloMessage(): void {
    const newLanguageIndex =
      this.currentLanguageIndex() === this.helloMessages.length - 1
        ? 0
        : this.currentLanguageIndex() + 1;
    this.currentLanguageIndex.set(newLanguageIndex);
  }
}
