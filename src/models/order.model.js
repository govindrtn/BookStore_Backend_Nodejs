import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
{
    orders: [{
        product_id: {
        type: String
      },
      product_name: {
        type: String
      },
      product_quantity: {
        type: String
      },
      product_price: {
        type: String
      },     
    }]
})

export default model('Order', orderSchema);