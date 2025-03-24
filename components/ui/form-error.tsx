import { XCircle } from "lucide-react"

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <div className="bg-red-500/10 text-red-500 text-sm p-3 rounded-md flex items-center gap-2">
      <XCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}

