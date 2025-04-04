import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    newArrivalProducts: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        required: true,
    },
    size: [{
        type: String,
        enum: ['S', 'M', 'L', 'XL', 'XXL'],
        required: true,
    }],
});

export const Product = mongoose.model("Product", productSchema);