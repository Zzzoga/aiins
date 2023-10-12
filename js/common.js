function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

	options = {
	  path: '/',
	  // при необходимости добавьте другие значения по умолчанию
	  ...options
	};
  
	if (options.expires instanceof Date) {
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) {
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
	  if (optionValue !== true) {
		updatedCookie += "=" + optionValue;
	  }
	}
  
	document.cookie = updatedCookie;
}
  
function deleteCookie(name) {
	setCookie(name, "", {
	  'max-age': -1
	})
}

function darkThemeActive() {
	document.querySelector('body').classList.add('dark')

	document.querySelector('.top_video_bg').innerHTML = '<video autoplay muted loop><source src="video/bg_video_dark.mp4"></video>'

	const supLogos = document.querySelectorAll('.sup_img img')
	supLogos[0].src = 'img/sup_1_dark.svg'
	supLogos[1].src = 'img/sup_2_dark.svg'
	supLogos[2].src = 'img/sup_3_dark.svg'
	supLogos[3].src = 'img/sup_3_dark.svg'

	const partnerLogos = document.querySelectorAll('.partner_item img')
	partnerLogos[0].src = 'img/partner_1_dark.svg'
	partnerLogos[1].src = 'img/partner_2_dark.svg'
	partnerLogos[2].src = 'img/partner_3_dark.svg'
	partnerLogos[3].src = 'img/partner_4_dark.svg'
	partnerLogos[4].src = 'img/partner_5_dark.svg'
	partnerLogos[5].src = 'img/partner_6_dark.svg'
}

function lightThemeActive() {
	document.querySelector('body').classList.remove('dark')

	document.querySelector('.top_video_bg').innerHTML = '<video autoplay muted loop><source src="video/bg_video_light.mp4"></video>'

	const supLogos = document.querySelectorAll('.sup_img img')
	supLogos[0].src = 'img/sup_1.svg'
	supLogos[1].src = 'img/sup_2.svg'
	supLogos[2].src = 'img/sup_3.svg'
	supLogos[3].src = 'img/sup_3.svg'

	const partnerLogos = document.querySelectorAll('.partner_item img')
	partnerLogos[0].src = 'img/partner_1.svg'
	partnerLogos[1].src = 'img/partner_2.svg'
	partnerLogos[2].src = 'img/partner_3.svg'
	partnerLogos[3].src = 'img/partner_4.svg'
	partnerLogos[4].src = 'img/partner_5.svg'
	partnerLogos[5].src = 'img/partner_6.svg'
}

document.addEventListener('DOMContentLoaded', () => {

	if (getCookie('theme') === 'dark') {
		darkThemeActive()
	}

	document.querySelectorAll('.faq_item').forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			if (e.target.closest('.faq_item').classList.contains('active')) {
				e.target.closest('.faq_item').classList.remove('active')
			} else {
				document.querySelectorAll('.faq_item').forEach(btn => {
					btn.classList.remove('active')
				})
				e.target.closest('.faq_item').classList.add('active')
			}
		})
	})

	document.querySelector('.video_btn').addEventListener('click', e => {
		e.preventDefault()
		document.querySelector('.ecosystem_video').classList.add('active')
		setTimeout(() => {
			document.querySelector('.video_poster').style.display = 'none'
			document.querySelector('.video_btn').style.display = 'none'
		}, 500)
		setTimeout(() => {
			document.querySelector('.ecosystem_video video').play()
		}, 1000)
	})

	document.querySelector('.theme_wrapper').addEventListener('click', e => {
		e.preventDefault()
		if (document.querySelector('body').classList.contains('dark')) {
			setCookie('theme', 'light')
			lightThemeActive()
		} else {
			setCookie('theme', 'dark')
			darkThemeActive()
		}
	})

})