import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeContainerComponent } from './containers/practice-container/practice-container.component';
import { MusicComponent } from './components/music/music.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LikesComponent } from './components/likes/likes.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeContainerComponent,
     children: [
       {
         path: 'music',
         component: MusicComponent
       },
       {
         path: 'gallery',
         component: GalleryComponent
       },
       {
         path: 'likes',
         component: LikesComponent
       },
       // {
       //   path: '',
       //   redirectTo: '/practice/music',
       //   pathMatch: 'full'
       // }
     ]
  },
  {
    path: '',
    redirectTo: '/practice',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticePageRoutingModule {}
