import React from 'react';
import MemoItem from './MemoItem';
import MemoPage from './MemoPage';
import React from 'react';
import MemoItem from './MemoItem';
import MemoPage from './MemoPage';
import { useEffect, useState } from 'react';
import { timeChange } from '../../utils/CommonFun';

const MemoList = ({ memoDataList }) => {
	const [DateList, setDateList] = useState([]);
	let dateList = [];

	useEffect(() => {
		memoDataList.forEach((memoData) => {
			if (dateList[dateList.length - 1] != memoData.date) {
				dateList.push(memoData.date);
			}
		});

		setDateList(dateList);
	}, []);

	return (
		<>
			{DateList.length !== 0 ? (
				<div>
					{DateList.map((date) => {
						return (
							<div key={date}>
								<p className='text-center'>{timeChange(date)}</p>
								<div className='container mx-auto flex flex-wrap justify-start'>
									{memoDataList.map((mData) => {
										if (mData.date === date) {
											return <MemoItem key={mData.idx} memo={mData} />;
										}
									})}
								</div>
							</div>
						);
					})}
				</div>
			) : null}
		</>
	);
};

export default MemoList;
