declare interface ICategory {
  id: string
  name: string
  color: string
}

declare interface ITransaction {
  id: string
  date: Date
  note: string
  value: number
  category?: ICategory
  categoryId?: string
}

declare interface IUser {
  id: string
  name: string
  email: string
  isEnabled: boolean
  categories?: ICategory[]
  transactions?: ITransaction[]
}
