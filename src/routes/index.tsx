import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="container min-h-screen flex items-center justify-center">
      <div className="flex gap-20">
        <Button
          variant="secondary"
          className="flex-1 w-80 h-48 text-4xl"
          size="sm"
          asChild
        >
          <Link to="/maintenance">Maintenance Tasks</Link>
        </Button>
        <Button
          variant="secondary"
          className="flex-1 w-80 h-48 text-4xl"
          size="sm"
          asChild
        >
          <Link to="/assets">Assets</Link>
        </Button>
      </div>
    </div>
  )
}
