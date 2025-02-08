import { Router } from "express";

const router = Router();

import StudentController from "../controller/student.controller.js";


router.post("/create", StudentController.upload);


export default router;