import { History } from "../../domain/entity/History";

export interface IMessageService {
    sendMessage(history: History):string;
}