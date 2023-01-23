import {ElementType, FC, HTMLAttributes} from "react";
import styles from "@/styles/Heading.module.css"

interface HeadingProps extends HTMLAttributes<HTMLElement> {
    tag?: ElementType
    text: String
}

const Heading: FC<HeadingProps> = ({tag, text}) => {
    const Tag = tag || "h1"
    return (
        <Tag className={styles.title}>{text}</Tag>
    )
}

export default Heading;