export const filterData = (date: string) => {
  const year: number = new Date().getFullYear();
  const newDate = date.split("-");
  const newYear = Number.parseInt(newDate[0]);
  return year - newYear;
};
