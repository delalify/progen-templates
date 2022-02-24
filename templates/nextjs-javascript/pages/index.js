import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My App | Home</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<section className={styles.welcome}>
					<h1 className={styles.main_title}>Welcome to My App! {'\u{1F60E}'}</h1>

					<p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.js</code>
					</p>
				</section>

				<hr className={styles.divider} />

				<section className={styles.nextjs}>
					<h2 className={styles.nextjs_title}>More on Next JS</h2>

					<div className={styles.grid}>
						<a href='https://nextjs.org/docs' className={styles.card}>
							<h3>Documentation &rarr;</h3>
							<p>Find in-depth information about Next.js features and API.</p>
						</a>

						<a href='https://nextjs.org/learn' className={styles.card}>
							<h3>Learn &rarr;</h3>
							<p>Learn about Next.js in an interactive course with quizzes!</p>
						</a>

						<a
							href='https://github.com/vercel/next.js/tree/canary/examples'
							className={styles.card}
						>
							<h3>Examples &rarr;</h3>
							<p>Discover and deploy boilerplate example Next.js projects.</p>
						</a>

						<a
							href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
							className={styles.card}
						>
							<h3>Deploy &rarr;</h3>
							<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
						</a>
					</div>
				</section>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://nextjs.org/api-reference/create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<p>
            Bootstrapped with <b>Create Next App</b>
					</p>
				</a>

				<hr className={`${styles.divider} ${styles.vertical}`} />

				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
          Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	)
}
