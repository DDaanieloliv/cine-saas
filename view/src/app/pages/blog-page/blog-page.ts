import { Component } from '@angular/core';
import { BlogGrid } from '../../components/blog-grid/blog-grid';

@Component({
  imports: [ BlogGrid ],
  selector: 'app-blog-page',
  styleUrl: './blog-page.scss',
  templateUrl: './blog-page.html',
})
export class BlogPage {}
