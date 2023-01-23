export type categoryType = {
    id: number
    name: string
    image: string
}

export type productType = {
    id: number
    title: string
    price: number
    description: string
    category: categoryType
    images: string[]
}

export interface ProductProps {
    product: productType
}

export type ProductsProps = {
    products?: [productType]
}