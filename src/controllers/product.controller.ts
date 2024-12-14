import { Product } from "../models/product.model";
import { IProduct } from "../types/product";

const getProducts = async () => {
    const products = await Product.find()
    return products
}

const getProductById = async (id: string) => {
    console.log(id)
    return await Product.findById(id)
}

const createProduct = async (data: Omit<IProduct, 'id'>) => {
    const user = new Product(data)
    return await user.save()
}

const updateProduct = async (id: string, data: Partial<IProduct>) => {
    return await Product.findByIdAndUpdate(id, data, { new: true })
}

const deleteProduct = async (id: string) => {
    return await Product.findByIdAndDelete(id)
}

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}