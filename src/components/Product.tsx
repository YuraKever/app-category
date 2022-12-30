import { FC } from "react";

type Props = {
        product: {
            id: string;
            title: string;
        }
}

const Product: FC<Props> = ({product}) => {
    return (
        <div className="h-[300px] w-full uppercase border p-6 rounded-3xl border-gray-900 bg-blue-400 shadow-2xl">
            {product.title}
        </div>
    );
}

export default Product;