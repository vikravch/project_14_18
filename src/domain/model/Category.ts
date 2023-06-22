class Category {
  id: string
  name: string

  constructor (id: string, name: string) {
    this.id = id
    this.name = name
  }

  static fromDTO (obj: any): Category {
    return new Category(obj.idDrink, obj.strDrink)
  }
}

export default Category
