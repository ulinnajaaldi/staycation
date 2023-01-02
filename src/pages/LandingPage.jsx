import React from 'react';
import Banner from '../assets/images/banner.png';
import Layout from '../components/layout';
import { Link } from 'react-router-dom';

import VillaImg from '../assets/images/villa.png';

import icCities from '../assets/icons/ic_cities.png';
import icTraveler from '../assets/icons/ic_traveler.png';
import icTreasure from '../assets/icons/ic_treasure.png';

const mostPicked = [
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
	},
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
	},
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
	},
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
	},
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
	},
];

const places = [
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
	},
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
		popular: false,
	},
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
		popular: false,
	},
	{
		name: 'Ocean Land',
		address: 'Bandung, Indonesia',
		price: '$22',
		image: VillaImg,
		popular: true,
	},
];

const LandingPage = (props) => {
	return (
		<Layout>
			<div className='flex px-[9.375rem] py-[4.313rem] gap-40'>
				<div>
					<h1 className='font-bold text-[2.625rem] text-primary'>
						Forget Busy Work, Start Next Vacation
					</h1>
					<p className='font-light text-abu w-2/3 leading-[27.2px] pt-5 pb-8'>
						We provide what you need to enjoy your holiday with family. Time to
						make another memorable moments.
					</p>
					<button className='btn btn-wide btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg drop-shadow-lg text-white font-medium capitalize'>
						Show Me Now
					</button>

					<div className='pt-20 flex gap-[51px]'>
						<div>
							<img src={icTraveler} alt='ic-travelers' />
							<p className='pt-[10px] font-medium'>
								80,409 <span className='font-light text-abu'>travelers</span>
							</p>
						</div>
						<div>
							<img src={icTreasure} alt='ic-treasure' />
							<p className='pt-[10px] font-medium'>
								862 <span className='font-light text-abu'>treasure</span>
							</p>
						</div>
						<div>
							<img src={icCities} alt='ic-cities' />
							<p className='pt-[10px] font-medium'>
								1,492 <span className='font-light text-abu'>cities</span>
							</p>
						</div>
					</div>
				</div>
				<div>
					<img src={Banner} alt='Banner' className='max-w-[559px] ' />
				</div>
				{/* Hero Selection Clear */}
			</div>
			{/* mostpicked section */}
			<div className='w-full max-w-[1142px] mx-auto'>
				<section id='most-picked'>
					<div className='font-medium text-2xl text-primary mb-5'>
						Most Picked
					</div>
					<div className='grid grid-cols-3 gap-x-[30px] gap-y-[30px]'>
						{mostPicked.map((place, index) => (
							<Link
								to={`/detail/${index + 1}`}
								className={`h-full rounded-[15px] relative overflow-hidden ${
									index + 1 === 1 && 'row-span-2'
								}`}
								style={{
									backgroundImage: `url(${place.image})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
									backgroundRepeat: 'no-repeat',
									height: `${index + 1 === 1 ? '460px' : '215px'}`,
								}}>
								<div
									className='absolute w-full h-full'
									style={{
										background:
											'linear-gradient(180.1deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.5) 99.91%)',
									}}></div>
								<div className='absolute text-white text-base font-light top-0 right-0 w-[180px] bg-pink h-10 rounded-bl-[15px] flex justify-center items-center'>
									<span className='font-medium'>{place.price} </span> per night
								</div>
								<div className='absolute bottom-6 left-6 text-white'>
									<div className='font-normal text-xl'>{place.name}</div>
									<div className='font-light text-base'>{place.address}</div>
								</div>
							</Link>
						))}
					</div>
				</section>

				<section id='places' className='mt-[70px]'>
					<div className='font-medium text-2xl text-primary mb-5'>
						Houses with beauty backyard
					</div>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-x-[30px]'>
						{places.map((place, index) => (
							<Link
								to={`/detail/${index + 1}`}
								className={`h-full rounded-[15px]  relative overflow-hidden`}>
								<img
									src={place.image}
									className='w-[265px] h-[180px] object-cover rounded-[15px]'
									alt=''
								/>
								{place.popular && (
									<div className='absolute text-white text-base font-light top-0 right-0 w-[180px] bg-pink h-10 rounded-bl-[15px] flex justify-center items-center'>
										<span className='font-medium'>Popular</span> Choice
									</div>
								)}
								<div className=' bottom-6 left-6  mt-4'>
									<div className='font-normal text-xl text-primary'>
										{place.name}
									</div>
									<div className='font-light text-base text-abu'>
										{place.address}
									</div>
								</div>
							</Link>
						))}
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default LandingPage;
