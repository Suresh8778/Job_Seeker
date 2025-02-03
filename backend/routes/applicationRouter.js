import  express from "express";
import {
    jobseekerDeleteApplication,
    jobseekerGetAllApplications,
    postApplication,
    recruiterGetAllApplications,
  } from "../controllers/applicationController.js";
  import {isAuthorized} from "../middlewares/auth.js"
const router = express.Router();

router.post("/post", isAuthorized, postApplication);
router.get("/recruiter/getall", isAuthorized, recruiterGetAllApplications);
router.get("/jobseeker/getall", isAuthorized, jobseekerGetAllApplications);
router.delete("/delete/:id", isAuthorized, jobseekerDeleteApplication);

export default router;