import React from 'react';
import {useState} from 'react';
import "../CSS/dashboard.css";

const Dashboard = () => {

	const [total, setTotal] = useState();
	const [brand1, setBrand1] = useState();
	const [brand1cnt, setBrand1Cnt] = useState();
	const [brand2, setBrand2] = useState();
	const [brand2cnt, setBrand2Cnt] = useState();
	const [brand3, setBrand3] = useState();
	const [brand3cnt, setBrand3Cnt] = useState();
	const [brand4, setBrand4] = useState();
	const [brand4cnt, setBrand4Cnt] = useState();
	const [brand5, setBrand5] = useState();
	const [brand5cnt, setBrand5Cnt] = useState();
	const [brand6, setBrand6] = useState();
	const [brand6cnt, setBrand6Cnt] = useState();
	const [brand7, setBrand7] = useState();
	const [brand7cnt, setBrand7Cnt] = useState();
	const [brand8, setBrand8] = useState();
	const [brand8cnt, setBrand8Cnt] = useState();

	function handleChange() {
		
		var axios = require('axios');

		var config = {
			method: 'get',
			url: 'http://127.0.0.1:5000/test'
		};
		
		axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));

			let sum = Number(0);
			let cnt = Number(0);
			for (let key of Object.keys(response.data)) {
				if (cnt == 0) {
					setBrand1(key.substring(2, key.length - 1));
				} else {
					if (cnt == 1) {
						setBrand2(key.substring(2, key.length - 1));
					} else {
						if (cnt == 2) {
							setBrand3(key.substring(2, key.length - 1));
						} else {
							if (cnt == 3) {
								setBrand4(key.substring(2, key.length - 1));
							} else {
								if (cnt == 4) {
									setBrand5(key.substring(2, key.length - 1));
								} else {
									if (cnt == 5) {
										setBrand6(key.substring(2, key.length - 1));
									} else {
										if (cnt == 6) {
											setBrand7(key.substring(2, key.length - 1));
										} else {
											if (cnt == 7) {
												setBrand8(key.substring(2, key.length - 1));
											}
										}
									}
								}
							}
						}
					}
				}
				cnt += 1;
			}

			cnt = Number(0);
			for (let value of Object.values(response.data)) {
				if (cnt == 0) {
					setBrand1Cnt(value);
				} else {
					if (cnt == 1) {
						setBrand2Cnt(value);
					} else {
						if (cnt == 2) {
							setBrand3Cnt(value);
						} else {
							if (cnt == 3) {
								setBrand4Cnt(value);
							} else {
								if (cnt == 4) {
									setBrand5Cnt(value);
								} else {
									if (cnt == 5) {
										setBrand6Cnt(value);
									} else {
										if (cnt == 6) {
											setBrand7Cnt(value);
										} else {
											if (cnt == 7) {
												setBrand8Cnt(value);
											}
										}
									}
								}
							}
						}
					}
				}
				sum += value;
				cnt += 1;
			}
			setTotal(sum);

			// let val = Boolean(true);
			// let sum = Number(0);
			// for (let key of Object.keys(response.data)) {
			// 	if (val == true) {
			// 		setBrand1(key.substring(2, key.length - 1));
			// 		val = false;
			// 	} else {
			// 		setBrand2(key.substring(2, key.length - 1));
			// 	}
			// }
			// val = true;
			// for (let value of Object.values(response.data)) {
			// 	if (val == true) {
			// 		setBrand1Cnt(value);
			// 		val = false;
			// 	} else {
			// 		setBrand2Cnt(value);
			// 	}
			// 	sum += value;
			// }
			// setTotal(sum)
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	return (
		<div className='background'>
			<div id='header'>
				<div id='title'>
					<p>Overview</p>
				</div>
				<div id='upload'>
					{/* <button
						type="button"
						onClick={(e) => {
						e.preventDefault();
						window.location.href='http://127.0.0.1:5000/';
						}}
					> Upload Image</button> */}
					<button
						type="button"
						onClick={handleChange}
					> Update Page</button>
					<p></p>
				</div>
			</div>
			<div className='inventory'>
				<div className='box'>
					<div className='text'>
						<p>Total Inventory</p>
						<p>{total}</p>
					</div>
				</div>
				<div className='box'>
					<div className='text'>
						<p>{brand1}</p>
						<p>{brand1cnt}</p>
					</div>
				</div>
				<div className='box'>
					<div className='text'>
						<p>{brand2}</p>
						<p>{brand2cnt}</p>
					</div>
				</div>
				<div className='box'>
					<div className='text'>
						<p>{brand3}</p>
						<p>{brand3cnt}</p>
					</div>
				</div>
			</div>
			<p></p>
			<p></p>
			<table id='analytics'>
				<tr>
					<th>Brand</th>
					<th>Total Pallets</th>
				</tr>
				<tr>
					<td>{brand1}</td>
					<td>{brand1cnt}</td>
				</tr>
				<tr>
					<td>{brand2}</td>
					<td>{brand2cnt}</td>
				</tr>
				<tr>
					<td>{brand3}</td>
					<td>{brand3cnt}</td>
				</tr>
				<tr>
					<td>{brand4}</td>
					<td>{brand4cnt}</td>
				</tr>
				<tr>
					<td>{brand5}</td>
					<td>{brand5cnt}</td>
				</tr>
				<tr>
					<td>{brand6}</td>
					<td>{brand6cnt}</td>
				</tr>
				<tr>
					<td>{brand7}</td>
					<td>{brand7cnt}</td>
				</tr>
				<tr>
					<td>{brand8}</td>
					<td>{brand8cnt}</td>
				</tr>
			</table>
		</div>
	);
};

export default Dashboard;