import { useReducer, createContext, ReactNode, useMemo } from "react"
import { BudgedAction, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: React.Dispatch<BudgedAction>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProvideProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children} : BudgetProvideProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)
          
    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpenses


    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}