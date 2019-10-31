import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from "../../models/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {

  // Declarations
  @Input() post: PostModel; // send data from parent component to child component with HTML tag

  constructor() { }

  ngOnInit() {
  }

}
