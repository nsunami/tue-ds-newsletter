import { DataSteward } from "../data/dataStewards"

export function createTable(data: DataSteward[], rows = 2, cols = 4) {
  const table = Array(rows)
    .fill(null)
    .map((_, i) => {
      const start = i * cols
      return data.slice(start, start + cols)
    })
  return table
}
