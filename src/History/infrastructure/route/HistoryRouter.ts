import express from "express";

import { createHistoryController } from "../dependency/DependenciesHistory";

export const HistoryRouter = express.Router();

HistoryRouter.post("/", createHistoryController.run.bind(createHistoryController));