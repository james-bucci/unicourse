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
import { Step5Component } from './step5/step5.component';
import { Step6Component } from './step6/step6.component';
import { TabbedInterfaceDirective } from './shared/tabbed-interface.directive';
import { TabSelectorDirective } from './shared/tab-selector.directive';
import { TabContainerDirective } from './shared/tab-container.directive';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsService } from './services/lessons.service';
import { ApiService } from './services/api.service';

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
    Step4Component,
    Step5Component,
    Step6Component,
    TabbedInterfaceDirective,
    TabSelectorDirective,
    TabContainerDirective,
    LessonsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: Step6Component },
      { path: 'step1', component: Step1Component },
      { path: 'step2', component: Step2Component },
      { path: 'step3', component: Step3Component },
      { path: 'step4', component: Step4Component },
      { path: 'step5', component: Step5Component },
      { path: 'step6', component: Step6Component },
      { path: 'step7', component: LessonsListComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: 'about', pathMatch: 'full' }
    ])
  ],
  providers: [LessonsService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
