<template>
	<nav
		class="absolute top-0 left-0 right-0 min-h-[70px] flex items-center z-10 bg-transparent"
	>
		<div class="container">
			<div class="flex justify-between items-center text-center relative">
				<div>
					<img :src="'images/logo-brand.svg'" alt="brand logo" />
				</div>

				<ul class="hidden">
					<li class="mr-7"><a href="#" class="p-2">Flight</a></li>
					<li class="mr-7"><a href="#" class="p-2">Flight</a></li>
					<li class="mr-7"><a href="#" class="p-2">Flight</a></li>
					<li class="mr-7"><a href="#" class="p-2">Flight</a></li>
					<li class="mr-7"><a href="#" class="p-2">Flight</a></li>
				</ul>
				<div class="flex items-center">
					<div class="flex items-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="34" height="34" x="0" y="0" viewBox="0 0 64 64" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><g xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"><path d="m32 13.87a18.13 18.13 0 1 0 18.13 18.13 18.13 18.13 0 0 0 -18.13-18.13zm0 29.81a11.68 11.68 0 1 1 11.92-11.68 11.8 11.8 0 0 1 -11.92 11.68z" fill="#006837" data-original="#006837" class=""></path><ellipse cx="32" cy="32" fill="#df0000" rx="11.92" ry="11.68" data-original="#df0000" class=""></ellipse></g></g></svg>
						<span>BDT</span>
						<font-awesome-icon icon="angle-down" class="ml-2 text-blue-900"/>
					</div>
					<div class="auth lg:flex hidden">
						<a href="#" class="bg-[#1c3c6b] font-semibold text-white text-center text-sm rounded-md py-[0.56rem] px-6 hover:shadow-xl shadow-black">Sign In</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
    <nav class="container sm:hidden  fixed bottom-[3%] z-20">
        <div class="w-full shadow-lg rounded-3xl bg-white px-5 py-4 ">
            <div class="grid grid-cols-3">
            <div>
                <a href="#">
                    <font-awesome-icon icon="fan" />
                    Offer
                </a>
            </div>
            <div>
                <a href="#">
                    <font-awesome-icon icon="house" />
                    Home
                </a>
            </div>
            <div>
                <a href="#">
                    <font-awesome-icon icon="arrow-right-to-bracket" />
                    Account
                </a>
            </div>
        </div>
        </div>
    </nav>
</template>


<script>
export default {
	setup() {
		return {
			//windowTop: 0,
		};
	},

	// mounted() {
	// 	window.addEventListener("scroll", this.onScroll);
	// },
	// beforeDestroy() {
	// 	window.removeEventListener("scroll", this.onScrollr);
	// },
	// methods: {
	// 	onScroll(e) {
	// 		this.windowTop = e.target.documentElement.scrollTop;
	// 		console.log({ top: this.windowTop });
	// 	},
	// },
};
</script>

