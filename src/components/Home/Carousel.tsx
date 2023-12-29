import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 4000,
		};
		const sliderItems = [
			'./images/carousel/1.png',
			'./images/carousel/2.png',
			'./images/carousel/3.png',
			'./images/carousel/4.png',
		];
		return (
			<div className=' bg-transparent w-[90%] mx-auto md:mb-6  '>
				<Slider {...settings}>
					{sliderItems.map((item, index) => (
						<div className={`px-1`} key={index}>
							<img
								src={item}
								alt=''
								className='w-full rounded-xl min-h-[120px] md:min-h-[200px]'
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	}
}
