import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="min-h-screen container space-y-8">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="sm" asChild>
          <Link to="/maintenance">Maintenance Tasks</Link>
        </Button>
        <Button size="sm" asChild>
          <Link to="/assets">Assets</Link>
        </Button>
      </div>
    </div>
  )
}
