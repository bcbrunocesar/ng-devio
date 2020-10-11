import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    CardComponent,
    ContainerComponent,
    HeaderComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    CardComponent,
    ContainerComponent,
    HeaderComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
