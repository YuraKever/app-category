import clsx from "clsx";
import { FC, useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Category } from "../types/commonTypes";
import Product from "./Product";

type Props = {
    setSelectedCategory?: (e:string) => void;
    category: Category;
}

const CollectionCategory: FC<Props> = ({ category, setSelectedCategory=()=>{} }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    console.log('entry -> ', entry);
    useEffect(() => {
        entry?.isIntersecting && setSelectedCategory(category.id)
    }, [entry?.isIntersecting])
    return (
        <div
            ref={ref}
            className="h-full w-full rounded-3xl my-4 p-3 border border-gray-900 bg-yellow-400 shadow-2xl"
        >
            <div className="mb-4">{category.title}</div>
            <div className={clsx(
                'h-3/4 flex gap-3',
                {
                    ['overflow-x-auto']: category.position === 'h',
                    ['flex-col overflow-y-auto']: category.position !== 'h'
                })}>
                {category.products.map(product => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    );
}

export default CollectionCategory;

