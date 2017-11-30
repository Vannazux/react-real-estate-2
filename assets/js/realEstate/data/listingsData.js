var listingsData = [
	{
		address: '2034 Grand Ave.',
		city: 'Albuquerque',
		state: 'NM',
		rooms: 3,
		price: 220000,
		floorSpace: 2000,
		extras: ['elevator','gym'],
		homeType: 'Apartment',
		image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
	},
	{
		address: '48 Pine St.',
		city: 'New York',
		state: 'NY',
		rooms: 5,
		price: 420000,
		floorSpace: 3200,
		extras: ['elevator','gym', 'swimming pool'],
		homeType: 'Condo',
		image: 'https://res.cloudinary.com/apartmentlist/image/upload/s--HRoGG_hz--/t_web-base/c_fill,g_auto,h_1016,w_2400/c_scale,w_2400/v1/web/static/hero_living_room.jpg'
	},
	{
		address: '132 Sycamore',
		city: 'Santa Fe',
		state: 'NM',
		rooms: 4,
		price: 680000,
		floorSpace: 4400,
		extras: ['swimming pool', 'finished basement'],
		homeType: 'House',
		image: 'https://i.pinimg.com/736x/86/1e/b7/861eb7aacc73a0344fffd578603ee230--craftsman-style-house-plans-craftsman-houses.jpg'
	},
	{
		address: '64 Ocean Ave.',
		city: 'Monterey',
		state: 'CA',
		rooms: 1,
		price: 1320000,
		floorSpace: 6000,
		extras: ['gym', 'swimming pool'],
		homeType: 'Studio',
		image: 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg'
	},
	{
		address: '755 First Ave.',
		city: 'Scottsdale',
		state: 'AZ',
		rooms: 2,
		price: 260000,
		floorSpace: 2800,
		extras: ['elevator','gym'],
		homeType: 'Apartment',
		image: 'http://www.3dpower.in/images/apartment-rendering/full/3d%20apartment%20design.jpg'
	},
	{
		address: '22 Central Park',
		city: 'Ridgewood',
		state: 'NY',
		rooms: 4,
		price: 520000,
		floorSpace: 3400,
		extras: ['elevator','gym'],
		homeType: 'Apartment',
		image: 'http://cdngeneral.rentcafe.com/dmslivecafe/3/448643/Astoria_FrontElvFShortweb.jpg?crop=(0,16.920100959730007,300,197)&cropxunits=300&cropyunits=197&quality=85&scale=both&'
	},
	{
		address: '2 West End Ave.',
		city: 'Ridgewood',
		state: 'NY',
		rooms: 5,
		price: 850000,
		floorSpace: 4100,
		extras: ['finished basement'],
		homeType: 'House',
		image: 'https://cdn.freshome.com/wp-content/uploads/2013/11/design-Mimosa-Road-residence-940x450.jpg'
	},
	{
		address: '45 Dove St.',
		city: 'Ridgewood',
		state: 'NY',
		rooms: 8,
		price: 3320000,
		floorSpace: 6000,
		extras: ['elevator','gym', 'swimming pool', 'finished basement'],
		homeType: 'House',
		image: 'http://radioritas.com/wp-content/uploads/2017/02/great-modern-house-with-best-interior.jpg'
	},
	{
		address: '2034 Grand Ave.',
		city: 'Albuquerque',
		state: 'NM',
		rooms: 3,
		price: 220000,
		floorSpace: 2000,
		extras: ['elevator','gym'],
		homeType: 'Apartment',
		image: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4206-28/the-kelvin-apartments-exterior.jpg'
	},
	{
		address: '48 Pine St.',
		city: 'New York',
		state: 'NY',
		rooms: 5,
		price: 420000,
		floorSpace: 3200,
		extras: ['elevator','gym', 'swimming pool'],
		homeType: 'Condo',
		image: 'https://res.cloudinary.com/apartmentlist/image/upload/s--HRoGG_hz--/t_web-base/c_fill,g_auto,h_1016,w_2400/c_scale,w_2400/v1/web/static/hero_living_room.jpg'
	},
	{
		address: '132 Sycamore',
		city: 'Santa Fe',
		state: 'NM',
		rooms: 4,
		price: 680000,
		floorSpace: 4400,
		extras: ['swimming pool', 'finished basement'],
		homeType: 'House',
		image: 'https://i.pinimg.com/736x/86/1e/b7/861eb7aacc73a0344fffd578603ee230--craftsman-style-house-plans-craftsman-houses.jpg'
	},
	{
		address: '64 Ocean Ave.',
		city: 'Monterey',
		state: 'CA',
		rooms: 1,
		price: 1320000,
		floorSpace: 6000,
		extras: ['gym', 'swimming pool'],
		homeType: 'Studio',
		image: 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg'
	},
	{
		address: '755 First Ave.',
		city: 'Scottsdale',
		state: 'AZ',
		rooms: 2,
		price: 260000,
		floorSpace: 2800,
		extras: ['elevator','gym'],
		homeType: 'Apartment',
		image: 'http://www.3dpower.in/images/apartment-rendering/full/3d%20apartment%20design.jpg'
	},
	{
		address: '22 Central Park',
		city: 'Ridgewood',
		state: 'NY',
		rooms: 4,
		price: 520000,
		floorSpace: 3400,
		extras: ['elevator','gym'],
		homeType: 'Apartment',
		image: 'http://cdngeneral.rentcafe.com/dmslivecafe/3/448643/Astoria_FrontElvFShortweb.jpg?crop=(0,16.920100959730007,300,197)&cropxunits=300&cropyunits=197&quality=85&scale=both&'
	},
	{
		address: '2 West End Ave.',
		city: 'Ridgewood',
		state: 'NY',
		rooms: 5,
		price: 850000,
		floorSpace: 4100,
		extras: ['finished basement'],
		homeType: 'House',
		image: 'https://cdn.freshome.com/wp-content/uploads/2013/11/design-Mimosa-Road-residence-940x450.jpg'
	},
	{
		address: '45 Dove St.',
		city: 'Ridgewood',
		state: 'NY',
		rooms: 8,
		price: 3320000,
		floorSpace: 6000,
		extras: ['elevator','gym', 'swimming pool', 'finished basement'],
		homeType: 'House',
		image: 'http://radioritas.com/wp-content/uploads/2017/02/great-modern-house-with-best-interior.jpg'
	}
]

export default listingsData;
