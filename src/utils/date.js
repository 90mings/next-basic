export const getFirstLastDay = (date) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
  ).getDate();
  return [firstDay, lastDay];
};
