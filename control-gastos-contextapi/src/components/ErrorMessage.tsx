import { ReactNode } from "react"

type ErrorMessaageProps = {
  children: ReactNode
}

export default function ErrorMessaage({children} : ErrorMessaageProps) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  )
}
