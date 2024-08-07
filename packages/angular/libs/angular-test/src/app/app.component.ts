import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ADSAngularWrapperModule } from 'ads-angular-wrapper';
import { SelectValueAccessorDirective } from '../../../directives';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ADSAngularWrapperModule,
    ReactiveFormsModule,
    SelectValueAccessorDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  onChange(event: any) {
    console.log('onChange', event);
  }

  private fb = inject(FormBuilder);

  form = this.fb.group({
    filter: [''],
  });

  constructor() {
    this.form.valueChanges.subscribe((value) => {
      console.log('valueChanges', value);
    });
  }
}
