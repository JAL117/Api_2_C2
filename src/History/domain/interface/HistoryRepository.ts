import { History } from "../entity/History";

export interface HistoryRepository {
    createHistory(
        id_user: number,
        registration: string
    ): Promise<History | null>;
}