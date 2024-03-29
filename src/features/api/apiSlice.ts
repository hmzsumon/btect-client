import { getCookie } from '@/utils/cookie';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5000/api/v1'
		: 'https://gxness-ea84b2197e3d.herokuapp.com/api/v1';

// console.log('baseUrl', baseUrl);

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		// Introduce an artificial delay using `setTimeout`
		prepareHeaders: async (headers, { getState, endpoint }: any) => {
			const token = getState()?.auth?.token;
			// console.log('token', token);
			if (token) {
				headers.set('token', `${token}`);
			}
			return headers;
		},
	}),

	tagTypes: [
		'Users',
		'Admin',
		'Pxc',
		'Wallet',
		'Transactions',
		'User',
		'Withdraw',
		'Withdraws',
		'MyWithdraws',
		'Mining',
		'Test',
		'Game-1m',
		'Game-3m',
		'Game-5m',
		'Convert',
		'Trade',
		'AiRobot',
		'Deposits',
		'Notification',
	],

	endpoints: (builder) => ({}),
});

//https://wfc-api.herokuapp.com/api/v1
//http://localhost:5005/api/v1
