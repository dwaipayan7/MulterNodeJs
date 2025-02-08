import { Student } from '../models/student.js';

class StudentController{

    static async upload(req, res) {
        try{

            const {name, age, email, phone, address} = req.body;

            const newStudent = new Student({
                name,
                age,
                email,
                phone,
                address
            });

            await newStudent.save();
            res.send(201).json({ message: 'Student uploaded successfully', student: newStudent});

        }catch(e){
            console.log(e);
            res.status(500).send({message: "Error uploading file"});
        }
    }

}

export default StudentController;