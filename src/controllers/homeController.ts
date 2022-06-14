import {Request, Response} from 'express'

export const home = ((req:Request, res:Response)=>{
    res.render('pages/home',{
        name:'Trikas',
        lastName: 'Fulaninho',
        products: [
            {title: "Minoxidil", price:70},
            {title: "Manteiga", price:15},
            {title: "Sabonete", price:3}
        ]
    })
})
//FAZER O CONTATO E O SOBRE
