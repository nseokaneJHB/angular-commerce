import { Component, OnInit } from '@angular/core';

import { GatewayService } from '../../services/gateway.service';

import { paypal, RenderParams } from 'creditcardpayments/creditCardPayments';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

	products: any[] = [];
	cart_total: number = 0;
	cart_total_price: number = 0;
	product_total_price: number = 0;

	constructor(private __gate: GatewayService) {}

	ngOnInit(): void {
		render({
			id: "#paypal-button-container",
			currency: "ZAR",
			value: `${this.__gate.getCartTotalPrice()}`,
			onApprove: (details) => {
				alert("Transaction Successful");
				console.log(details);
			}
		});

		this.loadData();
	}

	loadData(){
		if (this.__gate.getCartProducts().length < 1) return
		
		this.products = this.__gate.getCartProducts();
		this.cart_total_price = this.__gate.getCartTotalPrice();
		this.cart_total = this.__gate.getCartTotalQTY();
	}

}
