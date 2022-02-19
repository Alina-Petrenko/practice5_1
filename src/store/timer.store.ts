import { makeAutoObservable } from "mobx"
import { Product } from "../Product";

export class Timer {
    secondsPassed = 0
    public basket: Product[]=[];
  
    constructor() {
        makeAutoObservable(this)
    }
  
    increase() {
        this.secondsPassed += 1
    }
  
    reset() {
        this.secondsPassed = 0
    }
    decrease() {
        this.secondsPassed -= 1
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