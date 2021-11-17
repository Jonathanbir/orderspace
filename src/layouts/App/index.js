import React, { useMemo } from 'react';
import decode from 'jwt-decode';

import Header from 'components/organisms/Header';
import RegisterBoard from 'components/molecules/RegisterBoard';
import Footer from 'components/organisms/Footer';

const JWT = 'storage_token_id';

const getToken = token => {
	return localStorage.getItem(JWT);
};

const isLogin = () => {
	const jwToken = getToken();
	return !!jwToken;
};

const getUser = () => {
	const jwToken = getToken();
	if (isLogin()) {
		const user = decode(jwToken);
		return user;
	} else {
		return null;
	}
};

const App = ({ children }) => {
	const user = useMemo(() => {
		return getUser() || {};
	}, []);

	return (
		<>
			<Header user={user} />
			<RegisterBoard />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default App;
