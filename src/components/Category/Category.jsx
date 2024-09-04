import React from 'react';
import Image1 from '../../assets/category/earphone.jpeg';
import Image2 from '../../assets/category/watch.jpeg';
import Image3 from '../../assets/category/laptops.jpeg';
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
             {/*first col*/}
             <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/60
             text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                        <Button 
                            text="Browse"
                            bgColor="bg-primary"
                            textColor="text-white"/>
                    </div>
                </div>
                <img src={Image1} alt=''
                className='w-[220px] absolute bottom-0 -right-5 mix-blend-multiply' />
             </div>
             {/*second col*/}
             <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90
             text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                        <Button
                            text="Browse"
                            bgColor="bg-white"
                            textColor="text-brandYellow"/>
                    </div>
                </div>
                <img src={Image2} alt=''
                className='w-[175px] absolute -right-5 bottom-40 lg:top-[10px] mix-blend-multiply' />
             </div>
             {/*third col*/}
             <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90
             text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='space-y-3 mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40'>Laptop</p>
                        <Button
                            text="Browse"
                            bgColor="bg-white"
                            textColor="text-primary"/>
                    </div>
                </div>
                <img src={Image3} alt=''
                className='w-[250px] absolute -right-0 -translate-y-1/7 lg:top-[10px] mix-blend-multiply'/>
             </div>
            </div>
        </div>
    </div>
  );
};

export default Category;