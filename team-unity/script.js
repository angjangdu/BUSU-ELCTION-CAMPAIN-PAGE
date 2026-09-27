const candidates = [
    {
        id: 'samaina',
        name: 'SAMAINA KHAKLARY',
        position: 'President',
        image: 'images/candidates/samaina.jpg',
        about: '[Candidate biography]',
        academic: '[Information]',
        experience: '[Information]',
        priorities: '[Information]'
    },
    {
        id: 'amrit',
        name: 'AMRIT BORO',
        position: 'General Secretary',
        image: 'images/candidates/amrit.jpg',
        about: '[Candidate biography]',
        academic: '[Information]',
        experience: '[Information]',
        priorities: '[Information]'
    },
    {
        id: 'biki',
        name: 'BIKI MUSHAHARY',
        position: 'Assistant General Secretary',
        image: 'images/candidates/biki.jpg',
        about: '[Candidate biography]',
        academic: '[Information]',
        experience: '[Information]',
        priorities: '[Information]'
    },
    {
        id: 'pungkha',
        name: 'PUNGKHA BASUMATARY',
        position: 'Secretary, Major Games',
        image: 'images/candidates/pungkha.jpg',
        about: '[Candidate biography]',
        academic: '[Information]',
        experience: '[Information]',
        priorities: '[Information]'
    },
    {
        id: 'nikita',
        name: 'NIKITA BORO',
        position: 'Secretary, Minor Games',
        image: 'images/candidates/nikita.jpg',
        about: '[Candidate biography]',
        academic: '[Information]',
        experience: '[Information]',
        priorities: '[Information]'
    },
    {
        id: 'sunil',
        name: 'SUNIL DAIMARI',
        position: 'Secretary, Cultural Activities',
        team: 'Team Unity',
        motto: '"Unity in Diversity"',
        image: 'images/candidates/sunil-daimari.jpg',
        about: '[Biography will be added later]',
        vision: [
            {
                number: '01',
                title: 'BU Cultural Workshop Series',
                description: 'Organize hands-on cultural workshops called BU Cultural Workshop Series by inviting experienced artists, performers and practitioners to train students in Music, Dance, Song etc.'
            },
            {
                number: '02',
                title: 'Musical Instruments',
                description: 'Provide new musical instruments to promote interested students in music.'
            },
            {
                number: '03',
                title: 'Monthly Cultural Events',
                description: 'Organize monthly cultural events to showcase the diverse and rich cultural life of the University.'
            },
            {
                number: '04',
                title: 'Equal and Fair Opportunities',
                description: 'Ensure equal and fair opportunities and make cultural activities open and accessible to all departments.'
            },
            {
                number: '05',
                title: 'BU Cultural Club',
                description: 'Establish a University Cultural Club (BU Cultural Club) — "One Club, Many Culture, One Campus."'
            }
        ],
        academic: '[Information will be added]',
        experience: '[Information will be added]',
        priorities: '[Information will be added]'
    },
    {
        id: 'mijing',
        name: 'MIJING DAIMARI',
        position: 'Literary Secretary',
        image: 'images/candidates/mijing.jpg',
        about: '[Candidate biography]',
        academic: '[Information]',
        experience: '[Information]',
        priorities: '[Information]'
    },
    {
        id: 'jwngkhwl',
        name: 'JWNGKHWL BORO',
        position: 'Secretary, Boys\' Common Room',
        image: 'images/candidates/jwngkhwl.jpg',
        about: '[Candidate biography]',
        academic: '[Information]',
        experience: '[Information]',
        priorities: '[Information]'
    }
];

const visionItems = [
    {
        title: 'ACADEMIC DEVELOPMENT',
        description: '[Description]',
        icon: '📚'
    },
    {
        title: 'STUDENT WELFARE',
        description: '[Description]',
        icon: '🎓'
    },
    {
        title: 'SPORTS',
        description: '[Description]',
        icon: '⚽'
    },
    {
        title: 'CULTURAL ACTIVITIES',
        description: '[Description]',
        icon: '🎭'
    },
    {
        title: 'LITERARY ACTIVITIES',
        description: '[Description]',
        icon: '✍️'
    },
    {
        title: 'CAMPUS INFRASTRUCTURE',
        description: '[Description]',
        icon: '🏗️'
    },
    {
        title: 'TECHNOLOGY',
        description: '[Description]',
        icon: '💻'
    },
    {
        title: 'STUDENT REPRESENTATION',
        description: '[Description]',
        icon: '🗣️'
    }
];

