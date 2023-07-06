import { Student } from 'src/app/models/student';
import { Injectable } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }



  addToCart(student:Student){
    let item = CartItems.find(c=>c.student.id===student.id);
    if(item){
      item.numara+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.student = student;
      cartItem.numara =1;
      CartItems.push(cartItem)
    }
  }
  removeFromCart(student:Student){
    let item:CartItem = CartItems.find(c=>c.student.id===student.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }

}
