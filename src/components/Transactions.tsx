import React, { memo } from 'react'
import { List, Paper } from '@material-ui/core'

import Transaction from './Transaction'

export type TransactionsProps = {
  transactions: ITransaction[]
  onRemove: any
}

export default memo(({ transactions, onRemove }: TransactionsProps) => {
  return transactions && transactions.length ? (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: 'scroll' }}>
        {transactions.map((transaction: ITransaction, i: number) => (
          <Transaction
            {...transaction}
            key={`transaction-${transaction.id}`}
            divider={i < transactions.length - 1}
            onRemove={() => onRemove(i)}
          />
        ))}
      </List>
    </Paper>
  ) : null
})
