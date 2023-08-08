export const subtractDate = (days: number) => {
  let array = [];
  for (let index = 1; index <= days; index++) {
    const dayMilliseconds = 24 * 60 * 60 * 1000 * index;

    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() - dayMilliseconds);

    array.push(currentDate.toISOString());
  }
  return array;
};
