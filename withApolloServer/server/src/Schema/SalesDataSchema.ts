import mongoose from 'mongoose';

const SalesDataSchema = new mongoose.Schema({
  category: String,
  name: String,
  countSales: Number,
  dateSales: Array,
});

export default mongoose.model('SalesData', SalesDataSchema);
