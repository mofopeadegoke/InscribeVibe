import { CheckCircle2 } from "lucide-react"

interface FormSuccessProps {
  message?: string
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null

  return (
    <div className="bg-green-500/10 text-green-500 text-sm p-3 rounded-md flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}

