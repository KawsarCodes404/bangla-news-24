import NewsCard from "@/component/NewsCard";

interface Inews {
    description: string;
    category: string;
    title: string;
    imageUrl: string;
    imageAlt: string;
    id: string;
}

const CategoryPage = async({params}) => {
    const {categoryId} = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);

    const data = await res.json();

    const categoryNews: Inews[] = data.data

    return (
        <div>
            <h1
                className="text-2xl font-bold border-b-2 border-red-700 mb-5"
            >
                {data.title}
            </h1>

            <div className="grid grid-cols-3 gap-10">
                {
                    categoryNews.map((news) => <NewsCard 
                        news={news}
                        key={news.id}
                    />)
                }
            </div>
        </div>
    );
};

export default CategoryPage;