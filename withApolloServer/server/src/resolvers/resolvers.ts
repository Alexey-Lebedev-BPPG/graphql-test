import SalesDataSchema from '../Schema/SalesDataSchema';
import {subtractDate} from '../Utils/subtractDate';

interface ISalesData {
  dateSales: string[];
  category: string;
  name: string;
  countSales: number;
}

export const resolvers = {
  Query: {
    getFilterData: async (
      parent: any,
      {
        productsInput: {days},
      }: {
        productsInput: {days: number};
      }
    ) => {
      try {
        const startDates = subtractDate(days);
        const endDate = new Date().toISOString();

        if (days) {
          let array = [];
          for (let index = 0; index < startDates.length; index++) {
            const salesData: ISalesData[] = await SalesDataSchema.find({
              dateSales: {$gt: startDates[index], $lt: endDate},
            });
            array.push(
              salesData.reduce((acc, curr) => acc + curr.countSales, 0)
            );
          }
          return array;
        }
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch');
      }
    },
    getCategoriesData: async (parent: any, {items}: {items: number}) => {
      try {
        let salesData = await SalesDataSchema.aggregate([
          {$project: {_id: 0, category: 1, countSales: 1}},
          {$group: {_id: '$category', total: {$sum: '$countSales'}}},
        ]).sort({total: -1});

        return items ? salesData.slice(0, items) : salesData;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch');
      }
    },
  },
};
