import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeContainerComponent } from './containers/practice-container/practice-container.component';
import { PracticePageRoutingModule } from './practice-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { InformationLayoutComponent } from './components/information-layout/information-layout.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SubcribersComponent } from './components/subcribers/subcribers.component';

@NgModule({
  declarations: [
    PracticeContainerComponent,
    ProfileLayoutComponent,
    InformationLayoutComponent,
    AvatarComponent,
    SubcribersComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    PracticePageRoutingModule
  ]
})
export class PracticePageModule { }
