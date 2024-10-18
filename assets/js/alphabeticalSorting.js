function alfabetikSirala(){
    let nameList = [];
    let amountOfname = Number(prompt("Kaç adet sayı girmek istiyorsunuz?"));
    for (let i = 0; i < amountOfname; i++) {
        let ad = prompt((i + 1) + ". ismi girin:");
        nameList.push(ad);
    }
    console.table("Girilen isimler:", nameList);
    nameList.sort();
    console.table("Alfabetik sırayla isimler:", nameList);
}

alfabetikSirala();