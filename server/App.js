import express from 'express'
import fs from 'fs'
import cors from 'cors'

// const express = require("express")
// const cors = require("cors")
// const fs = require("fs")

const app = express()
const port = 3200

// Cors
app.use(cors())

// Route
app.get('/banner', (req, res)=> {
    // res.send('Hallo') -> menampilkan response
    const data = getData('./data/Banner.json')
    res.json(data)
})

app.get('/category', (req, res)=> {
    const data = getData('./data/Category.json')
    res.json(data)
})

app.get('/product', (req, res)=> {
    const data = getData('./data/Product.json')
    res.json(data)
})

app.get('/product/:id', (req, res)=> {
    const data = findData(req.params.id)
    res.json(data)
})

// Port
app.listen(port, ()=> {
    console.log(`server has running in port: ${port}`)
})

const getData = (path)=> {
    const data = fs.readFileSync(path, 'utf-8', (err, data)=> data )
    return JSON.parse(data)
}

const findData = (id)=> {
    const dataProduct = getData('./data/Product.json')
    const findProduct = dataProduct.find((data) => data.id == id)
    let dummy
    dummy = 
    [
        {
            "id" : 1, 
            "brand" : "DATA TIDAK DITEMUKAN", 
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus...", 
            "price" : 20000,
            "promo" : 19000, 
            "category" : "SMARTPHONE",
            "image" : ["https://i.postimg.cc/0Qbcpn40/Case.jpg"]
        }
    ]

    if(dataProduct) {
        return dummy
    }
    return findProduct
}
