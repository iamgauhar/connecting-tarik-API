import categoryModel from "../models/category.js";

export const createCategory = async (req, res) => {
    const category = req.body;
    await categoryModel.create(category)
    res.status(201).json({
        message: 'Category created successfully!',
        success: true,
    });

}

export const allCategory = async (req, res, next) => {
    try {
        const categories = await categoryModel.find()
        res.json({
            categories,
            message: "Categories fetched successfull",
            success: true,
        })
    } catch (err) {
        next(err)

    }
}