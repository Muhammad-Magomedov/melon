import Heading from "@/components/Heading";
import ProductInfo from "@/components/ProductInfo";
import {FC} from "react";
import {GetServerSideProps} from "next";
import {ParsedUrlQuery} from "querystring";
import {productType} from "../../../types";
import Link from "next/link";

interface ProductProps {
    product: productType
}

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params as IParams
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await res.json()

    if(!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {product: data}
    }
}

const Product: FC<ProductProps> = ({product}) => {
    return (
        <>
            <Link href="/"><Heading text="Back"/></Link>
            <Heading text="Products"/>
            <ProductInfo product={product}/>
        </>
    )
}

export default Product;