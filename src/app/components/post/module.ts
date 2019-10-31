// Imports
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PostComponent } from "./post.component";

// Definition
@NgModule({
    declarations: [ PostComponent ],
    imports: [ CommonModule ],
    exports: [ PostComponent ]
})

// Export
export class PostModule{ };
