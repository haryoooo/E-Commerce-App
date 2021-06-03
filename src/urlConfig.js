export const url = "http://localhost:3000";

export function convertToRupiah(number) {
  return `Rp ${new Intl.NumberFormat(["ban", "id"]).format(number)}`;
}
