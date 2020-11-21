import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { MatSelectModule } from '@angular/material/select';
import { CardNumberSelectorComponent } from './game-page/card-number-selector/card-number-selector.component';
import { featureStoreName } from './store/feature-store-name';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { HeaderPanelComponent } from './header-panel/header-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GamePageComponent,
    CardNumberSelectorComponent,
    HeaderPanelComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(featureStoreName, reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
