import Customer from '../models/customer.model';

export const createCustomer = async (body) => {
    console.log("customer user id ", body.userId);
    console.log("customer user id ", body);
    const customerDetails = await Customer.create({ userId: body.userId, customer: [body] })
    if (customerDetails) {
        return customerDetails;
    }
    else {
        throw new Error("fill the correct details...")
    }
}

export const getAllCustomer = async (body) => {
    const customerData = await Customer.find()
    if (customerData) {
        return customerData;
    }
    else {
        throw new Error("no customers ..................")
    }
}

