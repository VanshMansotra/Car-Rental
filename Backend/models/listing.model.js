import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    { timestamps: true}
)

listingschema.plugin(mongooseAggregatePaginate)

export const Listing=mongoose.model('Listing',listingschema)