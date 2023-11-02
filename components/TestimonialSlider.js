// testimonial data
const testimonialSlider = [
  {
    image: '/poto-1.png',
    name: 'Pisang Crispy Lumer', 
    position: 'Customer',
    message:
      'Kelompok 4',
  },
  {
    image: '/poto-2.png',
    name: 'Manggo Sticky Rice',
    position: 'Customer',
    message:
      'Kelompok 4',
  },
  {
    image: '/poto-3.png',
    name: 'Stup Roti',
    position: 'Customer',
    message:
      'Kelompok 4',
  },
];

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination} from 'swiper';

// icon
import {FaQuoteLeft} from 'react-icons/fa';
// image
import Image from 'next/image';
import Testimonials from '../pages/testimonials';

const TestimonialSlider = () => {
  return (
  <Swiper 
  navigation={true}
  Pagination={{
    clickable: true,
  }}
  modules={{Navigation, Pagination}}
  className='h-[400px]'
  >
    {testimonialSlider.map((person, index) => {
        return ( 
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* avatar, name, position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* avatar */}
                <div className='mb-2 mx-auto '>
                  <Image src={person.image} width={100} height={100} alt='' />
                </div>
                {/* name */}
                <div className='text-lg'>{person.name}</div>
                {/* position */}
                <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.name}</div>
              </div>
            </div>     
              {/* quate & massage */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 
              xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* massage */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
          </div>
        </SwiperSlide>
        );
      })}
  </Swiper>
  );
};

export default TestimonialSlider;
