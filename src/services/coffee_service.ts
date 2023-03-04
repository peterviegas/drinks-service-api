export const getCoffee = (name = 'Latte') => {
	return {
		drinkType: 'Coffee',
		name,
	};
};

export const getWelcome = () => {
	return 'Welcome to the Drinks API!';
};

export const getCoffeLover = () => {
	return 'I like coffee!';
};