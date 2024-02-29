import amqplib from "amqplib";

import { History } from "../../domain/entity/History";
import INotificationNewRegistry from "../../domain/services/INotificationNewRegistry";

export class NotificationNewHistory implements INotificationNewRegistry {
  
    private url: any;
    private exch: any;
  
    constructor() {
 
      this.url = process.env.AMQP_URL_EC2;
      this.exch = process.env.EXCHANGE_EC2;
    }
  
    async sendNotification(history: History): Promise<boolean> {
      const conn = await amqplib.connect(this.url);
      const ch = await conn.createChannel();
      const status = await ch.publish(this.exch, "12345", Buffer.from("Usuario registrado"));
      console.log(status);
      return status;
    }
  }