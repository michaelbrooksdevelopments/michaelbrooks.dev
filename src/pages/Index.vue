<template>
    <div id="app">
        <nav class="flex w-full items-center fixed justify-between flex-wrap bg-white p-6 border-b z-10">
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
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <transition name="slide">
                <div v-if="!isHidden" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
                     v-on:click="clickMenu(false)">
                    <div class="text-sm lg:flex-grow text-right">
                        <a href="#work" v-scroll-to="'#work'"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
                            Work
                        </a>
                        <a href="#about" v-scroll-to="'#about'"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
                            About
                        </a>
                        <a href="#testimonials" v-scroll-to="'#testimonials'"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
                            Testimonials
                        </a>
                        <a href="#contact" v-scroll-to="'#contact'"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
                            Contact
                        </a>
                        <a href="https://blog.michaelbrooks.dev"
                           class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4 lg:mr-0">
                            Blog
                        </a>
                    </div>
                </div>
            </transition>
        </nav>

        <div id="home" :class="webp" class="md:flex text-center">
            <div class="py-32 lg:py-64 px-65 w-full m-auto background-overlay">
                <p class="text-white text-l uppercase mt-5">{{ greeting }}, I am</p>
                <h1 class="text-white text-5xl">Michael Brooks Developments</h1>
                <p class="text-white text-3xl mt-10">Creating lightning fast, functional websites that work for you</p>

                <span class="divider border-white px-16 py-6 mb-20"></span>

                <div class="w-full mt-24">
                    <a href="#" v-scroll-to="'#contact'"
                       class="bg-teal-400 hover:bg-teal-600 text-black hover:text-white font-bold py-4 px-4 uppercase">
                        Have a project in mind? Let's talk
                    </a>
                </div>
            </div>
        </div>
        <div class="md:flex mt-16 text-center md:py-16" id="work">
            <div class="m-auto inline">
                <p class="text-black text-xl mt-5 mb-4">Building great experiences</p>
                <p class="text-4xl uppercase font-bold">Take a look at my clients</p>
                <span class="divider border-black px-16 py-6 mb-20"></span>
            </div>
        </div>
        <div class="md:flex mb-16 text-center md:pb-32 px-6 md:px-12 mt-20">
            <div class="md:flex w-full">
                <div class="md:w-1/3 w-full mb-6 px-6">
                    <a href="https://brookspetsitters.com">
                        <g-image src="~/assets/images/brooks.png"/>
                        <p class="mt-4 text-2xl">Brooks Pet Sitters</p>
                        <p class="text-gray-600">
                            I helped my wife start her own business, and created her website with functional design and
                            SEO in mind. Brooks Pet Sitters is located at the top for local pet sitting keywords and
                            she has gained a customer base because of this.
                        </p>
                    </a>
                </div>
                <div class="md:w-1/3 md:mr-12 mb-6 px-6 mt-16 md:mt-0">
                    <a href="https://myhaulfryn.co.uk">
                        <g-image src="~/assets/images/logo-new-black.jpg"/>
                        <p class="mt-4 text-2xl">My Haulfryn</p>
                        <p class="text-gray-600">
                            Built entirely with Laravel, this website has enabled holiday and residential homeowners the
                            ability to pay for their bills. They can log in and pay for electric and gas, as well as add
                            visitor registration numbers to allow them to enter.
                        </p>
                    </a>
                </div>
                <div class="md:w-1/3 px-6 mt-16 md:mt-0">
                    <a href="https://pulse8broadband.co.uk">
                        <g-image src="~/assets/images/pulse8communications.jpg"/>
                        <p class="mt-4 text-2xl">Pulse8 Communications</p>
                        <p class="text-gray-600">
                            Customers can view broadband plans and sign up to their chosen plan. Pulse8 Broadband can
                            then log into their system and view purchases, support tickets and how far the installation
                            process has gone.
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div class="md:flex md:py-32 w-full m-auto bg-black" id="about">
            <div class="w-full md:w-1/2 md:px-4">
                <g-image src="~/assets/images/about.jpg" class="md:float-right"/>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/3 text-center md:text-left px-4">
                <p class="text-white mt-6 text-5xl font-semibold">About Me</p>
                <span class="divider border-white px-6"></span>
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
                    <div class="">
                        <a href="https://blog.michaelbrooks.dev" title="Blog">
                            <font-awesome :icon="['fas','blog']" class="text-white text-4xl" size="3x" fixed-width/>
                        </a>
                        <a href="https://www.fb.me/michaelbrooksdevelopments/" title="Facebook">
                            <font-awesome :icon="['fab','facebook']" class="text-white ml-5 text-4xl" size="3x"
                                          fixed-width/>
                        </a>
                        <a href="https://twitter.com/mbrooksuk" title="Twitter">
                            <font-awesome :icon="['fab','twitter']" class="text-white ml-5 text-4xl" size="3x"
                                          fixed-width/>
                        </a>
                        <a href="https://www.linkedin.com/company/michael-brooks-developments" title="LinkedIn">
                            <font-awesome :icon="['fab','linkedin']" class="text-white ml-5 text-4xl" size="3x"
                                          fixed-width/>
                        </a>
                        <a href="https://github.com/michael-brooks-developments" title="GitHub">
                            <font-awesome :icon="['fab','github']" class="text-white ml-5 text-4xl" size="3x"
                                          fixed-width/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:flex text-center md:py-16 pb-16" id="testimonials">
            <div class="m-auto inline">
                <p class="text-black text-xl mt-5 mb-12">Have a project in the works?</p>
                <a href="#" v-scroll-to="'#contact'"
                   class="bg-teal-400 hover:bg-teal-600 text-black hover:text-white font-bold py-4 px-4 uppercase">
                    Let's talk
                </a>
            </div>
        </div>
        <div class="md:flex pt-20 md:pt-0 md:mt-10 w-full m-auto bg-black text-center md:text-left" id="reviews">
            <div class="w-full md:w-1/2 md:px-12 md:py-32">
                <p class="text-white text-4xl md:text-5xl font-semibold,">Skills you can trust</p>
                <div class="m-auto">
                    <div class="">
                        <div class="">
                            <g-image src="~/assets/images/ether-stars.png" class="m-auto mt-6" alt="" width="148"
                                     height="24"/>
                        </div>
                    </div>
                </div>
                <span class="divider border-white px-6"></span>
                <ClientOnly>
                    <Carousel :paginationActiveColor="'#aaa'" :paginationColor="'#fff'" :perPage="1"
                              class="text-white md:p-12 mt-20">
                        <Slide>
                            <div class="text-center">
                                <div class="text-xl">
                                    <div class="">
                                        I was looking for someone to build a simple and professional website. Michael
                                        achieved this and got me on the front-page of most search engines including
                                        Google.
                                        This has led to a huge number of leads who would have never found me.
                                    </div>
                                </div>
                                <div class="text-center mt-10">
                                    <div class="mb-6">
                                        <g-image class="h-16 w-16 rounded-full m-auto"
                                             src="~/assets/images/brooks-logo.jpg"
                                             alt="Tiffanie Brooks" />
                                    </div>
                                    <a href="https://brookspetsitters.com">
                                        <cite class="text-center">
                                            <span class="not-italic">Tiffanie Brooks</span>
                                            <br>
                                            <span class="">Professional Pet Sitter</span>
                                        </cite>
                                    </a>
                                </div>
                            </div>
                        </Slide>
                        <Slide>
                            <div class="text-center">
                                <div class="">
                                    <div class="text-xl">
                                        I needed Michael to do some back-end tech tweaks to my website and I couldn't
                                        have
                                        asked for better service. He was quick to respond, knew his stuff and explained
                                        any
                                        issues in laymen's terms for reasonable costs. Have used him before and will
                                        definitely use him again. Thank you Michael!
                                    </div>
                                </div>
                                <div class="text-center mt-10">
                                    <g-image class="h-16 w-16 rounded-full m-auto mb-6"
                                         src="~/assets/images/toni.jpg"
                                         alt="Toni"/>

                                    <a href="https://reclaimingyourfuture.com/">
                                        <cite class="">
                                            <span class="font-semibold not-italic">Toni</span><br>
                                            <span class="italic">Writer</span>
                                        </cite>
                                    </a>
                                </div>
                            </div>
                        </Slide>
                    </Carousel>
                </ClientOnly>
            </div>
            <div :class="webp" class="w-full md:w-1/2 md:text-left mt-10 md:mt-0" id="projects">
                <div id="projects-overlay" class="md:py-64 py-10">
                    <p class="text-white text-6xl font-bold text-center mt-12">11</p>
                    <p class="text-gray-500 px-2 text-center text-2xl pb-10 md:pb-64">Completed projects</p>
                    <div class="py-3"></div>
                </div>
            </div>
        </div>
        <div class="md:flex mt-16 md:py-16" id="contact">
            <div class="m-auto inline w-1/3">
                <form :class="isFormSuccess.form" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" name="contact"
                      method="post"
                      v-on:submit.prevent="handleSubmit"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input :class="formData.nameError.border"
                               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="name" type="text" name="name" placeholder="I'm Batman" v-model="formData.name">
                        <p :class="formData.nameError.text" class="text-red-500 text-xs italic">Please enter your
                            name.</p>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input :class="formData.emailError.border"
                               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                               id="email" type="email" name="email" placeholder="batman@batcave.com"
                               v-model="formData.email">
                        <p :class="formData.emailError.text" class="text-red-500 text-xs italic">Please enter your
                            email.</p>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                            Message
                        </label>
                        <textarea :class="formData.messageError.border" name="message" id="message"
                                  placeholder="Dear Alfred," cols="30" rows="10" v-model="formData.message"
                                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        <p :class="formData.messageError.text" class="text-red-500 text-xs italic">Please enter your
                            message.</p>
                    </div>
                    <div class="items-center text-center w-full">
                        <button class="bg-teal-400 hover:bg-teal-600 text-white font-bold py-4 px-4 mt-6 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit">
                            Send Email
                            <font-awesome :icon="['far','arrow-alt-circle-right']" class="text-white ml-2 text-xl"
                                          size="2x" fixed-width/>
                        </button>
                    </div>
                </form>
                <div :class="isFormSuccess.success" class="text-center text-xl px-2">
                    Your message has been sent successfully, thank you!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Michael Brooks Developments | Newton Abbot Web Developer',
            meta: [
                {
                    name: 'description',
                    content: 'Michael Brooks is a Web Developer in Newton Abbot. Creating lightning fast, functional websites.'
                }
            ]
        },
        data() {
            return {
                windowWidth: 0,
                mdBreakpoint: 1023,
                isHidden: false,
                isFormSuccess: {
                    form: 'block',
                    success: 'hidden',
                },
                greeting: 'Welcome',
                webp: 'webp',
                formData: {
                    nameError: {
                        border: '',
                        text: 'hidden',
                    },
                    emailError: {
                        border: '',
                        text: 'hidden',
                    },
                    messageError: {
                        border: '',
                        text: 'hidden',
                    },
                    errors: null,
                },
            }
        },
        components: {
            Carousel: () =>
                import ('vue-carousel')
                    .then(m => m.Carousel)
                    .catch(),
            Slide: () =>
                import ('vue-carousel')
                    .then(m => m.Slide)
                    .catch(),
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
                }
            },
            encode(data) {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&')
            },
            handleSubmit(e) {
                if (!this.formData.name || !this.formData.email || !this.formData.message) {
                    this.formData.errors = 1
                } else {
                    this.formData.errors = null
                }

                if (!this.formData.name) {
                    this.formData.nameError.border = 'border-red-500'
                    this.formData.nameError.text = 'block'
                }

                if (!this.formData.email) {
                    this.formData.emailError.border = 'border-red-500'
                    this.formData.emailError.text = 'block'
                }

                if (!this.formData.message) {
                    this.formData.messageError.border = 'border-red-500'
                    this.formData.messageError.text = 'block'
                }

                if (this.formData.errors === null) {
                    {
                        fetch('/', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                            body: this.encode({
                                'form-name': e.target.getAttribute('name'),
                                ...this.formData,
                            }),
                        })
                            .then(() => {
                                this.isFormSuccess.form = 'hidden'
                                this.isFormSuccess.success = 'block'
                            })
                            .catch(error => alert(error))
                    }
                }
            }
        },
        mounted() {
            let today = new Date()
            let curHr = today.getHours()

            const ua = navigator.userAgent.toLowerCase()
            if (ua.indexOf('safari') !== -1) {
                this.webp = 'no-webp';
            }

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
