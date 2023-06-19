import express from "express";
import ProductManager from './manager/productsManager.js'
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

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

 const manager= new ProductManager('./usuarios.json')
// async function products(){
//     await manager.addProduct(product1)
//     await manager.addProduct(product2)
//     await manager.addProduct(product3)
//     await manager.addProduct(product4)
//     await manager.addProduct(product5)
//     await manager.addProduct(product6)
//     await manager.addProduct(product7)
//     await manager.addProduct(product8)
//     await manager.addProduct(product9)
//     await manager.addProduct(product10)
// }
// products()
app.get('/products',async(req,res)=>{
    const limit=parseInt(req.query.limit)
    console.log(limit)
    try{
        const product=await manager.getProduct()
        if(isNaN(limit)){
            return  res.json(product)
        }
       
        res.json(product.slice(0,limit))
    }catch(err){
        console.log(err)
    }
  
})
app.get('/products/:pid',async(req,res)=>{
    try{
        const{pid}=req.params;
        const user=await manager.getProductById(Number(pid))
        
        if(user)res.json(user)
        else res.status(400).json({message: 'Product not found'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
   
})
app.listen(8080,()=>{
    console.log("Server ok, port 8080")
})