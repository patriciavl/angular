import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearchModuleModule } from './search-module/search-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SearchModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
