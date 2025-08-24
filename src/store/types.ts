export interface Product {
  id: number
  title: string
  desc: string
  rate: number
  price: number
  sale_price: number
  currency: string
  image: string,
  category: number
}

export interface User {
  id: number,
  username: string,
  password: string,
  avatar: string,
  token: string
}

export interface Category {
  id: number,
  catalog_item: number,
  category: Item[]
}

export interface Item {
  id: number,
  name: string
}