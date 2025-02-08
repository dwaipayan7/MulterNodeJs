import { Router } from "express";

import StudentRoutes from "./student.routes.js";

const router = Router();

router.use("/", StudentRoutes);


export default router;