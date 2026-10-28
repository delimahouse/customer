(()=>{'use strict';
const cfg=window.DELIMA_CONFIG;if(!cfg)throw Error('DeLima config missing');
const ROOT=document.body.dataset.root||'.',PAGE=document.body.dataset.page||'home';
const paths={home:'index.html',menu:'menu.html',product:'product.html',story:'story.html',community:'community.html',locations:'locations.html',contact:'contact.html',privacy:'privacy.html'};
const path=(p)=>ROOT+'/'+(paths[p]||paths.home);
const img=(x)=>ROOT+'/'+encodeURIComponent(x);
const clean=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const getStore=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key));return v===null?fallback:v}catch{return fallback}};
const putStore=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch{}};
const dict={
  "id": {
    "home": "Beranda",
    "contact": "Kontak",
    "ready": "Siap memilih?",
    "readyDesc": "Hubungi tim kami untuk melihat menu terkini, menanyakan ketersediaan, atau merencanakan kunjungan.",
    "footerAbout": "DeLima House adalah rumah untuk makanan, minuman, dan komunitas yang mendukung kebiasaan baik sehari-hari.",
    "footerExplore": "Jelajahi",
    "footerConnect": "Terhubung",
    "privacy": "Privasi",
    "footerVisit": "Kunjungi",
    "find": "Temukan Lokasi",
    "allRights": "Hak cipta dilindungi.",
    "menu": "Menu",
    "welcome": "Selamat datang di DeLima House",
    "heroTitle": "Everyday wellness,",
    "heroItalic": "made welcoming.",
    "heroDesc": "Makanan, minuman, dan ruang hangat untuk kebiasaan baik setiap hari. Berawal dari D-5, Sangatta.",
    "explore": "Jelajahi Menu",
    "from": "Dari D-5, Sangatta",
    "menuEyebrow": "Pilihan untuk setiap hari",
    "menuTitle": "Temukan sesuatu yang baik.",
    "menuDesc": "Jelajahi kategori kami atau tanyakan daftar menu dan harga terbaru langsung kepada tim DeLima House.",
    "concept": "Suasana DeLima House",
    "storyEyebrow": "Cerita di balik simbol",
    "storyTitle": "Lebih dari sebuah tempat.",
    "storyLead": "Angka 5 menyimpan cerita awal kami di D-5, Sangatta. Bentuk rumah melambangkan kebersamaan, sementara siluet gelas mengingatkan pada akar bisnis makanan dan minuman.",
    "storyDetail": "Identitas yang tumbuh dari satu lokasi, dengan harapan menjadi ruang bagi kebiasaan baik di mana pun DeLima House hadir.",
    "discover": "Selengkapnya",
    "communityDesc": "DeLima House ingin menjadi tempat orang bertemu, belajar, dan membangun kebiasaan baik bersama.",
    "community": "Komunitas",
    "visitTitle": "Come feel at home.",
    "visitDesc": "Temukan tempat kami di Sangatta, atau hubungi tim untuk menanyakan menu dan layanan terbaru.",
    "locationOriginal": "Lokasi pertama",
    "priceAsk": "Tanyakan harga",
    "viewDetails": "Lihat Detail",
    "menuPageTitle": "Our menu, your everyday.",
    "menuPageDesc": "Temukan pilihan makanan dan minuman DeLima House. Gunakan kategori atau pencarian untuk menemukan favoritmu.",
    "categories": "Kategori",
    "search": "Cari kategori atau produk…",
    "all": "Semua",
    "availableProducts": "Pilihan Menu",
    "noMatch": "Tidak ada hasil. Coba kategori lain atau tanyakan menu melalui WhatsApp.",
    "menuInquiry": "Tanyakan Menu Terkini",
    "noProducts": "Informasi menu terkini",
    "noProductsText": "Produk belum tersedia dalam kategori ini.",
    "itemUnknown": "Produk tidak ditemukan",
    "itemUnknownText": "Produk ini mungkin sudah tidak tersedia. Silakan hubungi kami untuk menu terkini.",
    "size": "Pilihan",
    "back": "Kembali",
    "story": "Cerita Kami",
    "storyDesc": "Kami percaya kebiasaan baik terasa lebih mudah ketika ada tempat untuk menikmatinya bersama.",
    "since": "Berawal dari D-5",
    "valuesTitle": "Dibuat untuk keseharian yang lebih baik.",
    "value1": "Pilihan yang relevan",
    "value1text": "Makanan dan minuman dipilih berdasarkan kebutuhan dan informasi produk yang jelas.",
    "value2": "Ruang yang hangat",
    "value2text": "Tempat untuk menikmati waktu, percakapan, dan kebersamaan.",
    "value3": "Komunitas yang tumbuh",
    "value3text": "Kesempatan untuk saling terhubung melalui kegiatan bersama.",
    "storyLine": "A place to belong.",
    "communityTitle": "Better together.",
    "communityCurrent": "Untuk informasi kegiatan komunitas yang sedang tersedia, hubungi tim kami secara langsung.",
    "communityAction": "Tanyakan Kegiatan",
    "noEvent": "Informasi event akan diumumkan melalui kanal resmi setelah dikonfirmasi.",
    "locations": "Lokasi",
    "locTitle": "Find your House.",
    "locDesc": "Temukan lokasi dan informasi layanan DeLima House.",
    "directions": "Petunjuk Arah",
    "copyAddress": "Salin Alamat",
    "contactTitle": "Let’s connect.",
    "contactDesc": "Tanyakan menu, layanan, kunjungan, atau kegiatan DeLima House melalui kanal resmi.",
    "privacyTitle": "Privacy & information.",
    "privacyDesc": "Informasi singkat tentang data yang diproses ketika kamu menggunakan website DeLima House.",
    "privacy1Title": "Penyimpanan di perangkat",
    "privacy2Title": "WhatsApp dan tautan luar",
    "privacy3Title": "Pembayaran dan akun",
    "privacy3": "Website ini tidak memproses pembayaran dan tidak mengharuskan pembuatan akun pelanggan."
  },
  "en": {
    "home": "Home",
    "contact": "Contact",
    "ready": "Ready to say hello?",
    "readyDesc": "Contact our team for the latest menu, availability, and visit information.",
    "footerAbout": "DeLima House is a home for food, drinks, and community supporting positive everyday habits.",
    "footerExplore": "Explore",
    "footerConnect": "Connect",
    "privacy": "Privacy",
    "footerVisit": "Visit",
    "find": "Find Our House",
    "allRights": "All rights reserved.",
    "menu": "Menu",
    "welcome": "Welcome to DeLima House",
    "heroTitle": "Everyday wellness,",
    "heroItalic": "made welcoming.",
    "heroDesc": "Food, drinks, and a welcoming space for everyday wellbeing. Rooted in D-5, Sangatta.",
    "explore": "Explore Menu",
    "from": "From D-5, Sangatta",
    "menuEyebrow": "Curated for your everyday",
    "menuTitle": "Find your everyday favorites.",
    "menuDesc": "Explore our categories or ask our team for the latest menu and pricing.",
    "concept": "DeLima House atmosphere",
    "storyEyebrow": "The story behind our symbol",
    "storyTitle": "More than a place.",
    "storyLead": "The number 5 connects us to our beginnings at D-5, Sangatta. The house shape stands for belonging; the cup reflects our food and drink roots.",
    "storyDetail": "An identity rooted in one place, with room to grow wherever DeLima House goes.",
    "discover": "Discover More",
    "communityDesc": "We want DeLima House to be a place to meet, learn, and build positive habits together.",
    "community": "Community",
    "visitTitle": "Come feel at home.",
    "visitDesc": "Find us in Sangatta, or ask our team about the current menu and services.",
    "locationOriginal": "Our first location",
    "priceAsk": "Ask for price",
    "viewDetails": "View Details",
    "menuPageTitle": "Our menu, your everyday.",
    "menuPageDesc": "Explore food and drinks at DeLima House. Choose a category or search for a favorite.",
    "categories": "Categories",
    "search": "Search categories or products…",
    "all": "All",
    "availableProducts": "Our Menu",
    "noMatch": "No results. Try another category or ask our team on WhatsApp.",
    "menuInquiry": "Ask for Current Menu",
    "noProducts": "Latest menu information",
    "noProductsText": "No products available in this category.",
    "itemUnknown": "Product not found",
    "itemUnknownText": "This item may no longer be available. Contact us for the latest menu.",
    "size": "Option",
    "back": "Back",
    "story": "Our Story",
    "storyDesc": "We believe good habits feel easier when there is a welcoming place to share them.",
    "since": "Rooted in D-5",
    "valuesTitle": "Made for a better everyday.",
    "value1": "Thoughtful choices",
    "value1text": "Food and drinks with clear information and careful selection.",
    "value2": "A welcoming space",
    "value2text": "A place to enjoy moments, conversations and company.",
    "value3": "Growing together",
    "value3text": "Ways to connect through shared activities and experiences.",
    "storyLine": "A place to belong.",
    "communityTitle": "Better together.",
    "communityCurrent": "For confirmed upcoming gatherings, please contact our team directly.",
    "communityAction": "Ask About Events",
    "noEvent": "Events will be published through official channels once confirmed.",
    "locations": "Locations",
    "locTitle": "Find your House.",
    "locDesc": "Explore locations and service information at DeLima House.",
    "directions": "Directions",
    "copyAddress": "Copy Address",
    "contactTitle": "Let’s connect.",
    "contactDesc": "Ask about the menu, services, visits or community happenings using our official channels.",
    "privacyTitle": "Privacy & information.",
    "privacyDesc": "A short explanation of how this website handles data when you browse DeLima House.",
    "privacy1Title": "On-device storage",
    "privacy2Title": "WhatsApp and external sites",
    "privacy3Title": "Payments and accounts",
    "privacy3": "This website does not process payments or require customer accounts."
  }
};
// Public site is read-only. It never reads the administrator's browser data.
const state={lang:getStore('delima-lang',cfg.launchLocale)==='en'?'en':'id',filter:'all',search:'',lastFocus:null};
const t=k=>dict[state.lang][k]||dict.id[k]||k;
const str=(obj,key)=>obj?.[key+(state.lang==='en'?'EN':'ID')]||obj?.[key+'ID']||obj?.[key]||'';
const mapsLink=(query)=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(query||cfg.locations[0]?.address||'Sangatta');
const contactLink=()=>path('contact');
const askMenu=()=>contactLink();
const externalIcon=icon('external');
function icon(n,size=''){const p={arrow:'<path d="M4 12h16m-7-7 7 7-7 7"/>',external:'<path d="M7 17 17 7M7 7h10v10"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',close:'<path d="M5 5 19 19M19 5 5 19"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>',leaf:'<path d="M20 3C6 3 3 11 3 16a5 5 0 0 0 5 5c5 0 13-3 12-18Z"/><path d="M4 20c4-6 7-9 13-13"/>',house:'<path d="m3 11 9-8 9 8v10h-7v-7h-4v7H3Z"/>',spark:'<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',heart:'<path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8-1c-4 5 2 10 8 15 6-5 12-10 8-15Z"/>',chevron:'<path d="m9 18 6-6-6-6"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18"/>',plus:'<path d="M12 4v16M4 12h16"/>',minus:'<path d="M4 12h16"/>',check:'<path d="m4 12 5 5L20 6"/>',mail:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="m2 7 10 7 10-7"/>'}[n]||pFallback();return `<svg aria-hidden="true" viewBox="0 0 24 24" class="icon ${size}" xmlns="http://www.w3.org/2000/svg">${p}</svg>`}
function pFallback(){return '<circle cx="12" cy="12" r="9"/>'}
function topbar(){const navKeys=['home','menu','story','community','locations','contact'];return `<a class="skip" href="#page">${state.lang==='id'?'Lewati ke konten':'Skip to content'}</a><header class="header"><div class="wrap header-inner"><a href="${path('home')}" class="brand" aria-label="DeLima House — ${t('home')}"><img class="brand-horizontal" src="${img('approved-logo-horizontal.webp')}" alt="DeLima House" width="205" height="84"></a><nav class="nav" aria-label="${state.lang==='id'?'Navigasi utama':'Main navigation'}">${navKeys.map(k=>`<a href="${path(k)}" ${PAGE===k?'aria-current="page"':''}>${t(k)}</a>`).join('')}</nav><div class="header-actions"><button class="lang" type="button" data-action="language" aria-label="${state.lang==='id'?'Change language to English':'Ubah bahasa ke Indonesia'}">${state.lang==='id'?'EN':'ID'}</button><a class="btn btn-gold header-contact" href="${path('contact')}">${t('contact')} ${icon('arrow')}</a><button class="icon-btn hamburger" data-action="mobile-open" aria-label="${state.lang==='id'?'Buka navigasi':'Open menu'}" aria-controls="mobilePanel" aria-expanded="false">${icon('menu')}</button></div></div></header><div class="mobile-overlay" id="mobileOverlay"></div><nav class="mobile-panel" id="mobilePanel" aria-label="${state.lang==='id'?'Navigasi mobile':'Mobile navigation'}" aria-hidden="true"><div class="mobile-panel-top"><img src="${img('approved-logo-horizontal.webp')}" alt="DeLima House" class="mobile-brand"><button class="icon-btn" data-action="mobile-close" aria-label="Close">${icon('close')}</button></div>${navKeys.map(k=>`<a href="${path(k)}" ${PAGE===k?'aria-current="page"':''}>${t(k)}</a>`).join('')}<div class="mobile-menu-cta"><a class="btn btn-gold btn-full" href="${path('contact')}"><span class="cta-label">${t('contact')}</span><span class="cta-arrow">${icon('arrow')}</span></a></div></nav>`}
function footer(){const inst=cfg.instagramVerified&&cfg.instagramHandle?`<a href="https://instagram.com/${encodeURIComponent(cfg.instagramHandle)}" target="_blank" rel="noopener noreferrer">Instagram ${externalIcon}</a>`:'';return `<section class="wrap cta-panel"><div><span class="eyebrow">${t('ready')}</span><h2>A good day starts here.</h2><p>${t('readyDesc')}</p></div><a class="btn btn-gold" href="${path('contact')}">${t('contact')} ${icon('arrow')}</a></section><footer class="footer"><div class="wrap"><div class="footer-top"><div><a href="${path('home')}" aria-label="DeLima House"><img class="footer-logo" src="${img('approved-logo-full.webp')}" loading="lazy" alt="DeLima House" width="210" height="312"></a><p class="footer-intro">${t('footerAbout')}</p></div><div><h3>${t('footerExplore')}</h3><div class="footer-links">${['menu','story','community','locations'].map(k=>`<a href="${path(k)}">${t(k)}</a>`).join('')}</div></div><div><h3>${t('footerConnect')}</h3><div class="footer-links"><a href="${path('contact')}">${t('contact')}</a>${inst}<a href="${path('privacy')}">${t('privacy')}</a></div></div><div><h3>${t('footerVisit')}</h3><div class="footer-links"><span>${clean(cfg.locations[0].address)}</span><span>${clean(str(cfg.locations[0],'schedule'))}</span><a href="${path('locations')}">${t('find')} ${icon('arrow')}</a></div></div></div><div class="footer-bottom"><span>© ${cfg.copyrightYear} DeLima House. ${t('allRights')}</span></div></div></footer><div class="mobile-cta"><a class="btn btn-outline" href="${path('menu')}">${t('menu')}</a><a class="btn btn-gold" href="${path('contact')}">${t('contact')} ${icon('arrow')}</a></div>`}
function feature(label,desc,ico){return `<div class="feature"><div class="feature-head">${icon(ico)}<h3>${label}</h3></div><p>${desc}</p></div>`}
function catCards(items=cfg.categories){return items.map(c=>`<a class="category-card" href="${path('menu')}#${encodeURIComponent(c.id)}"><picture><img src="${img(c.image)}" alt="" loading="lazy" width="630" height="800"></picture><div class="shade"></div><div class="content"><h3>${clean(str(c,'title'))} ${icon('arrow')}</h3><p>${clean(str(c,'description'))}</p></div></a>`).join('')}

function testimonials(){
  const verified=Array.isArray(cfg.testimonials)?cfg.testimonials.filter(x=>x&&x.verified===true&&typeof x.quote==='string'&&x.quote.trim()&&typeof x.name==='string'&&x.name.trim()):[];
  const title=state.lang==='id'?'Cerita yang layak dibagikan.':'Stories worth sharing.';
  const subtitle=verified.length?(state.lang==='id'?'Kesan langsung dari pengunjung DeLima House.':'Words from DeLima House visitors.'):(state.lang==='id'?'Ruang untuk pengalaman nyata pelanggan. Ulasan akan ditampilkan setelah diverifikasi dan memperoleh izin.':'A home for real customer experiences. Reviews will appear after verification and permission.');
  const demo=(state.lang==='id'?[
    ['Tentang suasana','Cerita pengalaman berkunjung akan tampil di sini.'],
    ['Tentang menu','Ulasan menu dari pelanggan akan tampil di sini.'],
    ['Tentang pelayanan','Kesan pelayanan yang telah diverifikasi akan tampil di sini.'],
    ['Tentang komunitas','Cerita momen komunitas akan tampil di sini.']
  ]:[
    ['The atmosphere','Verified visitor impressions will appear here.'],
    ['The menu','Verified customer feedback about the menu will appear here.'],
    ['The service','Verified service reviews will appear here.'],
    ['The community','Verified community stories will appear here.']
  ]).map(([name,quote])=>({name,quote,verified:false}));
  const items=verified.length?verified:demo;
  const card=x=>`<article class="testimonial-card ${x.verified?'is-verified':'is-placeholder'}"><div class="testimonial-card-top"><span class="testimonial-emblem" aria-hidden="true">“</span><span class="testimonial-card-kicker">${x.verified?(state.lang==='id'?'Ulasan terverifikasi':'Verified review'):(state.lang==='id'?'Slot testimoni · belum ada ulasan':'Review placeholder · no reviews yet')}</span></div><p>${clean(x.quote)}</p><div class="testimonial-card-bottom"><div><strong>${clean(x.name)}</strong><small>${x.verified?(state.lang==='id'?'Pengunjung DeLima House':'DeLima House visitor'):(state.lang==='id'?'Konten belum diverifikasi':'Not a customer review')}</small></div></div></article>`;
  const cards=items.map(card).join('');
  return `<section class="testimonials-section" aria-labelledby="testimonials-title"><div class="wrap testimonials-head"><div><span class="eyebrow">THE DELIMA STORIES</span><h2 class="heading" id="testimonials-title">${title}</h2><p>${subtitle}</p></div></div><div class="testimonial-marquee" aria-label="${state.lang==='id'?'Kartu cerita pelanggan':'Customer story cards'}"><div class="testimonial-track"><div class="testimonial-set">${cards}</div><div class="testimonial-set" aria-hidden="true">${cards}</div></div></div><div class="wrap testimonial-footnote">${verified.length?'':(state.lang==='id'?'* Kartu ini hanya contoh tata letak, bukan testimoni pelanggan asli.':'* These are layout placeholders, not actual customer testimonials.')}</div></section>`;
}
function home(){return `<section class="hero"><div class="wrap hero-inner"><div class="hero-content"><span class="mini-label">Health · Food · Community</span><div class="eyebrow" style="margin-top:30px">${t('welcome')}</div><h1 class="display">${t('heroTitle')}<br><em class="hero-headline-accent">${t('heroItalic')}</em></h1><p>${t('heroDesc')}</p><div class="hero-buttons"><a href="${path('menu')}" class="btn btn-gold">${t('explore')} ${icon('arrow')}</a><a href="${path('locations')}" class="btn btn-outline">${t('find')} ${icon('pin')}</a></div></div><div class="hero-visual" aria-label="DeLima House Sangatta"><img src="${img('cafe-hero.webp')}" alt="" fetchpriority="high" width="1500" height="1050"><div class="hero-visual-label"><span class="hero-visual-kicker">DeLima House</span><span class="hero-visual-location">Sangatta · D-5</span></div><span class="hero-visual-edition" aria-hidden="true">05</span></div></div><div class="wrap hero-bottom"><span>${t('from')}</span><span class="hero-scroll-hint">${state.lang==='id'?'Temukan suasana kami':'Discover the experience'} <span aria-hidden="true">↓</span></span></div></section><div class="wrap features">${feature(state.lang==='id'?'Pilihan untuk keseharian':'Everyday choices',state.lang==='id'?'Menu yang dapat ditanyakan dan dipilih sesuai kebutuhan.':'Menu options to explore with our team.','leaf')}${feature(state.lang==='id'?'A place to belong':'A place to belong',state.lang==='id'?'Ruang untuk menikmati waktu dan kebersamaan.':'A space for people and conversations.','house')}${feature(state.lang==='id'?'Growing together':'Growing together',state.lang==='id'?'Berawal dari D-5, bertumbuh bersama komunitas.':'Rooted in D-5, growing with the community.','spark')}</div><section class="section wrap"><div class="section-head"><div class="lead"><span class="eyebrow">${t('menuEyebrow')}</span><h2 class="heading">${t('menuTitle')}</h2><p>${t('menuDesc')}</p></div><a class="btn btn-outline" href="${path('menu')}">${t('explore')} ${icon('arrow')}</a></div><div class="category-grid">${catCards()}</div></section><section class="section wrap split"><div class="split-image"><img src="${img('cafe-community.webp')}" alt="${t('concept')}" loading="lazy" width="850" height="800"></div><div class="split-text"><span class="eyebrow">${t('storyEyebrow')}</span><div class="story-number" aria-hidden="true">5.</div><h2 class="heading">${t('storyTitle')}</h2><p>${t('storyLead')}</p><p>${t('storyDetail')}</p><a class="btn btn-outline" href="${path('story')}">${t('discover')} ${icon('arrow')}</a></div></section><section class="strip"><div class="wrap strip-grid"><div><span class="eyebrow dark">${state.lang==='id'?'Komunitas DeLima House':'DeLima House community'}</span><h2>${state.lang==='id'?'Makanan enak. Teman baik. Hari yang baik.':'Good food. Good company. Good days.'}</h2></div><div><p>${t('communityDesc')}</p><a href="${path('community')}" class="btn btn-dark">${t('community')} ${icon('arrow')}</a></div></div></section><section class="section wrap"><div class="section-head"><div><span class="eyebrow">${state.lang==='id'?'Ruang untuk kembali':'A place to return to'}</span><h2 class="heading">${t('visitTitle')}</h2><p>${t('visitDesc')}</p></div></div><div class="photo-mosaic"><img src="${img('lifestyle.webp')}" alt="${t('concept')}" loading="lazy" width="1200" height="790"><div class="small-photos"><img src="${img('cafe-counter.webp')}" alt="${t('concept')}" loading="lazy" width="900" height="850"><img src="${img('menu-still.webp')}" alt="${t('concept')}" loading="lazy" width="1200" height="820"></div></div></section>${testimonials()}<section class="section wrap" style="padding-top:20px"><div class="location-banner"><div class="location-info"><span class="eyebrow">${t('locationOriginal')}</span><h3>DeLima House<br>Sangatta</h3><div class="meta">${icon('pin')} ${clean(cfg.locations[0].address)}</div><div class="meta">${icon('clock')} ${clean(str(cfg.locations[0],'schedule'))}</div><p>${state.lang==='id'?'Temukan lokasi kami dan hubungi tim untuk memastikan informasi kunjungan terbaru.':'Find our location and confirm the latest visit information with our team.'}</p><a href="${path('locations')}" class="btn btn-gold">${t('find')} ${icon('arrow')}</a></div><img class="location-photo" src="${img('cafe-hero.webp')}" loading="lazy" alt="${t('concept')}" width="1500" height="1050"></div></section>`}
function crumbs(name){return `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${path('home')}">${t('home')}</a>${icon('chevron')}<span aria-current="page">${name}</span></nav>`}
function pageHeading(name,title,desc){return `<section class="page-hero"><div class="wrap">${crumbs(name)}<span class="eyebrow">DELIMA HOUSE · ${name.toUpperCase()}</span><h1>${title}</h1><p class="body-large">${desc}</p></div></section>`}
const catalog=()=>Array.isArray(cfg.products)?cfg.products.filter(p=>p.available!==false&&p.id&&p.name):[];
const productImage=(p)=>img(p.image||'approved-logo-full.webp');
function productCard(p){const price=Number.isFinite(p.price)&&p.price>=0?money(p.price):t('priceAsk');return `<article class="product-card"><a class="product-photo" href="${path('product')}?id=${encodeURIComponent(p.id)}"><img src="${productImage(p)}" alt="${clean(p.name)}" loading="lazy"></a><div class="product-card-body"><span class="eyebrow">${clean(str(cfg.categories.find(c=>c.id===p.category),'title')||p.category)}</span><h3>${clean(state.lang==='en'&&p.nameEN?p.nameEN:p.name)}</h3><p>${clean(str(p,'description'))}</p><div class="product-card-bottom"><span class="product-price">${price}</span><a class="btn btn-outline btn-small" href="${path('product')}?id=${encodeURIComponent(p.id)}">${t('viewDetails')} ${icon('arrow')}</a></div></div></article>`}
function menu(){return pageHeading(t('menu'),t('menuPageTitle'),t('menuPageDesc'))+`<section class="content-section wrap"><div class="menu-head"><span class="eyebrow">${t('categories')}</span><label class="menu-search">${icon('search')}<span class="visually-hidden">${t('search')}</span><input type="search" id="menuSearch" placeholder="${t('search')}" autocomplete="off"></label></div><div class="filters" id="filters" role="group" aria-label="${t('categories')}"></div><div id="productArea"></div></section>`}
function renderMenuArea(){if(PAGE!=='menu')return;const search=(state.search||'').toLocaleLowerCase().trim();document.getElementById('filters').innerHTML=`<button class="chip ${state.filter==='all'?'active':''}" data-action="filter" data-value="all" aria-pressed="${state.filter==='all'}">${t('all')}</button>`+cfg.categories.map(c=>`<button class="chip ${state.filter===c.id?'active':''}" data-action="filter" data-value="${c.id}" aria-pressed="${state.filter===c.id}">${clean(str(c,'title'))}</button>`).join('');const ps=catalog().filter(p=>(state.filter==='all'||state.filter===p.category)&&(!search||[p.name,p.nameEN,p.descriptionID,p.descriptionEN].join(' ').toLowerCase().includes(search)));const cats=cfg.categories.filter(c=>(state.filter==='all'||state.filter===c.id)&&(!search||[str(c,'title'),str(c,'description')].join(' ').toLowerCase().includes(search)));document.getElementById('productArea').innerHTML=ps.length?`<div class="menu-results"><div class="section-head"><div><span class="eyebrow">DeLima House</span><h2 class="heading">${t('availableProducts')}</h2></div></div><div class="products-grid">${ps.map(productCard).join('')}</div></div>`:!catalog().length?`<div class="menu-results">${cats.length?`<div class="section-head"><div><span class="eyebrow">DeLima House</span><h2 class="heading">${state.lang==='id'?'Jelajahi kategori kami':'Explore our categories'}</h2></div></div><div class="category-grid">${catCards(cats)}</div>`:`<div class="notice">${t('noMatch')}</div>`}<div class="menu-empty"><div><span class="eyebrow">${t('menuInquiry')}</span><h3>${t('noProducts')}</h3><p>${t('noProductsText')}</p><a class="btn btn-gold" href="${path('contact')}">${t('contact')} ${icon('arrow')}</a></div><img src="${img('menu-still.webp')}" alt="${t('concept')}" loading="lazy"></div></div>`:`<div class="notice">${t('noMatch')}</div>`}
function money(n){return new Intl.NumberFormat(state.lang==='id'?'id-ID':'en-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n)}
function product(){const id=new URLSearchParams(location.search).get('id');const p=catalog().find(x=>x.id===id);if(!p)return pageHeading(t('menu'),t('itemUnknown'),t('itemUnknownText'))+`<section class="content-section wrap"><a class="btn btn-gold" href="${path('menu')}">${t('explore')} ${icon('arrow')}</a></section>`;const price=Number.isFinite(p.price)?money(p.price):t('priceAsk');return `<section class="content-section wrap">${crumbs(clean(p.name))}<div class="product-detail"><figure class="detail-visual"><img src="${productImage(p)}" alt="${clean(p.name)}"></figure><div class="detail-info"><span class="eyebrow">${clean(str(cfg.categories.find(c=>c.id===p.category),'title')||'DeLima House')}</span><h1>${clean(state.lang==='en'&&p.nameEN?p.nameEN:p.name)}</h1><p>${clean(str(p,'description'))}</p><h2 class="product-detail-price">${price}</h2>${Array.isArray(p.sizes)&&p.sizes.length?`<p class="fineprint">${t('size')}: ${p.sizes.map(v=>clean(str(v,'name')||v.id)).join(' · ')}</p>`:''}<div class="detail-action"><a class="btn btn-gold" href="${path('contact')}">${t('contact')} ${icon('arrow')}</a><a class="btn btn-outline" href="${path('menu')}">${t('back')} ${icon('chevron')}</a></div></div></div></section>`}
function story(){return pageHeading(t('story'),t('storyTitle'),t('storyDesc'))+`<section class="section wrap split"><div class="split-image brand-story-visual"><img src="${img('approved-logo-full.webp')}" alt="DeLima House — Signature Five House" loading="lazy" style="object-fit:contain;background:#000;min-height:440px"></div><div class="split-text"><span class="eyebrow">${t('storyEyebrow')}</span><div class="story-number">5.</div><h2 class="heading">${t('since')}</h2><p>${t('storyLead')}</p><p>${t('storyDetail')}</p></div></section><section class="section wrap"><span class="eyebrow">What we believe</span><h2 class="heading">${t('valuesTitle')}</h2><div class="values">${[['01',t('value1'),t('value1text')],['02',t('value2'),t('value2text')],['03',t('value3'),t('value3text')]].map(r=>`<div class="value"><strong>${r[0]}</strong><h3>${r[1]}</h3><p>${r[2]}</p></div>`).join('')}</div></section><section class="section wrap split reverse" style="padding-top:10px"><div class="split-image"><img src="${img('cafe-community.webp')}" loading="lazy" alt="${t('concept')}"></div><div class="split-text"><span class="eyebrow">Home, food, community</span><h2 class="heading">${t('storyLine')}</h2><p>${t('communityDesc')}</p><a class="btn btn-outline" href="${path('community')}">${t('community')} ${icon('arrow')}</a></div></section>`}
function community(){return pageHeading(t('community'),t('communityTitle'),t('communityDesc'))+`<section class="content-section wrap"><div class="editorial-cards"><article class="editorial-card"><img src="${img('cafe-community.webp')}" alt="${t('concept')}" loading="lazy"><div class="editorial-card-content"><span class="eyebrow">DeLima House community</span><h3>${state.lang==='id'?'Ruang untuk terhubung':'A space to connect'}</h3><p>${t('communityCurrent')}</p><a class="btn btn-gold" href="${path('contact')}">${t('communityAction')} ${icon('arrow')}</a></div></article><article class="editorial-card"><img src="${img('lifestyle.webp')}" alt="${t('concept')}" loading="lazy"><div class="editorial-card-content"><span class="eyebrow">Everyday wellbeing</span><h3>${state.lang==='id'?'Kebiasaan baik, bersama':'Better habits, together'}</h3><p>${t('noEvent')}</p><a href="${path('contact')}" class="btn btn-outline">${t('contact')} ${icon('arrow')}</a></div></article></div></section>`}
function locations(){return pageHeading(t('locations'),t('locTitle'),t('locDesc'))+`<section class="content-section wrap"><div class="info-grid">${cfg.locations.filter(l=>l.status==='listed').map(l=>`<article class="info-card"><span class="eyebrow">Indonesia location</span><h2>DeLima House ${clean(l.name)}</h2><div class="info-row">${icon('pin')}<span>${clean(l.address)}</span></div><div class="info-row">${icon('clock')}<span>${clean(str(l,'schedule'))}</span></div><div class="detail-action"><a class="btn btn-gold" href="${mapsLink(l.mapsQuery||l.address)}" target="_blank" rel="noopener noreferrer">${t('directions')} ${icon('external')}</a><button class="btn btn-outline" data-action="copyaddress" data-value="${clean(l.address)}">${t('copyAddress')} ${icon('copy')}</button></div></article>`).join('')}<div class="info-card photo-only"><img src="${img('cafe-hero.webp')}" loading="lazy" alt="${t('concept')}"></div></div></section>`}
function contact(){const loc=cfg.locations[0];const wa=String(loc.whatsapp||cfg.whatsapp||'').replace(/\D/g,'');const ig=cfg.instagramVerified&&cfg.instagramHandle?`<a class="btn btn-outline" href="https://instagram.com/${encodeURIComponent(cfg.instagramHandle)}" target="_blank" rel="noopener noreferrer">Instagram ${icon('external')}</a>`:'';const waCTA=wa?`<a class="btn btn-gold" href="https://wa.me/${wa}" target="_blank" rel="noopener noreferrer">WhatsApp ${icon('external')}</a>`:'';return pageHeading(t('contact'),t('contactTitle'),t('contactDesc'))+`<section class="content-section wrap"><div class="info-grid"><article class="info-card"><span class="eyebrow">Sangatta</span><h2>DeLima House</h2><div class="info-row">${icon('pin')}<span>${clean(loc.address)}</span></div><div class="info-row">${icon('clock')}<span>${clean(str(loc,'schedule'))}</span></div><div class="detail-action"><a class="btn btn-gold" href="${mapsLink(loc.mapsQuery||loc.address)}" target="_blank" rel="noopener noreferrer">${t('directions')} ${icon('external')}</a></div></article><article class="info-card"><span class="eyebrow">${t('footerConnect')}</span><h2>${state.lang==='id'?'Hubungi tim kami':'Get in touch'}</h2><p>${state.lang==='id'?'Informasi layanan dan kegiatan dapat ditanyakan melalui kontak resmi yang telah dikonfirmasi.':'For services and events, use a confirmed official contact channel.'}</p><div class="detail-action">${waCTA}${ig}${cfg.contactEmail?`<a class="btn btn-outline" href="mailto:${encodeURIComponent(cfg.contactEmail)}">Email ${icon('mail')}</a>`:''}</div>${!waCTA&&!ig&&!cfg.contactEmail?`<p class="fineprint">${state.lang==='id'?'Kontak online resmi belum tersedia. Silakan kunjungi lokasi untuk informasi terkini.':'Official online contact information is not yet available. Visit our location for current information.'}</p>`:''}</article></div></section>`}
function privacy(){return pageHeading(t('privacy'),t('privacyTitle'),t('privacyDesc'))+`<section class="content-section wrap"><div class="long-text"><h2>${t('privacy1Title')}</h2><p>${state.lang==='id'?'Website informasi ini hanya menyimpan preferensi bahasa pada browser. Tidak ada keranjang, pesanan, atau pembayaran online.':'This informational website saves only your language preference in the browser. There is no cart, ordering, or online payment.'}</p><h2>${t('privacy2Title')}</h2><p>${state.lang==='id'?'Tautan Google Maps dan kontak resmi, jika tersedia, akan membuka layanan pihak ketiga sesuai kebijakan privasi masing-masing.':'Google Maps and official contact links, when available, lead to third-party services governed by their own privacy policies.'}</p><h2>${t('privacy3Title')}</h2><p>${t('privacy3')}</p></div></section>`}

// Motion is enhancement-only: visitors with reduced-motion preferences see all content.
let revealObserver;
function initScrollReveals(){
  revealObserver?.disconnect();
  document.documentElement.classList.remove('motion-ready');
  if(!('IntersectionObserver' in window)||window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)return;
  const nodes=[...document.querySelectorAll('#page .section-head,#page .feature,#page .category-card,#page .split-image,#page .split-text,#page .strip-grid>* ,#page .photo-mosaic>* ,#page .location-banner,#page .info-card,#page .editorial-card,#page .product-card,#page .long-text,#page .testimonial-card,#page .testimonials-head,#siteFooter .cta-panel')];
  nodes.forEach((el,i)=>{el.classList.add('scroll-reveal');el.classList.remove('in-view');el.style.setProperty('--reveal-delay',(i%4)*65+'ms')});
  revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');revealObserver?.unobserve(entry.target)}}),{threshold:.11,rootMargin:'0px 0px -22px 0px'});
  document.documentElement.classList.add('motion-ready');
  nodes.forEach(el=>revealObserver.observe(el));
}
let scrollQueued=false;
function updateScrollDetails(){
  scrollQueued=false;
  const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
  const pct=Math.max(0,Math.min(100,(window.scrollY/max)*100));
  document.documentElement.style.setProperty('--scroll-progress',pct+'%');
  document.getElementById('siteHeader')?.classList.toggle('is-scrolled',window.scrollY>16);
  if(!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches&&window.innerWidth>760){
    const hero=document.querySelector('.hero');
    if(hero){const y=Math.max(-26,Math.min(26,window.scrollY*.035));hero.style.setProperty('--hero-shift',y.toFixed(1)+'px')}
  }
}
window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;window.requestAnimationFrame(updateScrollDetails)}},{passive:true});

function render(){document.documentElement.lang=state.lang;document.getElementById('siteHeader').innerHTML=topbar();document.getElementById('page').innerHTML=({home,menu,product,story,community,locations,contact,privacy}[PAGE]||home)();document.getElementById('siteFooter').innerHTML=footer();initScrollReveals();if(PAGE==='menu'){if(location.hash){const id=decodeURIComponent(location.hash.slice(1));if(cfg.categories.some(c=>c.id===id))state.filter=id}renderMenuArea()}if(PAGE==='product'){const p=catalog().find(x=>x.id===new URLSearchParams(location.search).get('id'));document.title=(p?p.name+' — ':'')+'DeLima House'}else document.title=({home:'DeLima House — Healthy Living, Everyday',menu:t('menu')+' — DeLima House',story:t('story')+' — DeLima House',community:t('community')+' — DeLima House',locations:t('locations')+' — DeLima House',contact:t('contact')+' — DeLima House',privacy:t('privacy')+' — DeLima House'})[PAGE]||'DeLima House'}
let menuOpenScrollY=0;
function menuMobile(open){
  const overlay=document.getElementById('mobileOverlay');
  const p=document.getElementById('mobilePanel');
  if(!overlay||!p)return;
  if(open){
    // Capture the user's position BEFORE the document's scroll lock changes.
    menuOpenScrollY=window.scrollY||document.documentElement.scrollTop||0;
    state.lastFocus=document.activeElement;
  }
  overlay.classList.toggle('open',open);
  p.classList.toggle('open',open);
  p.setAttribute('aria-hidden',String(!open));
  document.querySelector('[data-action="mobile-open"]')?.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('lock',open);
  document.documentElement.classList.toggle('mobile-nav-locked',open);
  if(open){
    p.querySelector('button')?.focus({preventScroll:true});
  }else{
    // focus() with default options can jump to the header on some mobile browsers.
    state.lastFocus?.focus?.({preventScroll:true});
    const targetY=menuOpenScrollY;
    const root=document.documentElement;
    const priorBehavior=root.style.scrollBehavior;
    root.style.scrollBehavior='auto';
    window.scrollTo(0,targetY);
    window.requestAnimationFrame(()=>{
      if(Math.abs(window.scrollY-targetY)>1)window.scrollTo(0,targetY);
      root.style.scrollBehavior=priorBehavior;
    });
  }
}
function trap(e,container){if(e.key!=='Tab')return;const nodes=[...container.querySelectorAll('a[href],button:not([disabled]),input,select,textarea')].filter(x=>x.getClientRects().length);if(!nodes.length)return;const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
async function copy(s){try{await navigator.clipboard.writeText(s)}catch{const e=document.createElement('textarea');e.value=s;document.body.append(e);e.select();document.execCommand('copy');e.remove()}}
const header=document.createElement('div');header.id='siteHeader';const main=document.createElement('main');main.id='page';main.setAttribute('tabindex','-1');const foot=document.createElement('div');foot.id='siteFooter';document.body.replaceChildren(header,main,foot);render();
document.addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const a=b.dataset.action;if(a==='language'){state.lang=state.lang==='id'?'en':'id';putStore('delima-lang',state.lang);render()}else if(a==='mobile-open')menuMobile(true);else if(a==='mobile-close')menuMobile(false);else if(a==='filter'){state.filter=b.dataset.value;renderMenuArea()}else if(a==='copyaddress'){copy(b.dataset.value)}});
document.addEventListener('input',e=>{if(e.target.id==='menuSearch'){state.search=e.target.value;renderMenuArea()}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('mobilePanel')?.classList.contains('open'))menuMobile(false);if(document.getElementById('mobilePanel')?.classList.contains('open'))trap(e,document.getElementById('mobilePanel'))});
document.addEventListener('click',e=>{if(e.target.id==='mobileOverlay')menuMobile(false)});
document.addEventListener('contextmenu',e=>{if(!e.target.closest('input,textarea,[contenteditable="true"]'))e.preventDefault()});
document.addEventListener('dragstart',e=>{if(e.target.closest('img'))e.preventDefault()});
window.addEventListener('hashchange',()=>{if(PAGE==='menu'){const id=decodeURIComponent(location.hash.slice(1));state.filter=cfg.categories.some(c=>c.id===id)?id:'all';renderMenuArea()}});
})();
