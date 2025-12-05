const inscriptions=[
{id:10,nom:'Rami',filiere:'DEV'},
{id:11,nom:'Kamali',filiere:'DEV'},
{id:12,nom:'Fahmi',filiere:'DEV'},
{id:13,nom:'Chaouki',filiere:'DEV'}
];
function insérer(n,f){
    var identifiants=inscriptions.map((i)=>i.id)
    var i=Math.max(...identifiants)+1
    console.log(i)
    inscriptions.splice(inscriptions.length,0,{id:i,nom:n,filiere:f})
}
insérer("reda","DEV")
console.log(inscriptions)
