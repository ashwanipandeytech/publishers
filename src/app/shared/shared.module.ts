import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Globals } from '../shared/globals';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AuthGuard } from '../../app/guards/auth-guard.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    TabsModule.forRoot(),
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDividerModule,

    MatDatepickerModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule,
    MatAutocompleteModule,
    ScrollingModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    PaginationModule.forRoot(),
    MatSlideToggleModule



  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    HttpClientModule,
    ToastrModule,
    TabsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatIconModule,
    MatBadgeModule,
    MatChipsModule,
    MatAutocompleteModule,
    ScrollingModule,
    AccordionModule,
    TooltipModule,
    PopoverModule,
    PaginationModule,
    MatSlideToggleModule
  ],

  providers: [Globals,AuthGuard],
})
export class SharedModule { }
