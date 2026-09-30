const candidates = [
    {
        id: 'samaina',
        name: 'SAMAINA KHAKLARY',
        position: 'President',
        image: 'images/candidates/samaina-khaklary.jpg',
        achievements: [
            'Former Assistant General Secretary of BOSLIS, Kokrajhar Government College, Kokrajhar.',
            'Vice President of BOSLIS, Bodoland University.'
        ],
        manifesto: [
            'A proper student grievances cell.',
            'Academic Improvement: Extension of library time during examination; More Xerox facilities in each department and hostels; Providing books for UG and PG students in library; Timely results declaration; Lab facilities; Inclusion of more departments.',
            'Clean campus and drinking water facilities both in auditorium and administrative.',
            'More cultural and sports events.',
            'Addressing bus facilities.',
            'Providing facilities for PWD students.',
            'High speed Wi-Fi facilities across campus.',
            'More placement, career counselling and internship help.',
            'Proper functioning of women cell, placement cell, startup cell, entrepreneurship.',
            'Improvement of medical facilities.',
            'Provision of sanitary pads in each department and girls\' hostels.',
            'Installation of street lights (New Deborgaon) and speed breakers in-front of the University gate.'
        ]
    },
    {
        id: 'amrit',
        name: 'AMRIT BORO',
        position: 'General Secretary',
        image: 'images/candidates/amrit-boro.jpg',
        achievements: [
            'Served as Secretary of Minor Games & Sports, BUSU (2025–2026).',
            'Secured 3rd Position in Wushu at the District Level competition organized by Udalguri District Wushu Association, 2017.'
        ],
        manifesto: [
            'Provision of drinking water facilities in the auditorium hall.',
            'Separate washrooms and toilets for male and female in the library.',
            'Installation of two more canteens on campus (including veg canteen).',
            'Organizing academic-related exhibitions in the University, like career counselling programmes.',
            'Installation of CCTV camera in-front of the University gate.',
            'Extension of car parking areas in various departments.',
            'Installation of digital boards in the required classrooms.',
            'Installation of digital notice board & a students\' grievance box in the administrative building.',
            'Installation of ACs in labs and classrooms in the required departments.',
            'Separate office and training facilities for NCC Cadets.',
            'Extension and improvement of transport facilities for students in various areas.',
            'Addressing academic-related issues of students in every section.'
        ]
    },
    {
        id: 'biki',
        name: 'BIKI MUSHAHARY',
        position: 'Assistant General Secretary',
        image: 'images/candidates/biki-mushahary.jpg',
        achievements: [
            'Former General Secretary Zamduar College, Saraibil, 2024–25.',
            'Former General Secretary Zamduar College, Saraibil, 2025–26.',
            'NSS Volunteer at Zamduar College, Saraibil, 2024–25.',
            'NSS Volunteer at Zamduar College, Saraibil, 2025–26.'
        ],
        manifesto: [
            'Improving Wi-Fi connectivity in every department for better academic and research work.',
            'Providing Wi-Fi facilities for both boys and girls hostel.',
            'Providing AC facilities in required departments to create a more comfortable learning environment.',
            'Improving laboratory facilities with better equipments and necessary resources for students.',
            'Working for better infrastructure, safety, cleanliness, and basic facilities across the university.',
            'Ensuring equality and equal opportunities for every student in university activities and decision-making.'
        ]
    },
    {
        id: 'pungkha',
        name: 'PUNGKHA BASUMATARY',
        position: 'Secretary, Major Games',
        image: 'images/candidates/pungkha-basumatary.jpg',
        achievements: [
            'Former Assistant General Secretary of BOSLIS, Kokrajhar University (2023–2024).',
            'Participated Inter-College football tournament Under Kokrajhar University 2023, organised by Reliance foundation.',
            'Participated under-18 inter-college football tournament Under Kokrajhar University (2019), organised by Reliance foundation.',
            'Former monitor at Satish Chandra Basumatary Boys\' Hostel, Kokrajhar University (2023–2024).'
        ],
        manifesto: [
            'Equal access to sports for all girls and boys.',
            'Fair and transparency selection of players for tournaments.',
            'Provision of changing rooms and washrooms in the playground.',
            'Organize and participate Inter-College cricket & football tournament.',
            'Maintaining cleanliness of playground.',
            'Providing seating areas in the university playground.'
        ]
    },
    {
        id: 'nikita',
        name: 'NIKITA BORO',
        position: 'Secretary, Minor Games',
        image: 'images/candidates/nikita-boro.jpg',
        achievements: [
            '1st Prize in 100m, 200m, 400m race in varsity week of Bodoland University, 2026.',
            'Participated in half marathon organised by NCC.',
            'Participated in Inter College Competition of Kabaddi in Bijni College.',
            'National Sports Day Kabaddi Winner 2026.'
        ],
        manifesto: [
            'Installation of a new badminton court near the girls\' hostel.',
            'Formation of a University Kabaddi team to represent Bodoland University in inter-University Competition.',
            'Installation of an additional throwball court within the University campus.',
            'Improvement of water drainage facilities around the basketball court to ensure proper use of the court, especially during the rainy season.',
            'Regular departmental sports competitions every month, including kabaddi, basketball and badminton to encourage greater participation among students.',
            'Repair and upgrade University gym equipment and facilities for a better workout environment.'
        ]
    },
    {
        id: 'sunil',
        name: 'SUNIL DAIMARI',
        position: 'Secretary, Cultural Activities',
        image: 'images/candidates/sunil-daimari.jpg',
        achievements: [],
        manifesto: [
            'Organize hands-on cultural workshops called BU Cultural Workshop Series by inviting experienced artists, performers and practitioners to train students in Music, Dance, Song etc.',
            'Provide new Musical instruments to promote interested students in music.',
            'Provision of permanent Musical instruments.',
            'Cultural workshop will be extended for 15 days.',
            'Equal and fair opportunities, and make cultural activities open and accessible to all departments.',
            'Organize frequent cultural events to showcase the diverse and rich culture of our university.',
            'Bringing musical events.',
            'All traditional dress will be provided to perform at official events.'
        ]
    },
    {
        id: 'mijing',
        name: 'MIJING DAIMARI',
        position: 'Literary Secretary',
        image: 'images/candidates/mijing-daimari.jpg',
        achievements: [
            'Former General Secretary Rowta Degree College Students\' Union, 2023–2024.',
            'Former Cultural Secretary Rowta Degree College Students\' Union, 2022–2023.'
        ],
        manifesto: [
            'Organizing annual literary festival.',
            'Open mic, poetry sessions & workshops - a stage for poets, writers and speakers.',
            'Installation of a new big annual wall magazine.',
            'Implementation of ISSN tag in our Bodoland University annual magazine - Horizon.',
            'Equal opportunity for every department, every students.'
        ]
    },
    {
        id: 'jwngkhwl',
        name: 'JWNGKHWL BORO',
        position: 'Secretary, Boys\' Common Room',
        image: 'images/candidates/jwngkhwl-boro.jpg',
        achievements: [
            'Former President of BOSLIS Darrang College Tezpur, 2022–23.',
            'Former General Secretary of BOSLIS Darrang College Tezpur, 2023–24.'
        ],
        manifesto: [
            'Better and well-maintained Boys\' Common Room Building.',
            'Providing indoor games materials such as carrom, chess, ludo and table tennis.',
            'Proper maintenance and cleanliness.',
            'Providing books, newspapers, and materials related to current affairs.',
            'Improving the common room facilities for study, recreation and discussion.'
        ]
    }
];

