import { sign } from "jsonwebtoken"

class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, "625d6466-cb56-440d-ba20-80eb38f69742", {
      subject: userId,
      expiresIn: "20s"
    })

    return token
  }
}

export { GenerateTokenProvider }