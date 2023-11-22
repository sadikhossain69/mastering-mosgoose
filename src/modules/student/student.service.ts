import { Student } from './student.interface';
import { StudnetModel } from './student.model';

const createStudentToDB = async (student: Student) => {
  const result = await StudnetModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudnetModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudnetModel.findOne({ id: id });
  return result;
};

export const StudentServices = {
  createStudentToDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
