export const currencyFormatter = (amount: number, currencyID: string) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currencyID,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};
