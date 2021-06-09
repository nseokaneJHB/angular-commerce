import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom components
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
	{ path: 'cart', component: CartComponent },
  	{ path: '', component: ProductsComponent },
	{ path: '', pathMatch: 'full', redirectTo: '' },
	
	// Error page
	{ path: '404', component: NotfoundComponent },
	{ path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }