var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
let result = integers.sort((a,b) => {return b - a}).filter((num) => {return num < 19}).map((num) => {return (num * 1.5) - 1}).reduce((previous, current) => {return previous + current});
console.log("result", result)
/*
function sortInt() {
  integers.sort(function (a, b){
      return b - a
  }); 
console.log(integers);
}


sortInt();



function remove(nums) {
    return nums < 19;
}

function res() {
    console.log(integers.filter(remove));
}

res();

function math(){
    let newValue = 0;
    for (let i = 0; i < integers.length; i++) {
    newValue = integers[i] * 1.5 - 1;
        console.log(newValue);
    }
}

math();
*/