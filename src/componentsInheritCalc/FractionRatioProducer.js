
///////////////////////to find lcm value//////////////////////////////
export function lcm(input_array) {
    if (toString.call(input_array) !== "[object Array]")  
        return  false;  
 var r1 = 0, r2 = 0;
    var l = input_array.length;
    // let i,
    for(let i=0;i<l;i++) {
        r1 = input_array[i] % input_array[i + 1];
        if(r1 === 0) {
            input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
        }
        else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0) {
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
            }
            else {
                input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
            }
        }
    }
    return input_array[l - 1];
}

///////////////////////String Fraction ToDecimal numbers//////////////////////////////

function StringFractionToDec(a) {
    var split = a.split('/');
    var result = parseInt(split[0], 10) / parseInt(split[1], 10);
    return result
}



////////////////decimal To Fraction method/////////////

function decimalToFraction(value, donly = true) {
    var tolerance = 1.0E-6; // from how many decimals the number is rounded
    var h1 = 1;
    var h2 = 0;
    var k1 = 0;
    var k2 = 1;
    var negative = false;
    var i;
  
    if (parseInt(value) === value) { // if value is an integer, stop the script
      return value;
    } else if (value < 0) {
      negative = true;
      value = -value;
    }
  
    if (donly) {
      i = parseInt(value);
      value -= i;
    }
  
    var b = value;
  
    do {
      var a = Math.floor(b);
      // console.log(a)
      var aux = h1;
      h1 = a * h1 + h2;
      h2 = aux;
      aux = k1;
      k1 = a * k1 + k2;
      k2 = aux;
      b = 1 / (b - a);
    } while (Math.abs(value - h1 / k1) > value * tolerance);
  
    return (negative ? "-" : '') + ((donly & (i !== 0)) ? i + ' ' : '') + (h1 === 0 ? '' : h1 + "/" + k1);
  }



const De_1_2 = StringFractionToDec("1/2");
const De_1_3 = StringFractionToDec("1/3");
const De_1_4 = StringFractionToDec("1/4");
const De_1_6 = StringFractionToDec("1/6");
const De_1_8 = StringFractionToDec("1/8");
const De_1_1 = StringFractionToDec("1/1");

export const F_1_2 = decimalToFraction(De_1_2);
export const F_1_3 = decimalToFraction(De_1_3);
export const F_1_4 = decimalToFraction(De_1_4);
export const F_1_6 = decimalToFraction(De_1_6);
export const F_1_8 = decimalToFraction(De_1_8);
export const F_1_1 = decimalToFraction(De_1_1);




