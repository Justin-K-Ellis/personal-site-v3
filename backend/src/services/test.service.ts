export interface ICat {
  id: number;
  name: string;
}

export class TestService {
  private cats: ICat[];

  constructor() {
    this.cats = [
      { id: 1, name: "Mouchan" },
      { id: 2, name: "Cake" },
    ];
  }

  all(): ICat[] {
    return this.cats;
  }

  getById(id: number): ICat | null {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) {
      return null;
    }
    return cat;
  }
}
