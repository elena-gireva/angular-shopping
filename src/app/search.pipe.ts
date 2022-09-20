import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "./models/product";

@Pipe ({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(products:IProduct[], value:string):IProduct[] {
    return products.filter( p => {
      return p.title.toLowerCase().includes(value.toLowerCase())
    })
  }
}
