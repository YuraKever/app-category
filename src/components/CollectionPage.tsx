import { FC, useState } from "react";
import { Category } from "../types/commonTypes";
import CollectionHeader from "./CollectionHeader";
import CollectionList from "./CollectionList";

type Props = {
    categories: Category[]
}

const CollectionPage: FC<Props> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [wiewCategory, setWiewCategory] = useState('')
    return (
        <div>
            <CollectionHeader
                selectedCategory={wiewCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
            />
            <CollectionList
                selectedCategory={selectedCategory}
                setSelectedCategory={setWiewCategory}
                categories={categories}
            />
        </div>
    );
}

export default CollectionPage;