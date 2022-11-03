const conteiner =require("./clase.js")
const productos=new conteiner("./productos.json")

async function ejecutar(){

const objeto4={
title: "smart tv 50 lg",
price:150300,
tumbnail:"url"

}

const objeto3={
title: "heladera patrick inverter",
price:129450,
thumbnail:"url"


}

const objeto2={
title:"celular samsung s20fe",
price:180560,
tumbnail:"url"

}

const objeto1={
title:"pava electrica liliana",
price:15800,
thumbnail:"url"

}
await productos.deleteById(3)

}
ejecutar()