const manifestoCategories = [
    {
        title: 'Academic',
        content: '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Student Welfare',
        content: '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Sports',
        content: '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Culture',
        content: `
            <div class="manifesto-detail">
                <article class="manifesto-item">
                    <div class="manifesto-item__number">01</div>
                    <div class="manifesto-item__content">
                        <h4 class="manifesto-item__title">BU Cultural Workshop Series</h4>
                        <p class="manifesto-item__desc">Organize hands-on cultural workshops called BU Cultural Workshop Series by inviting experienced artists, performers and practitioners to train students in Music, Dance, Song etc.</p>
                    </div>
                </article>
                <article class="manifesto-item">
                    <div class="manifesto-item__number">02</div>
                    <div class="manifesto-item__content">
                        <h4 class="manifesto-item__title">Musical Instruments</h4>
                        <p class="manifesto-item__desc">Provide new musical instruments to promote interested students in music.</p>
                    </div>
                </article>
                <article class="manifesto-item">
                    <div class="manifesto-item__number">03</div>
                    <div class="manifesto-item__content">
                        <h4 class="manifesto-item__title">Monthly Cultural Events</h4>
                        <p class="manifesto-item__desc">Organize monthly cultural events to showcase the diverse and rich cultural life of the University.</p>
                    </div>
                </article>
                <article class="manifesto-item">
                    <div class="manifesto-item__number">04</div>
                    <div class="manifesto-item__content">
                        <h4 class="manifesto-item__title">Equal and Fair Opportunities</h4>
                        <p class="manifesto-item__desc">Ensure equal and fair opportunities and make cultural activities open and accessible to all departments.</p>
                    </div>
                </article>
                <article class="manifesto-item">
                    <div class="manifesto-item__number">05</div>
                    <div class="manifesto-item__content">
                        <h4 class="manifesto-item__title">BU Cultural Club</h4>
                        <p class="manifesto-item__desc">Establish a University Cultural Club (BU Cultural Club) — "One Club, Many Culture, One Campus."</p>
                    </div>
                </article>
            </div>
        `
    },
    {
        title: 'Literary Activities',
        content: '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Infrastructure',
        content: '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Technology',
        content: '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Representation',
        content: '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    }
];

const updates = [
    {
        date: '[DATE]',
        title: '[CAMPAIGN UPDATE TITLE]',
        description: '[CAMPAIGN UPDATE DESCRIPTION]',
        image: 'images/gallery/update1.jpg'
    },
    {
        date: '[DATE]',
        title: '[CAMPAIGN UPDATE TITLE]',
        description: '[CAMPAIGN UPDATE DESCRIPTION]',
        image: 'images/gallery/update2.jpg'
    },
    {
        date: '[DATE]',
        title: '[CAMPAIGN UPDATE TITLE]',
        description: '[CAMPAIGN UPDATE DESCRIPTION]',
        image: 'images/gallery/update3.jpg'
    },
    {
        date: '[DATE]',
        title: '[CAMPAIGN UPDATE TITLE]',
        description: '[CAMPAIGN UPDATE DESCRIPTION]',
        image: 'images/gallery/update4.jpg'
    },
    {
        date: '[DATE]',
        title: '[CAMPAIGN UPDATE TITLE]',
        description: '[CAMPAIGN UPDATE DESCRIPTION]',
        image: 'images/gallery/update5.jpg'
    },
    {
        date: '[DATE]',
        title: '[CAMPAIGN UPDATE TITLE]',
        description: '[CAMPAIGN UPDATE DESCRIPTION]',
        image: 'images/gallery/update6.jpg'
    }
];

const galleryImages = {
    campaign: [
        { src: 'images/gallery/campaign1.jpg', alt: 'Campaign event', caption: 'Campaign Rally' },
        { src: 'images/gallery/campaign2.jpg', alt: 'Team meeting', caption: 'Team Strategy Session' },
        { src: 'images/gallery/campaign3.jpg', alt: 'Student interaction', caption: 'Student Outreach' },
        { src: 'images/gallery/campaign4.jpg', alt: 'Campaign poster', caption: 'Campaign Materials' }
    ],
    candidates: [
        { src: 'images/candidates/samaina.jpg', alt: 'Samaina Khaklary', caption: 'Samaina Khaklary - President' },
        { src: 'images/candidates/amrit.jpg', alt: 'Amrit Boro', caption: 'Amrit Boro - General Secretary' },
        { src: 'images/candidates/biki.jpg', alt: 'Biki Mushahary', caption: 'Biki Mushahary - Asst. General Secretary' },
        { src: 'images/candidates/pungkha.jpg', alt: 'Pungkha Basumatary', caption: 'Pungkha Basumatary - Sec. Major Games' },
        { src: 'images/candidates/nikita.jpg', alt: 'Nikita Boro', caption: 'Nikita Boro - Sec. Minor Games' },
        { src: 'images/candidates/sunil-daimari.jpg', alt: 'Sunil Daimari - Secretary, Cultural Activities, Team Unity', caption: 'Sunil Daimari - Secretary, Cultural Activities' },
        { src: 'images/candidates/mijing.jpg', alt: 'Mijing Daimari', caption: 'Mijing Daimari - Literary Secretary' },
        { src: 'images/candidates/jwngkhwl.jpg', alt: 'Jwngkhwl Boro', caption: 'Jwngkhwl Boro - Sec. Boys\' Common Room' }
    ],
    events: [
        { src: 'images/gallery/event1.jpg', alt: 'Event 1', caption: 'Campaign Launch Event' },
        { src: 'images/gallery/event2.jpg', alt: 'Event 2', caption: 'Student Town Hall' },
        { src: 'images/gallery/event3.jpg', alt: 'Event 3', caption: 'Youth Convention' },
        { src: 'images/gallery/event4.jpg', alt: 'Event 4', caption: 'Community Outreach' }
    ],
    campus: [
        { src: 'images/campus.jpg', alt: 'Bodoland University Campus', caption: 'Bodoland University Campus' },
        { src: 'images/gallery/campus1.jpg', alt: 'Campus view 1', caption: 'University Library' },
        { src: 'images/gallery/campus2.jpg', alt: 'Campus view 2', caption: 'Student Center' },
        { src: 'images/gallery/campus3.jpg', alt: 'Campus view 3', caption: 'Sports Complex' }
    ]
};

let currentLightboxIndex = 0;
let currentLightboxCategory = 'campaign';
let updatesShown = 3;

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSmoothScroll();
    initCandidateCards();
    initVisionCards();
    initManifestoAccordion();
    initUpdates();
    initGallery();
    initBackToTop();
    initScrollReveal();
    initContactForm();
    initCurrentYear();
    initImageErrorHandling();
});

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');

    navToggle.addEventListener('click', function() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                target.focus({ preventScroll: true });
            }
        });
    });
}

