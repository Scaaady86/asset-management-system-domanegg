import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/assets/new/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/assets/new/"!</div>
}
