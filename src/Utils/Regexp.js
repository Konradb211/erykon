export const passwordValidate = value => {
	if (value.length < 8) {
		return "Hasło musi zawierać co najmniej 8 znaków."
	} else if (!/[a-z]/.test(value)) {
		return "Hasło musi zawierać co najmniej jedną małą literę."
	} else if (!/[A-Z]/.test(value)) {
		return "Hasło musi zawierać co najmniej jedną wielką literę."
	} else if (!/\d/.test(value)) {
		return "Hasło musi zawierać co najmniej jedną cyfrę."
	} else if (!/[@$!%*?&]/.test(value)) {
		return "Hasło musi zawierać co najmniej jeden znak specjalny (@$!%*?&)."
	}
	return true
}

export const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
