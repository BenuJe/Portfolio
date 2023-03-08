import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import Benoit from "../../public/BenoitJ.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Benoit JEANNOT Portfolio</title>
				<meta
					name="description"
					content="Porte feuille de compétence de Benoit JEANNOT"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800">
				{/* première page */}

				<section className="min-h-screen">
					<nav className=" py-10 mb-12 flex justify-between">
						<h1 className="text-xl font-burtons">Portfolio</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
							</li>
							<li>
								<a
									href="#"
                  onClick={()=> setDarkMode(!darkMode)}
									className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md ml-8"
								>
									Mode nuit
								</a>
							</li>
						</ul>
					</nav>

					<div className="text-center p-10 ">
						<h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl lg:text-8xl">
							Benoit Jeannot
						</h2>
						<h3 className="text-2xl py-2 md:text-3xl">Développeur Web</h3>
						<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ab sunt ullam quisquam sapiente molestiae facere, perspiciatis labore maiores in eaque debitis autem vero beatae! Enim at odio quod. Earum.
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 text-gray-700">
						<AiFillGithub />
						<AiFillLinkedin />
						<AiFillTwitterCircle />
					</div>

					<div className="relative mx-auto w-80 h-80 mt-20">
						<Image src={Benoit} alt="Photo de Benoit JEANNOT" />
					</div>
				</section>
				{/* Deuxième page */}
				<section>
					<div>
						<h3 className="text-3xl py-1 mt-10">Mes outils</h3>
						<p className="text-md py-2 leading-8 text-gray-800">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
							molestias officiis quo nam ut voluptates numquam deserunt vel
							reiciendis explicabo.
						</p>
					</div>

					<div className="lg:flex gap-10">
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<Image
								className=" mx-auto "
								src={design}
								width={100}
								height={100}
								alt="design"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2">
								De beaux designs
							</h3>
							<p className="text-md py-2 leading-8 text-gray-800">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
								molestias officiis quo nam ut voluptates numquam deserunt vel
								reiciendis explicabo.
							</p>
							<h4 className="py-4 text-teal-600">Outils utilisés :</h4>
							<p className="text-gray-800 py-1">Sass</p>
							<p className="text-gray-800 py-1">React</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<Image
								className=" mx-auto "
								src={code}
								width={100}
								height={100}
								alt="design"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2">
								De beaux designs
							</h3>
							<p className="text-md py-2 leading-8 text-gray-800">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
								molestias officiis quo nam ut voluptates numquam deserunt vel
								reiciendis explicabo.
							</p>
							<h4 className="py-4 text-teal-600">Outils utilisés :</h4>
							<p className="text-gray-800 py-1">Sass</p>
							<p className="text-gray-800 py-1">React</p>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-10">
							<Image
								className=" mx-auto "
								src={consulting}
								width={100}
								height={100}
								alt="design"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2">
								De beaux designs
							</h3>
							<p className="text-md py-2 leading-8 text-gray-800">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
								molestias officiis quo nam ut voluptates numquam deserunt vel
								reiciendis explicabo.
							</p>
							<h4 className="py-4 text-teal-600">Outils utilisés :</h4>
							<p className="text-gray-800 py-1">Sass</p>
							<p className="text-gray-800 py-1">React</p>
						</div>
					</div>
				</section>

          {/* Thème sombre */}
        <section>
          <div>
            <h3 className="text-lg font-medium pt-8 pb-2">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
								molestias officiis quo nam ut voluptates numquam deserunt vel
								reiciendis explicabo.
							</p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive" alt="1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive" alt="1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive" alt="1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive" alt="1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" alt="1" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout="responsive" alt="1" />
            </div>
          </div>
        </section>
			</main>
		</div>
	);
}
