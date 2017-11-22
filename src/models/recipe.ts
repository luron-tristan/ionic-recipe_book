import { Ingredient } from "./ingredient";

export class Recipe {
  constructor(public title: string,
              public description,
              public difficulty,
              public ingredients: Ingredient[]) {}
}
