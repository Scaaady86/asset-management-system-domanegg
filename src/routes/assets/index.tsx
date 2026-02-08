import { AssetListTable } from '@/components/assetComponents/assetListTable'
import { Button } from '@/components/ui/button'
import { db } from '@/db'
import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { PlusIcon } from 'lucide-react'

const serverLoader = createServerFn({ method: 'GET' }).handler(() => {
  return db.query.assets.findMany()
})

export const Route = createFileRoute('/assets/')({
  component: RouteComponent,
  loader: () => {
    return serverLoader()
  },
})

function RouteComponent() {
  const assets = Route.useLoaderData()
  return (
    <div className="min-h-screen container space-y-8">
      <div className="flex justfiy-between items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">List of Assets</h1>
        </div>
        <div>
          <Button size="sm" asChild>
            <Link to="/assets/new">
              <PlusIcon></PlusIcon>
            </Link>
          </Button>
        </div>
      </div>

      <AssetListTable
        assets={assets.map((asset) => ({
          id: asset.id.toString(),
          name: asset.name,
          totalAge: asset.age ?? 0,
          inUse: asset.inUse,
        }))}
      ></AssetListTable>
    </div>
  )
}
