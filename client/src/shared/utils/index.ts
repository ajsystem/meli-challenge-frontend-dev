/**
 * Formats the given amount in the specified currency.
 *
 * @param {number} amount - The numeric value to be formatted.
 * @param {string} currencyID - The ISO 4217 currency code to be used for formatting.
 *
 * @returns {string} - The formatted amount in the specified currency.
 */

export const currencyFormatter = (amount: number, currencyID: string): string => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currencyID,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};