function initCandidateCards() {
    const grid = document.getElementById('candidatesGrid');
    if (!grid) return;

    grid.innerHTML = candidates.map(candidate => `
        <article class="candidate-card" role="listitem">
            <div class="candidate-card__image">
                <img src="${candidate.image}" alt="${candidate.name} - ${candidate.position}, ${candidate.team || 'Team Unity'}" loading="lazy" class="candidate-card__img">
                <div class="candidate-card__placeholder" aria-hidden="true">${candidate.name.charAt(0)}</div>
            </div>
            <div class="candidate-card__content">
                <h3 class="candidate-card__name">${candidate.name}</h3>
                <p class="candidate-card__position">${candidate.position}</p>
                ${candidate.team ? `<p class="candidate-card__team">${candidate.team}</p>` : ''}
                <button class="btn btn--primary candidate-card__btn" data-candidate="${candidate.id}" aria-label="View ${candidate.name}'s profile">View Profile</button>
            </div>
        </article>
    `).join('');

    document.querySelectorAll('.candidate-card__btn').forEach(btn => {
        btn.addEventListener('click', function() {
            openCandidateModal(this.dataset.candidate);
        });
    });

    document.querySelectorAll('.candidate-card__img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'flex';
        });
        img.addEventListener('load', function() {
            this.nextElementSibling.style.display = 'none';
        });
    });
}

function initVisionCards() {
    const grid = document.getElementById('visionGrid');
    if (!grid) return;

    grid.innerHTML = visionItems.map(item => `
        <article class="vision-card">
            <div class="vision-card__icon" aria-hidden="true">${item.icon}</div>
            <h3 class="vision-card__title">${item.title}</h3>
            <p class="vision-card__desc">${item.description}</p>
        </article>
    `).join('');
}

