//////////////////////////////////////////////////////////////////////
// Nr 1 //
let Arr = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];

for (let num = 0; num < 9; num++) {
    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] == num) {
            console.log(Arr[i]);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Nr 2 //
for(i = 0; i < Arr.length; i++){
    if(Arr[i] >= 15){
        console.log(Arr[i]);
    }
}

//////////////////////////////////////////////////////////////////////
// Nr 3 //
for(i = 0; i < Arr.length; i++){
    if(Arr[i] % 2 != 0){
        console.log(Arr[i]);
    }
}

//////////////////////////////////////////////////////////////////////
// Nr 4 //
for(i = 0; i < Arr.length; i++){
    if(Arr[i] % 3 == 0){
        console.log(Arr[i]);
    }
}

//////////////////////////////////////////////////////////////////////
// Nr 5 //
let sum = 0;

for(i = 0; i < Arr.length; i++){
    if(Arr[i] % 2 != 0){
        sum = sum + Arr[i];
    }
}
console.log(sum);

//////////////////////////////////////////////////////////////////////
// Nr 6 //
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] % 2 == 0) {
        sum1 += Arr[i];
    } else {
        sum2 += Arr[i];
    }
}

console.log(`sum1 = ${sum1} \nsum2 = ${sum2}`);

if(sum1 >= sum2){
    console.log(sum1 - sum2);
} else {
    console.log(sum2 - sum1);
}

//////////////////////////////////////////////////////////////////////