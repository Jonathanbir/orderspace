import React from 'react';

import Header from 'components/organisms/Header';
import RegisterBoard from 'components/molecules/RegisterBoard';
import Footer from 'components/organisms/Footer';

const App = ({ children }) => (
	<>
		<Header memberName="Admin"/>
		<RegisterBoard />
		<div>{children}</div>
		<Footer />
	</>
);

export default App;
