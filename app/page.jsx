import Link from "next/link";

import { legoThemes } from "./lib/data";

import Image from "next/image";

import ProductList from "./components/product-list";
import Header from "./components/header/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroImage />

      <section>
        <div className="space-y-20 pt-20">
          {legoThemes.map((theme) => (
            <ThemeCollection theme={theme} key={theme.themeName} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

function ThemeCollection({ theme }) {
  return (
    <div className="" key={theme.themeName}>
      <div className="mb-sm flex items-end justify-between font-black uppercase md:px-10">
        <h2 className="text-6xl lg:text-9xl">{theme.themeName}</h2>

        <div className="btn-custom-shape !bg-black px-2 py-1 !text-white hover:opacity-80">
          <Link
            href={`/theme/${theme.themeName}`}
            className="text-xl/none lg:text-4xl/none"
          >
            more
          </Link>
        </div>
      </div>

      <ProductList products={theme.products.slice(0, 4)} />
    </div>
  );
}

function HeroImage() {
  return (
    <section>
      <div className="relative px-5 py-8 lg:px-10 lg:py-16">
        <div
          className="absolute left-0 top-0 h-3/4 w-full"
          style={{
            clipPath: "polygon(0 0,100% 0,100% calc(100% - 2vw - 5vh),0 100%)",
          }}
        >
          <Image
            src="/hero-image.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="h-full w-full"
          />
        </div>

        <div className="relative aspect-square w-full md:aspect-[2.8/1]">
          <Image
            src="/lego-world.jpeg"
            alt=""
            fill
            sizes="80vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
