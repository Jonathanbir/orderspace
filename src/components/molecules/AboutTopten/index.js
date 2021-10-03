import React from 'react';
import Slider from 'react-slick';
import classnames from 'classnames';

import ToptenIcon01 from 'images/icon/about-tentop01.inline.svg';
import ToptenIcon02 from 'images/icon/about-tentop02.inline.svg';
import ToptenIcon03 from 'images/icon/about-tentop03.inline.svg';
import ToptenIcon04 from 'images/icon/about-tentop04.inline.svg';
import ToptenIcon05 from 'images/icon/about-tentop05.inline.svg';
import ToptenIcon06 from 'images/icon/about-tentop06.inline.svg';
import ToptenIcon07 from 'images/icon/about-tentop07.inline.svg';
import ToptenIcon08 from 'images/icon/about-tentop08.inline.svg';
import ToptenIcon09 from 'images/icon/about-tentop09.inline.svg';
import ToptenIcon10 from 'images/icon/about-tentop10.inline.svg';
import BannerPrev from 'images/icon/atom-btn-stepper-left.inline.svg';
import BannerNext from 'images/icon/atom-btn-stepper-right.inline.svg';

import 'slick-carousel/slick/slick.css';
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

const AboutTopten = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	const topten = [
		{
			title: '成立最久，根基最穩',
			img: <ToptenIcon01 />,
			content: '成立28年，第一批成立的保經公司',
		},
		{
			title: '業界標竿，制度第一',
			img: <ToptenIcon02 />,
			content: '行銷、組織、經營利益，總和業界最高',
		},
		{
			title: '人人是老闆，不須繳費',
			img: <ToptenIcon03 />,
			content: '唯一社團精神經營的公司',
		},
		{
			title: '流動率最低的公司',
			img: <ToptenIcon04 />,
			content: '唯一 15 年人員正成長公司',
		},
		{
			title: '商品最齊全，保障最周全',
			img: <ToptenIcon05 />,
			content: '最多合作簽約公司，壽險 16 家，產險 16 家',
		},
		{
			title: ' 一人增一人，大誠三萬人',
			img: <ToptenIcon06 />,
			content: '人員成長比例保險業最高、成長人數保經業最多',
		},
		{
			title: '制度不改、保障不變',
			img: <ToptenIcon07 />,
			content: '唯一沒改過制度的公司',
		},
		{
			title: '提撥 10% 做公益的公司',
			img: <ToptenIcon08 />,
			content: '業界唯一全體事業體利益',
		},
		{
			title: '偶像劇冠名、T 霸廣告、<br/>雜誌平面廣告',
			img: <ToptenIcon09 />,
			content: '業界最多的形象品牌廣告',
		},
		{
			title: 'E 化系統最符合同仁需求',
			img: <ToptenIcon10 />,
			content: '業界唯一有自己的資訊研發團隊',
		},
	];
	return (
		<div className={styles.topten}>
			<div>
				<h2>
					大誠
					<br />
					<span>10</span>大第一
				</h2>
			</div>
			<div className={styles.content}>
				<div className={styles.cardGroup}>
					{/* eslint-disable-next-line no-shadow */}
					{topten.slice(0, 5).map(topten => (
						<div className={styles.card} key={topten.title}>
							<div>
								{topten.img}
								<div>
									<h3>{topten.title}</h3>
									<div>{topten.content}</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className={styles.cardGroup}>
					{/* eslint-disable-next-line no-shadow */}
					{topten.slice(5).map(topten => (
						<div className={styles.card} key={topten.title}>
							<div>
								{topten.img}
								<div>
									{/* eslint-disable-next-line react/no-danger */}
									<h3 dangerouslySetInnerHTML={{ __html: topten.title }} />
									<div>{topten.content}</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<Slider className={styles.contentMobile} {...settings}>
					{/* eslint-disable-next-line no-shadow */}
					{topten.map(topten => (
						<div className={styles.wrapper} key={topten.title}>
							<div className={styles.card}>
								<div>
									{topten.img}
									<div>
										{/* eslint-disable-next-line react/no-danger */}
										<h3 dangerouslySetInnerHTML={{ __html: topten.title }} />
										<div>{topten.content}</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default AboutTopten;
