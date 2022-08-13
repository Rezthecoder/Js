console.log("Start");
setTimeout(() => {
    console.log("callback");
}, 4000);
console.log("End")

let start = new Date().getTime();
let end = start;

while (end <start +5000) {
    end = new Date().getTime();
    // console.log(end);
}

console.log("Hello");
//new in github to learn the version control
