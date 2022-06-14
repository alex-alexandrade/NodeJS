import {Router, Request, Response } from 'express'
import * as homeController from '../controllers/homeController'

const router = Router()

router.get('/',homeController.home)
router.get('/contato',homeController.home)
router.get('/sobre',homeController.home)

router.get('/contato',(req:Request, res:Response) =>{
    res.render('pages/contato')
})

router.get('/sobre',(req:Request, res:Response) =>{
    res.render('pages/sobre')
})

router.get('/idade',(req:Request, res:Response) =>{
    let nome: string  = req.query.nome as string
    let idade: number = parseInt(req.query.idade as string) 
    let telefone: number = parseInt(req.query.telefone as string)
    let endereco: string  = req.query.endereco as string
    res.render("pages/idade",{
        nome,
        idade,
        telefone,
        endereco
    })
})

router.get('/ano',(req:Request, res:Response)=>{
    res.render('pages/ano')
})

router.post('/ano-resultado',(req:Request, res:Response) =>{

    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){

        let anoNascimento:number = parseInt(req.body.anoNascimento as string)
        let anoAtual:number = new Date().getFullYear()

        idade = anoAtual - anoNascimento

        mostrarIdade = true
    }

    res.render('pages/ano',{
       
    })
})

export default router
