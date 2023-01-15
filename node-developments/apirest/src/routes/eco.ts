import { Router } from "express";
import { eco } from "../controllers/eco";

const router = Router();

router.post('/eco', eco);
export default router;