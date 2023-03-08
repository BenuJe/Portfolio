import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import Benoit from "../../public/BenoitJ.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p5 from "../../public/p5.png";
import p6 from "../../public/p6.png";
import p7 from "../../public/p7.png";
import dossier from "../../public/folder.png";
import code from "../../public/coding.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Benoit JEANNOT Portfolio</title>
				<meta
					name="description"
					content="Porte feuille de compétence de Benoit JEANNOT"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className=" bg-slate-50 px-10 md:px-20 lg:px-40 dark:bg-slate-800">
				{/* première page */}

				<section className="min-h-screen">
					<nav className=" py-5 mb-12 flex justify-between">
						<h1 className="text-xl font-burtons dark:text-yellow-100">Portfolio</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-yellow-100  animate-bounce" />
							</li>
							<li>
								<a 
									href="#"
                  onClick={()=> setDarkMode(!darkMode)}
									className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md ml-8"
								>
									Switch theme
								</a>
							</li>
						</ul>
					</nav>

					<div className="text-center p-10 ">
						<h2 className="text-4xl py-2 text-cyan-800 font-medium md:text-6xl lg:text-8xl dark:text-cyan-300">
							Benoit Jeannot
						</h2>
						<h3 className="text-2xl py-2 md:text-3xl dark:text-yellow-100">Développeur Web</h3>
						<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
							{`Bienvenue sur mon Portfolio ! Laissez-moi me présenter.`}
							<br></br>
						  	{`Passionné d’informatique j’ai commencé mon cursus par un BTS SIO (Service
						  	Informatique aux Organisation) et je l’ai terminé avec la formation Développeur Web
						  	d’Openclassrooms.`}
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-yellow-100">
						<a href="https://github.com/BenuJe" className=" hover:animate-pulse"><AiFillGithub /></a>
						<a href="https://www.linkedin.com/in/benoitje/" className=" hover:animate-pulse"><AiFillLinkedin /></a>
					</div>

					<div className="relative mx-auto w-80 h-80 mt-10">
						<Image src={Benoit} alt="Photo de Benoit JEANNOT" />
					</div>
				</section>
				{/* Deuxième page */}
				<section>
					<div>
						<h3 className="text-5xl py-1 mt-10 text-center text-cyan-900  dark:text-cyan-300">Mes outils</h3>

					</div>

					<div className="lg:flex gap-10 justify-around">

						<div className="text-center shadow-md p-10 shadow-slate-800 pb-10 rounded-xl my-10 dark:shadow-amber-100 dark:shadow-md">
							<Image
								className=" mx-auto "
								src={dossier}
								width={200}
								height={200}
								alt="design"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2 dark:text-cyan-300">
								Environnement de travail
							</h3>
							<p className="text-md leading-8 text-gray-800 dark:text-yellow-100 ">
							{`Voici les logiciels que j'utilise pour mener à bien mes objectifs et réaliser mes projets`}
							</p>
							<h4 className="py-4 dark:text-cyan-300">Outils utilisés :</h4>
							<div className="flex flex-col lg:flex-row lg:flex-wrap">
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2">Visual Studio Code</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2">Photoshop</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2">GitHub</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2">Figma</p>
							</div>
						</div>
						<div className="text-center  shadow-md shadow-slate-800 p-10 pt rounded-xl my-10 dark:shadow-amber-100 ">
							<Image
								className=" mx-auto "
								src={code}
								width={200}
								height={200}
								alt="design"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2 dark:text-cyan-300">
								Programmation
							</h3>
							<p className="text-md  leading-8 text-gray-800 dark:text-yellow-100">
								{`De la programmation ? Oui ! Mais avec quels langages et quels frameworks ?`}
							</p>
							<h4 className="py-4 dark:text-cyan-300">Frameworks et languages :</h4>
							<div className="flex flex-row flex-wrap">
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2  ">React</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Javascript</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Sass</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Html / Css</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Node.js</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Express</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Php</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Mysql</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">Next.js</p>
							<p className="text-gray-800 py-1 dark:text-yellow-100  basis-1/2 ">tailwind css</p>
							</div>
						</div>
						
					</div>
				</section>

        <section>
          <div>
            <h3 className="text-5xl font-medium pt-8 pb-2 dark:text-cyan-300 text-center">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-yellow-100 text-center">
								{`J'ai pu me présenter, vous montrer les logiciels que j'utilise, les frameworks ainsi que les languages que je maîtrisais.`}
								<br></br>
								{`Il ne me reste plus qu'à vous montrer ce que je sais faire ! Ca tombe bien la suite se trouve juste en dessous.`}
							</p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
				<a href="https://github.com/BenuJe/p7">
              <Image src={p7} className=" rounded-lg object-cover hover:contrast-75 hover:animate-pulse"  layout="responsive" alt="1" /> </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={p6} className=" rounded-lg object-cover hover:contrast-75 hover:animate-pulse"  layout="responsive" alt="1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={p5} className=" rounded-lg object-cover hover:contrast-75 hover:animate-pulse" layout="responsive" alt="1" />
            </div>
            <div className="basis-1/3 flex-1">
				<a href="https://benuje.github.io/p4/">
              <Image src={p4} className=" rounded-lg object-cover hover:contrast-75 hover:animate-pulse" layout="responsive" alt="1" /></a>
            </div>
            <div className="basis-1/3 flex-1">
				<a href="https://benuje.github.io/p3/">
              <Image src={p3} className=" rounded-lg object-cover hover:contrast-75 hover:animate-pulse" layout="responsive" alt="1" /></a>
            </div>
            <div className="basis-1/3 flex-1">
				<a href="https://benuje.github.io/P2Booky/test.html">
              <Image src={p2} className=" rounded-lg object-cover hover:contrast-75 hover:animate-pulse" layout="responsive" alt="1" /></a>
            </div>
          </div>
        </section>
			</main>
		</div>
	);
}
