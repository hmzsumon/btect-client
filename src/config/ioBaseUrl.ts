let ioBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	ioBaseUrl = 'http://localhost:5000';
	console.log('Running in development mode');
} else {
	ioBaseUrl = 'https://gxness-ea84b2197e3d.herokuapp.com';
	// Code specific to production mode
	console.log('Running in production mode');
}
console.log('baseUrl', ioBaseUrl);
export default ioBaseUrl;
