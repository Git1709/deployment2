import mongoose from "mongoose";

// Define the character schema
const CharacterSchema = mongoose.Schema({
  name: { type: String, required: true,  unique: true  },
  mugshot: { type: String, required: true },
  mainImage: { type: String, required: true },
  background: { type: String },
  artifacts: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      image: { type: String, required: true },
      effect: String,
    },
  ],
  roles: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  weapons: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
  materials: [
    {
      name: { type: String, required: true },
      image: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

// Export the model
export const Character = mongoose.model("Character", CharacterSchema);
