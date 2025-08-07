import { Bathroom } from "./bathroom";
import { SecondFloor } from "./second_floor.ts";

export class EntryHall {
  //properties
  readonly name: string;

  //constructor
  constructor(name: string) {
    this.name = name;
    console.log(`Uživatel ${name} vstoupil do vstupní haly.`);
  }

  //methods
  entryBathroom(): Bathroom {
    console.log(`Uživatel ${this.name} jde na toaletu`);
    return new Bathroom(this.name);
  }

  askReceptionistAQuestion(question: string) {
    console.log(`Uživatel ${this.name} se ptá na otázku: ${question}`);
    console.log("Recepční mlčí");
    return this;
  }
  async takeElevatorToSecondFloor(): Promise<SecondFloor> {
    console.log(`Uživatel ${this.name} si volá výtah do druhé patra.`);
    const waitingForElevatorMs = 2000; // Čekání na výtah 2 sekundy
    // Simulace čekání na výtah
    await new Promise((resolve) => setTimeout(resolve, waitingForElevatorMs));
    // Výtah přijíždí
    console.log(`Výtah přijel do vstupnej haly.`);
    console.log(`Výtah dorazil, uživatel ${this.name} nastupuje.`);
    // Jízda výtahem 2 sekundy
    const elevatorRideMs = 2000;
    await new Promise((resolve) => setTimeout(resolve, elevatorRideMs));
    console.log(`Uživatel ${this.name} vystupuje z výtahu ve druhým patre.`);
    return new SecondFloor(this.name);
  }

  goToSecondFloor(): SecondFloor {
    console.log(`Uživatel ${this.name} jde na toaletu`);
    return new SecondFloor(this.name);
  }
}
