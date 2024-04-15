"use client"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { passwordValidate, emailValidate } from "@/Utils/Regex"
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
			<div className={styles.container}>
				<h2 className={styles.title}>
					{!isLogged ? "Logowanie" : "Rejestracja"}
				</h2>
				<form
					className={styles["form-container"]}
					onSubmit={handleSubmit(onSubmit)}
					noValidate>
					<label className={styles["form-title"]} htmlFor='username'>
						Nazwa użtykownika
					</label>
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
						<span className={styles["form-success"]}>
							{errors.username.message}
						</span>
					)}
					<label className={styles["form-title"]} htmlFor='password'>
						Hasło
					</label>
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
						<span className={styles["form-error"]}>
							{errors.password.message}
						</span>
					)}
					{isLogged && (
						<>
							<label className={styles["form-title"]} htmlFor='repeatPassword'>
								Powtórz hasło
							</label>
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
								<span className={styles["form-error"]}>
									{errors.repeatPassword.message}
								</span>
							)}
							<label className={styles["form-title"]} htmlFor='email'>
								Podaj adres email
							</label>
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
								<span className={styles["form-error"]}>
									{errors.email.message}
								</span>
							)}
						</>
					)}

					<button className={styles["fancy-register-button"]} type='submit'>
						{!isLogged ? "Zaloguj się" : "Zarejestruj się"}
					</button>
					<span
						className={styles["form-title"]}
						onClick={() => setIsLogged(!isLogged)}>
						{isLogged
							? "Masz już konto? zaloguj się!"
							: "Nie masz konta? dołącz do nas!"}
					</span>
				</form>
			</div>
		</>
	)
}
