import clsx from "clsx";
import { FC } from "react";
import { Category } from "../types/commonTypes";

type Props = {
    selectedCategory?: string;
    setSelectedCategory?: (e:string) => void;
    categories: Category[];
}

const CollectionHeader: FC<Props> = ({
    categories,
    selectedCategory,
    setSelectedCategory = () => { }
}) => {
    return (
        <div
            className="flex items-center justify-center fixed h-20 w-full shadow-2xl bg-white border border-gray-900 overflow-x-auto mb-4"
        >
            {categories.map((category) => (
                <button
                    className={clsx(
                        "w-96 mx-5 uppercase border border-black bg-orange-400 shadow-2xl",
                        {
                            'text-yellow-100 bg-orange-900': selectedCategory === category.id
                        })}
                    key={category.id}
                    onClick={() => {
                        setSelectedCategory(category?.id)
                    }}
                >{category.title}</button>
            ))}
        </div>
    );
}

export default CollectionHeader;