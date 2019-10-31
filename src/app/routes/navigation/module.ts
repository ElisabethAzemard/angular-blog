// Imports

    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { Routing } from './router';

    // Components
    import { NavigationComponent } from './navigation.component';

// Definition
@NgModule({
    declarations: [NavigationComponent],
    imports: [ CommonModule, Routing ]
})

// Export
export class Module{};
