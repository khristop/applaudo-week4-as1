export interface VehicleSpec {
  speed: number,
  name: string
}

export class VehicleFactory {
  createVehicles(type: string, { speed, name }: VehicleSpec): Vehicle {
    let vehicle: Vehicle;
    switch (type) {
      case 'car':
        vehicle = new Car(speed, name);
        break;
      case 'boat':
        vehicle = new Boat(speed, name);
        break;
      case 'plane':
        vehicle = new Plane(speed, name);
        break;
      default:
        vehicle = null;
        break;
    }
    return vehicle;
  }

}

export abstract class Vehicle {
  constructor(public speed: number, public name: string, private minSpeed: number = 0, private maxSpeed: number = 200) { }

  public accelerate() {
    return !this.isMaxSpeed() && this.speed++;
  }
  public desacelerate() {
    return !this.isMinSpeed() && this.speed--;
  }

  public printSpeed() {
    console.log(`Vehicle with name ${this.name} has a speed of ${this.speed} km/h`);
  }

  private isMaxSpeed() {
    return this.speed >= this.maxSpeed;
  }

  private isMinSpeed() {
    return this.speed <= this.minSpeed;
  }
}

export class Boat extends Vehicle {
  constructor(initiaSpeed, name) {
    super(initiaSpeed, name);
  }
}


export class Car extends Vehicle {
  constructor(initiaSpeed, name) {
    super(initiaSpeed, name);
  }
}

export class Plane extends Vehicle {
  constructor(initiaSpeed, name) {
    super(initiaSpeed, name);
  }
}