//this function is just a line separating my blocks of code.
function separatingLine() {
  console.log("_______________")
}

for(var i=0; i<5;i++){   
  console.log(i);
}
/*
T-diagram     output
i = 0          0  
i=1             1
i=2             2
i=3             3
i=4             4
i=5..program terminates
 */
separatingLine()

for(var i=0; i<5; i++)
{
  i = i + 1;  
  console.log(i);
}
/*
T-diagram  output
i=0         1
i=2         3
i=4         5
i=6..program ends
*/
separatingLine()

for(var i=0; i<5; i++)
{
  i = i + 3; 
  console.log(i);
}
/*
  T-diagram  ouput
  i=0         3
  i=4         7
  i=8... programs ends
*/
separatingLine()

function y(num1, num2){    
  return num1+num2;
}
console.log(y(2,3));
console.log(y(3,5));
//num1 + num2 = 2 + 3 = 5
// num1 + num2 = 3 + 5 = 8

separatingLine()


function y(num1, num2){
  console.log(num1)
  return num1+num2;
}
console.log(y(2,3));
console.log(y(3,5));
/*
first executes the function then consoles num1 which 2 in passed as an argument. executes again and consoles num1 again which the passed argument which is in this case is 3 and then executes the function third time and prints the sum of the two passed number as an argument which are 2 + 3 =5 and then executes final run and prints 3 + 5 = 8.
*/
separatingLine()

a = 15;
console.log(a);
function y(a){
  console.log(a) 
  return a;
}
b = y(10);
console.log(b);

/*
  T-diagram  output
  a = 15      15
              10
  b= 10       10
*/

separatingLine()

//I changed the function name from Y to X, because it conflicted with the other function and it was giving same result.
a = 15;
console.log(a);
function x(a){
  console.log(a);   
  return a*2;
}
b = x(10);
console.log(b);

/*
  T-diagram  output
  a = 15      15
              10
  b= 20       20
*/