import { Component } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class starComponent {
    rating: number = 4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
} 