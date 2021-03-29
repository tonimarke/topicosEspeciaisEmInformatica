import {MensagemController} from './mensagem.controller'
import * as express from 'express'
const servidor: express.Application = express() 
servidor.use('/mensagem', MensagemController)
servidor.listen(3000, () => {
    console.log(`Ouvindo na porta 3000`)
})