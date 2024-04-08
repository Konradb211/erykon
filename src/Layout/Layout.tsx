import { Footer } from "@/components/Footer/Footer"
import { Main } from "@/components/Main/Main"
import styles from "./Layout.module.css"

export const Layout = () => {
	return (
		<div className={styles.layout}>
			<Main />
			<Footer />
		</div>
	)
}
