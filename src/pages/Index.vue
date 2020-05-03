<template>
    <div id="app">
        <nav class="flex w-full items-center fixed justify-between flex-wrap bg-white p-6 border-b">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <g-image class="fill-current h-8 w-8 mr-2" width="54" height="54"
                         src="~/assets/images/robot_small.png"/>
                <a href="#" v-scroll-to="'#home'" v-on:click="clickMenu(true)">
                    <span class="font-semibold text-l md:text-xl text-black tracking-tight">Michael Brooks Developments</span>
                </a>
            </div>
            <div class="block lg:hidden">
                <button v-on:click="clickMenu(false)"
                        class="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-black hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                        Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <transition name="slide">
                <div v-if="!isHidden" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow text-right">
                        <a href="#work" v-scroll-to="'#work'" v-on:click="clickMenu(false)"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
                            Work
                        </a>
                        <a href="#about" v-scroll-to="'#about'" v-on:click="clickMenu(false)"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
                            About
                        </a>
                        <a href="#testimonials" v-scroll-to="'#testimonials'" v-on:click="clickMenu(false)"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
                            Testimonials
                        </a>
                        <a href="#contact" v-scroll-to="'#contact'" v-on:click="clickMenu(false)"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4 lg:mr-0">
                            Contact
                        </a>
                    </div>
                </div>
            </transition>
        </nav>

        <div id="home" class="md:flex text-center">
            <div class="py-32 lg:py-64 px-65 w-full m-auto background-overlay">
                <p class="text-white text-l uppercase mt-5">{{ greeting }}, I am</p>
                <h1 class="text-white text-5xl">Michael Brooks Developments</h1>
                <p class="text-white text-3xl mt-10">Creating functional websites that work for you</p>

                <span class="divider px-6 py-6 mb-20"></span>

                <div class="w-full mt-24">
                    <a href="#" v-scroll-to="'#contact'"
                       class="bg-teal-400 hover:bg-teal-600 text-black hover:text-white font-bold py-4 px-4 uppercase">
                        Have a project in mind? Let's talk
                    </a>
                </div>
            </div>
        </div>
        <div class="md:flex mt-16 text-center" id="work">
            <div class="pt-20 pb-1 m-auto inline">
                <p class="text-xl uppercase mt-5 mb-4">Take a look at my clients</p>
            </div>
        </div>
        <div class="md:flex text-center pb-32 mt-4">
            <div class="md:flex w-full">
                <div class="md:w-1/3 w-full mr-6 mb-6 px-6">
                    <a href="https://brookspetsitters.com">
                        <g-image src="~/assets/images/brooks.png"/>
                        <p class="mt-4 text-2xl">Brooks Pet Sitters</p>
                        <p class="text-gray-600">
                            I helped my wife start her own business, and created her website with functional design and SEO
                            in mind.
                        </p>
                    </a>
                </div>
                <div class="md:w-1/3 md:mr-12 mb-6 px-6 mt-16 md:mt-0">
                    <a href="https://myhaulfryn.co.uk">
                        <g-image src="~/assets/images/logo-new-black.jpg"/>
                        <p class="mt-4 text-2xl">My Haulfryn</p>
                        <p class="text-gray-600">
                            Built entirely with Laravel, this website enabled holiday and residential homeowners the ability
                            to pay for
                            their bills. They can log in and pay for electric and gas, as well as add visitor registration
                            numbers to
                            allow them to enter.
                        </p>
                    </a>
                </div>
                <div class="md:w-1/3 px-6 mt-16 md:mt-0">
                    <a href="https://pulse8broadband.co.uk">
                        <g-image src="~/assets/images/pulse8communications.jpg"/>
                        <p class="mt-4 text-2xl">Pulse8 Communications</p>
                        <p class="text-gray-600">
                            Customers can view broadband plans and sign up to their chosen plan. Pulse8 Broadband can then
                            log into
                            their system and view purchases, support tickets and how far the installation process has gone.
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div class="md:flex md:py-32 w-full m-auto bg-black" id="about">
            <div class="w-full md:w-1/2 md:px-4">
                <g-image src="~/assets/images/about.jpg" class="float-right"/>
            </div>
            <div class="w-full mt-6 md:w-1/2 lg:w-1/3 text-center md:text-left px-4">
                <p class="text-white text-5xl font-semibold,">About Me</p>
                <span class="divider px-4"></span>
                <p class="text-white mt-8 px-6 md:px-0 text-lg">
                    I’ve been in the professional trade for over eight years. I’m a master of a select number of
                    programming languages including; HTML, CSS, and PHP to name a few.
                </p>
                <p class="text-white mt-8 px-6 md:px-0 text-lg">
                    I take pride in my work with much attention to detail. Please take a look at the projects above to
                    see examples of my work.
                </p>
                <p class="text-white mt-8 px-6 md:px-0 text-lg">
                    Over the past eight years, I have been growing my skill set which provides my client base with the
                    most up to date technologies available.
                </p>
                <p class="text-white mt-8 px-6 md:px-0 text-lg">
                    I provide all of this at affordable pricing without cutting corners. I help with merging conflicts
                    and provide superior support and advice when required.
                </p>
                <p class="text-white mt-8 px-6 md:px-0 mt-16">
                    <a href="#" v-scroll-to="'#contact'"
                       class="bg-teal-400 hover:bg-teal-600 text-black hover:text-white font-bold py-4 px-4 uppercase">
                        Contact me today!
                    </a>
                </p>
                <div class="my-12 py-6 md:px-0 text-white">
                    <div class="elementor-social-icons-wrapper">
                        <a href="https://blog.michaelbrooks.dev" title="Blog">
                            <font-awesome :icon="['fa','blog']" class="text-white text-4xl" size="3x" fixed-width/>
                        </a>
                        <a href="https://www.fb.me/michaelbrooksdevelopments/" title="Facebook">
                            <font-awesome :icon="['fab','facebook']" class="text-white ml-5 text-4xl" size="3x" fixed-width />
                        </a>
                        <a href="https://twitter.com/mbrooksuk" title="Twitter">
                            <font-awesome :icon="['fab','twitter']" class="text-white ml-5 text-4xl" size="3x" fixed-width />
                        </a>
                        <a href="https://www.linkedin.com/company/michael-brooks-developments" title="LinkedIn">
                            <font-awesome :icon="['fab','linkedin']" class="text-white ml-5 text-4xl" size="3x" fixed-width />
                        </a>
                        <a href="https://github.com/Michael-Brooks" title="GitHub">
                            <font-awesome :icon="['fab','github']" class="text-white ml-5 text-4xl" size="3x" fixed-width/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="testimonials">

        </div>
        <div id="contact">

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                windowWidth: 0,
                mdBreakpoint: 1023,
                isHidden: false,
                greeting: 'Welcome'
            }
        },
        computed: {
            menuVisible() {
                this.isHidden = this.windowWidth > this.mdBreakpoint ? false : true
            }
        },
        methods: {
            updateWindowSize() {
                this.windowWidth = window.innerWidth
                this.menuVisible
            },
            clickMenu(close) {
                if (this.windowWidth < this.mdBreakpoint && close === true) {
                    this.isHidden = true
                }

                if (this.windowWidth < this.mdBreakpoint && close === false) {
                    this.isHidden = !this.isHidden
                } else {

                }
            }
        },
        mounted() {
            let today = new Date()
            let curHr = today.getHours()

            if (curHr < 12) {
                this.greeting = 'Good Morning'
            } else if (curHr < 17) {
                this.greeting = 'Good Afternoon'
            } else {
                this.greeting = 'Good Evening'
            }
            this.updateWindowSize()
            window.addEventListener('resize', this.updateWindowSize)
        },
        beforeDestroyed() {
            window.removeEventListener('resize', this.updateWindowSize)
        }
    }
</script>
