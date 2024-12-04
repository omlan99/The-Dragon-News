import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
    const {data} = useLoaderData()
    // console.log(data)
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-400 text-sm">{data.length} news in this category</p>
            <div className="space-y-5">
                {
                    data.map((singleNews) =><NewsCard key={singleNews._id} news ={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;