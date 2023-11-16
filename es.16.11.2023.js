let arraynomi = ["Franco", "Gennaro", "valerio", "Giulia" ,"Eugenia"];
for (let i = 0;i<arraynomi.length;i++) {
    for ( let j = 0; j < arraynomi.length;j++) {
        console.log(arraynomi[i][j])
    }
}



let sommacumulata = 0;

for (let i = 1; i <=200; i ++) {
    sommacumulata = sommacumulata + i;

    console.log(sommacumulata);

}


for (let i = 1; i <=400; i++) {
    if (i % 20 == 0) {
        console.log(i);

    }
    
}