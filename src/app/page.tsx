import MainNews from "@/component/MainNews";
import MostRead from "@/component/MostRead";
import NewsCard from "@/component/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    description: string;
    category: string;
    title: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {

  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');

  const data = await res.json();

  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);

  // console.log(otherSections);

  return (
    <div>

      <div className="mt-5 grid gap-5 grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5">
            {
              otherSections.map(os => <div
                key={os.curationId}
                className=""
              >
                <h1 className="font-bold border-b-2 border-red-700 pb-1">{os.title}</h1>

                <div className="grid mt-3 grid-cols-3 gap-2">
                  {
                    os.articles.map(news => <NewsCard
                      news={news}
                      key={news.id}
                    />)
                  }
                </div>
              </div>)
            }
          </div>
        </div>


        {/* most read section */}
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>

    </div>
  );
}
