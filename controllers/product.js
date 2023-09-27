import productModel from "../models/prodects.js"

export const createProduct = async (req, res, next) => {
    const productInfo = req.body
    try {
        await productModel.create(productInfo)
        res.status(201).json({
            message: 'Product added successfully!',
            success: true,
        });
    } catch (err) {
        next(err)
    }

}

export const allProduct = async (req, res, next) => {
    try {
        const products = await productModel.find()
        res.status(201).json({
            products,
            message: 'All Product fetched successfully!',
            success: true,
        });

    } catch (err) {
        next(err)

    }
}