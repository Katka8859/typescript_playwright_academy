import { EntryHall } from "./entry_hall";

export class Bathroom {
  //properties
  readonly name: string;

  //constructor
  constructor(name: string) {
    this.name = name;
    console.log(`Uživatel ${name} vstoupil na toaletu.`);
  }

  //methods
  returnToEntryHall(): EntryHall {
    console.log(`Uživatel ${this.name} se vrací do vstupní haly.`);
    return new EntryHall(this.name);
  }

  washHands(): Bathroom {
    console.log(`Návštěvník ${this.name} si umyl ruce.`);
    return this;
  }
}
