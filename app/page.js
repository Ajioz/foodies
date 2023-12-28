import Link from "next/link";
import style from './page.module.css'
import ImageSlideshow from "@/components/images/image-slideShow";

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <div className={style.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={style.hero}>
            <h1>Food Studio for NextLevel Foodies</h1>
            <p>Taste & Share Food globally</p>
          </div>
          <div className={style.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore Meal</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={style.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={style.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
