import string from '@hapi/joi/lib/types/string';
import { Schema, model } from 'mongoose';

const customerSchema = new Schema(
    {
        userId: {
            type: String,
        },
        customer: [{
            addressType: {
                type: String
            },
            fullAddress: {
                type: String
            },
            city: {
                type: String,
            },
            landmark: {
                type: String
            },
            state: {
                type: String
            },
            name: {
                type: String
            },
            phoneNumber: {
                type: String
            },
            pincode: {
                type: String
            },
            locality: {
                type: String
            }
        }]
    }
)

export default model('Customer', customerSchema );