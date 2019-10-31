// Imports

    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { Routing } from './router';

    // Components
    import { UserPageComponent } from './user-page.component';

// Definition
@NgModule({
    declarations: [UserPageComponent],
    imports: [ CommonModule, Routing ]
})

// Export
export class Module{};
