import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'
import dataProvider from './ra-data-sample-rest/index'

function App() {
	const apiUrl = 'http://localhost:3000';
	return (
		<Admin dataProvider={dataProvider(apiUrl)}>
			<Resource
				name='posts'
				list={PostList}
				create={PostCreate}
				edit={PostEdit}
			/>
		</Admin>
	)
}

export default App
