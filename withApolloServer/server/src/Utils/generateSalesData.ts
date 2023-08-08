import {faker} from '@faker-js/faker';

export const generateSalesData = () => {
  let salesData = [];

  for (let i = 0; i < 1000; i++) {
    const currentData = faker.date
      .betweens({
        from: '2022-01-01T00:00:00.000Z',
        to: new Date().toISOString(),
        count: {min: 0, max: 100},
      })
      .map((item) => item.toISOString());
    salesData.push({
      category: faker.commerce.product(),
      name: faker.commerce.productName(),
      countSales: currentData.length,
      dateSales: currentData,
    });
  }
  return salesData;
};
