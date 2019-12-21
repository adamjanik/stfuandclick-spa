import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TeamDetailComponent } from './views/team-detail/team-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ChartListComponent } from './components/chart-list/chart-list.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { StfuClickComponent } from './components/stfu-click/stfu-click.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamDetailComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ChartListComponent,
    CreateRoomComponent,
    StfuClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
