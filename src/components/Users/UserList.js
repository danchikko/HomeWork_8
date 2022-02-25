import { useState } from 'react'
import Button from '../Ui/Button'
import Card from '../Ui/Card'
import ErrorModal from '../Ui/ErrorModal'
import classes from './UserList.module.css'

const UserList = (props) => {
	const [remove, setRemove] = useState(false)
	const [idUser,setUseId] = useState('')

	const modalChangeHandler = (e) => {
		setRemove((prevState) => !prevState)
		setUseId(e.target.id)
	}

	const onDeleteChangeHandler = () => {
		props.setUsers(props.users.filter(el => el.id !== idUser))
		setRemove(false)
		console.log(idUser);
	}

	return (
		<Card className={classes.users}>
			{remove && (
				<ErrorModal
				    setUsers={props}
					title='Удаление пользователя!'
					message='Вы действительно хотите удалить?'
					btnText='Да'
					onClick={onDeleteChangeHandler}
				>
					<Button onClick={modalChangeHandler}>Нет</Button>
				</ErrorModal>
			)}
			<ul className={classes.list}>
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age} years old)
						<Button id= {user.id} onClick={modalChangeHandler}>Delete</Button>
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UserList
