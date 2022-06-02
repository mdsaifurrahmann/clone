<template>
	<div class="container my-9">
		<div class="sm:flex justify-between items-center">
			<div class="flex">
				<h4 class="text-[#1c3c6b] font-semibold text-xl sm:text-[2.1rem]">
					Hot Deals
				</h4>
			</div>
			<div class="flex bg-white rounded-3xl py-1.5 px-3 mt-4 sm:mt-0 sm:overflow-auto overflow-scroll py-[10px]">
				<button class="button is-checked capitalize" data-filter="*">
					all
				</button>
				<button class="button capitalize" data-filter="hotel">
					hotel
				</button>
				<button class="button capitalize" data-filter="resturent">
					resturent
				</button>
				<button class="button capitalize" data-filter="technician">
					technician
				</button>
				<button class="button capitalize" data-filter="efood">
					eFood
				</button>
			</div>
		</div>

		<Splide
			:options="{
				rewind: false,
				noDrag: 'input, textarea, .no-drag, img',
				perPage: 2,
				perMove: 1,
				speed: 1500,
				pagination: false,
				gap: '2rem',
				fixedWidth: '440px',
				breakpoints: {
					992: {
						perPage: 1,
                        fixedWidth: '100%',
                        gap: '1.5rem',
					},
				},
			}"
			class="
				mt-8
				min-h-[23rem]
				sm:min-h-[13rem]
				py-3
				pl-3
				overflow-hidden
			"
			id="hot_deals"
		>
			<SplideSlide
				class="
					min-h-[150px]
					h-auto
					relative
					bg-white
					rounded-md
					p-3
					max-w-fit
					shadow-md
				"
			>
				<div class="sm:flex block">
					<div
						class="
							min-w-[160px]
							h-[120px]
							relative
							-top-6
							-left-6
							sm:flex
                            block
						"
					>
						<img
							:src="'images/campaign_Hot_Deal.jpg'"
							alt="hot deal"
							class="rounded-lg h-full w-full object-cover"
						/>
					</div>
					<div class="text-wrapper">
						<p class="deal-title">On Domestic Tour Booking</p>
						<p class="deal-exerp">
							Applicable for debit/credit card and mobile banking
							payment except EMI & Internet Banking. Till 30 June
							’22.
						</p>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<div class="promo-code">
						<svg
							height="20"
							viewBox="0 0 21 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2"
						>
							<path
								d="M15.8362 5.21078L15.8357 5.21023C13.6058 2.57906 11.401 0.861815 11.2792 0.766928L11.2775 0.765636L11.2775 0.765631L11.2755 0.764027C10.4592 0.134936 9.24 0.698113 9.24 1.75069V5.05069C9.24 6.22609 7.63984 6.67188 7.03329 5.62104L7.03294 5.62045C6.589 4.85377 5.5223 4.78389 4.9675 5.44705L4.96623 5.44857C2.64472 8.24602 0.5 11.8524 0.5 15.6257C0.5 21.0784 4.99087 25.5007 10.5 25.5007C16.0091 25.5007 20.5 21.0784 20.5 15.6257C20.5 11.7546 18.2419 8.05775 15.8362 5.21078ZM8.0458 19.1506L8.04458 19.1521C7.95974 19.2607 7.79319 19.2829 7.68013 19.1956L7.67736 19.1935C7.56822 19.1104 7.55032 18.9566 7.63326 18.852L7.63419 18.8508L12.9542 12.1008L12.9554 12.0992C13.0403 11.9907 13.2068 11.9685 13.3199 12.0558L13.3226 12.0579C13.4318 12.141 13.4497 12.2948 13.3667 12.3994L13.3658 12.4006L8.0458 19.1506ZM6.82 13.0007C6.82 12.4581 7.27388 12.0007 7.84 12.0007C8.40715 12.0007 8.86 12.4544 8.86 13.0007C8.86 13.5433 8.40612 14.0007 7.84 14.0007C7.27285 14.0007 6.82 13.547 6.82 13.0007ZM13.16 19.2507C12.5929 19.2507 12.14 18.797 12.14 18.2507C12.14 17.7081 12.5939 17.2507 13.16 17.2507C13.7271 17.2507 14.18 17.7044 14.18 18.2507C14.18 18.797 13.7271 19.2507 13.16 19.2507Z"
								fill="#E5F5FD"
								stroke="#1C3C6B"
							/>
						</svg>

						<p class="text-xs sm:text-base">TOUR0521</p>
					</div>
					<div class="absolute sm:right-6 right-[0.7rem] sm:-bottom-5 -bottom-4">
						<a
							href="#"
							class="
								bg-[#fccd03]
								text-[#1c3c6b]
								sm:py-3
								sm:px-3.5
                                py-2
                                px-3
								rounded-lg
								font-bold
								sm:text-sm
                                text-xs
								flex
								items-center
							"
						>
							<font-awesome-icon
								:icon="'arrow-up'"
								class="mr-2 transform rotate-45"
							/>
							<span>Learn More</span>
						</a>
					</div>
				</div>
			</SplideSlide>
			<SplideSlide
				class="
					min-h-[150px]
					h-auto
					relative
					bg-white
					rounded-md
					p-3
					max-w-fit
					shadow-md
				"
			>
				<div class="sm:flex block">
					<div
						class="
							min-w-[160px]
							h-[120px]
							relative
							-top-6
							-left-6
							sm:flex
                            block
						"
					>
						<img
							:src="'images/campaign_Hot_Deal.jpg'"
							alt="hot deal"
							class="rounded-lg h-full w-full object-cover"
						/>
					</div>
					<div class="text-wrapper">
						<p class="deal-title">On Domestic Tour Booking</p>
						<p class="deal-exerp">
							Applicable for debit/credit card and mobile banking
							payment except EMI & Internet Banking. Till 30 June
							’22.
						</p>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<div class="promo-code">
						<svg
							height="20"
							viewBox="0 0 21 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2"
						>
							<path
								d="M15.8362 5.21078L15.8357 5.21023C13.6058 2.57906 11.401 0.861815 11.2792 0.766928L11.2775 0.765636L11.2775 0.765631L11.2755 0.764027C10.4592 0.134936 9.24 0.698113 9.24 1.75069V5.05069C9.24 6.22609 7.63984 6.67188 7.03329 5.62104L7.03294 5.62045C6.589 4.85377 5.5223 4.78389 4.9675 5.44705L4.96623 5.44857C2.64472 8.24602 0.5 11.8524 0.5 15.6257C0.5 21.0784 4.99087 25.5007 10.5 25.5007C16.0091 25.5007 20.5 21.0784 20.5 15.6257C20.5 11.7546 18.2419 8.05775 15.8362 5.21078ZM8.0458 19.1506L8.04458 19.1521C7.95974 19.2607 7.79319 19.2829 7.68013 19.1956L7.67736 19.1935C7.56822 19.1104 7.55032 18.9566 7.63326 18.852L7.63419 18.8508L12.9542 12.1008L12.9554 12.0992C13.0403 11.9907 13.2068 11.9685 13.3199 12.0558L13.3226 12.0579C13.4318 12.141 13.4497 12.2948 13.3667 12.3994L13.3658 12.4006L8.0458 19.1506ZM6.82 13.0007C6.82 12.4581 7.27388 12.0007 7.84 12.0007C8.40715 12.0007 8.86 12.4544 8.86 13.0007C8.86 13.5433 8.40612 14.0007 7.84 14.0007C7.27285 14.0007 6.82 13.547 6.82 13.0007ZM13.16 19.2507C12.5929 19.2507 12.14 18.797 12.14 18.2507C12.14 17.7081 12.5939 17.2507 13.16 17.2507C13.7271 17.2507 14.18 17.7044 14.18 18.2507C14.18 18.797 13.7271 19.2507 13.16 19.2507Z"
								fill="#E5F5FD"
								stroke="#1C3C6B"
							/>
						</svg>

						<p class="text-xs sm:text-base">TOUR0521</p>
					</div>
					<div class="absolute sm:right-6 right-[0.7rem] sm:-bottom-5 -bottom-4">
						<a
							href="#"
							class="
								bg-[#fccd03]
								text-[#1c3c6b]
								sm:py-3
								sm:px-3.5
                                py-2
                                px-3
								rounded-lg
								font-bold
								sm:text-sm
                                text-xs
								flex
								items-center
							"
						>
							<font-awesome-icon
								:icon="'arrow-up'"
								class="mr-2 transform rotate-45"
							/>
							<span>Learn More</span>
						</a>
					</div>
				</div>
			</SplideSlide>
			<SplideSlide
				class="
					min-h-[150px]
					h-auto
					relative
					bg-white
					rounded-md
					p-3
					max-w-fit
					shadow-md
				"
			>
				<div class="sm:flex block">
					<div
						class="
							min-w-[160px]
							h-[120px]
							relative
							-top-6
							-left-6
							sm:flex
                            block
						"
					>
						<img
							:src="'images/campaign_Hot_Deal.jpg'"
							alt="hot deal"
							class="rounded-lg h-full w-full object-cover"
						/>
					</div>
					<div class="text-wrapper">
						<p class="deal-title">On Domestic Tour Booking</p>
						<p class="deal-exerp">
							Applicable for debit/credit card and mobile banking
							payment except EMI & Internet Banking. Till 30 June
							’22.
						</p>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<div class="promo-code">
						<svg
							height="20"
							viewBox="0 0 21 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="mr-2"
						>
							<path
								d="M15.8362 5.21078L15.8357 5.21023C13.6058 2.57906 11.401 0.861815 11.2792 0.766928L11.2775 0.765636L11.2775 0.765631L11.2755 0.764027C10.4592 0.134936 9.24 0.698113 9.24 1.75069V5.05069C9.24 6.22609 7.63984 6.67188 7.03329 5.62104L7.03294 5.62045C6.589 4.85377 5.5223 4.78389 4.9675 5.44705L4.96623 5.44857C2.64472 8.24602 0.5 11.8524 0.5 15.6257C0.5 21.0784 4.99087 25.5007 10.5 25.5007C16.0091 25.5007 20.5 21.0784 20.5 15.6257C20.5 11.7546 18.2419 8.05775 15.8362 5.21078ZM8.0458 19.1506L8.04458 19.1521C7.95974 19.2607 7.79319 19.2829 7.68013 19.1956L7.67736 19.1935C7.56822 19.1104 7.55032 18.9566 7.63326 18.852L7.63419 18.8508L12.9542 12.1008L12.9554 12.0992C13.0403 11.9907 13.2068 11.9685 13.3199 12.0558L13.3226 12.0579C13.4318 12.141 13.4497 12.2948 13.3667 12.3994L13.3658 12.4006L8.0458 19.1506ZM6.82 13.0007C6.82 12.4581 7.27388 12.0007 7.84 12.0007C8.40715 12.0007 8.86 12.4544 8.86 13.0007C8.86 13.5433 8.40612 14.0007 7.84 14.0007C7.27285 14.0007 6.82 13.547 6.82 13.0007ZM13.16 19.2507C12.5929 19.2507 12.14 18.797 12.14 18.2507C12.14 17.7081 12.5939 17.2507 13.16 17.2507C13.7271 17.2507 14.18 17.7044 14.18 18.2507C14.18 18.797 13.7271 19.2507 13.16 19.2507Z"
								fill="#E5F5FD"
								stroke="#1C3C6B"
							/>
						</svg>

						<p class="text-xs sm:text-base">TOUR0521</p>
					</div>
					<div class="absolute sm:right-6 right-[0.7rem] sm:-bottom-5 -bottom-4">
						<a
							href="#"
							class="
								bg-[#fccd03]
								text-[#1c3c6b]
								sm:py-3
								sm:px-3.5
                                py-2
                                px-3
								rounded-lg
								font-bold
								sm:text-sm
                                text-xs
								flex
								items-center
							"
						>
							<font-awesome-icon
								:icon="'arrow-up'"
								class="mr-2 transform rotate-45"
							/>
							<span>Learn More</span>
						</a>
					</div>
				</div>
			</SplideSlide>


		</Splide>
	</div>
</template>


<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		Splide,
		SplideSlide,
	},
});
</script>


<style lang="scss" scoped>
.button {
	border-radius: 1.5rem;
	background: transparent;
	padding: 0 0.5rem;
}
.is-checked {
	color: #1c3c6b;
	background: #ecf3fe;
	border-radius: 1.5rem;
	padding: 0 0.8rem;
}

.deal-title {
	@apply text-[#1c3c6b] font-semibold text-xl;
}

.deal-exerp {
	@apply text-sm mt-[5px] text-[#22292f] mb-2 sm:mb-0;
}
.promo-code {
	@apply flex items-center py-1 px-2.5 rounded bg-[#ecf3fe];
}
</style>
