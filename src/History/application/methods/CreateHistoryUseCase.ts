import { History } from "../../domain/entity/History";
import { HistoryRepository } from "../../domain/interface/HistoryRepository";
import { NotificationHistoryUSeCase } from "../services/NotificationNewHistory";
import { MessageServiceSocket } from "../../infrastructure/serviceMessage/MessageServiceSocket";

export class CreateHistoryUseCase {
    constructor( readonly historyRepository: HistoryRepository, readonly sendNotification: NotificationHistoryUSeCase, 
        readonly messageServiceSocket: MessageServiceSocket) {}

    async run(
        id_user: number,
        registration: string
    ): Promise<History | null> {
        try {
            const history: any = await this.historyRepository.createHistory(
                id_user,
                registration
            );
            if( history) {
                this.sendNotification.run( history);
                this.messageServiceSocket.sendMessage( history);
            }
            return  history;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}