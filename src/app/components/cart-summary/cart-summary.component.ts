import { Student } from 'src/app/models/student';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  cartItems: CartItem[]=[];
  constructor(private cartService: CartService, private toastrService:ToastrService) {}
  
  ngOnInit():void{
    this.getCart();
  }
  getCart() {
    this.cartItems = this.cartService.list();
  }
  removeFromCart(student:Student){
    this.cartService.removeFromCart(student);
    this.toastrService.error("Silindi",student.name + " sepetten silindi.")
  }

}
