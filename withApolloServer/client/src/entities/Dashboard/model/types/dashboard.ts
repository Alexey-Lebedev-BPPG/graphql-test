export interface IProduct {
  category: string;
  name: string;
  countSales: number;
  dateSales: string[];
}

export interface DashboardSchema {
  isLoading: boolean;
  allProducts: number[];
  allCategories: ICategories[];
}

export interface ICategories {
  _id: string;
  total: number;
}
