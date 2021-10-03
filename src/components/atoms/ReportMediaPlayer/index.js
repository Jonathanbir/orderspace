import React from 'react';
import ReactPlayer from 'react-player';

import Tag from 'components/atoms/Tag';

import PlayBtn from 'images/icon/media-play.inline.svg';

import styles from './index.css';

const ReportsMediaPlayer = () => {
	return (
		<div className={styles.reportsMediaPlayer}>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				width="100%"
				className={styles.videoWrapper}
				light
				playIcon={<PlayBtn />}
			/>

			<div className={styles.videoDetail}>
				<div className={styles.videoSubTitle}>
					保險事業關鍵在「人」，每位一線夥伴都很專業，但柔軟的身段、圓融的處事能力、和諧的關係經營，更能讓自己脫穎而出。
				</div>
				<Tag tags="公益活動" />
				<span>2020/12/28</span>
			</div>
			<div className={styles.videoTitle}>就是這場 T.C 演唱會 - 臺灣藝術大學</div>
		</div>
	);
};

export default ReportsMediaPlayer;
