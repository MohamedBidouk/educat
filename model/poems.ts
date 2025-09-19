import {ObjectId} from "mongodb";

export interface IPoem extends Document {
    title: string;
    desxreption: string;
    imageUrls: Array<string>;
    content: string;
    categoryId: ObjectId;
    createdBy: string;
    updatedBy: string;
    createdAt: Date
    updatedAt: Date
}

import mongoose, { Schema, Document, Model } from "mongoose";

const poemSchema = new Schema<IPoem>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desxreption: {
        type: String,
        required: true,
        unique: true
    },
    imageUrls: [{
        type: String,
        required: true
    }],
    content: {
        type: String,
        enum: ["admin", "poem"],
        default: "poem"
    },
});

const Poem: Model<IPoem> =
    mongoose.models.Poem || mongoose.model<IPoem>("Poem", poemSchema);

export default Poem;
