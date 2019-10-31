// Imports

    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { Routing } from './router';

    // Components
    import { HomePageComponent } from './home-page.component';

// Definition
@NgModule({
    declarations: [HomePageComponent],
    imports: [ CommonModule, Routing ]
})

// Export
export class Module{};
