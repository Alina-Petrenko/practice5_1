import { makeAutoObservable } from "mobx"
import { Product } from "../Product";

export class Timer {
    public basket: Product[]=[];
  
    constructor() {
        makeAutoObservable(this)
    }
    
    reset() {
        this.basket = []
    }

    AddProduct(product: Product) {
        this.basket.push(product);
    }
    RemoveProduct(i: number) {
        let index = this.basket.findIndex(x => x.id = i);
        if (index == -1) {
             return;
        }
        this.basket.splice(index);

    }
  }