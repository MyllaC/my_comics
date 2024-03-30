import { ParamsDictionary, Query } from 'express-serve-static-core';

type CreatorsType = {
  items: Array<Object>;
}

interface IComicObject {
  id: Number;
  title: String
  description: String;
  thumbnail: Object;
  images: Array<Object>;
  creators: CreatorsType;
}

class ApiMarvelUseCase {
    async getComics(filters: any) {
      const url = `${process.env.MARVEL_URL}${filters}&orderBy=-onsaleDate&ts=1&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${process.env.MARVEL_HASH}`;
      const response = await fetch(url);
      const {data, code } = await response.json();
    
      if(code !== 200) {
        throw new Error("Error getting comics")
      }

      const {limit, total, offset, results} = data
      
      let comics = results.map((result: IComicObject) => {
        return {
          id: result.id,
          title: result.title,
          description: result.description,
          thumbnail: result.thumbnail,
          images: result.images,
          creators: result.creators.items
        }
      })

      return {limit, total, offset, comics}
    }
}

export { ApiMarvelUseCase }