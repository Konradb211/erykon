import { data } from "../../Utils/Date"
import styles from "./Footer.module.css"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p className={styles.copyrights}>&copy; erykon {data.getFullYear()}</p>
		</footer>
	)
}
