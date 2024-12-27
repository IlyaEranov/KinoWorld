let persons = [
    {
        name: "sdfg",
        p: "dev"
    },
    {
        name: "wer",
        p: "a"
    },
    {
        name: "asdf",
        p: "dev"
    }
]

let a = "asdf"

console.log(persons.filter(e => e.p == "dev").map(e => e.name).join(", "))
console.log(a.slice(-1))