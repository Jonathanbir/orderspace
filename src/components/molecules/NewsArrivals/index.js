/* eslint-disable react/no-danger */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */

import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import { useMedia } from 'util/hook/useMedia';

import BannerPrev from 'images/icon/atom-icon-left-green.inline.svg';
import BannerNext from 'images/icon/atom-icon-right-green.inline.svg';

import styles from './index.css';

const NextArrow = ({ onClick }) => (
	<button className={classnames(styles.controlButton, styles.next)} type="button" onClick={onClick}>
		<BannerNext />
	</button>
);

const PrevArrow = ({ onClick }) => (
	<button className={classnames(styles.controlButton, styles.prev)} type="button" onClick={onClick}>
		<BannerPrev />
	</button>
);

const NewsArrivals = () => {
	const data =
		'<div class="content"><div class="wrap wrap-new"><section id="bg2" class="new-arrivals"><div class="arrow-img-up"></div><h2>NEW ARRIVALS</h2><div class="new-arrivals-region"><div><input checked id="one" name="multiples" type="radio" value="1"><label for="one" class="l1"><i class="fa fa-star-o"></i></label><input id="two" name="multiples" type="radio" value="2"><label for="two" class="l2"><i class="fa fa-star-o"></i></i></label> <input id="three" name="multiples" type="radio" value="3"><label for="three"><i class="fa fa-star-o"></i></label><input id="four" name="multiples" type="radio" value="4"><label for="four"><i class="fa fa-star-o"></i></label><input id="five" name="multiples" type="radio" value="5"><label for="five"><i class="fa fa-star-o"></i></label><input id="six" name="multiples" type="radio" value="6"><label for="six"><i class="fa fa-star-o"></i></label><input id="seven" name="multiples" type="radio" value="7"><label for="seven"><i class="fa fa-star-o"></i></label><input id="eight" name="multiples" type="radio" value="8"><label for="eight"><i class="fa fa-star-o"></i></label><input id="nine" name="multiples" type="radio" value="9"><label for="nine"><i class="fa fa-star-o"></i></label><input id="ten" name="multiples" type="radio" value="8"><label for="four"><i class="fa fa-star-o"></i></label><input id="three"" name="multiples" type="radio" value="8"><label for="three"><i class="fa fa-star-o"></i></i></label><input id="two" name="multiples" type="radio" value="8"><label for="two"><i class="fa fa-star-o"></i></label><input id="fourteen"" name="multiples" type="radio" value="8"><label for="six"><i class="fa fa-star-o"></i></i></label><input id="eight" name="multiples" type="radio" value="8"><label for="eight" class="l14"><i class="fa fa-star-o"></i></label><label for="one" class="l14"><i class="fa fa-star-o"></i></label><label for="two" class="l14"><i class="fa fa-star-o"></i></label><label for="three" class="l14"><i class="fa fa-star-o"></i></label><label for="four" class="l14"><i class="fa fa-star-o"></i></label><label for="five" class="l14"><i class="fa fa-star-o"></i></label>  <div class="container"><div class="carousel"><div class="carousel-region"> 	<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival02.jpg"  alt=""><div class="new-arrival-content"> <h3>MADNESS</h3> 							<span>PULLOVER JACKET</span> 							<p>NTD $2749.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="s">S</option> 									<option value="m">M</option> 									<option value="l">L</option> 									<option value="xl">XL</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival02-1.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival02.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival02-3.jpg"> 						</div> 					</div> 		<div class="carousel-region mb"> 						<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival03.jpg" alt=""> 						<div class="new-arrival-content" style="right:7px;"> 							<h3>MDNS</h3> 							<span>WINDSTOPPER PARKA</span> 							<p>NTD $3590.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="s">S</option> 									<option value="m">M</option> 									<option value="l">L</option> 									<option value="xl">XL</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 				<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival03-1.jpg"> 	<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival03-2.jpg"> <img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival03-3.jpg"></div></div> <div class="carousel-region mb"> 					<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival04.jpg" alt=""> 						<div class="new-arrival-content"> 							<h3>SPACE-JACKET</h3> 							<span>POCKET TEE</span> 							<p>NTD $1590.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="s">S</option> 									<option value="m">M</option> 									<option value="l">L</option> 									<option value="xl">XL</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival04-2.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival04-3.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival04-1.jpg"> 						</div> 					</div> 					<div class="carousel-region mb"> 						<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival05.jpg" alt=""> 						<div class="new-arrival-content"> 							<h3>PANTS</h3> 							<span>Long pants</span> 							<p>NTD $1680.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="s">S</option> 									<option value="m">M</option> 									<option value="l">L</option> 									<option value="xl">XL</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival05-1.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival05-2.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival05-3.jpg"> 						</div> 					</div> 					<div class="carousel-region mb"> 						<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival06-1.jpg" alt=""> 						<div class="new-arrival-content"> 							<h3>SCANDLES</h3> 							<span> UNIVERSAL SANDALS</span> 							<p>NTD $1980.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="s">US7</option> 									<option value="s">US7.5</option> 									<option value="m">US8</option> 									<option value="s">US8.5</option> 									<option value="l">US9</option> 									<option value="s">US9.5</option> 									<option value="xl">US10</option><option value="s">US10.5</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival06-2.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival06-3.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival06.jpg"> 						</div> 					</div> 					<div class="carousel-region mb"> 						<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival07.jpg" alt=""> 						<div class="new-arrival-content"> 							<h3>MDNS</h3> 							<span>ANNIVERSARY PACK SOCKS</span> 							<p>NTD $490.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="s">20-25cm</option> 									<option value="m">25-30cm</option> 									<option value="l">30-35cm</option> 									<option value="xl">35-40cm</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><a href="#" class="favorite-button"><p>ADD TO</p></a><a href="#" class="buy-button"><p>BUY NOW</p></a></div><div class="three-pics"><img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival07-2.jpg"><img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival07-3.jpg"><img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival07-1.jpg"> 						</div> 					</div><div class="carousel-region mb"> <img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival08.jpg" alt=""> 						<div class="new-arrival-content"> 							<h3>G-SHOCK</h3> 							<span>DW-5000MD</span> 							<p>NTD $3780.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="s">-</option></select></div> <div class="amount-box"><span>amount</span><select name="amount"><option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival08-3.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival08-2.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival08-1.jpg"> 						</div> 					</div> 					<div class="carousel-region mb"> 						<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival01.jpg" alt=""> 						<div class="new-arrival-content"> 							<h3>Agens.b</h3> 							<span>CORDURA DAY PACK</span> 							<p>NTD $999.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="m">-</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival01-3.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival01-4.jpg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/new-arrival01-2.jpg"> 						</div> 				   </div> <div class="carousel-region mb"> 						<img class="first-pic" src="https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjk5-d001_camo-1-1000x1000-1.jpeg" alt=""> 						<div class="new-arrival-content"> 							<h3>Agens.b</h3> 							<span>CORDURA DAY PACK</span> 							<p>NTD $999.00</p> 							<div class="size-box"> 								<span>size</span> 								<select name="size"> 									<option value="m">-</option> 								</select> 							</div> 							<div class="amount-box"> 								<span>amount</span> 								<select name="amount"> 									<option value="1">1</option> 									<option value="2">2</option> 									<option value="3">3</option> 									<option value="4">4</option> 									<option value="5">5</option> 								</select> 							</div> 							<a href="#" class="favorite-button"><p>ADD TO</p></a> 							 							<a href="#" class="buy-button"><p>BUY NOW</p></a> 						</div> 						<div class="three-pics"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjk5-d001_camo-2-1000x1000-1.jpeg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjk5-d001_camo-4-1000x1000-1.jpeg"> 							<img src="https://jonathanbir.files.wordpress.com/2021/09/21ss-jkt-jjk5-d001_camo-9-1000x1000-1.jpeg"> 						</div> 				   </div> 				   </div> 			   </div> 			</div> 			</div>    		</section>	 		</div></div>';
	const somethingerror = document.getElementsByClassName('slider-single active')[0];
	setTimeout(() => {
		if (somethingerror) {
			somethingerror.lastChild.firstChild.setAttribute(
				'style',
				'transform: translateX(0%) scale(1);',
			);
		}
		console.log('123');
	}, 30);

	const media = useMedia();
	const [currentIdx, setCurrentIdx] = useState(0);
	const [selected, setSelected] = useState(0);

	const settings = {
		dots: true,
		// eslint-disable-next-line no-nested-ternary
		slidesToShow: media === 'desktop' ? 6 : media === 'tablet' ? 2 : 1,
		slidesToScroll: media === 'desktop' ? 1 : 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		customPaging: i => {
			return (
				<div
					style={{
						width: '12px',
						height: '12px',
						backgroundColor: i * 3 === currentIdx ? '#1faa39' : '#fff',
						borderRadius: '8px',
						border: 'solid 1px #1faa39',
						cursor: 'pointer',
					}}
				/>
			);
		},
		appendDots: dots => (
			<div
				style={{
					display: media === 'desktop' ? 'flex' : 'none',
					justifyContent: 'center',
					position: 'absolute',
					bottom: '-50px',
					left: '0px',
					right: '0px',
				}}
			>
				<div className={styles.lineWrapper}>
					<div className={styles.line} />
					<ul style={{ padding: 0, margin: 0, display: 'flex' }}>{dots}</ul>
				</div>
			</div>
		),
		beforeChange: (_, next) => {
			setCurrentIdx(next);
			setSelected(next);
		},
	};

	return (
		<div className={styles.newsArrivals}>
			<div dangerouslySetInnerHTML={{ __html: data }} />
		</div>
	);
};

export default NewsArrivals;
