class Key {
  private signature: number;
  constructor(signature: number) {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tennants: Person[];
  constructor(key: Key) {
    this.key = key;
    this.tennants = [];
  }

  public comeIn(person: Person) {
    if (this.door) {
      this.tennants.push(person);
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

//
const key = new Key(Math.random());
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
