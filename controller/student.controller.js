import { Student } from '../models/student.js';
import path from 'path';

class StudentController {
    static async upload(req, res) {
        try {
            if (!req.body) {
                return res.status(400).json({ message: "Request body is missing" });
            }

            const { name, age, email, phone, address } = req.body;
            // const photoPath = req.file ? req.file.path : null;

            // if (!name || !age || !email || !phone || !address) {
            //     return res.status(400).json({ message: "All fields are required" });
            // }

            const photoBase64 = req.file ? req.file.buffer.toString('base64') : null;

            const newStudent = new Student({
                name,
                age,
                email,
                phone,
                address,
                photo: photoBase64
            });

            await newStudent.save();
            
            res.status(201).json({ message: 'Student uploaded successfully', student: newStudent });
        } catch (e) {
            console.error("Error uploading student:", e);
            res.status(500).json({ message: "Internal Server Error" }); 
        }
    }
}

export default StudentController;
