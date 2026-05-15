type UserCardProps = {
  id: number
  name: string
  age: number
  email: string
  avatar?: string
}

export const UserCard = ({ id, name, age, email, avatar }: UserCardProps) => {
	return (
		<div className='card'>
			<img src={avatar} alt="avatar" />
			<h3>{name}</h3>
			<p>id: {id}</p>
			<p>age: {age}</p>
			<p>email: {email}</p>
		</div>
	)
}