"use client"
import Image from 'next/image'
import '@/styles/globals.css';
import ais from "@/public/asset/ais.jpg"
import Learn from "@/public/asset/Learn.jpg"
import engpyWelcome from "@/public/asset/engpyWelcome.jpg"
import bassRound from "@/public/asset/bassRound.jpg"
import {Card, CardPurple, Cards, PurpleCard} from './Card';
import LineGradient from './components/Designs/Gradients';
import GenMatrix from './components/Designs/GradientMatrix';
import Mr from "@/public/asset/mr3.png"
import Mr2 from "@/public/asset/engpy.jpg"
import {CodeIcon, LeftArrowIcon} from './components/icons/iconsSvg';
import codeImage from "@/public/asset/carboncode.png";
import {useEffect, useState} from 'react';
import {animateOnScroll} from './components/Designs/animations/Scoll';
import {CodeEditor} from './components/Editor/codeEditor';
import Navbar from './components/Navs/Navbar'




export default function Home() {
  const gradientBackgroundStyle = {font: 'serif', groundImage: `url(${bassRound.src})`, background: 'linear-gradient(to right, #20209b, #df06df) '}
  let Tetx1 = "Mordern & Advance Engineering CAS.";
  const [text_1, setTetx_1] = useState("");
  const [index, setIndex] = useState(0);
  const Text = `from engpy import Expr,factorial

def Macularin_Series(expression, function_plugin, t_order):

  expr = Expr(expression)
  var_args = expr.vars

  series = expr.cal({function_plugin: '0'})

  for i in range(1, t_order + 1):
    expr = diff = expr.lin_diff(function_plugin)
  series += expr.cal({function_plugin: '0'}) * f'{function_plugin}^{i}' / factorial(i)
  return series.simp()
    
`
  const [onwait, setOnwait] = useState(true);
  animateOnScroll()
  useEffect(() => {
    const interval = setInterval(() => {
      if(onwait && index < Tetx1.length) {
        setTetx_1((prevText) => prevText + Tetx1[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }

      if(index === Tetx1.length - 1) {
        setOnwait(false);
        const timeout = setTimeout(() => {
          setOnwait(true);
          setTetx_1("M");
          setIndex(1);
        }, 5000);

        return () => {
          clearTimeout(timeout);
        };
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [index, onwait]);

  return (

    <div className='bg-slate-900 block'>
      <div>
        <Navbar />
      </div>
      <div className="bg-slate-900">
        <div className='mains bg-slate-800'>
          <p className='text-[white] mt-[80px] text_transition font-bold sm:text-[50px] text-[30px]  bg-gradient-to-r from-amber-500 via-blue-600 to-yellow-500 bg-clip-text text-transparent text-center'>{text_1}<span className='text-[30px] text-center sm:text-[60px]  bg-gradient-to-r from-blue-500 via-purple-600 to-yellow-500 bg-clip-text text-transparent text-center'>
            <p>Python Advance Computer Algebra System</p>
          </span></p>
          <div className="flex justify-center ">
            <div className='text-center flex items-center justify-center space-x-[10%] sm:space-x-[100%] mt-[100px]'>
              <button className='text-center text-[20px] bg-gradient-to-r from-amber-600 via-purple-900 to-blue-950 rounded bg-blue-950 px-3 text-[white] rounded  py-4 no_wrap'> Get Started Engpy </button>
              <button className='text-center text-[20px] bg-gradient-to-r from-amber-600 via-purple-900 to-blue-950 bg-blue-950 px-3 py-4 rounded text-[white]  no_wrap'> Go To Documentation </button>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='mt-10 flex items-center justify-center sm:px-10'>
              {/* <img width={"60%"} src={codeImage.src} /> */}
            </div>
          </div>
          <div className="mt-[120px] sm:mt-[110px] flex-row  sm:flex items-center justify-center space-x-[100px] text-sm">
            <div className='flex justify-center text-center'> <CodeEditor /></div>
            <a className=" sm:mt-[-110px] bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-10  rounded-lg sm:w-[400px]  no_wrap flex items-center justify-center sm:w-auto dark:bg-slate-950 dark:highlight-white/20 hover:bg-slate-950" href="/docs/installation">
              Get started With Engpy
            </a>
            {/* <button type="button" className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
              <span className="flex-auto">Quick search...</span>
              <kbd className="font-sans font-semibold dark:text-slate-500">
                <abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">
                  Ctrl
                </abbr> S
              </kbd>
            </button> */}
          </div>
        </div>

        <div className='bg-white py-10'>
          <div className='flex-row items-center justify-center text-cemter  mt-[280px] px-1 sm:px-10'>

            <div className="bg-white lg:px-[100px]  rounded-md  py-[20px] block items-center  mt-[100px]  lg:px-1 sm:px-1 px-[50px] ">
              <div className='px-1 sm:px-[5%] mt-[50px] rounded-md shadow-md bg-slate-100 py-10 mb-10'>
                < CodeIcon fontSize="medium" className='text-purple-500 text-white' />
                <h1 className='text-purple-400 mt-5 text-[20px] font-[serif]'> Concrete-Base-class </h1>
                <div className='flex justify-between space-x-10 items-center  flex-col sm:flex-row'>
                  <div>
                    <h1 className=" text-left">
                      <p className="font-bold sm:text text-[32px] text-left text-slate-900 ">
                        Code and Solve Math Model
                      </p>
                      <p className='text-slate-500 text-left w-[50%] sm:w-[100%] mt-3 text-[16px]'>
                        Engpy's Expr Object simplifies algebraic symbolization, allowing easy expression initialization, serialization, and localized data transformation.
                        <p className="">The utility's straightforward interface empowers efficient equation representation and unleashes the potential for sophisticated calculations.</p>
                        <p className='mt-0'>
                          With seamless integration, users can perform advanced
                          analyses and complex operations on mathematical formulas effortlessly.
                        </p>
                      </p>
                    </h1>
                    <div className='mt-10 w-[150px]'>
                      <button className="text-slate-100 mt-5 mb-10 px-2 py-2  rounded-md shadow-xl justify-around  flex items-center  bg-blue-950 no_wrap" > <h1> Learn more</h1>  <div>

                        <LeftArrowIcon fontSize="medium" />
                      </div> </button>
                    </div>
                    <div className=" flex  justify-space mt-[100px] text-slate-200">
                      <div>

                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center '>
                    <div className='flex justify-center text-center'> <CodeEditor /></div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white lg:px-[100px]  rounded-md  py-[20px] block items-center  mt-[100px]  lg:px-1 sm:px-1 px-[50px] ">
              <div className='px-1 sm:px-[5%] mt-[50px] rounded-md shadow-md bg-slate-100 py-10 mb-10'>
                < CodeIcon fontSize="medium" className='text-purple-500 text-white' />
                <h1 className='text-purple-400 mt-5 text-[20px] font-[serif]'> Concrete-Base-class </h1>
                <div className='flex justify-between space-x-10 items-center  flex-col sm:flex-row'>
                  <div>
                    <h1 className=" text-left">
                      <p className="font-bold sm:text text-[32px] text-left text-slate-900 ">
                        Code and Solve Math Model
                      </p>
                      <p className='text-slate-500 text-left sm:w-[100%] mt-3 text-[16px]'>
                        Engpy's Expr Object simplifies algebraic symbolization, allowing easy expression initialization, serialization, and localized data transformation.
                        <p className="">The utility's straightforward interface empowers efficient equation representation and unleashes the potential for sophisticated calculations.</p>
                        <p className='mt-0'>
                          With seamless integration, users can perform advanced
                          analyses and complex operations on mathematical formulas effortlessly.
                        </p>
                      </p>
                    </h1>
                    <div className='mt-10 w-[150px]'>
                      <button className="text-slate-100 mt-5 mb-10 px-2 py-2  rounded-md shadow-xl justify-around  flex items-center  bg-blue-950 no_wrap" > <h1> Learn more</h1>  <div>

                        <LeftArrowIcon fontSize="medium" />
                      </div> </button>
                    </div>
                    <div className=" flex  justify-space mt-[100px] text-slate-200">
                      <div>

                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center '>
                    <div className='flex justify-center text-center'> <CodeEditor /></div>
                  </div>
                </div>
              </div>
            </div>




            <div className="bg-white lg:px-[100px]  rounded-md  py-[20px] block items-center  mt-[100px]  lg:px-1 sm:px-1 px-[50px] ">
              <div className='px-1 sm:px-[5%] mt-[50px] rounded-md shadow-md bg-slate-100 py-10 mb-10'>
                < CodeIcon fontSize="medium" className='text-purple-500 text-white' />
                <h1 className='text-purple-400 mt-5 text-[20px] font-[serif]'> Concrete-Base-class </h1>
                <div className='flex justify-between space-x-10 items-center  flex-col sm:flex-row'>
                  <div>
                    <h1 className=" text-left">
                      <p className="font-bold sm:text text-[32px] text-left text-slate-900 ">
                        Code and Solve Math Model
                      </p>
                      <p className='text-slate-500 text-left sm:w-[100%] mt-3 text-[16px]'>
                        Engpy's Expr Object simplifies algebraic symbolization, allowing easy expression initialization, serialization, and localized data transformation.
                        <p className="">The utility's straightforward interface empowers efficient equation representation and unleashes the potential for sophisticated calculations.</p>
                        <p className='mt-0'>
                          With seamless integration, users can perform advanced
                          analyses and complex operations on mathematical formulas effortlessly.
                        </p>
                      </p>
                    </h1>
                    <div className='mt-10 w-[150px]'>
                      <button className="text-slate-100 mt-5 mb-10 px-2 py-2  rounded-md shadow-xl justify-around  flex items-center  bg-blue-950 no_wrap" > <h1> Learn more</h1>  <div>

                        <LeftArrowIcon fontSize="medium" />
                      </div> </button>
                    </div>
                    <div className=" flex  justify-space mt-[100px] text-slate-200">
                      <div>

                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center '>
                    <div className='flex justify-center text-center'> <CodeEditor /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* <Lksksk></Lksksk> */}
          <div className='bg-white '>
            <div className='flex justify-around '>
              <div className='flex-col items-center text-center py-3 rounded-2xl  sm:w-[100%]  rounded-full  '>
                <div className='bg-zinc-100 flex-row  justify-between  items-center bg-gradient-to-r from-white-100 via-slate-100  to-slate-200 inset-1 opacity-1 text-[black] w-full text-[16px] '>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffff" fill-opacity="1" d="M0,256L24,245.3C48,235,96,213,144,213.3C192,213,240,235,288,234.7C336,235,384,213,432,197.32C480,181,528,171,576,160C624,149,672,139,720,154.7C768,171,816,213,864,197.3C912,181,960,107,1008,96C1056,85,1104,139,1152,138.7C1200,139,1248,85,1296,53.3C1344,21,1392,11,1416,5.3L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
                  </svg>

                  <h1 className='text-slate-950 text-center  font-[serif] text-[25px] sm:text-[50px] text-bold px-3 font-medium'>Explore Your Data Tools With Engpy</h1>
                  <div className="px-10">
                    {/* <img src={Mr.src} width="30%" height="20%" className='sm:flex hidden rounded-full' /> */}
                    <div className=" grid grid-cols-1 sm:grid-cols-2">
                      <div className='mt-10 mb-5 flex-row sm:flex justify-around items-center  text-[black] px-0 sm:px-3 text-[16px]'>
                        <div className='shadow-lgshadow-cyan-500/50 GenMatrix bg-slate-900 w-[100%] sm:w-[50%] bg-[white] px-1 py-1 shadow-xl rounded-lg'>
                          <h1 className='bd rounded-sm mt-0 bg-slate-900 text-slate-200 text-[30px] sm:text-[25px] text-bold px-4 py-4  font-medium'> Engpy Made Easy</h1>
                          <p className='py-5 px-3 text-left text-slate-100'>
                            Engpy is a powerful Computer Algebra System (CAS) designed to break down complex areas of deep algebra into manageable components and facilitate the analysis of data structure transformations. This cutting-edge tool combines the principles of computer algebra and data structure manipulation to solve intricate problems and provide insights into complex transformations.
                          </p>
                          <hr className=' bd slate-100' />
                          <div className='flex-row sm:flex items-center space-x-2 px-3 mb-3 mt-1'>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white] '>AI Models </button>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white] '>Destructuring</button>
                          </div>
                        </div>
                      </div>

                      <div className='mt-10 flex-row sm:flex justify-around items-center  text-[black] px-0 sm:px-3 text-[16px]'>
                        <div className='shadow-lg shadow-slate-900/50 GenMatrix bg-slate-900 w-[100%] sm:w-[50%] bg-[white] px-1 py-1 shadow-xl rounded-lg'>
                          <h1 className='bd rounded-sm mt-0 bg-slate-900 text-slate-200 text-[30px] sm:text-[25px] text-bold px-4 py-4  font-medium'> Engpy Made Easy</h1>
                          <p className='py-5 px-3 text-left text-slate-100'>
                            Engpy is a powerful Computer Algebra System (CAS) designed to break down complex areas of deep algebra into manageable components and facilitate the analysis of data structure transformations. This cutting-edge tool combines the principles of computer algebra and data structure manipulation to solve intricate problems and provide insights into complex transformations.
                          </p>
                          <hr className=' bd slate-100' />
                          <div className='flex-row sm:flex items-center space-x-2 px-3 mb-3 mt-1'>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white] '>AI Models </button>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white] '>Destructuring</button>
                          </div>
                        </div>
                      </div>



                      <div className='mt-10 flex-row sm:flex justify-around items-center  text-[black] px-0 sm:px-3 text-[16px]'>
                        <div className='shadow-lg shadow-slate-900/50 GenMatrix bg-slate-900 w-[100%] sm:w-[50%] bg-[white] px-1 py-1 shadow-xl rounded-lg'>
                          <h1 className='bd rounded-sm mt-0 bg-slate-900 text-slate-200 text-[30px] sm:text-[25px] text-bold px-4 py-4  font-medium'> Engpy Made Easy</h1>
                          <p className='py-5 px-3 text-left text-slate-100'>
                            Engpy is a powerful Computer Algebra System (CAS) designed to break down complex areas of deep algebra into manageable components and facilitate the analysis of data structure transformations. This cutting-edge tool combines the principles of computer algebra and data structure manipulation to solve intricate problems and provide insights into complex transformations.
                          </p>
                          <hr className=' bd slate-100' />
                          <div className='flex-row sm:flex items-center space-x-2 px-3 mb-3 mt-1'>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white] '>AI Models </button>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white] '>Destructuring</button>
                          </div>
                        </div>
                      </div>


                      <div className='mt-10 flex-row sm:flex justify-around items-center  text-[black] px-0 sm:px-3 text-[16px]'>
                        <div className='shadow-lgshadow-cyan-500/50 GenMatrix bg-slate-900 w-[100%] sm:w-[50%] bg-[white] px-1 py-1 shadow-xl rounded-lg'>
                          <h1 className='bd rounded-sm mt-0 bg-slate-900 text-slate-200 text-[30px] sm:text-[25px] text-bold px-4 py-4  font-medium'> Engpy Made Easy</h1>
                          <p className='py-5 px-3 text-left text-slate-100'>
                            Engpy is a powerful Computer Algebra System (CAS) designed to break down complex areas of deep algebra into manageable components and facilitate the analysis of data structure transformations. This cutting-edge tool combines the principles of computer algebra and data structure manipulation to solve intricate problems and provide insights into complex transformations.
                          </p>
                          <hr className=' bd slate-100' />
                          <div className='flex-row sm:flex items-center space-x-2 px-3 mb-3 mt-1'>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white]'> AI Models     </button>
                            <button className='py-2 px-2 rounded bg-[blue] text-[white]'> Destructuring </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='rotate-180'>
                    <path fill="#ffff" fill-opacity="1" d="M0,256L24,245.3C48,235,96,213,144,213.3C192,213,240,235,288,234.7C336,235,384,213,432,197.32C480,181,528,171,576,160C624,149,672,139,720,154.7C768,171,816,213,864,197.3C912,181,960,107,1008,96C1056,85,1104,139,1152,138.7C1200,139,1248,85,1296,53.3C1344,21,1392,11,1416,5.3L1440,0L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>




        {/* //Section 2 */}
        <div className=' sm:px-10 bg-white'>
          <div className='px-[50px] py-10 '>
            <div className="rounded-lg bg-gradient-to-r from-slate-100 via-slate-100 to-zinc-100 sm:px-10 bend ">
              <div className='block sm:flex justify-around items-center'>
                <div className="ml-2">
                  <h1 className='text-pink-500 sm:text-left text-center  font-[serif] font-bold font-[150px] text-[30px] sm:text-[55px] no_wrap'>What Can We Offer</h1>
                  <h6 className="sm:w-[80%] text-slate-900  w-[100%] font-[serif] text-left text-[20px] sm:text-[20px] px-0 sm:px-4 ">Unleash Engineering Excellence! Our ultimate offering is a comprehensive toolkit for engineers, empowering them to conquer complex mathematical challenges with ease. Simplify calculus, matrix operations, signals processing, and more using our innovative tools. Dive into our branded matrix manipulation and transformation utilities, tailor-made for intricate tasks. Experience efficiency and sophistication like never before. Join us on the website to revolutionize your engineering pursuits with EngPy. Embrace the future of problem-solving and unlock limitless possibilities. Empower your journey, achieve greatness with EngPy – the epitome of engineering excellence!</h6>
                  <div className='sm:flex block space-x-6 px-5 mt-8'>
                    <button className='bg-[black] ease-in-out rounded px-12 py-3 text-[white] '> <span className=" text-[16.5px] bg-gradient-to-r from-amber-500 via-orange-600 to-blue-500 bg-clip-text text-transparent ">Get started</span> </button>
                    <button className='bg-[black] ease-in-out rounded px-12 py-3 text-[white] '> <span className=" text-[16.50px] bg-gradient-to-r from-amber-500 via-orange-600 to-blue-500 bg-clip-text text-transparent ">Engpy API</span> </button>
                  </div>
                </div>
                <GenMatrix />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 w-full bg-slate-900  '>
        <h1 className='text-center text-slate-100 font-bold text-[50px]'> Here Is Our Vast Class Component </h1>
        <div className='flex justify-center  text-center'>
          <div className='mt-[50px]  text-center items-center justify-center '>
            <div className=" flex justify-center text-center">
              <Cards>
                <Card img={ais.src} heading={"Engpy Component"} content={"Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm.Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm."} Link={'/Component'} LinkContent={"Compoenent"} />
                <Card img={ais.src} heading={"Expr Class Component"} content={"Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm.Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm."} Link={'/Component'} LinkContent={"Compoenent"} />
                <Card img={engpyWelcome.src} heading={"Matrix Class Component "} content={" Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm.Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm."} Link={'/Component'} LinkContent={" Component"} />
                <Card img={ais.src} heading={"Calculus Extension Component"} content={"Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm.Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm."} Link={'/Component'} LinkContent={"Compoenent"} />
                <Card img={engpyWelcome.src} heading={"AI Implement"} content={"Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm.Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm."} Link={'/Component'} LinkContent={" Component"} />
                <Card img={Learn.src} heading={"Vector Class Component "} content={" Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm.Explore How you can deal with More Algbrea and Mathematice complexity with the use of Engpy Library Component whichandle variouse type of 'Math' probelm."} Link={'/Component'} LinkContent={"Component"} />
              </Cards>
            </div>
          </div>
        </div>
      </div>



      <div className=''>
        <div className='relative bg-gradient-to-r from-slate-950 via-slate-900 to-purple-900 path1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0f172a" fill-opacity="1" d="M0,96L34.3,112C68.6,128,137,160,206,160C274.3,160,343,128,411,106.7C480,85,549,75,617,101.3C685.7,128,754,192,823,202.7C891.4,213,960,171,1029,170.7C1097.1,171,1166,213,1234,240C1302.9,267,1371,277,1406,282.7L1440,288L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
          </svg>
          <h2 className='text-[35px] text-center bg-gradient-to-r from-green-500 via-orange-600 to-purple-600 bg-clip-text text-transparent'>Learn About Engpy Component and Data Tools</h2>
          <div className='flex relative justify-around items-center '>
            <img src={Mr.src} width="30%" height="20%" className='rounded-full' />
            <div className="h-[500px] overflow-scroll scroll-smoth scroll-mx-0 scroll-my-0 hs">
              <PurpleCard>
                <CardPurple heading={"Expression Engpy Component"} imgs={<img src={Mr2.src} className='ben rounded-2xl transfrome-skewY-100' />} content={"Effortless Algebraic Mastery! The Expression Base component in Engpy empowers you to represent complex engineering expressions with ease. Using the Expr class, you can seamlessly handle intricate calculations and achieve precision in algebraic representation."} />
              </PurpleCard>
              <PurpleCard>
                <CardPurple heading={"Expression Engpy Component"} imgs={<img src={Mr2.src} className='ben rounded-2xl transfrome-skewY-100' />} content={"Effortless Algebraic Mastery! The Expression Base component in Engpy empowers you to represent complex engineering expressions with ease. Using the Expr class, you can seamlessly handle intricate calculations and achieve precision in algebraic representation."} />
              </PurpleCard>
              <PurpleCard>
                <CardPurple heading={"Expression Engpy Component"} imgs={<img src={Mr2.src} className='ben rounded-2xl transfrome-skewY-100' />} content={"Effortless Algebraic Mastery! The Expression Base component in Engpy empowers you to represent complex engineering expressions with ease. Using the Expr class, you can seamlessly handle intricate calculations and achieve precision in algebraic representation."} />
              </PurpleCard>
            </div>
          </div>
        </div>
      </div>


    </div >

  )
}