function initManifestoAccordion() {
    const container = document.getElementById('manifestoAccordion');
    if (!container) return;

    container.innerHTML = manifestoCategories.map((category, index) => `
        <article class="accordion__item" data-category="${category.title.toLowerCase().replace(/\s+/g, '-')}">
            <button class="accordion__header" aria-expanded="false" aria-controls="accordion-content-${index}">
                <span class="accordion__title">${category.title}</span>
                <svg class="accordion__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="accordion__content" id="accordion-content-${index}" role="region">
                <div class="accordion__content-inner">
                    ${category.content}
                </div>
            </div>
        </article>
    `).join('');

    document.querySelectorAll('.accordion__header').forEach(header => {
        header.addEventListener('click', function() {
            const item = this.closest('.accordion__item');
            const content = item.querySelector('.accordion__content');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion__item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion__header').setAttribute('aria-expanded', 'false');
                i.querySelector('.accordion__content').style.maxHeight = '0';
            });

            if (!isActive) {
                item.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

function initUpdates() {
    const grid = document.getElementById('updatesGrid');
    const loadMoreBtn = document.getElementById('loadMoreUpdates');
    if (!grid) return;

    function renderUpdates() {
        const visibleUpdates = updates.slice(0, updatesShown);
        grid.innerHTML = visibleUpdates.map(update => `
            <article class="update-card">
                <div class="update-card__image">
                    <img src="${update.image}" alt="" loading="lazy" class="update-card__img">
                    <div class="update-card__placeholder" aria-hidden="true">UPDATE IMAGE</div>
                </div>
                <div class="update-card__content">
                    <div class="update-card__meta">
                        <time class="update-card__date" datetime="${update.date}">${update.date}</time>
                    </div>
                    <h3 class="update-card__title">${update.title}</h3>
                    <p class="update-card__desc">${update.description}</p>
                </div>
            </article>
        `).join('');

        document.querySelectorAll('.update-card__img').forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                this.nextElementSibling.style.display = 'flex';
            });
        });
    }

    renderUpdates();

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            updatesShown += 3;
            renderUpdates();

            if (updatesShown >= updates.length) {
                this.style.display = 'none';
            }
        });

        if (updates.length <= 3) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

function initGallery() {
    const tabs = document.querySelectorAll('.gallery-tab');
    const panels = document.querySelectorAll('.gallery-panel');

    function renderGallery(category) {
        const panel = document.getElementById(`panel-${category}`);
        if (!panel) return;

        const images = galleryImages[category] || [];
        panel.innerHTML = images.map((img, index) => `
            <figure class="gallery-item" data-index="${index}" data-category="${category}" tabindex="0" role="button" aria-label="View ${img.caption} in full size">
                <img src="${img.src}" alt="${img.alt}" loading="lazy" class="gallery-item__img">
                <div class="gallery-item__placeholder" aria-hidden="true">${img.caption}</div>
                <figcaption class="gallery-item__caption" style="position:absolute;bottom:0;left:0;right:0;padding:var(--space-sm);background:linear-gradient(transparent,rgba(0,0,0,0.7));color:white;font-size:var(--font-size-sm);">${img.caption}</figcaption>
            </figure>
        `).join('');

        panel.querySelectorAll('.gallery-item__img').forEach(img => {
            img.addEventListener('error', function() {
                this.style.display = 'none';
                this.nextElementSibling.style.display = 'flex';
            });
        });

        panel.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                openLightbox(this.dataset.category, parseInt(this.dataset.index));
            });
            item.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(this.dataset.category, parseInt(this.dataset.index));
                }
            });
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => {
                t.setAttribute('aria-selected', 'false');
            });
            panels.forEach(p => p.hidden = true);

            this.setAttribute('aria-selected', 'true');
            const panelId = this.getAttribute('aria-controls');
            document.getElementById(panelId).hidden = false;
            currentLightboxCategory = panelId.replace('panel-', '');
        });
    });

    renderGallery('campaign');
}

