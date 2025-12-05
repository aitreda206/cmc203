const personnes = [
{ nom: "Rami", age: 33, estMember: true },
{ nom: "Fatihi", age: 24, estMember: false },
{ nom: "Chakib", age: 45, estMember: true },
{ nom: "Mounir", age: 37, estMember: false },
];
let membres=personnes.filter((p)=>p.estMember==true)
console.log(membres)
