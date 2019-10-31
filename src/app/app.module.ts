// Imports

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Inner
import { AppComponent } from './app.component';
import { MainRouter } from './app.router';

// Definition
@NgModule({
    declarations: [
        AppComponent
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
