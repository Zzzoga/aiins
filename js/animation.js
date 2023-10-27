// Stock animation

if (document.querySelector('.top_img') !== null) {
    const topImg = document.querySelector('.top_img');
    const topScreen = document.querySelector('section.top_screen');
    topScreen.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;  
        topImg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
}

if (document.querySelector('section.benefits') !== null) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > $('section.benefits').offset().top - 700) {
            setTimeout(() => {
                $('.benefits_item.item_1').addClass('visible');
            }, 500);
            setTimeout(() => {
                $('.benefits_item.item_2').addClass('visible');
            }, 1000);
            setTimeout(() => {
                $('.benefits_item.item_3').addClass('visible');
            }, 1500);
            setTimeout(() => {
                $('.benefits_item.item_4').addClass('visible');
            }, 2000);
            setTimeout(() => {
                $('.benefits_item.item_5').addClass('visible');
            }, 2500);
            setTimeout(() => {
                $('.benefits_item.item_6').addClass('visible');
            }, 3000);
            
        }
    });
}

if (document.querySelector('section.description_blocks') !== null) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > $('section.description_blocks').offset().top - 500) {
            setTimeout(() => {
                $('.description_block.block_1').addClass('visible');
            }, 0);
            setTimeout(() => {
                $('.description_block.block_2').addClass('visible');
            }, 500);
        }
    });
}

if (document.querySelector('section.banner') !== null) {
    $(window).scroll(function(){
        if ($(this).scrollTop() > $('section.banner').offset().top - 500) {
            setTimeout(() => {
                $('.banner_offer').addClass('visible');
            }, 0);
        }
    });
}

// GSAP
gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline({})

tl.fromTo(
    '.top_video_bg', 
    {
        opacity: 0
    }, 
    {
        opacity: 1,
    },
    .5
).fromTo(
    'header', 
    {
        opacity: 0
    }, 
    {
        opacity: 1,
    },
    .75
).fromTo(
    'h1.title', 
    {
        x: 150,
        opacity: 0
    }, 
    {
        x: 0,
        opacity: 1,
    },
    1
).fromTo(
    'p.post_title', 
    {
        x: 150,
        opacity: 0
    }, 
    {
        x: 0,
        opacity: 1,
    },
    1.25
).fromTo(
    '.btn.top_btn', 
    {
        x: 150,
        opacity: 0
    }, 
    {
        x: 0,
        opacity: 1,
    },
    1.5
).fromTo(
    '.top_screen .support', 
    {
        x: 150,
        opacity: 0
    }, 
    {
        x: 0,
        opacity: 1,
    },
    1.75
).fromTo(
    '.top_screen .top_img', 
    {
        opacity: 0
    }, 
    {
        opacity: 1,
    },
    2
).fromTo(
    'section.partners .section_wrapper', 
    {
        y: 150,
        opacity: 0
    }, 
    {
        y: 0,
        opacity: 1,
    },
    2.25
)

const tlMain = gsap.timeline({})

tlMain.fromTo('section.about h2.section_title', 
    {
        y: 100
    },
	{ 
        scrollTrigger: {
            trigger: 'section.partners',
            markers: false,
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }, 
        y: 0
    }
    ).fromTo('section.about .section_content', 
    {
        y: 100
    },
	{ 
        scrollTrigger: {
            trigger: 'section.partners',
            markers: false,
            start: 'top center',
            end: 'bottom center',
            scrub: true
        }, 
        y: 0
    }
    ).fromTo('span.line_mask.first', 
    {
        x: 0,
    },
	{ 
        scrollTrigger: {
            trigger: 'section.about',
            markers: false,
            start: 'center center',
            end: 'bottom center',
            scrub: true
        }, 
        x: '100%',
    }
    ).fromTo('span.line_mask.second', 
    {
        x: 0,
    },
	{ 
        scrollTrigger: {
            trigger: '.gradient_bg',
            markers: false,
            start: 'top center',
            end: '+=200px center',
            scrub: true
        }, 
        x: '100%',
    }
    ).fromTo('.gradient', 
    {
        y: 250,
    },
	{ 
        scrollTrigger: {
            trigger: '.gradient_bg',
            markers: false,
            start: '100px center',
            end: '800px center',
            scrub: true
        }, 
        y: 0,
    }
    ).fromTo('.ecosystem_video.video_wrapper', 
    {
        y: 50,
        scale: .85
    },
	{ 
        scrollTrigger: {
            trigger: '.gradient_bg',
            markers: false,
            start: 'top center',
            end: '+=500px center',
            scrub: true
        }, 
        y: 0,
        scale: 1
    }
    ).fromTo('section.cases', 
    {
        y: 50,
        scale: .85
    },
	{ 
        scrollTrigger: {
            trigger: '.ecosystem_video.video_wrapper',
            markers: false,
            start: 'center center',
            end: '+=600px center',
            scrub: true
        }, 
        y: 0,
        scale: 1
    }
    ).fromTo('section.faq', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'section.faq',
            markers: false,
            start: 'top bottom',
            end: '+=300px center',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.footer_fos .fos_wrapper', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'section.footer_fos',
            markers: false,
            start: 'top center',
            end: '+=300px center',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.description .section_wrapper', 
    {
        y: 100
    },
	{ 
        scrollTrigger: {
            trigger: 'section.top_screen',
            markers: false,
            start: '60% center',
            end: 'bottom center',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.description .section_wrapper', 
    {
        y: 100
    },
	{ 
        scrollTrigger: {
            trigger: 'section.top_screen',
            markers: false,
            start: '60% center',
            end: 'bottom center',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.benefits .section_wrapper', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'section.description',
            markers: false,
            start: '0% center',
            end: '100% center',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('.tener_slider', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'section.benefits',
            markers: false,
            start: '50% center',
            end: '100% center',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.solution', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'section.solution',
            markers: false,
            start: '0% bottom',
            end: '50% bottom',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('main.page section.partners', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'main.page section.partners',
            markers: false,
            start: '0% bottom',
            end: '50% bottom',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.safety', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'main.page section.partners',
            markers: false,
            start: '0% center',
            end: '100% center',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.steps', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'section.steps',
            markers: false,
            start: '0% bottom',
            end: '50% bottom',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    ).fromTo('section.description_blocks', 
    {
        y: 100,
        opacity: 0
    },
	{ 
        scrollTrigger: {
            trigger: 'section.description_blocks',
            markers: false,
            start: '0% bottom',
            end: '50% bottom',
            scrub: true
        }, 
        y: 0,
        opacity: 1
    }
    )