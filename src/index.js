module.exports = function multiply (first, second) {
	
	let c = new Int32Array(first.length + second.length); 

for (let i = first.length; i > 0; i--) for (let j = second.length; j > 0; j--) c[i + j - 1] += first[i - 1] * second[j - 1]; 

let cur = 0; 

for (i = c.length - 1; i > -1; i--) 
{ 
c[i] += cur; 
cur = (c[i] - c[i] % 10) / 10; 
c[i] = c[i] % 10; 
} 

let res = c.join('').replace(/^0+/, ''); 
if (res == '') res = '0'; 

return res; 
}


