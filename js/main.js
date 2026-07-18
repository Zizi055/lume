/* header scroll state */
(function () {
	var header = document.getElementById('header');
	if (!header) return;

	function update() {
		header.classList.toggle('is-scrolled', window.scrollY > 12);
	}
	update();
	window.addEventListener('scroll', update, { passive: true });
})();

/* mobile nav */
(function () {
	var header = document.getElementById('header');
	var burger = document.getElementById('burger');
	var navMobile = document.getElementById('navMobile');
	if (!burger || !navMobile) return;

	burger.addEventListener('click', function () {
		var open = navMobile.classList.toggle('is-open');
		header.classList.toggle('header--open', open);
		burger.setAttribute('aria-expanded', open ? 'true' : 'false');
	});

	navMobile.querySelectorAll('.nav__link, .btn').forEach(function (link) {
		link.addEventListener('click', function () {
			navMobile.classList.remove('is-open');
			header.classList.remove('header--open');
			burger.setAttribute('aria-expanded', 'false');
		});
	});
})();

/* scroll reveal */
(function () {
	var items = document.querySelectorAll('.reveal, .reveal-stagger');
	if (!items.length) return;

	if (!('IntersectionObserver' in window)) {
		items.forEach(function (el) { el.classList.add('is-visible'); });
		return;
	}

	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

	items.forEach(function (el) { observer.observe(el); });
})();

/* subtle hero photo parallax */
(function () {
	var photo = document.getElementById('heroPhoto');
	var img = photo ? photo.querySelector('img') : null;
	if (!img) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	var ticking = false;
	function update() {
		var rect = photo.getBoundingClientRect();
		var vh = window.innerHeight || 800;
		if (rect.bottom > 0 && rect.top < vh) {
			var progress = rect.top / vh;
			var shift = progress * -24;
			img.style.transform = 'translateY(' + shift.toFixed(1) + 'px) scale(1.08)';
		}
		ticking = false;
	}
	window.addEventListener('scroll', function () {
		if (!ticking) {
			window.requestAnimationFrame(update);
			ticking = true;
		}
	}, { passive: true });
	update();
})();

/* clinic gallery depth parallax */
(function () {
	var gallery = document.getElementById('clinicGallery');
	var accentPhoto = document.getElementById('clinicPhotoA');
	if (!gallery || !accentPhoto) return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	var ticking = false;
	function update() {
		var rect = gallery.getBoundingClientRect();
		var vh = window.innerHeight || 800;
		if (rect.bottom > 0 && rect.top < vh) {
			var progress = (rect.top + rect.height / 2 - vh / 2) / vh;
			var shift = progress * -30;
			accentPhoto.style.transform = 'translateY(' + shift.toFixed(1) + 'px)';
		}
		ticking = false;
	}
	window.addEventListener('scroll', function () {
		if (!ticking) {
			window.requestAnimationFrame(update);
			ticking = true;
		}
	}, { passive: true });
	update();
})();

/* booking form */
(function () {
	var form = document.getElementById('appointmentForm');
	var success = document.getElementById('formSuccess');
	var wrap = document.getElementById('bookingForm');
	if (!form || !success || !wrap) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}
		wrap.classList.add('is-submitted');
		success.classList.add('is-visible');
	});
})();
