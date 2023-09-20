import express from 'express'

export const logincontroller = express.Router()

const users = [
    {
        id: 0,
        nome: "ADM",
        email: "adm@gmail.com",
        senha: '123' 
    },
    {
        id: 1,
        nome: "HUGO",
        email: "hugo@gmail.com",
        senha: '1234'
    }
]

logincontroller.post = (req, res) =>{
    const { email, senha } = req.body

    const user = users.find(user => user.email === email && user.senha === senha)

    if(user){
        return res.status(200).json(user)
    }
    return res.status(401).json({ message: "Email e/ou senha incorretas"})
}