type State = {
  curryRice: number // カレーライスの在庫数
  porkCutlet: number // とんかつの在庫数
  cheese: number // チーズの在庫数
  soldOutCurryRice: boolean // カレーライスの売り切れ状態
  soldOutPorkCutletCurry: boolean // カツカレーの売り切れ状態
  soldOutCheeseCurry: boolean // チーズカレーの売り切れ状態
}

type Action =
  | {
      type: 'arrival'
      payLoad: {
        curryRice: number
        porkCutlet: number
        cheese: number
      }
    }
  | {
      type: 'orderCurryRice'
    }
  | {
      type: 'orderPorkCutletCurry'
    }
  | {
      type: 'orderCheeseCurry'
    }
