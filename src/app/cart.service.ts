//import {Product} from './product.model';
import {Cart} from './cart.model';
import { Component, EventEmitter} from '@angular/core';
// import { Component, EventEmitter, Injectable} from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import {map} from 'rxjs/operators';
// import { from } from 'rxjs';

//@Injectable()
export class CartServices
{
    CartChanged = new EventEmitter<Cart[]>();
    cart : Cart[] =
  [
    //  new Cart("543543",'T-shit',18,"abc.jpg",10,1800),  //object create
      // new Cart('T-shit','this is new t-shirt',100,200),  //object create
      // new Cart('T-shit','this is new t-shirt',100,200),  //object create

      
  ];


    getcart()
    {
        return this.cart.slice();
    }

    // addCart(cart: Cart)
    //  {
    //     this.cart.push(cart);
    //     this.cart.next(this.cart.slice());
    //   }
    addCart(cartitems:Cart)
      {
          this.cart.push(cartitems);
          this.CartChanged.emit(this.cart.slice());
      }

    // fetchData()
    // {
    //     this.http.get<{[key:string]:Product}>("http://localhost:3006/api/product")
    // .pipe(map(responseData => {
    //     const postArray =[];
    //     for (const key in responseData)
    //     {
    //         if(responseData.hasOwnProperty(key))
    //         {
    //             postArray.push({...responseData[key],id:key})
    //         }
    //     }

    //     return postArray;

           
    // })).subscribe(posts =>{
    //     console.log("array"+posts);
  
    //    this.products = posts;
    //  })
   
    // ;
    // }

      deleteCart(index:number)
      {
       
         
        this.cart.splice(index, 1);     
        }
      


}