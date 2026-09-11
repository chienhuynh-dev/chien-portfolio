import { products } from "@/content/resume";
import styles from "./Resume.module.css";

export function ProductEcosystem() {
	return (
		<section
			id="products"
			className={`page-container ${styles.section}`}
			aria-labelledby="products-title"
			tabIndex={-1}>
			<header className={styles.heading}>
				<p className={styles.eyebrow}>02 / PRODUCT EXPERIENCE</p>
				<h2 id="products-title">
					Nine products. From web to mobile and payments.
				</h2>
				<p className={styles.intro}>
					The full product list from my work at Hello Clever. Expand a product
					for its scope and technologies.
				</p>
			</header>
			<div className={styles.products}>
				{products.map((product, index) => (
					<details key={product.name} className={styles.product}>
						<summary>
							<span className={styles.number}>
								{String(index + 1).padStart(2, "0")}
							</span>
							<span className={styles.productTitle}>
								{product.name}
								<span className={styles.category}>{product.category}</span>
							</span>
							<span className={styles.toggle} aria-hidden="true" />
						</summary>
						<div className={styles.productBody}>
							<p>{product.description}</p>
							{product.technologies.length > 0 && (
								<ul className={styles.technologies} aria-label="Technologies">
									{product.technologies.map((technology) => (
										<li key={technology}>{technology}</li>
									))}
								</ul>
							)}
						</div>
					</details>
				))}
			</div>
		</section>
	);
}
