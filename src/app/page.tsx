import Image from "next/image";
import Link from "next/link";
Link;

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 max-sm:mt-14 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="PagesHeader"> Main Page</h1>
        <h2 className="text-center text-3xl"> Sub header</h2>
        <div className="flex flex-row pt-8 space-x-4 ">
          <Link href={`blogPosts`}>
            <div className="bg-slate-600 p-6 rounded-md">
              <div>
                <h3 className="text-white">Blog Post</h3>
              </div>
            </div>
          </Link>
          <div className="bg-slate-600 p-6 rounded-md">
            <div>
              <h3>Blog Post</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
