import React from 'react';
import MenuItem from '../components/MenuItem';
import data from '../data/data';

function Menu() {
	return (
        
		<div className='menu'>
			<h1 className='menuTitle'>Our Menu</h1>
				<div className='menuList'>
					{data.map((item, key) => {
						return (
							<MenuItem
								key={key}
								name={item.name}
								image={item.image}
								price={item.price}
							/>
						);
					})}
				</div>
			
		</div>
	);
}

export default Menu;
