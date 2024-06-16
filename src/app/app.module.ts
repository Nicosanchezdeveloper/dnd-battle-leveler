import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnemiesListComponent } from './enemies-list/enemies-list.component';
import { SelectedEnemiesComponent } from './selected-enemies/selected-enemies.component';

@NgModule({
  declarations: [
    AppComponent,
    EnemiesListComponent,
    SelectedEnemiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
