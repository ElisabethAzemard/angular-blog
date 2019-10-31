// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';

// Definition
const route: Routes = [
    {
        path: '',
        component: NavigationComponent
    }
]

// Export
export const Routing: ModuleWithProviders = RouterModule.forChild(route);
