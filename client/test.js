let a = [{image: 1}, {image: 2}, {image: 3}]
let b = {...a.map(e => e.image)}
console.log(b["0"])