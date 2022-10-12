export const FormatService = {
  formatCurrency(value: number): string {
    return value.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "BRL",
    });
  },

  clearText(text: string, maxSize: number): string {
    const response =
      text.length < maxSize ? text : text.slice(0, maxSize) + "...";

    return response;
  },
};
