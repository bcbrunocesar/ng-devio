import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuAuthComponent } from './components/menu-auth/menu-auth.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomePageComponent,
    MenuAuthComponent,
    MenuComponent,
    NotFoundComponent,
    CardComponent,
    ContainerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HomePageComponent,
    MenuComponent,
    MenuAuthComponent,
    NotFoundComponent,
    CardComponent,
    ContainerComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
