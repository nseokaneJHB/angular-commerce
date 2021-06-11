import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	constructor(public __gate: GatewayService) { }

	ngOnInit(): void {}
}
