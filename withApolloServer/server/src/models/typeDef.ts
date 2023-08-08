export const typeDefs = `#graphql
  type Data {
      id: ID!
      category: String,
      name: String,
      countSales: Int,
      dateSales: [String],
  }
  type Categories{
    _id: String,
    total: Int,
  }
  input ProductsInput {
    days: Int,
  }
  type Query {
    getFilterData(productsInput: ProductsInput): [Int],
    getCategoriesData(items: Int): [Categories]
  }
`;
