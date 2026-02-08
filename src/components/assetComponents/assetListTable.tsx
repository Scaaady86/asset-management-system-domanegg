import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AssetTableRow } from './assetTableRow'

function AssetListTable({
  assets,
}: {
  assets: Array<{
    id: string
    name: string
    totalAge: number
    inUse: boolean
  }>
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Total Age</TableHead>
          <TableHead>In Use</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assets.map((asset) => (
          <AssetTableRow key={asset.id} {...asset}></AssetTableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export { AssetListTable }
