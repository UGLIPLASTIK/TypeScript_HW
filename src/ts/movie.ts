import Buyable from "./buyable";

export default class Movie implements Buyable {
  constructor(
    readonly year: number, 
    readonly country: string, 
    readonly tagline: string, 
    readonly genre: string, 
    readonly duration: string,) {
  }
}