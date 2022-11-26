"use strict"
let a = prompt('Сколько коров на лугу?',12);
let c = a % 10

if (a <= 14 && a >= 11){
  alert(`${a} korov`);
} else if (c == 0 || c >=5 && c<=9){
  alert(`${a} korov`)
} else if(c == 1) {
  alert(`${a} korova`);
} else if(c >=2 && c <=4){
  alert(`${a} korovy`)
}
  
