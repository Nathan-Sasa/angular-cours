import { Injectable } from "@angular/core"
import { IProduct } from "./exr1"


@Injectable({
    providedIn: 'root'
})


export class ProductServices{


    public getProducts(): IProduct[]{
        return [

        {
            name: 'airforce 1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Nike_air_Force_1_white_on_white.jpg',
            description : 'basket de sport',
            price: 140,
            rating: 3.5
        },
        {
            name: 'New Balance',
            image: 'https://anitahass.com/cdn/shop/collections/new-balance.gif?v=1739442140',
            description : 'basket Extreme',
            price: 200,
            rating: 4
        },
        {
            name: 'Balenciaga',
            image: 'https://holtrenfrew.scene7.com/is/image/HoltRenfrew1/m_5001251580_03',
            description : 'basket de luxe',
            price: 280,
            rating: 3.5
        },
        {
            name: 'versace',
            image: 'https://cdn.sanity.io/images/c1chvb1i/production/fbd85078f5a36c4744ee60810fd4dd71564efb46-1100x735.jpg?w=1760&h=1176&q=75&fit=max&auto=format',
            description : 'basket de luxe',
            price: 280,
            rating: 4.5
        },
        {
            name: 'Balman',
            image: 'https://s.yimg.com/ny/api/res/1.2/2bEF6haUyT5Q5kMvCeaRIA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en-US/homerun/footwear_news_642/891748f9695cb63823e4b1164b35af55',
            description : 'basket de luxe',
            price: 280,
            rating: 3.5
        },
        {
            name: 'Balenciaga',
            image: 'https://www.shutterstock.com/shutterstock/photos/2430150691/display_1500/stock-photo-phuket-thailand-jan-balenciaga-shoes-displayed-on-shelves-in-a-fashion-store-sport-and-2430150691.jpg',
            description : 'basket de luxe',
            price: 280,
            rating: 4.5
        },
        {
            name: 'Dolce Gabbana x Balman',
            image: 'https://cdn.salla.sa/pQxaGw/dbd2d23c-2435-4c25-846d-4356501de31f-1000x1000-7JAkZQvjttqYado8AqZuu8A0VtgakC5nFAMznZZQ.jpg',
            description : 'basket de luxe',
            price: 280,
            rating: 3
        },
        {
            name: 'Dolce Gabbana',
            image: 'https://cdn-images.farfetch-contents.com/16/90/99/42/16909942_54359759_600.jpg',
            description : 'basket de luxe',
            price: 280,
            rating: 3.6
        }
        ]
    }
}