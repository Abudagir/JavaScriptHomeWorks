class Person {
  name;
  gender;

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  residents = [];

  addResident(person) {
    if (person instanceof Person) {
      this.residents.push(person);
      console.log(`${person.name} новий житель`);
    } else {
      console.log("Якась помилка, я знаю яка але на скажу");
    }
  }
}

class House {
  apartments = [];
  maxApartments;

  constructor(maxApartments) {
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
      console.log(
        `Квартиру додано. кількість квартир ${this.apartments.length}`
      );
    } else {
      console.log("Досягнута максимальна кількість квартир");
    }
  }
}

const person1 = new Person("Ivan", "male");
const person2 = new Person("Ira", "female");
const person3 = new Person("Oleg", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
