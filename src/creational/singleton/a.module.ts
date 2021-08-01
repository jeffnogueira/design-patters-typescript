import { MyDatabaseFunction } from './classes/my-database-function';

const myDatabaseA = MyDatabaseFunction;
myDatabaseA.add({ name: 'Luiz', age: 30 });
myDatabaseA.add({ name: 'Maria', age: 50 });
myDatabaseA.add({ name: 'Eduardo', age: 25 });

export { myDatabaseA };