import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	constructor(private __gate: GatewayService) { }

	products: any[] = []

	ngOnInit(): void {
		this.loadData();
	}

	loadData(){
		this.__gate.getProducts().subscribe((res: any) => {
			this.products = res;
		})
	}

	addToCart(product: any){
		this.__gate.cart(product);
		this.loadData();
	}
}
