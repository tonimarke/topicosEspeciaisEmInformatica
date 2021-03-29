import {Router, Request, Response} from 'express'
let rotas: Router = Router() // instancia objeto
rotas.get('/', (req: Request, res: Response) => {
    res.send(`Minha primeira API em TypeScript!!! TOP !!! `)})
    rotas.get('/:tipo', (req: Request, res: Response) => {
    let {tipo} = req.params
    res.send(` Mensagem personalidade ${tipo} TOP !!! `)})// exporta
export let MensagemController: Router  = rotas