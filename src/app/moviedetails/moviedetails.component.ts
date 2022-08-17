import { MoviesService } from './../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
movieId:string='';
movieDetails:any;
imgPrefix:string='https://image.tmdb.org/t/p/w500';
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.movieId=this._ActivatedRoute.snapshot.params['id']
    this._MoviesService.getMovieDetails(this.movieId).subscribe({
      next:(response)=>{
        this.movieDetails=response;
      }
    })
  }
}
