import { TableCell, TableRow } from '../ui/table'
import { InUseStatusDot } from './inUseStatusDot'

function AssetTableRow({
  id,
  name,
  totalAge,
  inUse,
}: {
  id: string
  name: string
  totalAge: number
  inUse: boolean
}) {
  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{totalAge}</TableCell>
      <TableCell>
        <InUseStatusDot inUse={inUse}></InUseStatusDot>
      </TableCell>
    </TableRow>
  )
}

export { AssetTableRow }
