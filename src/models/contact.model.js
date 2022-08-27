import pkg from 'mongoose';
const { Schema, model } = pkg;

const contactoSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    Apellido: {
      type: String,
      require: true,
      trim: true,
    },
    segundoApellido: {
      type: String,
      require: true,
      trim: true,
    },
    pais: {
      type: String,
      require: true,
      trim: true,
    },
    celular: {
      type: Number,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);

export default model("contact", contactoSchema);
