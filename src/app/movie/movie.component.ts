import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  trendingMovies:any[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500';
  pages:number[]=[];
  pageNumbers:number=10;
  term:string='';
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.pages=new Array(this.pageNumbers).fill('').map((x,i)=>i+1);
    this._MoviesService.getMovieByPagination(1).subscribe({
      next:(response)=>this.trendingMovies=response.results
    })
  }
  test(pageNumber:number){
    this._MoviesService.getMovieByPagination(pageNumber).subscribe({
      next:(response)=>this.trendingMovies=response.results
    })
  }

}
