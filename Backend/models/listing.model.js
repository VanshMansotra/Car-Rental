import mongoose,{Schema} from "mongoose";

const listingschema=new Schema(
    {
        make:{
            type: String,
            required: [true,'Carname is Required']
        },
        model:{
            type: String,
            required: [true,'CarModel is Required']
        },
        description:{
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        rent: {
            type: Number,
            required: true
        },
        available:{
            type: boolean,
            required: true,
            default: true
        },
        image:{
            type: Array,
            required:[true,'Image is required']
        },
    },
    { timestamps: true}
)

export const Listing=mongoose.model('Listing',listingschema)