import type { Cat, NewCat } from "../../../shared/types/schema.js";

export class TestService {
  private cats: Cat[];

  constructor() {
    this.cats = [
      { id: 1, name: "Mouchan" },
      { id: 2, name: "Cake" },
    ];
  }

  all(): Cat[] {
    return this.cats;
  }

  getById(id: number): Cat | null {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) {
      return null;
    }
    return cat;
  }

  create(cat: NewCat): Cat | boolean {
    const catExists = this.cats.some((c) => c.name === cat.name);
    if (catExists) return false;

    const newCat = {
      id: Math.ceil(Math.random() * 1000),
      name: cat.name,
    };
    this.cats.push(newCat);
    return newCat;
  }
}
