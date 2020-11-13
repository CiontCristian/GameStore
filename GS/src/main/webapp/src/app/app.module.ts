import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {LoginComponent} from './login/login.component';
import {SearchComponent} from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AccountService} from './shared/account.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    MainPageComponent,
    SearchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
