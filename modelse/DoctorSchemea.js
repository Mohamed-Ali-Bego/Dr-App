import mongoose from "mongoose";

const DoctorSchemea = new mongoose.Schema({
    name: String,
    specialty: String,
    image: String,
    description: String,
    experienceYears: Number
})

const Doctor = mongoose.model("Doctor", DoctorSchemea);

export default Doctor;