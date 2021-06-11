import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

	constructor(private __gate: GatewayService) { }

	products: any[] = [];
	cart_total: number = 0;
	cart_total_price: number = 0;
	product_total_price: number = 0;

	ngOnInit(): void {
		this.loadData();
	}

	loadData(){
		if (this.__gate.getCartProducts().length < 1) return

		this.products = this.__gate.getCartProducts();
		this.cart_total_price = this.__gate.getCartTotalPrice();
		this.cart_total = this.__gate.getCartTotalQTY();
		
		this.__gate.getProducts();
	}

	increaseQTY(product: any){
		this.__gate.increaseQTY(product);
		this.loadData();
	}

	decreaseQTY(product: any){
		this.__gate.decreaseQTY(product);
		this.loadData();
	}
}
