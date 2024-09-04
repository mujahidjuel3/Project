import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/smartwatch.avif';
import Img2 from '../../assets/blogs/gadget.avif';
import Img3 from '../../assets/blogs/virtual.jpg';

const BlogData = [
    {
        title: 'How to chose perfect smartwatch',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus doloribus harum aperiam inventore et tenetur?',
        published: 'Jan 23, 2024 by Mahin',
        image: Img1, 
        asoDelay:'0',           
    },
    {
        title: 'How to chose perfect gadget',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus doloribus harum aperiam inventore et tenetur?',
        published: 'Jan 23, 2024 by Mujahid',
        image: Img2,   
        asoDelay:'200',         
    },
    {
        title: 'How to chose perfect VR headset',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Possimus doloribus harum aperiam inventore et tenetur?',
        published: 'Jan 23, 2024 by Joy Roy',
        image: Img3, 
        asoDelay:'400',           
    },
];

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container'>
         {/*Header section */}
         <Heading title='Recent News'
           subtitle={'Explore Our Blogs'} />

           {/*Blog section*/}
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
              {
                BlogData.map((data) => (
                   <div
                   data-aos='fade-up'
                   data-aos-delay={data.asoDelay} 
                   key={data.title} className='bg-white dark:bg-gray-900'>
                       {/*image section*/}
                       <div className='overflow-hidden rounded-2xl mb-2'>
                         <img src={data.image} alt='' className='w-full h-[220px] object-cover 
                         rounded-2xl hover:scale-105 duration-500'/>
                       </div>
                       {/*content section*/}
                       <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                       </div>
                   </div>
                ))
              }
           </div>
           </div>
    </div>
  );
};

export default Blogs;