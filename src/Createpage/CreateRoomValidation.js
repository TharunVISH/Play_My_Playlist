let Obj1={name:"Tharun",
age:25,
code:"abc"
}
let ob2 = {... Obj1}
delete ob2.name


console.log("9"+JSON.stringify(Obj1))
console.log("10"+JSON.stringify(ob2))
