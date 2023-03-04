export const getTea = (name = 'Black Tea') => {
	return {
		drinkType: 'Tea',
		name,
	};
};

export const getWelcome = () => {
	return 'Welcome and enjoy our tea 🫖 API!';
};

export const getTeaLover = () => {
	return 'I love tea!';
};