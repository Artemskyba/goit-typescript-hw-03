class Key {
  constructor(private signature: number = Math.random()) {}
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(
    protected key: Key,
    protected door: boolean = false,
    protected tenants: Person[] = []
  ) {}

  comeIn(person: Person): void {
    this.door
      ? (this.tenants.push(person),
        console.log("The door is open! Welkome home!"))
      : console.log("Door is closed!!!");
  }

  abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
  OpenDoor(key: Key) {
    key.getSignature() === this.key.getSignature()
      ? console.log("The key fits the lock, the door is open.")
      : console.log("The key does not fit the lock, the door remains closed.");
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
