import fs from 'fs'


export default class ProductManager{
     #id=0;
     constructor(path) {
        this.path=path;
     }
     async getProduct(){
        try{
        if(fs.existsSync(this.path)){
            const arrProduct=await fs.promises.readFile(this.path,"utf-8")
            const arrParse=JSON.parse(arrProduct)
            return arrParse
        }else{
            return []
        }
    }catch(error){
        console.log(error)
    }
     }

     async addProduct(objProduct){
        try{
        this.#id+=1;
        objProduct.id=this.#id;
        const arrProduct=await this.getProduct();
        arrProduct.push(objProduct)
        await fs.promises.writeFile(this.path,JSON.stringify(arrProduct));
        return objProduct
     }
     catch(error){
        console.log(error)
     }
    }
    async getProductById(id){
       try{
            if(fs.existsSync(this.path)){
                const arr=await fs.promises.readFile(this.path,'utf-8')
                const arrParse=JSON.parse(arr)
                
                const search=arrParse.find(element=>element.id===id)
                 if(search)return search
                 else throw new Error("ID no encontrado")
            }
        else{
            throw new Error("archivo no existe")
        }
    }catch(err){
        console.log(err.message)
    }
    }
    async updateProduct(id,obj){
        try{
            if(fs.existsSync(this.path)){
                const arr=await fs.promises.readFile(this.path,'utf-8')
                const arrParse=JSON.parse(arr)
                const search=arrParse.findIndex(element=>element.id===id)
                if(search>=0){
                obj.id=id;//me aseguro que el id sea el mismos
                arrParse.splice(search,1,obj)
                await fs.promises.writeFile(this.path,JSON.stringify(arrParse));
                }else{
                    throw new Error("ID no encontrado")
                }

            }
        else{
            throw new Error("archivo no existe")
        }
    }catch(err){
        console.log(err.message)
    }
    }
    async deleteProduct(id){
        try{
            if(fs.existsSync(this.path)){
              const arr=await fs.promises.readFile(this.path,"utf-8")
              const arrParse=JSON.parse(arr)
              const objSearch=arrParse.find(element=>element.id===id)
              if(objSearch){
              const arrNew=arrParse.filter(element=>element.id!==id)
              console.log(arrNew)
              await fs.promises.writeFile(this.path,JSON.stringify(arrNew))
              }else{
                throw new Error("ID no encontrado")
              }

            }
            else{
                throw new Error("archivo no existe")
        }
    }catch(err){
        console.log(err.message)
    }
    
    }
     
}

//Products
const product1={
    title:"Tv",
    description:"tv 32 pulgadas",
    price:2000,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25

}
const product2={
    title:"Radio",
    description:"radio fm/am",
    price:250,
    thumbnail:"Sin imagen",
    code:"123456",
    stock:20

}
const product3={
    title:"Notebook",
    description:"Asus",
    price:20000,
    thumbnail:"Sin imagen",
    code:"123654",
    stock:10

}
const product4={
    title:"Celular",
    description:"Iphone",
    price:200000,
    thumbnail:"Sin imagen",
    code:"12365q4",
    stock:20

}
const product5={
    title:"mricoondas",
    description:"philips",
    price:45000,
    thumbnail:"Sin imagen",
    code:"1236w54",
    stock:18

}
const product6={
    title:"Tablet",
    description:"Samsung",
    price:38000,
    thumbnail:"Sin imagen",
    code:"123f654",
    stock:33

}
const product7={
    title:"cafetera",
    description:"windel",
    price:48000,
    thumbnail:"Sin imagen",
    code:"12s3654",
    stock:10

}
const product8={
    title:"Notebook",
    description:"HP",
    price:45600,
    thumbnail:"Sin imagen",
    code:"1233rd654",
    stock:25

}
const product9={
    title:"play 5",
    description:"Aplay 5 ",
    price:203000,
    thumbnail:"Sin imagen",
    code:"12365sf4",
    stock:10

}
const product10={
    title:"molinillo",
    description:"peabody",
    price:24000,
    thumbnail:"Sin imagen",
    code:"12365bv4",
    stock:10

}
