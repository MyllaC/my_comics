import {Router} from "express"
import {CreateUserController} from "./useCases/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/authenticateUser/authenticateUserController"
import {RefreshTokenUserController} from "./useCases/refreshTokenUser/refreshTokenUserController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/refresh-token', refreshTokenUserController.handle)

router.get('/comics', ensureAuthenticated, (request, response) => {
    return response.json([
      {id: 1, name: 'SpiderMan'},
      {id: 2, name: 'IronMan'},
      {id: 3, name: 'Thor'},
    ])
})

export {router}