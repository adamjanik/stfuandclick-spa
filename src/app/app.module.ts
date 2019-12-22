import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StfuClickComponent } from './components/stfu-click/stfu-click.component';
import { TeamChartComponent } from './components/team-chart/team-chart.component';
import { LeaderBoardComponent } from './views/leader-board/leader-board.component';
import { TeamDetailComponent } from './views/team-detail/team-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteComponent } from './components/quote/quote.component';
import { TeamTitleComponent } from './components/team-title/team-title.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderBoardComponent,
    TeamDetailComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CreateRoomComponent,
    StfuClickComponent,
    TeamChartComponent,
    QuoteComponent,
    TeamTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
