export const formatCurrency = (value) =>
  new Intl.NumberFormat("en-GH", { style: "currency", currency: "GHS" }).format(
    value
  );
