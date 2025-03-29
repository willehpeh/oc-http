import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-detail',
  imports: [],
  template: `
		<main class="property-details">
			<div class="property-hero">
				<div class="offer-made-banner">Offer Made</div>
				<img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200&h=600" alt="Modern Villa with Pool" class="property-hero-image">
			</div>

			<div class="property-content">
				<div class="property-header">
					<h1>Modern Villa with Pool</h1>
					<p class="price">€1,150,000</p>
				</div>

				<div class="property-specs">
					<div class="spec-item">
						<span class="label">Surface</span>
						<span class="value">350 m²</span>
					</div>
					<div class="spec-item">
						<span class="label">Bedrooms</span>
						<span class="value">5</span>
					</div>
					<div class="spec-item">
						<span class="label">Bathrooms</span>
						<span class="value">4</span>
					</div>
					<div class="spec-item">
						<span class="label">Location</span>
						<span class="value">Neuilly-sur-Seine</span>
					</div>
				</div>

				<div class="property-description">
					<h2>Description</h2>
					<p>This stunning modern villa offers the perfect blend of luxury and comfort. Featuring an open-concept design with floor-to-ceiling windows that flood the space with natural light. The gourmet kitchen is equipped with high-end appliances and a large island, perfect for entertaining.</p>
					<p>The outdoor area includes a beautifully landscaped garden with a private pool and covered patio area. The master suite boasts a spa-like bathroom and walk-in closet. Additional features include a home office, media room, and three-car garage.</p>
				</div>

				<div class="property-features">
					<h2>Features</h2>
					<ul>
						<li>Private Pool</li>
						<li>Smart Home System</li>
						<li>Home Theater</li>
						<li>Wine Cellar</li>
						<li>Gourmet Kitchen</li>
						<li>Three-Car Garage</li>
					</ul>
				</div>

				<a href="make-offer.html" class="make-offer-button">Make an Offer</a>
			</div>
		</main>
  `,
  styleUrls: ['./housing-detail.component.scss'],
})
export class HousingDetailComponent {

}
