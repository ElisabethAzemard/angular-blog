// Imports

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from "@angular/common/http";

// Inner
import { AppComponent } from './app.component';
import { MainRouter } from './app.router';
import { NavigationComponent} from "./components/navigation/navigation.component";
import { CrudService } from './services/crud/crud.service';

// Definition
@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(MainRouter, { onSameUrlNavigation: 'reload' }),
        HttpClientModule
    ],
    providers: [CrudService],
    bootstrap: [AppComponent]
})

// Export
export class AppModule { }