const visionItems = [
    {
        title: 'ACADEMIC DEVELOPMENT',
        description: 'Enhancing academic facilities, library resources, and timely results for student success.',
        icon: '📚'
    },
    {
        title: 'STUDENT WELFARE',
        description: 'Improving medical facilities, drinking water, sanitation, and support for PWD students.',
        icon: '🎓'
    },
    {
        title: 'SPORTS',
        description: 'Equal access to sports, fair selections, better infrastructure, and regular competitions.',
        icon: '⚽'
    },
    {
        title: 'CULTURAL ACTIVITIES',
        description: 'Workshops, instruments, events, and equal opportunities to celebrate diversity.',
        icon: '🎭'
    },
    {
        title: 'LITERARY ACTIVITIES',
        description: 'Annual literary festival, open mic sessions, wall magazine, and ISSN for Horizon.',
        icon: '✍️'
    },
    {
        title: 'CAMPUS INFRASTRUCTURE',
        description: 'Clean campus, parking, canteens, CCTV, ACs, and improved transport facilities.',
        icon: '🏗️'
    },
    {
        title: 'TECHNOLOGY',
        description: 'High-speed Wi-Fi across campus, digital boards, and digital notice boards.',
        icon: '💻'
    },
    {
        title: 'STUDENT REPRESENTATION',
        description: 'Grievance cells, student voice in decision-making, and transparent governance.',
        icon: '🗣️'
    }
];

