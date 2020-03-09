import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  // Dovuci proizvode prek servisa (ProductService) i upucaj u product detail page

  pageTitle: string = 'Product Detail';
  product: IProduct[];
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  // getProduct(id: number) {
  //   this.productService.getProducts().subscribe({
  //     next: product => this.product = product,
  //     error: err => this.errorMessage = err
  //   });
  // }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.pageTitle += ` ${id} `;

    console.log('foooooooo', this.product);
    
    // this.product = {
    //   "productId": id,
    //   "productName": "Leaf Rake",
    //   "productCode": "GDN-0011",
    //   "releaseDate": "March 19, 2019",
    //   "description": "Leaf rake with 48-inch wooden handle.",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": "assets/images/leaf_rake.png"
    // }
  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
