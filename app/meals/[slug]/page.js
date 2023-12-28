import React from 'react'
import style from './page.module.css'
import Image from 'next/image';
import { getMeal } from '@/lib/meal';
import { notFound } from 'next/navigation';


const generateMetadata = async({ params }) => {
  const meal = await getMeal(params.slug);
  if(!meal) return notFound();
  return {
    title: meal.title,
    description: meal.summary
  }
}


const MealDetailsPage = async({ params }) => {
  const meal  = await getMeal(params.slug);
  if(!meal) return notFound();
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  
  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={style.headerText}>
          <h1 className={style.creator}>{meal.title}</h1>
          <p>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={style.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={style.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

export default MealDetailsPage;