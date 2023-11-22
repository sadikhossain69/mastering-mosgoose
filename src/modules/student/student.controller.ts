import { Request, Response } from "express"
import { StudentServices } from "./student.service"

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body.student

        const result = await StudentServices.createStudentToDB(student)

        res.status(200).json({
            success: true,
            message: "Student create successfully",
            data: result
        })
    } catch (error) {
        throw new Error("Some went wrong")
    }
}



export const StudentController = {
    createStudent,
}