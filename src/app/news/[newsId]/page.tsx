import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);

    const data = await res.json();
    const news = data.data;
    // console.log(news);

    if (!news) {
        notFound();
    }

    return (
        <div>
            <h1>{news.title}</h1>
            {/* image */}

            <Image
                src={news.imageUrl}
                alt="hey"
                height={700}
                width={700}
            />

            <h1>{news.text}</h1>
        </div>
    );
};

export default NewsDetails;
