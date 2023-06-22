import type Cocktail from '../model/Cocktail'

interface CocktailRepository {
  getRandomCocktail: () => Promise<Cocktail>
  /* getAllCategories: () => Promise<Category[]>
  getCategoryById: (id: string) => Promise<Category>
  updateCategory: (category: Category) => Promise<Category>
  deleteCategory: (id: string) => Promise<Category> */
}

export default CocktailRepository
