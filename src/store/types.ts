export interface Product {
  id: number
  title: string
  desc: string
  rate: number
  price: number
  sale_price: number
  currency: string
  image: string
}

export interface User {
  id: number,
  username: string,
  password: string,
  avatar: string,
  token: string
}