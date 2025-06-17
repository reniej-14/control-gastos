import { formatCurrency } from "../helpers"

type AmoundDisplayProps = {
    label?: string,
    amount: number
}

export default function AmoundDisplay({label, amount} : AmoundDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
        {label && `${label}: `}
        <span className="font-black text-black">{formatCurrency(amount)}</span>
    </p>
  )
}
