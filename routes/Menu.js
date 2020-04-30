const express = require('express')
const router = express.Router()

const menuController = require('../controllers/Menu')

router.get('/', menuController.getData)
router.get('/show/:menuId', menuController.getDataById)
router.post('/create', menuController.createData)
router.delete('/delete/:menuId', menuController.deleteDataById)
router.put('/edit/:menuID',menuController.updateDataById)


module.exports = router