import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { onErrorResumeNext } from 'rxjs';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    // no need to write implement and import lifecycle hook, 
    // you can simply use lifecycle hook method without importing anything
    // but we will stay synced with plural site tutorial

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 20;
    showImage: boolean = false;
    errorMessage: string;
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProductService) {
    
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            // there are two syntaxses for observable next, error and complete
            // arrow syntax and classis function syntax
            // both are good and valid
            // choose either of these two

            // next(products) {
            //     this.products = products;
            //     this.filteredProducts = this.products;
            // },
            // error(err) { this.errorMessage = err } 
            
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        
    }
    
}