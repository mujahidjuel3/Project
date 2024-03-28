import React from 'react';
import Image1 from '../../assets/category/console.jpeg';
import Image2 from '../../assets/category/oculus.jpeg';
import Image3 from '../../assets/category/speaker.jpeg';
import Button from '../Shared/Button';

const Category2 = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
             {/*first col*/}
             <div className='sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100
             text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-black'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Console</p>
                        <Button 
                            text="Browse"
                            bgColor="bg-primary"
                            textColor="text-white"/>
                    </div>
                </div>
                <img src={Image1} alt=''
                className='w-[250px] absolute bottom-0 -right-0 lg:top-[10px] -translate-y-1/7 mix-blend-multiply' />
             </div>
             {/*second col*/}
             <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90
             text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Oculus</p>
                        <Button
                            text="Browse"
                            bgColor="bg-white"
                            textColor="text-brandGreen"/>
                    </div>
                </div>
                <img src={Image2} alt=''
                className='w-[240px] absolute -right-7 bottom-0 top-40 mix-blend-multiply' />
             </div>
             {/*third col*/}
             <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90
             text-white rounded-3xl relative h-[320px] flex items-start'>
                <div>
                    <div className='space-y-2 mb-4'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Speaker</p>
                        <Button
                            text="Browse"
                            bgColor="bg-white"
                            textColor="text-brandBlue"/>
                    </div>
                </div>
                <img src={Image3} alt=''
                className='w-[200px] absolute -right-0 bottom-0 top-40 mix-blend-multiply'/>
             </div>
            </div>
        </div>
    </div>
  );
};

export default Category2;