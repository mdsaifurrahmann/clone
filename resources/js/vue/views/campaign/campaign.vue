<template>
	<div class="container overflow-hidden">
		<Splide
			:options="{
				rewind: false,
				noDrag: 'input, textarea, .no-drag, img',
				perPage: 2,
				perMove: 1,
				speed: 1500,
				pagination: false,
				gap: '1rem',
				autoWidth: true,
				breakpoints: {
					992: {
						perPage: 1,
					},
				},
			}"
			class="mt-8"
		>
			<SplideSlide class="h-[150px] relative">
				<a
					href="#"
					class="
						absolute
						left-1/2
						transform
						-translate-x-1/2 -translate-y-1/2
						-bottom-1
						text-xs
						rounded-2xl
						bg-white
						py-1
						px-3
						shadow-md
					"
					>Learn More</a
				>
				<img
					:src="'images/emi-lg.webp'"
					alt="EMI"
					class="rounded-2xl h-full"
				/>
			</SplideSlide>
			<SplideSlide class="h-[150px] relative">
				<a
					href="#"
					class="
						absolute
						left-1/2
						transform
						-translate-x-1/2 -translate-y-1/2
						-bottom-1
						text-xs
						rounded-2xl
						bg-white
						py-1
						px-3
						shadow-md
					"
					>Learn More</a
				>
				<img
					:src="'images/homepage-lg-chorki.webp'"
					alt="EMI"
					class="rounded-2xl h-full"
				/>
			</SplideSlide>
			<SplideSlide class="h-[150px] relative">
				<a
					href="#"
					class="
						absolute
						left-1/2
						transform
						-translate-x-1/2 -translate-y-1/2
						-bottom-1
						text-xs
						rounded-2xl
						bg-white
						py-1
						px-3
						shadow-md
					"
					>Learn More</a
				>
				<img
					:src="'images/homepage-lg-shwapno.webp'"
					alt="EMI"
					class="rounded-2xl h-full"
				/>
			</SplideSlide>
			<SplideSlide class="h-[150px] relative">
				<a
					href="#"
					class="
						absolute
						left-1/2
						transform
						-translate-x-1/2 -translate-y-1/2
						-bottom-1
						text-xs
						rounded-2xl
						bg-white
						py-1
						px-3
						shadow-md
					"
					>Learn More</a
				>
				<img
					:src="'images/homepage-lg-lotto.webp'"
					alt="EMI"
					class="rounded-2xl h-full"
				/>
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
@media (max-width: 991px) {
	SplideSlide {
		min-width: calc(50% - 25px);
	}

	.splide__list {
		li {
			width: calc(50% - 25px) !important;
		}
	}
	.splide__list {
		li {
			width: calc(100% - 25px) !important;
			img {
				width: 100%;
				object-fit: cover;
			}
		}
	}
}
</style>e
