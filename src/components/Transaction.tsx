import React, { memo } from 'react'
import { ListItem, IconButton, ListItemText, ListItemSecondaryAction } from '@material-ui/core'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

export type TransactionProps = ITransaction & {
  divider: boolean
  onRemove: any
}

export default memo(({ note, value, divider, onRemove }: TransactionProps) => (
  <ListItem divider={divider}>
    <ListItemText primary={note} />
    <ListItemText primary={value} style={{ textAlign: 'right' }} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Transaction" onClick={onRemove}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
))
