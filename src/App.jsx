import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest, BsTwitter } from 'react-icons/bs';
import Logo from '/images/logo.svg';
import LogoWhite from '/images/logo-white.svg';
import Hero from '/images/illustration-working.svg';
import BrandReco from '/images/icon-brand-recognition.svg';
import Detailed from '/images/icon-detailed-records.svg';
import Fully from '/images/icon-fully-customizable.svg';
import Form from './components/Form';
const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <main>
            {/* nav */}
            <nav className="py-5 lg:py-10 flex items-center justify-between container mx-auto relative lg:gap-12">
                <img src={Logo} alt="logo" />
                <div className="text-white font-medium lg:flex-1">
                    <div
                        onClick={navHandler}
                        className="block lg:hidden text-neutral_gray text-4xl"
                    >
                        <BiMenu />
                    </div>
                    <div
                        className={` ${
                            isOpen ? 'block' : 'hidden'
                        } bg-primary_dark absolute left-1/2 -translate-x-1/2 w-[90%] px-10 py-12 rounded-xl lg:hidden`}
                    >
                        <ul className="flex flex-col gap-5 items-center border-b-[1px] border-neutral_gray pb-5">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Ressources</li>
                        </ul>
                        <div className="pt-5 flex flex-col gap-5">
                            <button>Login</button>
                            <button className=" bg-primary py-3 rounded-3xl">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-between ">
                        <ul className="flex text-neutral_gray gap-5">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Ressources</li>
                        </ul>
                        <div className=" flex gap-5">
                            <button className="text-neutral_gray">Login</button>
                            <button className=" bg-primary py-2 px-6 rounded-3xl">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* hero section */}
            <header className="container mx-auto flex flex-col lg:flex-row items-center gap-7">
                <div>
                    <img src={Hero} alt="Avatar working on pc" />
                </div>
                <div className="text-center lg:text-start lg:order-first">
                    <h1 className="font-primary font-bold text-4xl lg:text-6xl pb-5 text-neutral_darkViolet">
                        More than just shorter links
                    </h1>
                    <p className="text-neutral_violet pb-5 lg:pb-8">
                        {
                            "Build your brand's recognition and get detailed insights on how your links are performing"
                        }
                    </p>
                    <button className=" bg-primary py-3 rounded-3xl text-white font-medium px-10">
                        Get Started
                    </button>
                </div>
            </header>
            {/* main section */}
            <section className=" mt-44 pb-36 bg-gray-300/90 text-center">
                <div className="container mx-auto">
                    <div className=" -translate-y-1/2">
                        <Form />
                    </div>
                    <h2 className="text-primary_dark font-bold font-primary text-2xl pb-4">
                        Advanced Statistics
                    </h2>
                    <p className="text-neutral_violet font-medium w-[24rem] mx-auto">
                        Track how your links are performing acress the web with
                        our advanced statictics dashboard
                    </p>
                    <div className="flex flex-col lg:flex-row lg:gap-10">
                        <div className="bg-white flex flex-col mt-20 px-10 pb-10 rounded-md relative">
                            <div className="w-20 h-20 bg-primary_dark self-center lg:self-start flex items-center justify-center rounded-full -translate-y-1/2">
                                <img
                                    className=" w-12 h-12   "
                                    src={BrandReco}
                                    alt="Brand Recognition"
                                />
                            </div>
                            <h3 className=" font-primary font-bold text-2xl text-primary_dark pb-4">
                                Brand Recognition
                            </h3>
                            <p className="text-neutral_violet">
                                {
                                    "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                                }
                            </p>
                            <div className="w-3 lg:w-24 lg:h-3 h-24 absolute bottom-[-38.7%] lg:bottom-1/2 right-1/2 lg:-right-12 translate-x-1/2 bg-primary"></div>
                        </div>
                        <div className="bg-white flex flex-col mt-20 px-10 pb-10 rounded-md relative lg:translate-y-10">
                            <div className="w-20 h-20 bg-primary_dark self-center flex items-center justify-center lg:self-start rounded-full -translate-y-1/2">
                                <img
                                    className=" w-12 h-12   "
                                    src={Detailed}
                                    alt="Detailed Records"
                                />
                            </div>
                            <h3 className=" font-primary font-bold text-2xl text-primary_dark pb-4">
                                Detailed Records
                            </h3>
                            <p className="text-neutral_violet">
                                {
                                    'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                                }
                            </p>
                            <div className="w-3 lg:w-24 lg:h-3 h-24 absolute bottom-[-38.7%] lg:bottom-1/2 right-1/2 lg:-right-12 translate-x-1/2 bg-primary "></div>
                        </div>
                        <div className="bg-white flex flex-col mt-20 px-10 pb-10 rounded-md z-10 lg:translate-y-20 ">
                            <div className="w-20 h-20 bg-primary_dark self-center flex items-center justify-center lg:self-start rounded-full -translate-y-1/2">
                                <img
                                    className=" w-12 h-12   "
                                    src={Fully}
                                    alt="Fully Customizable"
                                />
                            </div>
                            <h3 className=" font-primary font-bold text-2xl text-primary_dark pb-4">
                                Fully Customizable
                            </h3>
                            <p className="text-neutral_violet">
                                {
                                    'Improve brand awareness and content discoverability through customizable links, surpercharging audience engagement.'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* second section */}
            <section className="bg-primary_dark text-center py-20">
                <p className="text-white text-3xl font-primary font-bold pb-4">
                    Boost your links today
                </p>
                <button className='className=" py-3 px-10 bg-primary text-white rounded-3xl'>
                    Get Started
                </button>
            </section>
            {/* footer */}
            <footer className="bg-neutral_darkViolet py-20">
                <div className="container mx-auto text-center flex flex-col lg:flex-row items-center lg:items-start lg:gap-7 lg:justify-between ">
                    <img
                        className="pb-10 lg:pr-10"
                        src={LogoWhite}
                        alt="Logo white"
                    />
                    <div>
                        <p className="text-white font-primary text-lg font-bold pb-5">
                            Features
                        </p>
                        <ul className="text-neutral_violet flex flex-col gap-3">
                            <li>Link Shortening</li>
                            <li>Branded Links</li>
                            <li>Analytics</li>
                        </ul>
                    </div>
                    <div className="pt-10 lg:pt-0">
                        <p className="text-white font-primary text-lg font-bold pb-5">
                            Ressources
                        </p>
                        <ul className="text-neutral_violet flex flex-col gap-3">
                            <li>Blog</li>
                            <li>Developers</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className="pt-10 lg:pt-0">
                        <p className="text-white font-primary text-lg font-bold pb-5">
                            Company
                        </p>
                        <ul className="text-neutral_violet flex flex-col gap-3">
                            <li>About</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="pt-10 lg:pt-0 flex text-white gap-5 text-2xl">
                        <AiFillFacebook />
                        <BsTwitter />
                        <BsPinterest />
                        <AiOutlineInstagram />
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default App;
