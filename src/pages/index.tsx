import {FC} from "react";
import {GetStaticProps} from "next";
import Link from "next/link"
import Heading from "@/components/Heading";
import styles from "@/styles/Home.module.css"
import {ProductsProps} from "../../types";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products/?offset=10&limit=10")
  const data = await res.json()

  if(!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {products: data}
  }
}

const Home: FC<ProductsProps> = ({products}) => {
  return (
    <>
      <Heading text="Contacts list"/>
      <ul className={styles.list}>
        {products?.map(({id, title, price}) => {
          return (
              <li className={styles.list__item} key={id}><Link href={`/products/${id}`}>{title}: {price}</Link></li>
          )
        })}
      </ul>
    </>
  )
};

export default Home;