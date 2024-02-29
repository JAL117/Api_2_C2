import io from 'socket.io-client';
import { History } from '../../domain/entity/History';
import { IMessageService } from '../../application/services/IMessageService';

export class MessageServiceSocket implements IMessageService{
    sendMessage(history: History): string {
        const socket = io('https://socketserver-c2.onrender.com');

        socket.on("connect", ()=>{
            console.log("Connected to server");
            console.log("Mensaje enviado");
            
            socket.emit("newUser", "Usuario registrado , Ciclo completado");
        });

        socket.on("disconnect", ()=>{
            console.log("Disconnect from server");
        });
        
        return "Enviado";
    }
}