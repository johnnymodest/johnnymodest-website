export function getNextQuarter(): string {
  const month = new Date().getMonth();
  const currentQuarter = Math.floor(month / 3); // 0=Q1, 1=Q2, 2=Q3, 3=Q4
  const next = currentQuarter === 3 ? 0 : currentQuarter + 1;
  return `Q${next + 1}`;
}
