import { randomVehicleAlgorithm } from './random-vehicle-algorithm';
import { randomNumber } from './utils/random-number';
import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const name = customerNames[randomNumber(customerNames.length)];
  const vehicle = randomVehicleAlgorithm();
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumber(100)}`);
  newCar.stop();
  console.log('---');
}