import { client } from "../../prisma/client"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
    async execute({email, password}: IRequest) {

      const userAlreadyExists = await client.user.findFirst({
        where: {
          email
        }
      })

      if(!userAlreadyExists) {
        throw new Error("User or password incorrect")
      }

      const passwordMatch = await compare(password, userAlreadyExists.password);
      
      if(!passwordMatch) {
        throw new Error("User or password incorrect")
      }

      const token = sign({}, "625d6466-cb56-440d-ba20-80eb38f69742", {
        subject: userAlreadyExists.id,
        expiresIn: "20s"
      })

      return { token }
    }
}


export {AuthenticateUserUseCase}