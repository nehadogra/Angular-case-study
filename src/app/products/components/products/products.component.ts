import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: any;
  productsData: any;
  searchTerm: string = '';
  productsToBeDisplayed: number = 4;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((productsResp) => {
        this.products = productsResp;
        this.productsData = productsResp;
      })
  }

  showList() {
    this.productsToBeDisplayed = 2;
  }

  showGrid() {
    this.productsToBeDisplayed = 4;
  }

  filterProducts(event: any) {
    let value = event.target.value;
    switch (value) {
      case '1':
        this.productsData = this.products.filter((product: Product) => {
          return product.price <= 25;
        })
        break;
      case '2':
        this.productsData = this.products.filter((product: Product) => {
          return product.price >= 25 && product.price <= 50;
        })
        break;
      case '3':
        this.productsData = this.products.filter((product: Product) => {
          return product.price >= 50 && product.price <= 100;
        })
        break;
      case '4':
        this.productsData = this.products.filter((product: Product) => {
          return product.price >= 100;
        })
        break;
      default:
        this.productsData = this.products;
        return this.productsData;
    }
  }

}
