import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../product.service';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[];
 
  constructor(private productServi :ProductServices,private http:HttpClient) { }

  ngOnInit(): void {
    
    this.http.get<{[key:string]:Product}>("http://localhost:3000/api/product").pipe(map(responseData =>{
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))     //check responseData have data or not
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        //console.log(postArray);
        return postArray;

           
    })).subscribe(postArray =>{
     //   console.log("array"+posts);
  
       this.products = postArray;
     });
  }

}
