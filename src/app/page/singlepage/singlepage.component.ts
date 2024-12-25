import { state } from '@angular/animations';
import id from '@angular/common/locales/id';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';
@Component({
  selector: 'app-singlepage',
  imports: [],
  templateUrl: './singlepage.component.html',
  styleUrl: './singlepage.component.scss'
})
export class SinglepageComponent 
{
  data:any;
  constructor(private activated:ActivatedRoute,public api:ApiService)
  {

  }
  ngOnInit()
  {
    let id= this.activated.snapshot.paramMap.get('id');
    this.data=this.api.getstatesbyid(id);
  }
}
