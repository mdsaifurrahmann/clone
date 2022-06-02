<template>
	<div class="home-banner">
		<div class="bg">
			<div class="container">
				<div id="search-bar" class="shadow-lg">
					<div class="search-type shadow-md">
						<span class="active">Hotel</span>
						<span>eFood</span>
						<span>Marketplace</span>
						<span>Electrician</span>
					</div>
					<div class="hotel">
						<div class="grid sm:grid-cols-6 grid-cols-3 gap-2" id="tab-content">
                            <div class="flex items-center">
                                <div class="w-[150px] h-auto text-center">
                                    <a href="#">
                                        <img
                                            :src="'images/campaign_Hot_deal.jpg'"
                                            alt=""
                                            class="
                                                h-auto
                                                border border-gray-400
                                                rounded-lg
                                                mb-2
                                            "
                                        />
                                        <span class="font-semibold"
                                            >Hotel Name</span
                                        >
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-[150px] h-auto text-center ">
                                    <a href="#">
                                        <img
                                            :src="'images/campaign_Hot_deal.jpg'"
                                            alt=""
                                            class="
                                                h-auto
                                                border border-gray-400
                                                rounded-lg
                                                mb-2
                                            "
                                        />
                                        <span class="font-semibold"
                                            >Hotel Name</span
                                        >
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-[150px] h-auto text-center ">
                                    <a href="#">
                                        <img
                                            :src="'images/campaign_Hot_deal.jpg'"
                                            alt=""
                                            class="
                                                h-auto
                                                border border-gray-400
                                                rounded-lg
                                                mb-2
                                            "
                                        />
                                        <span class="font-semibold"
                                            >Hotel Name</span
                                        >
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-[150px] h-auto text-center">
                                    <a href="#">
                                        <img
                                            :src="'images/campaign_Hot_deal.jpg'"
                                            alt=""
                                            class="
                                                h-auto
                                                border border-gray-400
                                                rounded-lg
                                                mb-2
                                            "
                                        />
                                        <span class="font-semibold"
                                            >Hotel Name</span
                                        >
                                    </a>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
.home-banner {
	margin-bottom: 3rem;
}
.bg {
	background-image: url(/images/homepage-background.webp);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 600px;
	padding: 200px 0 0;
}

#search-bar {
	// position: relative;
	// background: #fff;
	// border-radius: 20px;
	// padding: 50px 30px 40px;

    @apply relative bg-white rounded-2xl sm:pt-12 sm:pb-10 sm:pl-7 sm:pr-7 pt-11 pr-4 pb-5 pl-4;
}

.search-type {
    @apply flex items-center bg-white absolute top-0 left-1/2 justify-between px-0 sm:px-14 transform -translate-x-1/2 -translate-y-1/2 sm:w-auto w-[95%] rounded-2xl overflow-scroll;

	span {

        @apply min-w-[90px] sm:min-w-[120px] sm:py-5 py-4 px-2 sm:p-5 justify-center cursor-pointer flex items-center font-semibold text-sm sm:text-base;
	}

	span.active {
		border-bottom: 2px solid #fccd03;
		color: #1c3c6b;
	}
}

</style>
