import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//para trabajar con reactive forms
import { ReactiveFormsModule } from '@angular/forms';
//para trabajar con peticiones http
import { HttpClientModule } from '@angular/common/http';
//para trabajar con tablas de material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//para trabajar con controles de formulario de material
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MomentDateModule } from '@angular/material-moment-adapter';

// para trabajar con mensaje de alertas
import {MatSnackBarModule} from '@angular/material/snack-bar';
// para trabajar con modales
import {MatDialogModule} from '@angular/material/dialog';
// para trabajar con iconos
import {MatIconModule} from '@angular/material/icon';
// para trabajar con grillas
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    MatGridListModule,
    MomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
