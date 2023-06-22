class Cocktail {
  id: string
  name: string

  constructor (id: string, name: string) {
    this.id = id
    this.name = name
  }

  static fromDTO (obj: any): Cocktail {
    return new Cocktail(obj.idDrink, obj.strDrink)
  }
}

export default Cocktail
