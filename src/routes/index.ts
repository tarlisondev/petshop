
import { Router } from "express";
import * as HomeController from "../controllers/pageController";
import * as SearchControoler from "../controllers/searchController";

const router = Router();

router
    .get("/", HomeController.home)
    .get("/dogs", HomeController.dogs)
    .get("/cats", HomeController.cats)
    .get("/fishes", HomeController.fishes)
    .get("/search", SearchControoler.search)

export default router;