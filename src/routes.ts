import {Router} from "express"
import {CreateUserController} from "./useCases/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/authenticateUser/authenticateUserController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)

router.get('/comics', ensureAuthenticated, (request, response) => {
    return response.json([
      {id: 1, name: 'SpiderMan'},
      {id: 2, name: 'IronMan'},
      {id: 3, name: 'Thor'},
    ])
})

export {router}