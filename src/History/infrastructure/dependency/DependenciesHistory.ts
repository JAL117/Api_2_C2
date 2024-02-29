import { CreateHistoryController } from "../controllers/CreateHistoryController";
import { CreateHistoryUseCase } from "../../application/methods/CreateHistoryUseCase";
import { NotificationHistoryUSeCase } from "../../application/services/NotificationNewHistory";
import { NotificationNewHistory } from "../serviceRabbitMQ/NotificationNewHistory";
import { MessageServiceSocket } from "../serviceMessage/MessageServiceSocket";
import { MySqlRegistryRepository } from "../repository/MySqlHistoryRepository";

export const mySqlHistoryRepository = new MySqlRegistryRepository();
export const servicesNotification = new NotificationNewHistory();
export const messageServiceSocket = new MessageServiceSocket();
export const serviceNotificationUseCase = new NotificationHistoryUSeCase(servicesNotification);
export const createHistoryUseCase = new CreateHistoryUseCase(mySqlHistoryRepository, serviceNotificationUseCase, messageServiceSocket);
export const createHistoryController = new CreateHistoryController(createHistoryUseCase);