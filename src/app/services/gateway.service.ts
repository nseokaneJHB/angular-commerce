import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class GatewayService {

	constructor(private __http: HttpClient) { }

	url = 'https://fakestoreapi.com/products';

	shopping_cart_items: any = JSON.parse(localStorage.getItem('_PRODUCTS_'))

	getProducts(){
		return this.__http.get(this.url)
	}

	getOneProduct(id: string){
		return this.__http.get(`${this.url}/${id}`)
	}

	getCartProducts(){
		if (this.shopping_cart_items === null || this.shopping_cart_items < 1) {
			return [];
		}else{
			return this.shopping_cart_items;
		}
	}

	getCartTotalQTY(){
		if (this.shopping_cart_items === null || this.shopping_cart_items < 1) {
			return 0;
		}else{
			let total_QTY = 0;
			this.shopping_cart_items.map(prod => {
				total_QTY += prod.quantity
			})

			return total_QTY
		}
	}

	getCartTotalPrice(){
		if (this.shopping_cart_items === null || this.shopping_cart_items < 1) {
			return 0.00;
		}else{
			let total_price = 0;
			this.shopping_cart_items.map(prod => {
				total_price += (prod.price * prod.quantity)
			})

			return total_price
		}
	}

	increaseQTY(product: any){
		this.shopping_cart_items.map(prod => {
			if (prod.id === product.id) {
				prod.quantity += 1;
				prod.total_cost = prod.price * prod.quantity
				
				localStorage.setItem('_PRODUCTS_', JSON.stringify(this.shopping_cart_items));
			}

			return
		});
	}

	decreaseQTY(product: any){
		this.shopping_cart_items.map((prod: any) => {
			if (prod.id === product.id) {
				if (prod.quantity < 2) {
					this.shopping_cart_items = this.shopping_cart_items.filter((the_prod: any) => the_prod.id !== product.id);
				}

				prod.quantity -= 1;
				prod.total_cost = prod.price * prod.quantity
				
				localStorage.setItem('_PRODUCTS_', JSON.stringify(this.shopping_cart_items));
			}

			return
		});
	}

	cart(product: any){
		product = {...product, quantity: 1}
		product = {...product, total_cost: product.price * product.quantity}
		
		if (this.shopping_cart_items === null || this.shopping_cart_items < 1) {
			this.shopping_cart_items = [];
		}else{
			let prod = this.shopping_cart_items.filter(prod => prod.id === product.id)
			if (prod.length > 0) return
		}

		this.shopping_cart_items.push(product);
		localStorage.setItem('_PRODUCTS_', JSON.stringify(this.shopping_cart_items));
	}
}
