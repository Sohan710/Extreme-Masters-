import {Product} from './product.model';

import { Component, EventEmitter, Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ProductServices
{

    products : Product[] =
  [
      new Product('T-shit','this is new t-shirt','tshirt1.jpg',800),  //object create

      new Product('Nike Shoes','this is new sports shoes','shoes1.jpg',500),
      new Product('Nike Shoes','this is new sports shoes','shoes1.jpg',500),
      new Product('Nike Shoes','this is new sports shoes','shoes1.jpg',500),
      new Product('T-shit','this is new t-shirt','tshirt1.jpg',800),  //object create

      new Product('Nike Shoes','this is new sports shoes','shoes1.jpg',500),
      new Product('Nike Shoes','this is new sports shoes','shoes1.jpg',500),
      new Product('Nike Shoes','this is new sports shoes','shoes1.jpg',500)
  ];

    constructor(private http:HttpClient)
    {

    }
  

    getProduct()
    {
        return this.products.slice();
    }


    fetchData()
    {
        this.http.get<{[key:string]:Product}>("http://localhost:3006/api/product")
    .pipe(map(responseData => {
        const postArray =[];
        for (const key in responseData)
        {
            if(responseData.hasOwnProperty(key))
            {
                postArray.push({...responseData[key],id:key})
            }
        }

        return postArray;

           
    })).subscribe(posts =>{
        console.log("array"+posts);
  
       this.products = posts;
     })
   
    ;
    }

    

}