// Imports

    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { Routing } from './router';

    // Components
    import { PostPageComponent } from './post-page.component';

// Definition
@NgModule({
    declarations: [PostPageComponent],
    imports: [ CommonModule, Routing ]
})

// Export
export class Module{};
