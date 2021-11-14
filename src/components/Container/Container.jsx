import React from 'react';
import './Container.css'

const Container = ({ shoes }) => {
	return (
		<div className="container"> 
			<ul className="row">
				{ shoes.map((item, index) => {
					return (
						<li key={index} className="item">
							<img src={"https://codingapple1.github.io/shop/shoes" + ( index + 1 ) + ".jpg"} alt="신발이미지" width="100%" />
							<h4>{item.title}</h4>
							<p>{item.content} &nbsp; {item.price} </p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}


export default Container;