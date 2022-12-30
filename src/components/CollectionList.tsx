import { FC, useEffect, useRef } from "react";
import { Category } from "../types/commonTypes";
import CollectionCategory from "./CollectionCategory";

type Props = {
    selectedCategory?: string;
    setSelectedCategory?: (e:string) => void;
    categories: Category[]
}

const CollectionList: FC<Props> = ({ categories, selectedCategory, setSelectedCategory }) => {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const executeScroll = (index: number) =>
      itemsRef.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
        
    useEffect(() => {
        const index = categories.findIndex((item) => item.id === selectedCategory);
        index && executeScroll(index);
    }, [selectedCategory])
    return (
        <div className="h-full w-full border px-10 pb-10 pt-24 border-gray-900 bg-green-600">
            {categories.map((category, i) => (
                <div ref={(el) => (itemsRef.current[i] = el)}>
                    <CollectionCategory setSelectedCategory={setSelectedCategory} category={category} />
                </div>
            ))}
        </div>
    );
}

export default CollectionList;