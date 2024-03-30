import { Request, Response } from "express";
import { ApiMarvelUseCase }from "./apiMarvelUseCase"

class ApiMarvelController {
  async getComics(request: Request, response: Response) {
    const filters = request.url

    const apiMarvelUseCase = new ApiMarvelUseCase()

    const comics = await apiMarvelUseCase.getComics(filters)

    return  response.json(comics)
  }
}

export { ApiMarvelController }