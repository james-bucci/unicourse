import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { BodyComponent } from './body/body.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorMatchComponent } from './color-match/color-match.component';
import { CollapseOnClickDirective } from './shared/collapse-on-click.directive';
import { Step4Component } from './step4/step4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    BodyComponent,
    SearchBoxComponent,
    ColorPickerComponent,
    ColorMatchComponent,
    CollapseOnClickDirective,
    Step4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: Step4Component },
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
      { path: 'step3', component: Step3Component },
      { path: 'step4', component: Step4Component },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: 'about', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
