 //1-20 arasındaki tüm sayılara tam bölünebilen en küçük sayı
let sonuc = 1;
const start =new Date();
for (let i = 1 + 1; i <= 20; i++) {
      
    let a = sonuc;
    //console.log({a});
    let b = i;
    //console.log({b});
    while (b !== 0) {
    const gecici = b;
    b = a % b;
    a = gecici;//ebob
    //console.log({a});
    }
    sonuc = (sonuc * i) / a;
    //console.log({sonuc});
    //console.log("-------------")
}
const end = new Date();
const sure =end.getTime()-start.getTime();
console.log("1 ile 20 arasındaki tüm sayılara tam bölünebilen en küçük sayı:"+sonuc,{sure});
