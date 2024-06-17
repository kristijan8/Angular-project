import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MovieCardModule } from './movie-card/movie-card.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MovielistComponent } from './movielist/movielist.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MovieCardModule,
    NavbarComponent,
    FooterComponent,
    RouterModule.forRoot([
      { path: 'about-us', component: AboutUsComponent },
      { path: 'movies', component: MovielistComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: 'home', component: MovieCardComponent },
      { path: '', component: MovieCardComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
