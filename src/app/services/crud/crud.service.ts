// Imports
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// Definition
@Injectable({
    providedIn: 'root'
})

// Export
export class CrudService {

    // Declarations
    private apiUrl: String;

    constructor(private HttpClient: HttpClient) {
        this.apiUrl = 'https://jsonplaceholder.typicode.com';
    };

    // CRUD Methods

    // CRUD: Create
    public createItem = () => {

    }

    // CRUD: Read
    public readItem = (endpoint: String) => {
        return this.HttpClient.get(`${this.apiUrl}/${endpoint}`)
            .toPromise()
            .then(this.getData)
            .catch(this.handleError);
    }

    // CRUD: Read One
    public readOne = () => {

    }

    // CRUD: Update
    public updateItem = () => {

    }

    // CRUD: Delete
    public deleteItem = () => {

    }

    // Methods to get the API responses

    // Get the API response
    private getData(res: any) {
        return res || {};
    };

    // Get the API error
    private handleError(err: any) {
        return Promise.reject(err);
    };

}
