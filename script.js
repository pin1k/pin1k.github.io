let a = prompt('Сколько коров на лугу?(Писать только цифрами)and(0=<korov=<100)',12);
let c = a % 10
let d = (a <= 14 && a >= 11) ?   alert(`${a} коров`):
(c == 0 || c >=5 && c<=9) ?  alert(`${a} коров`):
(c == 1) ?alert(`${a} корова`):
(c >=2 && c <=4) ? alert(`${a} коровы`):
alert('Неправильно');
