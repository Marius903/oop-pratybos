// 1. Animal klase

class Animal {
  static print() {
    console.log("Aš esu gyvūnas");
  }
}

Animal.print();

// 2. Person klase

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  printPerson() {
    console.log("Žmogaus duomenys:");

    for (let property in this) {
      console.log(this[property]);
    }
  }

  printAll() {
    for (let property in this) {
      console.log(`${property}: ${this[property]}`);
    }
  }
}

const person1 = new Person("Jonas", "Jonaitis", 25);

console.log("2. PERSON:");
person1.printPerson();

console.log("Visi žmogaus duomenys:");
person1.printAll();

// 3. Student klase

class Student extends Person {
  constructor(name, surname, age, course, grades) {
    super(name, surname, age);

    this.course = course;
    this.grades = grades;
  }

  printStudent() {
    let average =
      this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;

    console.log(
      `${this.name} ${this.surname}, ${this.age}, kursas: ${this.course}, pažymių vidurkis: ${average.toFixed(2)}`,
    );
  }
}

const student1 = new Student(
  "Petras",
  "Petraitis",
  20,
  "JavaScript",
  [8, 9, 10, 7, 9],
);

console.log("3. STUDENT:");
student1.printStudent();

// 4. Manager klase

class Manager extends Person {
  constructor(name, surname, age, salary, areas) {
    super(name, surname, age);

    this.salary = salary;
    this.areas = areas;
  }

  // 4a
  checkSalary() {
    if (this.salary > 1200) {
      console.log("Hoooray!!!");
    } else if (this.salary > 800) {
      console.log("Not bad.");
    } else {
      console.log("Atlyginimas per mažas.");
    }
  }

  // 4b
  set setAreas(newAreas) {
    this.areas = newAreas;
  }

  // 4c
  get getAreas() {
    return this.areas;
  }
}

// Sukuriame Manager objektą
const manager1 = new Manager("Antanas", "Antanaitis", 35, 1500, [
  "Klientų aptarnavimas",
  "Rinkodara",
]);

console.log("4. MANAGER:");

manager1.checkSalary();

manager1.setAreas = ["Klientų aptarnavimas", "Rinkodara", "Pardavimai"];

console.log("Vadovo prižiūrimos sritys:");
console.log(manager1.getAreas);
