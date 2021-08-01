import { MyDatabaseFunction } from './classes/my-database-function';
import { myDatabaseA } from './a.module';

const myDatabaseB = MyDatabaseFunction;
myDatabaseB.add({ name: 'Roberto', age: 30 });
myDatabaseB.add({ name: 'Joana', age: 50 });
myDatabaseB.add({ name: 'Luíza', age: 25 });
myDatabaseB.show();

console.log(myDatabaseB === myDatabaseA);

export { myDatabaseB };