import {useApolloClient} from '@apollo/client'
import React, {useState} from 'react'

import Locations from './Locations'

function App() {
	const [visible, setVisible] = useState(true)
	const client = useApolloClient()
	return (
		<React.Fragment>
			<button onClick={() => client.resetStore()}  >Reset Store</button>
			<button onClick={() => setVisible(i => !i)}>Toggle Locations</button>
			{visible && <Locations />}
		</React.Fragment>
	)
}

export default App
