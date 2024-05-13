
import React, { useState } from 'react'

const Login = () => {
	const [name, setName] = useState('')
	return (
		<>
			<div>Login Page</div>
			<p>My name is {name}</p>

		</>
	)
}

export default Login