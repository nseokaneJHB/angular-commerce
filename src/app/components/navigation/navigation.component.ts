import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	constructor(private __gate: GatewayService) { }

	cart_total: number = 0;

	ngOnInit(): void {
		this.cart_total = this.__gate.getCartTotalQTY();
		this.__gate.getProducts();
	}
}
