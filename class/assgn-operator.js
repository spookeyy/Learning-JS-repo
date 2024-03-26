let counter = 0;
//=> undefined

counter += 10;
//=> 10

counter -= 2;
//=> 8

counter *= 4;
//=> 32

counter /= 2;
//=> 16

counter %= 6;
//=> 4

counter **= 3;
//=> 64

//------------------------------------------------------------

Number.isInteger(42);
//=> true

Number.isInteger(0.42);
//=> false
//------------------------------------------------------------
Number.isFinite(9001);
//=> true

Number.isFinite(Infinity);
//=> false
//------------------------------------------------------------
Number.isNaN(10);
//=> false

Number.isNaN(undefined);
//=> false

Number.isNaN(NaN);
//=> true
//------------------------------------------------------------
Number.parseInt('100', 10);
//=> 100

Number.parseInt('100', 2);
//=> 4
//------------------------------------------------------------
Number.parseFloat('3.14159');
//=> 3.14159
//------------------------------------------------------------
Math.ceil(0.5);
//=> 1

Math.floor(0.5);
//=> 0

Math.round(0.5);
//=> 1

Math.round(0.49);
//=> 0
//------------------------------------------------------------
Math.max(1, 2, 3, 4, 5);
//=> 5

Math.min(1, 2, 3, 4, 5);
//=> 1
//------------------------------------------------------------
Math.random();
//=> 0.4495507082209371
//This method generates a random number between 0 (inclusive) and 1 (exclusive)
//------------------------------------------------------------
Math.floor(Math.random() * 10) + 1;
//=> 8

Math.floor(Math.random() * 10) + 1;
//=> 1

Math.floor(Math.random() * 10) + 1;
//=> 6
//-------------------------------------------------------------