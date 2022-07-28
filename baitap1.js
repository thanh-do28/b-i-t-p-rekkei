// trong javascript trong trường hợp đặt biến bị lỗi là
// có chữ số ở đầu biến
// chứa kí tự đặc biệt
// tên dành riêng
// ex1 
// let 1name = 'đô';
// let na me = 'đô';
// let return = 'đô';

// trong javascrip có các cách kiểm tra kiểu dữ liệu là
// typeof operator : trả về một chuỗi mô tả kiểu dữ liệu của bất kỳ toán hạng đầu vào
// instanceof operator : so sánh hai giá trị (một biến và một function) bằng cách kiểm tra chuỗi nguyên mẫu (prototype chain) của biến với nguyên mẫu của function object
// constructor property : Các đối tượng kế thừa constructor property từ nguyên mẫu của chúng, chúng ta có thể sử dụng nó để kiểm tra kiểu của biến mà không phải kiểm tra toàn bộ chuỗi nguyên mẫu

// có 8 kiểu dữ liệu cơ bản trong javascrip
// Bảy kiểu dữ liệu nguyên thủy
// number, bigint, string, boolean, null, undefined, symbol
// Và một kiểu dữ liệu không nguyên thủy:
// object


// let msg = 'Rikkei is awesome';
// let studentCount = 0;
// console.log(msg);
// console.log(studentCount);
// msg = 'Coding is hard but super cool and fun';
// studentCount = 30;
// console.log(msg);
// console.log(studentCount);
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// let a = 5
// let b = Number(prompt('nhập số đầu tiên'));
// let sum = a + b;
// console.log('tổng sau khi tăng là : ' + sum);

// alert('đánh nhau ko');
// let name = prompt('hi there,your name please?');
// alert('đánh nhau không ' + name);

// let firstName = prompt('enrer your firstName');
// let lastName = prompt('enter your lastName');
// alert(firstName +' '+ lastName);

// let canh = Number(prompt('nhập cạnh của hình vuông'));
// dientich = canh ** 2;
// alert('diện tích hình vuông là : ' + dientich);

// let chuvi = Number(prompt('nhập chu vi của hình tròn'));
// dientich = (chuvi ** 2) * 3.14;
// alert('diện tích hình tròn là : ' + dientich);

// let Celsius = Number(prompt('nhập Celsius'));
// Fahrenheit = 1.8 * Celsius + 32;
// alert('Fahrenheit là : ' + Fahrenheit);

let a = 'The quick ___ fox jumps over the ___ dog';
alert(a);
let b = prompt('nhập từ vào chỗ trống 1');
let c = prompt('nhập từ vào chỗ trống 2');
alert(`The quick ${b} fox jumps over the ${c} dog`);

// function demo() {
// forward (100)
// right (90)
// forward (100)
// right (90)
// forward (100)
// right (90)
// forward (100)


