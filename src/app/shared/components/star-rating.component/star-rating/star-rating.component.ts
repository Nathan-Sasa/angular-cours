import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  imports: [],
  standalone: true,
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnChanges{
    
    public starWidth: number = 0;

    @Input()
    
    public rating: number = 2;
    
    
    ngOnChanges() {
        this.starWidth = this.rating * 125 / 5;
    }
    
    @Output() 
    public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

    public sendRating(): void {
        this.starRatingClicked.emit(`la note est de ${this.rating}`);
    }
}
