import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.services';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title = 'shopping with pleasure';
  searchStr = '';
  // products: IProduct[] = data
  products: IProduct[] = []

  constructor(private productsService: ProductService){

  }

  ngOnInit() : void {
    this.productsService.getAll().subscribe( products => {
      this.products = products
    })
  }


}
