import { Schema, model, connect } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

const UserNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    }
})

const GuardianSchema = new Schema<Guardian>({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
})

const LocalGuardingSchema = new Schema<LocalGuardian>({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true }
})

const studentSchema = new Schema<Student>({
    id: { type: String },
    name: UserNameSchema,
    gender: ["female", "male"],
    dateOfBirth: { type: String },
    email: {
        type: String,
        required: true
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: ["A+", "A-", "AB+", "AB-", "B+", "B-", "O+", "O-"],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: GuardianSchema,
    localGuardian: LocalGuardingSchema,
    profileImg: { type: String },
    isActive: ["active", "blocked"]
})

export const Studnet = model<Student>("Student", studentSchema)