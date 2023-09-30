import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
  constructor(private ds:DataService){}


  ngOnInit(): void {
    // Subscribe to the Observable to receive data
    this.ds.getObservableData().subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error),
      complete:()=>console.log('complete')
    })

  }





}
