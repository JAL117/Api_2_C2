import { History } from "../entity/History";

export default interface INotificationNewRegistry {
    sendNotification(history: History):Promise<boolean>;
}