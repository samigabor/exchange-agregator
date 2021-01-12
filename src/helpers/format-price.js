export default function formatPrice(price, decimals = 2, currency = '$') {
  const decimalPrice = Number(price).toFixed(decimals);
  return `${currency}${decimalPrice}`;
}
