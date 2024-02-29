import {History } from "../../domain/entity/History";
import { NotificationNewHistory } from "../../infrastructure/serviceRabbitMQ/NotificationNewHistory";

export class NotificationHistoryUSeCase {
  constructor(readonly serviceNotifiacion: NotificationNewHistory) {}

  async run(history: History) {
    await this.serviceNotifiacion.sendNotification(history);
  }
}