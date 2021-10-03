import React from 'react';
// import ReactPlayer from 'react-player';

import ReportsSubTitle from 'components/atoms/ReportsSubTitle';
import Tag from 'components/atoms/Tag';
import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';

import PlayBtn from 'images/icon/media-play.inline.svg';

import styles from './index.css';

const ReportsMediaList = () => {
	return (
		<div className={styles.reportsMediaGroup}>
			<ReportsSubTitle name="影音專區" />
			<div className={styles.video}>
				<div className={styles.maxMedia}>
					{/* <ReactPlayer
						url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
						width="100%"
						className={styles.videoWrapper}
						light
						playIcon={<PlayBtn />}
					/> */}

					<div className={styles.videoDetail}>
						<div className={styles.videoSubTitle}>
							保險事業關鍵在「人」，每位一線夥伴都很專業，但柔軟的身段、圓融的處事能力、和諧的關係經營，更能讓自己脫穎而出。
						</div>
						<Tag tags="公益活動" />
						<span>2020/12/28</span>
					</div>
					<div className={styles.videoTitle}>就是這場 T.C 演唱會 - 臺灣藝術大學</div>
				</div>
				<div className={styles.minMedia}>
					<div>
						{/* <ReactPlayer
							url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
							width="100%"
							className={styles.videoWrapper}
							light
							playIcon={<PlayBtn />}
						/> */}
						<div className={styles.videoDetail}>
							<div className={styles.videoSubTitle}>保險事業關鍵在「人」，每位一線...</div>
							<Tag tags="活動剪影" />
							<span>2020/12/28</span>
						</div>
						<div className={styles.videoTitle}>大誠保經 2020 百萬明星榮譽宴 精華集</div>
					</div>
					<div>
						{/* <ReactPlayer
							url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
							width="100%"
							className={styles.videoWrapper}
							light
							playIcon={<PlayBtn />}
						/> */}
						<div className={styles.videoDetail}>
							<div className={styles.videoSubTitle}>保險事業關鍵在「人」，每位一線...</div>
							<Tag tags="活動剪影" />
							<span>2020/12/28</span>
						</div>
						<div className={styles.videoTitle}>大誠保經 2020 百萬明星榮譽宴 精華集</div>
					</div>
					<div>
						{/* <ReactPlayer
							url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
							width="100%"
							className={styles.videoWrapper}
							light
							playIcon={<PlayBtn />}
						/> */}
						<div className={styles.videoDetail}>
							<div className={styles.videoSubTitle}>保險事業關鍵在「人」，每位一線...</div>
							<Tag tags="活動剪影" />
							<span>2020/12/28</span>
						</div>
						<div className={styles.videoTitle}>大誠保經 2020 百萬明星榮譽宴 精華集</div>
					</div>
					<div>
						{/* <ReactPlayer
							url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
							width="100%"
							className={styles.videoWrapper}
							light
							playIcon={<PlayBtn />}
						/> */}
						<div className={styles.videoDetail}>
							<div className={styles.videoSubTitle}>保險事業關鍵在「人」，每位一線...</div>
							<Tag tags="活動剪影" />
							<span>2020/12/28</span>
						</div>
						<div className={styles.videoTitle}>大誠保經 2020 百萬明星榮譽宴 精華集</div>
					</div>
				</div>
			</div>
			<div className={styles.moreButton}>
				<Link to="/about/media">
					<Button className={styles.button}>查看完整影音報導</Button>
				</Link>
			</div>
		</div>
	);
};

export default ReportsMediaList;
