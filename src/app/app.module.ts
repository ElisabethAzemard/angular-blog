// Imports

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Inner
import { AppComponent } from './app.component';
import { MainRouter } from './app.router';
import { NavigationComponent} from "./components/navigation/navigation.component";

// Definition
@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(MainRouter, {
            onSameUrlNavigation: 'reload'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})

// Export
export class AppModule { }
