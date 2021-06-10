import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GatewayService } from '../../services/gateway.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

	constructor(private __param: ActivatedRoute, private __gate: GatewayService) { }

	product: any = {}

	ngOnInit(): void {
		this.loadData();
	}

	loadData(){
		let id = this.__param.snapshot.params.id;
		this.__gate.getOneProduct(id).subscribe((res: any) => {
			this.product = res
		})
		this.__gate.getProducts();
	}

	addToCart(product: any){
		this.__gate.cart(product)
		this.loadData();
	}

}
