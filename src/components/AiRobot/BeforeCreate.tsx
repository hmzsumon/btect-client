import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
import { PiChartLineDuotone } from 'react-icons/pi';

const BeforeCreate = () => {
	return (
		<div>
			<section className='flex flex-col justify-center mx-auto '>
				<div className='p-5 my-5 space-y-3 border border-yellow-700 rounded-md '>
					<div className='flex items-center gap-x-2'>
						<PiChartLineDuotone className='text-2xl ' />
						<h4 className='text-xl font-semibold text-blue-gray-200'>
							Ai Spot Grid
						</h4>
					</div>

					<p className='text-sm text-gray-500'>
						Buy low and sell high 24/5 automatically with just one click.
					</p>

					<div className='flex gap-x-2'>
						<GiCheckMark className='text-green-500' />
						<h4 className='text-gray-500 font-body'>Volatile Markets</h4>
					</div>

					<div className='flex gap-x-2'>
						<GiCheckMark className='text-green-500' />
						<h4 className='text-gray-500 font-body'>Preset Ranges</h4>
					</div>
					<div className='flex gap-x-2'>
						<GiCheckMark className='text-green-500' />
						<h4 className='text-gray-500 font-body'>
							Weekends (Saturday and Sunday)
						</h4>
					</div>

					<div className='flex items-center justify-between'>
						<Link
							href={{
								pathname: '/create-robot',
								query: { mode: 'create' },
							}}
							className='flex items-center p-2 transition-all duration-200 border rounded-md cursor-pointer gap-x-2 hover:scale-110'
						>
							<p className='text-yellow-900'>Create</p>
							<BsArrowRight className='text-yellow-900' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BeforeCreate;
