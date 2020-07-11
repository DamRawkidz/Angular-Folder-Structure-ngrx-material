import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirective } from './directives/demo.directive';
import { DemoPipe } from './pipes/demo.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatStepperModule } from '@angular/material/stepper'
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule  } from '@angular/material/menu'
import { MatProgressBarModule } from '@angular/material/progress-bar';

const mat = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
  MatIconModule,
  MatChipsModule,
  MatCheckboxModule,
  MatStepperModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule
]

@NgModule({
  declarations: [
    DemoDirective, 
    DemoPipe
  ],
  imports: [
    ...mat
  ], 
  exports: [
    ...mat
  ]
})
export class SharedModule { }
