import Link from "next/link";

interface Navs {
    slug: string,
    title: string,
    topicId: string | null,
    url: string,
    scrapable: boolean
  }

const NavLinks = async() => {

    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const navs: Navs[] = data.data;
    const filterednavs = navs.filter(n => n.scrapable);
    // console.log(navs);

    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">

            <Link href={'/'}>হোম</Link>

            {
                filterednavs.map((n, i) => <Link 
                    key={i} 
                    href={`/category/${n.slug}`}
                >
                    {n.title}
                </Link>)
            }
        </div>
    );
};

export default NavLinks;
