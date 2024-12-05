import express from "express";
import { getBook } from "../controller/book.controller.js";
import { Router } from "express";

const router = express.Router();

router.get("/", getBook);

export default router;