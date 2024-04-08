"use client"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { passwordValidate, emailValidate } from "@/Utils/Regexp"
import styles from "./Form.module.css"

interface IFormInput {
	username: string
	password: string
	repeatPassword: string
	email: string
}
export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<IFormInput>()
	const onSubmit: SubmitHandler<IFormInput> = data => console.log(data)
	const [isLogged, setIsLogged] = useState(false)

	return (
		<>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate>
				<label htmlFor='username'>Nazwa użtykownika</label>
				<input
					id='username'
					{...register("username", {
						required: "Podaj imię",
						minLength: {
							value: 5,
							message: "Nazwa użytkownika musi mieć conajmniej 5 znaków",
						},
						maxLength: {
							value: 20,
							message: "Nazwa użytkownika może mieć maksymalnie 20 znaków",
						},
					})}
					placeholder='Nazwa użytkownika'
				/>
				{errors.username && (
					<span className={styles.error}>{errors.username.message}</span>
				)}
				<label htmlFor='password'>Hasło</label>
				<input
					type='password'
					id='password'
					{...register("password", {
						required: "Podaj hasło",
						pattern: {
							value: passwordValidate,
							message: "Podaj poprawne hasło",
						},
					})}
					placeholder='Podaj hasło'
				/>
				{errors.password && (
					<span className={styles.error}>{errors.password.message}</span>
				)}
				{isLogged && (
					<>
						<label htmlFor='repeatPassword'>Powtórz hasło</label>
						<input
							type='password'
							id='repeatPassword'
							{...register("repeatPassword", {
								required: "Potwierdzenie hasła jest wymagane",
								validate: value =>
									value === getValues("password") ||
									"Hasła muszą być takie same",
							})}
							placeholder='Potwierdź hasło'
						/>
						{errors.repeatPassword && (
							<span className={styles.error}>
								{errors.repeatPassword.message}
							</span>
						)}
						<label htmlFor='email'>Podaj adres email</label>
						<input
							id='email'
							type='email'
							{...register("email", {
								required: "Podaj adres email",
								pattern: {
									value: emailValidate,
									message: "Podaj poprawny adres email",
								},
							})}
							placeholder='Adres e-mail'
						/>
						{errors.email && (
							<span className={styles.error}>{errors.email.message}</span>
						)}
					</>
				)}
				<span onClick={() => setIsLogged(!isLogged)}>
					{isLogged ? "Zarejestruj się!" : "Załóż Konto!"}
				</span>
				<input type='submit' />
			</form>
		</>
	)
}
