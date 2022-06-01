<template>
	<Navs />
    <App-Header />
	<Ad-Banner />
	<Deals />
	<Ad-Campaign />
	<App-Footer />
</template>

<script>
import AppFooter from "../views/global/footer.vue";
import AdBanner from "../views/ad/ad-banner.vue";
import AdCampaign from "../views/campaign/campaign.vue";
import Deals from "../views/deals/deals.vue";
import Navs from "../views/menu/global-menu.vue";
import AppHeader from "../views/global/header.vue";

export default {
	components: {
		AdBanner,
		Deals,
		AppFooter,
		AdCampaign,
		Navs,
        AppHeader
	},
	setup() {},
};
</script>
