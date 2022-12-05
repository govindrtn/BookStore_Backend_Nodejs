import Order from '../models/order.model';


export const AddOrder = async (body) => {
    console.log(body)
    const order = await Order.create({orders:[body]});
    if (order) {
        return order;
    }
    else {
        throw new Error("order not created...")
    }
  };
