const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
	  year: 'numeric',
	  month: 'long',
	  day: 'numeric',
	};
	const formattedDate: string = date.toLocaleDateString('en-US', options);
	return formattedDate;
  };
  
  export default formatDate;