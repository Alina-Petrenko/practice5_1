import { makeAutoObservable } from "mobx"
import { Product } from "../models/Product";

export class Basket {

    
    public basket: Product[]=[];
    price: number = 0;

    constructor() {
        makeAutoObservable(this)
    }
    
    reset() {
        this.basket = []
        this.price = 0;
    }

    AddProduct(product: Product) {
        this.basket.push(product);
        this.price += product.price;
    }
    RemoveProduct(id: number) {
        let index = this.basket.findIndex(x => x.id === id);
        if (index == -1) {
             return;
        }
        this.price -= this.basket[index].price;
        this.basket.splice(index,1);
    }
  }