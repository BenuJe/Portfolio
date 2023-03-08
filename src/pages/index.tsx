import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Benoit JEANNOT Portfolio</title>
        <meta name="description" content="Porte feuille de compétence de Benoit JEANNOT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>developpé par Benoit Jeannot</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li><a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md ml-8'>Retour</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
