const fs=require("fs").promises

class contenedor{

    constructor(path){
      this.path=path

    }

   async save(objeto){
try {
    const leer=await fs.readFile(this.path,"utf-8");
    const data=JSON.parse(leer)
    let id;
    data.length=== 0
    ? (id = 1)
    : (id= data[data.length -1].id+1);
    const newproduct = {...objeto,id}
    data.push(newproduct);
    await fs.writeFile(this.path,JSON.stringify(data,null,2),"utf-8")
    return newproduct.id;
} catch (e) {
    console.log(e);
}
    }

  async getByid(id){
 try {
    const leer=await fs.readFile(this.path,"utf-8");
    const data=JSON.parse(leer)
    const obj=data.find(obj=>obj.id === id)
    if (!obj) {
        return null
    }
    return obj
    } catch (e) {
    console.log(e);
}
    }

    async getAll(){
      const leer=await fs.readFile(this.path,"utf-8");
      return JSON.parse(leer)
    }

    async deleteById(Number){
try {
let del=this.productos.map(el=>el.id).indexof(Number)
this.productos.splice(del,1)
await fs.writeFile("./productos.json",[])
await fs.writeFile("./productos.json",JSON.stringify(this.productos,null,"utf-8"))
} catch (e) {
    console.log(e);
   
}
    }

    async deleteAll(){
try {
    await fs.writeFile(this.path,JSON.stringify([],null,2),"utf-8")
} catch (e) {
    console.log(e);
}
    }

    
}
module.exports=contenedor