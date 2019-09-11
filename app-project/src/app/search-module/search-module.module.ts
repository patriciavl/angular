import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ListOwnersComponent } from '../list-owners/list-owners.component';
import { OwnerService } from './services/owner.service';


@NgModule({
  declarations: [SearchComponent, ListOwnersComponent],
  exports: [SearchComponent, ListOwnersComponent],
  providers: [OwnerService],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SearchModuleModule { }
