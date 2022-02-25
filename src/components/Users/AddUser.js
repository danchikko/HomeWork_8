import Card from '../Ui/Card'
import Button from '../Ui/Button'
import classes from './AddUser.module.css'
import { useState } from 'react'
import ErrorModal from '../Ui/ErrorModal'

const AddUser = (props) => {
	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')
	const [error, setError] = useState(null)

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value)
	}

	const ageChangeHandler = (event) => {
		setAge(event.target.value)
	}

	const addUserHandler = (event) => {
		event.preventDefault()
		if (username.trim().length === 0 || age.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non empty value)',
			})
			return
		}

		if (+age < 2) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid age (> 0)',
			})
			return
		}

		props.onAddUsers(username, age)

		setUsername('')
		setAge('')
	}

	const errorHandler = () => {
		setError(null)
	}

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirmnh={errorHandler}
					btnText='Okay'
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={username}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age (year)</label>
					<input
						id='age'
						type='number'
						value={age}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	)
}

export default AddUser
