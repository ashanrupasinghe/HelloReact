import React from 'react'

const Hello = () => {
	/*return (
	<div>
		<h1>Hello Ashan</h1>
	</div>
	)*/
	
	//return React.createElement('div',null,'<h1>Helo Rupasinghe</h1>')
	return React.createElement('div',null, React.createElement('h1',null,'Helo Rupasinghe'))
}
 
 export default Hello;