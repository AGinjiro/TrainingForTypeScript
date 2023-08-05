import { logMessage } from './function/basic';
import { sumProductsPrice, isUserSignedIn } from './function/parameters';

logMessage('Hello World');
isUserSignedIn('ABC', 'Gin');
isUserSignedIn('aaa');

const sum = sumProductsPrice(9000, 30000, 500);

console.log(sum);
