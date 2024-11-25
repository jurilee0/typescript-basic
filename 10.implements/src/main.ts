class Car {
  mileage = 0;
  price = 100;
  color = "black";
  drive() {
    return "drive!";
  }
  brake() {
    return "brake!";
  }
}

interface Part {
  seats: number;
  tire: number;
}

class Ford implements Car, Part {
  mileage = 1;
  price = 2;
  color = "red";
  seats = 5;
  tire = 4;

  drive() {
    return "drive!";
  }
  brake() {
    return "brake!";
  }
}
// class Ford implements Car
// Type 'Ford' is missing the following properties from type 'Car': mileage, price, color, drive, brake

const myFordCar = new Ford();
