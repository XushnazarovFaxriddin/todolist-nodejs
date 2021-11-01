const express = require('express')
const router = express.Router()
const pool = require('../db')


router.get('/:id', (req, res) => {
    pool.query("delete from todolist where id=?", [req.params.id], (err, rows) => {
        if (err) {
            console.error(err)
            return res.status(500).send({ msg: "Serverda xatolik" })
        }
        res.redirect("/todolist")
    })
})

// router.put('/:id', (req, res) => {
//     pool.query("update from todolist set name=? where id=?", [req.body.ToDo, req.params.id], (err, rows) => {
//             if (err) {
//                 console.error(err)
//                 return res.status(500).send({ msg: "Serverda xatolik" })
//             }
//             res.redirect("/todolist")
//         })
//         // const user = getUser(req.params.id)
//         // if (!user) return res.status(404).json({ "id": "Bunday id mavjud emas!" })
//         // user.name = req.body.ToDo
//         // req.json(user)
// })

router.get('/', (req, res) => {
    let arr = []


    pool.query("SELECT * FROM todolist;", (err, rows, fields) => {
        if (err) {
            return console.error("Connection error")
        }
        console.log(rows)

        res.render('index', { arr: rows })
    })

})

router.post('/', (req, res) => {
    pool.query(`INSERT INTO todolist(name)
    VALUES(?);`, [req.body.ToDo], (err, rows, fields) => {
        if (err) {
            return console.error("Database connection error")
        }
        console.log(rows)

        res.redirect("/todolist");
    })
})


module.exports = router