import Link from "next/link";

interface IMostReadNews {
    id: string;
    title: string;
}

const MostRead = async () => {

    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');

    const data = await res.json();
    const news: IMostReadNews[] = data.data;

    return (
        <div className="card p-2 bg-base-100 border border-gray-300">
            <h1 className="font-bold mb-3">সর্বাধিক পঠিত</h1>

            <div className="grid gap-3">
                {
                    news.map((n, i) => <Link
                        href={`/news/${n.id}`}
                        key={n.id}
                    >
                        <div
                            className="flex gap-2"
                        >
                            <p className="text-2xl font-bold text-red-600">{i + 1}</p> <h1>{n.title}</h1>
                        </div>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default MostRead;