import { query } from "../../../database/database";
import { History } from "../../domain/entity/History";
import { HistoryRepository } from "../../domain/interface/HistoryRepository";

export class MySqlRegistryRepository implements HistoryRepository {
    async createHistory(
        id_user: number,
        registration: string
    ): Promise<History | null> {
        const sql = "INSERT INTO history (id_user, registration) VALUES (?,?)";
        const params: any[] = [id_user, registration];

        try {
            const [result]: any = await query(sql, params);
            return new History(result.insertId, id_user, registration);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}