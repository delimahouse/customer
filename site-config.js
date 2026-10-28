/* DeLima House official public-content configuration.
   Edit confirmed business details here before publishing; see LAUNCH_CHECKLIST.md.
   No invented prices, stock counts, opening times, or product claims are included. */
window.DELIMA_CONFIG = Object.freeze({
  brand: 'DeLima House',
  tagline: 'Healthy Living, Everyday',
  launchLocale: 'id',
  whatsapp: '',
  instagramHandle: 'delimahouse.sangatta',
  instagramVerified: false,
  locations: [
    { id:'sangatta', name:'Sangatta', country:'ID', city:'Sangatta', address:'Perum SBE D-5, Sangatta',
      scheduleID:'Senin–Sabtu · mulai 07.30 WITA', scheduleEN:'Mon–Sat · from 07:30 WITA',
      whatsapp:'', status:'listed', mapsQuery:'Perum SBE D-5, Sangatta' }
  ],
  categories: [
    {id:'healthy-drinks', titleID:'Healthy Drinks', titleEN:'Healthy Drinks', descriptionID:'Tanyakan pilihan minuman sesuai menu yang tersedia.', descriptionEN:'Ask about today’s available drinks.', image:'drink-green.webp', accent:'01'},
    {id:'coffee-tea', titleID:'Coffee & Tea', titleEN:'Coffee & Tea', descriptionID:'Temukan pilihan kopi atau teh melalui tim kami.', descriptionEN:'Explore coffee or tea options with our team.', image:'coffee-bar.webp', accent:'02'},
    {id:'food', titleID:'Food & Bites', titleEN:'Food & Bites', descriptionID:'Hubungi kami untuk mengetahui pilihan makanan terkini.', descriptionEN:'Contact us for currently available food options.', image:'food-salad.webp', accent:'03'},
    {id:'community', titleID:'Community & Events', titleEN:'Community & Events', descriptionID:'Cari informasi kegiatan dan program komunitas.', descriptionEN:'Find out about gatherings and community activities.', image:'cafe-community.webp', accent:'04'}
  ],
  /* Add only verified, actually available items. Keep products: [] until real menu is confirmed.
     Product shape: {id:'unique-id', name:'Product Name', nameEN:'English name', category:'healthy-drinks',
       descriptionID:'Verified description', descriptionEN:'Verified English description',
       price:55000, image:'my-real-photo.webp', available:true, sizes:[] }.
     Omit `price` or set null if it has not been confirmed; customers will be invited to inquire.
     Uploaded product photos must accurately depict the product; do not use conceptual photos as proof. */
  products: [],
  // Real testimonials only: obtain explicit permission before publishing.
  // Format: {name:'First name',quote:'Exact approved customer quote',verified:true}
  // Until verified, the testimonial carousel displays clearly labelled empty examples.
  testimonials: [],
  contactEmail: '',
  copyrightYear: 2026
});
