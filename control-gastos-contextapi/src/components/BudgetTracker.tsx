import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import AmoundDisplay from "./AmoundDisplay";
import { useBudget } from "../hooks/useBudget";
import "react-circular-progressbar/dist/styles.css"
// Barra/grafica circular npm i react-circular-progressbar

export default function BudgetTracker() {
  const { state, totalExpenses, remainingBudget, dispatch } = useBudget()

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(0)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='flex justify-center'>
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    pathColor: percentage === 100 ? '#dc2626' : '#3b82f6',
                    trailColor: '#F5F5F5',
                    textSize: 8,
                    textColor: percentage === 100 ? '#dc2626' : '#3b82f6'
                })}
                text={`${percentage}% Gastado`}
            />
        </div>

        <div className='flex flex-col justify-center items-center gap-8'>
            <button
                type="button"
                className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
                onClick={() => dispatch({type: 'reset-app'})}
            >
                Resetear App
            </button>

            <AmoundDisplay
                label="Presupuesto"
                amount={state.budget}
            />

            <AmoundDisplay
                label="Disponible"
                amount={remainingBudget}
            />

            <AmoundDisplay
                label="Gastado"
                amount={totalExpenses}
            />
        </div>
    </div>
  )
}
