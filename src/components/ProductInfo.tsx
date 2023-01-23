import {FC} from "react";
import Heading from "@/components/Heading";
import styles from "@/styles/ProductInfo.module.css"
import {ProductProps} from "../../types";

const ProductInfo: FC<ProductProps> = ({product}) => {
    const {title, price, description, category, images} = product || {}
    const {name} = category || ""

    if (!product) {
        return <Heading tag="h3" text="Product empty"/>
    }

    return (
        <>
            <Heading tag="h3" text={title}/>
            <div className={styles.description}>
                <div>
                    <strong>Price: {price}</strong>
                </div>
                <div>
                    <strong>Description: {description}</strong>
                </div>
            </div>
            <div className={styles.images_row}>
                {images.map((item,index) => {
                    return (
                        <div className={styles.image} key={index}>
                            <img src={item} alt=""/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductInfo