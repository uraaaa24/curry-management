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

const reducer = (state: State, action: Action) => {
  const next: State = { ...state }

  switch (action.type) {
    case 'arrival':
      next.curryRice += action.payLoad.curryRice
      next.porkCutlet += action.payLoad.porkCutlet
      next.cheese += action.payLoad.cheese
      break
    case 'orderCurryRice':
      if (!state.soldOutCurryRice) next.curryRice -= 1
      break
    case 'orderPorkCutletCurry':
      if (!state.soldOutPorkCutletCurry) next.porkCutlet -= 1
      break
    case 'orderCheeseCurry':
      if (!state.soldOutCheeseCurry) next.cheese -= 1
      break
  }

  next.soldOutCurryRice = next.curryRice === 0
  next.soldOutPorkCutletCurry = next.soldOutCurryRice || next.porkCutlet === 0
  next.soldOutCheeseCurry = next.soldOutCurryRice || next.cheese === 0

  return next
}
