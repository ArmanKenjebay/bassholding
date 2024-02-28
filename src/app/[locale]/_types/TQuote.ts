export type TPrice = {
  data: TPriceData[]
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

export type TPriceData = {
  id: number
  attributes: {
    priceUnitGold: string
    priceUnitSilver: string
    changesPercentGold: string
    changesPercentSilver: string
    changesUsdGold: string
    changesUsdSilver: string
    createdAt: string
    updatedAt: string
  }
}
