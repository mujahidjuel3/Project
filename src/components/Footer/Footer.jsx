import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/#about',
    },
    {
        title: 'Contact',
        link: '/#contact',
    },
    {
        title: 'Blog',
        link: '/#blog',
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-5'>
                {/*compani details*/}
                <div className='py-8 px-4'>
                <a href='#' className='text-primary font-semibold
                 tracking-widest text-2xl uppercase sm:text-3xl'>Egoods</a>
                 <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, saepe.</p>
                 <p className=' dark:text-green-500 text-blue-700 mt-4'>Maid with love by <span className='font-bold'>Mujahid Juel</span></p>
                 <a href='http://www.google.com'target='_blank'
                 className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                    Visit our Website
                 </a>
               </div>
                
                {/*footer links*/}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>{
                            FooterLinks.map((data, index)=>(
                                      <li key={index}>
                                       <a href={data.link}
                                       className='text-gray-600 hover:text-black dark:text-gray-400
                                        hover:dark:text-white duration-300'>
                                        {data.title}
                                       </a>
                                      </li>
                            ))}
                        </ul>
                    </div>
                    {/*second col links*/}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>{
                            FooterLinks.map((data, index)=>(
                                      <li key={index}>
                                       <a href={data.link}
                                       className='text-gray-600 hover:text-black dark:text-gray-400
                                        hover:dark:text-white duration-300'>
                                        {data.title}
                                       </a>
                                      </li>
                            ))}
                        </ul>
                    </div>

                    {/*compani Address*/}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                           <div>
                                <div className="flex items-center gap-3">
                                <FaLocationArrow />
                                <p> Mohammadpur, Dhaka</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt />
                                <p>+88 01727983686</p>
                            </div>
                            {/*social links*/}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href='https://www.instagram.com/md_mujahid_juel?igsh=aHBkczVuNXp3Mjgx'>
                                    <FaInstagram  className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href='https://www.facebook.com/mujahidjuel07?mibextid=ZbWKwL'>
                                    <FaFacebook  className='text-3xl hover:text-primary duration-200'/>
                                </a>
                                <a href='https://www.linkedin.com'>
                                    <FaLinkedin  className='text-3xl hover:text-primary duration-200'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;