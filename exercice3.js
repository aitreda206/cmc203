const inscriptions=[
{id:10,nom:'Rami',filiere:'DEV'},
{id:11,nom:'Kamali',filiere:'DEV'},
{id:12,nom:'Fahmi',filiere:'DEV'},
{id:13,nom:'Chaouki',filiere:'DEV'}
];
function insérer(n,f){
    let derniere_inscription=inscriptions[inscriptions.length]
    console.log(derniere_inscription)
    let i=derniere_inscription.id+1
    inscriptions.splice(inscriptions.length,0,{id:i,nom:n,filiere:f})
}
insérer(14,"reda","DEV")
console.log(inscriptions)
