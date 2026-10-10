import Image from "next/image";
import Link from "next/link";

interface Inews {
    id: string;
    description: string;
    category: string;
    title: string;
    imageUrl: string;
    imageAlt: string;
}

const NewsCard = ({ news }: { news: Inews }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image
                        src={news.imageUrl}
                        height={600}
                        width={600}
                        alt={news.imageAlt} />
                </figure>

                <div className="card-body">
                    <p className="font-semibold text-red-600">{news.category}</p>

                    <h2 className="card-title">{news.title}</h2>

                    <p>{news.description}</p>

                </div>
            </div>
        </Link>
    );
};

export default NewsCard;