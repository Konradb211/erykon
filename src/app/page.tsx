"use client"
import Image from "next/image"
import erykon from "/public/erykon.png"
import styles from "./page.module.css"
import { useState } from "react"

export default function Home() {
	const [moneyCount, setMoneyCount] = useState(0)
	return (
		<main className={styles.main}>
			<h1>Erykon</h1>
			<Image className={styles.image} src={erykon} alt='Koneryk' />
			<div className={styles.btnContainer}>
				<p>ile razy klikniesz tyle zarobie pieniędzy: {moneyCount}$</p>
				<button
					onClick={() => {
						setMoneyCount(p => p + 1)
					}}
					className={styles.button}>
					Klik
				</button>
			</div>
		</main>
	)
}