const manifestoCategories = [
    {
        title: 'President',
        content: candidates.find(c => c.id === 'samaina')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[COMING SOON]</p>'
    },
    {
        title: 'General Secretary',
        content: candidates.find(c => c.id === 'amrit')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Assistant General Secretary',
        content: candidates.find(c => c.id === 'biki')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Secretary, Major Games',
        content: candidates.find(c => c.id === 'pungkha')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Secretary, Minor Games',
        content: candidates.find(c => c.id === 'nikita')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Secretary, Cultural Activities',
        content: candidates.find(c => c.id === 'sunil')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Literary Secretary',
        content: candidates.find(c => c.id === 'mijing')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
    },
    {
        title: 'Secretary, Boys\' Common Room',
        content: candidates.find(c => c.id === 'jwngkhwl')?.manifesto.map(item => `<p>${item}</p>`).join('') || '<p>[OBJECTIVE WILL BE ADDED HERE]</p>'
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
        { src: 'images/gallery/campaign3.jpg', alt: 'Student interaction', caption: 'Student Outreach' },
        { src: 'images/gallery/campaign4.jpg', alt: 'Campaign poster', caption: 'Campaign Materials' }
    ],
    candidates: [
        { src: 'images/candidates/samaina-khaklary.jpg', alt: 'Samaina Khaklary', caption: 'Samaina Khaklary - President' },
        { src: 'images/candidates/amrit-boro.jpg', alt: 'Amrit Boro', caption: 'Amrit Boro - General Secretary' },
        { src: 'images/candidates/biki-mushahary.jpg', alt: 'Biki Mushahary', caption: 'Biki Mushahary - Asst. General Secretary' },
        { src: 'images/candidates/pungkha-basumatary.jpg', alt: 'Pungkha Basumatary', caption: 'Pungkha Basumatary - Sec. Major Games' },
        { src: 'images/candidates/nikita-boro.jpg', alt: 'Nikita Boro', caption: 'Nikita Boro - Sec. Minor Games' },
        { src: 'images/candidates/sunil-daimari.jpg', alt: 'Sunil Daimari', caption: 'Sunil Daimari - Sec. Cultural Activities' },
        { src: 'images/candidates/mijing-daimari.jpg', alt: 'Mijing Daimari', caption: 'Mijing Daimari - Literary Secretary' },
        { src: 'images/candidates/jwngkhwl-boro.jpg', alt: 'Jwngkhwl Boro', caption: 'Jwngkhwl Boro - Sec. Boys\' Common Room' }
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
                <img src="${candidate.image}" alt="${candidate.name} \u2014 ${candidate.position}" loading="lazy" class="candidate-card__img">
                <div class="candidate-card__placeholder" aria-hidden="true">${candidate.name.charAt(0)}</div>
            </div>
            <div class="candidate-card__content">
                <h3 class="candidate-card__name">${candidate.name}</h3>
                <p class="candidate-card__position">${candidate.position}</p>
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
    const modalAchievementsSection = document.getElementById('modalAchievementsSection');
    const modalAchievements = document.getElementById('modalAchievements');
    const modalManifesto = document.getElementById('modalManifesto');

    modalImage.src = candidate.image;
    modalImage.alt = `${candidate.name} - ${candidate.position}`;
    modalName.textContent = candidate.name;
    modalPosition.textContent = candidate.position;

    if (candidate.achievements && candidate.achievements.length > 0) {
        modalAchievementsSection.hidden = false;
        modalAchievements.innerHTML = candidate.achievements.map(item => `<li>${item}</li>`).join('');
    } else {
        modalAchievementsSection.hidden = true;
        modalAchievements.innerHTML = '';
    }

    modalManifesto.innerHTML = candidate.manifesto.map(item => `<li>${item}</li>`).join('');

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