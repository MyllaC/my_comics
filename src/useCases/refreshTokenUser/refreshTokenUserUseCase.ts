import { client } from "../../prisma/client"
import dayjs from "dayjs"
import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";
import { GenerateRefreshToken } from "../../provider/GenerateRefreshToken";

class RefreshTokenUserUseCase {
  async execute(refresh_token: string) {
      
      const refreshToken = await client.refreshToken.findFirst({
        where: {
          id: refresh_token
        }
      })

      if(!refreshToken) {
        throw new Error("Refresh token invalid")
      }

      const generateTokenProvider = new GenerateTokenProvider()
      const token = await generateTokenProvider.execute(refreshToken.userId)

      const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn))
      console.log("refreshTokenExpired-> "+refreshTokenExpired)
      if(refreshTokenExpired) {
          await client.refreshToken.deleteMany({
            where: {
              userId: refreshToken.userId
            }
          })

          const generateRefreshTokenProvider = new GenerateRefreshToken()
          const newRefreshToken = await generateRefreshTokenProvider.execute(refreshToken.userId)

          return {token, refreshToken: newRefreshToken}
       }

      return { token }
  }
}

export {RefreshTokenUserUseCase}