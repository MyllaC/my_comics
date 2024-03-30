import {Router} from "express"
import {CreateUserController} from "./useCases/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/authenticateUser/authenticateUserController"
import {RefreshTokenUserController} from "./useCases/refreshTokenUser/refreshTokenUserController"
import { ensureAuthenticated } from "./middleware/ensureAuthenticated"
import { ApiMarvelController } from "./useCases/apiMarvel/apiMarvelController"

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()
const apiMarvelController = new ApiMarvelController()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/refresh-token', refreshTokenUserController.handle)

router.get('/comics', ensureAuthenticated, apiMarvelController.getComics)

export {router}