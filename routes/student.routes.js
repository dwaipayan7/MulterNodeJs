import { Router } from "express";
import upload from "../middleware/upload.js";
import StudentController from "../controller/student.controller.js";

const router = Router();

router.post("/create", upload.single("photo"), StudentController.upload);

export default router;
