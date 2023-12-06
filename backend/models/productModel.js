import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    image: { type: String, required: true },
    // brand: { type: String, required: true },
    category: { type: String, required: true },
    // category: {
    //         type: mongoose.ObjectId,
    //         ref: "Category",
    //         required: true,
    //       },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    reviews: [reviewSchema],
        photo: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     category: {
//       type: mongoose.ObjectId,
//       ref: "Category",
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//     photo: {
//       data: Buffer,
//       contentType: String,
//     },
//     shipping: {
//       type: Boolean,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Products", productSchema);