function openCandidateModal(candidateId) {
    const candidate = candidates.find(c => c.id === candidateId);
    if (!candidate) return;

    const modal = document.getElementById('candidateModal');
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalPosition = document.getElementById('modalPosition');
    const modalTeam = document.getElementById('modalTeam');
    const modalMotto = document.getElementById('modalMotto');
    const modalAbout = document.getElementById('modalAbout');
    const modalAcademic = document.getElementById('modalAcademic');
    const modalExperience = document.getElementById('modalExperience');
    const modalPriorities = document.getElementById('modalPriorities');
    const modalVisionSection = document.getElementById('modalVisionSection');
    const modalVision = document.getElementById('modalVision');

    modalImage.src = candidate.image;
    modalImage.alt = `${candidate.name} - ${candidate.position}, ${candidate.team || 'Team Unity'}`;
    modalName.textContent = candidate.name;
    modalPosition.textContent = candidate.position;
    modalTeam.textContent = candidate.team || 'Team Unity';
    modalMotto.textContent = candidate.motto || '';
    modalAbout.textContent = candidate.about;
    modalAcademic.textContent = candidate.academic;
    modalExperience.textContent = candidate.experience;
    modalPriorities.textContent = candidate.priorities;

    if (candidate.vision && candidate.vision.length > 0) {
        modalVisionSection.hidden = false;
        modalVision.innerHTML = candidate.vision.map(item => `
            <div class="modal__vision-item">
                <span class="modal__vision-number">${item.number}</span>
                <div class="modal__vision-content">
                    <h4 class="modal__vision-title">${item.title}</h4>
                    <p class="modal__vision-desc">${item.description}</p>
                </div>
            </div>
        `).join('');
    } else {
        modalVisionSection.hidden = true;
        modalVision.innerHTML = '';
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('modalClose');
    closeBtn.focus();

    modalImage.addEventListener('error', function() {
        this.style.display = 'none';
    });

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = '';
        modalImage.src = '';
    }

    function handleOverlayClick(e) {
        if (e.target === modal.querySelector('.modal__overlay')) {
            closeModal();
        }
    }

    function handleEscape(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }

    closeBtn.addEventListener('click', closeModal, { once: true });
    modal.querySelector('.modal__overlay').addEventListener('click', handleOverlayClick, { once: true });
    document.addEventListener('keydown', handleEscape, { once: true });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    }, { once: true });
}

function openLightbox(category, index) {
    currentLightboxCategory = category;
    currentLightboxIndex = index;

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const images = galleryImages[category];

    lightboxImage.src = images[index].src;
    lightboxImage.alt = images[index].alt;
    lightboxCaption.textContent = images[index].caption;

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('lightboxClose');
    closeBtn.focus();

    lightboxImage.addEventListener('error', function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%230b1f3a" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16"%3EImage not available%3C/text%3E%3C/svg%3E';
    });

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = '';
        lightboxImage.src = '';
    }

    function showImage(newIndex) {
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        currentLightboxIndex = newIndex;
        lightboxImage.src = images[newIndex].src;
        lightboxImage.alt = images[newIndex].alt;
        lightboxCaption.textContent = images[newIndex].caption;
    }

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showImage(currentLightboxIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showImage(currentLightboxIndex + 1);
        }
    }

    function handlePrevClick() {
        showImage(currentLightboxIndex - 1);
    }

    function handleNextClick() {
        showImage(currentLightboxIndex + 1);
    }

    function handleOverlayClick(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    }

    closeBtn.addEventListener('click', closeLightbox, { once: true });
    document.getElementById('lightboxPrev').addEventListener('click', handlePrevClick);
    document.getElementById('lightboxNext').addEventListener('click', handleNextClick);
    document.addEventListener('keydown', handleKeydown);
    lightbox.addEventListener('click', handleOverlayClick);
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', throttle(function() {
        if (window.scrollY > 300) {
            backToTop.hidden = false;
            requestAnimationFrame(() => backToTop.classList.add('visible'));
        } else {
            backToTop.classList.remove('visible');
            setTimeout(() => { backToTop.hidden = true; }, 300);
        }
    }, 100));

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header, .value-card, .candidate-card, .vision-card, .accordion__item, .update-card, .gallery-item, .election-card, .contact-info, .contact-form').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        const note = form.querySelector('.form-note');

        const requiredFields = ['name', 'email', 'subject', 'message'];
        let isValid = true;

        requiredFields.forEach(field => {
            const input = form.querySelector(`[name="${field}"]`);
            if (!data[field] || data[field].trim() === '') {
                input.style.borderColor = '#dc3545';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) {
            note.textContent = 'Please fill in all required fields.';
            note.style.color = '#dc3545';
            return;
        }

        if (!isValidEmail(data.email)) {
            const emailInput = form.querySelector('[name="email"]');
            emailInput.style.borderColor = '#dc3545';
            note.textContent = 'Please enter a valid email address.';
            note.style.color = '#dc3545';
            return;
        }

        note.textContent = 'Message sent successfully! We\'ll get back to you soon.';
        note.style.color = '#28a745';
        form.reset();

        setTimeout(() => {
            note.textContent = '';
        }, 5000);
    });

    form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '';
        });
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function initImageErrorHandling() {
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            if (!this.src.includes('data:image/svg+xml')) {
                this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e0e0ec" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%236b6b8a" font-size="14"%3EImage not available%3C/text%3E%3C/svg%3E';
            }
        });
    });
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        img.loading = 'lazy';
    });
} else {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const lazyLoadObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.removeAttribute('loading');
                lazyLoadObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => lazyLoadObserver.observe(img));
}

console.log('BUSU Election 2026 - Team Unity website loaded successfully');