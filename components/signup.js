import Link from 'next/link'
import styles from '../styles/Signup.module.css'

export default function Signup () {
	return (
		<form>
			<p>Sign up for the newsletter</p>
			<label htmlFor="email">Email Address</label>
			<input name="email" type="text" />
			<input type="submit" value="Submit" />
		</form>
	)
}