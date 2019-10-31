// Imports

// Angular
import { Component, OnInit } from '@angular/core';

// Inner
import { CrudService } from "../../services/crud/crud.service";
import { PostModel } from "../../models/post.model";

// Definition
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
})

// Export
export class HomePageComponent implements OnInit {

    // Declarations
    private postCollection: Array<PostModel>;

    constructor(
        private CrudService: CrudService
    ) { }

    // Methods
    private getPosts = () => {
        this.CrudService.readItem('posts')
            .then( apiResponse => { // could be (apiResponse: Array<PostModel>)
                this.postCollection = apiResponse;
            })
            .catch( apiResponse => {
                console.error( apiResponse )
            })
    }

    // Hooks
    ngOnInit() {
        this.getPosts();
    }

}
