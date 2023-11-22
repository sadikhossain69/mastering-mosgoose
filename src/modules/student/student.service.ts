import { Student } from "./student.interface";
import { StudnetModel } from "./student.model";

const createStudentToDB = async (student: Student) => {
    const result = await StudnetModel.create(student)
    return result
}

export const StudentServices = {
    createStudentToDB
}