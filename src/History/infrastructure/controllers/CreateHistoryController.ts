import { Request, Response } from "express";
import { CreateHistoryUseCase } from "../../application/methods/CreateHistoryUseCase";

export class CreateHistoryController {
    constructor (readonly createHistoryUseCase: CreateHistoryUseCase) {}

    async run(req:Request, res:Response){
        const data = req.body;
        try {
            const history = await this.createHistoryUseCase.run(
                data.id_user,
                data.registration
            );

            if(history){
                res.status(201).send({
                    status: "success",
                    data:{
                        id: history?.id,
                        id_user: history?.id_user,
                        registration: history?.registration
                    },
                });
            }else{
                res.status(204).send({
                    status: "error",
                    data: "No agregado al historial"
                });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            });
        }
    }
}