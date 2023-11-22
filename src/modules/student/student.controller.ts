import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    const result = await StudentServices.createStudentToDB(student);

    res.status(200).json({
      success: true,
      message: 'Student create successfully',
      data: result,
    });
  } catch (error) {
    throw new Error('Some went wrong');
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    res.status(200).json({
      success: true,
      message: 'Student data successfully get',
      data: result,
    });
  } catch (error) {
    throw new Error("Can't get the data");
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId: string = req.params.id;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single student data successfully get',
      data: result,
    });
  } catch (error) {
    throw new Error("Can't get the data");
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
