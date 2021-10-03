import React from 'react';

import Header from 'components/organisms/Header';
import Footer from 'components/organisms/Footer';

const App = ({ children }) => (
	<>
		<Header />
		<div>{children}</div>
		<Footer />
	</>
);

export default App;
