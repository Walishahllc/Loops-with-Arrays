let car = ["Audi","BMW","Toyota","United","Honda"];

car.push("XUV");

 for(i=0; i<car.length; i++){    // yahan par car.length isi liye use kiya he because lenght incre or decre ho sakti he 
    console.log(i, car[i]);
}

//backward loop

for(let i=car.length-1; i>=0; i--){
    console.log(i, car[i]);
}

//geneally array k jb hume ne travers karna hota he means array ek ek 
// element ko ja kar access karna hota he tb hum loop ka hi use hote he like that


// because array kitne bhi choty ya bare ho sakty isi liye ose index ki jaga 
// loop se access karna behtar he