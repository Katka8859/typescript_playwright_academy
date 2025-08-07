import { EntryHall } from "./entry_hall";
//import { SecondFloor } from "./second_floor.ts";
//import { Bathroom } from "./bathroom";

new EntryHall("Kateřina Veliká")
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistAQuestion("co si dáš k večeři?")
  .entryBathroom()
  .washHands()
  .returnToEntryHall();

async function jduDal() {
  const jduDoDruhéhoPatra = new EntryHall("Kateřina Veliká");
  /*(
    await (await jduDoDruhéhoPatra.takeElevatorToSecondFloor()).lookAround(3)
  ).returnToEntryHallByElevator();*/
  await jduDoDruhéhoPatra
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(4))
    .then((firstFloor) => firstFloor.returnToEntryHallByElevator());
}

jduDal();

//npx tsx "cesta/k/souboru/visitor.ts" jak spustit test

/*
const entryHall = new EntryHall("Milan POM");
const bathroom = new Bathroom("Milan POM");

entryHall.entryBathroom();
bathroom.returnToEntryHall();*/
