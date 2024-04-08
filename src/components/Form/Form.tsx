"use client"
import { useState } from "react"
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
	nickname: string
	password: string
	email: string
}


export const Form = () => {
	const { register, handleSubmit } = useForm<IFormInput>()
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
	const [isLogin, setisLogin] = useState(true)
	return (
		<>
			{isLogin && (
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="Nickname">
						Nazwa użytkownika
						<input {...register("nickname")} />
					</label>
					<label htmlFor="Password">
						Hasło
						<input type="password" {...register("password")} />
					</label>
					<input type="submit" value="Login" />
					<p>Potrzebujesz konta?</p>
				</form>
			)}
			{!isLogin && (
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="Nickname">
						Nazwa użytkownika
						<input {...register("nickname")} />
					</label>
					<label htmlFor="Password">
						Hasło
						<input type="password" {...register("password")} />
					</label>
					<label htmlFor="Email">
						Email
						<input type="email" {...register("email")} />
					</label>
					<input type="submit" value="Rejestracja" />
					<p>Masz już konto?</p>
				</form>
			)}
			<button onClick={() => setisLogin(!isLogin) }>{isLogin ? `Zarejestruj!` : `Zaloguj się!`}</button>
		</>
	)
}