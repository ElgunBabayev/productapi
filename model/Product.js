const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const productSchema = Schema({
    productName: String,
    productDescription: String,
    productDate: {
        type:Date,
        default:Date.now()
    }
   
})



const product = mongoose.model('Product', productSchema)

// const newProduct= new product({
//     productName:'Apple',
//     productDescription:'dxgg'
// })
// newProduct.save()

module.exports = {
    product
}