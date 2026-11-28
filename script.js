 
    // =========================================================================
    // 1. SUPABASE CONFIGURATION & INITIALIZATION
    // =========================================================================
    const SUPABASE_URL = 'https://npqqmocpmamexhkcgmyc.supabase.co';
    const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_szSUcdBKHz20ZOl3TnRPYw_rYnGYJ66';
    const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

    // =========================================================================
    // 2. DEMO / FALLBACK DATASET (Includes all 12 Blueprint Categories)
    // =========================================================================
    const DEMO_DATA = {
      categories: [
        { id: 'cat-1', name: 'প্রেম', slug: 'prem' },
        { id: 'cat-2', name: 'বিরহ', slug: 'biroho' },
        { id: 'cat-3', name: 'একাকিত্ব', slug: 'ekakitto' },
        { id: 'cat-4', name: 'জীবন', slug: 'jibon' },
        { id: 'cat-5', name: 'প্রকৃতি', slug: 'prokriti' },
        { id: 'cat-6', name: 'অনুপ্রেরণা', slug: 'onuperona' },
        { id: 'cat-7', name: 'অনুভূতি', slug: 'onubhuti' },
        { id: 'cat-8', name: 'স্মৃতি', slug: 'smriti' },
        { id: 'cat-9', name: 'বন্ধুত্ব', slug: 'bondhutto' },
        { id: 'cat-10', name: 'আধ্যাত্মিকতা', slug: 'adhyatmikota' },
        { id: 'cat-11', name: 'সমাজ ও বাস্তবতা', slug: 'somaj-o-bastobota' },
        { id: 'cat-12', name: 'অন্যান্য', slug: 'onnanno' }
      ],
      poems: [
        {
          id: 'demo-poem-1', isDemo: true, title: 'শেষ বিকেলের চিঠি', slug: 'shesh-bikeler-chithi',
          poet_name: 'অরণ্য দেব', category_id: 'cat-1', is_featured: true, views_count: 428,
          created_at: '2026-11-18T10:00:00Z',
          cover_image_url: 'https://placehold.co/600x400/352343/C5A46D?text=%E0%A6%B6%E0%A7%87%E0%A6%B7+%E0%A6%AC%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%B2%E0%A7%87%E0%A6%B0+%E0%A6%9A%E0%A6%BF%E0%A6%A0%E0%A6%BF',
          audio_url: 'demo://ambient-1', audio_duration_sec: 145,
          excerpt: 'জানালার গ্রিলে জমে থাকা নরম রোদ্দুর জানে, কতটা নীরবতা পেরিয়ে তোমার নাম উচ্চারণ করেছি...',
          body: `জানালার গ্রিলে জমে থাকা নরম রোদ্দুর জানে,\nকতটা নীরবতা পেরিয়ে তোমার নাম উচ্চারণ করেছি।\nশহরের কোলাহল যখন সন্ধ্যার চাদরে মুখ ঢাকে,\nতখন এক কাপ চায়ের ধোঁয়ায় ভেসে ওঠে পুরোনো ডাকবাক্স।\n\nতুমি কি আজও বৃষ্টি নামলে বারান্দায় দাঁড়াও?\nনাকি ব্যস্ততার শহরে হারিয়ে গেছে সেই ছন্দ!\nতবু জেনে রেখো, প্রতিটি অলিখিত পংক্তির শেষে\nএকটি অদৃশ্য স্বাক্ষর হয়ে রয়ে গেছো তুমি।`
        },
        {
          id: 'demo-poem-2', isDemo: true, title: 'নিঃশব্দ শহরের রাত', slug: 'nishobdo-shohorer-raat',
          poet_name: 'মেঘলা চৌধুরী', category_id: 'cat-3', is_featured: true, views_count: 312,
          created_at: '2026-11-15T10:00:00Z',
          cover_image_url: 'https://placehold.co/600x400/17121F/C5A46D?text=%E0%A6%A8%E0%A6%BF%E0%A6%83%E0%A6%B6%E0%A6%AC%E0%A7%8D%E0%A6%A6+%E0%A6%B0%E0%A6%BE%E0%A6%A4',
          audio_url: 'demo://ambient-2', audio_duration_sec: 120,
          excerpt: 'সোডিয়াম আলোর নিচে দাঁড়িয়ে থাকা একা ছায়াটি আজ কোনো উত্তর চায় না, শুধু একটু শান্তি খোঁজে...',
          body: `সোডিয়াম আলোর নিচে দাঁড়িয়ে থাকা একা ছায়াটি\nআজ কোনো উত্তর চায় না, শুধু একটু শান্তি খোঁজে।\nরাত গভীর হলে ঘড়ির কাঁটাও যেন ধীরে চলে,\nযেন সময়েরও ক্লান্তি আছে, বিশ্রাম প্রয়োজন।\n\nএকাকিত্ব কোনো অভিশাপ নয়—\nকখনো কখনো নিজের সাথে কথা বলার\nসবচেয়ে সুন্দর আশ্রয়।`
        },
        {
          id: 'demo-poem-3', isDemo: true, title: 'বর্ষার প্রথম ডাক', slug: 'borshar-prothom-dak',
          poet_name: 'সৌম্যজিৎ রায়', category_id: 'cat-5', is_featured: true, views_count: 289,
          created_at: '2026-11-10T10:00:00Z',
          cover_image_url: 'https://placehold.co/600x400/2A1D36/F1E9DF?text=%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%B0+%E0%A6%A1%E0%A6%BE%E0%A6%95',
          audio_url: 'demo://ambient-3', audio_duration_sec: 165,
          excerpt: 'ভেজা মাটির গন্ধে যখন আকাশ কালো হয়ে আসে, তখন কবিতা নিজেই কলমের ডগায় নেমে আসে...',
          body: `ভেজা মাটির গন্ধে যখন আকাশ কালো হয়ে আসে,\nতখন কবিতা নিজেই কলমের ডগায় নেমে আসে।\nকদম ফুলের রেণু উড়ে যায় উদাস বাতাসে,\nস্মৃতির পাতায় জমে ওঠে অজস্র না-বলা গান।`
        }
      ],
      audio_stories: [
        {
          id: 'demo-story-1', isDemo: true, title: 'রাত বারোটার ট্রেন', slug: 'raat-barotar-train',
          author_name: 'তন্ময় বসু', narrator_name: 'কণ্ঠ: ঋতুপর্ণা সেন', duration_sec: 420, is_featured: true,
          cover_image_url: 'https://placehold.co/600x400/352343/C5A46D?text=%E0%A6%B0%E0%A6%BE%E0%A6%A4+%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A7%8B%E0%A6%9F%E0%A6%BE%E0%A6%B0+%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A8',
          audio_url: 'demo://story-1',
          description: 'কুয়াশাচ্ছন্ন এক স্টেশনে অচেনা দুই যাত্রীর কথোপকথন, যা বদলে দেয় জীবনের চেনা সমীকরণ।'
        },
        {
          id: 'demo-story-2', isDemo: true, title: 'পুরোনো ডায়েরির পাতা', slug: 'purono-dairir-pata',
          author_name: 'সায়ন্তনী মিত্র', narrator_name: 'কণ্ঠ: অনির্বাণ দাস', duration_sec: 540, is_featured: true,
          cover_image_url: 'https://placehold.co/600x400/241830/C5A46D?text=%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A7%8B%E0%A6%A8%E0%A7%8B+%E0%A6%A1%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B0%E0%A6%BF',
          audio_url: 'demo://story-2',
          description: 'চিলেকোঠার ভাঙা ট্রাংকে পাওয়া ১৯৮৪ সালের এক ডায়েরি ও হারানো ভালোবাসার রোমাঞ্চকর অডিও গল্প।'
        }
      ],
      recitations: [
        {
          id: 'demo-rec-1', isDemo: true, title: 'কেউ কথা রাখেনি (আবৃত্তি)', poet_name: 'সুনীল গঙ্গোপাধ্যায়',
          reciter_name: 'আবৃত্তি: দেবাশীষ মুখোপাধ্যায়', duration_sec: 210, audio_url: 'demo://rec-1', mood: 'বিরহ',
          cover_image_url: 'https://placehold.co/500x500/352343/F1E9DF?text=%E0%A6%86%E0%A6%AC%E0%A7%83%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A6%BF',
          transcript: 'কেউ কথা রাখেনি, তেত্রিশ বছর কাটলো, কেউ কথা রাখেনি।\nছেলেবেলায় এক বোষ্টুমী তার আগমনী গান হঠাৎ থামিয়ে বলেছিল—\nশুক্লা দ্বাদশীর দিন অন্তরাটুকু শুনিয়ে যাবে...'
        },
        {
          id: 'demo-rec-2', isDemo: true, title: 'বনলতা সেন — কণ্ঠস্বরে', poet_name: 'জীবনানন্দ দাশ',
          reciter_name: 'আবৃত্তি: শ্রাবণী ঘোষ', duration_sec: 185, audio_url: 'demo://rec-2', mood: 'প্রেম',
          cover_image_url: 'https://placehold.co/500x500/1F162B/C5A46D?text=%E0%A6%AC%E0%A6%A8%E0%A6%B2%E0%A6%A4%E0%A6%BE+%E0%A6%B8%E0%A7%87%E0%A6%A8',
          transcript: 'হাজার বছর ধরে আমি পথ হাঁটিতেছি পৃথিবীর পথে,\nসিংহল সমুদ্র থেকে নিশীথের অন্ধকারে মালয় সাগরে\nঅনেক ঘুরেছি আমি...'
        }
      ],
      youtube_videos: [
        {
          id: 'demo-yt-1', isDemo: true, title: 'KothaVerse — রাত্রির কবিতা ও নীরবতা', youtube_video_id: 'jfKfPfyJRdk',
          playlist_type: 'featured', is_featured: true,
          description: 'রাতের শান্ত পরিবেশে বাংলা কবিতা ও আবৃত্তির বিশেষ পর্ব।'
        },
        {
          id: 'demo-yt-2', isDemo: true, title: 'বৃষ্টির সন্ধ্যায় অডিও গল্প', youtube_video_id: '4xDzrJKXOOY',
          playlist_type: 'audio_story', is_featured: false,
          description: 'বৃষ্টির শব্দ ও মৃদু আবহে এক মনছুঁয়ে যাওয়া অডিও গল্প।'
        },
        {
          id: 'demo-yt-3', isDemo: true, title: 'প্রেমের কবিতা শর্টস — ১ মিনিটের অনুভূতি', youtube_video_id: '5qap5aO4i9A',
          playlist_type: 'shorts', is_featured: false,
          description: 'সংক্ষিপ্ত আবৃত্তি ও কাব্যিক মুহূর্ত (YouTube Shorts)।'
        }
      ],
      daily_quotes: [
        {
          id: 'demo-quote-1', isDemo: true,
          quote_text: 'কিছু কথা শুধু নীরবতাতেই সুন্দর; শব্দেরা যখন ক্লান্ত হয়, তখনই কবিতার জন্ম হয়।',
          author_name: 'KothaVerse সম্পাদকীয়',
          source_title: 'Daily Feelings',
          scheduled_date: new Date().toISOString().slice(0, 10)
        },
        {
          id: 'demo-quote-2', isDemo: true,
          quote_text: 'যে মানুষ নীরবতাকে শুনতে জানে, সে পৃথিবীর সবচেয়ে গভীর কবিতাটি পড়তে পারে।',
          author_name: 'KothaVerse সংকলন',
          source_title: 'রাতের ডায়েরি'
        },
        {
          id: 'demo-quote-3', isDemo: true,
          quote_text: 'বৃষ্টি কেবল আকাশ থেকে নামে না—কখনো কখনো পুরোনো স্মৃতির পাতা থেকেও ঝরে পড়ে।',
          author_name: 'অরণ্য দেব',
          source_title: 'বর্ষার চিঠি'
        }
      ],
      community_posts: [
        {
          id: 'demo-post-1', isDemo: true,
          title: 'আপনার প্রিয় বর্ষার কবিতা কোনটি?',
          body: 'বৃষ্টি নামলেই আমার রবীন্দ্রনাথ আর জীবনানন্দের কথা মনে পড়ে। আপনাদের প্রিয় কোন পংক্তি আজ মনে পড়ছে? নিচে শেয়ার করুন!',
          created_at: new Date().toISOString(),
          profiles: { full_name: 'অদিতি চক্রবর্তী', username: 'aditi_reads' }
        }
      ]
    };

    // =========================================================================
    // 3. GLOBAL APPLICATION STATE
    // =========================================================================
    const state = {
      route: 'home',
      lang: localStorage.getItem('kv_lang') || 'bn',
      user: null,
      profile: null,
      categories: [],
      poems: [],
      audioStories: [],
      recitations: [],
      youtubeVideos: [],
      dailyQuotes: [],
      dailyQuote: null,
      communityPosts: [],
      library: [],
      history: [],
      poetryFilter: { categoryId: 'all', search: '', sort: 'newest' },
      youtubeFilter: 'all',
      youtubeSearch: '',
      communityTab: 'feed',
      libraryTab: 'favourites',
      adminTab: 'overview',
      adminSubmissions: [],
      adminSubscribers: [],
      aiCopilotLog: [],
      authMode: 'login',
      activePoem: null,
      ebooks: [],
      myEbookOrders: [],
      myVoiceOrders: [],
      storeTab: 'ebooks',
      storeSettings: {
        upi_id: 'kothaverse@upi',
        upi_name: 'KothaVerse',
        qr_image_url: '',
        voice_pkg_1_name: 'Mini Voice Note (১ মিনিট)',
        voice_pkg_1_price: 99,
        voice_pkg_2_name: 'Standard Dedication (২-৩ মিনিট)',
        voice_pkg_2_price: 149,
        voice_pkg_3_name: 'Premium Cinematic Gift (কবিতা + মেসেজ)',
        voice_pkg_3_price: 249
      },
    };

    const I18N = {
      bn: {
        nav_home: 'হোম', nav_poetry: 'কবিতা', nav_stories: 'অডিও গল্প', nav_recitations: 'আবৃত্তি',
        nav_community: 'কমিউনিটি', nav_library: 'লাইব্রেরি', nav_about: 'পরিচিতি', nav_contact: 'যোগাযোগ'
      },
      en: {
        nav_home: 'Home', nav_poetry: 'Poetry', nav_stories: 'Audio Stories', nav_recitations: 'Recitations',
        nav_community: 'Community', nav_library: 'My Library', nav_about: 'About', nav_contact: 'Contact'
      }
    };
    let activeSpecialPopup = null;

async function checkAndShowSpecialPopup(forcePreview = false) {
  try {
    const { data } = await sb
      .from('special_popups')
      .select('*')
      .eq('is_active', true)
      .order('updated_at', { ascending: false })
      .limit(1);

    if (!data || !data.length) return;
    const pop = data[0];
    activeSpecialPopup = pop;

    // Same session-e user close kore dile abar dekhabe na (jodi na admin update kore)
    const seenKey = `kv_popup_seen_${pop.updated_at}`;
    if (!forcePreview && sessionStorage.getItem(seenKey)) return;

    const body = document.getElementById('special-popup-body');
    const isExternal = pop.button_link && /^https?:\/\//i.test(pop.button_link);
    const btnAction = isExternal
      ? `window.open('${escapeHtml(pop.button_link)}', '_blank', 'noopener'); dismissSpecialPopup();`
      : pop.button_link
        ? `navigate('${escapeHtml(pop.button_link)}'); dismissSpecialPopup();`
        : `dismissSpecialPopup();`;

    body.className = "special-popup-card relative w-full max-w-md overflow-hidden rounded-[2rem] glass-panel bg-midnight/95 border border-antiqueGold/45 shadow-2xl text-center";

body.innerHTML = `
  <!-- Ambient Top Glow -->
  <div class="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-antiqueGold/20 blur-3xl"></div>

  <!-- Floating Decorative Sparkles -->
  <span class="popup-sparkle top-6 left-6 text-sm" style="animation-delay: 0s;">✦</span>
  <span class="popup-sparkle top-14 right-10 text-xs" style="animation-delay: 1.1s;">✧</span>
  <span class="popup-sparkle bottom-10 left-8 text-xs" style="animation-delay: 2s;">✦</span>

  <!-- Close Button -->
  <button onclick="dismissSpecialPopup()" aria-label="Close" class="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-midnight/70 backdrop-blur-md border border-antiqueGold/30 text-ivory/90 hover:text-antiqueGold hover:rotate-90 transition-all duration-300">
    <i data-lucide="x" class="w-4 h-4"></i>
  </button>

  <!-- Hero Image with Smooth Gradient Fade -->
  ${pop.image_url ? `
    <div class="relative w-full h-52 overflow-hidden group">
      <img src="${escapeHtml(pop.image_url)}" alt="${escapeHtml(pop.title)}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent"></div>
    </div>
  ` : `<div class="h-6"></div>`}

  <!-- Content Area -->
  <div class="relative z-10 px-6 sm:px-8 pb-7 ${pop.image_url ? '-mt-7' : 'pt-4'} space-y-3.5 font-bengali">
    ${pop.badge_text ? `
      <div class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-midnight/85 backdrop-blur-md text-antiqueGold border border-antiqueGold/45 shadow-lg">
        <span class="w-1.5 h-1.5 rounded-full bg-antiqueGold animate-ping"></span>
        <span>${escapeHtml(pop.badge_text)}</span>
      </div>
    ` : ''}

    <h3 class="text-2xl sm:text-3xl font-bold gold-gradient-text gold-shimmer leading-snug pt-1">
      ${escapeHtml(pop.title)}
    </h3>

    <!-- Ornamental Divider -->
    <div class="flex items-center justify-center gap-2 opacity-60">
      <span class="h-[1px] w-10 bg-gradient-to-r from-transparent to-antiqueGold"></span>
      <span class="text-antiqueGold text-[10px]">❖</span>
      <span class="h-[1px] w-10 bg-gradient-to-l from-transparent to-antiqueGold"></span>
    </div>

    <p class="text-sm text-ivory/85 whitespace-pre-line leading-relaxed max-h-44 overflow-y-auto px-1">
      ${escapeHtml(pop.message)}
    </p>

    <!-- Action Buttons -->
    <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2.5">
      ${pop.button_text ? `
        <button onclick="${btnAction}" class="btn-shine-wrap w-full sm:w-auto px-7 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-sm shadow-gold hover:scale-[1.03] active:scale-95 transition-transform flex items-center justify-center gap-1.5">
          <span>${escapeHtml(pop.button_text)}</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      ` : ''}
      <button onclick="dismissSpecialPopup()" class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-antiqueGold/25 bg-deepPurple/35 text-xs font-medium text-ivory/80 hover:text-ivory hover:border-antiqueGold/50 hover:bg-deepPurple/60 transition">
        বন্ধ করুন
      </button>
    </div>
  </div>
`;
    openModal('special-popup-modal');
  } catch (e) { /* Silent */ }
}

function dismissSpecialPopup() {
  if (activeSpecialPopup) {
    sessionStorage.setItem(`kv_popup_seen_${activeSpecialPopup.updated_at}`, '1');
  }
  closeModal('special-popup-modal');
}

function previewSpecialPopup() {
  checkAndShowSpecialPopup(true);
}

async function adminSavePopup(e) {
  e.preventDefault();
  try {
    const id = document.getElementById('sp-id').value;
    const imgFile = document.getElementById('sp-img-file').files[0];
    let image_url = document.getElementById('sp-existing-img').value || null;
    if (imgFile) image_url = await uploadToBucket('covers', imgFile);

    const payload = {
      badge_text: document.getElementById('sp-badge').value.trim(),
      title: document.getElementById('sp-title').value.trim(),
      message: document.getElementById('sp-message').value.trim(),
      button_text: document.getElementById('sp-btn-text').value.trim(),
      button_link: document.getElementById('sp-btn-link').value.trim() || null,
      image_url,
      is_active: document.getElementById('sp-active').checked,
      updated_at: new Date().toISOString()
    };

    const res = id
      ? await sb.from('special_popups').update(payload).eq('id', id)
      : await sb.from('special_popups').insert(payload);

    if (res.error) throw res.error;
    showToast('Special Popup সফলভাবে আপডেট হয়েছে!', 'success');
    loadAdminTabData();
  } catch (err) {
    showToast('ত্রুটি: ' + err.message, 'error');
  }
}

    function applySiteSettings() {
      const cfg = getSiteSettings();
      const nameEl = document.getElementById('brand-name-nav');
      const tagEl = document.getElementById('brand-tagline-nav');
      if (nameEl) nameEl.textContent = cfg.siteName;
      if (tagEl) tagEl.textContent = cfg.tagline;
      document.title = `${cfg.siteName} — ${cfg.seoTitle || cfg.tagline}`;

      const mb = document.getElementById('maintenance-banner');
      if (mb) {
        if (cfg.maintenanceMode && cfg.maintenanceMsg) {
          mb.textContent = cfg.maintenanceMsg;
          mb.classList.remove('hidden');
        } else {
          mb.classList.add('hidden');
        }
      }

      const dict = I18N[state.lang] || I18N.bn;
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const k = el.getAttribute('data-i18n');
        if (dict[k]) el.textContent = dict[k];
      });
      const langBtn = document.getElementById('lang-toggle-btn');
      if (langBtn) langBtn.textContent = state.lang === 'bn' ? 'EN' : 'বাংলা';
    }

    function toggleLanguage() {
      state.lang = state.lang === 'bn' ? 'en' : 'bn';
      localStorage.setItem('kv_lang', state.lang);
      applySiteSettings();
      showToast(state.lang === 'bn' ? 'ভাষা বাংলায় পরিবর্তিত হয়েছে।' : 'Interface language switched to English.', 'info');
    }

    // =========================================================================
    // 4. UTILITIES, SETTINGS & WHATSAPP HELPERS
    // =========================================================================
    function formatWANumber(phone) {
      let clean = String(phone || '').replace(/\D/g, '');
      if (clean.length === 10) clean = '91' + clean;
      return clean;
    }

    function getSiteSettings() {
      const defaults = {
        siteName: 'KothaVerse',
        tagline: 'শব্দের পরিপাটে, মনের আলাপন',
        seoTitle: 'বাংলা কবিতা, আবৃত্তি ও অডিও গল্পের জগৎ',
        youtubeUrl: 'https://youtube.com',
        facebookUrl: 'https://facebook.com',
        instagramUrl: 'https://instagram.com',
        contactEmail: 'hello@kothaverse.in',
        maintenanceMode: false,
        maintenanceMsg: '',
        aiApiKey: ''
      };
      try {
        return { ...defaults, ...JSON.parse(localStorage.getItem('kv_site_settings') || '{}') };
      } catch (e) { return defaults; }
    }

    async function saveSiteSettings(obj) {
      localStorage.setItem('kv_site_settings', JSON.stringify(obj));
      await syncSettingsToSupabase();
      applySiteSettings();
    }

    function getNewsletterSettings() {
      const defaults = {
        upiId: 'kothaverse@upi',
        fee: '₹99',
        groupLink: 'https://chat.whatsapp.com/YOUR_GROUP_LINK'
      };
      try {
        return { ...defaults, ...JSON.parse(localStorage.getItem('kv_newsletter_settings') || '{}') };
      } catch (e) { return defaults; }
    }

    function saveNewsletterSettings(settings) {
      localStorage.setItem('kv_newsletter_settings', JSON.stringify(settings));
    }

    function sendWhatsAppPublishMsg(phone, authorName, poemTitle, poemSlug) {
      const num = formatWANumber(phone);
      if (!num) return showToast('লেখকের WhatsApp নম্বর দেওয়া নেই!', 'error');
      const poemUrl = `${window.location.origin}${window.location.pathname}#poetry/${poemSlug || ''}`;
      const message = `নমস্কার ${authorName || 'কবি'},\n\nঅভিনন্দন! আপনার লেখা "${poemTitle}" KothaVerse-এ প্রকাশিত হয়েছে।\n\nএখানে পড়ুন: ${poemUrl}\n\n— টিম KothaVerse`;
      window.open(`https://wa.me/${num}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    }

    function sendPaymentRequestWA(phone, name) {
      const num = formatWANumber(phone);
      if (!num) return showToast('সাবস্ক্রাইবারের WhatsApp নম্বর দেওয়া নেই!', 'error');
      const cfg = getNewsletterSettings();
      const message = `নমস্কার ${name || 'বন্ধু'},\n\nKothaVerse Newsletter-এ সাবস্ক্রাইব করার জন্য ধন্যবাদ! আপনার সাবস্ক্রিপশন সক্রিয় করতে ${cfg.fee} পেমেন্ট করুন।\n\nUPI ID: ${cfg.upiId}\n\nপেমেন্ট করার পর অনুগ্রহ করে আপনার Transaction ID বা স্ক্রিনশট এখানে পাঠিয়ে দিন।\n\n— টিম KothaVerse`;
      window.open(`https://wa.me/${num}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    }

    function sendGroupLinkWA(phone, name, txnId) {
      const num = formatWANumber(phone);
      if (!num) return showToast('সাবস্ক্রাইবারের WhatsApp নম্বর দেওয়া নেই!', 'error');
      const cfg = getNewsletterSettings();
      const txnText = txnId ? ` (Txn ID: ${txnId})` : '';
      const message = `নমস্কার ${name || 'বন্ধু'},\n\nআপনার পেমেন্ট${txnText} যাচাই হয়েছে এবং KothaVerse Newsletter সাবস্ক্রিপশন অনুমোদিত হয়েছে!\n\nআমাদের এক্সক্লুসিভ WhatsApp গ্রুপে যোগ দিন:\n${cfg.groupLink}\n\n— টিম KothaVerse`;
      window.open(`https://wa.me/${num}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    }

    function escapeHtml(str) {
      if (str === null || str === undefined) return '';
      return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }

    function extractYouTubeId(input) {
  const str = String(input || '').trim();
  const match = str.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : str;
}

    


    function isUUID(val) {
      return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(val || ''));
    }

    function slugify(text) {
      const base = String(text || '').toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
      return (base || 'kotha') + '-' + Math.random().toString(36).slice(2, 7);
    }

    function formatTime(sec) {
      const s = Math.max(0, Math.floor(sec || 0));
      const m = Math.floor(s / 60);
      const r = s % 60;
      return `${m}:${r < 10 ? '0' : ''}${r}`;
    }

    function safeCover(url, text = 'KothaVerse') {
      const fallback = `https://placehold.co/600x400/352343/C5A46D?text=${encodeURIComponent(String(text).slice(0, 18))}`;
      return url && url.trim() ? url : fallback;
    }

    function showToast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      const colors = {
        success: 'border-emerald-400/50 bg-emerald-950/90 text-emerald-100',
        error: 'border-red-400/50 bg-red-950/90 text-red-100',
        info: 'border-antiqueGold/50 bg-deepPurple/95 text-ivory',
      };
      const el = document.createElement('div');
      el.className = `pointer-events-auto px-4 py-3 rounded-2xl border shadow-xl backdrop-blur-md text-sm font-bengali fade-in flex items-center justify-between gap-3 ${colors[type] || colors.info}`;
      el.innerHTML = `<span>${escapeHtml(message)}</span>`;
      container.appendChild(el);
      setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(12px)';
        el.style.transition = 'all 0.25s ease';
        setTimeout(() => el.remove(), 260);
      }, 3600);
    }

    function copyTextToClipboard(text) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => showToast('ক্লিপবোর্ডে কপি হয়েছে!', 'success')).catch(() => fallbackCopy(text));
      } else fallbackCopy(text);
    }
    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); showToast('ক্লিপবোর্ডে কপি হয়েছে!', 'success'); }
      catch (e) { showToast('কপি করা যায়নি।', 'error'); }
      document.body.removeChild(ta);
    }

    function openModal(id) { document.getElementById(id)?.classList.remove('hidden'); lucide.createIcons(); }
    function closeModal(id) { document.getElementById(id)?.classList.add('hidden'); }

    function showConfirmModal(title, msg, onConfirm) {
      document.getElementById('confirm-title').textContent = title;
      document.getElementById('confirm-msg').textContent = msg;
      const btn = document.getElementById('confirm-ok-btn');
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', () => { closeModal('confirm-modal'); onConfirm(); });
      openModal('confirm-modal');
    }

    function toggleMobileDrawer(open) {
      const el = document.getElementById('mobile-drawer');
      if (open) el.classList.remove('hidden'); else el.classList.add('hidden');
      lucide.createIcons();
    }

    // LocalStorage helpers for Reading History & Custom Playlists
    function recordReadingHistory(poem) {
      try {
        const list = JSON.parse(localStorage.getItem('kv_reading_history') || '[]').filter((x) => x.id !== poem.id);
        list.unshift({ id: poem.id, title: poem.title, poet_name: poem.poet_name, read_at: new Date().toISOString() });
        localStorage.setItem('kv_reading_history', JSON.stringify(list.slice(0, 25)));
      } catch (e) {}
    }
    function getReadingHistory() {
      try { return JSON.parse(localStorage.getItem('kv_reading_history') || '[]'); } catch (e) { return []; }
    }
    function getCustomPlaylists() {
      try { return JSON.parse(localStorage.getItem('kv_playlists') || '[]'); } catch (e) { return []; }
    }
    function saveCustomPlaylists(arr) {
      localStorage.setItem('kv_playlists', JSON.stringify(arr));
    }

    // =========================================================================
    // 5. AMBIENT BACKGROUND SOUND ENGINE (Web Audio API — Rain / Night / Wind)
    // =========================================================================
    const ambientEngine = {
      ctx: null,
      active: null,
      nodes: [],
      gainNode: null,
      volume: 0.35,

      toggle(mode) {
        if (this.active === mode) {
          this.stopAll();
          return;
        }
        this.stopAll();
        try {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (!this.ctx) this.ctx = new AudioCtx();
          if (this.ctx.state === 'suspended') this.ctx.resume();

          const gain = this.ctx.createGain();
          gain.gain.value = this.volume * 0.25;
          gain.connect(this.ctx.destination);
          this.gainNode = gain;

          // Create soft noise buffer
          const bufferSize = this.ctx.sampleRate * 3;
          const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const data = buffer.getChannelData(0);
          let lastOut = 0.0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            data[i] = (lastOut + (0.04 * white)) / 1.04;
            lastOut = data[i];
          }
          const noise = this.ctx.createBufferSource();
          noise.buffer = buffer;
          noise.loop = true;

          const filter = this.ctx.createBiquadFilter();
          if (mode === 'rain') {
            filter.type = 'bandpass'; filter.frequency.value = 900; filter.Q.value = 0.6;
          } else if (mode === 'wind') {
            filter.type = 'lowpass'; filter.frequency.value = 380;
          } else {
            // Night ambience: deep warm pad + gentle lowpass
            filter.type = 'lowpass'; filter.frequency.value = 240;
            const osc = this.ctx.createOscillator();
            const oscGain = this.ctx.createGain();
            osc.type = 'sine'; osc.frequency.value = 174;
            oscGain.gain.value = 0.08;
            osc.connect(oscGain); oscGain.connect(gain); osc.start();
            this.nodes.push(osc);
          }

          noise.connect(filter);
          filter.connect(gain);
          noise.start();
          this.nodes.push(noise);
          this.active = mode;
          this.updateUI();
          showToast(`Ambient Sound চালু হয়েছে (${mode})`, 'info');
        } catch (e) {
          showToast('অডিও ইঞ্জিন চালু করা যায়নি।', 'error');
        }
      },

      setVolume(val) {
        this.volume = parseFloat(val);
        if (this.gainNode && this.ctx) {
          this.gainNode.gain.setTargetAtTime(this.volume * 0.25, this.ctx.currentTime, 0.1);
        }
      },

      stopAll() {
        this.nodes.forEach((n) => { try { n.stop(); } catch (e) {} });
        this.nodes = [];
        this.active = null;
        this.updateUI();
      },

      updateUI() {
        ['rain', 'night', 'wind'].forEach((m) => {
          const btn = document.getElementById(`amb-btn-${m}`);
          if (btn) btn.classList.toggle('ring-2', this.active === m);
          if (btn) btn.classList.toggle('ring-antiqueGold', this.active === m);
        });
        const st = document.getElementById('amb-status');
        if (st) st.textContent = this.active ? `চালু আছে: ${this.active.toUpperCase()}` : 'বন্ধ আছে';
        const navBtn = document.getElementById('ambient-nav-btn');
        if (navBtn) navBtn.classList.toggle('text-antiqueGold', !!this.active);
      }
    };

    // =========================================================================
    // 6. PERSISTENT GLOBAL AUDIO ENGINE (Queue, Prev/Next, Repeat, Shuffle)
    // =========================================================================
    const audioEngine = {
      audioEl: document.getElementById('native-audio'),
      track: null,
      queue: [],
      queueIndex: -1,
      repeat: false,
      shuffle: false,
      isPlaying: false,
      isDemoStream: false,
      demoInterval: null,
      demoTime: 0,
      demoDuration: 180,
      webAudioCtx: null,
      webAudioGain: null,
      webAudioOscs: [],
      volume: 0.85,
      speed: 1,
      sleepTimerId: null,
      sleepEndTime: null,
      sleepCountdownId: null,
      lastSyncedSec: 0,

      init() {
        const a = this.audioEl;
        a.volume = this.volume;

        a.addEventListener('timeupdate', () => {
          if (this.isDemoStream) return;
          this.updateUI(a.currentTime, a.duration || this.track?.duration || 0);
          this.maybeSyncHistory(a.currentTime, a.duration || this.track?.duration || 0, false);
        });
        a.addEventListener('ended', () => {
          this.maybeSyncHistory(a.duration || 0, a.duration || 0, true);
          if (this.repeat) {
            a.currentTime = 0; a.play();
          } else {
            this.playNext();
          }
        });
        a.addEventListener('error', () => {
          if (!this.isDemoStream && this.track) {
            showToast('অডিও ফাইল লোড করতে সমস্যা হয়েছে।', 'error');
            this.isPlaying = false;
            this.updatePlayIcons();
          }
        });

        const seek = document.getElementById('player-seek');
        seek.addEventListener('input', (e) => {
          const pct = parseFloat(e.target.value);
          if (this.isDemoStream) {
            this.demoTime = (pct / 100) * this.demoDuration;
            this.updateUI(this.demoTime, this.demoDuration);
          } else if (a.duration) {
            a.currentTime = (pct / 100) * a.duration;
          }
        });
      },

      setQueue(tracks, startIndex = 0) {
        this.queue = tracks || [];
        this.queueIndex = startIndex;
        if (this.queue[startIndex]) this.loadAndPlay(this.queue[startIndex], 0, false);
      },

      loadAndPlay(track, resumeAtSec = 0, addToQueue = true) {
        this.stopDemoAudio();
        this.track = track;
        if (addToQueue) {
          const idx = this.queue.findIndex((t) => t.id === track.id && t.type === track.type);
          if (idx === -1) {
            this.queue.push(track);
            this.queueIndex = this.queue.length - 1;
          } else {
            this.queueIndex = idx;
          }
        }

        document.getElementById('global-audio-player').classList.remove('hidden');
        document.getElementById('player-title').textContent = track.title;
        document.getElementById('player-subtitle').textContent = track.subtitle || 'KothaVerse Audio';
        document.getElementById('mini-title').textContent = track.title;
        document.getElementById('player-cover').src = safeCover(track.cover, track.title);

        if (!track.url || track.url.startsWith('demo://')) {
          this.isDemoStream = true;
          this.audioEl.pause();
          this.demoDuration = track.duration || 160;
          this.demoTime = Math.min(resumeAtSec || 0, this.demoDuration - 1);
          this.startDemoAudio();
          this.isPlaying = true;
          this.updatePlayIcons();
          this.updateUI(this.demoTime, this.demoDuration);
          showToast(`ডেমো অডিও চলছে: ${track.title}`, 'info');
        } else {
          this.isDemoStream = false;
          this.audioEl.src = track.url;
          this.audioEl.playbackRate = this.speed;
          this.audioEl.volume = this.volume;
          this.audioEl.currentTime = resumeAtSec || 0;
          this.audioEl.play().then(() => {
            this.isPlaying = true;
            this.updatePlayIcons();
          }).catch(() => {
            this.isPlaying = false;
            this.updatePlayIcons();
            showToast('প্লে বাটনে ক্লিক করে অডিও শুরু করুন।', 'info');
          });
        }
        renderFullscreenPlayerContent();
      },

      playNext() {
        if (this.queue.length <= 1) {
          this.pause();
          return;
        }
        if (this.shuffle) {
          this.queueIndex = Math.floor(Math.random() * this.queue.length);
        } else {
          this.queueIndex = (this.queueIndex + 1) % this.queue.length;
        }
        this.loadAndPlay(this.queue[this.queueIndex], 0, false);
      },

      playPrev() {
        if (this.queue.length <= 1) return this.seekRelative(-15);
        this.queueIndex = (this.queueIndex - 1 + this.queue.length) % this.queue.length;
        this.loadAndPlay(this.queue[this.queueIndex], 0, false);
      },

      toggleRepeat() {
        this.repeat = !this.repeat;
        document.getElementById('player-repeat-btn')?.classList.toggle('text-antiqueGold', this.repeat);
        showToast(this.repeat ? 'Repeat চালু হয়েছে' : 'Repeat বন্ধ', 'info');
      },

      toggleShuffle() {
        this.shuffle = !this.shuffle;
        document.getElementById('player-shuffle-btn')?.classList.toggle('text-antiqueGold', this.shuffle);
        showToast(this.shuffle ? 'Shuffle চালু হয়েছে' : 'Shuffle বন্ধ', 'info');
      },

      startDemoAudio() {
        this.stopDemoAudio();
        try {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (!this.webAudioCtx) this.webAudioCtx = new AudioCtx();
          if (this.webAudioCtx.state === 'suspended') this.webAudioCtx.resume();
          const gain = this.webAudioCtx.createGain();
          gain.gain.setValueAtTime(0.001, this.webAudioCtx.currentTime);
          gain.gain.linearRampToValueAtTime(this.volume * 0.05, this.webAudioCtx.currentTime + 0.8);
          gain.connect(this.webAudioCtx.destination);
          this.webAudioGain = gain;

          [130.81, 196.0, 261.63].forEach((freq) => {
            const osc = this.webAudioCtx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.webAudioCtx.currentTime);
            osc.connect(gain);
            osc.start();
            this.webAudioOscs.push(osc);
          });
        } catch (e) {}

        this.demoInterval = setInterval(() => {
          this.demoTime += 0.5 * this.speed;
          if (this.demoTime >= this.demoDuration) {
            if (this.repeat) this.demoTime = 0;
            else { this.demoTime = this.demoDuration; this.playNext(); }
          }
          this.updateUI(this.demoTime, this.demoDuration);
        }, 500);
      },

      stopDemoAudio() {
        if (this.demoInterval) { clearInterval(this.demoInterval); this.demoInterval = null; }
        this.webAudioOscs.forEach((osc) => { try { osc.stop(); } catch (e) {} });
        this.webAudioOscs = [];
      },

      togglePlay() {
        if (!this.track) return;
        if (this.isPlaying) {
          this.pause();
        } else {
          if (this.isDemoStream) { this.startDemoAudio(); this.isPlaying = true; }
          else { this.audioEl.play(); this.isPlaying = true; }
          this.updatePlayIcons();
        }
      },

      pause() {
        this.isPlaying = false;
        if (this.isDemoStream) this.stopDemoAudio();
        else this.audioEl.pause();
        this.updatePlayIcons();
      },

      seekRelative(delta) {
        if (!this.track) return;
        if (this.isDemoStream) {
          this.demoTime = Math.max(0, Math.min(this.demoDuration, this.demoTime + delta));
          this.updateUI(this.demoTime, this.demoDuration);
        } else {
          const d = this.audioEl.duration || 0;
          this.audioEl.currentTime = Math.max(0, Math.min(d, this.audioEl.currentTime + delta));
        }
      },

      setSpeed(val) { this.speed = parseFloat(val) || 1; this.audioEl.playbackRate = this.speed; },

      setVolume(val) {
        this.volume = parseFloat(val);
        this.audioEl.volume = this.volume;
        if (this.webAudioGain && this.webAudioCtx) {
          this.webAudioGain.gain.setTargetAtTime(this.volume * 0.05, this.webAudioCtx.currentTime, 0.1);
        }
      },

      toggleMini(mini) {
        document.getElementById('player-expanded').classList.toggle('hidden', mini);
        document.getElementById('player-mini').classList.toggle('hidden', !mini);
        lucide.createIcons();
      },

      setSleepTimer(minutes) {
        if (this.sleepTimerId) clearTimeout(this.sleepTimerId);
        if (this.sleepCountdownId) clearInterval(this.sleepCountdownId);
        const mins = parseInt(minutes, 10);
        const cdEl = document.getElementById('sleep-countdown');
        if (!mins || mins <= 0) { cdEl.classList.add('hidden'); return; }
        this.sleepEndTime = Date.now() + mins * 60 * 1000;
        cdEl.classList.remove('hidden');
        showToast(`Sleep Mode চালু হয়েছে: ${mins} মিনিট পর অডিও থেমে যাবে।`, 'info');

        this.sleepCountdownId = setInterval(() => {
          const rem = Math.max(0, Math.ceil((this.sleepEndTime - Date.now()) / 1000));
          cdEl.textContent = formatTime(rem);
          if (rem <= 0) clearInterval(this.sleepCountdownId);
        }, 1000);

        this.sleepTimerId = setTimeout(() => {
          const origVol = this.volume;
          let step = 0;
          const fade = setInterval(() => {
            step++;
            this.setVolume(Math.max(0, origVol * (1 - step / 20)));
            if (step >= 20) {
              clearInterval(fade);
              this.pause();
              ambientEngine.stopAll();
              this.setVolume(origVol);
              document.getElementById('player-volume').value = origVol;
              document.getElementById('player-sleep').value = '0';
              cdEl.classList.add('hidden');
              showToast('Sleep Timer শেষ হয়েছে। শুভ রাত্রি!', 'info');
            }
          }, 200);
        }, mins * 60 * 1000);
      },

      updateUI(cur, dur) {
        document.getElementById('player-current-time').textContent = formatTime(cur);
        document.getElementById('player-duration').textContent = formatTime(dur);
        document.getElementById('mini-time').textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
        const pct = dur > 0 ? Math.min(100, (cur / dur) * 100) : 0;
        document.getElementById('player-seek').value = pct;
      },

      updatePlayIcons() {
        const iconName = this.isPlaying ? 'pause' : 'play';
        document.getElementById('player-play-btn').innerHTML = `<i data-lucide="${iconName}" class="w-5 h-5 fill-current"></i>`;
        const miniBtn = document.querySelector('#player-mini button');
        if (miniBtn) miniBtn.innerHTML = `<i data-lucide="${iconName}" class="w-4 h-4 fill-current"></i>`;
        lucide.createIcons();
      },

      async maybeSyncHistory(cur, dur, completed) {
        if (!state.user || !this.track || !isUUID(this.track.id)) return;
        const curInt = Math.floor(cur || 0);
        if (!completed && Math.abs(curInt - this.lastSyncedSec) < 10) return;
        this.lastSyncedSec = curInt;
        try {
          await sb.from('listening_history').upsert({
            user_id: state.user.id,
            target_type: this.track.type,
            target_id: this.track.id,
            progress_seconds: curInt,
            duration_seconds: Math.floor(dur || this.track.duration || 0),
            is_completed: completed || (dur > 0 && cur >= dur - 3),
            last_played_at: new Date().toISOString()
          }, { onConflict: 'user_id,target_type,target_id' });
        } catch (e) {}
      }
    };

    function openQueueModal() {
      const box = document.getElementById('queue-list-body');
      if (!audioEngine.queue.length) {
        box.innerHTML = `<p class="text-xs text-ivory/50 text-center py-6">কিউ-তে এখনো কোনো অডিও নেই।</p>`;
      } else {
        box.innerHTML = audioEngine.queue.map((t, i) => `
          <div onclick="audioEngine.queueIndex=${i}; audioEngine.loadAndPlay(audioEngine.queue[${i}], 0, false); closeModal('queue-modal')" class="p-3 rounded-xl cursor-pointer flex items-center justify-between gap-3 border transition ${i === audioEngine.queueIndex ? 'bg-antiqueGold/20 border-antiqueGold text-antiqueGold' : 'bg-midnight/60 border-antiqueGold/15 hover:border-antiqueGold/40'}">
            <div class="min-w-0">
              <div class="text-sm font-semibold truncate">${escapeHtml(t.title)}</div>
              <div class="text-[11px] text-ivory/60 truncate">${escapeHtml(t.subtitle || '')}</div>
            </div>
            <span class="text-[11px] font-mono">${formatTime(t.duration)}</span>
          </div>
        `).join('');
      }
      openModal('queue-modal');
    }

    function openFullscreenPlayer() {
      if (!audioEngine.track) return;
      renderFullscreenPlayerContent();
      openModal('fullscreen-player-modal');
    }

    function renderFullscreenPlayerContent() {
      const box = document.getElementById('fp-content');
      const t = audioEngine.track;
      if (!box || !t) return;
      const canDownload = t.url && !t.url.startsWith('demo://');
      box.innerHTML = `
        <img src="${safeCover(t.cover, t.title)}" class="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl object-cover mx-auto shadow-2xl border border-antiqueGold/40" />
        <div>
          <h2 class="font-bengali text-2xl sm:text-3xl font-bold text-ivory">${escapeHtml(t.title)}</h2>
          <p class="font-bengali text-sm text-antiqueGold mt-1">${escapeHtml(t.subtitle || '')}</p>
        </div>
        <div class="flex items-center justify-center gap-1.5 h-8">
          ${[0, 0.15, 0.3, 0.45, 0.6, 0.2, 0.5].map((d) => `<span class="wave-bar" style="animation-delay:${d}s"></span>`).join('')}
        </div>
        <div class="flex flex-wrap justify-center gap-3 font-bengali text-xs">
          <button onclick="openModal('ambient-modal')" class="px-4 py-2 rounded-xl glass-panel border border-antiqueGold/30 text-antiqueGold flex items-center gap-1.5"><i data-lucide="cloud-rain" class="w-4 h-4"></i> Ambient Mixer</button>
          <button onclick="copyTextToClipboard('${escapeHtml(t.title)} — KothaVerse Audio')" class="px-4 py-2 rounded-xl glass-panel border border-antiqueGold/30 text-ivory flex items-center gap-1.5"><i data-lucide="share-2" class="w-4 h-4 text-antiqueGold"></i> শেয়ার</button>
          ${canDownload ? `<a href="${escapeHtml(t.url)}" download class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold flex items-center gap-1.5"><i data-lucide="download" class="w-4 h-4"></i> ডাউনলোড</a>` : ''}
        </div>
      `;
      lucide.createIcons();
    }

    // =========================================================================
    // 7. GLOBAL SEARCH & DISCOVERY (Ctrl+K)
    // =========================================================================
    function openGlobalSearch() {
      openModal('search-modal');
      const inp = document.getElementById('global-search-input');
      if (inp) { inp.value = ''; inp.focus(); }
      renderGlobalSearchResults('');
    }

    function normalizeSearch(str) {
      return String(str || '').toLowerCase().normalize('NFC').replace(/[।,?!.\-_]/g, ' ').trim();
    }

    function saveRecentSearch(term) {
      if (!term || term.length < 2) return;
      try {
        const arr = JSON.parse(localStorage.getItem('kv_recent_searches') || '[]').filter((x) => x !== term);
        arr.unshift(term);
        localStorage.setItem('kv_recent_searches', JSON.stringify(arr.slice(0, 6)));
      } catch (e) {}
    }

    function renderGlobalSearchResults(rawQuery) {
      const box = document.getElementById('global-search-body');
      const q = normalizeSearch(rawQuery);
      if (!q) {
        let recent = [];
        try { recent = JSON.parse(localStorage.getItem('kv_recent_searches') || '[]'); } catch (e) {}
        box.innerHTML = `
          <div class="space-y-4 font-bengali">
            ${recent.length ? `
              <div>
                <div class="text-xs text-ivory/50 mb-2">সাম্প্রতিক অনুসন্ধান</div>
                <div class="flex flex-wrap gap-2">
                  ${recent.map((r) => `<button onclick="document.getElementById('global-search-input').value='${escapeHtml(r)}'; renderGlobalSearchResults('${escapeHtml(r)}')" class="px-3 py-1 rounded-full bg-deepPurple/60 border border-antiqueGold/25 text-xs hover:border-antiqueGold">${escapeHtml(r)}</button>`).join('')}
                </div>
              </div>
            ` : ''}
            <div>
              <div class="text-xs text-ivory/50 mb-2">মুড অনুযায়ী খুঁজুন (Mood Discovery)</div>
              <div class="flex flex-wrap gap-2">
                ${['প্রেম', 'বিরহ', 'একাকিত্ব', 'বর্ষা', 'রাত', 'স্মৃতি', 'জীবন'].map((m) => `
                  <button onclick="document.getElementById('global-search-input').value='${m}'; renderGlobalSearchResults('${m}')" class="px-3.5 py-1.5 rounded-xl bg-midnight/80 border border-antiqueGold/30 text-xs text-antiqueGold hover:bg-antiqueGold hover:text-midnight transition"># ${m}</button>
                `).join('')}
              </div>
            </div>
          </div>
        `;
        return;
      }

      saveRecentSearch(rawQuery.trim());
      const poems = state.poems.filter((p) => normalizeSearch(`${p.title} ${p.poet_name} ${p.body}`).includes(q)).slice(0, 5);
      const stories = state.audioStories.filter((s) => normalizeSearch(`${s.title} ${s.author_name} ${s.narrator_name} ${s.description}`).includes(q)).slice(0, 4);
      const recs = state.recitations.filter((r) => normalizeSearch(`${r.title} ${r.poet_name} ${r.reciter_name}`).includes(q)).slice(0, 4);
      const vids = state.youtubeVideos.filter((v) => normalizeSearch(`${v.title} ${v.description}`).includes(q)).slice(0, 3);

      const total = poems.length + stories.length + recs.length + vids.length;
      if (!total) {
        box.innerHTML = `<div class="text-center py-8 font-bengali text-sm text-ivory/60">“${escapeHtml(rawQuery)}” এর জন্য কিছু পাওয়া যায়নি।</div>`;
        return;
      }

      box.innerHTML = `
        <div class="space-y-4 font-bengali">
          ${poems.length ? `
            <div>
              <div class="text-xs text-antiqueGold font-semibold mb-2">কবিতা (${poems.length})</div>
              <div class="space-y-1.5">
                ${poems.map((p) => `<button onclick="closeModal('search-modal'); openPoemModal('${p.id}')" class="w-full text-left p-2.5 rounded-xl bg-deepPurple/35 hover:bg-deepPurple/70 flex justify-between items-center"><span>${escapeHtml(p.title)}</span><span class="text-xs text-ivory/60">${escapeHtml(p.poet_name)}</span></button>`).join('')}
              </div>
            </div>
          ` : ''}
          ${stories.length ? `
            <div>
              <div class="text-xs text-antiqueGold font-semibold mb-2">অডিও গল্প (${stories.length})</div>
              <div class="space-y-1.5">
                ${stories.map((s) => `<button onclick="closeModal('search-modal'); playStory('${s.id}')" class="w-full text-left p-2.5 rounded-xl bg-deepPurple/35 hover:bg-deepPurple/70 flex justify-between items-center"><span>${escapeHtml(s.title)}</span><span class="text-xs text-antiqueGold">▶ শুনুন</span></button>`).join('')}
              </div>
            </div>
          ` : ''}
          ${recs.length ? `
            <div>
              <div class="text-xs text-antiqueGold font-semibold mb-2">আবৃত্তি (${recs.length})</div>
              <div class="space-y-1.5">
                ${recs.map((r) => `<button onclick="closeModal('search-modal'); playRecitation('${r.id}')" class="w-full text-left p-2.5 rounded-xl bg-deepPurple/35 hover:bg-deepPurple/70 flex justify-between items-center"><span>${escapeHtml(r.title)}</span><span class="text-xs text-ivory/60">${escapeHtml(r.reciter_name)}</span></button>`).join('')}
              </div>
            </div>
          ` : ''}
          ${vids.length ? `
            <div>
              <div class="text-xs text-antiqueGold font-semibold mb-2">YouTube (${vids.length})</div>
              <div class="space-y-1.5">
                ${vids.map((v) => `<a href="https://www.youtube.com/watch?v=${escapeHtml(v.youtube_video_id)}" target="_blank" rel="noopener" class="block p-2.5 rounded-xl bg-deepPurple/35 hover:bg-deepPurple/70">${escapeHtml(v.title)}</a>`).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }

    // =========================================================================
    // 8. DISTRACTION-FREE READING MODE (Dark / Sepia / Light) & QUOTE CARD
    // =========================================================================
    const readingMode = {
      fontSize: 20,
      themeIdx: 0, // 0: Dark, 1: Sepia, 2: Light
      themes: [
        { name: 'Dark', next: 'Sepia', cls: ['bg-[#120E18]', 'text-[#F1E9DF]'] },
        { name: 'Sepia', next: 'Light', cls: ['bg-[#F4ECD8]', 'text-[#2B2118]'] },
        { name: 'Light', next: 'Dark', cls: ['bg-[#FFFFFF]', 'text-[#1A1A1A]'] }
      ],
      open(poem) {
        recordReadingHistory(poem);
        document.getElementById('rm-title').textContent = poem.title;
        document.getElementById('rm-poet').textContent = `— ${poem.poet_name}`;
        document.getElementById('rm-body').textContent = poem.body;
        document.getElementById('rm-body').style.fontSize = `${this.fontSize}px`;
        const ov = document.getElementById('reading-mode-overlay');
        ov.classList.remove('hidden');
        ov.scrollTop = 0;
        ov.onscroll = () => {
          const max = ov.scrollHeight - ov.clientHeight;
          const pct = max > 0 ? Math.min(100, (ov.scrollTop / max) * 100) : 100;
          document.getElementById('rm-progress-bar').style.width = `${pct}%`;
        };
        lucide.createIcons();
      },
      close() { document.getElementById('reading-mode-overlay').classList.add('hidden'); },
      changeFontSize(delta) {
        this.fontSize = Math.max(14, Math.min(34, this.fontSize + delta));
        document.getElementById('rm-body').style.fontSize = `${this.fontSize}px`;
      },
      cycleTheme() {
        const ov = document.getElementById('reading-mode-overlay');
        ov.classList.remove(...this.themes[this.themeIdx].cls);
        this.themeIdx = (this.themeIdx + 1) % this.themes.length;
        ov.classList.add(...this.themes[this.themeIdx].cls);
        document.getElementById('reading-theme-btn').textContent = this.themes[this.themeIdx].next;
      }
    };

    function printPoemAsPDF(poemId) {
      const p = state.poems.find((x) => x.id === poemId);
      if (!p) return;
      const area = document.getElementById('print-poem-area');
      area.innerHTML = `
        <div style="max-width:700px;margin:0 auto;text-align:center;">
          <div style="font-size:12px;letter-spacing:3px;color:#777;margin-bottom:20px;">KOTHAVERSE • কথা VERSE</div>
          <h1 style="font-size:32px;font-weight:bold;margin-bottom:8px;">${escapeHtml(p.title)}</h1>
          <p style="font-size:16px;font-style:italic;color:#444;margin-bottom:32px;">— ${escapeHtml(p.poet_name)}</p>
          <div style="white-space:pre-line;line-height:2;font-size:18px;text-align:left;">${escapeHtml(p.body)}</div>
        </div>
      `;
      window.print();
    }

    const quoteCard = {
      current: null,
      open(quote) {
        this.current = quote;
        document.getElementById('qc-text').textContent = quote.quote_text;
        document.getElementById('qc-author').textContent = quote.author_name ? `— ${quote.author_name}` : '';
        document.getElementById('qc-source').textContent = quote.source_title || '';
        openModal('quote-modal');
      },
      copyText() {
        if (!this.current) return;
        copyTextToClipboard(`“${this.current.quote_text}”\n— ${this.current.author_name || 'KothaVerse'}\n\n#KothaVerse`);
      },
      downloadImage() {
        if (!this.current) return;
        const canvas = document.createElement('canvas');
        canvas.width = 1080; canvas.height = 1080;
        const ctx = canvas.getContext('2d');
        const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
        grad.addColorStop(0, '#17121F'); grad.addColorStop(0.5, '#352343'); grad.addColorStop(1, '#17121F');
        ctx.fillStyle = grad; ctx.fillRect(0, 0, 1080, 1080);
        ctx.strokeStyle = 'rgba(197, 164, 109, 0.5)'; ctx.lineWidth = 4; ctx.strokeRect(60, 60, 960, 960);
        ctx.fillStyle = 'rgba(197, 164, 109, 0.35)'; ctx.font = '140px "Playfair Display", serif'; ctx.textAlign = 'center';
        ctx.fillText('“', 540, 250);
        ctx.fillStyle = '#F1E9DF'; ctx.font = '44px "Noto Serif Bengali", serif';
        const words = this.current.quote_text.split(' ');
        let lines = [], line = '';
        for (const w of words) {
          const test = line ? `${line} ${w}` : w;
          if (ctx.measureText(test).width > 820) { lines.push(line); line = w; } else line = test;
        }
        if (line) lines.push(line);
        let y = 500 - ((lines.length - 1) * 34);
        lines.forEach((l) => { ctx.fillText(l, 540, y); y += 68; });
        ctx.fillStyle = '#C5A46D'; ctx.fillRect(480, y + 20, 120, 3);
        ctx.font = '32px "Noto Serif Bengali", serif';
        ctx.fillText(this.current.author_name ? `— ${this.current.author_name}` : 'KothaVerse', 540, y + 85);
        ctx.fillStyle = 'rgba(241, 233, 223, 0.5)'; ctx.font = '24px "Playfair Display", serif';
        ctx.fillText('KOTHAVERSE  •  শব্দের পরিপাটে, মনের আলাপন', 540, 955);
        const link = document.createElement('a');
        link.download = `KothaVerse-Quote-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('Quote Card ডাউনলোড হয়েছে!', 'success');
      }
    };

    function pickRandomQuote() {
      const pool = state.dailyQuotes.length > 1 ? state.dailyQuotes : DEMO_DATA.daily_quotes;
      const next = pool[Math.floor(Math.random() * pool.length)];
      state.dailyQuote = next;
      renderCurrentRoute();
    }

    // =========================================================================
    // 9. SUPABASE DATA FETCHING & AUTH MANAGEMENT
    // =========================================================================
    async function loadSessionAndProfile() {
      const { data: { session } } = await sb.auth.getSession();
      state.user = session?.user || null;
      if (state.user) {
        const { data } = await sb.from('profiles').select('*').eq('id', state.user.id).single();
        state.profile = data || null;
        await loadUserPersonalData();
      } else {
        state.profile = null; state.library = []; state.history = [];
      }
      renderAuthControls();
    }

    async function loadUserPersonalData() {
      if (!state.user) return;
      const [libRes, histRes, ebOrdRes, vcOrdRes] = await Promise.all([
        sb.from('user_library').select('*').eq('user_id', state.user.id),
        sb.from('listening_history').select('*').eq('user_id', state.user.id).order('last_played_at', { ascending: false }),
        sb.from('ebook_orders').select('*').eq('user_id', state.user.id).order('created_at', { ascending: false }),
        sb.from('voice_dedication_orders').select('*').eq('user_id', state.user.id).order('created_at', { ascending: false })
      ]);
      state.library = libRes.data || [];
      state.history = histRes.data || [];
      state.myEbookOrders = ebOrdRes.data || [];
      state.myVoiceOrders = vcOrdRes.data || [];
      if (typeof loadPhase2UserData === 'function') await loadPhase2UserData();
    }

    async function loadAllPublicContent() {
      try {
        const [catRes, poemRes, storyRes, recRes, ytRes, quoteRes, postRes, ebookRes, storeSetRes, siteSetRes] = await Promise.all([
          sb.from('categories').select('*').order('sort_order', { ascending: true }),
          sb.from('poems').select('*').order('created_at', { ascending: false }),
          sb.from('audio_stories').select('*').order('created_at', { ascending: false }),
          sb.from('recitations').select('*').order('created_at', { ascending: false }),
          sb.from('youtube_videos').select('*').order('published_at', { ascending: false }),
          sb.from('daily_quotes').select('*').order('scheduled_date', { ascending: false }).limit(20),
          sb.from('community_posts').select('*, profiles(full_name, username, avatar_url)').order('is_pinned', { ascending: false }).order('created_at', { ascending: false }),
          sb.from('ebooks').select('*').eq('is_published', true).order('created_at', { ascending: false }),
          sb.from('store_settings').select('*').eq('id', 1).maybeSingle(),
          sb.from('site_settings').select('settings').eq('id', 1).maybeSingle()
        ]);
        

        state.categories = !catRes.error && Array.isArray(catRes.data) ? catRes.data : DEMO_DATA.categories;
        state.poems = !poemRes.error && Array.isArray(poemRes.data) ? poemRes.data : DEMO_DATA.poems;
        state.audioStories = !storyRes.error && Array.isArray(storyRes.data) ? storyRes.data : DEMO_DATA.audio_stories;
        state.recitations = !recRes.error && Array.isArray(recRes.data) ? recRes.data : DEMO_DATA.recitations;
        state.youtubeVideos = !ytRes.error && Array.isArray(ytRes.data) ? ytRes.data : DEMO_DATA.youtube_videos;
        state.dailyQuotes = !quoteRes.error && Array.isArray(quoteRes.data) && quoteRes.data.length ? quoteRes.data : DEMO_DATA.daily_quotes;
        state.dailyQuote = state.dailyQuotes[0];
        state.communityPosts = !postRes.error && Array.isArray(postRes.data) ? postRes.data : DEMO_DATA.community_posts;
        state.ebooks = !ebookRes.error && Array.isArray(ebookRes.data) ? ebookRes.data : [];
        if (!storeSetRes.error && storeSetRes.data) {
          state.storeSettings = { ...state.storeSettings, ...storeSetRes.data };
        }
        if (!siteSetRes.error && siteSetRes.data?.settings) {
          applyRemoteSettingsToLocal(siteSetRes.data.settings);
        }
        
      } catch (err) {
        console.error('loadAllPublicContent failed:', err);
      }

      if (typeof loadPhase2PublicData === 'function') await loadPhase2PublicData();
      if (typeof loadPhase3PublicData === 'function') await loadPhase3PublicData();
      if (typeof loadStoreSettingsFromDB === 'function') await loadStoreSettingsFromDB();

    }

    function renderAuthControls() {
      const area = document.getElementById('nav-auth-area');
      const mobileAdminBtn = document.getElementById('mobile-admin-btn');
      const isAdmin = state.profile?.role === 'admin';
      if (mobileAdminBtn) mobileAdminBtn.classList.toggle('hidden', !isAdmin);

      if (!state.user) {
        area.innerHTML = `
          <button onclick="openAuthModal('login')" title="লগইন / সাইনআপ" class="p-2 rounded-xl border border-antiqueGold/25 bg-deepPurple/40 text-ivory/85 hover:text-antiqueGold hover:border-antiqueGold transition" aria-label="Login or Sign up">
            <i data-lucide="user" class="w-4 h-4"></i>
          </button>
        `;
      } else {
        const displayName = state.profile?.full_name || state.user.email.split('@')[0];
        area.innerHTML = `
          ${isAdmin ? `<button onclick="navigate('admin')" class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-antiqueGold/15 border border-antiqueGold/45 text-antiqueGold text-xs font-semibold hover:bg-antiqueGold hover:text-midnight transition"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Control Room</button>` : ''}
          <div class="relative group">
            <button class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-deepPurple/50 border border-antiqueGold/25 hover:border-antiqueGold transition">
              <div class="w-6 h-6 rounded-full bg-antiqueGold/25 text-antiqueGold flex items-center justify-center text-xs font-bold uppercase overflow-hidden">
                ${state.profile?.avatar_url ? `<img src="${escapeHtml(state.profile.avatar_url)}" class="w-full h-full object-cover" />` : escapeHtml(displayName[0])}
              </div>
              <span class="hidden md:inline text-xs font-bengali max-w-[90px] truncate">${escapeHtml(displayName)}</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-ivory/60"></i>
            </button>
            <div class="hidden group-hover:block absolute right-0 mt-1 w-48 glass-panel bg-midnight/95 rounded-2xl border border-antiqueGold/25 shadow-2xl p-2 font-bengali text-sm z-50">
              <button onclick="openProfileModal()" class="w-full text-left px-3 py-2 rounded-xl hover:bg-deepPurple/60 flex items-center gap-2"><i data-lucide="user-pen" class="w-4 h-4 text-antiqueGold"></i> প্রোফাইল ও সেটিংস</button>
              <button onclick="navigate('library')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-deepPurple/60 flex items-center gap-2"><i data-lucide="bookmark" class="w-4 h-4 text-antiqueGold"></i> আমার লাইব্রেরি</button>
              ${isAdmin ? `<button onclick="navigate('admin')" class="w-full text-left px-3 py-2 rounded-xl hover:bg-deepPurple/60 text-antiqueGold flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4"></i> Admin Panel</button>` : ''}
              <hr class="my-1 border-antiqueGold/15" />
              <button onclick="handleLogout()" class="w-full text-left px-3 py-2 rounded-xl hover:bg-red-500/20 text-red-300 flex items-center gap-2"><i data-lucide="log-out" class="w-4 h-4"></i> লগআউট</button>
            </div>
          </div>
        `;
      }
      lucide.createIcons();
    }

    function openAuthModal(mode = 'login') { switchAuthTab(mode); openModal('auth-modal'); }

    function switchAuthTab(mode) {
      state.authMode = mode;
      const loginBtn = document.getElementById('auth-tab-login');
      const signupBtn = document.getElementById('auth-tab-signup');
      const nameWrap = document.getElementById('auth-fullname-wrap');
      const submitBtn = document.getElementById('auth-submit-btn');
      if (mode === 'login') {
        loginBtn.className = 'py-2 rounded-lg bg-antiqueGold text-midnight font-semibold transition';
        signupBtn.className = 'py-2 rounded-lg text-ivory/80 hover:text-ivory transition';
        nameWrap.classList.add('hidden');
        submitBtn.textContent = 'লগইন করুন';
      } else {
        signupBtn.className = 'py-2 rounded-lg bg-antiqueGold text-midnight font-semibold transition';
        loginBtn.className = 'py-2 rounded-lg text-ivory/80 hover:text-ivory transition';
        nameWrap.classList.remove('hidden');
        submitBtn.textContent = 'অ্যাকাউন্ট তৈরি করুন';
      }
    }

    async function handleAuthSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('auth-email').value.trim();
      const password = document.getElementById('auth-password').value;
      const fullName = document.getElementById('auth-fullname').value.trim();

      if (state.authMode === 'login') {
        const { error } = await sb.auth.signInWithPassword({ email, password });
        if (error) return showToast(error.message, 'error');
        showToast('সফলভাবে লগইন হয়েছে!', 'success');
        closeModal('auth-modal');
        await loadSessionAndProfile();
        renderCurrentRoute();
      } else {
        const { error } = await sb.auth.signUp({
          email, password, options: { data: { full_name: fullName || email.split('@')[0] } }
        });
        if (error) return showToast(error.message, 'error');
        showToast('অ্যাকাউন্ট তৈরি হয়েছে! ইমেইল ভেরিফিকেশন চেক করুন।', 'success');
        closeModal('auth-modal');
        await loadSessionAndProfile();
        renderCurrentRoute();
      }
    }

    async function handleGoogleLogin() {
      const { error } = await sb.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.href }
      });
      if (error) showToast('Google Login ত্রুটি: ' + error.message, 'error');
    }

    async function handleForgotPassword() {
      const email = document.getElementById('auth-email').value.trim();
      if (!email) return showToast('পাসওয়ার্ড রিসেট করতে আগে ইমেইল লিখুন।', 'info');
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: window.location.href });
      if (error) return showToast(error.message, 'error');
      showToast('পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে!', 'success');
    }

    async function handleChangePassword(e) {
      e.preventDefault();
      const password = document.getElementById('prof-new-pass').value;
      const { error } = await sb.auth.updateUser({ password });
      if (error) return showToast('পাসওয়ার্ড আপডেট ব্যর্থ: ' + error.message, 'error');
      e.target.reset();
      showToast('পাসওয়ার্ড সফলভাবে পরিবর্তিত হয়েছে!', 'success');
    }

    async function handleLogout() {
      await sb.auth.signOut();
      state.user = null; state.profile = null; state.library = []; state.history = [];
      renderAuthControls();
      showToast('লগআউট সম্পন্ন হয়েছে।', 'info');
      if (state.route === 'admin') navigate('home'); else renderCurrentRoute();
    }

    function openProfileModal() {
      if (!state.user) return openAuthModal('login');
      document.getElementById('prof-fullname').value = state.profile?.full_name || '';
      document.getElementById('prof-username').value = state.profile?.username || '';
      document.getElementById('prof-bio').value = state.profile?.bio || '';
      openModal('profile-modal');
    }

    async function handleProfileUpdate(e) {
      e.preventDefault();
      if (!state.user) return;
      const full_name = document.getElementById('prof-fullname').value.trim();
      const username = document.getElementById('prof-username').value.trim() || null;
      const bio = document.getElementById('prof-bio').value.trim();
      const file = document.getElementById('prof-avatar-file').files[0];

      let avatar_url = state.profile?.avatar_url || null;
      if (file) {
        const path = `${state.user.id}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '')}`;
        const { error: upErr } = await sb.storage.from('avatars').upload(path, file, { upsert: true });
        if (!upErr) {
          const { data: pub } = sb.storage.from('avatars').getPublicUrl(path);
          avatar_url = pub.publicUrl;
        }
      }
      const { error } = await sb.from('profiles').update({ full_name, username, bio, avatar_url }).eq('id', state.user.id);
      if (error) return showToast('প্রোফাইল আপডেট ব্যর্থ: ' + error.message, 'error');
      showToast('প্রোফাইল আপডেট হয়েছে!', 'success');
      closeModal('profile-modal');
      await loadSessionAndProfile();
    }

    // =========================================================================
    // 10. FAVOURITE & BOOKMARK HELPERS
    // =========================================================================
    function getLibraryEntry(type, id) {
      return state.library.find((x) => x.target_type === type && x.target_id === id);
    }

    async function toggleLibraryFlag(type, id, field) {
      if (!state.user) { showToast('লাইব্রেরিতে সংরক্ষণ করতে আগে লগইন করুন।', 'info'); return openAuthModal('login'); }
      if (!isUUID(id)) return showToast('ডেমো কনটেন্ট সেভ হয় না। অ্যাডমিন প্যানেল থেকে আসল কনটেন্ট যোগ করুন।', 'info');
      const existing = getLibraryEntry(type, id);
      const nextVal = existing ? !existing[field] : true;
      const payload = {
        user_id: state.user.id, target_type: type, target_id: id,
        is_favourite: field === 'is_favourite' ? nextVal : (existing?.is_favourite || false),
        is_bookmarked: field === 'is_bookmarked' ? nextVal : (existing?.is_bookmarked || false)
      };
      const { error } = await sb.from('user_library').upsert(payload, { onConflict: 'user_id,target_type,target_id' });
      if (error) return showToast('সংরক্ষণ করা যায়নি: ' + error.message, 'error');
      await loadUserPersonalData();
      showToast(nextVal ? 'আপনার লাইব্রেরিতে যুক্ত হয়েছে!' : 'লাইব্রেরি থেকে সরানো হয়েছে।', 'success');
      if (state.activePoem && state.activePoem.id === id && !document.getElementById('poem-modal').classList.contains('hidden')) openPoemModal(id);
      else renderCurrentRoute();
    }

    // =========================================================================
    // =========================================================================
// 11. SPA ROUTER
// =========================================================================
function updateNavActiveState(route) {
  document.querySelectorAll('#desktop-nav .nav-link').forEach((btn) => {
    const active = btn.dataset.route === route;
    btn.classList.toggle('text-antiqueGold', active);
    btn.classList.toggle('bg-deepPurple/50', active);
  });
}

function navigate(route, { replace = false, smoothScroll = true } = {}) {
  const cleanRoute = route || 'home';

  if (cleanRoute === 'admin' && state.profile?.role !== 'admin') {
    showToast('শুধুমাত্র অ্যাডমিনরা Control Room ব্যবহার করতে পারবেন।', 'error');
    return;
  }

  state.route = cleanRoute;
  updateNavActiveState(cleanRoute);

  const targetHash = `#${cleanRoute}`;
  if (window.location.hash !== targetHash) {
    if (replace) {
      window.history.replaceState({ route: cleanRoute }, '', targetHash);
    } else {
      window.history.pushState({ route: cleanRoute }, '', targetHash);
    }
  }

  window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'auto' });
  renderCurrentRoute();
}

function renderCurrentRoute() {
  const root = document.getElementById('app-root');
  if (!root) return;

  switch (state.route) {
    case 'home': root.innerHTML = renderHomePage(); break;
    case 'poetry': root.innerHTML = renderPoetryPage(); break;
    case 'audio-stories': root.innerHTML = renderAudioStoriesPage(); break;
    case 'recitations': root.innerHTML = renderRecitationsPage(); break;
    case 'youtube': root.innerHTML = renderYouTubePage(); break;
    case 'community': root.innerHTML = renderCommunityPage(); break;
    case 'library': root.innerHTML = renderLibraryPage(); break;
    case 'about': root.innerHTML = renderAboutPage(); break;
    case 'contact': root.innerHTML = renderContactPage(); break;
    case 'store': root.innerHTML = renderStorePage(); break;
    case 'admin': root.innerHTML = renderAdminShell(); loadAdminTabData(); break;
    default: root.innerHTML = renderHomePage();
  }

  if (typeof lucide !== 'undefined' && lucide?.createIcons) {
    lucide.createIcons();
  }
}

function syncRouteFromLocation() {
  const hashRoute = (window.location.hash || '').replace(/^#/, '').trim();
  const nextRoute = hashRoute || 'home';
  const rawHash = (window.location.hash || '').replace(/^#/, '').trim();
if (rawHash.startsWith('chithi/')) {
  const code = rawHash.split('/')[1];
  if (code) openChithiByCode(code);
  return;
}

  if (nextRoute === 'admin' && state.profile?.role !== 'admin') {
    state.route = 'home';
    updateNavActiveState('home');
    renderCurrentRoute();
    return;
  }

  if (state.route !== nextRoute) {
    state.route = nextRoute;
    updateNavActiveState(nextRoute);
    renderCurrentRoute();
  }
}

window.addEventListener('popstate', () => {
  syncRouteFromLocation();
});

window.addEventListener('hashchange', () => {
  syncRouteFromLocation();
});

    // =========================================================================
    // 12. PAGE RENDERERS
    // =========================================================================
    function demoBadge(item) {
      return item?.isDemo ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bengali bg-antiqueGold/20 text-antiqueGold border border-antiqueGold/30">ডেমো</span>` : '';
    }
    function getCategoryName(catId) {
      return state.categories.find((c) => c.id === catId)?.name || 'সাহিত্য';
    }

    // ---- 12.1 HOME PAGE ----
    function renderHomePage() {
      const cfg = getSiteSettings();
      const featuredPoems = state.poems.filter((p) => p.is_featured).slice(0, 3);
      const showPoems = featuredPoems.length ? featuredPoems : state.poems.slice(0, 3);
      const popularPoems = [...state.poems].sort((a, b) => (b.views_count || 0) - (a.views_count || 0)).slice(0, 3);
      const latestStories = state.audioStories.slice(0, 3);
      const latestVideos = state.youtubeVideos.slice(0, 3);
      const quote = state.dailyQuote || DEMO_DATA.daily_quotes[0];
      const highlightPosts = state.communityPosts.slice(0, 2);
      const flashHtml = typeof renderFlashSaleBanner === 'function' ? renderFlashSaleBanner() : '';

      return `
        <div class="fade-in">
          <!-- Flash Sale Banner (Shudhu Active thaklei dekhabe) -->
          ${flashHtml ? `
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 cursor-pointer" onclick="if (!event.target.closest('button')) navigate('store')">
              ${flashHtml}
            </div>
          ` : ''}

          <section class="relative hero-glow pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 overflow-hidden">
            <div class="max-w-5xl mx-auto text-center relative z-10">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-bengali text-antiqueGold mb-6">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> বাংলা কবিতা, আবৃত্তি ও অডিও গল্পের অনন্য ভুবন
              </div>
              <h1 class="font-display text-5xl sm:text-7xl font-bold gold-gradient-text tracking-tight mb-4">${escapeHtml(cfg.siteName)}</h1>
              <p class="font-bengali text-xl sm:text-3xl text-ivory/90 font-medium mb-4">${escapeHtml(cfg.tagline)}</p>
              <p class="font-bengali text-sm sm:text-base text-ivory/65 max-w-2xl mx-auto mb-10 leading-relaxed">
                রাতের নিস্তব্ধতায় মনছুঁয়ে যাওয়া অডিও গল্প, হৃদয়স্পর্শী বাংলা কবিতা, আবেগময় আবৃত্তি এবং পাঠক-লেখকদের সৃজনশীল কমিউনিটি—সব এক ছাদের নিচে।
              </p>
              <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-bengali">
                <button onclick="navigate('poetry')" class="px-6 py-3.5 rounded-2xl bg-antiqueGold text-midnight font-semibold hover:scale-[1.02] transition shadow-gold flex items-center gap-2">
                  <i data-lucide="feather" class="w-4 h-4"></i> কবিতা পড়ুন
                </button>
                <button onclick="navigate('audio-stories')" class="px-6 py-3.5 rounded-2xl glass-panel border border-antiqueGold/40 text-ivory hover:bg-deepPurple/60 transition flex items-center gap-2">
                  <i data-lucide="headphones" class="w-4 h-4 text-antiqueGold"></i> অডিও গল্প শুনুন
                </button>
                <button onclick="openModal('ambient-modal')" class="px-5 py-3.5 rounded-2xl glass-panel border border-ivory/15 text-ivory/85 hover:border-antiqueGold transition flex items-center gap-2 text-sm">
                  <i data-lucide="cloud-rain" class="w-4 h-4 text-antiqueGold"></i> Sleep & Relax
                </button>
              </div>
            </div>
          </section>

          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            <!-- Quote of the Day + Random Quote Generator -->
            <section class="glass-panel rounded-3xl p-8 sm:p-12 border border-antiqueGold/30 text-center relative overflow-hidden">
              <div class="text-xs uppercase tracking-[0.25em] text-antiqueGold font-display mb-3">Quote of the Day • Daily Feelings</div>
              <blockquote class="font-bengali text-xl sm:text-3xl text-ivory leading-relaxed max-w-3xl mx-auto mb-5">
                “${escapeHtml(quote.quote_text)}”
              </blockquote>
              <p class="font-bengali text-sm text-antiqueGold mb-6">— ${escapeHtml(quote.author_name || 'KothaVerse')}</p>
              <div class="flex flex-wrap justify-center gap-3">
                <button onclick='quoteCard.open(${JSON.stringify(quote).replace(/'/g, "&#39;")})' class="px-5 py-2.5 rounded-xl bg-deepPurple/80 border border-antiqueGold/35 text-xs sm:text-sm font-bengali hover:bg-antiqueGold hover:text-midnight transition inline-flex items-center gap-2">
                  <i data-lucide="share-2" class="w-4 h-4"></i> Quote Card তৈরি করুন
                </button>
                <button onclick="pickRandomQuote()" class="px-4 py-2.5 rounded-xl border border-antiqueGold/25 text-xs sm:text-sm font-bengali text-ivory/80 hover:text-antiqueGold hover:border-antiqueGold transition inline-flex items-center gap-2">
                  <i data-lucide="shuffle" class="w-4 h-4"></i> নতুন অনুভূতি
                </button>
              </div>
            </section>

            <!-- Featured Poetry (Editor's Choice) -->
            <section>
              <div class="flex items-end justify-between mb-8">
                <div>
                  <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Editor's Choice • Featured</span>
                  <h2 class="font-bengali text-2xl sm:text-3xl font-bold mt-1">নির্বাচিত কবিতা</h2>
                </div>
                <button onclick="navigate('poetry')" class="text-sm font-bengali text-antiqueGold hover:underline flex items-center gap-1">সব দেখুন <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${showPoems.map((p) => renderPoemCard(p)).join('')}
              </div>
            </section>
            <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 font-bengali">
  <div class="glass-panel rounded-3xl overflow-hidden border border-antiqueGold/35 bg-gradient-to-r from-deepPurple/60 via-midnight/85 to-deepPurple/50 shadow-card grid grid-cols-1 md:grid-cols-12 items-center">
    
    <!-- Left Side: Image -->
    <div class="md:col-span-5 h-56 md:h-full relative overflow-hidden">
      <img
        src="KothaVerse Publishing & Voice Dedications.png"
        alt="KothaVerse Store & Gifts"
        class="w-full h-full object-cover hover:scale-105 transition duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-midnight/70 via-transparent to-transparent"></div>
    </div>

    <!-- Right Side: Text & Button -->
    <div class="md:col-span-7 p-6 sm:p-8 space-y-3">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-antiqueGold/15 border border-antiqueGold/35 text-[11px] text-antiqueGold">
        <i data-lucide="gift" class="w-3.5 h-3.5"></i> KothaVerse Store & Gifts
      </span>
      <h2 class="text-xl sm:text-2xl font-bold text-ivory leading-snug">ই-বুক সংকলন ও প্রিয়জনের নামে কাস্টম ভয়েস গিফট</h2>
      <p class="text-xs sm:text-sm text-ivory/70 leading-relaxed">আমাদের প্রকাশিত ই-বুক পড়ুন অথবা জন্মদিন ও বিশেষ দিনে কাস্টম আবৃত্তি উপহার দিন।</p>
      <div class="pt-1">
        <button onclick="navigate('store')" class="px-6 py-3 rounded-2xl bg-antiqueGold text-midnight font-semibold text-sm shadow-gold hover:opacity-90 transition inline-flex items-center gap-2">
          <i data-lucide="shopping-bag" class="w-4 h-4"></i> স্টোরে যান
        </button>
      </div>
    </div>

  </div>
</section>

            <!-- Trending & Popular Strip -->
            <section class="glass-panel rounded-3xl p-6 sm:p-8 border border-antiqueGold/20">
              <div class="flex items-center justify-between mb-5">
                <div>
                  <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Trending Now</span>
                  <h2 class="font-bengali text-xl sm:text-2xl font-bold mt-1">সর্বাধিক পঠিত কবিতা</h2>
                </div>
                <i data-lucide="flame" class="w-6 h-6 text-antiqueGold"></i>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${popularPoems.map((p, i) => `
                  <button onclick="openPoemModal('${p.id}')" class="text-left p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/15 hover:border-antiqueGold transition flex items-start gap-3">
                    <span class="font-display text-2xl font-bold text-antiqueGold/50">0${i + 1}</span>
                    <div class="min-w-0">
                      <div class="font-bengali font-semibold text-base truncate">${escapeHtml(p.title)}</div>
                      <div class="font-bengali text-xs text-ivory/60 mt-0.5">${escapeHtml(p.poet_name)} • ${p.views_count || 0} পাঠ</div>
                    </div>
                  </button>
                `).join('')}
              </div>
            </section>

            <!-- Latest Audio Stories -->
            <section>
              <div class="flex items-end justify-between mb-8">
                <div>
                  <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Latest Audio Stories</span>
                  <h2 class="font-bengali text-2xl sm:text-3xl font-bold mt-1">নতুন অডিও গল্প</h2>
                </div>
                <button onclick="navigate('audio-stories')" class="text-sm font-bengali text-antiqueGold hover:underline flex items-center gap-1">সব শুনুন <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${latestStories.map((s) => renderAudioStoryCard(s)).join('')}
              </div>
            </section>

            <!-- Latest YouTube Uploads -->
            <section>
              <div class="flex items-end justify-between mb-8">
                <div>
                  <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">YouTube Gallery</span>
                  <h2 class="font-bengali text-2xl sm:text-3xl font-bold mt-1">সাম্প্রতিক ভিডিও</h2>
                </div>
                <button onclick="navigate('youtube')" class="text-sm font-bengali text-antiqueGold hover:underline flex items-center gap-1">ভিডিও গ্যালারি <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                ${latestVideos.map((v) => `
                  <div class="glass-panel rounded-2xl overflow-hidden hover:border-antiqueGold/50 transition flex flex-col">
                    <div class="aspect-video bg-black">
                      <iframe class="w-full h-full" src="https://www.youtube.com/embed/${escapeHtml(extractYouTubeId(v.youtube_video_id))}" title="${escapeHtml(v.title)}" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                    </div>
                    <div class="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div class="flex items-center justify-between gap-2 mb-1">
                          <span class="text-[11px] uppercase text-antiqueGold">${escapeHtml(v.playlist_type)}</span>
                          ${demoBadge(v)}
                        </div>
                        <h3 class="font-bengali font-semibold text-base line-clamp-2">${escapeHtml(v.title)}</h3>
                      </div>
                      <a href="https://www.youtube.com/watch?v=${escapeHtml(v.youtube_video_id)}" target="_blank" rel="noopener" class="mt-3 text-xs text-antiqueGold hover:underline inline-flex items-center gap-1">YouTube-এ দেখুন <i data-lucide="external-link" class="w-3.5 h-3.5"></i></a>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- Popular Collections & Community Highlights -->
            <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div class="glass-panel rounded-3xl p-6 sm:p-8">
                <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Popular Collections</span>
                <h2 class="font-bengali text-2xl font-bold mt-1 mb-5">জনপ্রিয় বিভাগসমূহ</h2>
                <div class="flex flex-wrap gap-2 font-bengali">
                  ${state.categories.map((c) => `
                    <button onclick="state.poetryFilter.categoryId='${c.id}'; navigate('poetry')" class="px-3.5 py-2 rounded-xl bg-midnight/70 border border-antiqueGold/25 hover:border-antiqueGold hover:text-antiqueGold transition text-xs sm:text-sm">
                      # ${escapeHtml(c.name)}
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="glass-panel rounded-3xl p-6 sm:p-8">
                <div class="flex items-center justify-between mb-5">
                  <div>
                    <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Community Highlights</span>
                    <h2 class="font-bengali text-2xl font-bold mt-1">পাঠকদের মতামত</h2>
                  </div>
                  <button onclick="navigate('community')" class="text-xs font-bengali text-antiqueGold hover:underline">কমিউনিটিতে যান</button>
                </div>
                <div class="space-y-4">
                  ${highlightPosts.map((post) => `
                    <div class="p-4 rounded-2xl bg-midnight/60 border border-antiqueGold/15">
                      <h4 class="font-bengali font-semibold text-sm text-antiqueGold mb-1">${escapeHtml(post.title)}</h4>
                      <p class="font-bengali text-xs text-ivory/75 line-clamp-2">${escapeHtml(post.body)}</p>
                      <div class="mt-2 text-[11px] text-ivory/50 font-bengali">— ${escapeHtml(post.profiles?.full_name || 'পাঠক')}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </section>

            <!-- Newsletter Section -->
            <section class="glass-panel rounded-3xl p-8 sm:p-12 border border-antiqueGold/30 text-center">
              <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Newsletter</span>
              <h2 class="font-bengali text-2xl sm:text-3xl font-bold mt-1 mb-3">নতুন কবিতা ও গল্পের খবর পান সবার আগে</h2>
              <p class="font-bengali text-sm text-ivory/70 max-w-xl mx-auto mb-6">প্রতি সপ্তাহের নির্বাচিত কবিতা, নতুন অডিও গল্প এবং বিশেষ আবৃত্তির আপডেট সরাসরি আপনার ইনবক্স ও WhatsApp-এ।</p>
              <form onsubmit="handleNewsletterSubmit(event)" class="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <input id="nl-name" type="text" placeholder="আপনার নাম" class="px-4 py-3 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm font-bengali focus:outline-none focus:border-antiqueGold" />
                <input id="nl-email" type="email" required placeholder="আপনার ইমেইল ঠিকানা*" class="px-4 py-3 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
                <input id="nl-whatsapp" type="tel" required placeholder="WhatsApp নম্বর (10 digit)*" class="px-4 py-3 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm font-bengali focus:outline-none focus:border-antiqueGold" />
                <button type="submit" class="px-6 py-3 rounded-xl bg-antiqueGold text-midnight font-bengali font-semibold hover:opacity-90 transition shadow-gold">সাবস্ক্রাইব</button>
              </form>
            </section>

            <!-- Footer -->
            <footer class="pt-10 pb-6 border-t border-antiqueGold/15 text-sm text-ivory/65 font-bengali">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 class="font-display text-xl gold-gradient-text font-semibold mb-2">${escapeHtml(cfg.siteName)}</h3>
                  <p class="text-xs leading-relaxed">${escapeHtml(cfg.tagline)}। বাংলা সাহিত্য, আবৃত্তি ও অডিও গল্পের একটি আধুনিক ডিজিটাল আশ্রয়।</p>
                </div>
                <div>
                  <h4 class="text-antiqueGold font-semibold mb-3">দ্রুত লিংক</h4>
                  <div class="grid grid-cols-2 gap-2 text-xs">
                    <button onclick="navigate('poetry')" class="text-left hover:text-antiqueGold">কবিতার সংগ্রহ</button>
                    <button onclick="navigate('audio-stories')" class="text-left hover:text-antiqueGold">অডিও গল্প</button>
                    <button onclick="navigate('recitations')" class="text-left hover:text-antiqueGold">আবৃত্তি</button>
                    <button onclick="navigate('community')" class="text-left hover:text-antiqueGold">Write With KothaVerse</button>
                    <button onclick="navigate('about')" class="text-left hover:text-antiqueGold">পরিচিতি</button>
                    <button onclick="navigate('contact')" class="text-left hover:text-antiqueGold">যোগাযোগ</button>
                  </div>
                </div>
                <div>
                  <h4 class="text-antiqueGold font-semibold mb-3">যুক্ত থাকুন</h4>
                  <div class="flex items-center gap-3">
                    <a href="${escapeHtml(cfg.youtubeUrl)}" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="p-2.5 rounded-xl bg-deepPurple/60 border border-antiqueGold/25 hover:border-antiqueGold text-ivory hover:text-antiqueGold transition-all"><i data-lucide="youtube" class="w-4 h-4"></i></a>
                    <a href="${escapeHtml(cfg.facebookUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="p-2.5 rounded-xl bg-deepPurple/60 border border-antiqueGold/25 hover:border-antiqueGold text-ivory hover:text-antiqueGold transition-all"><i data-lucide="facebook" class="w-4 h-4"></i></a>
                    <a href="${escapeHtml(cfg.instagramUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="p-2.5 rounded-xl bg-deepPurple/60 border border-antiqueGold/25 hover:border-antiqueGold text-ivory hover:text-antiqueGold transition-all"><i data-lucide="instagram" class="w-4 h-4"></i></a>
                    <button onclick="navigate('contact')" aria-label="Contact" class="p-2.5 rounded-xl bg-deepPurple/60 border border-antiqueGold/25 hover:border-antiqueGold text-ivory hover:text-antiqueGold"><i data-lucide="mail" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>
              <div class="text-center text-xs text-ivory/40">© 2026 ${escapeHtml(cfg.siteName)}. সর্বস্বত্ব সংরক্ষিত।</div>
            </footer>
          </div>
        </div>
      `;
    }

    // ---- 12.2 POETRY COLLECTION PAGE ----
    function renderPoemCard(p) {
      const lib = getLibraryEntry('poem', p.id);
      return `
        <article class="glass-panel rounded-2xl overflow-hidden hover:border-antiqueGold/50 hover:-translate-y-1 transition duration-300 flex flex-col shadow-card">
          <div class="relative h-48 overflow-hidden cursor-pointer" onclick="openPoemModal('${p.id}')">
            <img src="${safeCover(p.cover_image_url, p.title)}" onerror="this.src='https://placehold.co/600x400/352343/C5A46D?text=KothaVerse'" alt="${escapeHtml(p.title)}" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
            <div class="absolute top-3 left-3 flex gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bengali bg-midnight/80 text-antiqueGold border border-antiqueGold/30">${escapeHtml(getCategoryName(p.category_id))}</span>
              ${demoBadge(p)}
            </div>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 onclick="openPoemModal('${p.id}')" class="font-bengali text-xl font-bold text-ivory hover:text-antiqueGold cursor-pointer mb-1">${escapeHtml(p.title)}</h3>
              <button onclick="openPoetProfile('${escapeHtml(p.poet_name)}')" class="font-bengali text-xs text-antiqueGold/90 hover:underline">— ${escapeHtml(p.poet_name)}</button>
              <p class="font-bengali text-sm text-ivory/70 line-clamp-3 leading-relaxed">${escapeHtml(p.excerpt || p.body)}</p>
            </div>
            <div class="mt-5 pt-3 border-t border-antiqueGold/15 flex items-center justify-between gap-2">
              <button onclick="openPoemModal('${p.id}')" class="text-xs font-bengali font-semibold text-antiqueGold hover:underline flex items-center gap-1">সম্পূর্ণ পড়ুন <i data-lucide="book-open" class="w-3.5 h-3.5"></i></button>
              <div class="flex items-center gap-1.5">
                ${p.audio_url ? `<button onclick="playPoemAudio('${p.id}')" title="আবৃত্তি শুনুন" class="p-2 rounded-lg bg-antiqueGold/15 text-antiqueGold hover:bg-antiqueGold hover:text-midnight transition"><i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i></button>` : ''}
                <button onclick="toggleLibraryFlag('poem','${p.id}','is_favourite')" title="Favourite" class="p-2 rounded-lg hover:bg-deepPurple/60 ${lib?.is_favourite ? 'text-rose-400' : 'text-ivory/60'}"><i data-lucide="heart" class="w-3.5 h-3.5 ${lib?.is_favourite ? 'fill-current' : ''}"></i></button>
                <button onclick="toggleLibraryFlag('poem','${p.id}','is_bookmarked')" title="Bookmark" class="p-2 rounded-lg hover:bg-deepPurple/60 ${lib?.is_bookmarked ? 'text-antiqueGold' : 'text-ivory/60'}"><i data-lucide="bookmark" class="w-3.5 h-3.5 ${lib?.is_bookmarked ? 'fill-current' : ''}"></i></button>
              </div>
            </div>
            <div class="flex items-center justify-between mb-3">
  <span id="poem-views-${p.id}" class="text-[11px] text-ivory/50 font-bengali">${p.views_count || 0} পাঠ</span>
</div>

          </div>
        </article>
      `;
    }

    function renderPoetryPage() {
      const { categoryId, search, sort } = state.poetryFilter;
      const q = normalizeSearch(search);
      let filtered = state.poems.filter((p) => {
        const matchCat = categoryId === 'all' || p.category_id === categoryId;
        const matchQ = !q || normalizeSearch(`${p.title} ${p.poet_name} ${p.body}`).includes(q);
        return matchCat && matchQ;
      });
      if (sort === 'popular') filtered = [...filtered].sort((a, b) => (b.views_count || 0) - (a.views_count || 0));
      else if (sort === 'oldest') filtered = [...filtered].reverse();

      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-in">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Poetry Collection</span>
              <h1 class="font-bengali text-3xl sm:text-4xl font-bold mt-1">কবিতার সংগ্রহ</h1>
            </div>
            <div class="flex flex-wrap items-center gap-2.5">
              <div class="relative flex-1 sm:w-64">
                <i data-lucide="search" class="w-4 h-4 text-ivory/50 absolute left-3.5 top-1/2 -translate-y-1/2"></i>
                <input type="text" value="${escapeHtml(search)}" oninput="state.poetryFilter.search=this.value; renderCurrentRoute()" placeholder="কবিতা বা কবির নাম খুঁজুন..." class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-deepPurple/40 border border-antiqueGold/25 text-sm font-bengali focus:outline-none focus:border-antiqueGold" />
              </div>
              <select onchange="state.poetryFilter.sort=this.value; renderCurrentRoute()" class="px-3.5 py-2.5 rounded-xl bg-deepPurple/50 border border-antiqueGold/25 text-xs font-bengali text-ivory focus:outline-none focus:border-antiqueGold">
                <option value="newest" ${sort === 'newest' ? 'selected' : ''}>সর্বশেষ</option>
                <option value="popular" ${sort === 'popular' ? 'selected' : ''}>জনপ্রিয়</option>
                <option value="oldest" ${sort === 'oldest' ? 'selected' : ''}>পুরোনো</option>
              </select>
              <button onclick="state.communityTab='submit'; navigate('community')" class="px-4 py-2.5 rounded-xl bg-antiqueGold text-midnight text-xs font-bengali font-semibold hover:opacity-90">+ কবিতা পাঠান</button>
            </div>
          </div>

          <!-- Category Pills -->
          <div class="flex flex-wrap gap-2 mb-8 font-bengali text-xs sm:text-sm">
            <button onclick="state.poetryFilter.categoryId='all'; renderCurrentRoute()" class="px-4 py-2 rounded-full border transition ${categoryId === 'all' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'border-antiqueGold/25 bg-deepPurple/30 text-ivory/80 hover:border-antiqueGold'}">সব কবিতা</button>
            ${state.categories.map((c) => `
              <button onclick="state.poetryFilter.categoryId='${c.id}'; renderCurrentRoute()" class="px-4 py-2 rounded-full border transition ${categoryId === c.id ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'border-antiqueGold/25 bg-deepPurple/30 text-ivory/80 hover:border-antiqueGold'}">${escapeHtml(c.name)}</button>
            `).join('')}
          </div>

          ${filtered.length ? `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${filtered.map((p) => renderPoemCard(p)).join('')}
            </div>
          ` : `<div class="glass-panel rounded-2xl p-12 text-center font-bengali text-ivory/60">এই বিভাগে এখনো কোনো কবিতা পাওয়া যায়নি।</div>`}
        </div>
      `;
    }

    function playPoemAudio(poemId) {
      const p = state.poems.find((x) => x.id === poemId);
      if (!p || !p.audio_url) return;
      audioEngine.loadAndPlay({
        id: p.id, type: 'poem', title: p.title, subtitle: `কবি: ${p.poet_name}`,
        cover: p.cover_image_url, url: p.audio_url, duration: p.audio_duration_sec || 140
      });
    }

    async function openPoemModal(poemId) {
      const p = state.poems.find((x) => x.id === poemId);
      if (!p) return;
      state.activePoem = p;
      trackPoemView(p);
      recordReadingHistory(p);
      const lib = getLibraryEntry('poem', p.id);
      const related = state.poems.filter((x) => x.id !== p.id && x.category_id === p.category_id).slice(0, 2);

      let comments = [];
      if (isUUID(p.id)) {
        const { data } = await sb.from('comments').select('*, profiles(full_name)').eq('target_type', 'poem').eq('target_id', p.id).order('created_at', { ascending: false });
        comments = data || [];
      }

      document.getElementById('poem-modal-content').innerHTML = `
        <div class="relative h-52 sm:h-64">
          <img src="${safeCover(p.cover_image_url, p.title)}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent"></div>
          <button onclick="closeModal('poem-modal')" class="absolute top-4 right-4 p-2 rounded-full bg-midnight/70 text-ivory hover:text-antiqueGold"><i data-lucide="x" class="w-5 h-5"></i></button>
          <div class="absolute bottom-4 left-6 right-6">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bengali bg-antiqueGold/20 text-antiqueGold border border-antiqueGold/30">${escapeHtml(getCategoryName(p.category_id))}</span>
            <h2 class="font-bengali text-2xl sm:text-3xl font-bold text-ivory mt-2">${escapeHtml(p.title)}</h2>
            <p class="font-bengali text-sm text-antiqueGold">— ${escapeHtml(p.poet_name)}</p>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-antiqueGold/15 font-bengali text-xs sm:text-sm">
            <div class="flex flex-wrap gap-2">
              ${p.audio_url ? `<button onclick="playPoemAudio('${p.id}')" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold flex items-center gap-1.5"><i data-lucide="play" class="w-4 h-4 fill-current"></i> আবৃত্তি শুনুন</button>` : ''}
              <button onclick='readingMode.open(${JSON.stringify(p).replace(/'/g, "&#39;")})' class="px-4 py-2 rounded-xl bg-deepPurple/70 border border-antiqueGold/30 text-ivory hover:border-antiqueGold flex items-center gap-1.5"><i data-lucide="maximize-2" class="w-4 h-4 text-antiqueGold"></i> Reading Mode</button>
              <button onclick="printPoemAsPDF('${p.id}')" class="px-3.5 py-2 rounded-xl border border-antiqueGold/25 text-ivory/85 hover:text-antiqueGold flex items-center gap-1.5"><i data-lucide="printer" class="w-4 h-4"></i> PDF / Print</button>
            </div>
            <div class="flex items-center gap-1.5">
              <button onclick="copyTextToClipboard(\`${escapeHtml(p.title)} — ${escapeHtml(p.poet_name)}\\n\\n${escapeHtml(p.body)}\\n\\n— KothaVerse\`)" title="কবিতা কপি করুন" class="p-2 rounded-xl border border-antiqueGold/25 text-ivory/75 hover:text-antiqueGold"><i data-lucide="copy" class="w-4 h-4"></i></button>
              <button onclick="toggleLibraryFlag('poem','${p.id}','is_favourite')" class="p-2 rounded-xl border border-antiqueGold/25 ${lib?.is_favourite ? 'text-rose-400 bg-rose-500/10' : 'text-ivory/70'}"><i data-lucide="heart" class="w-4 h-4 ${lib?.is_favourite ? 'fill-current' : ''}"></i></button>
              <button onclick="toggleLibraryFlag('poem','${p.id}','is_bookmarked')" class="p-2 rounded-xl border border-antiqueGold/25 ${lib?.is_bookmarked ? 'text-antiqueGold bg-antiqueGold/10' : 'text-ivory/70'}"><i data-lucide="bookmark" class="w-4 h-4 ${lib?.is_bookmarked ? 'fill-current' : ''}"></i></button>
            </div>
          </div>

          <div class="font-bengali text-base sm:text-lg leading-loose whitespace-pre-line text-ivory/95 py-2">${escapeHtml(p.body)}</div>

          ${related.length ? `
            <div class="pt-5 border-t border-antiqueGold/15">
              <h4 class="font-bengali text-sm font-semibold text-antiqueGold mb-3">আরও পড়ুন</h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${related.map((r) => `
                  <button onclick="openPoemModal('${r.id}')" class="text-left p-3 rounded-xl bg-deepPurple/40 border border-antiqueGold/15 hover:border-antiqueGold transition">
                    <div class="font-bengali font-semibold text-sm">${escapeHtml(r.title)}</div>
                    <div class="font-bengali text-xs text-ivory/60">${escapeHtml(r.poet_name)}</div>
                  </button>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div class="pt-5 border-t border-antiqueGold/15">
            <h4 class="font-bengali text-sm font-semibold text-antiqueGold mb-3">পাঠকের মন্তব্য (${comments.length})</h4>
            <form onsubmit="submitComment(event, 'poem', '${p.id}')" class="flex gap-2 mb-4">
              <input id="comment-input-${p.id}" type="text" required placeholder="আপনার অনুভূতি লিখুন..." class="flex-1 px-4 py-2 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm font-bengali focus:outline-none focus:border-antiqueGold" />
              <button type="submit" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-bengali font-semibold text-xs">মন্তব্য</button>
            </form>
            <div class="space-y-2.5 max-h-56 overflow-y-auto">
              ${comments.length ? comments.map((c) => `
                <div class="p-3 rounded-xl bg-deepPurple/30 border border-antiqueGold/10 flex justify-between gap-3">
                  <div>
                    <div class="text-xs font-bengali font-semibold text-antiqueGold">${escapeHtml(c.profiles?.full_name || 'পাঠক')}</div>
                    <p class="text-sm font-bengali text-ivory/85 mt-0.5">${escapeHtml(c.body)}</p>
                  </div>
                  <button onclick="openReportModal('comment', '${c.id}')" title="Report" class="text-ivory/40 hover:text-red-400 self-start"><i data-lucide="flag" class="w-3.5 h-3.5"></i></button>
                </div>
              `).join('') : `<p class="text-xs font-bengali text-ivory/50">এখনো কোনো মন্তব্য নেই। প্রথম মন্তব্যটি আপনিই করুন!</p>`}
            </div>
            <button onclick="openChithiCreator('${p.id}')" class="px-3.5 py-2 rounded-xl bg-antiqueGold/15 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight transition flex items-center gap-1.5">
  <i data-lucide="mail-heart" class="w-4 h-4"></i> চিঠি পাঠান
</button>
${(state.profile?.role === 'admin' || (state.user && p.created_by === state.user.id)) ? `
  <button onclick="downloadPoetCertificateCard('${p.id}')" class="px-3.5 py-2 rounded-xl border border-antiqueGold/25 text-ivory/85 hover:text-antiqueGold flex items-center gap-1.5">
    <i data-lucide="award" class="w-4 h-4"></i> Poet Card (QR)
  </button>
` : ''}
          </div>
        </div>
      `;
      openModal('poem-modal');
    }

    async function submitComment(e, targetType, targetId) {
      e.preventDefault();
      if (!state.user) { showToast('মন্তব্য করতে লগইন করুন।', 'info'); return openAuthModal('login'); }
      if (!isUUID(targetId)) return showToast('ডেমো কনটেন্টে মন্তব্য সেভ হয় না।', 'info');
      const input = document.getElementById(`comment-input-${targetId}`);
      const body = input.value.trim();
      if (!body) return;
      const { error } = await sb.from('comments').insert({ user_id: state.user.id, target_type: targetType, target_id: targetId, body });
      if (error) return showToast('মন্তব্য যোগ ব্যর্থ: ' + error.message, 'error');
      input.value = '';
      showToast('মন্তব্য প্রকাশিত হয়েছে!', 'success');
      if (targetType === 'poem') openPoemModal(targetId); else renderCurrentRoute();
    }

    // ---- 12.3 AUDIO STORIES PAGE ----
    function renderAudioStoryCard(s) {
      const lib = getLibraryEntry('audio_story', s.id);
      return `
        <div class="glass-panel rounded-2xl overflow-hidden hover:border-antiqueGold/50 transition flex flex-col shadow-card">
          <div class="relative h-48 overflow-hidden">
            <img src="${safeCover(s.cover_image_url, s.title)}" onerror="this.src='https://placehold.co/600x400/352343/C5A46D?text=Audio+Story'" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent"></div>
            <div class="absolute top-3 left-3 flex gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-midnight/80 text-antiqueGold border border-antiqueGold/30">${formatTime(s.duration_sec)}</span>
              ${demoBadge(s)}
            </div>
            <button onclick="playStory('${s.id}')" class="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-antiqueGold text-midnight flex items-center justify-center shadow-gold hover:scale-105 transition">
              <i data-lucide="play" class="w-5 h-5 fill-current"></i>
            </button>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="font-bengali text-xl font-bold mb-1">${escapeHtml(s.title)}</h3>
              <p class="font-bengali text-xs text-antiqueGold mb-2">লেখক: ${escapeHtml(s.author_name)} • ${escapeHtml(s.narrator_name)}</p>
              <p class="font-bengali text-sm text-ivory/70 line-clamp-3">${escapeHtml(s.description || '')}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-antiqueGold/15 flex items-center justify-between">
              <button onclick="playStory('${s.id}')" class="text-xs font-bengali font-semibold text-antiqueGold hover:underline flex items-center gap-1"><i data-lucide="headphones" class="w-3.5 h-3.5"></i> এখনই শুনুন</button>
              <div class="flex gap-1.5">
                <button onclick="toggleLibraryFlag('audio_story','${s.id}','is_favourite')" class="p-1.5 rounded-lg hover:bg-deepPurple/60 ${lib?.is_favourite ? 'text-rose-400' : 'text-ivory/60'}"><i data-lucide="heart" class="w-4 h-4 ${lib?.is_favourite ? 'fill-current' : ''}"></i></button>
                <button onclick="toggleLibraryFlag('audio_story','${s.id}','is_bookmarked')" class="p-1.5 rounded-lg hover:bg-deepPurple/60 ${lib?.is_bookmarked ? 'text-antiqueGold' : 'text-ivory/60'}"><i data-lucide="bookmark" class="w-4 h-4 ${lib?.is_bookmarked ? 'fill-current' : ''}"></i></button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function playStory(id, resumeSec = 0) {
      const idx = state.audioStories.findIndex((x) => x.id === id);
      if (idx === -1) return;
      const queue = state.audioStories.map((s) => ({
        id: s.id, type: 'audio_story', title: s.title, subtitle: `${s.author_name} • ${s.narrator_name}`,
        cover: s.cover_image_url, url: s.audio_url, duration: s.duration_sec || 300
      }));
      audioEngine.queue = queue;
      audioEngine.queueIndex = idx;
      audioEngine.loadAndPlay(queue[idx], resumeSec, false);
    }

    function renderAudioStoriesPage() {
      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-in">
          <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Audio Stories</span>
              <h1 class="font-bengali text-3xl sm:text-4xl font-bold mt-1">অডিও গল্প</h1>
              <p class="font-bengali text-sm text-ivory/65 mt-2">ব্যাকগ্রাউন্ড প্লেব্যাক, অটো-প্লে কিউ এবং রাতের জন্য Sleep & Ambient Mode সহ।</p>
            </div>
            <button onclick="openModal('ambient-modal')" class="px-4 py-2.5 rounded-xl glass-panel border border-antiqueGold/35 text-xs font-bengali text-antiqueGold flex items-center gap-2"><i data-lucide="cloud-rain" class="w-4 h-4"></i> বৃষ্টির আবহ যোগ করুন</button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${state.audioStories.map((s) => renderAudioStoryCard(s)).join('')}
          </div>
        </div>
      `;
    }

    // ---- 12.4 VOICE & RECITATION PAGE ----
    function playRecitation(id, resumeSec = 0) {
      const idx = state.recitations.findIndex((x) => x.id === id);
      if (idx === -1) return;
      const queue = state.recitations.map((r) => ({
        id: r.id, type: 'recitation', title: r.title, subtitle: `${r.poet_name} • ${r.reciter_name}`,
        cover: r.cover_image_url, url: r.audio_url, duration: r.duration_sec || 180
      }));
      audioEngine.queue = queue;
      audioEngine.queueIndex = idx;
      audioEngine.loadAndPlay(queue[idx], resumeSec, false);
    }

    function renderRecitationsPage() {
      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-in">
          <div class="mb-8">
            <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Voice & Recitation</span>
            <h1 class="font-bengali text-3xl sm:text-4xl font-bold mt-1">আবৃত্তি ও কণ্ঠশিল্প</h1>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${state.recitations.map((r) => `
              <div class="glass-panel rounded-2xl p-5 flex flex-col gap-4 border border-antiqueGold/20 hover:border-antiqueGold/50 transition">
                <div class="flex items-center gap-4">
                  <img src="${safeCover(r.cover_image_url, r.title)}" class="w-20 h-20 rounded-2xl object-cover border border-antiqueGold/30 shrink-0" />
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                      <h3 class="font-bengali text-lg font-bold truncate">${escapeHtml(r.title)}</h3>
                      ${demoBadge(r)}
                    </div>
                    <p class="font-bengali text-xs text-antiqueGold mt-0.5">কবি: ${escapeHtml(r.poet_name)}</p>
                    <p class="font-bengali text-xs text-ivory/70">${escapeHtml(r.reciter_name)} • ${formatTime(r.duration_sec)}</p>
                  </div>
                  <button onclick="playRecitation('${r.id}')" class="w-11 h-11 rounded-full bg-antiqueGold text-midnight flex items-center justify-center shrink-0 hover:scale-105 transition shadow-gold">
                    <i data-lucide="play" class="w-5 h-5 fill-current"></i>
                  </button>
                </div>
                ${r.transcript ? `
                  <details class="group bg-midnight/50 rounded-xl p-3 border border-antiqueGold/10">
                    <summary class="cursor-pointer font-bengali text-xs text-antiqueGold font-medium list-none flex items-center justify-between">
                      <span>কবিতার পাঠ (Transcript) দেখুন</span>
                      <i data-lucide="chevron-down" class="w-4 h-4 group-open:rotate-180 transition"></i>
                    </summary>
                    <p class="font-bengali text-sm text-ivory/80 whitespace-pre-line mt-3 leading-relaxed">${escapeHtml(r.transcript)}</p>
                  </details>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // ---- 12.5 YOUTUBE GALLERY PAGE ----
    function renderYouTubePage() {
      const cfg = getSiteSettings();
      const f = state.youtubeFilter;
      const q = normalizeSearch(state.youtubeSearch);
      const featured = state.youtubeVideos.find((v) => v.is_featured || v.playlist_type === 'featured') || state.youtubeVideos[0];
      const list = state.youtubeVideos.filter((v) => {
        const matchTab = f === 'all' || v.playlist_type === f;
        const matchQ = !q || normalizeSearch(`${v.title} ${v.description}`).includes(q);
        return matchTab && matchQ;
      });

      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-in">
          <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">YouTube Video Gallery</span>
              <h1 class="font-bengali text-3xl sm:text-4xl font-bold mt-1">ভিডিও ও শর্টস গ্যালারি</h1>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <input type="text" value="${escapeHtml(state.youtubeSearch)}" oninput="state.youtubeSearch=this.value; renderCurrentRoute()" placeholder="ভিডিও খুঁজুন..." class="px-4 py-2 rounded-xl bg-deepPurple/40 border border-antiqueGold/25 text-xs font-bengali focus:outline-none focus:border-antiqueGold" />
              <a href="${escapeHtml(cfg.youtubeUrl)}" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold inline-flex items-center gap-2 transition">
                <i data-lucide="youtube" class="w-4 h-4"></i> Subscribe KothaVerse
              </a>
            </div>
          </div>

          ${featured ? `
            <div class="glass-panel rounded-3xl overflow-hidden border border-antiqueGold/30 mb-10 grid grid-cols-1 lg:grid-cols-3">
              <div class="lg:col-span-2 aspect-video bg-black">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/${escapeHtml(extractYouTubeId(featured.youtube_video_id))}" title="${escapeHtml(featured.title)}" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div class="p-6 flex flex-col justify-between">
                <div>
                  <span class="px-3 py-1 rounded-full text-xs bg-antiqueGold/20 text-antiqueGold border border-antiqueGold/30">Featured Video</span>
                  <h2 class="font-bengali text-2xl font-bold mt-3 mb-2">${escapeHtml(featured.title)}</h2>
                  <p class="font-bengali text-sm text-ivory/70 leading-relaxed">${escapeHtml(featured.description || '')}</p>
                </div>
                <a href="https://www.youtube.com/watch?v=${escapeHtml(featured.youtube_video_id)}" target="_blank" rel="noopener" class="mt-6 px-4 py-2.5 rounded-xl border border-antiqueGold/35 text-center text-sm font-bengali text-antiqueGold hover:bg-antiqueGold hover:text-midnight transition">YouTube-এ দেখুন</a>
              </div>
            </div>
          ` : ''}

          <div class="flex flex-wrap gap-2 mb-6 font-bengali text-sm">
            ${[
              ['all', 'সব ভিডিও'],
              ['latest', 'Latest Uploads'],
              ['poetry', 'Poetry Playlist'],
              ['audio_story', 'Audio Stories'],
              ['shorts', 'YouTube Shorts']
            ].map(([val, label]) => `
              <button onclick="state.youtubeFilter='${val}'; renderCurrentRoute()" class="px-4 py-2 rounded-full border transition ${f === val ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'border-antiqueGold/25 bg-deepPurple/30 text-ivory/80'}">${label}</button>
            `).join('')}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${list.map((v) => `
              <div class="glass-panel rounded-2xl overflow-hidden flex flex-col">
                <div class="aspect-video bg-black">
                  <iframe class="w-full h-full" src="https://www.youtube.com/embed/${escapeHtml(v.youtube_video_id)}" title="${escapeHtml(v.title)}" frameborder="0" allowfullscreen loading="lazy"></iframe>
                </div>
                <div class="p-4">
                  <span class="text-[10px] uppercase text-antiqueGold">${escapeHtml(v.playlist_type)}</span>
                  <h3 class="font-bengali font-semibold text-base mt-0.5">${escapeHtml(v.title)}</h3>
                  <p class="font-bengali text-xs text-ivory/60 mt-1 line-clamp-2">${escapeHtml(v.description || '')}</p>
                </div>
              </div>
            `).join('') || `<div class="col-span-full glass-panel rounded-2xl p-10 text-center font-bengali text-ivory/60">কোনো ভিডিও পাওয়া যায়নি।</div>`}
          </div>
        </div>
      `;
    }

    // ---- 12.6 COMMUNITY & WRITE WITH KOTHAVERSE ----
    function renderCommunityPage() {
      const tab = state.communityTab;
      return `
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-in">
          <div class="mb-8">
            <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Community & Contributors</span>
            <h1 class="font-bengali text-3xl sm:text-4xl font-bold mt-1">কমিউনিটি ও লেখা পাঠান</h1>
          </div>

          <div class="flex flex-wrap gap-3 mb-8 font-bengali text-sm">
            <button onclick="state.communityTab='feed'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'feed' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'border-antiqueGold/25 glass-panel'}">পাঠক কমিউনিটি</button>
            <button onclick="state.communityTab='submit'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'submit' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'border-antiqueGold/25 glass-panel'}">Write With KothaVerse (কবিতা / গল্প পাঠান)</button>
          </div>

          ${tab === 'feed' ? `
            <div class="glass-panel rounded-2xl p-6 mb-8">
              <h3 class="font-bengali text-base font-semibold text-antiqueGold mb-3">আপনার অনুভূতি বা মতামত শেয়ার করুন</h3>
              <form onsubmit="handleCreateCommunityPost(event)" class="space-y-3">
                <input id="cp-title" type="text" required placeholder="শিরোনাম লিখুন..." class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm font-bengali focus:outline-none focus:border-antiqueGold" />
                <textarea id="cp-body" rows="3" required placeholder="সাহিত্য, কবিতা বা কোনো গল্প নিয়ে আপনার ভাবনা..." class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm font-bengali focus:outline-none focus:border-antiqueGold"></textarea>
                <div class="flex justify-end">
                  <button type="submit" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-bengali font-semibold text-sm">পোস্ট করুন</button>
                </div>
              </form>
            </div>

            <div class="space-y-5">
              ${state.communityPosts.map((post) => `
                <article class="glass-panel rounded-2xl p-6">
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <span class="font-bengali text-xs font-semibold text-antiqueGold">${escapeHtml(post.profiles?.full_name || 'সদস্য')}</span>
                        <span class="text-[11px] text-ivory/40">• ${new Date(post.created_at).toLocaleDateString('bn-BD')}</span>
                        ${demoBadge(post)}
                      </div>
                      <h3 class="font-bengali text-xl font-bold">${escapeHtml(post.title)}</h3>
                    </div>
                    ${isUUID(post.id) ? `<button onclick="openReportModal('community_post', '${post.id}')" title="স্প্যাম রিপোর্ট" class="p-2 rounded-lg text-ivory/40 hover:text-red-400 hover:bg-red-500/10"><i data-lucide="flag" class="w-4 h-4"></i></button>` : ''}
                  </div>
                  <p class="font-bengali text-sm text-ivory/80 mt-3 whitespace-pre-line leading-relaxed">${escapeHtml(post.body)}</p>
                </article>
              `).join('')}
            </div>
          ` : `
            <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-antiqueGold/30">
              <h2 class="font-bengali text-2xl font-bold text-antiqueGold mb-2">Write With KothaVerse</h2>
              <p class="font-bengali text-sm text-ivory/70 mb-6">আপনার স্বরচিত কবিতা বা গল্প আমাদের কাছে পাঠান। অ্যাডমিন রিভিউয়ের পর নির্বাচিত লেখা প্রকাশিত হলে আপনাকে WhatsApp-এ জানানো হবে।</p>
              <form onsubmit="handlePoemSubmission(event)" class="space-y-4 font-bengali">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs text-ivory/80 mb-1">লেখার শিরোনাম</label>
                    <input id="sub-title" type="text" required class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
                  </div>
                  <div>
                    <label class="block text-xs text-ivory/80 mb-1">আপনার নাম / কলম নাম</label>
                    <input id="sub-penname" type="text" required value="${escapeHtml(state.profile?.full_name || '')}" class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs text-ivory/80 mb-1">বিভাগ (Category)</label>
                    <select id="sub-cat" class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold">
                      ${state.categories.map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs text-ivory/80 mb-1">WhatsApp নম্বর*</label>
                    <input id="sub-whatsapp" type="tel" required placeholder="WhatsApp নম্বর (যেমন: 9876543210)" class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
                  </div>
                </div>
                <div>
                  <label class="block text-xs text-ivory/80 mb-1">সম্পূর্ণ কবিতা / গল্প</label>
                  <textarea id="sub-body" rows="8" required placeholder="আপনার লেখা এখানে লিখুন..." class="w-full px-4 py-3 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold leading-relaxed"></textarea>
                </div>
                <button type="submit" class="px-7 py-3 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold hover:opacity-90 transition">লেখা জমা দিন</button>
              </form>
            </div>
          `}
        </div>
      `;
    }

    async function handleCreateCommunityPost(e) {
      e.preventDefault();
      if (!state.user) { showToast('পোস্ট করতে আগে লগইন করুন।', 'info'); return openAuthModal('login'); }
      const title = document.getElementById('cp-title').value.trim();
      const body = document.getElementById('cp-body').value.trim();
      const { error } = await sb.from('community_posts').insert({ user_id: state.user.id, title, body });
      if (error) return showToast('পোস্ট ব্যর্থ: ' + error.message, 'error');
      showToast('আপনার পোস্ট প্রকাশিত হয়েছে!', 'success');
      await loadAllPublicContent();
      renderCurrentRoute();
    }

    async function handlePoemSubmission(e) {
      e.preventDefault();
      if (!state.user) { showToast('লেখা জমা দিতে আগে লগইন করুন।', 'info'); return openAuthModal('login'); }
      const catVal = document.getElementById('sub-cat').value;
      const payload = {
        user_id: state.user.id,
        title: document.getElementById('sub-title').value.trim(),
        pen_name: document.getElementById('sub-penname').value.trim(),
        whatsapp_number: document.getElementById('sub-whatsapp').value.trim(),
        body: document.getElementById('sub-body').value.trim(),
        category_id: isUUID(catVal) ? catVal : null,
        status: 'pending'
      };
      const { error } = await sb.from('user_submissions').insert(payload);
      if (error) return showToast('জমা দেওয়া যায়নি: ' + error.message, 'error');
      e.target.reset();
      showToast('আপনার লেখা সফলভাবে জমা হয়েছে! অ্যাডমিন রিভিউয়ের পর প্রকাশিত হবে।', 'success');
    }

    function openReportModal(type, id) {
      if (!state.user) { showToast('রিপোর্ট করতে লগইন করুন।', 'info'); return openAuthModal('login'); }
      document.getElementById('report-target-type').value = type;
      document.getElementById('report-target-id').value = id;
      document.getElementById('report-reason').value = '';
      openModal('report-modal');
    }

    async function submitReport(e) {
      e.preventDefault();
      const { error } = await sb.from('content_reports').insert({
        reporter_id: state.user.id,
        target_type: document.getElementById('report-target-type').value,
        target_id: document.getElementById('report-target-id').value,
        reason: document.getElementById('report-reason').value.trim(),
        status: 'open'
      });
      if (error) return showToast('রিপোর্ট ব্যর্থ: ' + error.message, 'error');
      closeModal('report-modal');
      showToast('আপনার রিপোর্ট গৃহীত হয়েছে। ধন্যবাদ!', 'success');
    }

    // ---- 12.7 MY LIBRARY (Favourites, Bookmarks, Journey, Reading History, Playlists) ----
    function findMediaItem(type, id) {
      if (type === 'poem') return state.poems.find((x) => x.id === id);
      if (type === 'audio_story') return state.audioStories.find((x) => x.id === id);
      if (type === 'recitation') return state.recitations.find((x) => x.id === id);
      return null;
    }

    function handleCreatePlaylist(e) {
      e.preventDefault();
      const name = document.getElementById('pl-name').value.trim();
      if (!name) return;
      const list = getCustomPlaylists();
      list.unshift({ id: 'pl-' + Date.now(), name, created_at: new Date().toISOString() });
      saveCustomPlaylists(list);
      e.target.reset();
      showToast(`প্লেলিস্ট "${name}" তৈরি হয়েছে!`, 'success');
      renderCurrentRoute();
    }

    function deleteCustomPlaylist(id) {
      saveCustomPlaylists(getCustomPlaylists().filter((x) => x.id !== id));
      renderCurrentRoute();
    }

    function renderLibraryPage() {
      const tab = state.libraryTab;
      const readingHist = getReadingHistory();
      const playlists = getCustomPlaylists();

      if (!state.user && (tab === 'favourites' || tab === 'bookmarks' || tab === 'journey')) {
        return `
          <div class="max-w-xl mx-auto px-4 py-24 text-center fade-in">
            <div class="glass-panel rounded-3xl p-10">
              <i data-lucide="bookmark" class="w-12 h-12 text-antiqueGold mx-auto mb-4"></i>
              <h2 class="font-bengali text-2xl font-bold mb-2">আপনার ব্যক্তিগত লাইব্রেরি</h2>
              <p class="font-bengali text-sm text-ivory/70 mb-6">প্রিয় কবিতা, বুকমার্ক এবং আপনার Listening Journey সংরক্ষণ করতে লগইন করুন।</p>
              <button onclick="openAuthModal('login')" class="px-6 py-3 rounded-xl bg-antiqueGold text-midnight font-bengali font-semibold">লগইন / সাইনআপ</button>
            </div>
          </div>
        `;
      }

      const favItems = state.library.filter((x) => x.is_favourite).map((x) => ({ ...x, item: findMediaItem(x.target_type, x.target_id) })).filter((x) => x.item);
      const bmItems = state.library.filter((x) => x.is_bookmarked).map((x) => ({ ...x, item: findMediaItem(x.target_type, x.target_id) })).filter((x) => x.item);

      return `
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-in">
          <div class="mb-8">
            <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Personal Archive</span>
            <h1 class="font-bengali text-3xl sm:text-4xl font-bold mt-1">আমার লাইব্রেরি</h1>
          </div>

          <div class="flex flex-wrap gap-2 mb-8 font-bengali text-xs sm:text-sm">
            <button onclick="state.libraryTab='favourites'; renderCurrentRoute()" class="px-4 py-2 rounded-xl border ${tab === 'favourites' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">Favourites (${favItems.length})</button>
            <button onclick="state.libraryTab='bookmarks'; renderCurrentRoute()" class="px-4 py-2 rounded-xl border ${tab === 'bookmarks' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">Bookmarks (${bmItems.length})</button>
            <button onclick="state.libraryTab='journey'; renderCurrentRoute()" class="px-4 py-2 rounded-xl border ${tab === 'journey' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">Listening Journey (${state.history.length})</button>
            <button onclick="state.libraryTab='reading'; renderCurrentRoute()" class="px-4 py-2 rounded-xl border ${tab === 'reading' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">Reading History (${readingHist.length})</button>
            <button onclick="state.libraryTab='playlists'; renderCurrentRoute()" class="px-4 py-2 rounded-xl border ${tab === 'playlists' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">Playlists (${playlists.length})</button>
          </div>

          ${tab === 'journey' ? `
            <div class="space-y-4">
              ${state.history.length ? state.history.map((h) => {
                const item = findMediaItem(h.target_type, h.target_id);
                if (!item) return '';
                const pct = h.duration_seconds > 0 ? Math.min(100, Math.round((h.progress_seconds / h.duration_seconds) * 100)) : 0;
                return `
                  <div class="glass-panel rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                      <img src="${safeCover(item.cover_image_url, item.title)}" class="w-14 h-14 rounded-xl object-cover" />
                      <div>
                        <h4 class="font-bengali font-semibold text-base">${escapeHtml(item.title)}</h4>
                        <div class="text-xs text-ivory/60 font-mono mt-0.5">${formatTime(h.progress_seconds)} / ${formatTime(h.duration_seconds)} (${pct}%)</div>
                        <div class="w-44 h-1.5 bg-midnight rounded-full mt-2 overflow-hidden"><div class="h-full bg-antiqueGold" style="width:${pct}%"></div></div>
                      </div>
                    </div>
                    <button onclick="${h.target_type === 'audio_story' ? `playStory('${item.id}', ${h.progress_seconds})` : h.target_type === 'recitation' ? `playRecitation('${item.id}', ${h.progress_seconds})` : `playPoemAudio('${item.id}')`}" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-bengali font-semibold text-xs flex items-center gap-1.5">
                      <i data-lucide="play" class="w-3.5 h-3.5 fill-current"></i> এখান থেকে শুনুন
                    </button>
                  </div>
                `;
              }).join('') : `<div class="glass-panel rounded-2xl p-10 text-center font-bengali text-ivory/60">এখনো কোনো অডিও শোনার ইতিহাস নেই।</div>`}
            </div>
          ` : tab === 'reading' ? `
            <div class="space-y-3">
              ${readingHist.length ? readingHist.map((r) => `
                <div class="glass-panel rounded-2xl p-4 flex items-center justify-between gap-3">
                  <div>
                    <div class="font-bengali font-semibold text-base">${escapeHtml(r.title)}</div>
                    <div class="font-bengali text-xs text-ivory/60">${escapeHtml(r.poet_name)} • ${new Date(r.read_at).toLocaleDateString('bn-BD')}</div>
                  </div>
                  <button onclick="openPoemModal('${r.id}')" class="px-4 py-2 rounded-xl border border-antiqueGold/35 text-antiqueGold text-xs font-bengali hover:bg-antiqueGold hover:text-midnight transition">আবার পড়ুন</button>
                </div>
              `).join('') : `<div class="glass-panel rounded-2xl p-10 text-center font-bengali text-ivory/60">আপনি এখনো কোনো কবিতা পড়েননি।</div>`}
            </div>
          ` : tab === 'playlists' ? `
            <div class="space-y-6">
              <form onsubmit="handleCreatePlaylist(event)" class="glass-panel rounded-2xl p-5 flex flex-wrap gap-3 font-bengali">
                <input id="pl-name" type="text" required placeholder="নতুন প্লেলিস্টের নাম (যেমন: রাতের গল্প)" class="flex-1 px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
                <button type="submit" class="px-5 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-sm">তৈরি করুন</button>
              </form>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                ${playlists.map((pl) => `
                  <div class="glass-panel rounded-2xl p-5 flex items-center justify-between gap-3">
                    <div>
                      <div class="font-bengali font-bold text-base text-antiqueGold">${escapeHtml(pl.name)}</div>
                      <div class="text-[11px] text-ivory/50">${new Date(pl.created_at).toLocaleDateString('bn-BD')}</div>
                    </div>
                    <div class="flex gap-2">
                      <button onclick="playStory(state.audioStories[0]?.id)" class="p-2 rounded-xl bg-antiqueGold text-midnight"><i data-lucide="play" class="w-4 h-4 fill-current"></i></button>
                      <button onclick="deleteCustomPlaylist('${pl.id}')" class="p-2 rounded-xl bg-red-500/20 text-red-300"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                    </div>
                  </div>
                `).join('') || `<div class="col-span-full glass-panel rounded-2xl p-10 text-center font-bengali text-ivory/60">কোনো কাস্টম প্লেলিস্ট নেই।</div>`}
              </div>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${(tab === 'favourites' ? favItems : bmItems).map((entry) => {
                if (entry.target_type === 'poem') return renderPoemCard(entry.item);
                if (entry.target_type === 'audio_story') return renderAudioStoryCard(entry.item);
                return '';
              }).join('') || `<div class="col-span-full glass-panel rounded-2xl p-10 text-center font-bengali text-ivory/60">এখানে এখনো কিছু যুক্ত করা হয়নি।</div>`}
            </div>
          `}
        </div>
      `;
    }

    // ---- 12.8 ABOUT & CONTACT PAGES ----
    function renderAboutPage() {
      const cfg = getSiteSettings();
      return `
        <div class="max-w-5xl mx-auto px-4 sm:px-6 py-12 fade-in font-bengali space-y-8">
          <!-- Hero Brand Story Card -->
          <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-antiqueGold/35 shadow-card relative overflow-hidden space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-antiqueGold/15 border border-antiqueGold/35 text-xs uppercase tracking-widest text-antiqueGold font-display">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> About ${escapeHtml(cfg.siteName)}
              </div>
              <span class="text-xs text-ivory/60 italic">“কিছু কথা... শুধু শোনা যায় না... অনুভব করতে হয়”</span>
            </div>

            <div class="space-y-3">
              <h1 class="text-3xl sm:text-5xl font-bold gold-gradient-text leading-tight">${escapeHtml(cfg.tagline)}</h1>
              <p class="text-sm sm:text-base text-ivory/80 leading-loose">
                <strong>KothaVerse (কথা Verse)</strong> হলো বাংলা কবিতা, আবৃত্তি, অডিও গল্প এবং আধুনিক ডিজিটাল প্রকাশনার একটি নান্দনিক ও নীরব সাহিত্য ভুবন। ব্যস্ত যান্ত্রিক জীবনের মাঝে একটুখানি শান্ত অবসর তৈরি করাই আমাদের লক্ষ্য—যেখানে পাঠক Distraction-Free মোডে কবিতা পড়তে পারবেন, রাতের নীরবতায় Sleep &amp; Ambient Mode চালু করে অডিও গল্প শুনতে পারবেন এবং প্রিয়জনের জন্য বিশেষ ই-বুক বা কাস্টম ভয়েস গিফট পাঠাতে পারবেন।
              </p>
            </div>

            <!-- Live Platform Highlights -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div class="p-3.5 rounded-2xl bg-midnight/70 border border-antiqueGold/20 text-center">
                <div class="text-xl sm:text-2xl font-mono font-bold text-antiqueGold">${(state.poems || []).length}+</div>
                <div class="text-[11px] text-ivory/70 mt-0.5">নির্বাচিত কবিতা</div>
              </div>
              <div class="p-3.5 rounded-2xl bg-midnight/70 border border-antiqueGold/20 text-center">
                <div class="text-xl sm:text-2xl font-mono font-bold text-antiqueGold">${(state.audioStories || []).length}+</div>
                <div class="text-[11px] text-ivory/70 mt-0.5">অডিও গল্প ও আবৃত্তি</div>
              </div>
              <div class="p-3.5 rounded-2xl bg-midnight/70 border border-antiqueGold/20 text-center">
                <div class="text-xl sm:text-2xl font-mono font-bold text-antiqueGold">${(state.ebooks || []).length}+</div>
                <div class="text-[11px] text-ivory/70 mt-0.5">প্রিমিয়াম ই-বুক</div>
              </div>
              <div class="p-3.5 rounded-2xl bg-midnight/70 border border-antiqueGold/20 text-center">
                <div class="text-xl sm:text-2xl font-mono font-bold text-emerald-300">১০০%</div>
                <div class="text-[11px] text-ivory/70 mt-0.5">মৌলিক বাংলা সাহিত্য</div>
              </div>
            </div>
          </div>

          <!-- 6 Core Pillars Grid -->
          <div class="glass-panel rounded-3xl p-7 sm:p-10 border border-antiqueGold/25 space-y-6">
            <div>
              <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">What We Offer</span>
              <h2 class="text-2xl sm:text-3xl font-bold text-ivory mt-1">কথা Verse-এ যা যা পাচ্ছেন</h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 hover:border-antiqueGold/45 transition space-y-2">
                <i data-lucide="feather" class="w-6 h-6 text-antiqueGold"></i>
                <h3 class="font-bold text-base text-ivory">কবিতা ও সাহিত্য</h3>
                <p class="text-xs text-ivory/70 leading-relaxed">১২টি সমৃদ্ধ বিভাগে নির্বাচিত বাংলা কবিতা, Distraction-Free রিডিং মোড এবং শেয়ারযোগ্য Quote Card তৈরির সুবিধা।</p>
              </div>

              <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 hover:border-antiqueGold/45 transition space-y-2">
                <i data-lucide="headphones" class="w-6 h-6 text-antiqueGold"></i>
                <h3 class="font-bold text-base text-ivory">অডিও গল্প ও আবৃত্তি</h3>
                <p class="text-xs text-ivory/70 leading-relaxed">সিনেমাটিক আবহে অডিও স্টোরি, নন-স্টপ ব্যাকগ্রাউন্ড প্লেয়ার এবং রাতের শান্তির জন্য Sleep &amp; Ambient সাউন্ড।</p>
              </div>

              <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 hover:border-antiqueGold/45 transition space-y-2">
                <i data-lucide="book-open" class="w-6 h-6 text-antiqueGold"></i>
                <h3 class="font-bold text-base text-ivory">ই-বুক সংকলন ও কম্বো</h3>
                <p class="text-xs text-ivory/70 leading-relaxed">ফ্রি স্যাম্পল প্রিভিউ পড়ে বেছে নিন প্রিয় বই—কেনার পর পাঠকের নামে ওয়াটারমার্কসহ PDF রিডার ও ডাউনলোড সুবিধা।</p>
              </div>

              <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 hover:border-antiqueGold/45 transition space-y-2">
                <i data-lucide="mic" class="w-6 h-6 text-antiqueGold"></i>
                <h3 class="font-bold text-base text-ivory">কাস্টম ভয়েস গিফট</h3>
                <p class="text-xs text-ivory/70 leading-relaxed">জন্মদিন, বার্ষিকী বা বিশেষ দিনে আমাদের কণ্ঠশিল্পীদের কণ্ঠে প্রিয়জনের নাম নিয়ে আবৃত্তি, ব্যাকগ্রাউন্ড মিউজিক ও রিল গিফট।</p>
              </div>

              <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 hover:border-antiqueGold/45 transition space-y-2">
                <i data-lucide="gift" class="w-6 h-6 text-antiqueGold"></i>
                <h3 class="font-bold text-base text-ivory">গিফট কোড ও ওয়ালেট</h3>
                <p class="text-xs text-ivory/70 leading-relaxed">ইউনিক গিফট কোডের মাধ্যমে প্রিয়জনকে ই-বুক উপহার দিন এবং বন্ধুদের রেফার করে জিতে নিন KothaVerse ওয়ালেট ক্রেডিট।</p>
              </div>

              <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 hover:border-antiqueGold/45 transition space-y-2">
                <i data-lucide="users" class="w-6 h-6 text-antiqueGold"></i>
                <h3 class="font-bold text-base text-ivory">Write With KothaVerse</h3>
                <p class="text-xs text-ivory/70 leading-relaxed">নবীন ও প্রবীণ লেখকদের জন্য উন্মুক্ত মঞ্চ—প্রতিটি লেখা মৌলিকতা ও মান যাচাইয়ের মাধ্যমে সম্মানের সাথে প্রকাশিত হয়।</p>
              </div>
            </div>
          </div>

          <!-- Trust Bar + Quick Action CTA -->
          <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-antiqueGold/30 bg-gradient-to-r from-deepPurple/55 via-midnight/85 to-deepPurple/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div class="space-y-1.5">
              <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                <i data-lucide="shield-check" class="w-4 h-4"></i> স্বচ্ছ ও নিরাপদ অভিজ্ঞতা
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-ivory">লাইভ অর্ডার ট্র্যাকিং, অফিসিয়াল PDF ইনভয়েস ও ভেরিফায়েড রিভিউ</h3>
              <p class="text-xs text-ivory/70">প্রতিটি স্টোর অর্ডারে থাকছে সরাসরি UPI পেমেন্ট, রিয়েল-টাইম স্ট্যাটাস আপডেট এবং ব্র্যান্ডেড ডিজিটাল রসিদ।</p>
              <div class="flex flex-wrap items-center gap-3 pt-1.5 text-xs">
                <button type="button" onclick="openKvStorePolicyModal('privacy')" class="inline-flex items-center gap-1 text-antiqueGold hover:text-amber-300 underline underline-offset-4 font-semibold transition">
                  <i data-lucide="lock" class="w-3.5 h-3.5"></i> Privacy Policy
                </button>
                <span class="text-ivory/30">•</span>
                <button type="button" onclick="openKvStorePolicyModal('refund')" class="inline-flex items-center gap-1 text-antiqueGold hover:text-amber-300 underline underline-offset-4 font-semibold transition">
                  <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Refund &amp; Cancellation Policy
                </button>
              </div>
            </div>

            <div class="flex flex-wrap gap-2.5 shrink-0 text-xs">
              <button onclick="navigate('poetry')" class="px-5 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold hover:opacity-90 transition">
                কবিতা পড়ুন
              </button>
              <button onclick="navigate('store')" class="px-5 py-2.5 rounded-xl bg-deepPurple border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight font-semibold transition">
                স্টোর দেখুন
              </button>
              <button onclick="navigate('submit')" class="px-4 py-2.5 rounded-xl bg-midnight/80 border border-ivory/20 text-ivory hover:border-antiqueGold transition">
                লেখা পাঠান
              </button>
            </div>
          </div>
        </div>
      `;
    }

    function renderContactPage() {
      const cfg = getSiteSettings();
      return `
        <div class="max-w-2xl mx-auto px-4 sm:px-6 py-12 fade-in">
          <div class="glass-panel rounded-3xl p-8 border border-antiqueGold/30">
            <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Contact Us</span>
            <h1 class="font-bengali text-3xl font-bold mt-1 mb-2">যোগাযোগ করুন</h1>
            <p class="font-bengali text-sm text-ivory/70 mb-6">যেকোনো পরামর্শ, কোলাবোরেশন বা অভিযোগের জন্য নিচের ফর্মটি পূরণ করুন অথবা ইমেইল করুন: <span class="text-antiqueGold">${escapeHtml(cfg.contactEmail)}</span></p>
            <form onsubmit="handleContactSubmit(event)" class="space-y-4 font-bengali">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs text-ivory/80 mb-1">আপনার নাম</label>
                  <input id="ct-name" type="text" required class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
                </div>
                <div>
                  <label class="block text-xs text-ivory/80 mb-1">ইমেইল</label>
                  <input id="ct-email" type="email" required class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
                </div>
              </div>
              <div>
                <label class="block text-xs text-ivory/80 mb-1">বিষয়</label>
                <input id="ct-subject" type="text" class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold" />
              </div>
              <div>
                <label class="block text-xs text-ivory/80 mb-1">বার্তা</label>
                <textarea id="ct-message" rows="4" required class="w-full px-4 py-2.5 rounded-xl bg-midnight/80 border border-antiqueGold/25 text-sm focus:outline-none focus:border-antiqueGold"></textarea>
              </div>
              <button type="submit" class="px-6 py-3 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold hover:opacity-90">বার্তা পাঠান</button>
            </form>
          </div>
        </div>
      `;
    }

    async function handleNewsletterSubmit(e) {
      e.preventDefault();
      const { error } = await sb.from('newsletter_subscribers').insert({
        name: document.getElementById('nl-name').value.trim() || null,
        email: document.getElementById('nl-email').value.trim(),
        whatsapp_number: document.getElementById('nl-whatsapp').value.trim(),
        payment_status: 'pending',
        is_active: false
      });
      if (error) {
        if (error.code === '23505') return showToast('এই ইমেইলটি ইতিমধ্যেই সাবস্ক্রাইব করা আছে!', 'info');
        return showToast('সাবস্ক্রিপশন ব্যর্থ: ' + error.message, 'error');
      }
      e.target.reset();
      showToast('সাবস্ক্রিপশন রিকোয়েস্ট জমা হয়েছে! শীঘ্রই WhatsApp-এ যোগাযোগ করা হবে।', 'success');
    }

    async function handleContactSubmit(e) {
      e.preventDefault();
      const { error } = await sb.from('contact_messages').insert({
        name: document.getElementById('ct-name').value.trim(),
        email: document.getElementById('ct-email').value.trim(),
        subject: document.getElementById('ct-subject').value.trim(),
        message: document.getElementById('ct-message').value.trim()
      });
      if (error) return showToast('বার্তা পাঠানো যায়নি: ' + error.message, 'error');
      e.target.reset();
      showToast('আপনার বার্তা সফলভাবে পাঠানো হয়েছে!', 'success');
    }

    // =========================================================================
    // 13. ADMIN DASHBOARD ("KothaVerse Control Room" + AI Intelligence Center)
    // =========================================================================
    function renderAdminShell() {
      const tabs = [
        ['overview', 'Overview & Analytics', 'layout-dashboard'],
        ['ai-center', 'KothaVerse AI Center', 'sparkles'],
        ['poems', 'Poetry Manager', 'feather'],
        ['stories', 'Audio Stories', 'headphones'],
        ['recitations', 'Recitations', 'mic'],
        ['youtube', 'YouTube', 'youtube'],
        ['categories', 'Categories', 'tags'],
        ['quotes', 'Daily Quotes', 'quote'],
        ['media', 'Media Library', 'folder-open'],
        ['moderation', 'Moderation & Submissions', 'shield-alert'],
        ['inbox', 'Newsletter & Contact', 'mail'],
        ['users', 'Users & Mail Confirm', 'user-check'],
        ['popup', 'Special Popup', 'bell-ring'],
        ['store', 'E-Books & Orders', 'shopping-bag'],
        ['physical_store', 'হার্ডকপি ও ডেলিভারি', 'truck'],
        ['settings', 'Website Settings', 'settings']
      ];

      return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Admin Control Room</span>
              <h1 class="font-bengali text-2xl sm:text-3xl font-bold">KothaVerse কন্ট্রোল রুম</h1>
            </div>
            <span class="px-3 py-1 rounded-full text-xs bg-emerald-500/15 border border-emerald-400/30 text-emerald-300">Admin: ${escapeHtml(state.profile?.full_name || state.user?.email)}</span>
          </div>

          <div class="flex flex-wrap gap-2 mb-6">
            ${tabs.map(([id, label, icon]) => {
              const cnt = (window.adminBadges && window.adminBadges[id]) || 0;
              return `
                <button onclick="state.adminTab='${id}'; renderCurrentRoute()" class="px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 border transition ${state.adminTab === id ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/20 text-ivory/80 hover:border-antiqueGold'}">
                  <i data-lucide="${icon}" class="w-3.5 h-3.5"></i>
                  <span>${label}</span>
                  <span id="admin-badge-${id}" class="${cnt > 0 ? 'inline-flex' : 'hidden'} items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[10px] font-bold leading-none shadow">
                    ${cnt > 99 ? '99+' : cnt}
                  </span>
                </button>
              `;
            }).join('')}
          </div>

          <div id="admin-tab-body" class="glass-panel rounded-3xl p-5 sm:p-7 border border-antiqueGold/25">
            <div class="text-center py-10 text-ivory/60 font-bengali text-sm">ডেটা লোড হচ্ছে...</div>
          </div>
        </div>
      `;
    }

    async function uploadToBucket(bucket, file) {
      if (!file) return null;
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '');
      const path = `${Date.now()}-${safeName}`;
      const { error } = await sb.storage.from(bucket).upload(path, file, { upsert: true });
      if (error) throw error;
      const { data } = sb.storage.from(bucket).getPublicUrl(path);
      return data.publicUrl;
    }

    function exportAdminReportCSV() {
      const rows = [
        ['Type', 'Title', 'Author/Creator', 'Views/Duration'],
        ...state.poems.map((p) => ['Poem', p.title, p.poet_name, p.views_count || 0]),
        ...state.audioStories.map((s) => ['Audio Story', s.title, s.author_name, `${s.duration_sec || 0}s`]),
        ...state.recitations.map((r) => ['Recitation', r.title, r.reciter_name, `${r.duration_sec || 0}s`]),
        ...state.youtubeVideos.map((v) => ['YouTube', v.title, v.playlist_type, v.youtube_video_id])
      ];
      const csv = rows.map((r) => r.map((c) => `"${String(c || '').replace(/"/g, '""')}"`).join(',')).join('\n');
      const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `KothaVerse-Report-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      showToast('Analytics CSV ডাউনলোড হয়েছে!', 'success');
    }
    window.adminBadges = { moderation: 0, inbox: 0, store: 0, users: 0 };

async function refreshAdminBadges() {
  if (state.profile?.role !== 'admin') return;
  try {
    const [subRes, repRes, nlRes, ebOrdRes, vcOrdRes, usrRes] = await Promise.all([
      sb.from('user_submissions').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      sb.from('content_reports').select('*', { count: 'exact', head: true }).eq('status', 'open'),
      sb.from('newsletter_subscribers').select('*', { count: 'exact', head: true }).eq('payment_status', 'pending'),
      sb.from('ebook_orders').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      sb.from('voice_dedication_orders').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      sb.rpc('get_admin_users')
    ]);

    const unconfirmedUsers = (!usrRes.error && Array.isArray(usrRes.data))
      ? usrRes.data.filter((u) => !u.email_confirmed_at).length
      : 0;

    window.adminBadges = {
      moderation: (subRes.count || 0) + (repRes.count || 0),
      inbox: nlRes.count || 0,
      store: (ebOrdRes.count || 0) + (vcOrdRes.count || 0),
      users: unconfirmedUsers
    };

    Object.entries(window.adminBadges).forEach(([tabId, count]) => {
      const el = document.getElementById(`admin-badge-${tabId}`);
      if (!el) return;
      if (count > 0) {
        el.textContent = count > 99 ? '99+' : String(count);
        el.classList.remove('hidden');
        el.classList.add('inline-flex');
      } else {
        el.classList.add('hidden');
        el.classList.remove('inline-flex');
      }
    });
  } catch (e) { /* Silent */ }
}

    async function loadAdminTabData() {
      refreshAdminBadges();
      const box = document.getElementById('admin-tab-body');
      if (!box) return;
      const t = state.adminTab;

      try {
        if (t === 'overview') {
          const { data, error } = await sb.rpc('get_admin_dashboard_stats');
          const d = error ? {
            total_poems: state.poems.length, total_audio_stories: state.audioStories.length,
            total_recitations: state.recitations.length, total_youtube_videos: state.youtubeVideos.length,
            total_users: '-', newsletter_subscribers: '-', pending_submissions: '-', open_reports: '-', unread_messages: '-'
          } : data;
          const cards = [
            ['Total Poems', d.total_poems, 'feather'],
            ['Audio Stories', d.total_audio_stories, 'headphones'],
            ['Recitations', d.total_recitations, 'mic'],
            ['YouTube Videos', d.total_youtube_videos, 'youtube'],
            ['Registered Users', d.total_users, 'users'],
            ['Subscribers', d.newsletter_subscribers, 'mail'],
            ['Pending Submissions', d.pending_submissions, 'file-text'],
            ['Open Reports', d.open_reports, 'flag'],
            ['Unread Messages', d.unread_messages, 'inbox']
          ];
          const topPoems = [...state.poems].sort((a, b) => (b.views_count || 0) - (a.views_count || 0)).slice(0, 5);
          const maxViews = Math.max(1, ...topPoems.map((p) => p.views_count || 1));
          box.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-3 mb-5">
              <h2 class="font-bengali text-xl font-bold text-antiqueGold">ড্যাশবোর্ড ওভারভিউ ও অ্যানালিটিক্স</h2>
              <button onclick="exportAdminReportCSV()" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-bengali font-semibold text-xs flex items-center gap-1.5"><i data-lucide="download" class="w-4 h-4"></i> CSV রিপোর্ট ডাউনলোড</button>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              ${cards.map(([label, val, icon]) => `
                <div class="p-5 rounded-2xl bg-midnight/70 border border-antiqueGold/20">
                  <div class="flex items-center justify-between text-antiqueGold mb-2">
                    <span class="text-xs text-ivory/65">${label}</span>
                    <i data-lucide="${icon}" class="w-4 h-4"></i>
                  </div>
                  <div class="text-3xl font-bold font-display text-ivory">${val ?? 0}</div>
                </div>
              `).join('')}
            </div>
            <div class="p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20">
              <h3 class="font-bengali text-base font-semibold text-antiqueGold mb-4">শীর্ষ ৫টি জনপ্রিয় কবিতা (Performance Chart)</h3>
              <div class="space-y-3">
                ${topPoems.map((p) => {
                  const pct = Math.round(((p.views_count || 1) / maxViews) * 100);
                  return `
                    <div>
                      <div class="flex justify-between text-xs font-bengali mb-1">
                        <span>${escapeHtml(p.title)} — <span class="text-ivory/50">${escapeHtml(p.poet_name)}</span></span>
                        <span class="font-mono text-antiqueGold">${p.views_count || 0} views</span>
                      </div>
                      <div class="w-full h-2 rounded-full bg-deepPurple/60 overflow-hidden"><div class="h-full bg-antiqueGold" style="width:${pct}%"></div></div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        } else if (t === 'ai-center') {
          box.innerHTML = renderAICenterTab();
        } else if (t === 'media') {
          const [covRes, audRes] = await Promise.all([
            sb.storage.from('covers').list('', { limit: 30, sortBy: { column: 'created_at', order: 'desc' } }),
            sb.storage.from('audio').list('', { limit: 30, sortBy: { column: 'created_at', order: 'desc' } })
          ]);
          const covers = covRes.data || [];
          const audios = audRes.data || [];
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">Media Library (Supabase Storage)</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-bengali font-semibold text-antiqueGold">Cover Images (${covers.length})</h3>
                  <label class="px-3 py-1.5 rounded-lg bg-antiqueGold text-midnight text-xs font-semibold cursor-pointer">+ Upload Image<input type="file" accept="image/*" class="hidden" onchange="adminQuickMediaUpload('covers', this.files[0])" /></label>
                </div>
                <div class="space-y-2 max-h-80 overflow-y-auto">
                  ${covers.map((f) => {
                    const url = sb.storage.from('covers').getPublicUrl(f.name).data.publicUrl;
                    return `<div class="p-2.5 rounded-xl bg-deepPurple/35 flex items-center justify-between gap-2 text-xs"><span class="truncate">${escapeHtml(f.name)}</span><div class="flex gap-1.5 shrink-0"><button onclick="copyTextToClipboard('${url}')" class="px-2 py-1 rounded bg-midnight text-antiqueGold">URL</button><button onclick="adminDeleteMedia('covers','${f.name}')" class="px-2 py-1 rounded bg-red-500/20 text-red-300">Del</button></div></div>`;
                  }).join('') || '<p class="text-xs text-ivory/50">কোনো ইমেজ নেই।</p>'}
                </div>
              </div>
              <div class="p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 space-y-4">
                <div class="flex items-center justify-between">
                  <h3 class="font-bengali font-semibold text-antiqueGold">Audio Files (${audios.length})</h3>
                  <label class="px-3 py-1.5 rounded-lg bg-antiqueGold text-midnight text-xs font-semibold cursor-pointer">+ Upload Audio<input type="file" accept="audio/*" class="hidden" onchange="adminQuickMediaUpload('audio', this.files[0])" /></label>
                </div>
                <div class="space-y-2 max-h-80 overflow-y-auto">
                  ${audios.map((f) => {
                    const url = sb.storage.from('audio').getPublicUrl(f.name).data.publicUrl;
                    return `<div class="p-2.5 rounded-xl bg-deepPurple/35 flex items-center justify-between gap-2 text-xs"><span class="truncate">${escapeHtml(f.name)}</span><div class="flex gap-1.5 shrink-0"><button onclick="copyTextToClipboard('${url}')" class="px-2 py-1 rounded bg-midnight text-antiqueGold">URL</button><button onclick="adminDeleteMedia('audio','${f.name}')" class="px-2 py-1 rounded bg-red-500/20 text-red-300">Del</button></div></div>`;
                  }).join('') || '<p class="text-xs text-ivory/50">কোনো অডিও ফাইল নেই।</p>'}
                </div>
              </div>
            </div>
          `;
        } else if (t === 'settings') {
          const cfg = getSiteSettings();
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">Website Settings</h2>
            <form onsubmit="handleSaveSiteSettingsForm(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bengali">
              <div><label class="block text-xs text-ivory/70 mb-1">Website Name</label><input id="set-name" value="${escapeHtml(cfg.siteName)}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div><label class="block text-xs text-ivory/70 mb-1">Tagline</label><input id="set-tagline" value="${escapeHtml(cfg.tagline)}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div><label class="block text-xs text-ivory/70 mb-1">SEO Title</label><input id="set-seo" value="${escapeHtml(cfg.seoTitle)}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div><label class="block text-xs text-ivory/70 mb-1">Contact Email</label><input id="set-email" value="${escapeHtml(cfg.contactEmail)}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div><label class="block text-xs text-ivory/70 mb-1">YouTube URL</label><input id="set-yt" value="${escapeHtml(cfg.youtubeUrl)}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div><label class="block text-xs text-ivory/70 mb-1">Facebook URL</label><input id="set-fb" value="${escapeHtml(cfg.facebookUrl)}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div><label class="block text-xs text-ivory/70 mb-1">Instagram URL</label><input id="set-ig" value="${escapeHtml(cfg.instagramUrl)}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div><label class="block text-xs text-ivory/70 mb-1">Optional Gemini API Key (for Live AI Studio)</label><input id="set-aikey" type="password" value="${escapeHtml(cfg.aiApiKey)}" placeholder="AIza..." class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" /></div>
              <div class="md:col-span-2 flex flex-wrap items-center gap-4 p-4 rounded-xl bg-midnight/60 border border-antiqueGold/20">
                <label class="flex items-center gap-2"><input id="set-maint" type="checkbox" ${cfg.maintenanceMode ? 'checked' : ''} class="accent-antiqueGold" /> Maintenance Banner চালু করুন</label>
                <input id="set-maint-msg" value="${escapeHtml(cfg.maintenanceMsg)}" placeholder="রক্ষণাবেক্ষণ বার্তা..." class="flex-1 min-w-[220px] px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-xs" />
              </div>
              <div class="md:col-span-2"><button type="submit" class="px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold">সেটিংস সংরক্ষণ করুন</button></div>
            </form>
          `;
        } else if (t === 'poems') {
          const { data: poems } = await sb.from('poems').select('*').order('created_at', { ascending: false });
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">Poetry Manager</h2>
            <form onsubmit="adminSavePoem(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 mb-6 text-sm font-bengali">
              <input type="hidden" id="ap-id" />
              <input id="ap-title" required placeholder="কবিতার শিরোনাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="ap-poet" required placeholder="কবির নাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <select id="ap-cat" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25">
                <option value="">বিভাগ নির্বাচন করুন</option>
                ${state.categories.filter((c) => isUUID(c.id)).map((c) => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('')}
              </select>
              <select id="ap-status" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25">
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
              </select>
              <input id="ap-publish-at" type="datetime-local" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <label class="flex items-center gap-2 px-3"><input id="ap-featured" type="checkbox" class="accent-antiqueGold" /> Featured হিসেবে দেখান</label>
              <div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div><label class="text-xs text-ivory/60">Cover Image (covers bucket)</label><input id="ap-cover-file" type="file" accept="image/*" class="w-full text-xs mt-1" /></div>
                <div><label class="text-xs text-ivory/60">Recitation Audio (audio bucket)</label><input id="ap-audio-file" type="file" accept="audio/*" class="w-full text-xs mt-1" /></div>
              </div>
              <input id="ap-seo-title" placeholder="SEO Title (ঐচ্ছিক)" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="ap-seo-desc" placeholder="SEO Description (ঐচ্ছিক)" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <textarea id="ap-body" required rows="5" placeholder="সম্পূর্ণ কবিতা..." class="md:col-span-2 px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>
              <div class="md:col-span-2 flex gap-2">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold">সংরক্ষণ করুন</button>
                <button type="button" onclick="this.form.reset(); document.getElementById('ap-id').value=''" class="px-4 py-2.5 rounded-xl border border-ivory/20">রিসেট</button>
              </div>
            </form>
            <div class="space-y-2.5">
              ${(poems || []).map((p) => `
                <div class="p-3.5 rounded-xl bg-midnight/50 border border-antiqueGold/15 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div class="font-bengali font-semibold">${escapeHtml(p.title)} <span class="text-xs px-2 py-0.5 rounded-full bg-deepPurple text-antiqueGold ml-1">${p.status}</span></div>
                    <div class="text-xs text-ivory/60 font-bengali">${escapeHtml(p.poet_name)}</div>
                  </div>
                  <div class="flex gap-2 text-xs">
                    <button onclick='adminEditPoem(${JSON.stringify(p).replace(/'/g, "&#39;")})' class="px-3 py-1.5 rounded-lg bg-deepPurple text-antiqueGold">Edit</button>
                    <button onclick="adminDeleteRow('poems', '${p.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300">Delete</button>
                  </div>
                </div>
              `).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো কবিতা নেই।</p>'}
            </div>
          `;
        } else if (t === 'stories') {
          const { data: stories } = await sb.from('audio_stories').select('*').order('created_at', { ascending: false });
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">Audio Stories Manager</h2>
            <form onsubmit="adminSaveStory(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 mb-6 text-sm font-bengali">
              <input id="as-title" required placeholder="গল্পের শিরোনাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="as-author" required placeholder="লেখকের নাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="as-narrator" required placeholder="কণ্ঠশিল্পীর নাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="as-duration" type="number" placeholder="সময়কাল (সেকেন্ড)" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <div><label class="text-xs text-ivory/60">Cover Image</label><input id="as-cover-file" type="file" accept="image/*" class="w-full text-xs mt-1" /></div>
              <div><label class="text-xs text-ivory/60">Audio File (MP3/WAV)*</label><input id="as-audio-file" type="file" accept="audio/*" required class="w-full text-xs mt-1" /></div>
              <textarea id="as-desc" rows="3" placeholder="সংক্ষিপ্ত বিবরণ..." class="md:col-span-2 px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>
              <button type="submit" class="md:col-span-2 w-fit px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold">অডিও গল্প প্রকাশ করুন</button>
            </form>
            <div class="space-y-2.5">
              ${(stories || []).map((s) => `
                <div class="p-3.5 rounded-xl bg-midnight/50 border border-antiqueGold/15 flex items-center justify-between gap-3">
                  <div>
                    <div class="font-bengali font-semibold">${escapeHtml(s.title)}</div>
                    <div class="text-xs text-ivory/60 font-bengali">${escapeHtml(s.author_name)} • ${escapeHtml(s.narrator_name)}</div>
                  </div>
                  <button onclick="adminDeleteRow('audio_stories', '${s.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 text-xs">Delete</button>
                </div>
              `).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো অডিও গল্প নেই।</p>'}
            </div>
          `;
        } else if (t === 'recitations') {
          const { data: recs } = await sb.from('recitations').select('*').order('created_at', { ascending: false });
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">Recitations Manager</h2>
            <form onsubmit="adminSaveRecitation(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 mb-6 text-sm font-bengali">
              <input id="ar-title" required placeholder="আবৃত্তির শিরোনাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="ar-poet" required placeholder="কবির নাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="ar-reciter" required placeholder="আবৃত্তিকারের নাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="ar-duration" type="number" placeholder="সময়কাল (সেকেন্ড)" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <div><label class="text-xs text-ivory/60">Cover Image</label><input id="ar-cover-file" type="file" accept="image/*" class="w-full text-xs mt-1" /></div>
              <div><label class="text-xs text-ivory/60">Audio File*</label><input id="ar-audio-file" type="file" accept="audio/*" required class="w-full text-xs mt-1" /></div>
              <textarea id="ar-transcript" rows="3" placeholder="কবিতার পাঠ (ঐচ্ছিক)..." class="md:col-span-2 px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>
              <button type="submit" class="md:col-span-2 w-fit px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold">আবৃত্তি যুক্ত করুন</button>
            </form>
            <div class="space-y-2.5">
              ${(recs || []).map((r) => `
                <div class="p-3.5 rounded-xl bg-midnight/50 border border-antiqueGold/15 flex items-center justify-between gap-3">
                  <div>
                    <div class="font-bengali font-semibold">${escapeHtml(r.title)}</div>
                    <div class="text-xs text-ivory/60 font-bengali">${escapeHtml(r.poet_name)} • ${escapeHtml(r.reciter_name)}</div>
                  </div>
                  <button onclick="adminDeleteRow('recitations', '${r.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 text-xs">Delete</button>
                </div>
              `).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো আবৃত্তি নেই।</p>'}
            </div>
          `;
        } else if (t === 'youtube') {
          const { data: vids } = await sb.from('youtube_videos').select('*').order('published_at', { ascending: false });
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">YouTube Manager</h2>
            <form onsubmit="adminSaveYouTube(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 mb-6 text-sm font-bengali">
              <input id="ay-title" required placeholder="ভিডিও শিরোনাম" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="ay-vid" required placeholder="YouTube Video ID (যেমন: dQw4w9WgXcQ)" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <select id="ay-type" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25">
                <option value="latest">Latest Uploads</option>
                <option value="featured">Featured Video</option>
                <option value="poetry">Poetry Playlist</option>
                <option value="audio_story">Audio Story Playlist</option>
                <option value="shorts">YouTube Shorts</option>
              </select>
              <label class="flex items-center gap-2 px-3"><input id="ay-featured" type="checkbox" class="accent-antiqueGold" /> Featured</label>
              <textarea id="ay-desc" rows="2" placeholder="বিবরণ..." class="md:col-span-2 px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>
              <button type="submit" class="md:col-span-2 w-fit px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold">ভিডিও যুক্ত করুন</button>
            </form>
            <div class="space-y-2.5">
              ${(vids || []).map((v) => `
                <div class="p-3.5 rounded-xl bg-midnight/50 border border-antiqueGold/15 flex items-center justify-between gap-3">
                  <div>
                    <div class="font-bengali font-semibold">${escapeHtml(v.title)}</div>
                    <div class="text-xs text-ivory/60">${escapeHtml(v.youtube_video_id)} • ${escapeHtml(v.playlist_type)}</div>
                  </div>
                  <button onclick="adminDeleteRow('youtube_videos', '${v.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 text-xs">Delete</button>
                </div>
              `).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো ভিডিও নেই।</p>'}
            </div>
          `;
        } else if (t === 'categories') {
          const { data: cats } = await sb.from('categories').select('*').order('sort_order');
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">Category Manager</h2>
            <form onsubmit="adminSaveCategory(event)" class="flex flex-wrap gap-3 mb-6 font-bengali text-sm">
              <input id="ac-name" required placeholder="নতুন ক্যাটাগরির নাম" class="flex-1 px-4 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="ac-slug" required placeholder="slug (যেমন: smriti)" class="px-4 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <button type="submit" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold">যুক্ত করুন</button>
            </form>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              ${(cats || []).map((c) => `
                <div class="p-3 rounded-xl bg-midnight/50 border border-antiqueGold/15 flex items-center justify-between">
                  <span class="font-bengali">${escapeHtml(c.name)} <span class="text-xs text-ivory/40">(${escapeHtml(c.slug)})</span></span>
                  <button onclick="adminDeleteRow('categories', '${c.id}')" class="text-red-400 text-xs hover:underline">Delete</button>
                </div>
              `).join('')}
            </div>
          `;
        } else if (t === 'quotes') {
          const { data: quotes } = await sb.from('daily_quotes').select('*').order('scheduled_date', { ascending: false });
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">Daily Feelings / Quote Manager</h2>
            <form onsubmit="adminSaveQuote(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 mb-6 text-sm font-bengali">
              <textarea id="aq-text" required rows="2" placeholder="আজকের বিশেষ লাইন..." class="md:col-span-2 px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>
              <input id="aq-author" placeholder="লেখক / কবি" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="aq-date" type="date" required value="${new Date().toISOString().slice(0, 10)}" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
              <button type="submit" class="md:col-span-2 w-fit px-6 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold">কোট সেভ করুন</button>
            </form>
            <div class="space-y-2.5">
              ${(quotes || []).map((q) => `
                <div class="p-3.5 rounded-xl bg-midnight/50 border border-antiqueGold/15 flex items-center justify-between gap-3">
                  <div>
                    <div class="font-bengali text-sm">“${escapeHtml(q.quote_text)}”</div>
                    <div class="text-xs text-antiqueGold">${escapeHtml(q.author_name || '')} • ${q.scheduled_date}</div>
                  </div>
                  <button onclick="adminDeleteRow('daily_quotes', '${q.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-300 text-xs">Delete</button>
                </div>
              `).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো কোট নেই।</p>'}
            </div>
          `;
        } else if (t === 'popup') {
  const { data: rows } = await sb.from('special_popups').select('*').order('updated_at', { ascending: false }).limit(1);
  const pop = rows && rows.length ? rows[0] : null;
  box.innerHTML = `
    <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-2">Special Day Popup Manager</h2>
    <p class="font-bengali text-xs text-ivory/65 mb-5">যেকোনো বিশেষ দিন বা উৎসবের পপ-আপ এখান থেকে চালু, বন্ধ বা আপডেট করুন।</p>
    <form onsubmit="adminSavePopup(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 text-sm font-bengali">
      <input type="hidden" id="sp-id" value="${escapeHtml(pop?.id || '')}" />
      <input type="hidden" id="sp-existing-img" value="${escapeHtml(pop?.image_url || '')}" />

      <div>
        <label class="block text-xs text-ivory/70 mb-1">ব্যাজ টেক্সট (যেমন: শুভ নববর্ষ / বিশেষ ঘোষণা)</label>
        <input id="sp-badge" value="${escapeHtml(pop?.badge_text || 'বিশেষ ঘোষণা')}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
      </div>
      <div>
        <label class="block text-xs text-ivory/70 mb-1">পপ-আপ শিরোনাম*</label>
        <input id="sp-title" required value="${escapeHtml(pop?.title || '')}" placeholder="যেমন: শুভ রবীন্দ্র জয়ন্তী!" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
      </div>

      <div class="md:col-span-2">
        <label class="block text-xs text-ivory/70 mb-1">বার্তা (Message)*</label>
        <textarea id="sp-message" required rows="3" placeholder="বিশেষ দিনের শুভেচ্ছা বা ঘোষণার বিবরণ..." class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25">${escapeHtml(pop?.message || '')}</textarea>
      </div>

      <div>
        <label class="block text-xs text-ivory/70 mb-1">বাটন টেক্সট (ঐচ্ছিক)</label>
        <input id="sp-btn-text" value="${escapeHtml(pop?.button_text || 'এখনই দেখুন')}" class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
      </div>
      <div>
        <label class="block text-xs text-ivory/70 mb-1">বাটন লিংক / রুট (যেমন: poetry, audio-stories বা https://...)</label>
        <input id="sp-btn-link" value="${escapeHtml(pop?.button_link || '')}" placeholder="poetry বা https://..." class="w-full px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
      </div>

      <div>
        <label class="block text-xs text-ivory/70 mb-1">ব্যানার ছবি আপলোড (ঐচ্ছিক)</label>
        <input id="sp-img-file" type="file" accept="image/*" class="w-full text-xs mt-1" />
        ${pop?.image_url ? `<p class="text-[11px] text-emerald-300 mt-1">বর্তমান ছবি সেট করা আছে</p>` : ''}
      </div>
      <div class="flex items-center">
        <label class="flex items-center gap-2.5 cursor-pointer px-4 py-2.5 rounded-xl bg-deepPurple/50 border border-antiqueGold/30">
          <input id="sp-active" type="checkbox" ${pop?.is_active ? 'checked' : ''} class="accent-antiqueGold w-4 h-4" />
          <span class="font-semibold text-antiqueGold">ওয়েবসাইটে পপ-আপ চালু রাখুন (Active)</span>
        </label>
      </div>

      <div class="md:col-span-2 flex flex-wrap gap-3 pt-2">
        <button type="submit" class="px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold">পপ-আপ আপডেট করুন</button>
        ${pop ? `<button type="button" onclick="previewSpecialPopup()" class="px-4 py-2.5 rounded-xl border border-antiqueGold/35 text-antiqueGold">প্রিভিউ দেখুন</button>` : ''}
      </div>
    </form>
  `;
     } else if (t === 'moderation') {
          const [subRes, repRes] = await Promise.all([
            sb.from('user_submissions').select('*').order('created_at', { ascending: false }),
            sb.from('content_reports').select('*').order('created_at', { ascending: false })
          ]);
          state.adminSubmissions = subRes.data || [];
          box.innerHTML = `
            <h2 class="font-bengali text-xl font-bold text-antiqueGold mb-4">পাঠকদের পাঠানো লেখা (Write With KothaVerse)</h2>
            <div class="space-y-3 mb-8">
              ${state.adminSubmissions.map((s) => {
                const isChecked =
                  s.plagiarism_score !== null && s.plagiarism_score !== undefined &&
                  s.quality_score !== null && s.quality_score !== undefined;

                const plagScore = isChecked ? Number(s.plagiarism_score) : null;
                const qualScore = isChecked ? Number(s.quality_score) : null;
                const isPlagSafe = isChecked && plagScore < 30;
                const isQualityGood = isChecked && qualScore >= 60;
                const canApprove = isChecked && isPlagSafe && isQualityGood;

                const badgesHtml = !isChecked
                  ? `<span class="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/15 border border-amber-400/35 text-amber-300 font-bengali">Plagiarism ও Quality যাচাই বাকি</span>`
                  : `
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${isPlagSafe ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300' : 'bg-red-600/25 border-red-400/50 text-red-200'}">
                      Plagiarism: ${plagScore}%
                    </span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${isQualityGood ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300' : 'bg-red-600/25 border-red-400/50 text-red-200'}">
                      Quality: ${qualScore}/100
                    </span>
                  `;

                // Auto-select default rejection reason based on which test failed
                const failBoth = isChecked && !isPlagSafe && !isQualityGood;
                const failPlagOnly = isChecked && !isPlagSafe && isQualityGood;
                const failQualOnly = isChecked && isPlagSafe && !isQualityGood;

                return `
                <div class="p-4 rounded-2xl bg-midnight/60 border ${isChecked && !canApprove ? 'border-red-500/45' : 'border-antiqueGold/20'}">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="font-bengali font-bold text-base">${escapeHtml(s.title)}</span>
                      <span class="font-bengali text-xs text-antiqueGold">— ${escapeHtml(s.pen_name)}</span>
                      ${s.whatsapp_number ? `<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono">WA: ${escapeHtml(s.whatsapp_number)}</span>` : ''}
                      <span class="px-2 py-0.5 rounded-full text-[10px] uppercase bg-deepPurple text-ivory">${escapeHtml(s.status)}</span>
                      ${badgesHtml}
                    </div>

                    <div class="flex flex-wrap gap-2 text-xs font-bengali">
                      ${s.status === 'pending' ? `
                        <button id="check-btn-${s.id}" onclick="adminCheckSubmission('${s.id}')" class="px-3 py-1.5 rounded-lg ${!isChecked ? 'bg-amber-500 text-midnight font-bold' : 'bg-amber-500/20 border border-amber-400/40 text-amber-200'} hover:opacity-90 flex items-center gap-1 transition">
                          <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> ${!isChecked ? 'Plagiarism ও Quality চেক করুন' : 'আবার চেক'}
                        </button>

                        ${canApprove ? `
                          <button onclick="adminReviewSubmission('${s.id}', 'approved')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1 transition">
                            <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> অনুমোদন ও প্রকাশ
                          </button>
                          <button onclick="toggleRejectBox('${s.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/25 hover:bg-red-500/45 text-red-200 transition">বাতিল</button>
                        ` : ''}

                        ${isChecked && !canApprove ? `
                          <button onclick="toggleRejectBox('${s.id}')" class="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold flex items-center gap-1 transition">
                            <i data-lucide="x-circle" class="w-3.5 h-3.5"></i> কারণসহ বাতিল করুন
                          </button>
                        ` : ''}
                      ` : ''}

                      ${s.status === 'approved' && s.whatsapp_number ? `
                        <button onclick="adminSendPublishWA('${s.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600/25 border border-emerald-400/40 text-emerald-200 hover:bg-emerald-600 hover:text-white flex items-center gap-1.5 transition">
                          <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp মেসেজ পাঠান
                        </button>
                      ` : ''}

                      ${s.status === 'approved' ? `
                        <button onclick="downloadPoetCardFromSubmission('${s.id}')" class="px-3 py-1.5 rounded-lg bg-antiqueGold/20 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight flex items-center gap-1.5 transition">
                          <i data-lucide="award" class="w-3.5 h-3.5"></i> Poet Card
                        </button>
                      ` : ''}

                      ${s.status === 'rejected' && s.whatsapp_number ? `
                        <button onclick="adminSendRejectWA('${s.id}')" class="px-3 py-1.5 rounded-lg bg-red-600/25 border border-red-400/40 text-red-200 hover:bg-red-600 hover:text-white flex items-center gap-1.5 transition">
                          <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> WhatsApp-এ বাতিলের কারণ পাঠান
                        </button>
                      ` : ''}
                    </div>
                  </div>

                  <p class="font-bengali text-xs text-ivory/75 whitespace-pre-line">${escapeHtml(s.body)}</p>

                  <!-- Plagiarism + Quality Report -->
                  ${isChecked ? `
                    <div class="mt-3 p-3 rounded-xl bg-deepPurple/35 border ${canApprove ? 'border-emerald-400/25' : 'border-red-400/35'} text-xs font-bengali space-y-1.5">
                      <div class="font-semibold ${canApprove ? 'text-emerald-300' : 'text-red-300'}">
                        যাচাই রিপোর্ট — Plagiarism: ${plagScore}% (${isPlagSafe ? 'পাস' : 'ফেল'}) | Quality: ${qualScore}/100 (${isQualityGood ? 'পাস' : 'ফেল'})
                      </div>
                      <div class="text-ivory/80 whitespace-pre-line">${escapeHtml(s.plagiarism_report || '')}</div>
                      <div class="flex flex-wrap gap-1.5 pt-1">${buildGooglePlagLinks(s.body)}</div>
                    </div>
                  ` : ''}

                  <!-- Saved Rejection Reason -->
                  ${s.status === 'rejected' && s.rejection_reason ? `
                    <div class="mt-3 p-3 rounded-xl bg-red-950/45 border border-red-500/35 text-xs font-bengali text-red-200">
                      <strong>বাতিলের কারণ:</strong> ${escapeHtml(s.rejection_reason)}
                    </div>
                  ` : ''}

                  <!-- Inline Reject Reason Form -->
                  <div id="reject-box-${s.id}" class="hidden mt-3 p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 space-y-2.5 font-bengali text-xs">
                    <div class="font-semibold text-red-200">বাতিলের কারণ নির্বাচন করুন বা লিখুন:</div>
                    <select id="rej-preset-${s.id}" class="w-full px-3 py-2 rounded-lg bg-midnight border border-red-400/30 text-ivory">
                      <option value="লেখাটিতে কপি/Plagiarism (${plagScore ?? 'উচ্চ'}%) ধরা পড়েছে এবং সাহিত্যমান (${qualScore ?? 'কম'}/100) প্রকাশযোগ্য মানের নয়। অনুগ্রহ করে মৌলিক ও পরিমার্জিত লেখা জমা দিন।" ${failBoth ? 'selected' : ''}>Plagiarism + কোয়ালিটি দুটোই কম</option>
                      <option value="লেখাটিতে কপি বা Plagiarism ধরা পড়েছে (${plagScore ?? 'উচ্চ'}%)। শুধুমাত্র আপনার নিজের মৌলিক লেখা জমা দিন।" ${failPlagOnly ? 'selected' : ''}>কপি / Plagiarism ধরা পড়েছে</option>
                      <option value="লেখাটির সাহিত্যমান, ছন্দ বা বানান প্রকাশযোগ্য মানের নয় (Quality Score: ${qualScore ?? 'কম'}/100)। আরেকটু পরিমার্জনা করে পুনরায় জমা দিন।" ${failQualOnly ? 'selected' : ''}>কোয়ালিটি / বানান / ছন্দ মানসম্মত নয়</option>
                      <option value="লেখাটি অসম্পূর্ণ বা খুব সংক্ষিপ্ত। সম্পূর্ণ লেখা জমা দিন।">লেখাটি অসম্পূর্ণ / খুব ছোট</option>
                      <option value="লেখাটি KothaVerse-এর কমিউনিটি নীতিমালা বহির্ভূত।">নীতিমালা বহির্ভূত বিষয়বস্তু</option>
                      <option value="CUSTOM">অন্যান্য (নিচে নিজের কারণ লিখুন)</option>
                    </select>
                    <textarea id="rej-note-${s.id}" rows="2" placeholder="অতিরিক্ত পরামর্শ বা নির্দিষ্ট কারণ লিখুন (ঐচ্ছিক)..." class="w-full px-3 py-2 rounded-lg bg-midnight border border-red-400/30 text-ivory"></textarea>
                    <div class="flex flex-wrap items-center gap-2">
                      <button onclick="adminRejectSubmission('${s.id}', true)" class="px-4 py-1.5 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 flex items-center gap-1.5 transition">
                        <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> বাতিল ও WhatsApp পাঠান
                      </button>
                      <button onclick="adminRejectSubmission('${s.id}', false)" class="px-3.5 py-1.5 rounded-lg bg-red-500/25 border border-red-400/40 text-red-200 hover:bg-red-500/40 transition">শুধু বাতিল করুন</button>
                      <button onclick="toggleRejectBox('${s.id}')" class="px-3 py-1.5 rounded-lg bg-midnight border border-ivory/20 text-ivory/75">ফিরে যান</button>
                    </div>
                  </div>
                </div>
              `;
              }).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো সাবমিশন নেই।</p>'}
            </div>

            <h2 class="font-bengali text-xl font-bold text-red-400 mb-4">কমিউনিটি রিপোর্ট (Moderation)</h2>
            <div class="space-y-2.5">
              ${(repRes.data || []).map((r) => `
                <div class="p-3.5 rounded-xl bg-midnight/50 border border-red-400/20 flex flex-wrap items-center justify-between gap-3">
                  <div class="text-xs font-bengali">
                    <span class="text-red-300 font-semibold uppercase">${escapeHtml(r.target_type)}</span> • কারণ: ${escapeHtml(r.reason)}
                    <span class="ml-2 px-2 py-0.5 rounded-full bg-deepPurple text-[10px]">${r.status}</span>
                  </div>
                  ${r.status === 'open' ? `<button onclick="adminResolveReport('${r.id}')" class="px-3 py-1 rounded-lg bg-emerald-600/80 text-white text-xs">Resolve</button>` : ''}
                </div>
              `).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো ওপেন রিপোর্ট নেই।</p>'}
            </div>
          `;
        } else if (t === 'inbox') {
          const [nlRes, ctRes] = await Promise.all([
            sb.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false }),
            sb.from('contact_messages').select('*').order('created_at', { ascending: false })
          ]);
          state.adminSubscribers = nlRes.data || [];
          const nlCfg = getNewsletterSettings();
          const statusStyle = {
            approved: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
            rejected: 'bg-red-500/20 text-red-300 border-red-400/30',
            pending: 'bg-amber-500/20 text-amber-300 border-amber-400/30'
          };
          box.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div class="lg:col-span-2 space-y-4">
                <h2 class="font-bengali text-lg font-bold text-antiqueGold">Newsletter Subscribers (${state.adminSubscribers.length})</h2>

                <details class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25">
                  <summary class="cursor-pointer font-bengali text-xs font-semibold text-antiqueGold flex items-center justify-between list-none">
                    <span class="flex items-center gap-2"><i data-lucide="settings" class="w-4 h-4"></i> Newsletter Payment & Group Settings</span>
                    <i data-lucide="chevron-down" class="w-4 h-4"></i>
                  </summary>
                  <form onsubmit="handleSaveNewsletterSettings(event)" class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
                    <div>
                      <label class="block text-ivory/70 mb-1">UPI ID</label>
                      <input id="cfg-upi" type="text" required value="${escapeHtml(nlCfg.upiId)}" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
                    </div>
                    <div>
                      <label class="block text-ivory/70 mb-1">Subscription Fee</label>
                      <input id="cfg-fee" type="text" required value="${escapeHtml(nlCfg.fee)}" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
                    </div>
                    <div>
                      <label class="block text-ivory/70 mb-1">WhatsApp Group Link</label>
                      <input id="cfg-group" type="url" required value="${escapeHtml(nlCfg.groupLink)}" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
                    </div>
                    <div class="sm:col-span-3 flex justify-end">
                      <button type="submit" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-bengali font-semibold">সেটিংস সংরক্ষণ করুন</button>
                    </div>
                  </form>
                </details>

                <div class="space-y-3 max-h-[540px] overflow-y-auto pr-1">
                  ${state.adminSubscribers.map((n) => {
                    const pStatus = n.payment_status || (n.is_active ? 'approved' : 'pending');
                    return `
                      <div class="p-4 rounded-2xl bg-midnight/55 border border-antiqueGold/15 text-xs space-y-3">
                        <div class="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <div class="font-bengali font-semibold text-sm text-ivory">
                              ${escapeHtml(n.name || 'অনামা পাঠক')}
                              <span class="ml-2 px-2 py-0.5 rounded-full text-[10px] uppercase border ${statusStyle[pStatus] || statusStyle.pending}">${escapeHtml(pStatus)}</span>
                            </div>
                            <div class="text-ivory/65 mt-0.5">${escapeHtml(n.email)} ${n.whatsapp_number ? `• <span class="text-emerald-300 font-mono">WA: ${escapeHtml(n.whatsapp_number)}</span>` : ''}</div>
                            ${n.transaction_id ? `<div class="mt-1 inline-block px-2 py-0.5 rounded-lg bg-deepPurple/70 text-antiqueGold font-mono text-[11px]">Txn ID: ${escapeHtml(n.transaction_id)}</div>` : ''}
                          </div>
                          <span class="text-ivory/40">${new Date(n.subscribed_at).toLocaleDateString()}</span>
                        </div>

                        ${pStatus !== 'approved' ? `
                          <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-antiqueGold/10">
                            <button onclick="adminSendPaymentWA('${n.id}')" class="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/35 text-amber-200 hover:bg-amber-500 hover:text-midnight font-semibold transition flex items-center gap-1">
                              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Payment Msg (wa.me)
                            </button>
                            <input id="txn-${n.id}" type="text" placeholder="Transaction ID লিখুন..." value="${escapeHtml(n.transaction_id || '')}" class="flex-1 min-w-[160px] px-3 py-1.5 rounded-lg bg-midnight border border-antiqueGold/25 font-mono text-xs focus:outline-none focus:border-antiqueGold" />
                            <button onclick="adminApproveNewsletter('${n.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition">Approve & Group Link</button>
                            <button onclick="adminRejectNewsletter('${n.id}')" class="px-3 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 transition">Reject</button>
                          </div>
                        ` : `
                          <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-antiqueGold/10">
                            <span class="text-emerald-300/80 font-bengali">সক্রিয় সাবস্ক্রাইবার</span>
                            <button onclick="adminSendGroupLinkWA('${n.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600/25 border border-emerald-400/40 text-emerald-200 hover:bg-emerald-600 hover:text-white transition flex items-center gap-1">
                              <i data-lucide="send" class="w-3.5 h-3.5"></i> Group Link পাঠান (wa.me)
                            </button>
                          </div>
                        `}
                      </div>
                    `;
                  }).join('') || '<p class="text-xs text-ivory/50">No subscribers yet.</p>'}
                </div>
              </div>

              <div>
                <h2 class="font-bengali text-lg font-bold text-antiqueGold mb-3">Contact Messages (${ctRes.data?.length || 0})</h2>
                <div class="space-y-3 max-h-[540px] overflow-y-auto pr-1">
                  ${(ctRes.data || []).map((m) => `
                    <div class="p-3.5 rounded-xl bg-midnight/50 border border-antiqueGold/15 text-xs space-y-1">
                      <div class="flex justify-between font-semibold text-antiqueGold">
                        <span>${escapeHtml(m.name)} (${escapeHtml(m.email)})</span>
                        <span class="text-ivory/40">${new Date(m.created_at).toLocaleDateString()}</span>
                      </div>
                      <div class="font-bengali font-medium text-ivory">${escapeHtml(m.subject || 'No Subject')}</div>
                      <p class="font-bengali text-ivory/75">${escapeHtml(m.message)}</p>
                    </div>
                  `).join('') || '<p class="text-xs text-ivory/50">No messages yet.</p>'}
                </div>
              </div>
            </div>
          `;
        } else if (t === 'store') {
          const [ebRes, ebOrdRes, vcOrdRes, stSetRes] = await Promise.all([
            sb.from('ebooks').select('*').order('created_at', { ascending: false }),
            sb.from('ebook_orders').select('*, ebooks(title, price_inr)').order('created_at', { ascending: false }),
            sb.from('voice_dedication_orders').select('*').order('created_at', { ascending: false }),
            sb.from('store_settings').select('*').eq('id', 1).maybeSingle()
          ]);
          state.ebooks = ebRes.data || [];
          if (!stSetRes.error && stSetRes.data) {
            state.storeSettings = stSetRes.data;
          }
          box.innerHTML = `
            <div id="admin-upi-qr-controls"></div>
            ${renderAdminStoreTab(state.ebooks, ebOrdRes.data || [], vcOrdRes.data || [])}
            <div id="admin-phase1-controls"></div>
            <div id="admin-phase2-controls"></div>
            <div id="admin-phase3-controls"></div>
          `;
          loadAdminUpiQrManager('admin-upi-qr-controls');
          await loadAdminPhase1Panel('admin-phase1-controls');
          await loadAdminPhase2Panel('admin-phase2-controls');
          await loadAdminPhase3Panel('admin-phase3-controls');
         } else if (t === 'physical_store') {
          box.innerHTML = `<div id="kv-admin-physical-root"></div>`;
          await renderAdminPhysicalManager('kv-admin-physical-root');         
        } else if (t === 'users') {
          const { data: users, error } = await sb.rpc('get_admin_users');
          if (error) {
            box.innerHTML = `
              <div class="p-6 rounded-2xl bg-amber-500/10 border border-amber-400/30 space-y-4 font-bengali">
                <h2 class="text-lg font-bold text-amber-300 flex items-center gap-2"><i data-lucide="alert-triangle" class="w-5 h-5"></i> Supabase RPC সেটআপ প্রয়োজন</h2>
                <p class="text-sm text-ivory/85 leading-relaxed">
                  Admin Panel থেকে সব অ্যাকাউন্ট দেখা এবং ইমেইল কনফার্ম করার জন্য Supabase Dashboard → <strong>SQL Editor</strong>-এ নিচের SQL মাইগ্রেশন স্ক্রিপ্টটি একবার রান করুন।
                </p>
                <div class="text-xs text-red-300 font-mono bg-midnight/70 p-3 rounded-xl border border-red-400/20">Error: ${escapeHtml(error.message)}</div>
                <button onclick="copyAdminMigrationSQL()" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs inline-flex items-center gap-2">
                  <i data-lucide="copy" class="w-4 h-4"></i> SQL Migration Script কপি করুন
                </button>
              </div>
            `;
          } else {
            const list = users || [];
            const totalUsers = list.length;
            const unconfirmedCount = list.filter((u) => !u.email_confirmed_at).length;
            box.innerHTML = `
              <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h2 class="font-bengali text-xl font-bold text-antiqueGold">Users & Mail Confirmation</h2>
                  <p class="font-bengali text-xs text-ivory/65 mt-1">
                    মোট ইউজার: <strong class="text-ivory">${totalUsers}</strong> •
                    Unconfirmed Mail: <strong class="${unconfirmedCount > 0 ? 'text-amber-300' : 'text-emerald-300'}">${unconfirmedCount}</strong>
                  </p>
                </div>
                ${unconfirmedCount > 0 ? `
                  <button onclick="adminConfirmAllEmails()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bengali font-semibold text-xs shadow-gold flex items-center gap-2 transition">
                    <i data-lucide="check-check" class="w-4 h-4"></i> সব Unconfirmed Mail একসাথে Confirm করুন (${unconfirmedCount})
                  </button>
                ` : `<span class="px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-bengali text-xs">সব অ্যাকাউন্টের ইমেইল কনফার্মড!</span>`}
              </div>

              <div class="space-y-2.5 max-h-[540px] overflow-y-auto pr-1">
                ${list.map((u) => {
                  const confirmed = !!u.email_confirmed_at;
                  return `
                    <div class="p-4 rounded-2xl bg-midnight/55 border border-antiqueGold/15 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="font-bengali font-semibold text-sm text-ivory">${escapeHtml(u.full_name || 'Unnamed User')}</span>
                          <span class="px-2 py-0.5 rounded-full text-[10px] uppercase bg-deepPurple text-antiqueGold border border-antiqueGold/25">${escapeHtml(u.role || 'user')}</span>
                          <span class="px-2 py-0.5 rounded-full text-[10px] border ${confirmed ? 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30' : 'bg-amber-500/15 text-amber-300 border-amber-400/30'}">
                            ${confirmed ? 'Confirmed' : 'Unconfirmed'}
                          </span>
                        </div>
                        <div class="text-ivory/65 mt-0.5">${escapeHtml(u.email)} • <span class="text-ivory/40">${new Date(u.created_at).toLocaleDateString()}</span></div>
                      </div>

                      <div class="flex flex-wrap items-center gap-2">
                        <select onchange="adminUpdateUserRole('${u.id}', this.value)" class="px-2.5 py-1.5 rounded-lg bg-midnight border border-antiqueGold/25 text-ivory text-xs focus:outline-none focus:border-antiqueGold">
                          <option value="user" ${u.role === 'user' ? 'selected' : ''}>user</option>
                          <option value="moderator" ${u.role === 'moderator' ? 'selected' : ''}>moderator</option>
                          <option value="admin" ${u.role === 'admin' ? 'selected' : ''}>admin</option>
                        </select>
                        ${!confirmed ? `
                          <button onclick="adminConfirmUserEmail('${u.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition flex items-center gap-1">
                            <i data-lucide="mail-check" class="w-3.5 h-3.5"></i> Confirm Mail
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  `;
                }).join('') || '<p class="text-xs text-ivory/50 font-bengali">কোনো ইউজার পাওয়া যায়নি।</p>'}
              </div>
            `;
          }
        }
        lucide.createIcons();
      } catch (err) {
        box.innerHTML = `<div class="p-6 text-red-300 text-sm">ত্রুটি: ${escapeHtml(err.message)}</div>`;
      }
    }

    // =========================================================================
// =========================================================================
    // 14. KOTHAVERSE AI INTELLIGENCE CENTER (Admin-Only Draft & Copilot Studio)
    // =========================================================================
    function renderAICenterTab() {
      const cfg = getSiteSettings();
      const hasKey = !!(cfg.aiApiKey && cfg.aiApiKey.trim());
      return `
        <div class="space-y-6 font-bengali">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 class="text-xl font-bold text-antiqueGold flex items-center gap-2"><i data-lucide="sparkles" class="w-5 h-5"></i> KothaVerse AI Intelligence Center</h2>
              <p class="text-xs text-ivory/65 mt-1">শুধুমাত্র অ্যাডমিনের জন্য। AI ড্রাফট তৈরি করবে — আপনার রিভিউ ও অনুমোদনের পরেই কনটেন্ট প্রকাশিত হবে।</p>
            </div>
            <span class="px-3 py-1 rounded-full text-[11px] border ${hasKey ? 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300' : 'bg-amber-500/15 border-amber-400/30 text-amber-200'}">
              ${hasKey ? 'Live Gemini API Connected' : 'Smart Local Mode (Settings-এ API Key দিন)'}
            </span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- AI Content, SEO & YouTube Studio -->
            <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-4">
              <h3 class="font-semibold text-antiqueGold text-sm">AI Content, SEO & YouTube Studio</h3>
              <select id="ai-task-type" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-xs">
                <option value="poem_idea">কবিতার আইডিয়া ও প্রথম স্তবক (Poem Idea)</option>
                <option value="story_outline">অডিও গল্পের আউটলাইন (Story Outline)</option>
                <option value="yt_pack">YouTube Title, Description & Hashtags</option>
                <option value="seo_pack">SEO Title, Meta Description & Keywords</option>
                <option value="social_caption">Instagram / Facebook ক্যাপশন</option>
                <option value="translate">বাংলা ↔ English অনুবাদ</option>
              </select>
              <textarea id="ai-studio-input" rows="3" placeholder="বিষয়, কবিতার লাইন বা গল্পের শিরোনাম লিখুন..." class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-xs focus:outline-none focus:border-antiqueGold"></textarea>
              <div class="flex flex-wrap gap-2">
                <button type="button" onclick="runAIStudio()" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs flex items-center gap-1.5">
                  <i data-lucide="wand-2" class="w-3.5 h-3.5"></i> ড্রাফট তৈরি করুন
                </button>
                <button type="button" onclick="copyTextToClipboard(document.getElementById('ai-studio-output').textContent)" class="px-3.5 py-2 rounded-xl border border-antiqueGold/30 text-xs text-antiqueGold">আউটপুট কপি</button>
              </div>
              <div id="ai-studio-output" class="p-4 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 text-xs whitespace-pre-line leading-relaxed min-h-[130px] text-ivory/85">এখানে AI-এর তৈরি ড্রাফট দেখা যাবে...</div>
            </div>

            <!-- AI Admin Copilot -->
            <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/25 flex flex-col justify-between space-y-4">
              <div>
                <h3 class="font-semibold text-antiqueGold text-sm mb-2">AI Admin Copilot</h3>
                <div class="flex flex-wrap gap-1.5 mb-3">
                  ${[
                    'সবচেয়ে জনপ্রিয় কবিতাগুলো দেখাও',
                    'আগামী সপ্তাহের content calendar তৈরি করো',
                    'অপেক্ষমাণ submissions কতগুলো আছে?'
                  ].map((q) => `<button type="button" onclick="const inp = document.getElementById('ai-copilot-input'); if (inp) { inp.value = '${q}'; runAICopilot(); }" class="px-2.5 py-1 rounded-lg bg-deepPurple/50 border border-antiqueGold/20 text-[11px] text-ivory/80 hover:border-antiqueGold">${q}</button>`).join('')}
                </div>
                <div id="ai-copilot-log" class="space-y-2.5 max-h-60 overflow-y-auto p-3 rounded-xl bg-midnight/80 border border-antiqueGold/15 text-xs">
                  ${renderCopilotMessagesHTML()}
                </div>
              </div>
              <form onsubmit="event.preventDefault(); runAICopilot()" class="flex gap-2">
                <input id="ai-copilot-input" type="text" placeholder="বাংলা বা ইংরেজিতে নির্দেশ লিখুন..." class="flex-1 px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-xs focus:outline-none focus:border-antiqueGold" />
                <button type="submit" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">পাঠান</button>
              </form>
            </div>
          </div>
        </div>
      `;
    }

    function renderCopilotMessagesHTML() {
      if (!state.aiCopilotLog || !state.aiCopilotLog.length) {
        return '<div class="text-ivory/50">নমস্কার অ্যাডমিন! আপনার প্ল্যাটফর্মের ডেটা বা কনটেন্ট প্ল্যানিং নিয়ে যেকোনো নির্দেশ দিন।</div>';
      }
      return state.aiCopilotLog.map((m) => `
        <div class="p-2.5 rounded-xl ${m.role === 'user' ? 'bg-antiqueGold/15 text-antiqueGold ml-6' : 'bg-deepPurple/45 text-ivory/90 mr-6 whitespace-pre-line'}">${escapeHtml(m.text)}</div>
      `).join('');
    }

    function refreshCopilotLogUI() {
      const logEl = document.getElementById('ai-copilot-log');
      if (logEl) {
        logEl.innerHTML = renderCopilotMessagesHTML();
        logEl.scrollTop = logEl.scrollHeight;
      }
    }

    async function callOptionalGemini(promptText) {
      const apiKey = getSiteSettings().aiApiKey?.trim();
      if (!apiKey) return null;

      const models = ['gemini-3.8-flash', 'gemini-3.5-flash-lite'];
      let lastError = '';

      for (const modelName of models) {
        try {
          const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(modelName)}:generateContent?key=${encodeURIComponent(apiKey)}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [{ parts: [{ text: promptText }] }]
              })
            }
          );

          const data = await res.json().catch(() => ({}));
          if (!res.ok) {
            lastError = data?.error?.message || `HTTP ${res.status}`;
            console.warn(`Gemini (${modelName}) error:`, lastError);
            continue;
          }

          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text;
          lastError = 'Empty response from Gemini';
        } catch (err) {
          lastError = err?.message || 'Network request failed';
          console.error(`Gemini (${modelName}) fetch failed:`, err);
        }
      }

      if (lastError && typeof showToast === 'function') {
        showToast(`Gemini API ত্রুটি: ${lastError}`, 'error');
      }
      return null;
    }

    async function runAIStudio() {
      const task = document.getElementById('ai-task-type')?.value || 'poem_idea';
      const input = document.getElementById('ai-studio-input')?.value.trim() || '';
      const out = document.getElementById('ai-studio-output');
      if (!out) return;
      if (!input) return showToast('আগে কিছু বিষয় বা টেক্সট লিখুন।', 'info');

      out.textContent = 'ড্রাফট তৈরি হচ্ছে...';

      const taskPrompts = {
        poem_idea: `KothaVerse বাংলা সাহিত্য প্ল্যাটফর্মের জন্য "${input}" বিষয়ের ওপর ৩টি কবিতার শিরোনাম ও একটি ৪ লাইনের সূচনা স্তবক লেখো।`,
        story_outline: `"${input}" বিষয়ের ওপর একটি ৫-মিনিটের বাংলা অডিও গল্পের সংক্ষিপ্ত আউটলাইন (শুরু, মধ্যভাগ, চমক ও সমাপ্তি) ও আবহ সংগীতের পরামর্শ দাও।`,
        yt_pack: `"${input}" ভিডিওর জন্য ৩টি আকর্ষণীয় YouTube শিরোনাম, বাংলা ডেসক্রিপশন এবং ১০টি হ্যাশট্যাগ তৈরি করো।`,
        seo_pack: `"${input}" এর জন্য SEO Title (60 char), Meta Description (155 char) এবং ৮টি বাংলা ও ইংরেজি কিওয়ার্ড দাও।`,
        social_caption: `KothaVerse-এর "${input}" পোস্টের জন্য একটি আবেগময় Instagram/Facebook ক্যাপশন ও হ্যাশট্যাগ লেখো।`,
        translate: `নিচের লেখাটি প্রাকৃতিক ও সাহিত্যিক ভাষায় বাংলা থেকে ইংরেজি বা ইংরেজি থেকে বাংলায় অনুবাদ করো:\n${input}`
      };

      const live = await callOptionalGemini(taskPrompts[task]);
      if (live) {
        out.textContent = live;
        return;
      }

      const fallbacks = {
        poem_idea: `শিরোনাম প্রস্তাবনা (${input}):\n১. নীরবতার ওপারে ${input}\n২. শেষ বিকেলের ${input}\n৩. অলিখিত চিঠিতে ${input}\n\nপ্রথম স্তবক (ড্রাফট):\nসন্ধ্যার মৃদু আলোয় যখন শব্দ থেমে যায়,\n${input}-এর ছায়া তখন জানালার পাশে দাঁড়ায়।\nকিছু অনুভূতি আজও বলা হয়নি কোনোদিন,\nতবু প্রতিটি পংক্তিতে বাজে তারই মৃদু বীণ।`,
        story_outline: `অডিও গল্পের আউটলাইন — "${input}"\n• সূচনা (0:00–1:00): রাতের নিস্তব্ধ আবহ ও মূল চরিত্রের পরিচয় (Rain/Night ambience)।\n• ঘটনাপ্রবাহ (1:00–3:30): একটি পুরোনো স্মৃতি বা অপ্রত্যাশিত সাক্ষাৎ।\n• ক্লাইম্যাক্স ও সমাপ্তি (3:30–5:00): হৃদয়স্পর্শী উপলব্ধি ও মৃদু পিয়ানো আউট্রো।`,
        yt_pack: `YouTube Title: ${input} | বাংলা কবিতা ও আবৃত্তি | KothaVerse\n\nDescription:\nশব্দের পরিপাটে, মনের আলাপন। শুনুন আমাদের নতুন পরিবেশনা "${input}"।\nরাতের শান্ত পরিবেশে হেডফোন দিয়ে শোনার অনুরোধ রইল।\n\nHashtags:\n#KothaVerse #BanglaKobita #BengaliAudioStory #Abritti #বাংলাকবিতা`,
        seo_pack: `SEO Title: ${input} — বাংলা কবিতা ও অডিও গল্প | KothaVerse\nMeta Description: KothaVerse-এ পড়ুন ও শুনুন "${input}"। নির্বাচিত বাংলা কবিতা, আবৃত্তি এবং রাতের অডিও গল্পের অনন্য সংগ্রহ।\nKeywords: ${input}, বাংলা কবিতা, KothaVerse, Bengali Poetry, Audio Story`,
        social_caption: `কিছু কথা শুধু শোনা যায় না, অনুভব করতে হয়... ✨\n\nনতুন পরিবেশনা: "${input}" এখন KothaVerse-এ।\nলিংক বায়োতে। 🎧📖\n\n#KothaVerse #কথাVerse #BanglaSahitya #BengaliPoetry`,
        translate: `[Live translation requires a Gemini API Key in Website Settings]\n\nInput preserved:\n${input}`
      };
      out.textContent = fallbacks[task];
    }

    async function runAICopilot() {
      const inp = document.getElementById('ai-copilot-input');
      const q = inp?.value.trim() || '';
      if (!q) return;
      inp.value = '';

      state.aiCopilotLog.push({ role: 'user', text: q });
      refreshCopilotLogUI();

      const topPoems = [...state.poems].sort((a, b) => (b.views_count || 0) - (a.views_count || 0)).slice(0, 5);
      const pendingSubs = state.adminSubmissions.filter((s) => s.status === 'pending').length;
      const contextSummary = `Poems: ${state.poems.length}, Audio Stories: ${state.audioStories.length}, Recitations: ${state.recitations.length}, YouTube: ${state.youtubeVideos.length}, Top Poems: ${topPoems.map((p) => `${p.title} (${p.views_count || 0})`).join(', ')}`;

      let reply = await callOptionalGemini(
        `You are KothaVerse Admin Copilot. Reply concisely in Bengali. Platform data: ${contextSummary}. Admin query: ${q}`
      );

      if (!reply) {
        const lower = q.toLowerCase();
        if (lower.includes('জনপ্রিয়') || lower.includes('popular') || lower.includes('top')) {
          reply = `সর্বাধিক জনপ্রিয় কবিতাগুলো:\n` + topPoems.map((p, i) => `${i + 1}. ${p.title} — ${p.poet_name} (${p.views_count || 0} views)`).join('\n');
        } else if (lower.includes('calendar') || lower.includes('সপ্তাহ') || lower.includes('ক্যালেন্ডার')) {
          reply = `আগামী সপ্তাহের প্রস্তাবিত Content Calendar:\n• সোম: প্রেমের কবিতা + Quote Card\n• বুধ: নতুন আবৃত্তি (Transcript সহ)\n• শুক্র: রাতের অডিও গল্প + YouTube Premiere\n• রবি: পাঠকদের পাঠানো সেরা লেখা প্রকাশ`;
        } else if (lower.includes('submission') || lower.includes('অপেক্ষমাণ')) {
          reply = `Moderation ট্যাবে গিয়ে Pending Submissions দেখে নিতে পারেন। লোড করা ডেটা অনুযায়ী অপেক্ষমাণ সাবমিশন: ${pendingSubs}টি।`;
        } else {
          reply = `প্ল্যাটফর্ম স্ট্যাটাস:\n• মোট কবিতা: ${state.poems.length}\n• অডিও গল্প: ${state.audioStories.length}\n• আবৃত্তি: ${state.recitations.length}\n• YouTube ভিডিও: ${state.youtubeVideos.length}\n\nআরও উন্নত AI উত্তরের জন্য Website Settings-এ Gemini API Key যুক্ত করুন।`;
        }
      }

      state.aiCopilotLog.push({ role: 'assistant', text: reply });
      refreshCopilotLogUI();
    }

    // =========================================================================
    // 15. ADMIN CRUD & SETTINGS HANDLERS
    // =========================================================================
    async function adminQuickMediaUpload(bucket, file) {
      if (!file) return;
      try {
        const url = await uploadToBucket(bucket, file);
        showToast('ফাইল আপলোড হয়েছে!', 'success');
        copyTextToClipboard(url);
        loadAdminTabData();
      } catch (err) {
        showToast('আপলোড ব্যর্থ: ' + err.message, 'error');
      }
    }

    function adminDeleteMedia(bucket, filename) {
      showConfirmModal('ফাইল মুছে ফেলবেন?', `"${filename}" স্থায়ীভাবে Storage থেকে মুছে ফেলা হবে।`, async () => {
        const { error } = await sb.storage.from(bucket).remove([filename]);
        if (error) return showToast('ডিলিট ব্যর্থ: ' + error.message, 'error');
        showToast('ফাইল মুছে ফেলা হয়েছে।', 'success');
        loadAdminTabData();
      });
    }

    function handleSaveSiteSettingsForm(e) {
      e.preventDefault();
      saveSiteSettings({
        siteName: document.getElementById('set-name').value.trim() || 'KothaVerse',
        tagline: document.getElementById('set-tagline').value.trim(),
        seoTitle: document.getElementById('set-seo').value.trim(),
        contactEmail: document.getElementById('set-email').value.trim(),
        youtubeUrl: document.getElementById('set-yt').value.trim(),
        facebookUrl: document.getElementById('set-fb').value.trim(),
        instagramUrl: document.getElementById('set-ig').value.trim(),
        aiApiKey: document.getElementById('set-aikey').value.trim(),
        maintenanceMode: document.getElementById('set-maint').checked,
        maintenanceMsg: document.getElementById('set-maint-msg').value.trim()
      });
      showToast('Website Settings সংরক্ষিত হয়েছে!', 'success');
    }

    function adminEditPoem(p) {
      document.getElementById('ap-id').value = p.id;
      document.getElementById('ap-title').value = p.title;
      document.getElementById('ap-poet').value = p.poet_name;
      document.getElementById('ap-cat').value = p.category_id || '';
      document.getElementById('ap-status').value = p.status || 'published';
      document.getElementById('ap-featured').checked = !!p.is_featured;
      document.getElementById('ap-seo-title').value = p.seo_title || '';
      document.getElementById('ap-seo-desc').value = p.seo_description || '';
      document.getElementById('ap-body').value = p.body || '';
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    async function adminSavePoem(e) {
  e.preventDefault();
  try {
    const id = document.getElementById('ap-id').value;
    const title = document.getElementById('ap-title').value.trim();
    const coverFile = document.getElementById('ap-cover-file').files[0];
    const audioFile = document.getElementById('ap-audio-file').files[0];

    const payload = {
      title,
      poet_name: document.getElementById('ap-poet').value.trim(),
      category_id: document.getElementById('ap-cat').value || null,
      status: document.getElementById('ap-status').value,
      publish_at: document.getElementById('ap-publish-at').value ? new Date(document.getElementById('ap-publish-at').value).toISOString() : null,
      is_featured: document.getElementById('ap-featured').checked,
      seo_title: document.getElementById('ap-seo-title').value.trim() || null,
      seo_description: document.getElementById('ap-seo-desc').value.trim() || null,
      body: document.getElementById('ap-body').value.trim(),
      created_by: state.user.id
    };
    if (coverFile) payload.cover_image_url = await uploadToBucket('covers', coverFile);
    if (audioFile) payload.audio_url = await uploadToBucket('audio', audioFile);

    let res;
    if (id) {
      res = await sb.from('poems').update(payload).eq('id', id);
    } else {
      payload.slug = slugify(title);
      res = await sb.from('poems').insert(payload);
    }

    if (res.error) throw res.error;

    if (!id && payload.status === 'published') {
      await sendPostNotification('নতুন কবিতা প্রকাশিত!', `"${title}" — ${payload.poet_name}`, 'poetry');
    }

    showToast('কবিতা সংরক্ষিত হয়েছে!', 'success');
    await loadAllPublicContent();
    loadAdminTabData();
  } catch (err) {
    showToast('ত্রুটি: ' + err.message, 'error');
  }
}

async function adminSaveStory(e) {
  e.preventDefault();
  try {
    const title = document.getElementById('as-title').value.trim();
    const coverUrl = await uploadToBucket('covers', document.getElementById('as-cover-file').files[0]);
    const audioUrl = await uploadToBucket('audio', document.getElementById('as-audio-file').files[0]);
    const { error } = await sb.from('audio_stories').insert({
      title, slug: slugify(title),
      author_name: document.getElementById('as-author').value.trim(),
      narrator_name: document.getElementById('as-narrator').value.trim(),
      duration_sec: parseInt(document.getElementById('as-duration').value, 10) || 0,
      description: document.getElementById('as-desc').value.trim(),
      cover_image_url: coverUrl, audio_url: audioUrl, status: 'published', created_by: state.user.id
    });
    if (error) throw error;

    await sendPostNotification('নতুন অডিও গল্প!', `"${title}" এখন শুনুন KothaVerse-এ।`, 'audio-stories');

    showToast('অডিও গল্প যুক্ত হয়েছে!', 'success');
    await loadAllPublicContent();
    loadAdminTabData();
  } catch (err) {
    showToast('ত্রুটি: ' + err.message, 'error');
  }
}

    async function adminSaveRecitation(e) {
      e.preventDefault();
      try {
        const title = document.getElementById('ar-title').value.trim();
        const coverUrl = await uploadToBucket('covers', document.getElementById('ar-cover-file').files[0]);
        const audioUrl = await uploadToBucket('audio', document.getElementById('ar-audio-file').files[0]);
        const { error } = await sb.from('recitations').insert({
          title, slug: slugify(title),
          poet_name: document.getElementById('ar-poet').value.trim(),
          reciter_name: document.getElementById('ar-reciter').value.trim(),
          duration_sec: parseInt(document.getElementById('ar-duration').value, 10) || 0,
          transcript: document.getElementById('ar-transcript').value.trim(),
          cover_image_url: coverUrl, audio_url: audioUrl, status: 'published', created_by: state.user.id
        });
        if (error) throw error;
        showToast('আবৃত্তি যুক্ত হয়েছে!', 'success');
        await loadAllPublicContent();
        loadAdminTabData();
      } catch (err) { showToast('ত্রুটি: ' + err.message, 'error'); }
    }

    async function adminSaveYouTube(e) {
      e.preventDefault();
      const { error } = await sb.from('youtube_videos').insert({
        title: document.getElementById('ay-title').value.trim(),
        youtube_video_id: extractYouTubeId(document.getElementById('ay-vid').value),
        playlist_type: document.getElementById('ay-type').value,
        is_featured: document.getElementById('ay-featured').checked,
        description: document.getElementById('ay-desc').value.trim(),
        status: 'published'
      });
      if (error) return showToast('ত্রুটি: ' + error.message, 'error');
      showToast('ভিডিও যুক্ত হয়েছে!', 'success');
      await loadAllPublicContent();
      loadAdminTabData();
    }

    async function adminSaveCategory(e) {
      e.preventDefault();
      const { error } = await sb.from('categories').insert({
        name: document.getElementById('ac-name').value.trim(),
        slug: document.getElementById('ac-slug').value.trim()
      });
      if (error) return showToast('ত্রুটি: ' + error.message, 'error');
      showToast('ক্যাটাগরি তৈরি হয়েছে!', 'success');
      await loadAllPublicContent();
      loadAdminTabData();
    }

    async function adminSaveQuote(e) {
      e.preventDefault();
      const { error } = await sb.from('daily_quotes').insert({
        quote_text: document.getElementById('aq-text').value.trim(),
        author_name: document.getElementById('aq-author').value.trim(),
        scheduled_date: document.getElementById('aq-date').value,
        status: 'published'
      });
      if (error) return showToast('ত্রুটি: ' + error.message, 'error');
      showToast('Daily Quote সংরক্ষিত হয়েছে!', 'success');
      await loadAllPublicContent();
      loadAdminTabData();
    }

    async function adminReviewSubmission(id, status) {
      const { data: sub, error: fetchErr } = await sb.from('user_submissions').select('*').eq('id', id).single();
      if (fetchErr) return showToast(fetchErr.message, 'error');

      const { error } = await sb.from('user_submissions').update({ status, reviewed_by: state.user.id }).eq('id', id);
      if (error) return showToast(error.message, 'error');

      if (status === 'approved' && sub) {
        const poemSlug = slugify(sub.title);
        const { error: pubErr } = await sb.from('poems').insert({
          title: sub.title,
          slug: poemSlug,
          poet_name: sub.pen_name,
          body: sub.body,
          category_id: sub.category_id,
          status: 'published',
          created_by: sub.user_id || state.user.id
        });
        if (pubErr) return showToast('কবিতা প্রকাশে ত্রুটি: ' + pubErr.message, 'error');
        if (sub.whatsapp_number) {
          sendWhatsAppPublishMsg(sub.whatsapp_number, sub.pen_name, sub.title, poemSlug);
        }
      }
      showToast(status === 'approved' ? 'কবিতা অনুমোদিত ও প্রকাশিত হয়েছে!' : 'সাবমিশন বাতিল করা হয়েছে।', 'success');
      await loadAllPublicContent();
      loadAdminTabData();
    }

    function adminSendPublishWA(subId) {
      const sub = state.adminSubmissions.find((s) => s.id === subId);
      if (!sub) return;
      sendWhatsAppPublishMsg(sub.whatsapp_number, sub.pen_name, sub.title, slugify(sub.title));
    }
    // =========================================================================
// PLAGIARISM CHECKER + REJECT WITH REASON + WHATSAPP (wa.me)
// =========================================================================
function getTextShingles(text, size = 4) {
  const words = String(text || '')
    .toLowerCase()
    .replace(/[^\u0980-\u09FFa-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  const set = new Set();
  if (words.length < size) {
    if (words.length) set.add(words.join(' '));
    return set;
  }
  for (let i = 0; i <= words.length - size; i++) {
    set.add(words.slice(i, i + size).join(' '));
  }
  return set;
}

function calcSimilarityPercent(textA, textB) {
  const a = getTextShingles(textA);
  const b = getTextShingles(textB);
  if (!a.size || !b.size) return 0;
  let overlap = 0;
  a.forEach((s) => { if (b.has(s)) overlap++; });
  return Math.round((overlap / Math.min(a.size, b.size)) * 100);
}

function buildGooglePlagLinks(body) {
  const lines = String(body || '')
    .split(/\n+/)
    .map((l) => l.trim())
    .filter((l) => l.length >= 16)
    .sort((a, b) => b.length - a.length)
    .slice(0, 2);

  if (!lines.length) return '';
  return lines.map((line, i) => {
    const q = encodeURIComponent(`"${line.slice(0, 85)}"`);
    return `<a href="https://www.google.com/search?q=${q}" target="_blank" rel="noopener" class="px-2 py-0.5 rounded bg-midnight border border-antiqueGold/30 text-antiqueGold hover:bg-antiqueGold hover:text-midnight transition">Google লাইন যাচাই #${i + 1} ↗</a>`;
  }).join('');
}

// =========================================================================
// PLAGIARISM + QUALITY CHECKER + REJECT WITH WHATSAPP (wa.me)
// =========================================================================
function getTextShingles(text, size = 4) {
  const words = String(text || '')
    .toLowerCase()
    .replace(/[^\u0980-\u09FFa-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  const set = new Set();
  if (words.length < size) {
    if (words.length) set.add(words.join(' '));
    return set;
  }
  for (let i = 0; i <= words.length - size; i++) {
    set.add(words.slice(i, i + size).join(' '));
  }
  return set;
}

function calcSimilarityPercent(textA, textB) {
  const a = getTextShingles(textA);
  const b = getTextShingles(textB);
  if (!a.size || !b.size) return 0;
  let overlap = 0;
  a.forEach((s) => { if (b.has(s)) overlap++; });
  return Math.round((overlap / Math.min(a.size, b.size)) * 100);
}

// Local baseline Quality Scorer (0-100) when Gemini API is unavailable
function calcLocalQualityScore(title, body) {
  const cleanBody = String(body || '').trim();
  const words = cleanBody.split(/\s+/).filter(Boolean);
  const lines = cleanBody.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  const uniqueWords = new Set(words.map((w) => w.toLowerCase()));

  let score = 0;
  const notes = [];

  // 1. Length check
  if (words.length >= 35) {
    score += 55;
  } else if (words.length >= 20) {
    score += 45;
  } else if (words.length >= 12) {
    score += 30;
    notes.push('লেখাটি কিছুটা ছোট');
  } else {
    score += 15;
    notes.push('লেখাটি খুবই সংক্ষিপ্ত');
  }

  // 2. Structure / Stanza lines
  if (lines.length >= 4) {
    score += 20;
  } else if (lines.length >= 2) {
    score += 10;
  } else {
    notes.push('লাইন বা স্তবকের গঠন নেই');
  }

  // 3. Vocabulary richness (detect repetitive spam)
  const diversity = words.length ? uniqueWords.size / words.length : 0;
  if (diversity >= 0.65) {
    score += 20;
  } else if (diversity >= 0.45) {
    score += 10;
  } else {
    score -= 15;
    notes.push('একই শব্দের অতিরিক্ত পুনরাবৃত্তি');
  }

  // 4. Title check
  if (String(title || '').trim().length >= 3) score += 5;

  // 5. Spam / Link / Junk penalty
  if (/(https?:\/\/|www\.|bit\.ly)/i.test(cleanBody)) {
    score -= 40;
    notes.push('সন্দেহজনক লিংক রয়েছে');
  }
  if (/(.)\1{5,}/.test(cleanBody)) {
    score -= 25;
    notes.push('অস্বাভাবিক অক্ষরের পুনরাবৃত্তি');
  }

  const finalScore = Math.max(0, Math.min(100, score));
  return {
    score: finalScore,
    note: notes.length ? notes.join(', ') : 'গঠন ও শব্দচয়ন প্রাথমিকভাবে গ্রহণযোগ্য'
  };
}

function buildGooglePlagLinks(body) {
  const lines = String(body || '')
    .split(/\n+/)
    .map((l) => l.trim())
    .filter((l) => l.length >= 16)
    .sort((a, b) => b.length - a.length)
    .slice(0, 2);

  if (!lines.length) return '';
  return lines.map((line, i) => {
    const q = encodeURIComponent(`"${line.slice(0, 85)}"`);
    return `<a href="https://www.google.com/search?q=${q}" target="_blank" rel="noopener" class="px-2 py-0.5 rounded bg-midnight border border-antiqueGold/30 text-antiqueGold hover:bg-antiqueGold hover:text-midnight transition">Google লাইন যাচাই #${i + 1} ↗</a>`;
  }).join('');
}

async function adminCheckSubmission(subId) {
  const s = (state.adminSubmissions || []).find((x) => x.id === subId);
  if (!s) return;

  const btn = document.getElementById(`check-btn-${subId}`);
  if (btn) {
    btn.disabled = true;
    btn.textContent = 'যাচাই চলছে...';
  }

  try {
    // 1. Internal Database Similarity Check
    let topMatch = { score: 0, title: '', type: '' };
    (state.poems || []).forEach((p) => {
      const sc = calcSimilarityPercent(s.body, p.content || p.body || '');
      if (sc > topMatch.score) topMatch = { score: sc, title: p.title, type: 'প্রকাশিত কবিতা' };
    });
    (state.adminSubmissions || []).forEach((other) => {
      if (other.id === s.id) return;
      const sc = calcSimilarityPercent(s.body, other.body || '');
      if (sc > topMatch.score) topMatch = { score: sc, title: other.title, type: 'অন্য সাবমিশন' };
    });

    const localQual = calcLocalQualityScore(s.title, s.body);

    let reportLines = [
      topMatch.score > 0
        ? `• সাইট ডাটাবেজ মিল: ${topMatch.score}% (${topMatch.type}: "${topMatch.title}")`
        : '• সাইট ডাটাবেজ মিল: 0% (আগে প্রকাশিত কোনো লেখার সাথে মিল নেই)'
    ];

    let aiPlagScore = 0;
    let finalQualityScore = localQual.score;

    // 2. Gemini AI Plagiarism + Literary Quality Check
    if (typeof callOptionalGemini === 'function') {
      const prompt = `You are the chief Bengali literary editor for KothaVerse. Evaluate this Bengali poem/writing strictly on TWO criteria:
1) Plagiarism Risk (0 to 100): Is it copied from Rabindranath, Nazrul, Jibanananda, Sukanta, Joy Goswami, Srijato, Sunil Gangopadhyay, Shankha Ghosh, or famous viral internet quotes? (0 = completely original, 100 = copied)
2) Literary Quality (0 to 100): Judge spelling accuracy (বানান), rhythm/flow (ছন্দ ও ভাব), emotional depth, completeness, and publishable standard. (Below 60 = not publishable, 60-79 = good, 80+ = excellent)

Respond STRICTLY in this exact format:
PLAGIARISM_SCORE: <number 0-100>
QUALITY_SCORE: <number 0-100>
REVIEW: <2 short Bengali sentences mentioning plagiarism risk, spelling/quality flaws or strengths>

Title: ${s.title}
Text:
${s.body}`;

      const aiReply = await callOptionalGemini(prompt);
      if (aiReply) {
        const pMatch = aiReply.match(/PLAGIARISM_SCORE\s*:\s*(\d{1,3})/i);
        const qMatch = aiReply.match(/QUALITY_SCORE\s*:\s*(\d{1,3})/i);
        const rMatch = aiReply.match(/REVIEW\s*:\s*([\s\S]+)/i);

        if (pMatch) aiPlagScore = Math.min(100, Math.max(0, parseInt(pMatch[1], 10)));
        if (qMatch) finalQualityScore = Math.min(100, Math.max(0, parseInt(qMatch[1], 10)));

        const reviewText = rMatch
          ? rMatch[1].trim()
          : aiReply.replace(/PLAGIARISM_SCORE\s*:\s*\d+/i, '').replace(/QUALITY_SCORE\s*:\s*\d+/i, '').trim();

        reportLines.push(`• AI মূল্যায়ন: ${reviewText || 'সম্পন্ন'}`);
      } else {
        reportLines.push(`• প্রাথমিক কোয়ালিটি চেক (${localQual.score}/100): ${localQual.note} (AI বিস্তারিত যাচাইয়ের জন্য Gemini API Key সেট করুন)`);
      }
    } else {
      reportLines.push(`• প্রাথমিক কোয়ালিটি চেক (${localQual.score}/100): ${localQual.note}`);
    }

    const finalPlagScore = Math.max(topMatch.score, aiPlagScore);
    const reportText = reportLines.join('\n');

    // 3. Save both scores to Supabase
    const { error } = await sb
      .from('user_submissions')
      .update({
        plagiarism_score: finalPlagScore,
        quality_score: finalQualityScore,
        plagiarism_report: reportText
      })
      .eq('id', subId);

    if (error) throw error;

    const passed = finalPlagScore < 30 && finalQualityScore >= 60;
    showToast(
      passed
        ? `যাচাই পাস! Plagiarism: ${finalPlagScore}% | Quality: ${finalQualityScore}/100 — অনুমোদন আনলক হয়েছে।`
        : `যাচাই ফেল! Plagiarism: ${finalPlagScore}% | Quality: ${finalQualityScore}/100 — প্রকাশ ব্লক করা হয়েছে।`,
      passed ? 'success' : 'error'
    );

    loadAdminTabData();
  } catch (err) {
    showToast('যাচাই ব্যর্থ: ' + err.message, 'error');
    if (btn) {
      btn.disabled = false;
      btn.textContent = 'আবার চেষ্টা করুন';
    }
  }
}

function toggleRejectBox(subId) {
  const el = document.getElementById(`reject-box-${subId}`);
  if (el) el.classList.toggle('hidden');
}

function formatIndianWA(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  return digits.length === 10 ? '91' + digits : digits;
}

function adminSendRejectWA(subId, overrideReason = '') {
  const s = (state.adminSubmissions || []).find((x) => x.id === subId);
  if (!s) return;

  const waNum = formatIndianWA(s.whatsapp_number);
  if (!waNum) {
    return showToast('এই লেখকের WhatsApp নম্বর দেওয়া নেই।', 'error');
  }

  const reason = overrideReason || s.rejection_reason || 'সম্পাদকীয় নীতিমালা অনুযায়ী প্রকাশ করা সম্ভব হয়নি।';
  const msg = `নমস্কার ${s.pen_name || 'লেখক'},\n\nKothaVerse-এ আপনার পাঠানো "${s.title}" লেখাটি পর্যালোচনা করা হয়েছে। দুঃখিত, এই মুহূর্তে লেখাটি প্রকাশ করা সম্ভব হলো না।\n\n*কারণ:* ${reason}\n\nআপনি লেখাটি সংশোধন করে অথবা নতুন মৌলিক লেখা আবারও KothaVerse-এ জমা দিতে পারেন।\n\nশুভেচ্ছান্তে,\nটিম KothaVerse`;

  window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

async function adminRejectSubmission(subId, sendWaNow = false) {
  const preset = document.getElementById(`rej-preset-${subId}`)?.value || '';
  const customNote = (document.getElementById(`rej-note-${subId}`)?.value || '').trim();

  let finalReason = preset === 'CUSTOM' ? customNote : preset;
  if (preset !== 'CUSTOM' && customNote) {
    finalReason = `${preset} (${customNote})`;
  }
  if (!finalReason) {
    return showToast('দয়া করে বাতিলের একটি কারণ লিখুন।', 'error');
  }

  try {
    const { error } = await sb
      .from('user_submissions')
      .update({
        status: 'rejected',
        rejection_reason: finalReason,
        reviewed_at: new Date().toISOString()
      })
      .eq('id', subId);

    if (error) throw error;

    showToast('লেখাটি কারণসহ বাতিল করা হয়েছে।', 'success');

    if (sendWaNow) {
      adminSendRejectWA(subId, finalReason);
    }

    loadAdminTabData();
  } catch (err) {
    showToast('বাতিল করতে ত্রুটি হয়েছে: ' + err.message, 'error');
  }
}

function toggleRejectBox(subId) {
  const el = document.getElementById(`reject-box-${subId}`);
  if (el) el.classList.toggle('hidden');
}

function formatIndianWA(phone) {
  const digits = String(phone || '').replace(/\D/g, '');
  if (!digits) return '';
  return digits.length === 10 ? '91' + digits : digits;
}

function adminSendRejectWA(subId, overrideReason = '') {
  const s = (state.adminSubmissions || []).find((x) => x.id === subId);
  if (!s) return;

  const waNum = formatIndianWA(s.whatsapp_number);
  if (!waNum) {
    return showToast('এই লেখকের WhatsApp নম্বর দেওয়া নেই।', 'error');
  }

  const reason = overrideReason || s.rejection_reason || 'সম্পাদকীয় নীতিমালা অনুযায়ী প্রকাশ করা সম্ভব হয়নি।';
  const msg = `নমস্কার ${s.pen_name || 'লেখক'},\n\nKothaVerse-এ আপনার পাঠানো "${s.title}" লেখাটি পর্যালোচনা করা হয়েছে। দুঃখিত, এই মুহূর্তে লেখাটি প্রকাশ করা সম্ভব হলো না।\n\n*কারণ:* ${reason}\n\nআপনি লেখাটি সংশোধন করে অথবা নতুন মৌলিক লেখা আবারও KothaVerse-এ জমা দিতে পারেন।\n\nশুভেচ্ছান্তে,\nটিম KothaVerse`;

  window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

async function adminRejectSubmission(subId, sendWaNow = false) {
  const preset = document.getElementById(`rej-preset-${subId}`)?.value || '';
  const customNote = (document.getElementById(`rej-note-${subId}`)?.value || '').trim();

  let finalReason = preset === 'CUSTOM' ? customNote : preset;
  if (preset !== 'CUSTOM' && customNote) {
    finalReason = `${preset} (${customNote})`;
  }
  if (!finalReason) {
    return showToast('দয়া করে বাতিলের একটি কারণ লিখুন।', 'error');
  }

  try {
    const { error } = await sb
      .from('user_submissions')
      .update({
        status: 'rejected',
        rejection_reason: finalReason,
        reviewed_at: new Date().toISOString()
      })
      .eq('id', subId);

    if (error) throw error;

    showToast('লেখাটি কারণসহ বাতিল করা হয়েছে।', 'success');

    if (sendWaNow) {
      adminSendRejectWA(subId, finalReason);
    }

    loadAdminTabData();
  } catch (err) {
    showToast('বাতিল করতে ত্রুটি হয়েছে: ' + err.message, 'error');
  }
}

    function handleSaveNewsletterSettings(e) {
      e.preventDefault();
      saveNewsletterSettings({
        upiId: document.getElementById('cfg-upi').value.trim(),
        fee: document.getElementById('cfg-fee').value.trim(),
        groupLink: document.getElementById('cfg-group').value.trim()
      });
      showToast('Newsletter পেমেন্ট ও গ্রুপ সেটিংস সংরক্ষিত হয়েছে!', 'success');
    }

    function adminSendPaymentWA(subId) {
      const n = state.adminSubscribers.find((x) => x.id === subId);
      if (!n) return;
      sendPaymentRequestWA(n.whatsapp_number, n.name);
    }

    async function adminApproveNewsletter(subId) {
      const n = state.adminSubscribers.find((x) => x.id === subId);
      if (!n) return;
      const txnInput = document.getElementById(`txn-${subId}`);
      const txnId = txnInput ? txnInput.value.trim() : '';
      if (!txnId) return showToast('অনুমোদনের আগে Transaction ID লিখুন!', 'error');

      const { error } = await sb.from('newsletter_subscribers').update({
        transaction_id: txnId,
        payment_status: 'approved',
        is_active: true,
        approved_at: new Date().toISOString()
      }).eq('id', subId);
      if (error) return showToast('আপডেট ব্যর্থ: ' + error.message, 'error');
      showToast('সাবস্ক্রিপশন অনুমোদিত হয়েছে! WhatsApp গ্রুপ লিংক খুলছে...', 'success');
      if (n.whatsapp_number) sendGroupLinkWA(n.whatsapp_number, n.name, txnId);
      loadAdminTabData();
    }

    async function adminRejectNewsletter(subId) {
      const { error } = await sb.from('newsletter_subscribers').update({
        payment_status: 'rejected',
        is_active: false
      }).eq('id', subId);
      if (error) return showToast('আপডেট ব্যর্থ: ' + error.message, 'error');
      showToast('সাবস্ক্রিপশন বাতিল করা হয়েছে।', 'info');
      loadAdminTabData();
    }

    function adminSendGroupLinkWA(subId) {
      const n = state.adminSubscribers.find((x) => x.id === subId);
      if (!n) return;
      sendGroupLinkWA(n.whatsapp_number, n.name, n.transaction_id);
    }

    async function adminConfirmUserEmail(userId) {
      const { error } = await sb.rpc('admin_confirm_user_email', { target_user_id: userId });
      if (error) return showToast('ইমেইল কনফার্ম ব্যর্থ: ' + error.message, 'error');
      showToast('ইমেইল সফলভাবে কনফার্ম করা হয়েছে!', 'success');
      loadAdminTabData();
    }

    function adminConfirmAllEmails() {
      showConfirmModal(
        'সব ইমেইল কনফার্ম করবেন?',
        'সমস্ত Unconfirmed অ্যাকাউন্টের ইমেইল একসাথে Confirmed হিসেবে মার্ক করা হবে।',
        async () => {
          const { error } = await sb.rpc('admin_confirm_all_emails');
          if (error) return showToast('কনফার্ম ব্যর্থ: ' + error.message, 'error');
          showToast('সব অ্যাকাউন্টের ইমেইল সফলভাবে কনফার্ম হয়েছে!', 'success');
          loadAdminTabData();
        }
      );
    }

    async function adminUpdateUserRole(userId, newRole) {
      const { error } = await sb.from('profiles').update({ role: newRole }).eq('id', userId);
      if (error) return showToast('রোল পরিবর্তন ব্যর্থ: ' + error.message, 'error');
      showToast(`ইউজারের রোল "${newRole}" হিসেবে আপডেট হয়েছে।`, 'success');
      loadAdminTabData();
    }

    function copyAdminMigrationSQL() {
      const sql = `-- 1. Add WhatsApp & Payment columns
ALTER TABLE public.user_submissions ADD COLUMN IF NOT EXISTS whatsapp_number TEXT;
ALTER TABLE public.newsletter_subscribers
  ADD COLUMN IF NOT EXISTS whatsapp_number TEXT,
  ADD COLUMN IF NOT EXISTS payment_status TEXT NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS transaction_id TEXT,
  ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ;
ALTER TABLE public.newsletter_subscribers ALTER COLUMN is_active SET DEFAULT FALSE;

-- 2. Admin RPC: Fetch all users with email confirmation status
CREATE OR REPLACE FUNCTION public.get_admin_users()
RETURNS TABLE (id UUID, email TEXT, full_name TEXT, role user_role, email_confirmed_at TIMESTAMPTZ, created_at TIMESTAMPTZ)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, auth AS $$
BEGIN
  IF NOT public.is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  RETURN QUERY
  SELECT u.id, u.email::TEXT, COALESCE(p.full_name, ''), COALESCE(p.role, 'user'::user_role), u.email_confirmed_at, u.created_at
  FROM auth.users u LEFT JOIN public.profiles p ON p.id = u.id
  ORDER BY u.created_at DESC;
END;
$$;

-- 3. Admin RPC: Confirm single user email
CREATE OR REPLACE FUNCTION public.admin_confirm_user_email(target_user_id UUID)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, auth AS $$
BEGIN
  IF NOT public.is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  UPDATE auth.users SET email_confirmed_at = COALESCE(email_confirmed_at, NOW()) WHERE id = target_user_id;
END;
$$;

-- 4. Admin RPC: Confirm all unconfirmed user emails
CREATE OR REPLACE FUNCTION public.admin_confirm_all_emails()
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER SET search_path = public, auth AS $$
BEGIN
  IF NOT public.is_admin() THEN RAISE EXCEPTION 'Unauthorized'; END IF;
  UPDATE auth.users SET email_confirmed_at = NOW() WHERE email_confirmed_at IS NULL;
END;
$$;`;
      copyTextToClipboard(sql);
    }

    async function adminResolveReport(id) {
      const { error } = await sb.from('content_reports').update({ status: 'resolved', reviewed_by: state.user.id }).eq('id', id);
      if (error) return showToast(error.message, 'error');
      showToast('রিপোর্ট সমাধান করা হয়েছে।', 'success');
      loadAdminTabData();
    }

    function adminDeleteRow(table, id) {
      showConfirmModal('মুছে ফেলতে চান?', 'এই আইটেমটি স্থায়ীভাবে মুছে ফেলা হবে।', async () => {
        const { error } = await sb.from(table).delete().eq('id', id);
        if (error) return showToast('ডিলিট ব্যর্থ: ' + error.message, 'error');
        showToast('সফলভাবে মুছে ফেলা হয়েছে।', 'success');
        await loadAllPublicContent();
        loadAdminTabData();
      });
    }

    // =========================================================================
    // 16. KEYBOARD SHORTCUTS & APPLICATION BOOTSTRAP
    // =========================================================================
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openGlobalSearch();
      } else if (e.key === 'Escape') {
        ['search-modal', 'ambient-modal', 'queue-modal', 'fullscreen-player-modal', 'poem-modal', 'quote-modal', 'auth-modal', 'profile-modal', 'report-modal', 'confirm-modal']
          .forEach((id) => closeModal(id));
        readingMode.close();
      }
    });
    // =========================================================================
// LIVE VIEW COUNT, POET PROFILE & FOLLOW, NOTIFICATION ENGINE
// =========================================================================

// 1. Live View Count (called inside openPoemModal)
async function trackPoemView(poem) {
  if (!poem || !isUUID(poem.id)) return;
  const key = `kv_viewed_${poem.id}`;
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, '1');
  try {
    const { data: newCount } = await sb.rpc('increment_poem_views', { p_id: poem.id });
    if (typeof newCount === 'number') {
      poem.views_count = newCount;
      const el = document.getElementById(`poem-views-${poem.id}`);
      if (el) el.textContent = `${newCount} পাঠ`;
    }
  } catch (e) { /* Silent */ }
}

// 2. Poet / Reciter Profile & Follow System
async function openPoetProfile(name) {
  const cleanName = String(name || '').replace(/^(কণ্ঠ:|আবৃত্তি:)\s*/i, '').trim();
  if (!cleanName) return;

  const poems = state.poems.filter((p) => (p.poet_name || '').includes(cleanName));
  const stories = state.audioStories.filter((s) => (s.author_name || '').includes(cleanName) || (s.narrator_name || '').includes(cleanName));
  const recs = state.recitations.filter((r) => (r.poet_name || '').includes(cleanName) || (r.reciter_name || '').includes(cleanName));

  const { count: followerCount } = await sb.from('poet_follows').select('*', { count: 'exact', head: true }).eq('poet_name', cleanName);
  let isFollowing = false;
  if (state.user) {
    const { data: myFollow } = await sb.from('poet_follows').select('id').eq('user_id', state.user.id).eq('poet_name', cleanName).maybeSingle();
    isFollowing = !!myFollow;
  }

  document.getElementById('poet-profile-body').innerHTML = `
    <button onclick="closeModal('poet-profile-modal')" class="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-deepPurple/60"><i data-lucide="x" class="w-5 h-5"></i></button>
    <div class="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-antiqueGold/20 font-bengali">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-2xl bg-antiqueGold/20 border border-antiqueGold/40 flex items-center justify-center text-2xl font-bold text-antiqueGold">
          ${escapeHtml(cleanName[0])}
        </div>
        <div>
          <h2 class="text-2xl font-bold text-ivory">${escapeHtml(cleanName)}</h2>
          <p class="text-xs text-ivory/65 mt-0.5">অনুসারী (Followers): <strong class="text-antiqueGold">${followerCount || 0}</strong> • মোট প্রকাশনা: ${poems.length + stories.length + recs.length}</p>
        </div>
      </div>
      <button onclick="toggleFollowPoet('${escapeHtml(cleanName)}', ${isFollowing})" class="px-5 py-2.5 rounded-xl font-semibold text-xs transition flex items-center gap-1.5 ${isFollowing ? 'bg-deepPurple border border-antiqueGold/40 text-antiqueGold' : 'bg-antiqueGold text-midnight shadow-gold'}">
        <i data-lucide="${isFollowing ? 'user-check' : 'user-plus'}" class="w-4 h-4"></i>
        ${isFollowing ? 'Following' : 'Follow করুন'}
      </button>
    </div>

    <div class="mt-5 space-y-4 max-h-[55vh] overflow-y-auto font-bengali">
      ${poems.length ? `
        <div>
          <h4 class="text-xs text-antiqueGold font-semibold mb-2">কবিতা (${poems.length})</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${poems.map((p) => `<button onclick="closeModal('poet-profile-modal'); openPoemModal('${p.id}')" class="text-left p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 hover:border-antiqueGold"><div class="font-semibold text-sm">${escapeHtml(p.title)}</div><div class="text-[11px] text-ivory/55">${p.views_count || 0} পাঠ</div></button>`).join('')}
          </div>
        </div>
      ` : ''}
      ${stories.length ? `
        <div>
          <h4 class="text-xs text-antiqueGold font-semibold mb-2">অডিও গল্প (${stories.length})</h4>
          <div class="space-y-2">
            ${stories.map((s) => `<button onclick="closeModal('poet-profile-modal'); playStory('${s.id}')" class="w-full text-left p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 hover:border-antiqueGold flex justify-between items-center"><span class="text-sm font-semibold">${escapeHtml(s.title)}</span><span class="text-xs text-antiqueGold">▶ শুনুন</span></button>`).join('')}
          </div>
        </div>
      ` : ''}
      ${recs.length ? `
        <div>
          <h4 class="text-xs text-antiqueGold font-semibold mb-2">আবৃত্তি (${recs.length})</h4>
          <div class="space-y-2">
            ${recs.map((r) => `<button onclick="closeModal('poet-profile-modal'); playRecitation('${r.id}')" class="w-full text-left p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 hover:border-antiqueGold flex justify-between items-center"><span class="text-sm font-semibold">${escapeHtml(r.title)}</span><span class="text-xs text-antiqueGold">▶ শুনুন</span></button>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
  openModal('poet-profile-modal');
}

async function toggleFollowPoet(poetName, currentlyFollowing) {
  if (!state.user) {
    showToast('ফলো করতে আগে লগইন করুন।', 'info');
    return openAuthModal('login');
  }
  if (currentlyFollowing) {
    await sb.from('poet_follows').delete().eq('user_id', state.user.id).eq('poet_name', poetName);
    showToast(`${poetName}-কে Unfollow করা হয়েছে।`, 'info');
  } else {
    await sb.from('poet_follows').insert({ user_id: state.user.id, poet_name: poetName });
    showToast(`আপনি এখন ${poetName}-কে Follow করছেন!`, 'success');
  }
  openPoetProfile(poetName);
}

// 3. Notification System (In-App + Browser/PWA Alert)
let appNotifications = [];

async function initNotifications() {
  const { data } = await sb.from('notifications').select('*').order('created_at', { ascending: false }).limit(15);
  appNotifications = data || [];
  updateNotifBadge();

  // Real-time listener: new post publish holei instant alert
  sb.channel('kv-notifications')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications' }, (payload) => {
      const n = payload.new;
      appNotifications.unshift(n);
      updateNotifBadge();
      showToast(`🔔 ${n.title}: ${n.message}`, 'info');

      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(n.title, { body: n.message, icon: '20261121_192551.png' });
      }
    })
    .subscribe();
}

function updateNotifBadge() {
  const lastSeen = localStorage.getItem('kv_notif_seen_at') || '1970-01-01';
  const unread = appNotifications.filter((n) => n.created_at > lastSeen).length;
  const badge = document.getElementById('notif-badge');
  if (!badge) return;
  if (unread > 0) {
    badge.textContent = unread > 9 ? '9+' : unread;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

function openNotificationsModal() {
  localStorage.setItem('kv_notif_seen_at', new Date().toISOString());
  updateNotifBadge();

  const pushBtn = document.getElementById('enable-push-btn');
  if (pushBtn && 'Notification' in window && Notification.permission === 'granted') {
    pushBtn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> অ্যালার্ট চালু আছে`;
  }

  const list = document.getElementById('notifications-list');
  list.innerHTML = appNotifications.length ? appNotifications.map((n) => `
    <button onclick="closeModal('notifications-modal'); navigate('${escapeHtml(n.route || 'home')}')" class="w-full text-left p-3.5 rounded-2xl bg-deepPurple/35 border border-antiqueGold/15 hover:border-antiqueGold transition">
      <div class="text-sm font-semibold text-antiqueGold">${escapeHtml(n.title)}</div>
      <p class="text-xs text-ivory/80 mt-0.5">${escapeHtml(n.message)}</p>
      <div class="text-[10px] text-ivory/45 mt-1">${new Date(n.created_at).toLocaleString('bn-BD')}</div>
    </button>
  `).join('') : `<p class="text-xs text-ivory/50 text-center py-6">এখনো কোনো নোটিফিকেশন নেই।</p>`;

  openModal('notifications-modal');
}

const VAPID_PUBLIC_KEY = 'BMAYAfbqf4E2QIYvk3bcnw-N79Pr82Z7HT6tFdYDc_vb9TmJL8iqVH0vvoFsPMqQru3fHHuMcMD2Y0aT_UXdFhw';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

async function requestNotificationPermission() {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    return showToast('আপনার ব্রাউজার Push Notification সাপোর্ট করে না।', 'error');
  }
  const perm = await Notification.requestPermission();
  if (perm !== 'granted') return showToast('নোটিফিকেশন অনুমতি দেওয়া হয়নি।', 'info');

  try {
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });
    }
    const json = sub.toJSON();
    const { error } = await sb.rpc('save_push_subscription', {
      p_endpoint: json.endpoint,
      p_p256dh: json.keys.p256dh,
      p_auth: json.keys.auth
    });
    if (error) throw error;

    showToast('মোবাইল পুশ নোটিফিকেশন চালু হয়েছে!', 'success');
    openNotificationsModal();
  } catch (err) {
    console.error('Push subscribe error:', err);
    showToast('সাবস্ক্রাইব ত্রুটি: ' + err.message, 'error');
  }
}

async function sendPostNotification(title, message, route) {
  // 1. In-app notification table-e save
  await sb.from('notifications').insert({ title, message, route });
  // 2. Background Mobile Push trigger (Edge Function)
  try {
    await sb.functions.invoke('send-push', {
      body: { title, message, url: './index.html' }
    });
  } catch (e) { /* Silent */ }
}
    function applyTheme(theme) {
  const html = document.documentElement;
  const isLight = theme === 'light';
  html.classList.toggle('light', isLight);
  html.classList.toggle('dark', !isLight);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', isLight ? '#FAF8FC' : '#17121F');

  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = `<i data-lucide="${isLight ? 'moon' : 'sun'}" class="w-4 h-4"></i>`;
    lucide.createIcons();
  }
}

function toggleTheme() {
  const next = document.documentElement.classList.contains('light') ? 'dark' : 'light';
  localStorage.setItem('kv_theme', next);
  applyTheme(next);
}
let isSyncingPosts = false;
let lastPublicSnapshot = '';

function getPublicDataSnapshot() {
  return JSON.stringify({
    poems: (state.poems || []).map(x => [x.id, x.title, x.updated_at, x.views_count]),
    audioStories: (state.audioStories || []).map(x => [x.id, x.title, x.updated_at, x.duration_sec]),
    recitations: (state.recitations || []).map(x => [x.id, x.title, x.updated_at, x.duration_sec]),
    youtubeVideos: (state.youtubeVideos || []).map(x => [x.id, x.title, x.published_at]),
    communityPosts: (state.communityPosts || []).map(x => [x.id, x.title, x.body, x.created_at]),
    categories: (state.categories || []).map(x => [x.id, x.name, x.sort_order]),
    dailyQuoteId: state.dailyQuote?.id
  });
}

function hasUnsavedFormOrAdminDraft() {
  if (state.route === 'admin') return true;

  const activeTag = document.activeElement?.tagName;
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return true;

  return Array.from(document.querySelectorAll('#app-root input, #app-root textarea'))
    .some(el => el.type !== 'hidden' && el.type !== 'password' && el.value && el.value.trim().length > 0);
}

function isYouTubeRouteOrPlaying() {
  if (state.route === 'youtube') return true;
  const iframes = Array.from(document.querySelectorAll('#app-root iframe'));
  return iframes.some(f => {
    const src = f.getAttribute('src') || '';
    return src.includes('youtube.com') || src.includes('youtu.be');
  });
}

async function syncPostsFreshly({ forceRender = false } = {}) {
  if (isSyncingPosts) return;
  isSyncingPosts = true;

  try {
    if (!lastPublicSnapshot) {
      lastPublicSnapshot = getPublicDataSnapshot();
    }

    if (typeof loadAllPublicContent === 'function') {
      await loadAllPublicContent();
    }

    const nextSnapshot = getPublicDataSnapshot();
    const hasDataChanged = nextSnapshot !== lastPublicSnapshot;
    lastPublicSnapshot = nextSnapshot;

    if (state.route === 'admin') return;

    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
    if ((forceRender || hasDataChanged) && !isYouTubeRouteOrPlaying() && !isTyping) {
      renderCurrentRoute();
    }
  } catch (err) {
    console.error('Post sync error:', err);
  } finally {
    isSyncingPosts = false;
  }
}

window.refreshKothaVerseData = (opts) => syncPostsFreshly({ forceRender: true, ...opts });

setInterval(() => {
  if (!document.hidden && !hasUnsavedFormOrAdminDraft()) {
    syncPostsFreshly({ forceRender: false });
  }
}, 5000);

document.addEventListener('visibilitychange', () => {
  if (!document.hidden && !hasUnsavedFormOrAdminDraft()) {
    syncPostsFreshly({ forceRender: false });
  }
});

document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    syncPostsFreshly({ forceRender: false });
  }
});
// =========================================================================
// 17. DIGITAL CHITHI & PUBLISHED POET DIGITAL CARD (WITH QR CODE)
// =========================================================================
function openChithiCreator(poemId) {
  const p = state.poems.find((x) => x.id === poemId);
  if (!p) return;
  document.getElementById('chithi-poem-id').value = p.id;
  document.getElementById('chithi-sender').value = state.profile?.full_name || '';
  document.getElementById('chithi-receiver').value = '';
  document.getElementById('chithi-note').value = '';
  document.getElementById('chithi-share-box').classList.add('hidden');
  openModal('chithi-create-modal');
}

async function handleCreateChithi(e) {
  e.preventDefault();
  const poemId = document.getElementById('chithi-poem-id').value;
  const p = state.poems.find((x) => x.id === poemId);
  if (!p) return;

  const shortCode = 'kv' + Math.random().toString(36).slice(2, 8);
  const payload = {
    short_code: shortCode,
    sender_name: document.getElementById('chithi-sender').value.trim(),
    receiver_name: document.getElementById('chithi-receiver').value.trim(),
    personal_note: document.getElementById('chithi-note').value.trim() || null,
    poem_title: p.title,
    poet_name: p.poet_name,
    poem_body: p.body,
    audio_url: p.audio_url || null
  };

  const { error } = await sb.from('digital_chithis').insert(payload);
  if (error) return showToast('চিঠি তৈরি ব্যর্থ: ' + error.message, 'error');

  const shareUrl = `${window.location.origin}${window.location.pathname}#chithi/${shortCode}`;
  document.getElementById('chithi-link-output').value = shareUrl;
  document.getElementById('chithi-share-box').classList.remove('hidden');
  showToast('ডিজিটাল চিঠির লিংক তৈরি হয়েছে!', 'success');
}

function shareChithiOnWA() {
  const url = document.getElementById('chithi-link-output').value;
  const receiver = document.getElementById('chithi-receiver').value.trim();
  const msg = `প্রিয় ${receiver},\nতোমার জন্য KothaVerse থেকে একটি বিশেষ কবিতার চিঠি পাঠিয়েছি। খুলে দেখো:\n${url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

async function openChithiByCode(shortCode) {
  const { data, error } = await sb.from('digital_chithis').select('*').eq('short_code', shortCode).maybeSingle();
  if (error || !data) {
    showToast('এই চিঠিটি খুঁজে পাওয়া যায়নি।', 'error');
    return;
  }

  window._activeChithi = data;
  const box = document.getElementById('chithi-view-body');
  box.innerHTML = `
    <div id="chithi-stage-closed" class="flex flex-col items-center text-center space-y-6 font-bengali py-8 fade-in">
      <span class="px-4 py-1 rounded-full bg-antiqueGold/15 border border-antiqueGold/35 text-xs text-antiqueGold">KothaVerse ডিজিটাল চিঠি</span>
      <h2 class="text-2xl sm:text-3xl font-bold text-ivory">প্রিয় ${escapeHtml(data.receiver_name)},<br/>তোমার জন্য একটি চিঠি এসেছে</h2>
      <div id="chithi-env-el" onclick="revealChithiLetter()" class="chithi-envelope mt-2">
        <div class="chithi-flap"></div>
        <div class="chithi-seal">✉</div>
        <div class="absolute bottom-5 inset-x-0 text-center text-xs text-ivory/70">খোলার জন্য এখানে ক্লিক করুন</div>
      </div>
      <p class="text-xs text-ivory/55">প্রেরক: ${escapeHtml(data.sender_name)}</p>
    </div>

    <div id="chithi-stage-open" class="hidden glass-panel rounded-3xl p-6 sm:p-9 border border-antiqueGold/40 font-bengali space-y-5 fade-in relative">
      <button onclick="closeChithiViewer()" class="absolute top-4 right-4 p-2 rounded-full bg-midnight/70 text-ivory/80 hover:text-antiqueGold"><i data-lucide="x" class="w-4 h-4"></i></button>
      <div class="text-center border-b border-antiqueGold/20 pb-4">
        <div class="text-xs text-antiqueGold tracking-widest uppercase font-display">A Poem Dedicated To You</div>
        <h2 class="text-2xl sm:text-3xl font-bold text-ivory mt-1">প্রিয় ${escapeHtml(data.receiver_name)},</h2>
        ${data.personal_note ? `<p class="text-sm text-ivory/80 italic mt-2 bg-deepPurple/40 p-3 rounded-xl border border-antiqueGold/15">“${escapeHtml(data.personal_note)}”</p>` : ''}
      </div>

      <div class="space-y-2">
        <h3 class="text-xl font-bold text-antiqueGold">${escapeHtml(data.poem_title)}</h3>
        <p class="text-xs text-ivory/60">— ${escapeHtml(data.poet_name || 'KothaVerse')}</p>
        <div class="text-sm sm:text-base leading-loose whitespace-pre-line text-ivory/95 pt-2 max-h-72 overflow-y-auto pr-1">${escapeHtml(data.poem_body)}</div>
      </div>

      <div class="pt-4 border-t border-antiqueGold/20 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="text-xs text-ivory/70">ভালোবাসা ও শুভেচ্ছাসহ — <strong class="text-antiqueGold">${escapeHtml(data.sender_name)}</strong></div>
        <button onclick="closeChithiViewer(); navigate('poetry')" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs shadow-gold">
          তুমিও একটা চিঠি পাঠাও — KothaVerse-এ
        </button>
      </div>
    </div>
  `;
  openModal('chithi-view-modal');
}

function revealChithiLetter() {
  const env = document.getElementById('chithi-env-el');
  if (env) env.classList.add('opened');

  const c = window._activeChithi;
  if (c?.audio_url && typeof audioEngine !== 'undefined') {
    audioEngine.loadAndPlay({
      id: c.id, type: 'poem', title: c.poem_title,
      subtitle: `উৎসর্গ: ${c.sender_name} → ${c.receiver_name}`,
      cover: '', url: c.audio_url, duration: 150
    });
  } else if (typeof ambientEngine !== 'undefined' && !ambientEngine.active) {
    ambientEngine.toggle('night');
  }

  setTimeout(() => {
    document.getElementById('chithi-stage-closed')?.classList.add('hidden');
    document.getElementById('chithi-stage-open')?.classList.remove('hidden');
    lucide.createIcons();
  }, 650);
}

function closeChithiViewer() {
  closeModal('chithi-view-modal');
  if (window.location.hash.startsWith('#chithi/')) {
    navigate('home', { replace: true });
  }
}

// Published Poet Digital Card (Canvas + QR Code Download)
function downloadPoetCertificateCard(poemId) {
  const p = state.poems.find((x) => x.id === poemId);
  if (!p) return;

  showToast('Published Poet কার্ড তৈরি হচ্ছে...', 'info');
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext('2d');

  // Royal Midnight + Deep Purple Background
  const grad = ctx.createLinearGradient(0, 0, 1080, 1350);
  grad.addColorStop(0, '#140F1C');
  grad.addColorStop(0.5, '#2E1E3C');
  grad.addColorStop(1, '#120D19');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1350);

  // Double Antique Gold Border
  ctx.strokeStyle = '#C5A46D';
  ctx.lineWidth = 4;
  ctx.strokeRect(48, 48, 984, 1254);
  ctx.strokeStyle = 'rgba(197, 164, 109, 0.35)';
  ctx.lineWidth = 2;
  ctx.strokeRect(66, 66, 948, 1218);

  // Header Branding
  ctx.textAlign = 'center';
  ctx.fillStyle = '#C5A46D';
  ctx.font = 'bold 46px "Playfair Display", serif';
  ctx.fillText('KOTHAVERSE', 540, 165);

  ctx.fillStyle = 'rgba(241, 233, 223, 0.7)';
  ctx.font = '24px "Noto Serif Bengali", serif';
  ctx.fillText('শব্দের পরিপাটে, মনের আলাপন', 540, 212);

  // Badge
  ctx.fillStyle = 'rgba(197, 164, 109, 0.16)';
  ctx.fillRect(310, 275, 460, 56);
  ctx.strokeStyle = '#C5A46D';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(310, 275, 460, 56);
  ctx.fillStyle = '#E6C992';
  ctx.font = 'bold 24px "Playfair Display", serif';
  ctx.fillText('★  PUBLISHED POET  ★', 540, 312);

  // Poet Name & Poem Title
  ctx.fillStyle = '#F1E9DF';
  ctx.font = 'bold 58px "Noto Serif Bengali", serif';
  ctx.fillText(p.poet_name || 'কবি', 540, 445);

  ctx.fillStyle = 'rgba(241, 233, 223, 0.65)';
  ctx.font = '26px "Noto Serif Bengali", serif';
  ctx.fillText('তাঁর প্রকাশিত রচনা', 540, 515);

  ctx.fillStyle = '#C5A46D';
  ctx.font = 'bold 46px "Noto Serif Bengali", serif';
  ctx.fillText(`“${p.title}”`, 540, 590);

  // First 3 lines preview
  ctx.fillStyle = 'rgba(241, 233, 223, 0.85)';
  ctx.font = '28px "Noto Serif Bengali", serif';
  const previewLines = String(p.body || '').split('\n').filter(Boolean).slice(0, 3);
  let y = 685;
  previewLines.forEach((ln) => {
    ctx.fillText(ln.slice(0, 46), 540, y);
    y += 50;
  });

  // QR Code pointing to KothaVerse
  const shareTarget = `${window.location.origin}${window.location.pathname}#poetry`;
  const qrImg = new Image();
  qrImg.crossOrigin = 'anonymous';
  qrImg.onload = () => {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(425, 915, 230, 230);
    ctx.drawImage(qrImg, 440, 930, 200, 200);

    ctx.fillStyle = '#C5A46D';
    ctx.font = '22px "Noto Serif Bengali", serif';
    ctx.fillText('সম্পূর্ণ কবিতা পড়তে QR কোড স্ক্যান করুন', 540, 1190);
    ctx.fillStyle = 'rgba(241, 233, 223, 0.45)';
    ctx.font = '20px sans-serif';
    ctx.fillText(window.location.host || 'kothaverse.in', 540, 1240);

    const a = document.createElement('a');
    a.download = `KothaVerse-Poet-Card-${p.slug || p.id}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
    showToast('Published Poet কার্ড ডাউনলোড হয়েছে!', 'success');
  };
  qrImg.onerror = () => {
    const a = document.createElement('a');
    a.download = `KothaVerse-Poet-Card-${p.slug || p.id}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
  };
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(shareTarget)}`;
}
function downloadPoetCardFromSubmission(subId) {
  const s = state.adminSubmissions.find((x) => x.id === subId);
  if (!s) return;
  const matchedPoem = state.poems.find((p) => p.title === s.title && p.poet_name === s.pen_name);
  if (matchedPoem) {
    downloadPoetCertificateCard(matchedPoem.id);
  } else {
    state.poems.push({ id: s.id, title: s.title, poet_name: s.pen_name, body: s.body, slug: slugify(s.title) });
    downloadPoetCertificateCard(s.id);
  }
}
// =========================================================================
// 18. E-BOOK STORE, WATERMARKED PDF ENGINE & CUSTOM VOICE DEDICATION
// =========================================================================

function renderStorePage() {
  const tab = state.storeTab || 'ebooks';
  const cfg = {
    upi_id: 'kothaverse@upi',
    upi_name: 'KothaVerse',
    qr_image_url: '',
    voice_pkg_1_name: 'Mini Voice Note (১ মিনিট)',
    voice_pkg_1_price: 99,
    voice_pkg_2_name: 'Standard Dedication (২-৩ মিনিট)',
    voice_pkg_2_price: 149,
    voice_pkg_3_name: 'Premium Cinematic Gift (কবিতা + মেসেজ)',
    voice_pkg_3_price: 249,
    ...(state.storeSettings || {})
  };

  // [CHANGE 1] Tab onujayi Physical Products ar Order Tracking alada load hobe
  if (tab === 'voice') {
    setTimeout(() => {
      if (typeof recalcVoiceOrderTotal === 'function') recalcVoiceOrderTotal();
    }, 60);
  } else if (tab === 'physical') {
    setTimeout(() => {
      if (typeof renderPhysicalStoreSection === 'function') {
        renderPhysicalStoreSection('kv-physical-store-root');
      }
    }, 50);
  } else if (tab === 'my_orders') {
    setTimeout(() => {
      if (typeof renderMyPhysicalOrdersSection === 'function') {
        renderMyPhysicalOrdersSection('kv-physical-orders-root');
      }
    }, 50);
  }

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 fade-in font-bengali">
      ${typeof renderFlashSaleBanner === 'function' ? renderFlashSaleBanner() : ''}

      <div class="mb-8">
        <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">KothaVerse Store & Gifts</span>
        <h1 class="text-3xl sm:text-4xl font-bold mt-1">ই-বুক, হার্ডকপি বই ও কাস্টম গিফট স্টোর</h1>
        <p class="text-sm text-ivory/65 mt-2">কেনার জন্য আগে লগইন করুন। ই-বুক অ্যাপ্রুভ হলেই অ্যাপের সুরক্ষিত রিডারে আপনার নামে ওয়াটারমার্কসহ পড়তে পারবেন এবং হার্ডকপি বই ও প্রোডাক্ট সরাসরি ঠিকানায় ডেলিভারি পাবেন।</p>
      </div>

      <div class="flex flex-wrap gap-3 mb-8 text-sm">
        <button onclick="state.storeTab='ebooks'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'ebooks' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">ই-বুক ও সংকলন (${state.ebooks.length})</button>
        <button onclick="state.storeTab='physical'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'physical' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">হার্ডকপি বই ও প্রোডাক্ট</button>
        <button onclick="state.storeTab='voice'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'voice' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">কাস্টম ভয়েস ডেডিকেশন</button>
        <button onclick="state.storeTab='bundles'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'bundles' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">কম্বো প্যাক (${(window.kvPhase2?.bundles || []).length})</button>
        <button onclick="state.storeTab='gift_wallet'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'gift_wallet' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">গিফট ও রেফারেল</button>
        <button onclick="state.storeTab='my_orders'; renderCurrentRoute()" class="px-5 py-2.5 rounded-xl border transition ${tab === 'my_orders' ? 'bg-antiqueGold text-midnight border-antiqueGold font-semibold' : 'glass-panel border-antiqueGold/25'}">আমার অর্ডার ও ট্র্যাকিং</button>
      </div>

      ${tab === 'ebooks' ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${state.ebooks.map((b) => {
            const myOrder = state.myEbookOrders.find((o) => o.ebook_id === b.id);
            const isApproved = myOrder?.status === 'approved';
            const isPending = myOrder?.status === 'pending';
            const hasSample = Boolean(b.sample_pdf_url || b.sample_excerpt);

            return `
              <div class="glass-panel rounded-2xl overflow-hidden border border-antiqueGold/25 flex flex-col shadow-card">
                <div class="relative h-56 overflow-hidden">
                  <img src="${safeCover(b.cover_image_url, b.title)}" class="w-full h-full object-cover" />
                  <span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-midnight/85 border border-antiqueGold/40 text-antiqueGold font-bold text-xs">₹${b.price_inr}</span>
                </div>
                <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 class="text-xl font-bold text-ivory">${escapeHtml(b.title)}</h3>
                    <p class="text-xs text-antiqueGold mt-0.5">${escapeHtml(b.editor_name || 'KothaVerse সম্পাদনা')}</p>
                    <div class="mt-2">${typeof renderProductRatingBadge === 'function' ? renderProductRatingBadge('ebook', b.id) : ''}</div>
                    <p class="text-xs text-ivory/70 mt-2 line-clamp-3 leading-relaxed">${escapeHtml(b.description || '')}</p>
                  </div>
                  <div class="space-y-2">
                    ${isApproved ? `
                      <button onclick="openWatermarkedEbook('${b.id}', 'view')" class="w-full py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs flex items-center justify-center gap-1.5 shadow-gold hover:opacity-90 transition">
                        <i data-lucide="book-open" class="w-4 h-4"></i> সুরক্ষিত অ্যাপ রিডারে পড়ুন
                      </button>
                    ` : isPending ? `
                      <div class="w-full py-2.5 px-3 rounded-xl bg-amber-500/15 border border-amber-400/35 text-amber-200 text-xs text-center">
                        অর্ডার যাচাই চলছে (Txn: ${escapeHtml(myOrder.transaction_id)})
                      </div>
                    ` : `
                      <button onclick="openEbookOrderModal('${b.id}')" class="w-full py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs shadow-gold hover:opacity-90 transition">
                        কিনুন — ₹${b.price_inr}
                      </button>
                    `}
                    ${cfg.gift_ebook_enabled !== false ? `
                      <button onclick="openGiftEbookModal('${b.id}')" class="w-full py-2 rounded-xl bg-emerald-600/20 border border-emerald-400/40 text-emerald-200 hover:bg-emerald-600 hover:text-white text-xs font-semibold transition flex items-center justify-center gap-1.5">
                        <i data-lucide="gift" class="w-3.5 h-3.5"></i> প্রিয়জনকে গিফট করুন
                      </button>
                    ` : ''}
                    ${hasSample && !isApproved ? `
                      <button onclick="openEbookSamplePreview('${b.id}')" class="w-full py-2 rounded-xl bg-deepPurple/60 border border-antiqueGold/35 text-antiqueGold hover:bg-antiqueGold hover:text-midnight text-xs font-semibold transition flex items-center justify-center gap-1.5">
                        <i data-lucide="eye" class="w-3.5 h-3.5"></i> ফ্রি স্যাম্পল প্রিভিউ পড়ুন
                      </button>
                    ` : ''}
                  </div>
                </div>
              </div>
            `;
          }).join('') || `<div class="col-span-full glass-panel rounded-2xl p-10 text-center text-ivory/60 text-sm">এখনো কোনো ই-বুক প্রকাশিত হয়নি। খুব শীঘ্রই আসছে!</div>`}
        </div>
      ` : tab === 'physical' ? `
        <div id="kv-physical-store-root"></div>
      ` : tab === 'bundles' ? `
        ${typeof renderStoreBundlesTab === 'function' ? renderStoreBundlesTab() : ''}
      ` : tab === 'gift_wallet' ? `
        ${typeof renderStoreGiftAndWalletTab === 'function' ? renderStoreGiftAndWalletTab() : ''}
      ` : tab === 'my_orders' ? `
        <!-- [CHANGE 2] Ekhane ager digital order-er nichei physical order tracking dekhabe -->
        <div class="space-y-8">
          ${typeof renderStoreMyOrdersTab === 'function' ? renderStoreMyOrdersTab() : ''}
          <div id="kv-physical-orders-root"></div>
        </div>
      ` : `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 glass-panel rounded-3xl p-6 sm:p-8 border border-antiqueGold/30">
            <h2 class="text-2xl font-bold text-antiqueGold mb-2">প্রিয়জনের নামে কাস্টম ভয়েস ডেডিকেশন</h2>
            <div class="mb-3">${typeof renderProductRatingBadge === 'function' ? renderProductRatingBadge('voice', 'voice_dedication') : ''}</div>
            <p class="text-xs text-ivory/70 mb-5">জন্মদিন, অ্যানিভার্সারি বা বিশেষ দিনে আমাদের কণ্ঠশিল্পীদের কণ্ঠে প্রিয়জনের নাম নিয়ে আবৃত্তি ও ব্যাকগ্রাউন্ড মিউজিকসহ স্পেশাল অডিও গিফট।</p>

            ${typeof renderVoiceDemoCard === 'function' ? renderVoiceDemoCard() : ''}

            <form onsubmit="handleVoiceOrderSubmit(event)" class="space-y-4 text-sm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input id="vo-sender" required value="${escapeHtml(state.profile?.full_name || '')}" placeholder="আপনার নাম*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
                <input id="vo-receiver" required placeholder="প্রিয়জনের নাম*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <select id="vo-package" onchange="recalcVoiceOrderTotal()" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25">
                  <option value="${escapeHtml(cfg.voice_pkg_1_name)}|${cfg.voice_pkg_1_price}">${escapeHtml(cfg.voice_pkg_1_name)} — ₹${cfg.voice_pkg_1_price}</option>
                  <option value="${escapeHtml(cfg.voice_pkg_2_name)}|${cfg.voice_pkg_2_price}" selected>${escapeHtml(cfg.voice_pkg_2_name)} — ₹${cfg.voice_pkg_2_price}</option>
                  <option value="${escapeHtml(cfg.voice_pkg_3_name)}|${cfg.voice_pkg_3_price}">${escapeHtml(cfg.voice_pkg_3_name)} — ₹${cfg.voice_pkg_3_price}</option>
                </select>
                <input id="vo-occasion" required placeholder="উপলক্ষ (যেমন: জন্মদিন / বার্ষিকী)*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input id="vo-whatsapp" required type="tel" placeholder="আপনার WhatsApp নম্বর*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
              </div>
              <textarea id="vo-script" rows="4" required placeholder="যে কবিতা বা বার্তাটি রেকর্ড করাতে চান তা এখানে লিখুন..." class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>

              ${typeof renderVoiceAddonsAndCouponUI === 'function' ? renderVoiceAddonsAndCouponUI() : ''}

              <button type="submit" class="px-7 py-3 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold">পেমেন্ট করতে এগিয়ে যান →</button>
            </form>
          </div>

          <div class="glass-panel rounded-3xl p-6 border border-antiqueGold/20 space-y-4">
            <h3 class="text-base font-bold text-antiqueGold">আপনার ভয়েস অর্ডারসমূহ</h3>
            ${!state.user ? `
              <p class="text-xs text-ivory/60">অর্ডার স্ট্যাটাস দেখতে লগইন করুন।</p>
              <button onclick="openAuthModal('login')" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">লগইন করুন</button>
            ` : state.myVoiceOrders.length ? state.myVoiceOrders.map((o) => `
              <div class="p-3.5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 text-xs space-y-2">
                <div class="flex justify-between items-center">
                  <strong class="text-ivory">${escapeHtml(o.receiver_name)} (${escapeHtml(o.occasion)})</strong>
                  <span class="px-2 py-0.5 rounded-full text-[10px] uppercase bg-deepPurple text-antiqueGold">${escapeHtml(o.status)}</span>
                </div>
                <div class="text-ivory/60">${escapeHtml(o.package_name)} • ₹${o.final_amount_inr ?? o.amount_inr}${o.coupon_code ? ` <span class="text-emerald-300 font-mono">(${escapeHtml(o.coupon_code)})</span>` : ''}</div>
                ${Array.isArray(o.selected_addons) && o.selected_addons.length ? `
                  <div class="text-[11px] text-antiqueGold/85">Add-ons: ${o.selected_addons.map((a) => escapeHtml(a.name)).join(', ')}</div>
                ` : ''}
                ${o.delivery_audio_url ? `
                  <button onclick="audioEngine.loadAndPlay({id:'${o.id}',type:'recitation',title:'Gift for ${escapeHtml(o.receiver_name)}',subtitle:'KothaVerse Custom Voice',cover:'',url:'${escapeHtml(o.delivery_audio_url)}',duration:150})" class="w-full py-2 rounded-xl bg-emerald-600 text-white font-semibold">▶ অডিও শুনুন</button>
                ` : `<div class="text-[11px] text-amber-300">রেকর্ডিং প্রক্রিয়াধীন আছে...</div>`}
              </div>
            `).join('') : `<p class="text-xs text-ivory/50">এখনো কোনো অর্ডার নেই।</p>`}
          </div>
        </div>
      `}
    </div>
  `;
}
// Login Check + Open E-Book Order Modal
function openEbookOrderModal(ebookId) {
  if (!state.user) {
    showToast('ই-বুক কেনার জন্য আগে লগইন করুন।', 'info');
    return openAuthModal('login');
  }
  const book = state.ebooks.find((x) => x.id === ebookId);
  if (!book) return;

  const cfg = state.storeSettings || {};
  const baseAmt = Number(book.price_inr || 0);

  window.kvCheckout.ebook = {
    basePrice: baseAmt,
    couponCode: '',
    couponDiscount: 0,
    refCode: '',
    refDiscount: 0,
    walletUsed: 0,
    discount: 0,
    finalPrice: baseAmt
  };

  document.getElementById('eo-ebook-id').value = book.id;
  document.getElementById('eo-book-label').textContent = `${book.title} — ₹${baseAmt}`;
  document.getElementById('eo-upi-id').textContent = cfg.upi_id || 'kothaverse@upi';
  document.getElementById('eo-price').textContent = `₹${baseAmt}`;
  document.getElementById('eo-name').value = state.profile?.full_name || '';
  document.getElementById('eo-whatsapp').value = '';
  

  ['eo-coupon-input', 'eo-ref-input'].forEach((id) => { const el = document.getElementById(id); if (el) el.value = ''; });
  ['eo-coupon-msg', 'eo-ref-msg'].forEach((id) => { const el = document.getElementById(id); if (el) el.textContent = ''; });

  // Show/Hide Referral & Wallet boxes based on Admin settings & user balance
  const refWrap = document.getElementById('eo-ref-wrap');
  if (refWrap) refWrap.classList.toggle('hidden', cfg.referral_enabled === false);

  const walletBal = Number(window.kvPhase2?.walletBalance || 0);
  const wWrap = document.getElementById('eo-wallet-wrap');
  const wChk = document.getElementById('eo-use-wallet');
  const wBalEl = document.getElementById('eo-wallet-bal');
  if (wChk) wChk.checked = false;
  if (wBalEl) wBalEl.textContent = `₹${walletBal}`;
  if (wWrap) wWrap.classList.toggle('hidden', walletBal <= 0);
  const eoQrWrap = document.getElementById('eo-qr-wrap');
  const eoQrImg = document.getElementById('eo-qr-img');
  if (eoQrWrap && eoQrImg) {
    if (cfg.qr_image_url) { eoQrImg.src = cfg.qr_image_url; eoQrWrap.classList.remove('hidden'); }
    else { eoQrWrap.classList.add('hidden'); }
  }

  openModal('ebook-order-modal');
}

async function handleEbookOrderSubmit(e) {
  e.preventDefault();
  if (!state.user) return openAuthModal('login');

  const ebookId = document.getElementById('eo-ebook-id').value;
  const buyerName = document.getElementById('eo-name').value.trim();
  const whatsapp = document.getElementById('eo-whatsapp').value.trim();
  const ebCheckout = { ...(window.kvCheckout?.ebook || {}) };
  const book = state.ebooks.find((x) => x.id === ebookId);
  const finalAmount = ebCheckout.finalPrice ?? Number(book?.price_inr || 0);

  closeModal('ebook-order-modal');

  openUpiGatewayPopup({
    title: book?.title || 'KothaVerse E-Book',
    subtitle: 'ই-বুক অর্ডার পেমেন্ট',
    amount: finalAmount,
    note: `Ebook: ${book?.title || 'KothaVerse'}`,
    onSuccess: async (utr) => {
      if (ebCheckout.walletUsed > 0) {
        const { data: wRes, error: wErr } = await sb.rpc('deduct_my_wallet', {
          p_amount: ebCheckout.walletUsed,
          p_note: `${book?.title || 'ই-বুক'} অর্ডারে ব্যবহৃত`
        });
        if (wErr || !wRes?.ok) throw new Error(wRes?.msg || 'ওয়ালেট ব্যালেন্স কাটতে ব্যর্থ।');
      }

      const { error } = await sb.from('ebook_orders').insert({
        user_id: state.user.id,
        ebook_id: ebookId,
        buyer_name: buyerName,
        buyer_email: state.user.email,
        whatsapp_number: whatsapp,
        transaction_id: utr,
        coupon_code: ebCheckout.couponCode || '',
        referral_code_used: ebCheckout.refCode || '',
        wallet_used_inr: Number(ebCheckout.walletUsed || 0),
        discount_inr: Number(ebCheckout.discount || 0),
        final_amount_inr: finalAmount,
        status: 'pending'
      });

      if (error) throw error;

      if (ebCheckout.couponCode) {
        await sb.rpc('increment_coupon_usage', { p_code: ebCheckout.couponCode });
      }

      await loadUserPersonalData();
      renderCurrentRoute();
    }
  });
}

async function handleVoiceOrderSubmit(e) {
  e.preventDefault();
  if (!state.user) {
    showToast('অর্ডার করার জন্য আগে লগইন করুন।', 'info');
    return openAuthModal('login');
  }

  if (typeof recalcVoiceOrderTotal === 'function') {
    await recalcVoiceOrderTotal();
  }

  const formEl = e.target;
  const [pkgName, amtStr] = document.getElementById('vo-package').value.split('|');
  const baseAmt = parseInt(amtStr, 10) || 149;
  const vcCheckout = { ...(window.kvCheckout?.voice || {}) };
  const finalAmount = vcCheckout.finalPrice ?? baseAmt;

  const orderDraft = {
    user_id: state.user.id,
    sender_name: document.getElementById('vo-sender').value.trim(),
    receiver_name: document.getElementById('vo-receiver').value.trim(),
    occasion: document.getElementById('vo-occasion').value.trim(),
    whatsapp_number: document.getElementById('vo-whatsapp').value.trim(),
    script_or_poem: document.getElementById('vo-script').value.trim(),
    package_name: pkgName,
    amount_inr: baseAmt,
    selected_addons: vcCheckout.addons || [],
    addons_total_inr: Number(vcCheckout.addonsTotal || 0),
    coupon_code: vcCheckout.couponCode || '',
    discount_inr: Number(vcCheckout.discount || 0),
    final_amount_inr: finalAmount
  };

  openUpiGatewayPopup({
    title: `কাস্টম ভয়েস গিফট (${orderDraft.receiver_name})`,
    subtitle: pkgName,
    amount: finalAmount,
    note: `Voice Gift for ${orderDraft.receiver_name}`,
    onSuccess: async (utr) => {
      const { error } = await sb.from('voice_dedication_orders').insert({
        ...orderDraft,
        transaction_id: utr,
        status: 'pending'
      });
      if (error) throw error;

      if (orderDraft.coupon_code) {
        await sb.rpc('increment_coupon_usage', { p_code: orderDraft.coupon_code });
      }

      if (window.kvCheckout) {
        window.kvCheckout.voice = { basePrice: 0, addons: [], addonsTotal: 0, couponCode: '', discount: 0, finalPrice: 0 };
      }

      formEl.reset();
      await loadUserPersonalData();
      renderCurrentRoute();
    }
  });
}

// =========================================================================
// DYNAMIC WATERMARKED PDF GENERATOR (Name + Email + WhatsApp in Background)
// =========================================================================
function createWatermarkPngDataUrl(buyerName, buyerEmail, buyerPhone) {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 520;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate((-28 * Math.PI) / 180);
  ctx.textAlign = 'center';

  ctx.fillStyle = 'rgba(130, 110, 150, 0.24)';
  ctx.font = 'bold 34px "Noto Serif Bengali", sans-serif';
  ctx.fillText(`KothaVerse • ${buyerName}`, 0, -28);

  ctx.font = '24px sans-serif';
  ctx.fillText(buyerEmail || '', 0, 16);
  ctx.fillText(`WA: ${buyerPhone || ''}`, 0, 54);
  ctx.restore();

  return canvas.toDataURL('image/png');
}

let activePdfBlobUrl = null;

async function openWatermarkedEbook(ebookId, mode = 'view') {
  if (!state.user) return openAuthModal('login');
  const book = state.ebooks.find((x) => x.id === ebookId);
  const order = state.myEbookOrders.find((o) => o.ebook_id === ebookId && o.status === 'approved');
  if (!book || !order || !book.pdf_url) {
    return showToast('এই ই-বুকটির অ্যাক্সেস এখনো আনলক হয়নি।', 'error');
  }
  if (typeof PDFLib === 'undefined') {
    return showToast('PDF লাইব্রেরি লোড হয়নি, পেজ রিফ্রেশ করুন।', 'error');
  }

  try {
    showToast('আপনার নামে ওয়াটারমার্কসহ PDF তৈরি হচ্ছে...', 'info');
    const res = await fetch(book.pdf_url);
    if (!res.ok) throw new Error('PDF ফাইল লোড করা যায়নি।');
    const pdfBytes = await res.arrayBuffer();

    const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes);
    const wmPng = createWatermarkPngDataUrl(order.buyer_name, order.buyer_email || state.user.email, order.whatsapp_number);
    const wmImage = await pdfDoc.embedPng(wmPng);

    const pages = pdfDoc.getPages();
    for (const page of pages) {
      const { width, height } = page.getSize();
      const wmW = width * 0.82;
      const wmH = wmW * (wmImage.height / wmImage.width);
      page.drawImage(wmImage, {
        x: (width - wmW) / 2,
        y: (height - wmH) / 2,
        width: wmW,
        height: wmH,
        opacity: 0.45
      });
    }

    const watermarkedBytes = await pdfDoc.save();
    const wmLabel = `${order.buyer_name} • ${order.buyer_email || state.user?.email || ''} • ${order.whatsapp_number || ''}`;

    // Download bondho — direct protected view-only canvas reader khulbe
    await openProtectedPdfReader({
      title: book.title,
      pdfSource: watermarkedBytes,
      watermarkText: wmLabel
    });
  } catch (err) {
    console.error('Watermarked PDF error:', err);
    showToast('PDF লোডে ত্রুটি: ' + err.message, 'error');
  }
}
// =========================================================================
// ADMIN CONTROL ROOM: E-BOOK UPLOAD & ORDER MANAGER
// =========================================================================
function renderAdminStoreTab(ebooks, ebOrders, vcOrders) {
  return `
    <div class="space-y-8 font-bengali">
       <!-- 0. Store UPI, QR & Voice Pricing Settings (Synced to Supabase) -->
      <div class="p-5 rounded-2xl bg-midnight/65 border border-antiqueGold/30">
        <h2 class="text-lg font-bold text-antiqueGold mb-3">স্টোর UPI, QR ও ভয়েস প্যাকেজ প্রাইস সেটিংস</h2>
        <form onsubmit="adminSaveStoreSettings(event)" class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div>
            <label class="block text-ivory/70 mb-1">UPI ID*</label>
            <input id="ss-upi-id" required value="${escapeHtml(state.storeSettings.upi_id)}" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 font-mono" />
          </div>
          <div>
            <label class="block text-ivory/70 mb-1">পেমেন্ট প্রাপকের নাম</label>
            <input id="ss-upi-name" value="${escapeHtml(state.storeSettings.upi_name)}" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
          </div>
          <div>
            <label class="block text-ivory/70 mb-1">UPI QR ছবি আপলোড (ঐচ্ছিক)</label>
            <input id="ss-qr-file" type="file" accept="image/*" class="w-full text-xs mt-1" />
          </div>

          <input id="ss-p1-name" required value="${escapeHtml(state.storeSettings.voice_pkg_1_name)}" placeholder="Package 1 Name" class="md:col-span-2 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
          <input id="ss-p1-price" type="number" required value="${state.storeSettings.voice_pkg_1_price}" placeholder="Price ₹" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />

          <input id="ss-p2-name" required value="${escapeHtml(state.storeSettings.voice_pkg_2_name)}" placeholder="Package 2 Name" class="md:col-span-2 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
          <input id="ss-p2-price" type="number" required value="${state.storeSettings.voice_pkg_2_price}" placeholder="Price ₹" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />

          <input id="ss-p3-name" required value="${escapeHtml(state.storeSettings.voice_pkg_3_name)}" placeholder="Package 3 Name" class="md:col-span-2 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
          <input id="ss-p3-price" type="number" required value="${state.storeSettings.voice_pkg_3_price}" placeholder="Price ₹" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />

          <div class="md:col-span-3">
            <button type="submit" class="px-5 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold">স্টোর সেটিংস সেভ করুন</button>
          </div>
        </form>
      </div>
      <!-- 1. Upload New E-Book -->
      <div>
        <h2 class="text-xl font-bold text-antiqueGold mb-3">নতুন ই-বুক আপলোড করুন</h2>
        <form onsubmit="adminSaveEbook(event)" class="grid grid-cols-1 md:grid-cols-2 gap-3 p-5 rounded-2xl bg-midnight/60 border border-antiqueGold/20 text-sm">
          <input id="ae-title" required placeholder="ই-বুকের শিরোনাম*" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
          <input id="ae-editor" value="KothaVerse সম্পাদনা" placeholder="সম্পাদক / লেখক" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
          <input id="ae-price" type="number" required value="49" placeholder="মূল্য (₹)*" class="px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
          <div><label class="text-xs text-ivory/60">Cover Image</label><input id="ae-cover" type="file" accept="image/*" class="w-full text-xs mt-1" /></div>
          <div class="md:col-span-2"><label class="text-xs text-ivory/60">PDF File (ebooks bucket)*</label><input id="ae-pdf" type="file" accept="application/pdf" required class="w-full text-xs mt-1" /></div>
          <textarea id="ae-desc" rows="2" placeholder="সংক্ষিপ্ত বিবরণ..." class="md:col-span-2 px-3.5 py-2 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>
          <button type="submit" class="md:col-span-2 w-fit px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold">ই-বুক প্রকাশ করুন</button>
        </form>
      </div>

      <!-- 2. E-Book Orders -->
      <div>
        <h2 class="text-lg font-bold text-antiqueGold mb-3">ই-বুক অর্ডারসমূহ (${ebOrders.length})</h2>
        <div class="space-y-2.5">
          ${ebOrders.map((o) => `
            <div class="p-4 rounded-2xl bg-midnight/55 border border-antiqueGold/15 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <div class="font-semibold text-sm text-ivory">${escapeHtml(o.buyer_name)} — <span class="text-antiqueGold">${escapeHtml(o.ebooks?.title || 'E-Book')}</span></div>
                <div class="text-ivory/65 mt-0.5">${escapeHtml(o.buyer_email || '')} • WA: ${escapeHtml(o.whatsapp_number)} • Txn: <strong class="font-mono text-antiqueGold">${escapeHtml(o.transaction_id)}</strong></div>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-full uppercase text-[10px] bg-deepPurple text-ivory">${escapeHtml(o.status)}</span>
                ${o.status !== 'approved' ? `<button onclick="adminUpdateEbookOrder('${o.id}', 'approved')" class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold">Approve (Unlock PDF)</button>` : ''}
                ${o.status === 'pending' ? `<button onclick="adminUpdateEbookOrder('${o.id}', 'rejected')" class="px-3 py-1.5 rounded-lg bg-red-500/25 text-red-200">Reject</button>` : ''}
              </div>
            </div>
          `).join('') || '<p class="text-xs text-ivory/50">কোনো ই-বুক অর্ডার নেই।</p>'}
        </div>
      </div>

      <!-- 3. Custom Voice Dedication Orders -->
      <div>
        <h2 class="text-lg font-bold text-antiqueGold mb-3">কাস্টম ভয়েস ডেডিকেশন অর্ডার (${vcOrders.length})</h2>
        <div class="space-y-3">
          ${vcOrders.map((v) => `
            <div class="p-4 rounded-2xl bg-midnight/55 border border-antiqueGold/15 text-xs space-y-2.5">
              <div class="flex flex-wrap justify-between gap-2">
                <div>
                  <strong class="text-sm text-ivory">${escapeHtml(v.sender_name)} → ${escapeHtml(v.receiver_name)}</strong>
                  <span class="ml-2 text-antiqueGold">(${escapeHtml(v.occasion)} • ₹${v.amount_inr})</span>
                  <div class="text-ivory/65 mt-0.5">WA: ${escapeHtml(v.whatsapp_number)} • Txn: <span class="font-mono text-antiqueGold">${escapeHtml(v.transaction_id)}</span></div>
                </div>
                <span class="px-2.5 py-1 h-fit rounded-full uppercase text-[10px] bg-deepPurple text-antiqueGold">${escapeHtml(v.status)}</span>
              </div>
              <p class="p-2.5 rounded-xl bg-deepPurple/35 text-ivory/85 whitespace-pre-line">${escapeHtml(v.script_or_poem)}</p>
              <div class="flex flex-wrap items-center gap-2">
                <label class="px-3 py-1.5 rounded-lg bg-antiqueGold text-midnight font-semibold cursor-pointer">
                  অডিও আপলোড ও ডেলিভারি
                  <input type="file" accept="audio/*" class="hidden" onchange="adminDeliverVoiceOrder('${v.id}', this.files[0], '${escapeHtml(v.whatsapp_number)}', '${escapeHtml(v.sender_name)}')" />
                </label>
                ${v.delivery_audio_url ? `<span class="text-emerald-300">অডিও আপলোড সম্পন্ন ✓</span>` : ''}
              </div>
            </div>
          `).join('') || '<p class="text-xs text-ivory/50">কোনো ভয়েস অর্ডার নেই।</p>'}
        </div>
      </div>
    </div>
  `;
}
async function adminSaveStoreSettings(e) {
  e.preventDefault();
  try {
    const qrFile = document.getElementById('ss-qr-file').files[0];
    let qr_image_url = state.storeSettings.qr_image_url || null;
    if (qrFile) qr_image_url = await uploadToBucket('covers', qrFile);

    const payload = {
      id: 1,
      upi_id: document.getElementById('ss-upi-id').value.trim(),
      upi_name: document.getElementById('ss-upi-name').value.trim() || 'KothaVerse',
      qr_image_url,
      voice_pkg_1_name: document.getElementById('ss-p1-name').value.trim(),
      voice_pkg_1_price: parseInt(document.getElementById('ss-p1-price').value, 10) || 99,
      voice_pkg_2_name: document.getElementById('ss-p2-name').value.trim(),
      voice_pkg_2_price: parseInt(document.getElementById('ss-p2-price').value, 10) || 149,
      voice_pkg_3_name: document.getElementById('ss-p3-name').value.trim(),
      voice_pkg_3_price: parseInt(document.getElementById('ss-p3-price').value, 10) || 249,
      updated_at: new Date().toISOString()
    };

    const { error } = await sb.from('store_settings').upsert(payload);
    if (error) throw error;

    state.storeSettings = { ...state.storeSettings, ...payload };
    showToast('স্টোর UPI ও প্রাইস সেটিংস আপডেট হয়েছে!', 'success');
    loadAdminTabData();
  } catch (err) {
    showToast('সেভ ব্যর্থ: ' + err.message, 'error');
  }
}

async function adminSaveEbook(e) {
  e.preventDefault();
  try {
    const coverFile = document.getElementById('ae-cover').files[0];
    const pdfFile = document.getElementById('ae-pdf').files[0];
    const coverUrl = coverFile ? await uploadToBucket('covers', coverFile) : null;
    const pdfUrl = await uploadToBucket('ebooks', pdfFile);

    const { error } = await sb.from('ebooks').insert({
      title: document.getElementById('ae-title').value.trim(),
      editor_name: document.getElementById('ae-editor').value.trim(),
      price_inr: parseInt(document.getElementById('ae-price').value, 10) || 49,
      cover_image_url: coverUrl,
      pdf_url: pdfUrl,
      description: document.getElementById('ae-desc').value.trim(),
      is_published: true
    });
    if (error) throw error;
    showToast('ই-বুক সফলভাবে প্রকাশিত হয়েছে!', 'success');
    await loadAllPublicContent();
    loadAdminTabData();
  } catch (err) {
    showToast('ই-বুক আপলোড ব্যর্থ: ' + err.message, 'error');
  }
}

async function adminUpdateEbookOrder(orderId, status) {
  const { error } = await sb.from('ebook_orders').update({ status }).eq('id', orderId);
  if (error) return showToast('আপডেট ব্যর্থ: ' + error.message, 'error');
  showToast(status === 'approved' ? 'অর্ডার অ্যাপ্রুভ হয়েছে! ইউজারের অ্যাপে PDF আনলক হয়ে গেছে।' : 'অর্ডার বাতিল করা হয়েছে।', 'success');
  loadAdminTabData();
}

async function adminDeliverVoiceOrder(orderId, audioFile, waNum, senderName) {
  if (!audioFile) return;
  try {
    showToast('অডিও আপলোড হচ্ছে...', 'info');
    const audioUrl = await uploadToBucket('audio', audioFile);
    const { error } = await sb.from('voice_dedication_orders').update({
      delivery_audio_url: audioUrl,
      status: 'delivered'
    }).eq('id', orderId);
    if (error) throw error;
    showToast('ভয়েস গিফট ডেলিভারি সম্পন্ন!', 'success');
    loadAdminTabData();

    const num = formatWANumber(waNum);
    if (num) {
      const msg = `নমস্কার ${senderName},\nআপনার অর্ডার করা KothaVerse Custom Voice Dedication তৈরি হয়ে গেছে! অ্যাপে লগইন করে শুনতে পারবেন অথবা এই লিংক থেকে ডাউনলোড করুন:\n${audioUrl}`;
      window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    }
  } catch (err) {
    showToast('ডেলিভারি ব্যর্থ: ' + err.message, 'error');
  }
}
// =========================================================================
// GLOBAL SITE SETTINGS AUTO-SYNC (Supabase <-> localStorage)
// =========================================================================
const _origLocalSetItem = localStorage.setItem.bind(localStorage);
let _isApplyingRemoteSettings = false;
let _settingsSyncTimer = null;

localStorage.setItem = function (key, value) {
  _origLocalSetItem(key, value);
  if (
    !_isApplyingRemoteSettings &&
    typeof state !== 'undefined' &&
    state.profile?.role === 'admin' &&
    key &&
    !key.startsWith('sb-') &&
    !key.includes('auth') &&
    !key.includes('token')
  ) {
    clearTimeout(_settingsSyncTimer);
    _settingsSyncTimer = setTimeout(() => {
      syncSettingsToSupabase(true);
    }, 400);
  }
};

function applyRemoteSettingsToLocal(remoteSettings) {
  if (!remoteSettings || typeof remoteSettings !== 'object') return;

  let hasChanged = false;
  _isApplyingRemoteSettings = true;
  try {
    Object.entries(remoteSettings).forEach(([key, remoteVal]) => {
      if (!remoteVal || typeof remoteVal !== 'object') return;
      try {
        const oldRaw = localStorage.getItem(key) || '';
        const localExisting = oldRaw ? JSON.parse(oldRaw) : {};
        const merged = { ...remoteVal };

        // Admin-er local Gemini API Key jate overwrite na hoy
        if (localExisting.geminiApiKey) merged.geminiApiKey = localExisting.geminiApiKey;
        if (localExisting.apiKey) merged.apiKey = localExisting.apiKey;
        if (localExisting.gemini_api_key) merged.gemini_api_key = localExisting.gemini_api_key;

        const nextRaw = JSON.stringify(merged);
        if (nextRaw !== oldRaw) {
          _origLocalSetItem(key, nextRaw);
          hasChanged = true;
        }
      } catch (e) { /* ignore */ }
    });
  } finally {
    _isApplyingRemoteSettings = false;
  }

  // Shudhu settings-e ashol change aslei UI update hobe, bar-bar refresh hobe na
  if (hasChanged) {
    if (typeof applyWebsiteSettings === 'function') applyWebsiteSettings();
    if (typeof renderNavbar === 'function') renderNavbar();
    if (typeof renderFooter === 'function') renderFooter();
    if (typeof renderCurrentRoute === 'function' && state.route !== 'admin') renderCurrentRoute();
  }
}
async function syncSettingsToSupabase(showSuccess = false) {
  if (state.profile?.role !== 'admin') return;

  const allSettings = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || k.startsWith('sb-') || k.includes('auth') || k.includes('token')) continue;

    try {
      const parsed = JSON.parse(localStorage.getItem(k));
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        const cleanCopy = { ...parsed };
        delete cleanCopy.geminiApiKey;
        delete cleanCopy.apiKey;
        delete cleanCopy.gemini_api_key;
        allSettings[k] = cleanCopy;
      }
    } catch (e) { /* non-JSON skip */ }
  }

  const { error } = await sb.from('site_settings').upsert({
    id: 1,
    settings: allSettings,
    updated_at: new Date().toISOString()
  });

  if (error) {
    showToast('Global settings sync ব্যর্থ: ' + error.message, 'error');
  }
}
// =========================================================================
// PHASE 1: ADMIN-CONTROLLED COUPONS, FLASH SALE, VOICE ADD-ONS & PREVIEWS
// =========================================================================
const DEFAULT_VOICE_ADDONS = [
  { id: 'urgent_12h', name: 'Urgent 12-Hour Delivery', price: 50, enabled: true },
  { id: 'video_reel', name: 'Custom Video Reel Version', price: 100, enabled: true },
  { id: 'digital_card', name: 'Handwritten-Style Digital Card', price: 30, enabled: true }
];

window.kvCheckout = {
  ebook: { basePrice: 0, couponCode: '', discount: 0, finalPrice: 0 },
  voice: { basePrice: 0, addons: [], addonsTotal: 0, couponCode: '', discount: 0, finalPrice: 0 }
};

let _flashSaleTimerId = null;

function getActiveVoiceAddons() {
  const list = Array.isArray(state.storeSettings?.voice_addons)
    ? state.storeSettings.voice_addons
    : DEFAULT_VOICE_ADDONS;
  return list.filter((a) => a && a.enabled);
}

// -------------------------------------------------------------------------
// 1. FLASH SALE COUNTDOWN BANNER (Homepage + Store Page)
// -------------------------------------------------------------------------
function renderFlashSaleBanner() {
  const cfg = state.storeSettings || {};
  if (!cfg.flash_sale_active || !cfg.flash_sale_end) return '';

  const endMs = new Date(cfg.flash_sale_end).getTime();
  if (isNaN(endMs) || endMs <= Date.now()) return '';

  setTimeout(() => startFlashSaleTicker(endMs), 50);

  return `
    <div id="kv-flash-banner" class="mb-6 rounded-2xl p-4 sm:p-5 border border-antiqueGold/50 bg-gradient-to-r from-red-950/75 via-deepPurple/85 to-amber-950/70 shadow-gold font-bengali">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold tracking-wide uppercase">
            <i data-lucide="zap" class="w-3 h-3"></i> Flash Sale Live
          </div>
          <h3 class="text-lg sm:text-xl font-bold text-antiqueGold">${escapeHtml(cfg.flash_sale_title || 'উৎসবের বিশেষ ফ্ল্যাশ সেল!')}</h3>
          <p class="text-xs text-ivory/80">${escapeHtml(cfg.flash_sale_subtitle || '')}</p>
          ${cfg.flash_sale_coupon ? `
            <div class="pt-1 flex items-center gap-2 text-xs">
              <span class="text-ivory/75">কুপন কোড:</span>
              <button onclick="navigator.clipboard?.writeText('${escapeHtml(cfg.flash_sale_coupon)}'); showToast('কুপন কোড কপি হয়েছে!', 'success')" class="px-2.5 py-0.5 rounded-lg bg-antiqueGold text-midnight font-mono font-bold hover:opacity-90">
                ${escapeHtml(cfg.flash_sale_coupon)} (কপি)
              </button>
            </div>
          ` : ''}
        </div>
        <div class="shrink-0 flex flex-col items-start md:items-end gap-1">
          <span class="text-[11px] text-ivory/70">অফার শেষ হতে বাকি:</span>
          <div id="kv-flash-timer" class="font-mono text-lg sm:text-2xl font-bold text-white bg-midnight/80 border border-antiqueGold/40 px-4 py-2 rounded-xl tracking-wider">
            --:--:--
          </div>
        </div>
      </div>
    </div>
  `;
}

function startFlashSaleTicker(endMs) {
  if (_flashSaleTimerId) clearInterval(_flashSaleTimerId);

  const update = () => {
    const el = document.getElementById('kv-flash-timer');
    const wrap = document.getElementById('kv-flash-banner');
    if (!el) return clearInterval(_flashSaleTimerId);

    const diff = endMs - Date.now();
    if (diff <= 0) {
      clearInterval(_flashSaleTimerId);
      if (wrap) wrap.remove();
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hrs = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    const pad = (n) => String(n).padStart(2, '0');

    el.textContent = days > 0
      ? `${days}d : ${pad(hrs)}h : ${pad(mins)}m : ${pad(secs)}s`
      : `${pad(hrs)} : ${pad(mins)} : ${pad(secs)}`;
  };

  update();
  _flashSaleTimerId = setInterval(update, 1000);
}

// -------------------------------------------------------------------------
// 2. COUPON VALIDATION ENGINE (E-Book & Voice Checkout)
// -------------------------------------------------------------------------
async function validateAndCalcCoupon(rawCode, targetType, orderSubtotal) {
  const code = String(rawCode || '').trim().toUpperCase();
  if (!code) return { ok: false, msg: 'একটি কুপন কোড লিখুন।' };

  const { data, error } = await sb
    .from('store_coupons')
    .select('*')
    .eq('code', code)
    .eq('is_active', true)
    .maybeSingle();

  if (error || !data) return { ok: false, msg: 'কুপন কোডটি সঠিক নয় বা বন্ধ করা আছে।' };
  if (data.applies_to !== 'all' && data.applies_to !== targetType) {
    return { ok: false, msg: `এই কুপনটি শুধুমাত্র ${data.applies_to === 'ebook' ? 'ই-বুকের' : 'ভয়েস গিফটের'} জন্য প্রযোজ্য।` };
  }
  if (data.expires_at && new Date(data.expires_at).getTime() < Date.now()) {
    return { ok: false, msg: 'এই কুপন কোডটির মেয়াদ শেষ হয়ে গেছে।' };
  }
  if (data.max_uses > 0 && data.used_count >= data.max_uses) {
    return { ok: false, msg: 'এই কুপনের ব্যবহারের সীমা শেষ হয়ে গেছে।' };
  }
  if (orderSubtotal < (data.min_order_inr || 0)) {
    return { ok: false, msg: `এই কুপন ব্যবহার করতে কমপক্ষে ₹${data.min_order_inr} অর্ডার করতে হবে।` };
  }

  let discount = data.discount_type === 'percent'
    ? Math.round((orderSubtotal * data.discount_value) / 100)
    : Number(data.discount_value || 0);

  discount = Math.min(orderSubtotal, Math.max(0, discount));
  const finalPrice = Math.max(0, orderSubtotal - discount);

  return {
    ok: true,
    code: data.code,
    discount,
    finalPrice,
    msg: `কুপন "${data.code}" প্রয়োগ হয়েছে! আপনি ₹${discount} ছাড় পেলেন।`
  };
}

// E-Book Modal Coupon Apply
async function applyEbookCoupon() {
  const input = document.getElementById('eo-coupon-input');
  const msgEl = document.getElementById('eo-coupon-msg');
  if (!input || !msgEl) return;

  const c = window.kvCheckout.ebook;
  const res = await validateAndCalcCoupon(input.value, 'ebook', Number(c.basePrice || 0));

  if (!res.ok) {
    c.couponCode = '';
    c.couponDiscount = 0;
    msgEl.className = 'text-[11px] text-red-400 font-bengali mt-1';
    msgEl.textContent = res.msg;
    return recalcEbookCheckoutTotal();
  }

  c.couponCode = res.code;
  c.couponDiscount = res.discount;
  msgEl.className = 'text-[11px] text-emerald-400 font-bengali mt-1';
  msgEl.textContent = res.msg;
  recalcEbookCheckoutTotal();
}

// -------------------------------------------------------------------------
// 3. VOICE DEMO AUDIO PLAYER + ADD-ONS + LIVE PRICE CALCULATOR
// -------------------------------------------------------------------------
function renderVoiceDemoCard() {
  const cfg = state.storeSettings || {};
  if (!cfg.voice_demo_audio_url) return '';

  return `
    <div class="mb-5 p-4 rounded-2xl bg-deepPurple/45 border border-antiqueGold/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-bengali">
      <div class="space-y-0.5">
        <div class="text-xs font-bold text-antiqueGold flex items-center gap-1.5">
          <i data-lucide="headphones" class="w-4 h-4"></i> ফ্রি স্যাম্পল শুনুন
        </div>
        <div class="text-xs text-ivory/80">${escapeHtml(cfg.voice_demo_title || 'কাস্টম ভয়েস ডেডিকেশন স্যাম্পল (২০ সেকেন্ড)')}</div>
      </div>
      <audio controls preload="metadata" class="h-9 w-full sm:w-64 rounded-lg" src="${escapeHtml(cfg.voice_demo_audio_url)}"></audio>
    </div>
  `;
}

function renderVoiceAddonsAndCouponUI() {
  const addons = getActiveVoiceAddons();
  return `
    ${addons.length ? `
      <div class="p-3.5 rounded-xl bg-midnight/60 border border-antiqueGold/20 space-y-2 font-bengali">
        <div class="text-xs font-semibold text-antiqueGold">স্পেশাল অ্যাড-অন যোগ করুন (ঐচ্ছিক):</div>
        <div id="vc-addons-wrap" class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          ${addons.map((a) => `
            <label class="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-deepPurple/35 border border-antiqueGold/20 cursor-pointer hover:border-antiqueGold/50 text-xs">
              <span class="flex items-center gap-2">
                <input type="checkbox" class="vc-addon-chk accent-amber-400" value="${escapeHtml(a.id)}" data-name="${escapeHtml(a.name)}" data-price="${Number(a.price || 0)}" onchange="recalcVoiceOrderTotal()" />
                <span class="text-ivory/90">${escapeHtml(a.name)}</span>
              </span>
              <span class="font-mono text-antiqueGold font-semibold">+₹${Number(a.price || 0)}</span>
            </label>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div class="p-3.5 rounded-xl bg-midnight/60 border border-antiqueGold/20 space-y-2 font-bengali">
      <div class="flex gap-2">
        <input id="vc-coupon-input" type="text" placeholder="কুপন কোড থাকলে লিখুন (যেমন: PUJO20)" class="flex-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-xs text-ivory uppercase" />
        <button type="button" onclick="applyVoiceCoupon()" class="px-4 py-2 rounded-xl bg-antiqueGold/20 border border-antiqueGold/45 text-antiqueGold hover:bg-antiqueGold hover:text-midnight text-xs font-semibold transition">প্রয়োগ করুন</button>
      </div>
      <div id="vc-coupon-msg" class="text-[11px]"></div>
      <div id="vc-final-price-box" class="pt-1.5 border-t border-ivory/10 text-xs text-ivory/90 flex flex-wrap items-center justify-between gap-2">
        <span>সর্বমোট প্রদেয় (UPI):</span>
        <strong class="text-base text-antiqueGold font-mono">₹0</strong>
      </div>
    </div>
  `;
}

function getSelectedVoiceBasePrice() {
  const sel = document.getElementById('vo-package');
  if (!sel || !sel.value) return 0;
  const parts = sel.value.split('|');
  return parseInt(parts[1], 10) || 0;
}

async function recalcVoiceOrderTotal(recheckCoupon = false) {
  const basePrice = getSelectedVoiceBasePrice();
  const checked = Array.from(document.querySelectorAll('.vc-addon-chk:checked'));
  const addons = checked.map((el) => ({
    id: el.value,
    name: el.dataset.name,
    price: Number(el.dataset.price || 0)
  }));
  const addonsTotal = addons.reduce((sum, a) => sum + a.price, 0);
  const subtotal = basePrice + addonsTotal;

  let couponCode = window.kvCheckout.voice.couponCode || '';
  let discount = 0;

  if (couponCode) {
    const res = await validateAndCalcCoupon(couponCode, 'voice', subtotal);
    const msgEl = document.getElementById('vc-coupon-msg');
    if (res.ok) {
      discount = res.discount;
      if (recheckCoupon && msgEl) {
        msgEl.className = 'text-[11px] text-emerald-400 font-bengali';
        msgEl.textContent = res.msg;
      }
    } else {
      couponCode = '';
      if (msgEl) {
        msgEl.className = 'text-[11px] text-red-400 font-bengali';
        msgEl.textContent = res.msg;
      }
    }
  }

  const finalPrice = Math.max(0, subtotal - discount);
  window.kvCheckout.voice = { basePrice, addons, addonsTotal, couponCode, discount, finalPrice };

  const box = document.getElementById('vc-final-price-box');
  if (box) {
    const breakdown = [];
    if (addonsTotal > 0) breakdown.push(`প্যাকেজ ₹${basePrice} + অ্যাড-অন ₹${addonsTotal}`);
    if (discount > 0) breakdown.push(`ছাড় -₹${discount}`);
    box.innerHTML = `
      <span>সর্বমোট প্রদেয় (UPI) ${breakdown.length ? `<span class="text-ivory/60">(${breakdown.join(' | ')})</span>` : ''}:</span>
      <strong class="text-base text-antiqueGold font-mono">₹${finalPrice}</strong>
    `;
  }
}

async function applyVoiceCoupon() {
  const input = document.getElementById('vc-coupon-input');
  if (!input) return;
  window.kvCheckout.voice.couponCode = input.value.trim().toUpperCase();
  await recalcVoiceOrderTotal(true);
}

// -------------------------------------------------------------------------
// 4. FREE E-BOOK SAMPLE PREVIEW MODAL (Prothom 2-3 Pata via pdf-lib / Excerpt)
// -------------------------------------------------------------------------
async function openEbookSamplePreview(ebookId) {
  const book = (state.ebooks || []).find((x) => x.id === ebookId);
  if (!book) return;

  let modal = document.getElementById('kv-sample-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kv-sample-modal';
    modal.className = 'fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4';
    document.body.appendChild(modal);
  }

  const maxPages = Number(book.sample_pages || 3);
  modal.innerHTML = `
    <div class="w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-midnight border border-antiqueGold/40 overflow-hidden shadow-card font-bengali">
      <div class="px-5 py-4 border-b border-antiqueGold/20 flex items-center justify-between gap-3 bg-deepPurple/40">
        <div>
          <span class="text-[10px] uppercase tracking-wider text-antiqueGold font-semibold">ফ্রি স্যাম্পল প্রিভিউ (প্রথম ${maxPages} পাতা)</span>
          <h3 class="text-base sm:text-lg font-bold text-ivory">${escapeHtml(book.title)}</h3>
        </div>
        <button onclick="closeEbookSamplePreview()" class="px-3 py-1.5 rounded-xl bg-midnight border border-ivory/20 text-xs text-ivory/80 hover:text-white">বন্ধ করুন ✕</button>
      </div>
      <div id="kv-sample-body" class="p-5 overflow-y-auto flex-1 space-y-4">
        <div class="text-center text-xs text-ivory/70 py-6">স্যাম্পল লোড হচ্ছে...</div>
      </div>
      <div class="px-5 py-3.5 border-t border-antiqueGold/20 bg-deepPurple/30 flex items-center justify-between gap-3">
        <span class="text-xs text-ivory/75">সম্পূর্ণ বইটি পড়তে চান? মূল্য মাত্র <strong class="text-antiqueGold">₹${book.price_inr}</strong></span>
        <button onclick="closeEbookSamplePreview(); openEbookOrderModal('${book.id}')" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">এখনই কিনুন</button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');

  const bodyEl = document.getElementById('kv-sample-body');
  let htmlParts = [];

  if (book.sample_excerpt) {
    htmlParts.push(`
      <div class="p-4 rounded-2xl bg-deepPurple/30 border border-antiqueGold/20 text-sm text-ivory/90 whitespace-pre-line leading-relaxed">
        ${escapeHtml(book.sample_excerpt)}
      </div>
    `);
  }

  if (book.sample_pdf_url) {
    try {
      let previewUrl = book.sample_pdf_url;

      // pdf-lib diye shudhu prothom N pata slice kore browser-e dekhano
      if (window.PDFLib && maxPages > 0) {
        const resp = await fetch(book.sample_pdf_url);
        if (resp.ok) {
          const bytes = await resp.arrayBuffer();
          const srcPdf = await window.PDFLib.PDFDocument.load(bytes);
          const outPdf = await window.PDFLib.PDFDocument.create();
          const count = Math.min(maxPages, srcPdf.getPageCount());
          const copied = await outPdf.copyPages(srcPdf, Array.from({ length: count }, (_, i) => i));
          copied.forEach((p) => outPdf.addPage(p));
          const slicedBytes = await outPdf.save();
          const blob = new Blob([slicedBytes], { type: 'application/pdf' });
          previewUrl = URL.createObjectURL(blob);
          modal.dataset.blobUrl = previewUrl;
        }
      }

      htmlParts.push(`
        <iframe src="${previewUrl}#toolbar=0" class="w-full h-[55vh] rounded-xl border border-antiqueGold/25 bg-white"></iframe>
      `);
    } catch (e) {
      htmlParts.push(`<a href="${escapeHtml(book.sample_pdf_url)}" target="_blank" rel="noopener" class="inline-block px-4 py-2 rounded-xl bg-antiqueGold/20 text-antiqueGold text-xs">স্যাম্পল PDF খুলুন ↗</a>`);
    }
  }

  bodyEl.innerHTML = htmlParts.length
    ? htmlParts.join('')
    : '<p class="text-xs text-ivory/60 text-center py-6">এই বইটির জন্য কোনো স্যাম্পল প্রিভিউ এখনও যোগ করা হয়নি।</p>';
}

function closeEbookSamplePreview() {
  const modal = document.getElementById('kv-sample-modal');
  if (!modal) return;
  if (modal.dataset.blobUrl) {
    URL.revokeObjectURL(modal.dataset.blobUrl);
    delete modal.dataset.blobUrl;
  }
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// -------------------------------------------------------------------------
// 5. ADMIN CONTROL PANEL (Flash Sale, Coupons, Voice Add-ons & Sample Preview)
// -------------------------------------------------------------------------
async function loadAdminPhase1Panel(containerId = 'admin-phase1-controls') {
  const box = document.getElementById(containerId);
  if (!box || state.profile?.role !== 'admin') return;

  const cfg = state.storeSettings || {};
  const addons = Array.isArray(cfg.voice_addons) ? cfg.voice_addons : [...DEFAULT_VOICE_ADDONS];
  window._adminDraftAddons = JSON.parse(JSON.stringify(addons));

  const { data: coupons } = await sb.from('store_coupons').select('*').order('created_at', { ascending: false });
  const endLocal = cfg.flash_sale_end
    ? new Date(new Date(cfg.flash_sale_end).getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)
    : '';

  box.innerHTML = `
    <div class="mt-8 pt-6 border-t border-antiqueGold/25 space-y-6 font-bengali">
      <h2 class="text-xl font-bold text-antiqueGold flex items-center gap-2">
        <i data-lucide="sliders" class="w-5 h-5"></i> স্টোর প্রমোশন, কুপন, অ্যাড-অন ও প্রিভিউ কন্ট্রোল
      </h2>

      <!-- A. FLASH SALE COUNTDOWN CONTROL -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <h3 class="font-bold text-sm text-amber-300">১. ফ্ল্যাশ সেল কাউন্টডাউন ব্যানার</h3>
          <label class="flex items-center gap-2 text-xs cursor-pointer">
            <input id="adm-fs-active" type="checkbox" ${cfg.flash_sale_active ? 'checked' : ''} class="accent-amber-400 w-4 h-4" />
            <span>ব্যানার চালু রাখুন</span>
          </label>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <input id="adm-fs-title" type="text" value="${escapeHtml(cfg.flash_sale_title || '')}" placeholder="ব্যানার শিরোনাম (যেমন: পুজো স্পেশাল ফ্ল্যাশ সেল!)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-fs-sub" type="text" value="${escapeHtml(cfg.flash_sale_subtitle || '')}" placeholder="সাবটাইটেল (যেমন: সব ই-বুকে ২০% ছাড়)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-fs-coupon" type="text" value="${escapeHtml(cfg.flash_sale_coupon || '')}" placeholder="হাইলাইট কুপন কোড (যেমন: PUJO20)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory uppercase" />
          <input id="adm-fs-end" type="datetime-local" value="${endLocal}" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>
        <button onclick="adminSaveFlashSale()" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">ফ্ল্যাশ সেল সেভ করুন</button>
      </div>

      <!-- B. DISCOUNT COUPON MANAGER -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <h3 class="font-bold text-sm text-amber-300">২. ডিসকাউন্ট কুপন ম্যানেজার</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
          <input id="adm-cp-code" type="text" placeholder="কোড (PUJO20)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory uppercase font-mono" />
          <select id="adm-cp-type" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory">
            <option value="percent">শতাংশ (% ছাড়)</option>
            <option value="flat">ফ্ল্যাট টাকা (₹ ছাড়)</option>
          </select>
          <input id="adm-cp-val" type="number" placeholder="ছাড়ের মান (যেমন: 20)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <select id="adm-cp-scope" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory">
            <option value="all">সব কিছু (E-Book + Voice)</option>
            <option value="ebook">শুধু E-Book</option>
            <option value="voice">শুধু Voice Gift</option>
          </select>
          <input id="adm-cp-min" type="number" value="0" placeholder="ন্যূনতম অর্ডার (₹)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-cp-max" type="number" value="0" placeholder="সর্বোচ্চ ব্যবহার (0=আনলিমিটেড)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-cp-exp" type="datetime-local" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <button onclick="adminCreateCoupon()" class="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">+ নতুন কুপন যোগ করুন</button>
        </div>

        <div class="space-y-2 pt-2">
          ${(coupons || []).map((c) => `
            <div class="p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-mono font-bold text-antiqueGold px-2 py-0.5 rounded bg-midnight border border-antiqueGold/30">${escapeHtml(c.code)}</span>
                <span>${c.discount_type === 'percent' ? c.discount_value + '% ছাড়' : '₹' + c.discount_value + ' ছাড়'}</span>
                <span class="text-ivory/60">(${c.applies_to} | Min ₹${c.min_order_inr} | Used: ${c.used_count}${c.max_uses ? '/' + c.max_uses : ''})</span>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="adminToggleCoupon('${c.id}', ${!c.is_active})" class="px-2.5 py-1 rounded-lg ${c.is_active ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-400/40' : 'bg-ivory/10 text-ivory/60'}">
                  ${c.is_active ? 'সক্রিয়' : 'বন্ধ'}
                </button>
                <button onclick="adminDeleteCoupon('${c.id}')" class="px-2.5 py-1 rounded-lg bg-red-600/25 text-red-200 hover:bg-red-600 hover:text-white">মুছুন</button>
              </div>
            </div>
          `).join('') || '<p class="text-xs text-ivory/50">এখনও কোনো কুপন তৈরি করা হয়নি।</p>'}
        </div>
      </div>

      <!-- C. VOICE DEMO AUDIO & ADD-ONS CONTROL -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <h3 class="font-bold text-sm text-amber-300">৩. কাস্টম ভয়েস ডেমো অডিও ও অ্যাড-অন কন্ট্রোল</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
          <input id="adm-vd-title" type="text" value="${escapeHtml(cfg.voice_demo_title || '')}" placeholder="ডেমো শিরোনাম (যেমন: ২০ সেকেন্ড আবৃত্তি স্যাম্পল)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-vd-url" type="url" value="${escapeHtml(cfg.voice_demo_audio_url || '')}" placeholder="ডেমো অডিও MP3 URL (Supabase Storage লিংক)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>

        <div id="adm-addons-list" class="space-y-2 pt-1"></div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-1">
          <input id="adm-new-addon-name" type="text" placeholder="নতুন অ্যাড-অন নাম" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-new-addon-price" type="number" placeholder="মূল্য (₹)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <button onclick="adminAddDraftAddon()" class="px-3 py-2 rounded-xl bg-deepPurple border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight">+ অ্যাড-অন যোগ করুন</button>
        </div>
        <button onclick="adminSaveVoiceExtras()" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">ডেমো অডিও ও অ্যাড-অন সেভ করুন</button>
      </div>

      <!-- D. E-BOOK FREE SAMPLE PREVIEW MANAGER -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <h3 class="font-bold text-sm text-amber-300">৪. ই-বুক ফ্রি স্যাম্পল প্রিভিউ সেটআপ</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
          <select id="adm-sp-book" onchange="adminFillSampleFields()" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory">
            ${(state.ebooks || []).map((b) => `<option value="${b.id}">${escapeHtml(b.title)}</option>`).join('') || '<option value="">কোনো ই-বুক নেই</option>'}
          </select>
          <input id="adm-sp-url" type="url" placeholder="স্যাম্পল PDF লিংক (পাবলিক URL)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-sp-pages" type="number" min="1" max="10" value="3" placeholder="কত পাতা ফ্রি দেখাবে (যেমন: 3)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>
        <textarea id="adm-sp-excerpt" rows="3" placeholder="অথবা বইয়ের প্রথম ২-৩টি কবিতা/অংশ এখানে লিখে দিন (ঐচ্ছিক)..." class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-xs text-ivory"></textarea>
        <button onclick="adminSaveEbookSample()" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">স্যাম্পল প্রিভিউ সেভ করুন</button>
      </div>
    </div>
  `;

  renderAdminDraftAddons();
  adminFillSampleFields();
  if (window.lucide) lucide.createIcons();
}

function renderAdminDraftAddons() {
  const wrap = document.getElementById('adm-addons-list');
  if (!wrap) return;
  wrap.innerHTML = (window._adminDraftAddons || []).map((a, idx) => `
    <div class="grid grid-cols-12 gap-2 items-center p-2 rounded-xl bg-deepPurple/30 border border-antiqueGold/15 text-xs">
      <input type="checkbox" ${a.enabled ? 'checked' : ''} onchange="window._adminDraftAddons[${idx}].enabled = this.checked" class="col-span-1 accent-amber-400" />
      <input type="text" value="${escapeHtml(a.name)}" onchange="window._adminDraftAddons[${idx}].name = this.value" class="col-span-6 px-2.5 py-1.5 rounded-lg bg-midnight border border-ivory/15 text-ivory" />
      <input type="number" value="${Number(a.price || 0)}" onchange="window._adminDraftAddons[${idx}].price = Number(this.value || 0)" class="col-span-3 px-2.5 py-1.5 rounded-lg bg-midnight border border-ivory/15 text-ivory font-mono" />
      <button onclick="window._adminDraftAddons.splice(${idx}, 1); renderAdminDraftAddons()" class="col-span-2 py-1.5 rounded-lg bg-red-600/25 text-red-200 hover:bg-red-600 hover:text-white">মুছুন</button>
    </div>
  `).join('');
}

function adminAddDraftAddon() {
  const name = (document.getElementById('adm-new-addon-name')?.value || '').trim();
  const price = Number(document.getElementById('adm-new-addon-price')?.value || 0);
  if (!name || price <= 0) return showToast('অ্যাড-অনের নাম ও সঠিক মূল্য দিন।', 'error');

  window._adminDraftAddons.push({
    id: 'addon_' + Date.now(),
    name,
    price,
    enabled: true
  });
  document.getElementById('adm-new-addon-name').value = '';
  document.getElementById('adm-new-addon-price').value = '';
  renderAdminDraftAddons();
}

async function adminSaveFlashSale() {
  const active = document.getElementById('adm-fs-active')?.checked || false;
  const title = (document.getElementById('adm-fs-title')?.value || '').trim();
  const subtitle = (document.getElementById('adm-fs-sub')?.value || '').trim();
  const coupon = (document.getElementById('adm-fs-coupon')?.value || '').trim().toUpperCase();
  const endRaw = document.getElementById('adm-fs-end')?.value || '';
  const endIso = endRaw ? new Date(endRaw).toISOString() : null;

  const payload = {
    flash_sale_active: active,
    flash_sale_title: title,
    flash_sale_subtitle: subtitle,
    flash_sale_coupon: coupon,
    flash_sale_end: endIso
  };

  const { error } = await sb.from('store_settings').update(payload).eq('id', 1);
  if (error) return showToast('ফ্ল্যাশ সেল সেভ ব্যর্থ: ' + error.message, 'error');

  state.storeSettings = { ...(state.storeSettings || {}), ...payload };
  showToast('ফ্ল্যাশ সেল সেটিংস আপডেট হয়েছে!', 'success');
}

async function adminSaveVoiceExtras() {
  const payload = {
    voice_demo_title: (document.getElementById('adm-vd-title')?.value || '').trim(),
    voice_demo_audio_url: (document.getElementById('adm-vd-url')?.value || '').trim(),
    voice_addons: window._adminDraftAddons || []
  };

  const { error } = await sb.from('store_settings').update(payload).eq('id', 1);
  if (error) return showToast('সেভ ব্যর্থ: ' + error.message, 'error');

  state.storeSettings = { ...(state.storeSettings || {}), ...payload };
  showToast('ডেমো অডিও ও অ্যাড-অন আপডেট হয়েছে!', 'success');
}

async function adminCreateCoupon() {
  const code = (document.getElementById('adm-cp-code')?.value || '').trim().toUpperCase();
  const discount_type = document.getElementById('adm-cp-type')?.value || 'percent';
  const discount_value = Number(document.getElementById('adm-cp-val')?.value || 0);
  const applies_to = document.getElementById('adm-cp-scope')?.value || 'all';
  const min_order_inr = Number(document.getElementById('adm-cp-min')?.value || 0);
  const max_uses = Number(document.getElementById('adm-cp-max')?.value || 0);
  const expRaw = document.getElementById('adm-cp-exp')?.value || '';
  const expires_at = expRaw ? new Date(expRaw).toISOString() : null;

  if (!code || discount_value <= 0) return showToast('সঠিক কুপন কোড ও ছাড়ের মান লিখুন।', 'error');

  const { error } = await sb.from('store_coupons').insert([{
    code, discount_type, discount_value, applies_to, min_order_inr, max_uses, expires_at, is_active: true
  }]);

  if (error) return showToast('কুপন তৈরি ব্যর্থ: ' + error.message, 'error');
  showToast(`কুপন "${code}" তৈরি হয়েছে!`, 'success');
  loadAdminPhase1Panel();
}

async function adminToggleCoupon(id, nextState) {
  const { error } = await sb.from('store_coupons').update({ is_active: nextState }).eq('id', id);
  if (error) return showToast(error.message, 'error');
  loadAdminPhase1Panel();
}

async function adminDeleteCoupon(id) {
  const { error } = await sb.from('store_coupons').delete().eq('id', id);
  if (error) return showToast(error.message, 'error');
  showToast('কুপন মুছে ফেলা হয়েছে।', 'success');
  loadAdminPhase1Panel();
}

function adminFillSampleFields() {
  const id = document.getElementById('adm-sp-book')?.value;
  const book = (state.ebooks || []).find((b) => b.id === id);
  if (!book) return;
  document.getElementById('adm-sp-url').value = book.sample_pdf_url || '';
  document.getElementById('adm-sp-pages').value = book.sample_pages || 3;
  document.getElementById('adm-sp-excerpt').value = book.sample_excerpt || '';
}

async function adminSaveEbookSample() {
  const id = document.getElementById('adm-sp-book')?.value;
  if (!id) return;

  const payload = {
    sample_pdf_url: (document.getElementById('adm-sp-url')?.value || '').trim(),
    sample_pages: Math.max(1, Number(document.getElementById('adm-sp-pages')?.value || 3)),
    sample_excerpt: (document.getElementById('adm-sp-excerpt')?.value || '').trim()
  };

  const { error } = await sb.from('ebooks').update(payload).eq('id', id);
  if (error) return showToast('সেভ ব্যর্থ: ' + error.message, 'error');

  const local = (state.ebooks || []).find((b) => b.id === id);
  if (local) Object.assign(local, payload);
  showToast('ই-বুক স্যাম্পল প্রিভিউ আপডেট হয়েছে!', 'success');
}
// =========================================================================
// PHASE 2: COMBO BUNDLES, GIFT AN E-BOOK & REFERRAL WALLET ENGINE
// =========================================================================
window.kvPhase2 = {
  bundles: [],
  myBundleOrders: [],
  myGiftOrders: [],
  myWalletTxns: [],
  referralCode: '',
  walletBalance: 0
};

window.kvBundleCheckout = {
  bundleId: '',
  basePrice: 0,
  refCode: '',
  refDiscount: 0,
  walletUsed: 0,
  finalPrice: 0
};

async function loadPhase2PublicData() {
  const { data } = await sb
    .from('store_bundles')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });
  window.kvPhase2.bundles = data || [];
}

async function loadPhase2UserData() {
  if (!state.user) {
    window.kvPhase2.myBundleOrders = [];
    window.kvPhase2.myGiftOrders = [];
    window.kvPhase2.myWalletTxns = [];
    window.kvPhase2.referralCode = '';
    window.kvPhase2.walletBalance = 0;
    return;
  }

  const [refRes, bunOrdRes, giftRes, txnRes] = await Promise.all([
    sb.rpc('ensure_my_referral_code'),
    sb.from('bundle_orders').select('*, store_bundles(title, bundle_price_inr)').eq('user_id', state.user.id).order('created_at', { ascending: false }),
    sb.from('ebook_gifts').select('*, ebooks(title)').eq('buyer_user_id', state.user.id).order('created_at', { ascending: false }),
    sb.from('wallet_transactions').select('*').eq('user_id', state.user.id).order('created_at', { ascending: false }).limit(20)
  ]);

  if (!refRes.error && refRes.data?.ok) {
    window.kvPhase2.referralCode = refRes.data.referral_code || '';
    window.kvPhase2.walletBalance = Number(refRes.data.wallet_balance || 0);
  }
  window.kvPhase2.myBundleOrders = bunOrdRes.data || [];
  window.kvPhase2.myGiftOrders = giftRes.data || [];
  window.kvPhase2.myWalletTxns = txnRes.data || [];
}

// -------------------------------------------------------------------------
// 1. E-BOOK MODAL: COMBINED COUPON + REFERRAL + WALLET PRICE CALCULATOR
// -------------------------------------------------------------------------
function recalcEbookCheckoutTotal() {
  const c = window.kvCheckout?.ebook;
  if (!c) return;

  const base = Number(c.basePrice || 0);
  const couponDisc = Number(c.couponDiscount || 0);
  const refDisc = Number(c.refDiscount || 0);
  const afterDiscounts = Math.max(0, base - couponDisc - refDisc);

  const walletChk = document.getElementById('eo-use-wallet');
  const maxWallet = Number(window.kvPhase2.walletBalance || 0);
  const walletUsed = walletChk && walletChk.checked ? Math.min(maxWallet, afterDiscounts) : 0;

  c.discount = couponDisc + refDisc;
  c.walletUsed = walletUsed;
  c.finalPrice = Math.max(0, afterDiscounts - walletUsed);

  const priceEl = document.getElementById('eo-price');
  if (priceEl) {
    priceEl.innerHTML = c.finalPrice < base
      ? `<span class="line-through text-ivory/50 text-xs mr-1.5">₹${base}</span>₹${c.finalPrice}`
      : `₹${base}`;
  }
}

async function applyEbookReferral() {
  const input = document.getElementById('eo-ref-input');
  const msgEl = document.getElementById('eo-ref-msg');
  if (!input || !msgEl) return;

  const c = window.kvCheckout.ebook;
  const code = input.value.trim().toUpperCase();
  if (!code) {
    c.refCode = '';
    c.refDiscount = 0;
    msgEl.textContent = '';
    return recalcEbookCheckoutTotal();
  }

  const { data, error } = await sb.rpc('validate_referral_code', { p_code: code });
  if (error || !data?.ok) {
    c.refCode = '';
    c.refDiscount = 0;
    msgEl.className = 'text-[11px] text-red-400 font-bengali mt-1';
    msgEl.textContent = data?.msg || 'রেফারেল কোড যাচাই ব্যর্থ।';
    return recalcEbookCheckoutTotal();
  }

  const disc = Math.round((Number(c.basePrice || 0) * Number(data.discount_pct || 10)) / 100);
  c.refCode = data.code;
  c.refDiscount = disc;
  msgEl.className = 'text-[11px] text-emerald-400 font-bengali mt-1';
  msgEl.textContent = `${data.referrer_name}-এর রেফারেল কোড প্রয়োগ হয়েছে! ${data.discount_pct}% (₹${disc}) ছাড়।`;
  recalcEbookCheckoutTotal();
}

// -------------------------------------------------------------------------
// 2. STORE TAB: COMBO / BUNDLE PACKS
// -------------------------------------------------------------------------
function renderStoreBundlesTab() {
  const bundles = window.kvPhase2.bundles || [];

  return `
    <div class="space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${bundles.map((bn) => {
          const includedBooks = (bn.ebook_ids || [])
            .map((id) => (state.ebooks || []).find((b) => b.id === id))
            .filter(Boolean);
          const myOrd = (window.kvPhase2.myBundleOrders || []).find((o) => o.bundle_id === bn.id);
          const savings = Math.max(0, Number(bn.original_price_inr || 0) - Number(bn.bundle_price_inr || 0));

          return `
            <div class="glass-panel rounded-2xl overflow-hidden border border-antiqueGold/35 flex flex-col shadow-card">
              <div class="relative h-52 overflow-hidden">
                <img src="${safeCover(bn.cover_image_url || includedBooks[0]?.cover_image_url, bn.title)}" class="w-full h-full object-cover" />
                ${savings > 0 ? `<span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600 text-white font-bold text-[11px]">সাশ্রয় ₹${savings}</span>` : ''}
                <span class="absolute top-3 right-3 px-3 py-1 rounded-full bg-midnight/90 border border-antiqueGold/45 text-antiqueGold font-bold text-xs">
                  ${bn.original_price_inr > bn.bundle_price_inr ? `<span class="line-through text-ivory/50 mr-1">₹${bn.original_price_inr}</span>` : ''}₹${bn.bundle_price_inr}
                </span>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div class="space-y-2">
                  <span class="inline-block px-2.5 py-0.5 rounded-full bg-antiqueGold/15 border border-antiqueGold/35 text-antiqueGold text-[10px] font-semibold">কম্বো বান্ডেল প্যাক</span>
                  <h3 class="text-lg font-bold text-ivory">${escapeHtml(bn.title)}</h3>
                  <div>${typeof renderProductRatingBadge === 'function' ? renderProductRatingBadge('bundle', bn.id) : ''}</div>
                  <p class="text-xs text-ivory/70">${escapeHtml(bn.description || '')}</p>
                  <div class="pt-1 space-y-1 text-xs text-ivory/85">
                    <div class="text-antiqueGold font-semibold text-[11px]">এই প্যাকে যা থাকছে:</div>
                    ${includedBooks.map((eb) => `<div class="flex items-center gap-1.5"><i data-lucide="book-open" class="w-3.5 h-3.5 text-antiqueGold shrink-0"></i> ${escapeHtml(eb.title)}</div>`).join('')}
                    ${bn.includes_voice_gift ? `<div class="flex items-center gap-1.5 text-emerald-300"><i data-lucide="mic" class="w-3.5 h-3.5 shrink-0"></i> কাস্টম ভয়েস গিফট: ${escapeHtml(bn.voice_package_label || 'অন্তর্ভুক্ত')}</div>` : ''}
                  </div>
                </div>
                <div>
                  ${myOrd?.status === 'approved' ? `
                    <div class="w-full py-2.5 px-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs text-center font-semibold">
                      কেনা সম্পন্ন — ই-বুক ট্যাবে সব বই আনলক আছে!
                    </div>
                  ` : myOrd?.status === 'pending' ? `
                    <div class="w-full py-2.5 px-3 rounded-xl bg-amber-500/15 border border-amber-400/35 text-amber-200 text-xs text-center">
                      অর্ডার যাচাই চলছে (Txn: ${escapeHtml(myOrd.transaction_id)})
                    </div>
                  ` : `
                    <button onclick="openBundleOrderModal('${bn.id}')" class="w-full py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs shadow-gold hover:opacity-90 transition">
                      কম্বো কিনুন — ₹${bn.bundle_price_inr}
                    </button>
                  `}
                </div>
              </div>
            </div>
          `;
        }).join('') || `<div class="col-span-full glass-panel rounded-2xl p-10 text-center text-ivory/60 text-sm">এই মুহূর্তে কোনো কম্বো প্যাক চালু নেই। খুব শীঘ্রই আসছে!</div>`}
      </div>
    </div>
  `;
}

function openBundleOrderModal(bundleId) {
  if (!state.user) {
    showToast('কম্বো প্যাক কেনার জন্য আগে লগইন করুন।', 'info');
    return openAuthModal('login');
  }
  const bn = (window.kvPhase2.bundles || []).find((x) => x.id === bundleId);
  if (!bn) return;

  const cfg = state.storeSettings || {};
  const base = Number(bn.bundle_price_inr || 0);
  window.kvBundleCheckout = { bundleId: bn.id, title: bn.title, basePrice: base, refCode: '', refDiscount: 0, walletUsed: 0, finalPrice: base };

  let modal = document.getElementById('kv-bundle-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kv-bundle-modal';
    modal.className = 'fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modal);
  }

  const walletBal = Number(window.kvPhase2.walletBalance || 0);
  const refEnabled = cfg.referral_enabled !== false;

  modal.innerHTML = `
    <div class="w-full max-w-lg rounded-3xl bg-midnight border border-antiqueGold/40 p-6 shadow-card font-bengali space-y-4 my-auto">
      <div class="flex items-start justify-between gap-2">
        <div>
          <span class="text-[10px] uppercase text-antiqueGold font-semibold">কম্বো প্যাক অর্ডার</span>
          <h3 class="text-lg font-bold text-ivory">${escapeHtml(bn.title)}</h3>
        </div>
        <button onclick="closeDynamicModal('kv-bundle-modal')" class="text-ivory/60 hover:text-white text-sm">✕</button>
      </div>

      <div class="p-3.5 rounded-2xl bg-deepPurple/45 border border-antiqueGold/25 text-xs flex items-center justify-between">
        <span>সর্বমোট প্রদেয়:</span>
        <strong id="bo-final-price" class="text-lg text-antiqueGold font-mono">₹${base}</strong>
      </div>

      ${refEnabled ? `
        <div class="space-y-1">
          <div class="flex gap-2">
            <input id="bo-ref-input" type="text" placeholder="বন্ধুর রেফারেল কোড (ঐচ্ছিক)" class="flex-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-xs text-ivory uppercase font-mono" />
            <button type="button" onclick="applyBundleReferral()" class="px-3.5 py-2 rounded-xl bg-antiqueGold/20 border border-antiqueGold/40 text-antiqueGold text-xs font-semibold">প্রয়োগ</button>
          </div>
          <div id="bo-ref-msg" class="text-[11px]"></div>
        </div>
      ` : ''}

      ${walletBal > 0 ? `
        <label class="flex items-center justify-between p-3 rounded-xl bg-emerald-950/35 border border-emerald-500/35 text-xs cursor-pointer">
          <span class="flex items-center gap-2">
            <input id="bo-use-wallet" type="checkbox" onchange="recalcBundlePrice()" class="accent-emerald-400" />
            <span>KothaVerse ওয়ালেট ক্রেডিট ব্যবহার করুন</span>
          </span>
          <strong class="text-emerald-300 font-mono">ব্যালেন্স: ₹${walletBal}</strong>
        </label>
      ` : ''}

      <form onsubmit="handleBundleOrderSubmit(event)" class="space-y-3 text-xs">
        <input id="bo-name" required value="${escapeHtml(state.profile?.full_name || '')}" placeholder="আপনার নাম*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        <input id="bo-wa" required type="tel" placeholder="আপনার WhatsApp নম্বর*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        <button type="submit" class="w-full py-3 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold">পেমেন্ট করতে এগিয়ে যান →</button>
      </form>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function recalcBundlePrice() {
  const b = window.kvBundleCheckout;
  const afterRef = Math.max(0, b.basePrice - b.refDiscount);
  const wChk = document.getElementById('bo-use-wallet');
  b.walletUsed = wChk && wChk.checked ? Math.min(window.kvPhase2.walletBalance || 0, afterRef) : 0;
  b.finalPrice = Math.max(0, afterRef - b.walletUsed);

  const el = document.getElementById('bo-final-price');
  if (el) {
    el.innerHTML = b.finalPrice < b.basePrice
      ? `<span class="line-through text-ivory/50 text-xs mr-1.5">₹${b.basePrice}</span>₹${b.finalPrice}`
      : `₹${b.basePrice}`;
  }
}

async function applyBundleReferral() {
  const input = document.getElementById('bo-ref-input');
  const msgEl = document.getElementById('bo-ref-msg');
  if (!input || !msgEl) return;

  const { data, error } = await sb.rpc('validate_referral_code', { p_code: input.value.trim() });
  if (error || !data?.ok) {
    window.kvBundleCheckout.refCode = '';
    window.kvBundleCheckout.refDiscount = 0;
    msgEl.className = 'text-[11px] text-red-400';
    msgEl.textContent = data?.msg || 'রেফারেল কোড সঠিক নয়।';
    return recalcBundlePrice();
  }

  const disc = Math.round((window.kvBundleCheckout.basePrice * Number(data.discount_pct || 10)) / 100);
  window.kvBundleCheckout.refCode = data.code;
  window.kvBundleCheckout.refDiscount = disc;
  msgEl.className = 'text-[11px] text-emerald-400';
  msgEl.textContent = `${data.referrer_name}-এর কোড প্রয়োগ হয়েছে! ${data.discount_pct}% (₹${disc}) ছাড়।`;
  recalcBundlePrice();
}

async function handleBundleOrderSubmit(e) {
  e.preventDefault();
  if (!state.user) return openAuthModal('login');

  const b = { ...window.kvBundleCheckout };
  const buyerName = document.getElementById('bo-name').value.trim();
  const whatsapp = document.getElementById('bo-wa').value.trim();

  closeDynamicModal('kv-bundle-modal');

  openUpiGatewayPopup({
    title: b.title || 'কম্বো প্যাক',
    subtitle: 'কম্বো বান্ডেল পেমেন্ট',
    amount: b.finalPrice,
    note: `Bundle: ${b.title || 'KothaVerse'}`,
    onSuccess: async (utr) => {
      if (b.walletUsed > 0) {
        const { data: wRes, error: wErr } = await sb.rpc('deduct_my_wallet', {
          p_amount: b.walletUsed,
          p_note: 'কম্বো বান্ডেল অর্ডারে ব্যবহৃত'
        });
        if (wErr || !wRes?.ok) throw new Error(wRes?.msg || 'ওয়ালেট ব্যালেন্স কাটতে ব্যর্থ।');
      }

      const { error } = await sb.from('bundle_orders').insert({
        user_id: state.user.id,
        bundle_id: b.bundleId,
        buyer_name: buyerName,
        buyer_email: state.user.email,
        whatsapp_number: whatsapp,
        transaction_id: utr,
        referral_code_used: b.refCode || '',
        wallet_used_inr: b.walletUsed || 0,
        discount_inr: b.refDiscount || 0,
        final_amount_inr: b.finalPrice,
        status: 'pending'
      });
      if (error) throw error;

      await loadPhase2UserData();
      renderCurrentRoute();
    }
  });
}
// -------------------------------------------------------------------------
// 3. GIFT AN E-BOOK MODAL + REDEEM + REFERRAL WALLET TAB
// -------------------------------------------------------------------------
function openGiftEbookModal(ebookId) {
  if (!state.user) {
    showToast('ই-বুক গিফট করার জন্য আগে লগইন করুন।', 'info');
    return openAuthModal('login');
  }
  const book = (state.ebooks || []).find((x) => x.id === ebookId);
  if (!book) return;

  let modal = document.getElementById('kv-gift-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kv-gift-modal';
    modal.className = 'fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="w-full max-w-lg rounded-3xl bg-midnight border border-antiqueGold/40 p-6 shadow-card font-bengali space-y-4 my-auto">
      <div class="flex items-start justify-between gap-2">
        <div>
          <span class="text-[10px] uppercase text-antiqueGold font-semibold">Gift an E-Book</span>
          <h3 class="text-lg font-bold text-ivory">প্রিয়জনকে "${escapeHtml(book.title)}" উপহার দিন</h3>
        </div>
        <button onclick="closeDynamicModal('kv-gift-modal')" class="text-ivory/60 hover:text-white text-sm">✕</button>
      </div>

      <form onsubmit="handleGiftOrderSubmit(event, '${book.id}', ${Number(book.price_inr || 0)})" class="space-y-3 text-xs">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <input id="gf-buyer-name" required value="${escapeHtml(state.profile?.full_name || '')}" placeholder="আপনার নাম*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="gf-buyer-wa" required type="tel" placeholder="আপনার WhatsApp নম্বর*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <input id="gf-rec-name" required placeholder="যাঁকে গিফট দেবেন তাঁর নাম*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="gf-rec-wa" type="tel" placeholder="তাঁর WhatsApp নম্বর (ঐচ্ছিক)" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>
        <textarea id="gf-note" rows="2" placeholder="উপহারের সাথে ছোট্ট শুভেচ্ছা বার্তা (ঐচ্ছিক)..." class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory"></textarea>
        <button type="submit" class="w-full py-3 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold">পেমেন্ট করুন — ₹${book.price_inr} →</button>
      </form>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

async function handleGiftOrderSubmit(e, ebookId, amountInr) {
  e.preventDefault();
  if (!state.user) return openAuthModal('login');

  const book = (state.ebooks || []).find((x) => x.id === ebookId);
  const giftDraft = {
    buyer_user_id: state.user.id,
    buyer_name: document.getElementById('gf-buyer-name').value.trim(),
    buyer_whatsapp: document.getElementById('gf-buyer-wa').value.trim(),
    recipient_name: document.getElementById('gf-rec-name').value.trim(),
    recipient_whatsapp: document.getElementById('gf-rec-wa').value.trim(),
    personal_note: document.getElementById('gf-note').value.trim(),
    ebook_id: ebookId,
    amount_inr: amountInr
  };

  closeDynamicModal('kv-gift-modal');

  openUpiGatewayPopup({
    title: `ই-বুক গিফট: ${book?.title || 'E-Book'}`,
    subtitle: `প্রাপক: ${giftDraft.recipient_name}`,
    amount: amountInr,
    note: `Gift Ebook for ${giftDraft.recipient_name}`,
    onSuccess: async (utr) => {
      const { error } = await sb.from('ebook_gifts').insert({
        ...giftDraft,
        transaction_id: utr,
        status: 'pending'
      });
      if (error) throw error;

      await loadPhase2UserData();
      state.storeTab = 'gift_wallet';
      renderCurrentRoute();
    }
  });
}

function renderStoreGiftAndWalletTab() {
  const cfg = state.storeSettings || {};
  const refPct = Number(cfg.referral_friend_discount_pct ?? 10);
  const refReward = Number(cfg.referral_referrer_reward_inr ?? 20);
  const myCode = window.kvPhase2.referralCode || '';
  const walletBal = Number(window.kvPhase2.walletBalance || 0);

  return `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 font-bengali">
      <!-- LEFT: GIFT CODE REDEEM + MY SENT GIFTS -->
      <div class="space-y-6">
        <div class="glass-panel rounded-3xl p-6 border border-antiqueGold/30 space-y-4">
          <div class="flex items-center gap-2 text-antiqueGold font-bold text-lg">
            <i data-lucide="gift" class="w-5 h-5"></i> ই-বুক গিফট কোড রিডিম করুন
          </div>
          <p class="text-xs text-ivory/70">কেউ আপনাকে KothaVerse-এর ই-বুক গিফট কোড পাঠিয়ে থাকলে নিচে কোড দিন—বইটি সঙ্গে সঙ্গে আপনার অ্যাকাউন্টে আনলক হয়ে যাবে।</p>
          <form onsubmit="handleRedeemGiftCode(event)" class="space-y-3 text-xs">
            <input id="rd-code" required placeholder="গিফট কোড লিখুন (যেমন: KV-GIFT-AB12CD)" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/30 text-ivory font-mono uppercase" />
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <input id="rd-name" required value="${escapeHtml(state.profile?.full_name || '')}" placeholder="আপনার নাম (PDF ওয়াটারমার্কের জন্য)*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
              <input id="rd-wa" required type="tel" placeholder="আপনার WhatsApp নম্বর*" class="px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
            </div>
            <button type="submit" class="px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold">বই আনলক করুন</button>
          </form>
        </div>

        <div class="glass-panel rounded-3xl p-6 border border-antiqueGold/20 space-y-3">
          <h3 class="text-base font-bold text-antiqueGold">আপনার কেনা ই-বুক গিফটসমূহ</h3>
          ${!state.user ? `
            <p class="text-xs text-ivory/60">আপনার গিফট কোড দেখতে লগইন করুন।</p>
          ` : (window.kvPhase2.myGiftOrders || []).length ? window.kvPhase2.myGiftOrders.map((g) => `
            <div class="p-3.5 rounded-2xl bg-midnight/65 border border-antiqueGold/20 text-xs space-y-2">
              <div class="flex items-center justify-between gap-2">
                <strong class="text-ivory">${escapeHtml(g.ebooks?.title || 'E-Book')} → ${escapeHtml(g.recipient_name)}</strong>
                <span class="px-2 py-0.5 rounded-full text-[10px] uppercase bg-deepPurple text-antiqueGold">${escapeHtml(g.status)}</span>
              </div>
              ${g.status === 'approved' && g.gift_code ? `
                <div class="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/35">
                  <span class="font-mono font-bold text-emerald-300">${escapeHtml(g.gift_code)} ${g.is_redeemed ? '(রিডিম সম্পন্ন)' : ''}</span>
                  <div class="flex gap-1.5">
                    <button onclick="copyTextToClipboard('${escapeHtml(g.gift_code)}')" class="px-2.5 py-1 rounded-lg bg-midnight text-antiqueGold">কপি</button>
                    <button onclick="shareGiftOnWhatsApp('${g.id}')" class="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold">WhatsApp-এ পাঠান</button>
                  </div>
                </div>
              ` : `<div class="text-[11px] text-amber-300">যাচাই চলছে (Txn: ${escapeHtml(g.transaction_id)})</div>`}
            </div>
          `).join('') : `<p class="text-xs text-ivory/50">এখনও কোনো ই-বুক গিফট করেননি। ই-বুক ট্যাবে গিয়ে যেকোনো বইয়ে "গিফট করুন" বাটনে ক্লিক করুন।</p>`}
        </div>
      </div>

      <!-- RIGHT: REFERRAL CODE & KOTHAVERSE WALLET -->
      <div class="glass-panel rounded-3xl p-6 border border-antiqueGold/30 space-y-5">
        <div class="flex items-center justify-between gap-3">
          <div>
            <span class="text-[10px] uppercase text-antiqueGold font-semibold">Reader Referral & Credit</span>
            <h3 class="text-lg font-bold text-ivory">রেফারেল ও KothaVerse ওয়ালেট</h3>
          </div>
          <div class="text-right px-4 py-2 rounded-2xl bg-emerald-950/50 border border-emerald-400/40">
            <div class="text-[10px] text-emerald-300">ওয়ালেট ব্যালেন্স</div>
            <div class="text-xl font-mono font-bold text-white">₹${walletBal}</div>
          </div>
        </div>

        <p class="text-xs text-ivory/75 leading-relaxed">
          বন্ধুকে আপনার রেফারেল কোড শেয়ার করুন। বন্ধু ই-বুক বা কম্বো অর্ডারে কোড ব্যবহার করলে <strong>${refPct}% ছাড়</strong> পাবে, আর অর্ডার অ্যাপ্রুভ হলেই আপনার ওয়ালেটে <strong>₹${refReward} ক্রেডিট</strong> জমা হবে!
        </p>

        ${!state.user ? `
          <button onclick="openAuthModal('login')" class="px-5 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">রেফারেল কোড পেতে লগইন করুন</button>
        ` : `
          <div class="p-4 rounded-2xl bg-midnight/75 border border-antiqueGold/35 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div class="text-[11px] text-ivory/60">আপনার ইনভাইট কোড</div>
              <div class="text-2xl font-mono font-bold text-antiqueGold tracking-wider">${escapeHtml(myCode || 'লোড হচ্ছে...')}</div>
            </div>
            <div class="flex gap-2 text-xs">
              <button onclick="copyTextToClipboard('${escapeHtml(myCode)}')" class="px-3.5 py-2 rounded-xl bg-deepPurple border border-antiqueGold/35 text-antiqueGold font-semibold">কপি</button>
              <button onclick="shareReferralOnWhatsApp()" class="px-3.5 py-2 rounded-xl bg-emerald-600 text-white font-semibold">WhatsApp শেয়ার</button>
            </div>
          </div>

          <div class="space-y-2 pt-2">
            <div class="text-xs font-semibold text-antiqueGold">ওয়ালেট লেনদেন ইতিহাস</div>
            ${(window.kvPhase2.myWalletTxns || []).map((t) => `
              <div class="p-2.5 rounded-xl bg-midnight/50 border border-ivory/10 flex items-center justify-between text-xs">
                <div>
                  <div class="text-ivory/90">${escapeHtml(t.note || t.type)}</div>
                  <div class="text-[10px] text-ivory/50">${new Date(t.created_at).toLocaleDateString('bn-IN')}</div>
                </div>
                <span class="font-mono font-bold ${t.amount_inr >= 0 ? 'text-emerald-400' : 'text-red-400'}">
                  ${t.amount_inr >= 0 ? '+₹' + t.amount_inr : '-₹' + Math.abs(t.amount_inr)}
                </span>
              </div>
            `).join('') || '<p class="text-xs text-ivory/50">এখনও কোনো ওয়ালেট লেনদেন নেই।</p>'}
          </div>
        `}
      </div>
    </div>
  `;
}

async function handleRedeemGiftCode(e) {
  e.preventDefault();
  if (!state.user) {
    showToast('গিফট রিডিম করতে আগে লগইন করুন।', 'info');
    return openAuthModal('login');
  }
  const code = document.getElementById('rd-code').value.trim().toUpperCase();
  const name = document.getElementById('rd-name').value.trim();
  const wa = document.getElementById('rd-wa').value.trim();

  const { data, error } = await sb.rpc('redeem_ebook_gift_code', {
    p_code: code,
    p_buyer_name: name,
    p_whatsapp: wa
  });

  if (error || !data?.ok) {
    return showToast(data?.msg || error?.message || 'রিডিম ব্যর্থ হয়েছে।', 'error');
  }

  showToast(`অভিনন্দন! ${data.sender}-এর পাঠানো ই-বুক আপনার অ্যাকাউন্টে আনলক হয়েছে!`, 'success');
  await loadUserPersonalData();
  state.storeTab = 'ebooks';
  renderCurrentRoute();
}

function shareGiftOnWhatsApp(giftId) {
  const g = (window.kvPhase2.myGiftOrders || []).find((x) => x.id === giftId);
  if (!g || !g.gift_code) return;
  const bookTitle = g.ebooks?.title || 'ই-বুক';
  const msg = `প্রিয় ${g.recipient_name},\n\nতোমার জন্য KothaVerse-এর "${bookTitle}" ই-বুকটি উপহার পাঠালাম! 🎁\n${g.personal_note ? `\n"${g.personal_note}"\n` : ''}\n*রিডিম কোড:* ${g.gift_code}\n\nবইটি আনলক করতে KothaVerse Store → "গিফট ও রেফারেল" ট্যাবে গিয়ে কোডটি বসাও:\n${window.location.origin}/#store`;
  const wa = typeof formatIndianWA === 'function' ? formatIndianWA(g.recipient_whatsapp) : '';
  const url = wa ? `https://wa.me/${wa}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener');
}

function shareReferralOnWhatsApp() {
  const code = window.kvPhase2.referralCode;
  if (!code) return;
  const pct = Number(state.storeSettings?.referral_friend_discount_pct ?? 10);
  const msg = `KothaVerse-এ অসাধারণ বাংলা ই-বুক ও কাস্টম ভয়েস গিফট রয়েছে! আমার রেফারেল কোড *${code}* ব্যবহার করে অর্ডার করলেই পাবে ${pct}% ডিসকাউন্ট।\nভিজিট করো: ${window.location.origin}/#store`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

function closeDynamicModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('hidden');
  el.classList.remove('flex');
}

// -------------------------------------------------------------------------
// 4. ADMIN PHASE 2 CONTROL PANEL (Bundles, Gift Approvals & Referral Control)
// -------------------------------------------------------------------------
async function loadAdminPhase2Panel(containerId = 'admin-phase2-controls') {
  const box = document.getElementById(containerId);
  if (!box || state.profile?.role !== 'admin') return;

  const [bunRes, bunOrdRes, giftRes, ebRefOrdRes] = await Promise.all([
    sb.from('store_bundles').select('*').order('created_at', { ascending: false }),
    sb.from('bundle_orders').select('*, store_bundles(title, ebook_ids)').order('created_at', { ascending: false }),
    sb.from('ebook_gifts').select('*, ebooks(title)').order('created_at', { ascending: false }),
    sb.from('ebook_orders').select('*, ebooks(title)').eq('status', 'approved').eq('referral_rewarded', false).neq('referral_code_used', '')
  ]);

  window._adminPhase2Cache = {
    bundles: bunRes.data || [],
    bundleOrders: bunOrdRes.data || [],
    gifts: giftRes.data || [],
    pendingEbookRefRewards: ebRefOrdRes.data || []
  };

  const cfg = state.storeSettings || {};

  box.innerHTML = `
    <div class="mt-8 pt-6 border-t border-antiqueGold/25 space-y-6 font-bengali">
      <h2 class="text-xl font-bold text-antiqueGold flex items-center gap-2">
        <i data-lucide="package-plus" class="w-5 h-5"></i> কম্বো প্যাক, গিফট কোড ও রেফারেল ওয়ালেট কন্ট্রোল (Phase 2)
      </h2>

      <!-- A. COMBO / BUNDLE CREATOR & LIST -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <h3 class="font-bold text-sm text-amber-300">১. কম্বো / বান্ডেল প্যাক ম্যানেজার</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
          <input id="adm-bn-title" placeholder="কম্বো নাম (যেমন: পুজো ৩ ই-বুক মহা-সংকলন)*" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-bn-cover" placeholder="কভার ছবির URL (ঐচ্ছিক)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-bn-orig" type="number" placeholder="আসল মোট দাম (₹ যেমন: 297)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-bn-price" type="number" placeholder="কম্বো অফার দাম (₹ যেমন: 199)*" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>
        <textarea id="adm-bn-desc" rows="2" placeholder="কম্বো বিবরণ..." class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-xs text-ivory"></textarea>

        <div class="space-y-1.5 text-xs">
          <div class="text-ivory/80 font-semibold">কম্বোতে কোন কোন ই-বুক থাকবে সিলেক্ট করুন:</div>
          <div class="flex flex-wrap gap-2">
            ${(state.ebooks || []).map((eb) => `
              <label class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-deepPurple/40 border border-antiqueGold/20 cursor-pointer">
                <input type="checkbox" class="adm-bn-eb-chk accent-amber-400" value="${eb.id}" />
                <span>${escapeHtml(eb.title)} (₹${eb.price_inr})</span>
              </label>
            `).join('') || '<span class="text-ivory/50">আগে ই-বুক যোগ করুন।</span>'}
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 text-xs">
          <label class="flex items-center gap-2 cursor-pointer">
            <input id="adm-bn-voice" type="checkbox" class="accent-amber-400" />
            <span>কাস্টম ভয়েস গিফট অন্তর্ভুক্ত করুন</span>
          </label>
          <input id="adm-bn-vlabel" placeholder="ভয়েস প্যাকেজ লেবেল (যেমন: Mini Voice Note)" class="flex-1 min-w-[200px] px-3 py-1.5 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>

        <button onclick="adminCreateBundle()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs">+ নতুন কম্বো প্যাক তৈরি করুন</button>

        <div class="space-y-2 pt-2">
          ${window._adminPhase2Cache.bundles.map((bn) => `
            <div class="p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div>
                <strong class="text-ivory">${escapeHtml(bn.title)}</strong>
                <span class="ml-2 text-antiqueGold font-mono">₹${bn.bundle_price_inr}</span>
                <span class="ml-2 text-ivory/60">(${(bn.ebook_ids || []).length}টি ই-বুক${bn.includes_voice_gift ? ' + ভয়েস গিফট' : ''})</span>
              </div>
              <div class="flex gap-2">
                <button onclick="adminToggleBundle('${bn.id}', ${!bn.is_active})" class="px-2.5 py-1 rounded-lg ${bn.is_active ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-400/40' : 'bg-ivory/10 text-ivory/60'}">${bn.is_active ? 'চালু' : 'বন্ধ'}</button>
                <button onclick="adminDeleteBundle('${bn.id}')" class="px-2.5 py-1 rounded-lg bg-red-600/25 text-red-200 hover:bg-red-600 hover:text-white">মুছুন</button>
              </div>
            </div>
          `).join('') || '<p class="text-xs text-ivory/50">কোনো কম্বো প্যাক তৈরি হয়নি।</p>'}
        </div>
      </div>

      <!-- B. BUNDLE ORDERS APPROVAL -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-2.5">
        <h3 class="font-bold text-sm text-amber-300">২. কম্বো প্যাক অর্ডারসমূহ (${window._adminPhase2Cache.bundleOrders.length})</h3>
        ${window._adminPhase2Cache.bundleOrders.map((o) => `
          <div class="p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="space-y-0.5">
              <div><strong>${escapeHtml(o.store_bundles?.title || 'Bundle')}</strong> — ${escapeHtml(o.buyer_name)} (WA: ${escapeHtml(o.whatsapp_number)})</div>
              <div class="text-ivory/65 font-mono">Txn: ${escapeHtml(o.transaction_id)} | Paid: ₹${o.final_amount_inr}${o.wallet_used_inr ? ` | Wallet: ₹${o.wallet_used_inr}` : ''}${o.referral_code_used ? ` | Ref: ${escapeHtml(o.referral_code_used)}` : ''}</div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-full bg-midnight text-antiqueGold uppercase text-[10px]">${o.status}</span>
              ${o.status === 'pending' ? `
                <button onclick="adminApproveBundleOrder('${o.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold">অ্যাপ্রুভ ও সব বই আনলক</button>
                <button onclick="adminRejectBundleOrder('${o.id}')" class="px-2.5 py-1.5 rounded-lg bg-red-600/25 text-red-200">বাতিল</button>
              ` : ''}
            </div>
          </div>
        `).join('') || '<p class="text-xs text-ivory/50">কোনো কম্বো অর্ডার নেই।</p>'}
      </div>

      <!-- C. GIFT E-BOOK ORDERS APPROVAL -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-2.5">
        <h3 class="font-bold text-sm text-amber-300">৩. গিফট ই-বুক অর্ডার ও কোড ম্যানেজার (${window._adminPhase2Cache.gifts.length})</h3>
        ${window._adminPhase2Cache.gifts.map((g) => `
          <div class="p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="space-y-0.5">
              <div><strong>${escapeHtml(g.ebooks?.title || 'E-Book')}</strong> • ক্রেতা: ${escapeHtml(g.buyer_name)} (${escapeHtml(g.buyer_whatsapp)}) → প্রাপক: ${escapeHtml(g.recipient_name)}</div>
              <div class="text-ivory/65 font-mono">Txn: ${escapeHtml(g.transaction_id)} | ₹${g.amount_inr}${g.gift_code ? ` | Code: <strong class="text-emerald-300">${escapeHtml(g.gift_code)}</strong> ${g.is_redeemed ? '(রিডিম সম্পন্ন)' : '(অব্যবহৃত)'}` : ''}</div>
            </div>
            <div class="flex items-center gap-2">
              ${g.status === 'pending' ? `
                <button onclick="adminApproveGiftOrder('${g.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-semibold">অ্যাপ্রুভ ও কোড তৈরি</button>
                <button onclick="adminRejectGiftOrder('${g.id}')" class="px-2.5 py-1.5 rounded-lg bg-red-600/25 text-red-200">বাতিল</button>
              ` : g.status === 'approved' && g.gift_code ? `
                <button onclick="adminSendGiftCodeToBuyerWA('${g.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600/25 border border-emerald-400/40 text-emerald-200 hover:bg-emerald-600 hover:text-white">ক্রেতাকে WhatsApp-এ কোড পাঠান</button>
              ` : `<span class="text-red-300 uppercase text-[10px]">${g.status}</span>`}
            </div>
          </div>
        `).join('') || '<p class="text-xs text-ivory/50">কোনো গিফট অর্ডার নেই।</p>'}
      </div>

      <!-- D. REFERRAL & WALLET SETTINGS + PENDING BONUS PAYOUTS -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-sm text-amber-300">৪. রেফারেল ও ওয়ালেট ক্রেডিট সেটিংস</h3>
          <div class="flex items-center gap-4 text-xs">
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input id="adm-ref-en" type="checkbox" ${cfg.referral_enabled !== false ? 'checked' : ''} class="accent-amber-400" />
              <span>রেফারেল চালু</span>
            </label>
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input id="adm-gift-en" type="checkbox" ${cfg.gift_ebook_enabled !== false ? 'checked' : ''} class="accent-amber-400" />
              <span>ই-বুক গিফট চালু</span>
            </label>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div>
            <label class="text-[11px] text-ivory/65">বন্ধুর ডিসকাউন্ট (%)</label>
            <input id="adm-ref-pct" type="number" value="${Number(cfg.referral_friend_discount_pct ?? 10)}" class="w-full mt-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory font-mono" />
          </div>
          <div>
            <label class="text-[11px] text-ivory/65">রেফারার ওয়ালেট বোনাস (₹)</label>
            <input id="adm-ref-rew" type="number" value="${Number(cfg.referral_referrer_reward_inr ?? 20)}" class="w-full mt-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory font-mono" />
          </div>
          <div class="flex items-end">
            <button onclick="adminSaveReferralSettings()" class="w-full py-2 rounded-xl bg-antiqueGold text-midnight font-semibold">সেটিংস সেভ করুন</button>
          </div>
        </div>

        <!-- Pending E-Book Referral Rewards -->
        ${window._adminPhase2Cache.pendingEbookRefRewards.length ? `
          <div class="pt-2 border-t border-ivory/10 space-y-2 text-xs">
            <div class="font-semibold text-emerald-300">অ্যাপ্রুভড ই-বুক অর্ডারের বাকি রেফারেল বোনাস:</div>
            ${window._adminPhase2Cache.pendingEbookRefRewards.map((o) => `
              <div class="p-2.5 rounded-xl bg-emerald-950/35 border border-emerald-500/35 flex flex-wrap items-center justify-between gap-2">
                <span>ক্রেতা: <strong>${escapeHtml(o.buyer_name)}</strong> (${escapeHtml(o.ebooks?.title || 'E-Book')}) • রেফারেল কোড: <strong class="font-mono text-antiqueGold">${escapeHtml(o.referral_code_used)}</strong></span>
                <button onclick="adminPayoutEbookReferral('${o.id}', '${escapeHtml(o.referral_code_used)}', '${escapeHtml(o.buyer_name)}')" class="px-3 py-1 rounded-lg bg-emerald-600 text-white font-semibold">₹${Number(cfg.referral_referrer_reward_inr ?? 20)} বোনাস দিন</button>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Manual Wallet Adjustment -->
        <div class="pt-2 border-t border-ivory/10 space-y-2 text-xs">
          <div class="text-ivory/80 font-semibold">ম্যানুয়াল ওয়ালেট ক্রেডিট / ডিডাক্ট (রেফারেল কোড দিয়ে):</div>
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <input id="adm-wal-code" placeholder="রেফারেল কোড (KVXXXXXX)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory font-mono uppercase" />
            <input id="adm-wal-amt" type="number" placeholder="টাকা (+50 বা -20)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory font-mono" />
            <input id="adm-wal-note" placeholder="কারণ (যেমন: কনটেস্ট পুরস্কার)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
            <button onclick="adminAdjustWallet()" class="px-3 py-2 rounded-xl bg-deepPurple border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight font-semibold">ওয়ালেট আপডেট</button>
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// Admin Actions for Phase 2
async function adminCreateBundle() {
  const title = (document.getElementById('adm-bn-title')?.value || '').trim();
  const cover_image_url = (document.getElementById('adm-bn-cover')?.value || '').trim();
  const original_price_inr = Number(document.getElementById('adm-bn-orig')?.value || 0);
  const bundle_price_inr = Number(document.getElementById('adm-bn-price')?.value || 0);
  const description = (document.getElementById('adm-bn-desc')?.value || '').trim();
  const includes_voice_gift = document.getElementById('adm-bn-voice')?.checked || false;
  const voice_package_label = (document.getElementById('adm-bn-vlabel')?.value || '').trim();
  const ebook_ids = Array.from(document.querySelectorAll('.adm-bn-eb-chk:checked')).map((el) => el.value);

  if (!title || bundle_price_inr <= 0 || (!ebook_ids.length && !includes_voice_gift)) {
    return showToast('কম্বো নাম, অফার দাম এবং অন্তত ১টি ই-বুক বা ভয়েস গিফট সিলেক্ট করুন।', 'error');
  }

  const { error } = await sb.from('store_bundles').insert({
    title, description, cover_image_url, ebook_ids, includes_voice_gift, voice_package_label,
    original_price_inr: original_price_inr || bundle_price_inr, bundle_price_inr, is_active: true
  });

  if (error) return showToast('কম্বো তৈরি ব্যর্থ: ' + error.message, 'error');
  showToast('নতুন কম্বো প্যাক তৈরি হয়েছে!', 'success');
  await loadPhase2PublicData();
  loadAdminPhase2Panel();
}

async function adminToggleBundle(id, nextState) {
  const { error } = await sb.from('store_bundles').update({ is_active: nextState }).eq('id', id);
  if (error) return showToast(error.message, 'error');
  await loadPhase2PublicData();
  loadAdminPhase2Panel();
}

async function adminDeleteBundle(id) {
  const { error } = await sb.from('store_bundles').delete().eq('id', id);
  if (error) return showToast(error.message, 'error');
  showToast('কম্বো প্যাক মুছে ফেলা হয়েছে।', 'success');
  await loadPhase2PublicData();
  loadAdminPhase2Panel();
}

async function adminApproveBundleOrder(orderId) {
  const o = (window._adminPhase2Cache?.bundleOrders || []).find((x) => x.id === orderId);
  if (!o) return;

  const { error } = await sb.from('bundle_orders').update({ status: 'approved' }).eq('id', orderId);
  if (error) return showToast('অ্যাপ্রুভ ব্যর্থ: ' + error.message, 'error');

  // Bundle-er sob E-Book user-er jonno auto-unlock (ebook_orders-e approved entry)
  const ebookIds = o.store_bundles?.ebook_ids || [];
  for (const ebId of ebookIds) {
    const { data: existing } = await sb
      .from('ebook_orders')
      .select('id')
      .eq('user_id', o.user_id)
      .eq('ebook_id', ebId)
      .eq('status', 'approved')
      .maybeSingle();

    if (!existing) {
      await sb.from('ebook_orders').insert({
        user_id: o.user_id,
        ebook_id: ebId,
        buyer_name: o.buyer_name,
        buyer_email: o.buyer_email,
        whatsapp_number: o.whatsapp_number,
        transaction_id: 'BUNDLE-' + o.transaction_id,
        final_amount_inr: 0,
        status: 'approved'
      });
    }
  }

  // Referral code thakle referrer-ke auto wallet bonus dewa
  if (o.referral_code_used && !o.referral_rewarded) {
    const { data: rRes } = await sb.rpc('reward_referrer_for_code', {
      p_code: o.referral_code_used,
      p_buyer_name: o.buyer_name
    });
    if (rRes?.ok) {
      await sb.from('bundle_orders').update({ referral_rewarded: true }).eq('id', orderId);
    }
  }

  showToast('কম্বো অ্যাপ্রুভ হয়েছে এবং সব ই-বুক ইউজারের জন্য আনলক হয়েছে!', 'success');
  loadAdminPhase2Panel();
}

async function adminRejectBundleOrder(orderId) {
  const { error } = await sb.from('bundle_orders').update({ status: 'rejected' }).eq('id', orderId);
  if (error) return showToast(error.message, 'error');
  showToast('কম্বো অর্ডার বাতিল করা হয়েছে।', 'info');
  loadAdminPhase2Panel();
}

async function adminApproveGiftOrder(giftId) {
  const code = 'KV-GIFT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
  const { error } = await sb
    .from('ebook_gifts')
    .update({ status: 'approved', gift_code: code })
    .eq('id', giftId);

  if (error) return showToast('গিফট অ্যাপ্রুভ ব্যর্থ: ' + error.message, 'error');
  showToast(`গিফট অ্যাপ্রুভ হয়েছে! ইউনিক কোড: ${code}`, 'success');
  loadAdminPhase2Panel();
}

async function adminRejectGiftOrder(giftId) {
  const { error } = await sb.from('ebook_gifts').update({ status: 'rejected' }).eq('id', giftId);
  if (error) return showToast(error.message, 'error');
  showToast('গিফট অর্ডার বাতিল করা হয়েছে।', 'info');
  loadAdminPhase2Panel();
}

function adminSendGiftCodeToBuyerWA(giftId) {
  const g = (window._adminPhase2Cache?.gifts || []).find((x) => x.id === giftId);
  if (!g || !g.gift_code) return;
  const wa = typeof formatIndianWA === 'function' ? formatIndianWA(g.buyer_whatsapp) : '';
  const msg = `নমস্কার ${g.buyer_name},\n\n${g.recipient_name}-এর জন্য আপনার "${g.ebooks?.title || 'ই-বুক'}" গিফট অর্ডারটি অ্যাপ্রুভ হয়েছে! 🎉\n\n*গিফট রিডিম কোড:* ${g.gift_code}\n\nএই কোডটি প্রিয়জনকে পাঠিয়ে দিন। KothaVerse Store → "গিফট ও রেফারেল" ট্যাবে কোডটি দিলেই বইটি আনলক হয়ে যাবে।`;
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

async function adminSaveReferralSettings() {
  const payload = {
    referral_enabled: document.getElementById('adm-ref-en')?.checked ?? true,
    gift_ebook_enabled: document.getElementById('adm-gift-en')?.checked ?? true,
    referral_friend_discount_pct: Math.max(0, Number(document.getElementById('adm-ref-pct')?.value || 10)),
    referral_referrer_reward_inr: Math.max(0, Number(document.getElementById('adm-ref-rew')?.value || 20))
  };

  const { error } = await sb.from('store_settings').update(payload).eq('id', 1);
  if (error) return showToast('সেভ ব্যর্থ: ' + error.message, 'error');

  state.storeSettings = { ...(state.storeSettings || {}), ...payload };
  showToast('রেফারেল ও গিফট সেটিংস আপডেট হয়েছে!', 'success');
}

async function adminPayoutEbookReferral(orderId, refCode, buyerName) {
  const { data, error } = await sb.rpc('reward_referrer_for_code', {
    p_code: refCode,
    p_buyer_name: buyerName
  });
  if (error || !data?.ok) return showToast(data?.msg || error?.message || 'বোনাস দেওয়া ব্যর্থ।', 'error');

  await sb.from('ebook_orders').update({ referral_rewarded: true }).eq('id', orderId);
  showToast(`রেফারারের ওয়ালেটে ₹${data.reward_inr} বোনাস জমা হয়েছে!`, 'success');
  loadAdminPhase2Panel();
}

async function adminAdjustWallet() {
  const code = (document.getElementById('adm-wal-code')?.value || '').trim().toUpperCase();
  const amt = Number(document.getElementById('adm-wal-amt')?.value || 0);
  const note = (document.getElementById('adm-wal-note')?.value || '').trim();
  if (!code || !amt) return showToast('সঠিক রেফারেল কোড ও টাকার পরিমাণ দিন।', 'error');

  const { data, error } = await sb.rpc('admin_adjust_wallet_by_code', {
    p_ref_code: code,
    p_amount: amt,
    p_note: note
  });
  if (error || !data?.ok) return showToast(data?.msg || error?.message || 'আপডেট ব্যর্থ।', 'error');

  showToast('ইউজারের ওয়ালেট ব্যালেন্স আপডেট হয়েছে!', 'success');
  document.getElementById('adm-wal-amt').value = '';
  document.getElementById('adm-wal-note').value = '';
}
// =========================================================================
// GLOBAL UPI & QR CODE ENGINE (DB-SYNCED FOR ALL ORDERS)
// =========================================================================
async function loadStoreSettingsFromDB() {
  const { data, error } = await sb
    .from('store_settings')
    .select('*')
    .eq('id', 1)
    .maybeSingle();

  if (!error && data) {
    state.storeSettings = { ...(state.storeSettings || {}), ...data };
  }
}

// Reusable QR Box (Newsletter ba onno jekono payment page-e 1 line-e bosanor jonno)
function renderUniversalUpiQrBox(amountLabel = '') {
  const cfg = state.storeSettings || {};
  const upiId = cfg.upi_id || 'kothaverse@upi';
  const upiName = cfg.upi_name || 'KothaVerse';
  const qrUrl = cfg.qr_image_url || '';

  return `
    <div class="p-4 rounded-2xl bg-deepPurple/45 border border-antiqueGold/30 text-xs font-bengali flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="space-y-1.5 text-center sm:text-left">
        <div class="text-antiqueGold font-semibold">UPI পেমেন্ট তথ্য (${escapeHtml(upiName)})</div>
        <div>
          UPI ID: <strong class="font-mono text-ivory">${escapeHtml(upiId)}</strong>
          <button type="button" onclick="copyTextToClipboard('${escapeHtml(upiId)}')" class="ml-1.5 px-2 py-0.5 rounded bg-midnight text-antiqueGold text-[10px] border border-antiqueGold/30">কপি</button>
        </div>
        ${amountLabel ? `<div>প্রদেয় পরিমাণ: <strong class="text-base text-antiqueGold font-mono">${escapeHtml(amountLabel)}</strong></div>` : ''}
        <div class="text-[11px] text-ivory/65">QR কোড স্ক্যান করে বা UPI ID-তে পেমেন্ট করে Transaction ID দিন।</div>
      </div>
      ${qrUrl ? `
        <div class="shrink-0 text-center space-y-1">
          <img src="${escapeHtml(qrUrl)}" alt="KothaVerse UPI QR" class="w-32 h-32 rounded-xl border-2 border-antiqueGold/50 bg-white p-1.5 object-contain mx-auto shadow-gold" />
          <div class="text-[10px] text-antiqueGold/85">স্ক্যান করে পেমেন্ট করুন</div>
        </div>
      ` : ''}
    </div>
  `;
}

// Admin Panel: UPI ID + QR Upload -> Direct Supabase Database Save
function loadAdminUpiQrManager(containerId = 'admin-upi-qr-controls') {
  const box = document.getElementById(containerId);
  if (!box || state.profile?.role !== 'admin') return;

  const cfg = state.storeSettings || {};
  window._draftQrImageData = cfg.qr_image_url || '';

  box.innerHTML = `
    <div class="mb-6 p-4 sm:p-5 rounded-2xl bg-midnight/75 border border-antiqueGold/35 space-y-4 font-bengali">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 class="text-base font-bold text-antiqueGold flex items-center gap-2">
            <i data-lucide="qr-code" class="w-5 h-5"></i> গ্লোবাল UPI ও পেমেন্ট QR কোড ম্যানেজার
          </h3>
          <p class="text-[11px] text-ivory/65 mt-0.5">এখানে QR কোড আপলোড করে সেভ করলেই E-Book, Voice, Combo, Gift ও Newsletter—সব পেমেন্ট স্ক্রিনে একসাথে দেখাবে।</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div class="md:col-span-8 space-y-3 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label class="text-[11px] text-ivory/70">UPI ID*</label>
              <input id="adm-qr-upi-id" type="text" value="${escapeHtml(cfg.upi_id || '')}" placeholder="yourname@okaxis" class="w-full mt-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory font-mono" />
            </div>
            <div>
              <label class="text-[11px] text-ivory/70">প্রাপকের নাম (UPI Name)</label>
              <input id="adm-qr-upi-name" type="text" value="${escapeHtml(cfg.upi_name || 'KothaVerse')}" placeholder="KothaVerse" class="w-full mt-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
            </div>
          </div>

          <div>
            <label class="text-[11px] text-ivory/70">QR কোডের ছবি আপলোড করুন (ফোন বা ল্যাপটপ থেকে):</label>
            <input id="adm-qr-file" type="file" accept="image/*" onchange="adminHandleQrFileUpload(event)" class="w-full mt-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-antiqueGold file:text-midnight file:font-semibold cursor-pointer" />
          </div>

          <div>
            <label class="text-[11px] text-ivory/70">অথবা ছবির সরাসরি লিংক দিন (ঐচ্ছিক):</label>
            <input id="adm-qr-url" type="url" value="${cfg.qr_image_url && !cfg.qr_image_url.startsWith('data:') ? escapeHtml(cfg.qr_image_url) : ''}" oninput="adminPreviewQrFromUrl(this.value)" placeholder="https://..." class="w-full mt-1 px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          </div>

          <div class="flex flex-wrap gap-2 pt-1">
            <button type="button" onclick="adminSaveUpiQrToDB()" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold hover:opacity-90 transition">
              ডাটাবেজে QR ও UPI সেভ করুন
            </button>
            <button type="button" onclick="adminRemoveQrCode()" class="px-3.5 py-2 rounded-xl bg-red-600/20 border border-red-400/35 text-red-200 hover:bg-red-600 hover:text-white transition">
              QR মুছুন
            </button>
          </div>
        </div>

        <div class="md:col-span-4 flex flex-col items-center justify-center p-4 rounded-2xl bg-deepPurple/35 border border-antiqueGold/25">
          <div class="text-[11px] text-antiqueGold mb-2 font-semibold">লাইভ QR প্রিভিউ</div>
          <img id="adm-qr-preview" src="${escapeHtml(cfg.qr_image_url || '')}" alt="QR Preview" class="${cfg.qr_image_url ? '' : 'hidden'} w-36 h-36 rounded-xl bg-white p-1.5 object-contain border border-antiqueGold/40" />
          <div id="adm-qr-empty" class="${cfg.qr_image_url ? 'hidden' : ''} text-[11px] text-ivory/50 text-center py-8">কোনো QR কোড সেট করা নেই</div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

function adminHandleQrFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      // Compress & resize to crisp 450x450 max so DB saves instantly
      const maxDim = 450;
      let w = img.width;
      let h = img.height;
      if (w > maxDim || h > maxDim) {
        const ratio = Math.min(maxDim / w, maxDim / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
      }

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);

      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.92);
      window._draftQrImageData = compressedDataUrl;

      const prev = document.getElementById('adm-qr-preview');
      const empty = document.getElementById('adm-qr-empty');
      if (prev) { prev.src = compressedDataUrl; prev.classList.remove('hidden'); }
      if (empty) empty.classList.add('hidden');
      showToast('QR ছবি লোড হয়েছে—এবার "ডাটাবেজে QR ও UPI সেভ করুন" বাটনে ক্লিক করুন।', 'info');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function adminPreviewQrFromUrl(url) {
  const clean = String(url || '').trim();
  window._draftQrImageData = clean;
  const prev = document.getElementById('adm-qr-preview');
  const empty = document.getElementById('adm-qr-empty');
  if (clean) {
    if (prev) { prev.src = clean; prev.classList.remove('hidden'); }
    if (empty) empty.classList.add('hidden');
  } else {
    if (prev) prev.classList.add('hidden');
    if (empty) empty.classList.remove('hidden');
  }
}

async function adminSaveUpiQrToDB() {
  const upi_id = (document.getElementById('adm-qr-upi-id')?.value || '').trim();
  const upi_name = (document.getElementById('adm-qr-upi-name')?.value || 'KothaVerse').trim();
  const qr_image_url = window._draftQrImageData || '';

  if (!upi_id) return showToast('দয়া করে সঠিক UPI ID লিখুন।', 'error');

  const { error } = await sb
    .from('store_settings')
    .upsert({ id: 1, upi_id, upi_name, qr_image_url }, { onConflict: 'id' });

  if (error) return showToast('সেভ ব্যর্থ: ' + error.message, 'error');

  state.storeSettings = { ...(state.storeSettings || {}), upi_id, upi_name, qr_image_url };
  showToast('QR কোড ও UPI তথ্য ডাটাবেজে সেভ হয়েছে! এখন সব অর্ডারে দেখাবে।', 'success');
}

async function adminRemoveQrCode() {
  window._draftQrImageData = '';
  const { error } = await sb.from('store_settings').update({ qr_image_url: '' }).eq('id', 1);
  if (error) return showToast(error.message, 'error');
  if (state.storeSettings) state.storeSettings.qr_image_url = '';
  showToast('QR কোড সরানো হয়েছে।', 'info');
  loadAdminUpiQrManager();
}
// =========================================================================
// OPTION 2: 0% FEE GATEWAY-STYLE UPI POPUP (BACK = AUTO CANCEL)
// =========================================================================
let _kvPaySession = null;
let _kvPayTimerId = null;
let _kvPayPushedHistory = false;
let _kvPayIgnorePop = false;

window.addEventListener('popstate', () => {
  if (_kvPayIgnorePop) {
    _kvPayIgnorePop = false;
    return;
  }
  if (_kvPaySession) {
    _kvPayPushedHistory = false; // Browser back already popped the state
    closeUpiGatewayPopup(false, 'ব্যাক বাটন চাপায় পেমেন্ট বাতিল করা হয়েছে।');
  }
});

async function openUpiGatewayPopup({ title, subtitle = '', amount = 0, note = 'KothaVerse Order', onSuccess, onCancel }) {
  const finalAmount = Math.max(0, Math.round(Number(amount || 0)));

  if (finalAmount <= 0) {
    if (typeof onSuccess === 'function') {
      onSuccess('FREE-' + Date.now().toString().slice(-6));
    }
    return;
  }

  // Sob somoy DB theke latest UPI ID, Banking Name ar QR fetch kore neya
  if (typeof loadStoreSettingsFromDB === 'function') {
    await loadStoreSettingsFromDB();
  }

  const cfg = state.storeSettings || {};
  const upiId = String(cfg.upi_id || '').replace(/\s+/g, '');
  const upiName = String(cfg.upi_name || 'KothaVerse').trim();

  if (!upiId || upiId === 'kothaverse@upi') {
    showToast('Admin Panel theke sothik UPI ID save kora nei!', 'error');
    return;
  }

  // UPI App (GPay/PhonePe/Paytm) jate Banking Name thik fetch kore tar jonno ASCII-only pn & tn
  const safePn = upiName.replace(/[^a-zA-Z0-9 ._-]/g, '').trim() || 'KothaVerse';
  const safeTn = String(note || 'KothaVerse Order').replace(/[^a-zA-Z0-9 ._-]/g, '').trim().slice(0, 35) || 'KothaVerse Order';

  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(safePn)}&am=${finalAmount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(safeTn)}`;

  const autoQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=6&data=${encodeURIComponent(upiDeepLink)}`;
  const primaryQrUrl = cfg.qr_image_url || autoQrUrl;

  let modal = document.getElementById('kv-upi-gateway-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kv-upi-gateway-modal';
    modal.className = 'fixed inset-0 z-[110] bg-black/85 backdrop-blur-md hidden items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modal);
  }

  _kvPaySession = { onSuccess, onCancel, amount: finalAmount, submitted: false };

  try {
    history.pushState({ kvUpiGateway: true }, '', window.location.href);
    _kvPayPushedHistory = true;
  } catch (e) {
    _kvPayPushedHistory = false;
  }

  modal.innerHTML = `
    <div class="w-full max-w-md rounded-3xl bg-midnight border border-antiqueGold/45 shadow-card overflow-hidden font-bengali my-auto fade-in">
      <!-- Gateway Top Header -->
      <div class="px-5 py-4 bg-gradient-to-r from-deepPurple via-midnight to-deepPurple border-b border-antiqueGold/25 flex items-center justify-between gap-3">
        <div>
          <div class="text-[10px] uppercase tracking-widest text-antiqueGold font-semibold flex items-center gap-1.5">
            <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> KothaVerse Secure UPI Pay
          </div>
          <h3 class="text-sm sm:text-base font-bold text-ivory mt-0.5 line-clamp-1">${escapeHtml(title)}</h3>
          ${subtitle ? `<p class="text-[11px] text-ivory/65 line-clamp-1">${escapeHtml(subtitle)}</p>` : ''}
        </div>
        <div class="text-right shrink-0">
          <div class="text-xl font-mono font-bold text-antiqueGold">₹${finalAmount}</div>
          <div id="kv-gw-timer" class="text-[11px] font-mono text-amber-300">05:00</div>
        </div>
      </div>

      <!-- Gateway Body -->
      <div id="kv-gw-body" class="p-5 space-y-4">
        <!-- QR Code & Banking Name Box -->
        <div class="p-4 rounded-2xl bg-deepPurple/35 border border-antiqueGold/25 flex flex-col items-center text-center space-y-2.5">
          <img id="kv-gw-qr-img" src="${escapeHtml(primaryQrUrl)}" alt="KothaVerse UPI QR" class="w-44 h-44 rounded-2xl bg-white p-2 object-contain border-2 border-antiqueGold/50 shadow-gold" />
          <div class="text-xs text-ivory/90">
            যেকোনো UPI অ্যাপ দিয়ে স্ক্যান করে ঠিক <strong class="text-antiqueGold font-mono">₹${finalAmount}</strong> পেমেন্ট করুন
          </div>
          <div class="text-xs text-emerald-300 font-semibold">
            Banking Name: ${escapeHtml(upiName)}
          </div>
          <div class="flex flex-wrap items-center justify-center gap-2 text-[11px]">
            <span class="px-2.5 py-1 rounded-lg bg-midnight border border-antiqueGold/25 font-mono text-ivory/90">${escapeHtml(upiId)}</span>
            <button type="button" onclick="copyTextToClipboard('${escapeHtml(upiId)}')" class="px-2.5 py-1 rounded-lg bg-antiqueGold/20 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight font-semibold transition">কপি</button>
          </div>
          <a href="${upiDeepLink}" class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition">
            <i data-lucide="smartphone" class="w-4 h-4"></i> সরাসরি UPI অ্যাপে পে করুন (GPay / PhonePe / Paytm)
          </a>
        </div>

        <!-- UTR Verification Form -->
        <form onsubmit="handleGatewayPaymentConfirm(event)" class="space-y-3">
          <div>
            <label class="block text-[11px] text-ivory/80 mb-1">পেমেন্ট সম্পন্ন হলে ১২ সংখ্যার UPI Transaction ID / UTR দিন:</label>
            <input id="kv-gw-utr" required minlength="8" autocomplete="off" placeholder="যেমন: 432198765432" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/35 text-sm text-ivory font-mono focus:border-antiqueGold outline-none" />
          </div>
          <div class="text-[11px] text-ivory/65 leading-relaxed bg-midnight/60 px-3 py-2 rounded-xl border border-antiqueGold/15">
            পেমেন্ট নিশ্চিত করার মাধ্যমে আপনি আমাদের
            <button type="button" onclick="openKvStorePolicyModal('privacy')" class="text-antiqueGold underline hover:text-amber-300 font-semibold">Privacy Policy</button>
            এবং
            <button type="button" onclick="openKvStorePolicyModal('refund')" class="text-antiqueGold underline hover:text-amber-300 font-semibold">Refund Policy</button>-তে সম্মতি দিচ্ছেন।
          </div>
          <div class="flex gap-2.5 pt-1">
            <button type="button" onclick="closeUpiGatewayPopup(false, 'আপনি পেমেন্ট বাতিল করেছেন।')" class="px-4 py-3 rounded-xl bg-red-600/20 border border-red-400/35 text-red-200 hover:bg-red-600 hover:text-white text-xs font-semibold transition">
              বাতিল করুন
            </button>
            <button id="kv-gw-submit-btn" type="submit" class="flex-1 py-3 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold hover:opacity-95 transition">
              পেমেন্ট সম্পন্ন — নিশ্চিত করুন
            </button>
            
          </div>
        </form>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();

  startUpiGatewayTimer(300);
}
function startUpiGatewayTimer(seconds) {
  if (_kvPayTimerId) clearInterval(_kvPayTimerId);
  let remaining = seconds;

  const tick = () => {
    const el = document.getElementById('kv-gw-timer');
    if (!el || !_kvPaySession) return clearInterval(_kvPayTimerId);

    const m = String(Math.floor(remaining / 60)).padStart(2, '0');
    const s = String(remaining % 60).padStart(2, '0');
    el.textContent = `${m}:${s}`;

    if (remaining <= 0) {
      clearInterval(_kvPayTimerId);
      closeUpiGatewayPopup(false, 'সময় শেষ! পেমেন্ট বাতিল করা হয়েছে।');
      return;
    }
    remaining--;
  };

  tick();
  _kvPayTimerId = setInterval(tick, 1000);
}

async function handleGatewayPaymentConfirm(e) {
  e.preventDefault();
  if (!_kvPaySession || _kvPaySession.submitted) return;

  const utr = (document.getElementById('kv-gw-utr')?.value || '').trim();
  if (utr.length < 8) {
    return showToast('দয়া করে সঠিক UPI Transaction ID / UTR লিখুন।', 'error');
  }

  _kvPaySession.submitted = true;
  if (_kvPayTimerId) clearInterval(_kvPayTimerId);

  const body = document.getElementById('kv-gw-body');
  if (body) {
    body.innerHTML = `
      <div class="py-10 text-center space-y-3">
        <div class="w-12 h-12 rounded-full border-4 border-antiqueGold/30 border-t-antiqueGold animate-spin mx-auto"></div>
        <div class="text-sm font-bold text-antiqueGold">পেমেন্ট তথ্য যাচাই ও সংরক্ষণ হচ্ছে...</div>
        <div class="text-xs text-ivory/65 font-mono">UTR: ${escapeHtml(utr)}</div>
      </div>
    `;
  }

  const session = _kvPaySession;

  try {
    if (typeof session.onSuccess === 'function') {
      await session.onSuccess(utr);
    }

    if (body) {
      body.innerHTML = `
        <div class="py-10 text-center space-y-2.5">
          <div class="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto text-2xl">✓</div>
          <div class="text-base font-bold text-emerald-300">অর্ডার সফলভাবে গৃহীত হয়েছে!</div>
          <div class="text-xs text-ivory/70">পপ-আপ স্বয়ংক্রিয়ভাবে বন্ধ হচ্ছে...</div>
        </div>
      `;
    }

    setTimeout(() => closeUpiGatewayPopup(true), 1200);
  } catch (err) {
    _kvPaySession.submitted = false;
    closeUpiGatewayPopup(false, 'অর্ডার সংরক্ষণে ত্রুটি: ' + (err?.message || 'আবার চেষ্টা করুন'));
  }
}

function closeUpiGatewayPopup(isSuccess = false, cancelMessage = '') {
  if (_kvPayTimerId) {
    clearInterval(_kvPayTimerId);
    _kvPayTimerId = null;
  }

  const modal = document.getElementById('kv-upi-gateway-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  const session = _kvPaySession;
  _kvPaySession = null;

  // Clean up pushed browser history state silently
  if (_kvPayPushedHistory) {
    _kvPayPushedHistory = false;
    _kvPayIgnorePop = true;
    try { history.back(); } catch (e) {}
    setTimeout(() => { _kvPayIgnorePop = false; }, 350);
  }

  if (!isSuccess) {
    if (cancelMessage) showToast(cancelMessage, 'error');
    if (session && typeof session.onCancel === 'function') {
      session.onCancel();
    }
  }
}
// =========================================================================
// PHASE 3: LIVE ORDER TRACKING, BRANDED INVOICE PDF & VERIFIED REVIEWS
// =========================================================================
window.kvPhase3 = {
  reviews: []
};

const KV_TRACK_STEPS = [
  { key: 'submitted', label: 'পেমেন্ট জমা', icon: 'receipt' },
  { key: 'verified', label: 'যাচাই সম্পন্ন', icon: 'shield-check' },
  { key: 'preparing', label: 'প্রস্তুত হচ্ছে', icon: 'sparkles' },
  { key: 'delivered', label: 'ডেলিভারি সম্পন্ন', icon: 'check-circle-2' }
];

async function loadPhase3PublicData() {
  const { data } = await sb
    .from('store_reviews')
    .select('*')
    .eq('is_visible', true)
    .order('created_at', { ascending: false });
  window.kvPhase3.reviews = data || [];
}

function resolveOrderStage(order, orderType) {
  if (!order) return 'submitted';
  if (order.status === 'rejected' || order.tracking_stage === 'rejected') return 'rejected';
  if (order.tracking_stage && ['submitted', 'verified', 'preparing', 'delivered'].includes(order.tracking_stage)) {
    return order.tracking_stage;
  }
  if (orderType === 'voice') {
    if (order.delivery_audio_url) return 'delivered';
    if (order.status === 'approved') return 'preparing';
    return 'submitted';
  }
  return order.status === 'approved' ? 'delivered' : 'submitted';
}

function isOrderInvoiceReady(order, orderType) {
  const st = resolveOrderStage(order, orderType);
  return order.status === 'approved' || ['verified', 'preparing', 'delivered'].includes(st);
}

// -------------------------------------------------------------------------
// 1. LIVE ORDER TRACKING TIMELINE UI
// -------------------------------------------------------------------------
function renderOrderTimelineBar(order, orderType) {
  const stage = resolveOrderStage(order, orderType);

  if (stage === 'rejected') {
    return `
      <div class="p-3 rounded-xl bg-red-950/45 border border-red-500/40 text-xs text-red-200 font-bengali">
        <strong>অর্ডার বাতিল হয়েছে:</strong> ${escapeHtml(order.tracking_note || 'পেমেন্ট যাচাই করা যায়নি। প্রয়োজনে সাপোর্টে যোগাযোগ করুন।')}
      </div>
    `;
  }

  const activeIdx = Math.max(0, KV_TRACK_STEPS.findIndex((s) => s.key === stage));
  const prepLabel = orderType === 'voice' ? 'রেকর্ডিং চলছে' : 'PDF প্রস্তুত';

  return `
    <div class="space-y-2 pt-1">
      <div class="grid grid-cols-4 gap-1.5 sm:gap-2">
        ${KV_TRACK_STEPS.map((st, idx) => {
          const done = idx <= activeIdx;
          const isCurrent = idx === activeIdx;
          const lbl = st.key === 'preparing' ? prepLabel : st.label;
          return `
            <div class="flex flex-col items-center text-center gap-1">
              <div class="w-full h-1.5 rounded-full ${done ? 'bg-antiqueGold' : 'bg-ivory/15'}"></div>
              <div class="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${isCurrent ? 'bg-antiqueGold text-midnight border-antiqueGold shadow-gold' : done ? 'bg-emerald-500/25 text-emerald-300 border-emerald-400/50' : 'bg-midnight text-ivory/40 border-ivory/15'}">
                ${done ? '✓' : idx + 1}
              </div>
              <span class="text-[10px] leading-tight ${done ? 'text-ivory font-semibold' : 'text-ivory/45'}">${lbl}</span>
            </div>
          `;
        }).join('')}
      </div>
      ${order.tracking_note ? `
        <div class="text-[11px] px-3 py-1.5 rounded-lg bg-deepPurple/45 border border-antiqueGold/20 text-amber-200">
          <strong>আপডেট:</strong> ${escapeHtml(order.tracking_note)}
        </div>
      ` : ''}
    </div>
  `;
}

function renderStoreMyOrdersTab() {
  if (!state.user) {
    return `
      <div class="glass-panel rounded-3xl p-10 text-center space-y-4 font-bengali border border-antiqueGold/25">
        <i data-lucide="package-search" class="w-10 h-10 text-antiqueGold mx-auto"></i>
        <h3 class="text-xl font-bold text-ivory">আপনার অর্ডার ট্র্যাকিং ও ইনভয়েস</h3>
        <p class="text-xs text-ivory/70">লাইভ অর্ডার স্ট্যাটাস দেখতে এবং UPI রসিদ PDF ডাউনলোড করতে লগইন করুন।</p>
        <button onclick="openAuthModal('login')" class="px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs shadow-gold">লগইন করুন</button>
      </div>
    `;
  }

  const ebOrders = (state.myEbookOrders || []).map((o) => {
    const book = (state.ebooks || []).find((b) => b.id === o.ebook_id);
    return {
      ...o,
      _type: 'ebook',
      _typeLabel: 'ই-বুক',
      _title: book?.title || 'KothaVerse ই-বুক',
      _targetId: o.ebook_id,
      _paidAmount: o.final_amount_inr ?? book?.price_inr ?? 0
    };
  });

  const vcOrders = (state.myVoiceOrders || []).map((o) => ({
    ...o,
    _type: 'voice',
    _typeLabel: 'কাস্টম ভয়েস গিফট',
    _title: `${o.receiver_name}-এর জন্য ${o.package_name}`,
    _targetId: 'voice_dedication',
    _paidAmount: o.final_amount_inr ?? o.amount_inr ?? 0
  }));

  const bnOrders = (window.kvPhase2?.myBundleOrders || []).map((o) => ({
    ...o,
    _type: 'bundle',
    _typeLabel: 'কম্বো প্যাক',
    _title: o.store_bundles?.title || 'KothaVerse কম্বো প্যাক',
    _targetId: o.bundle_id,
    _paidAmount: o.final_amount_inr ?? o.store_bundles?.bundle_price_inr ?? 0
  }));

  const allOrders = [...ebOrders, ...vcOrders, ...bnOrders]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  if (!allOrders.length) {
    return `
      <div class="glass-panel rounded-3xl p-10 text-center text-sm text-ivory/60 font-bengali border border-antiqueGold/20">
        আপনার এখনও কোনো স্টোর অর্ডার নেই। ই-বুক, কম্বো বা ভয়েস গিফট অর্ডার করলে এখানে লাইভ ট্র্যাক করতে পারবেন।
      </div>
    `;
  }

  const reviewsOn = state.storeSettings?.reviews_enabled !== false;

  return `
    <div class="space-y-4 font-bengali">
      ${allOrders.map((o) => {
        const ready = isOrderInvoiceReady(o, o._type);
        const dateStr = new Date(o.created_at).toLocaleDateString('bn-IN', { day: 'numeric', month: 'short', year: 'numeric' });

        return `
          <div class="glass-panel rounded-2xl p-5 border border-antiqueGold/25 space-y-4">
            <div class="flex flex-wrap items-start justify-between gap-3">
              <div class="space-y-1">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] bg-antiqueGold/15 border border-antiqueGold/35 text-antiqueGold font-semibold">${o._typeLabel}</span>
                  <span class="text-[11px] text-ivory/55">${dateStr}</span>
                  <span class="text-[11px] font-mono text-ivory/60">UTR: ${escapeHtml(o.transaction_id || 'N/A')}</span>
                </div>
                <h3 class="text-base sm:text-lg font-bold text-ivory">${escapeHtml(o._title)}</h3>
                <div class="text-xs text-ivory/70">
                  প্রদেয় মূল্য: <strong class="text-antiqueGold font-mono">₹${o._paidAmount}</strong>
                  ${o.coupon_code ? ` • কুপন: <span class="text-emerald-300 font-mono">${escapeHtml(o.coupon_code)}</span>` : ''}
                  ${o.wallet_used_inr ? ` • ওয়ালেট: ₹${o.wallet_used_inr}` : ''}
                </div>
              </div>

              <div class="flex flex-wrap gap-2 text-xs">
                ${ready ? `
                  <button onclick="downloadOrderInvoicePDF('${o._type}', '${o.id}')" class="px-3.5 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold flex items-center gap-1.5 shadow-gold hover:opacity-90 transition">
                    <i data-lucide="file-text" class="w-3.5 h-3.5"></i> Invoice PDF
                  </button>
                ` : `
                  <span class="px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-400/35 text-amber-200 text-[11px]">যাচাই হলে রসিদ আনলক হবে</span>
                `}

                ${ready && reviewsOn && o._targetId ? `
                  <button onclick="openProductReviewsModal('${o._type}', '${o._targetId}')" class="px-3.5 py-2 rounded-xl bg-deepPurple border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight font-semibold flex items-center gap-1.5 transition">
                    <i data-lucide="star" class="w-3.5 h-3.5"></i> রিভিউ দিন
                  </button>
                ` : ''}
              </div>
            </div>

            ${renderOrderTimelineBar(o, o._type)}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// -------------------------------------------------------------------------
// 2. BRANDED INVOICE PDF GENERATOR (High-DPI Canvas -> pdf-lib PDF)
// -------------------------------------------------------------------------
function findOrderForInvoice(orderType, orderId) {
  if (orderType === 'ebook') {
    const o = (state.myEbookOrders || []).find((x) => x.id === orderId)
      || (window._adminPhase3Cache?.ebookOrders || []).find((x) => x.id === orderId);
    if (!o) return null;
    const book = (state.ebooks || []).find((b) => b.id === o.ebook_id);
    const title = o.ebooks?.title || book?.title || 'KothaVerse E-Book';
    const base = Number(o.ebooks?.price_inr ?? book?.price_inr ?? o.final_amount_inr ?? 0);
    return {
      invoiceNo: 'KV-EB-' + String(o.id).slice(0, 6).toUpperCase(),
      date: o.created_at,
      buyerName: o.buyer_name || state.profile?.full_name || 'KothaVerse Reader',
      buyerContact: o.whatsapp_number || o.buyer_email || '',
      itemType: 'Digital E-Book',
      itemTitle: title,
      basePrice: base,
      addonsTotal: 0,
      discount: Number(o.discount_inr || 0),
      walletUsed: Number(o.wallet_used_inr || 0),
      couponCode: o.coupon_code || '',
      finalPaid: Number(o.final_amount_inr ?? base),
      utr: o.transaction_id || 'VERIFIED'
    };
  }

  if (orderType === 'voice') {
    const o = (state.myVoiceOrders || []).find((x) => x.id === orderId)
      || (window._adminPhase3Cache?.voiceOrders || []).find((x) => x.id === orderId);
    if (!o) return null;
    return {
      invoiceNo: 'KV-VC-' + String(o.id).slice(0, 6).toUpperCase(),
      date: o.created_at,
      buyerName: o.sender_name || state.profile?.full_name || 'KothaVerse Customer',
      buyerContact: o.whatsapp_number || '',
      itemType: 'Custom Voice Dedication',
      itemTitle: `${o.package_name} (For ${o.receiver_name})`,
      basePrice: Number(o.amount_inr || 0),
      addonsTotal: Number(o.addons_total_inr || 0),
      discount: Number(o.discount_inr || 0),
      walletUsed: 0,
      couponCode: o.coupon_code || '',
      finalPaid: Number(o.final_amount_inr ?? o.amount_inr ?? 0),
      utr: o.transaction_id || 'VERIFIED'
    };
  }

  if (orderType === 'bundle') {
    const o = (window.kvPhase2?.myBundleOrders || []).find((x) => x.id === orderId)
      || (window._adminPhase3Cache?.bundleOrders || []).find((x) => x.id === orderId);
    if (!o) return null;
    const base = Number(o.store_bundles?.bundle_price_inr ?? o.final_amount_inr ?? 0);
    return {
      invoiceNo: 'KV-BN-' + String(o.id).slice(0, 6).toUpperCase(),
      date: o.created_at,
      buyerName: o.buyer_name || state.profile?.full_name || 'KothaVerse Reader',
      buyerContact: o.whatsapp_number || o.buyer_email || '',
      itemType: 'Combo / Bundle Pack',
      itemTitle: o.store_bundles?.title || 'KothaVerse Combo Pack',
      basePrice: base,
      addonsTotal: 0,
      discount: Number(o.discount_inr || 0),
      walletUsed: Number(o.wallet_used_inr || 0),
      couponCode: o.referral_code_used || '',
      finalPaid: Number(o.final_amount_inr ?? base),
      utr: o.transaction_id || 'VERIFIED'
    };
  }
  return null;
}

// =========================================================================
// LUXURY GLASSMORPHISM INVOICE PDF (PURPLE + GOLD + WHITE + LOGO + SEAL)
// =========================================================================
function _kvRoundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function _kvWrapLines(ctx, text, maxWidth, maxLines = 2) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width <= maxWidth) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
      if (lines.length === maxLines - 1) break;
    }
  }
  if (current) lines.push(current);
  if (lines.length > maxLines) lines.length = maxLines;
  return lines.length ? lines : [''];
}

async function _kvLoadSafeLogo(logoUrl) {
  if (!logoUrl) return null;
  try {
    const resp = await fetch(logoUrl, { mode: 'cors' });
    if (!resp.ok) return null;
    const blob = await resp.blob();
    const objUrl = URL.createObjectURL(blob);
    return await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(objUrl);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(objUrl);
        resolve(null);
      };
      img.src = objUrl;
    });
  } catch (e) {
    return null;
  }
}

function _kvDrawLuxuryPaidSeal(ctx, cx, cy) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(-0.22); // Stylish official stamp tilt

  // Soft outer golden-emerald glow
  ctx.shadowColor = 'rgba(16, 185, 129, 0.28)';
  ctx.shadowBlur = 24;

  // 1. Scalloped outer metallic gold seal ring
  const spikes = 32;
  const outerR = 112;
  const innerR = 102;
  ctx.beginPath();
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (i * Math.PI) / spikes;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  const sealGrad = ctx.createLinearGradient(-110, -110, 110, 110);
  sealGrad.addColorStop(0, '#065f46');
  sealGrad.addColorStop(0.5, '#059669');
  sealGrad.addColorStop(1, '#047857');
  ctx.fillStyle = sealGrad;
  ctx.fill();

  ctx.shadowBlur = 0;
  ctx.lineWidth = 3.5;
  ctx.strokeStyle = '#f3d27a';
  ctx.stroke();

  // 2. Inner dashed gold ring
  ctx.beginPath();
  ctx.arc(0, 0, 88, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(243, 210, 122, 0.9)';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([7, 5]);
  ctx.stroke();
  ctx.setLineDash([]);

  // 3. Inner deep royal purple core circle
  ctx.beginPath();
  ctx.arc(0, 0, 76, 0, Math.PI * 2);
  const coreGrad = ctx.createRadialGradient(-20, -20, 8, 0, 0, 76);
  coreGrad.addColorStop(0, '#3b1d70');
  coreGrad.addColorStop(1, '#160b2e');
  ctx.fillStyle = coreGrad;
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#d4af37';
  ctx.stroke();

  // 4. Top & bottom luxury text + stars
  ctx.fillStyle = '#f3d27a';
  ctx.textAlign = 'center';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('★  UPI VERIFIED  ★', 0, -34);

  // 5. Center PAID Ribbon Bar
  ctx.fillStyle = '#10b981';
  _kvRoundRect(ctx, -64, -22, 128, 44, 10);
  ctx.fill();
  ctx.strokeStyle = '#fef3c7';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px Georgia, serif';
  ctx.fillText('PAID ✓', 0, 10);

  // 6. Bottom seal text
  ctx.fillStyle = '#fde68a';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('KOTHAVERSE OFFICIAL', 0, 44);

  ctx.restore();
}

async function downloadOrderInvoicePDF(orderType, orderId) {
  const inv = findOrderForInvoice(orderType, orderId);
  if (!inv) return showToast('ইনভয়েস তথ্য পাওয়া যায়নি।', 'error');

  const cfg = state.storeSettings || {};
  const siteCfg = typeof getSiteSettings === 'function' ? getSiteSettings() : {};
  const tagline = cfg.invoice_brand_tagline || siteCfg.tagline || 'শব্দের পরিপাটে, মনের আলাপন';
  const support = cfg.invoice_support_contact || 'support@kothaverse.in';
  const upiId = cfg.upi_id || 'kothaverse@upi';
  const dateFmt = new Date(inv.date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  // Auto-detect logo: Admin setting -> Site setting -> Navbar img -> fallback 'logo.png'
  const domLogoSrc = document.querySelector('header img[src*="logo" i], nav img[src*="logo" i], img[alt*="KothaVerse" i]')?.src || '';
  const logoCandidate = cfg.invoice_logo_url || siteCfg.logoUrl || domLogoSrc || '20261121_192551.png';

  showToast('প্রিমিয়াম ব্র্যান্ডেড Invoice PDF তৈরি হচ্ছে...', 'info');

  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    const logoImg = await _kvLoadSafeLogo(logoCandidate);

    // Exact A4 Aspect Ratio (150 DPI Crisp Print)
    const W = 1240;
    const H = 1754;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    // =====================================================================
    // 1. CREAMY GOLDEN-WHITE BACKGROUND + AMBIENT PURPLE & GOLD GLOW ORBS
    // =====================================================================
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, '#fdfbf7');
    bgGrad.addColorStop(0.5, '#faf5ec');
    bgGrad.addColorStop(1, '#f4ecff');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Ambient Radial Blobs (Makes the glassmorphism panels pop)
    const drawOrb = (x, y, r, color) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, color);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    };
    drawOrb(180, 260, 420, 'rgba(109, 40, 217, 0.14)');
    drawOrb(1080, 380, 460, 'rgba(212, 175, 55, 0.18)');
    drawOrb(220, 1280, 440, 'rgba(212, 175, 55, 0.15)');
    drawOrb(1020, 1480, 480, 'rgba(88, 28, 135, 0.16)');

    // Outer Luxury Double Gold Border
    ctx.strokeStyle = 'rgba(200, 158, 58, 0.65)';
    ctx.lineWidth = 4;
    _kvRoundRect(ctx, 30, 30, W - 60, H - 60, 26);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(91, 33, 182, 0.22)';
    ctx.lineWidth = 1.5;
    _kvRoundRect(ctx, 42, 42, W - 84, H - 84, 20);
    ctx.stroke();

    // Subtle Center Diagonal Watermark
    ctx.save();
    ctx.translate(W / 2, H / 2 + 60);
    ctx.rotate(-0.42);
    ctx.textAlign = 'center';
    ctx.fillStyle = 'rgba(91, 33, 182, 0.04)';
    ctx.font = 'bold 135px Georgia, serif';
    ctx.fillText('KothaVerse', 0, 0);
    ctx.restore();

    // =====================================================================
    // 2. ROYAL PURPLE + GOLD GLASSMORPHISM HERO HEADER WITH LOGO
    // =====================================================================
    const hX = 72;
    const hY = 74;
    const hW = W - 144;
    const hH = 265;

    ctx.save();
    ctx.shadowColor = 'rgba(30, 14, 62, 0.24)';
    ctx.shadowBlur = 32;
    ctx.shadowOffsetY = 14;
    _kvRoundRect(ctx, hX, hY, hW, hH, 28);
    const hdrGrad = ctx.createLinearGradient(hX, hY, hX + hW, hY + hH);
    hdrGrad.addColorStop(0, '#180c30');
    hdrGrad.addColorStop(0.55, '#2f155c');
    hdrGrad.addColorStop(1, '#1b1038');
    ctx.fillStyle = hdrGrad;
    ctx.fill();
    ctx.restore();

    // Glass Shine Overlay on Header
    ctx.save();
    _kvRoundRect(ctx, hX, hY, hW, hH, 28);
    ctx.clip();
    const shineGrad = ctx.createLinearGradient(hX, hY, hX + 460, hY + hH);
    shineGrad.addColorStop(0, 'rgba(255, 255, 255, 0.14)');
    shineGrad.addColorStop(0.45, 'rgba(255, 255, 255, 0.03)');
    shineGrad.addColorStop(1, 'rgba(212, 175, 55, 0.12)');
    ctx.fillStyle = shineGrad;
    ctx.fillRect(hX, hY, hW, hH);

    // Subtle decorative gold light arc
    ctx.beginPath();
    ctx.arc(hX + hW - 90, hY + 30, 210, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(243, 210, 122, 0.09)';
    ctx.fill();
    ctx.restore();

    // Header Metallic Gold Border
    const goldStroke = ctx.createLinearGradient(hX, hY, hX + hW, hY);
    goldStroke.addColorStop(0, '#f6e09a');
    goldStroke.addColorStop(0.5, '#c9972e');
    goldStroke.addColorStop(1, '#f6e09a');
    ctx.strokeStyle = goldStroke;
    ctx.lineWidth = 3;
    _kvRoundRect(ctx, hX, hY, hW, hH, 28);
    ctx.stroke();

    // Logo Container (Left Side of Header)
    const logoCx = hX + 106;
    const logoCy = hY + hH / 2;
    const logoR = 64;

    ctx.save();
    ctx.beginPath();
    ctx.arc(logoCx, logoCy, logoR + 5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(243, 210, 122, 0.18)';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#f3d27a';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(logoCx, logoCy, logoR, 0, Math.PI * 2);
    ctx.clip();

    if (logoImg) {
      // Fill soft backing then draw uploaded/site logo cleanly
      ctx.fillStyle = '#140a28';
      ctx.fillRect(logoCx - logoR, logoCy - logoR, logoR * 2, logoR * 2);
      const scale = Math.min((logoR * 2) / logoImg.width, (logoR * 2) / logoImg.height);
      const dw = logoImg.width * scale;
      const dh = logoImg.height * scale;
      ctx.drawImage(logoImg, logoCx - dw / 2, logoCy - dh / 2, dw, dh);
    } else {
      // Fallback Royal Golden KV Monogram Crest
      const crestGrad = ctx.createLinearGradient(logoCx - logoR, logoCy - logoR, logoCx + logoR, logoCy + logoR);
      crestGrad.addColorStop(0, '#3f1e78');
      crestGrad.addColorStop(1, '#120824');
      ctx.fillStyle = crestGrad;
      ctx.fillRect(logoCx - logoR, logoCy - logoR, logoR * 2, logoR * 2);
      ctx.fillStyle = '#f3d27a';
      ctx.textAlign = 'center';
      ctx.font = 'bold 52px Georgia, serif';
      ctx.fillText('KV', logoCx, logoCy + 18);
    }
    ctx.restore();

    // Brand Title + Tagline
    const brandX = hX + 198;
    const goldTextGrad = ctx.createLinearGradient(brandX, hY + 60, brandX, hY + 130);
    goldTextGrad.addColorStop(0, '#fff4cc');
    goldTextGrad.addColorStop(0.5, '#f0c75e');
    goldTextGrad.addColorStop(1, '#c89228');

    ctx.textAlign = 'left';
    ctx.fillStyle = goldTextGrad;
    ctx.font = 'bold 58px Georgia, serif';
    ctx.fillText('KothaVerse', brandX, hY + 116);

    ctx.fillStyle = '#f5f0e6';
    ctx.font = '24px "Noto Sans Bengali", sans-serif';
    ctx.fillText(tagline, brandX, hY + 160);

    // Glass Pill: OFFICIAL PAYMENT RECEIPT
    ctx.fillStyle = 'rgba(243, 210, 122, 0.16)';
    _kvRoundRect(ctx, brandX, hY + 182, 315, 36, 18);
    ctx.fill();
    ctx.strokeStyle = 'rgba(243, 210, 122, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#f8e3a3';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('✦  OFFICIAL UPI RECEIPT', brandX + 20, hY + 206);

    // Header Right: Invoice Meta Glass Card
    const metaW = 290;
    const metaX = hX + hW - metaW - 32;
    const metaY = hY + 48;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.09)';
    _kvRoundRect(ctx, metaX, metaY, metaW, 168, 20);
    ctx.fill();
    ctx.strokeStyle = 'rgba(243, 210, 122, 0.38)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.textAlign = 'right';
    ctx.fillStyle = '#d4b8ff';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('INVOICE NUMBER', metaX + metaW - 24, metaY + 38);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 25px monospace';
    ctx.fillText(inv.invoiceNo, metaX + metaW - 24, metaY + 72);

    ctx.fillStyle = '#d4b8ff';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText('ISSUE DATE', metaX + metaW - 24, metaY + 112);

    ctx.fillStyle = '#f6e09a';
    ctx.font = 'bold 22px sans-serif';
    ctx.fillText(dateFmt, metaX + metaW - 24, metaY + 144);

    // =====================================================================
    // 3. FROSTED GLASS INFO CARDS (BILLED TO + PAYMENT DETAILS)
    // =====================================================================
    const drawGlassCard = (x, y, w, h) => {
      ctx.save();
      ctx.shadowColor = 'rgba(47, 21, 92, 0.09)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 10;
      _kvRoundRect(ctx, x, y, w, h, 22);
      const g = ctx.createLinearGradient(x, y, x + w, y + h);
      g.addColorStop(0, 'rgba(255, 255, 255, 0.86)');
      g.addColorStop(1, 'rgba(252, 248, 240, 0.68)');
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = 'rgba(205, 164, 62, 0.45)';
      ctx.lineWidth = 2;
      _kvRoundRect(ctx, x, y, w, h, 22);
      ctx.stroke();
    };

    const cardY = 382;
    const cardH = 205;
    const cardGap = 28;
    const cardW = (hW - cardGap) / 2;

    drawGlassCard(hX, cardY, cardW, cardH);
    drawGlassCard(hX + cardW + cardGap, cardY, cardW, cardH);

    // Left Card Content: BILLED TO
    ctx.textAlign = 'left';
    ctx.fillStyle = '#6d28d9';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('BILLED TO', hX + 30, cardY + 42);

    ctx.fillStyle = '#c8972c';
    ctx.fillRect(hX + 30, cardY + 54, 48, 3);

    ctx.fillStyle = '#1a1033';
    ctx.font = 'bold 30px "Noto Sans Bengali", sans-serif';
    ctx.fillText(String(inv.buyerName).slice(0, 28), hX + 30, cardY + 105);

    ctx.fillStyle = '#4c3f6e';
    ctx.font = '22px sans-serif';
    ctx.fillText(`Contact: ${String(inv.buyerContact || 'Registered Reader').slice(0, 32)}`, hX + 30, cardY + 146);

    ctx.fillStyle = '#8b6d24';
    ctx.font = '19px "Noto Sans Bengali", sans-serif';
    ctx.fillText('ভেরিফায়েড KothaVerse পাঠক', hX + 30, cardY + 180);

    // Right Card Content: PAYMENT DETAILS
    const rX = hX + cardW + cardGap;
    ctx.fillStyle = '#6d28d9';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('PAYMENT DETAILS', rX + 30, cardY + 42);

    ctx.fillStyle = '#c8972c';
    ctx.fillRect(rX + 30, cardY + 54, 48, 3);

    ctx.fillStyle = '#1a1033';
    ctx.font = 'bold 23px monospace';
    ctx.fillText(`UTR: ${String(inv.utr).slice(0, 24)}`, rX + 30, cardY + 104);

    ctx.fillStyle = '#4c3f6e';
    ctx.font = '21px sans-serif';
    ctx.fillText(`UPI ID: ${String(upiId).slice(0, 30)}`, rX + 30, cardY + 144);

    ctx.fillStyle = '#059669';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('●  Status: Verified & Settled', rX + 30, cardY + 180);

    // =====================================================================
    // 4. GLASSMORPHISM ITEMIZED BILLING TABLE
    // =====================================================================
    const tblY = 630;
    const tblH = 540;
    drawGlassCard(hX, tblY, hW, tblH);

    // Table Header Bar (Royal Purple Gradient)
    ctx.save();
    _kvRoundRect(ctx, hX, tblY, hW, 74, 22);
    ctx.clip();
    const tblHdrGrad = ctx.createLinearGradient(hX, tblY, hX + hW, tblY);
    tblHdrGrad.addColorStop(0, '#221045');
    tblHdrGrad.addColorStop(1, '#3b1c73');
    ctx.fillStyle = tblHdrGrad;
    ctx.fillRect(hX, tblY, hW, 74);
    ctx.restore();

    // Flatten bottom corners of table header subtly
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(hX + 2, tblY + 72, hW - 4, 3);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#f6e09a';
    ctx.font = 'bold 21px sans-serif';
    ctx.fillText('ITEM DESCRIPTION', hX + 34, tblY + 46);

    ctx.textAlign = 'right';
    ctx.fillText('AMOUNT (INR)', hX + hW - 34, tblY + 46);

    // Build Rows
    const rows = [
      {
        title: inv.itemTitle,
        sub: inv.itemType,
        val: `₹${inv.basePrice}`,
        bold: true,
        color: '#1a1033'
      }
    ];
    if (inv.addonsTotal > 0) {
      rows.push({
        title: 'Custom Voice Dedication Add-ons',
        sub: 'Extra selected upgrades',
        val: `+₹${inv.addonsTotal}`,
        bold: false,
        color: '#2c1e4a'
      });
    }
    if (inv.discount > 0) {
      rows.push({
        title: `Promo / Referral Discount${inv.couponCode ? ` (${inv.couponCode})` : ''}`,
        sub: 'Instant Store Offer Applied',
        val: `-₹${inv.discount}`,
        bold: true,
        color: '#047857'
      });
    }
    if (inv.walletUsed > 0) {
      rows.push({
        title: 'KothaVerse Wallet Credit',
        sub: 'Redeemed from reader wallet',
        val: `-₹${inv.walletUsed}`,
        bold: true,
        color: '#047857'
      });
    }

    let rowY = tblY + 124;
    rows.forEach((r, idx) => {
      if (idx % 2 === 1) {
        ctx.fillStyle = 'rgba(109, 40, 217, 0.045)';
        ctx.fillRect(hX + 18, rowY - 38, hW - 36, 86);
      }

      ctx.textAlign = 'left';
      ctx.fillStyle = r.color;
      ctx.font = `${r.bold ? 'bold ' : ''}25px "Noto Sans Bengali", sans-serif`;
      const wrapped = _kvWrapLines(ctx, r.title, hW - 280, 2);
      wrapped.forEach((line, li) => {
        ctx.fillText(line, hX + 34, rowY + li * 30);
      });

      const subOffset = wrapped.length > 1 ? 58 : 30;
      ctx.fillStyle = '#736591';
      ctx.font = '18px sans-serif';
      ctx.fillText(r.sub, hX + 34, rowY + subOffset);

      ctx.textAlign = 'right';
      ctx.fillStyle = r.color;
      ctx.font = 'bold 28px "Noto Sans Bengali", monospace';
      ctx.fillText(r.val, hX + hW - 34, rowY + 8);

      // Divider line
      ctx.strokeStyle = 'rgba(200, 158, 58, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(hX + 30, rowY + subOffset + 22);
      ctx.lineTo(hX + hW - 30, rowY + subOffset + 22);
      ctx.stroke();

      rowY += subOffset + 58;
    });

    // =====================================================================
    // 5. TOTAL PAID ROYAL PURPLE BAR + LUXURY PAID SEAL
    // =====================================================================
    const totY = tblY + tblH + 34;
    const totH = 114;

    ctx.save();
    ctx.shadowColor = 'rgba(34, 16, 69, 0.22)';
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 10;
    _kvRoundRect(ctx, hX, totY, hW, totH, 24);
    const totGrad = ctx.createLinearGradient(hX, totY, hX + hW, totY + totH);
    totGrad.addColorStop(0, '#180c30');
    totGrad.addColorStop(0.6, '#331766');
    totGrad.addColorStop(1, '#1e0e3d');
    ctx.fillStyle = totGrad;
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = goldStroke;
    ctx.lineWidth = 3;
    _kvRoundRect(ctx, hX, totY, hW, totH, 24);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#d8c5ff';
    ctx.font = 'bold 17px sans-serif';
    ctx.fillText('TOTAL AMOUNT SETTLED VIA UPI', hX + 36, totY + 42);

    ctx.fillStyle = '#ffffff';
    ctx.font = '22px "Noto Sans Bengali", sans-serif';
    ctx.fillText('সর্বমোট পরিশোধিত মূল্য (সকল ছাড় সমন্বিত)', hX + 36, totY + 80);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#f6d87c';
    ctx.font = 'bold 48px "Noto Sans Bengali", monospace';
    ctx.fillText(`₹${inv.finalPaid}`, hX + hW - 36, totY + 74);

    // Best-Level Luxury Paid Seal Stamp (Placed cleanly below Total Bar, right side)
    _kvDrawLuxuryPaidSeal(ctx, hX + hW - 145, totY + totH + 135);

    // Left Signature / Verification Note beside Seal
    const noteY = totY + totH + 78;
    ctx.textAlign = 'left';
    ctx.fillStyle = '#2f155c';
    ctx.font = 'bold 24px "Noto Sans Bengali", sans-serif';
    ctx.fillText('KothaVerse-এর পাশে থাকার জন্য আন্তরিক ধন্যবাদ!', hX + 12, noteY);

    ctx.fillStyle = '#5b4e78';
    ctx.font = '20px "Noto Sans Bengali", sans-serif';
    ctx.fillText('এই রসিদটি ডিজিটালভাবে যাচাইকৃত এবং সম্পূর্ণ বৈধ।', hX + 12, noteY + 38);
    ctx.fillText('অর্ডার সংক্রান্ত যেকোনো সহায়তার জন্য নিচের ঠিকানায় যোগাযোগ করুন।', hX + 12, noteY + 72);

    // =====================================================================
    // 6. BOTTOM GLASS FOOTER STRIP
    // =====================================================================
    const ftY = H - 152;
    drawGlassCard(hX, ftY, hW, 74);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#2b1654';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(`Support: ${support}`, hX + 30, ftY + 45);

    ctx.textAlign = 'right';
    ctx.fillStyle = '#9a711b';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText(window.location.origin.replace(/^https?:\/\//, ''), hX + hW - 30, ftY + 45);

    const pngDataUrl = canvas.toDataURL('image/png', 1.0);

    // Export as genuine A4 PDF via pdf-lib
    if (window.PDFLib) {
      const pdfDoc = await window.PDFLib.PDFDocument.create();
      const pngBytes = await fetch(pngDataUrl).then((r) => r.arrayBuffer());
      const pngImg = await pdfDoc.embedPng(pngBytes);
      const page = pdfDoc.addPage([595.28, 841.89]);
      page.drawImage(pngImg, {
        x: 0,
        y: 0,
        width: 595.28,
        height: 841.89
      });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `KothaVerse-Receipt-${inv.invoiceNo}.pdf`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      showToast('প্রিমিয়াম Invoice PDF ডাউনলোড হয়েছে!', 'success');
    } else {
      const a = document.createElement('a');
      a.href = pngDataUrl;
      a.download = `KothaVerse-Receipt-${inv.invoiceNo}.png`;
      a.click();
    }
  } catch (err) {
    showToast('Invoice তৈরি ব্যর্থ: ' + err.message, 'error');
  }
}

// -------------------------------------------------------------------------
// 3. VERIFIED BUYER REVIEWS (5-STAR RATING BADGE + MODAL)
// -------------------------------------------------------------------------
function getReviewsForTarget(targetType, targetId) {
  return (window.kvPhase3.reviews || []).filter(
    (r) => r.target_type === targetType && String(r.target_id) === String(targetId)
  );
}

function renderProductRatingBadge(targetType, targetId) {
  if (state.storeSettings?.reviews_enabled === false) return '';
  const list = getReviewsForTarget(targetType, targetId);
  const count = list.length;
  const avg = count ? (list.reduce((s, r) => s + Number(r.rating || 0), 0) / count).toFixed(1) : null;

  return `
    <button type="button" onclick="openProductReviewsModal('${targetType}', '${targetId}')" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-midnight/75 border border-antiqueGold/30 text-[11px] font-bengali hover:border-antiqueGold transition">
      <span class="text-amber-400">★</span>
      ${count
        ? `<strong class="text-ivory font-mono">${avg}</strong><span class="text-ivory/65">(${count} ভেরিফায়েড রিভিউ)</span>`
        : `<span class="text-ivory/65">রিভিউ দেখুন</span>`}
    </button>
  `;
}

function userOwnsReviewTarget(targetType, targetId) {
  if (!state.user) return false;
  if (targetType === 'ebook') {
    return (state.myEbookOrders || []).some(
      (o) => String(o.ebook_id) === String(targetId) && isOrderInvoiceReady(o, 'ebook')
    );
  }
  if (targetType === 'voice') {
    return (state.myVoiceOrders || []).some((o) => isOrderInvoiceReady(o, 'voice'));
  }
  if (targetType === 'bundle') {
    return (window.kvPhase2?.myBundleOrders || []).some(
      (o) => String(o.bundle_id) === String(targetId) && isOrderInvoiceReady(o, 'bundle')
    );
  }
  return false;
}

function resolveReviewTargetTitle(targetType, targetId) {
  if (targetType === 'voice') return 'কাস্টম ভয়েস ডেডিকেশন';
  if (targetType === 'ebook') {
    return (state.ebooks || []).find((b) => String(b.id) === String(targetId))?.title || 'ই-বুক';
  }
  if (targetType === 'bundle') {
    return (window.kvPhase2?.bundles || []).find((b) => String(b.id) === String(targetId))?.title || 'কম্বো প্যাক';
  }
  return 'KothaVerse Store';
}

function openProductReviewsModal(targetType, targetId) {
  const title = resolveReviewTargetTitle(targetType, targetId);
  const list = getReviewsForTarget(targetType, targetId);
  const canReview = userOwnsReviewTarget(targetType, targetId);
  const myExisting = state.user ? list.find((r) => r.user_id === state.user.id) : null;

  let modal = document.getElementById('kv-reviews-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kv-reviews-modal';
    modal.className = 'fixed inset-0 z-[95] bg-black/80 backdrop-blur-sm hidden items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modal);
  }

  window._kvReviewRating = myExisting?.rating || 5;

  modal.innerHTML = `
    <div class="w-full max-w-xl max-h-[88vh] flex flex-col rounded-3xl bg-midnight border border-antiqueGold/40 overflow-hidden shadow-card font-bengali my-auto">
      <div class="px-5 py-4 bg-deepPurple/45 border-b border-antiqueGold/20 flex items-center justify-between gap-3">
        <div>
          <span class="text-[10px] uppercase text-emerald-300 font-semibold">✓ Verified Buyer Reviews</span>
          <h3 class="text-base sm:text-lg font-bold text-ivory">${escapeHtml(title)}</h3>
        </div>
        <button onclick="closeDynamicModal('kv-reviews-modal')" class="px-3 py-1 rounded-xl bg-midnight border border-ivory/20 text-xs text-ivory/80">✕</button>
      </div>

      <div class="p-5 overflow-y-auto space-y-5 flex-1">
        ${canReview ? `
          <form onsubmit="handleSubmitVerifiedReview(event, '${targetType}', '${targetId}')" class="p-4 rounded-2xl bg-deepPurple/35 border border-antiqueGold/30 space-y-3 text-xs">
            <div class="font-bold text-antiqueGold">${myExisting ? 'আপনার রিভিউ আপডেট করুন' : 'ভেরিফায়েড ক্রেতা হিসেবে আপনার রিভিউ দিন'}</div>
            <div id="kv-star-picker" class="flex items-center gap-1.5 text-2xl">
              ${[1, 2, 3, 4, 5].map((n) => `
                <button type="button" onclick="setReviewStar(${n})" class="kv-star-btn transition ${n <= window._kvReviewRating ? 'text-amber-400' : 'text-ivory/25'}">★</button>
              `).join('')}
            </div>
            <textarea id="kv-rev-text" rows="3" required placeholder="আপনার অভিজ্ঞতা সংক্ষেপে লিখুন..." class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory">${escapeHtml(myExisting?.review_text || '')}</textarea>
            <button type="submit" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold shadow-gold">রিভিউ প্রকাশ করুন</button>
          </form>
        ` : `
          <div class="p-3 rounded-xl bg-midnight/70 border border-ivory/15 text-[11px] text-ivory/70">
            শুধুমাত্র ভেরিফায়েড ক্রেতারাই (যাঁদের অর্ডার অ্যাপ্রুভ হয়েছে) এখানে ৫-স্টার রিভিউ দিতে পারবেন।
          </div>
        `}

        <div class="space-y-3">
          ${list.map((r) => `
            <div class="p-3.5 rounded-2xl bg-midnight/70 border border-antiqueGold/15 space-y-1.5 text-xs">
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <strong class="text-ivory">${escapeHtml(r.reviewer_name)}</strong>
                  <span class="px-2 py-0.5 rounded-full text-[9px] bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">✓ Verified Buyer</span>
                </div>
                <span class="text-amber-400 tracking-wider">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
              </div>
              <p class="text-ivory/80 leading-relaxed whitespace-pre-line">${escapeHtml(r.review_text)}</p>
              <div class="text-[10px] text-ivory/45">${new Date(r.created_at).toLocaleDateString('bn-IN')}</div>
            </div>
          `).join('') || '<p class="text-xs text-ivory/50 text-center py-6">এখনও কোনো রিভিউ নেই।</p>'}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function setReviewStar(n) {
  window._kvReviewRating = n;
  document.querySelectorAll('.kv-star-btn').forEach((btn, idx) => {
    btn.classList.toggle('text-amber-400', idx < n);
    btn.classList.toggle('text-ivory/25', idx >= n);
  });
}

async function handleSubmitVerifiedReview(e, targetType, targetId) {
  e.preventDefault();
  if (!state.user) return openAuthModal('login');

  const reviewText = (document.getElementById('kv-rev-text')?.value || '').trim();
  const rating = Number(window._kvReviewRating || 5);
  const title = resolveReviewTargetTitle(targetType, targetId);

  const { error } = await sb.from('store_reviews').upsert({
    user_id: state.user.id,
    reviewer_name: state.profile?.full_name || 'KothaVerse পাঠক',
    target_type: targetType,
    target_id: String(targetId),
    target_title: title,
    rating,
    review_text: reviewText,
    is_visible: true
  }, { onConflict: 'user_id,target_type,target_id' });

  if (error) return showToast('রিভিউ জমা ব্যর্থ: ' + error.message, 'error');

  showToast('ধন্যবাদ! আপনার ভেরিফায়েড রিভিউ যুক্ত হয়েছে।', 'success');
  await loadPhase3PublicData();
  openProductReviewsModal(targetType, targetId);
  renderCurrentRoute();
}

// -------------------------------------------------------------------------
// 4. ADMIN PHASE 3 CONTROL PANEL (Tracking, Invoice Branding & Reviews)
// -------------------------------------------------------------------------
async function loadAdminPhase3Panel(containerId = 'admin-phase3-controls') {
  const box = document.getElementById(containerId);
  if (!box || state.profile?.role !== 'admin') return;

  const [ebOrdRes, vcOrdRes, bnOrdRes, revRes] = await Promise.all([
    sb.from('ebook_orders').select('*, ebooks(title, price_inr)').order('created_at', { ascending: false }).limit(25),
    sb.from('voice_dedication_orders').select('*').order('created_at', { ascending: false }).limit(25),
    sb.from('bundle_orders').select('*, store_bundles(title, bundle_price_inr)').order('created_at', { ascending: false }).limit(25),
    sb.from('store_reviews').select('*').order('created_at', { ascending: false })
  ]);

  window._adminPhase3Cache = {
    ebookOrders: ebOrdRes.data || [],
    voiceOrders: vcOrdRes.data || [],
    bundleOrders: bnOrdRes.data || [],
    reviews: revRes.data || []
  };

  const combinedOrders = [
    ...window._adminPhase3Cache.ebookOrders.map((o) => ({ ...o, _type: 'ebook', _label: 'ই-বুক', _title: o.ebooks?.title || 'E-Book', _buyer: o.buyer_name, _wa: o.whatsapp_number })),
    ...window._adminPhase3Cache.voiceOrders.map((o) => ({ ...o, _type: 'voice', _label: 'ভয়েস গিফট', _title: `${o.package_name} → ${o.receiver_name}`, _buyer: o.sender_name, _wa: o.whatsapp_number })),
    ...window._adminPhase3Cache.bundleOrders.map((o) => ({ ...o, _type: 'bundle', _label: 'কম্বো প্যাক', _title: o.store_bundles?.title || 'Bundle', _buyer: o.buyer_name, _wa: o.whatsapp_number }))
  ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 20);

  const cfg = state.storeSettings || {};

  box.innerHTML = `
    <div class="mt-8 pt-6 border-t border-antiqueGold/25 space-y-6 font-bengali">
      <h2 class="text-xl font-bold text-antiqueGold flex items-center gap-2">
        <i data-lucide="truck" class="w-5 h-5"></i> অর্ডার ট্র্যাকিং, ইনভয়েস ব্র্যান্ডিং ও রিভিউ কন্ট্রোল (Phase 3)
      </h2>

      <!-- A. LIVE ORDER TRACKING MANAGER -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <h3 class="font-bold text-sm text-amber-300">১. লাইভ অর্ডার ট্র্যাকিং আপডেট (সর্বশেষ ২০টি অর্ডার)</h3>
        <div class="space-y-2.5">
          ${combinedOrders.map((o) => {
            const st = resolveOrderStage(o, o._type);
            const uid = `${o._type}_${o.id}`;
            return `
              <div class="p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 space-y-2 text-xs">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span class="px-2 py-0.5 rounded bg-midnight text-antiqueGold text-[10px]">${o._label}</span>
                    <strong class="ml-1.5 text-ivory">${escapeHtml(o._title)}</strong>
                    <span class="ml-1.5 text-ivory/65">— ${escapeHtml(o._buyer || '')} (${escapeHtml(o._wa || '')})</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <button onclick="downloadOrderInvoicePDF('${o._type}', '${o.id}')" class="px-2.5 py-1 rounded-lg bg-antiqueGold/20 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight">Invoice PDF</button>
                    ${o._wa ? `<button onclick="adminSendTrackingWA('${o._type}', '${o.id}')" class="px-2.5 py-1 rounded-lg bg-emerald-600/25 border border-emerald-400/40 text-emerald-200 hover:bg-emerald-600 hover:text-white">WA আপডেট</button>` : ''}
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
                  <select id="trk-stage-${uid}" class="sm:col-span-4 px-2.5 py-1.5 rounded-lg bg-midnight border border-antiqueGold/25 text-ivory">
                    <option value="submitted" ${st === 'submitted' ? 'selected' : ''}>১. পেমেন্ট জমা (Submitted)</option>
                    <option value="verified" ${st === 'verified' ? 'selected' : ''}>২. পেমেন্ট যাচাই (Verified)</option>
                    <option value="preparing" ${st === 'preparing' ? 'selected' : ''}>৩. প্রস্তুত / রেকর্ডিং (Preparing)</option>
                    <option value="delivered" ${st === 'delivered' ? 'selected' : ''}>৪. ডেলিভারি সম্পন্ন (Delivered)</option>
                    <option value="rejected" ${st === 'rejected' ? 'selected' : ''}>বাতিল (Rejected)</option>
                  </select>
                  <input id="trk-note-${uid}" type="text" value="${escapeHtml(o.tracking_note || '')}" placeholder="ক্রেতার জন্য সংক্ষিপ্ত নোট (যেমন: আজ রাত ৮টায় অডিও পাবেন)..." class="sm:col-span-6 px-2.5 py-1.5 rounded-lg bg-midnight border border-antiqueGold/25 text-ivory" />
                  <button onclick="adminUpdateOrderTracking('${o._type}', '${o.id}')" class="sm:col-span-2 py-1.5 rounded-lg bg-antiqueGold text-midnight font-semibold hover:opacity-90">আপডেট</button>
                </div>
              </div>
            `;
          }).join('') || '<p class="text-xs text-ivory/50">কোনো অর্ডার পাওয়া যায়নি।</p>'}
        </div>
      </div>

      <!-- B. INVOICE BRANDING & REVIEWS TOGGLE -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="font-bold text-sm text-amber-300">২. ইনভয়েস ব্র্যান্ডিং ও রিভিউ সেটিংস</h3>
          <label class="flex items-center gap-2 text-xs cursor-pointer">
            <input id="adm-rev-en" type="checkbox" ${cfg.reviews_enabled !== false ? 'checked' : ''} class="accent-amber-400" />
            <span>স্টোরে ভেরিফায়েড রিভিউ চালু রাখুন</span>
          </label>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
          <input id="adm-inv-tag" value="${escapeHtml(cfg.invoice_brand_tagline || 'শব্দের পরিপাটে, মনের আলাপন')}" placeholder="ইনভয়েস ট্যাগলাইন" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
          <input id="adm-inv-sup" value="${escapeHtml(cfg.invoice_support_contact || 'support@kothaverse.in')}" placeholder="ইনভয়েস সাপোর্ট কন্টাক্ট (Email / WhatsApp)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 text-ivory" />
        </div>
        <button onclick="adminSavePhase3Settings()" class="px-4 py-2 rounded-xl bg-antiqueGold text-midnight font-semibold text-xs">সেটিংস সেভ করুন</button>
      </div>

      <!-- C. VERIFIED BUYER REVIEWS MODERATION -->
      <div class="p-4 rounded-2xl bg-midnight/65 border border-antiqueGold/25 space-y-2.5">
        <h3 class="font-bold text-sm text-amber-300">৩. ভেরিফায়েড ক্রেতাদের রিভিউ মডারেশন (${window._adminPhase3Cache.reviews.length})</h3>
        ${window._adminPhase3Cache.reviews.map((r) => `
          <div class="p-3 rounded-xl bg-deepPurple/35 border border-antiqueGold/15 flex flex-wrap items-start justify-between gap-3 text-xs">
            <div class="space-y-1 flex-1">
              <div>
                <strong class="text-ivory">${escapeHtml(r.reviewer_name)}</strong>
                <span class="ml-2 text-amber-400">${'★'.repeat(r.rating)}</span>
                <span class="ml-2 text-ivory/55">(${escapeHtml(r.target_title || r.target_type)})</span>
              </div>
              <p class="text-ivory/80">${escapeHtml(r.review_text)}</p>
            </div>
            <div class="flex gap-2 shrink-0">
              <button onclick="adminToggleReviewVisibility('${r.id}', ${!r.is_visible})" class="px-2.5 py-1 rounded-lg ${r.is_visible ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-400/40' : 'bg-ivory/10 text-ivory/60'}">
                ${r.is_visible ? 'দৃশ্যমান' : 'লুকানো'}
              </button>
              <button onclick="adminDeleteStoreReview('${r.id}')" class="px-2.5 py-1 rounded-lg bg-red-600/25 text-red-200 hover:bg-red-600 hover:text-white">মুছুন</button>
            </div>
          </div>
        `).join('') || '<p class="text-xs text-ivory/50">এখনও কোনো রিভিউ আসেনি।</p>'}
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

async function adminUpdateOrderTracking(orderType, orderId) {
  const uid = `${orderType}_${orderId}`;
  const stage = document.getElementById(`trk-stage-${uid}`)?.value || 'submitted';
  const note = (document.getElementById(`trk-note-${uid}`)?.value || '').trim();

  const tableMap = { ebook: 'ebook_orders', voice: 'voice_dedication_orders', bundle: 'bundle_orders' };
  const tableName = tableMap[orderType];
  if (!tableName) return;

  const updateData = { tracking_stage: stage, tracking_note: note };
  if (stage === 'rejected') updateData.status = 'rejected';
  else if (['verified', 'preparing', 'delivered'].includes(stage)) updateData.status = 'approved';

  const { error } = await sb.from(tableName).update(updateData).eq('id', orderId);
  if (error) return showToast('ট্র্যাকিং আপডেট ব্যর্থ: ' + error.message, 'error');

  showToast('অর্ডার ট্র্যাকিং স্ট্যাটাস আপডেট হয়েছে!', 'success');
  loadAdminPhase3Panel();
}

function adminSendTrackingWA(orderType, orderId) {
  const cache = window._adminPhase3Cache || {};
  const list = orderType === 'ebook' ? cache.ebookOrders : orderType === 'voice' ? cache.voiceOrders : cache.bundleOrders;
  const o = (list || []).find((x) => x.id === orderId);
  if (!o) return;

  const wa = typeof formatIndianWA === 'function' ? formatIndianWA(o.whatsapp_number) : '';
  if (!wa) return showToast('WhatsApp নম্বর পাওয়া যায়নি।', 'error');

  const stageNames = {
    submitted: 'পেমেন্ট জমা হয়েছে (যাচাই চলছে)',
    verified: 'পেমেন্ট যাচাই সম্পন্ন হয়েছে ✓',
    preparing: orderType === 'voice' ? 'আপনার কাস্টম ভয়েস রেকর্ডিং চলছে 🎙️' : 'আপনার অর্ডার প্রস্তুত হচ্ছে',
    delivered: 'আপনার অর্ডার ডেলিভারি ও আনলক সম্পন্ন হয়েছে! 🎉',
    rejected: 'দুঃখিত, অর্ডারটি বাতিল করা হয়েছে'
  };

  const st = resolveOrderStage(o, orderType);
  const name = o.buyer_name || o.sender_name || 'পাঠক';
  const msg = `নমস্কার ${name},\n\nKothaVerse-এ আপনার অর্ডারের সর্বশেষ আপডেট:\n*স্ট্যাটাস:* ${stageNames[st] || st}${o.tracking_note ? `\n*বার্তা:* ${o.tracking_note}` : ''}\n\nলাইভ ট্র্যাকিং ও Invoice PDF ডাউনলোড করতে ভিজিট করুন: ${window.location.origin}/#store\n\nশুভেচ্ছান্তে,\nটিম KothaVerse`;

  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
}

async function adminSavePhase3Settings() {
  const payload = {
    reviews_enabled: document.getElementById('adm-rev-en')?.checked ?? true,
    invoice_brand_tagline: (document.getElementById('adm-inv-tag')?.value || '').trim(),
    invoice_support_contact: (document.getElementById('adm-inv-sup')?.value || '').trim()
  };

  const { error } = await sb.from('store_settings').update(payload).eq('id', 1);
  if (error) return showToast('সেভ ব্যর্থ: ' + error.message, 'error');

  state.storeSettings = { ...(state.storeSettings || {}), ...payload };
  showToast('ইনভয়েস ও রিভিউ সেটিংস সেভ হয়েছে!', 'success');
}

async function adminToggleReviewVisibility(id, nextState) {
  const { error } = await sb.from('store_reviews').update({ is_visible: nextState }).eq('id', id);
  if (error) return showToast(error.message, 'error');
  await loadPhase3PublicData();
  loadAdminPhase3Panel();
}

async function adminDeleteStoreReview(id) {
  const { error } = await sb.from('store_reviews').delete().eq('id', id);
  if (error) return showToast(error.message, 'error');
  showToast('রিভিউ মুছে ফেলা হয়েছে।', 'success');
  await loadPhase3PublicData();
  loadAdminPhase3Panel();
}
// =========================================================================
// PAYMENT POPUP: PRIVACY & REFUND POLICY MODAL (STACKED OVER UPI GATEWAY)
// =========================================================================
function openKvStorePolicyModal(activeTab = 'refund') {
  let modal = document.getElementById('kv-policy-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kv-policy-modal';
    modal.className = 'fixed inset-0 z-[120] bg-black/85 backdrop-blur-md hidden items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modal);
  }

  const isRefund = activeTab === 'refund';

  modal.innerHTML = `
    <div class="w-full max-w-lg max-h-[85vh] flex flex-col rounded-3xl bg-midnight border border-antiqueGold/45 shadow-card overflow-hidden font-bengali my-auto fade-in">
      <!-- Header -->
      <div class="px-5 py-4 bg-deepPurple/50 border-b border-antiqueGold/25 flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <i data-lucide="shield-check" class="w-4 h-4 text-antiqueGold"></i>
          <h3 class="text-sm sm:text-base font-bold text-ivory">KothaVerse নীতিমালা</h3>
        </div>
        <button type="button" onclick="closeKvStorePolicyModal()" class="px-3 py-1 rounded-xl bg-midnight border border-ivory/20 text-xs text-ivory/80 hover:border-antiqueGold">✕</button>
      </div>

      <!-- Tab Switcher -->
      <div class="px-5 pt-3 flex gap-2 border-b border-antiqueGold/15 pb-3 text-xs">
        <button type="button" onclick="openKvStorePolicyModal('refund')" class="px-3.5 py-1.5 rounded-xl border transition ${isRefund ? 'bg-antiqueGold text-midnight border-antiqueGold font-bold' : 'bg-midnight/70 border-antiqueGold/25 text-ivory/75'}">
          রিফান্ড ও বাতিলকরণ নীতি
        </button>
        <button type="button" onclick="openKvStorePolicyModal('privacy')" class="px-3.5 py-1.5 rounded-xl border transition ${!isRefund ? 'bg-antiqueGold text-midnight border-antiqueGold font-bold' : 'bg-midnight/70 border-antiqueGold/25 text-ivory/75'}">
          গোপনীয়তা নীতি (Privacy)
        </button>
      </div>

      <!-- Policy Content -->
      <div class="p-5 overflow-y-auto space-y-3 text-xs text-ivory/85 leading-relaxed flex-1">
        ${isRefund ? `
          <div class="p-3.5 rounded-2xl bg-deepPurple/30 border border-antiqueGold/20 space-y-2">
            <h4 class="font-bold text-antiqueGold text-sm">১. ডিজিটাল ই-বুক, কম্বো প্যাক ও গিফট কোড</h4>
            <p>ডিজিটাল প্রোডাক্ট একবার আনলক বা ডেলিভারি হয়ে গেলে তা ফেরতযোগ্য (Non-Refundable) নয়। তবে পেমেন্ট যাচাই হওয়ার ২৪ ঘণ্টার মধ্যে অ্যাক্সেস না পেলে বা ফাইল ত্রুটিপূর্ণ হলে সম্পূর্ণ রিফান্ড বা বিকল্প কপি দেওয়া হবে।</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-deepPurple/30 border border-antiqueGold/20 space-y-2">
            <h4 class="font-bold text-antiqueGold text-sm">২. কাস্টম ভয়েস ডেডিকেশন</h4>
            <p>ভয়েস রেকর্ডিং শুরু হওয়ার আগে অর্ডার বাতিল করলে ১০০% টাকা ফেরত পাবেন। রেকর্ডিং সম্পন্ন হয়ে গেলে অর্ডার বাতিল বা রিফান্ড প্রযোজ্য নয়।</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-deepPurple/30 border border-antiqueGold/20 space-y-2">
            <h4 class="font-bold text-antiqueGold text-sm">৩. ডাবল পেমেন্ট বা ভুল UTR সংক্রান্ত রিফান্ড</h4>
            <p>একই অর্ডারে দুবার টাকা কেটে গেলে বা ভুলবশত অতিরিক্ত পেমেন্ট হলে সঠিক UTR ও স্ক্রিনশটসহ সাপোর্টে যোগাযোগ করলে যাচাই সাপেক্ষে ৩-৫ কার্যদিবসের মধ্যে মূল UPI অ্যাকাউন্টে টাকা ফেরত পাঠানো হবে।</p>
          </div>
        ` : `
          <div class="p-3.5 rounded-2xl bg-deepPurple/30 border border-antiqueGold/20 space-y-2">
            <h4 class="font-bold text-antiqueGold text-sm">১. সংগৃহীত তথ্যের ব্যবহার</h4>
            <p>অর্ডার যাচাই, পাঠকের নামে ওয়াটারমার্কযুক্ত PDF তৈরি এবং WhatsApp বা ইমেইলে ডেলিভারি আপডেট পাঠানোর জন্য কেবল আপনার নাম, যোগাযোগের নম্বর এবং ১২ সংখ্যার UPI UTR সংরক্ষণ করা হয়।</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-deepPurple/30 border border-antiqueGold/20 space-y-2">
            <h4 class="font-bold text-antiqueGold text-sm">২. ব্যাংকিং ও পেমেন্ট নিরাপত্তা</h4>
            <p>KothaVerse কখনোই আপনার UPI PIN, ব্যাংক পাসওয়ার্ড বা কার্ডের গোপন তথ্য চায় না কিংবা সংরক্ষণ করে না। সমস্ত লেনদেন সরাসরি আপনার নিজস্ব UPI অ্যাপের মাধ্যমে সম্পন্ন হয়।</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-deepPurple/30 border border-antiqueGold/20 space-y-2">
            <h4 class="font-bold text-antiqueGold text-sm">৩. তথ্যের গোপনীয়তা</h4>
            <p>আপনার ব্যক্তিগত তথ্য, মোবাইল নম্বর বা অর্ডারের বিবরণ কোনো তৃতীয় পক্ষ বা বিজ্ঞাপন সংস্থার কাছে বিক্রি বা শেয়ার করা হয় না।</p>
          </div>
        `}
      </div>

      <!-- Footer Button -->
      <div class="px-5 py-3.5 bg-midnight border-t border-antiqueGold/20 flex justify-end">
        <button type="button" onclick="closeKvStorePolicyModal()" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold">
          ${document.getElementById('kv-upi-gateway-modal') && !document.getElementById('kv-upi-gateway-modal').classList.contains('hidden') ? 'বুঝেছি, পেমেন্টে ফিরে যান' : 'বুঝেছি, বন্ধ করুন'}
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
}

function closeKvStorePolicyModal() {
  const modal = document.getElementById('kv-policy-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}
// =========================================================================
// PROTECTED VIEW-ONLY PDF READER (NO DOWNLOAD + ANTI-CAPTURE DETERRENTS)
// =========================================================================
let _kvPdfGuardActive = false;

function _kvShowPrivacyCurtain() {
  if (!_kvPdfGuardActive) return;
  const curtain = document.getElementById('pdf-privacy-curtain');
  const container = document.getElementById('pdf-canvas-container');
  if (container) container.style.filter = 'blur(22px)';
  if (curtain) {
    curtain.classList.remove('hidden');
    curtain.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
}

function resumeProtectedPdfView() {
  const curtain = document.getElementById('pdf-privacy-curtain');
  const container = document.getElementById('pdf-canvas-container');
  if (container) container.style.filter = 'none';
  if (curtain) {
    curtain.classList.add('hidden');
    curtain.classList.remove('flex');
  }
}

function _kvPdfKeyGuard(e) {
  if (!_kvPdfGuardActive) return;
  const key = (e.key || '').toLowerCase();

  // PrintScreen detect korle screen blackout + clipboard clear chesta
  if (e.key === 'PrintScreen' || e.keyCode === 44) {
    e.preventDefault();
    _kvShowPrivacyCurtain();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('KothaVerse Protected Content').catch(() => {});
    }
    showToast('এই ই-বুকের স্ক্রিনশট নেওয়া নিষিদ্ধ।', 'error');
    return;
  }

  // Ctrl+S (Save), Ctrl+P (Print), Ctrl+C (Copy), Ctrl+U (Source), F12 / DevTools block
  if (
    (e.ctrlKey || e.metaKey) && ['s', 'p', 'c', 'u'].includes(key) ||
    ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c', 's'].includes(key)) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
    if (key === 's' || key === 'p') {
      showToast('ডাউনলোড ও প্রিন্ট সুবিধা বন্ধ রাখা হয়েছে।', 'error');
    } else {
      _kvShowPrivacyCurtain();
    }
  }
}

function _kvPdfContextGuard(e) {
  if (_kvPdfGuardActive) e.preventDefault();
}

function _kvPdfVisibilityGuard() {
  if (_kvPdfGuardActive && document.hidden) _kvShowPrivacyCurtain();
}

function _kvPdfBlurGuard() {
  if (_kvPdfGuardActive) _kvShowPrivacyCurtain();
}

function enablePdfCaptureGuard() {
  _kvPdfGuardActive = true;
  window.addEventListener('keydown', _kvPdfKeyGuard, true);
  window.addEventListener('keyup', _kvPdfKeyGuard, true);
  document.addEventListener('contextmenu', _kvPdfContextGuard, true);
  document.addEventListener('visibilitychange', _kvPdfVisibilityGuard);
  window.addEventListener('blur', _kvPdfBlurGuard);
}

function disablePdfCaptureGuard() {
  _kvPdfGuardActive = false;
  window.removeEventListener('keydown', _kvPdfKeyGuard, true);
  window.removeEventListener('keyup', _kvPdfKeyGuard, true);
  document.removeEventListener('contextmenu', _kvPdfContextGuard, true);
  document.removeEventListener('visibilitychange', _kvPdfVisibilityGuard);
  window.removeEventListener('blur', _kvPdfBlurGuard);
  resumeProtectedPdfView();
}

async function openProtectedPdfReader({ title = 'ই-বুক রিডার', pdfSource, watermarkText = 'KothaVerse Protected' }) {
  const modal = document.getElementById('pdf-reader-modal');
  const titleEl = document.getElementById('pdf-reader-title');
  const wmInfoEl = document.getElementById('pdf-reader-wm-info');
  const container = document.getElementById('pdf-canvas-container');
  const counterEl = document.getElementById('pdf-page-counter');

  if (!modal || !container) return;

  if (!window.pdfjsLib) {
    showToast('PDF রিডার লোড হয়নি, পেজ রিলোড করে চেষ্টা করুন।', 'error');
    return;
  }

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  titleEl.textContent = title;
  wmInfoEl.textContent = `লাইসেন্সপ্রাপ্ত পাঠক: ${watermarkText} • শুধুমাত্র পড়ার জন্য`;
  counterEl.textContent = 'লোড হচ্ছে...';
  container.innerHTML = `<div class="py-16 text-xs text-ivory/70 font-bengali">সুরক্ষিত বইয়ের পাতা প্রস্তুত হচ্ছে...</div>`;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  enablePdfCaptureGuard();
  if (window.lucide) lucide.createIcons();

  try {
    // pdfSource URL (string) ba Uint8Array duitoi support korbe
    const loadingTask = typeof pdfSource === 'string'
      ? pdfjsLib.getDocument({ url: pdfSource, disableAutoFetch: false })
      : pdfjsLib.getDocument({ data: pdfSource });

    const pdf = await loadingTask.promise;
    const totalPages = pdf.numPages;
    counterEl.textContent = `মোট ${totalPages} পাতা`;
    container.innerHTML = '';

    const maxDisplayWidth = Math.min(container.clientWidth || 720, 760);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const baseViewport = page.getViewport({ scale: 1 });
      const fitScale = maxDisplayWidth / baseViewport.width;
      const viewport = page.getViewport({ scale: fitScale * dpr });

      const pageWrap = document.createElement('div');
      pageWrap.className = 'relative w-full rounded-xl overflow-hidden shadow-card border border-antiqueGold/20 bg-white';

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      canvas.style.display = 'block';
      canvas.oncontextmenu = (e) => e.preventDefault();
      canvas.ondragstart = (e) => e.preventDefault();

      const ctx = canvas.getContext('2d');
      await page.render({ canvasContext: ctx, viewport }).promise;

      // Proti page-er canvas-e diagonal dynamic watermark draw kora
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(-Math.PI / 5);
      ctx.font = `600 ${Math.max(16, Math.round(canvas.width * 0.026))}px sans-serif`;
      ctx.fillStyle = 'rgba(53, 35, 67, 0.14)';
      ctx.textAlign = 'center';
      ctx.fillText(watermarkText, 0, -canvas.height * 0.18);
      ctx.fillText(`KothaVerse • ${watermarkText}`, 0, 0);
      ctx.fillText(`Page ${pageNum} • Do Not Share`, 0, canvas.height * 0.18);
      ctx.restore();

      pageWrap.appendChild(canvas);
      container.appendChild(pageWrap);
    }
  } catch (err) {
    console.error('Protected PDF render error:', err);
    container.innerHTML = `<div class="py-12 text-center text-xs text-red-300 font-bengali">বইটি লোড করা যায়নি। ইন্টারনেট সংযোগ চেক করে আবার চেষ্টা করুন।</div>`;
  }
}

function closePdfReaderModal() {
  disablePdfCaptureGuard();
  const modal = document.getElementById('pdf-reader-modal');
  const container = document.getElementById('pdf-canvas-container');
  if (container) container.innerHTML = '';
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}
// =========================================================================
// PHYSICAL STORE (ADD TO CART) + SEPARATED ORDER TRACKING + ADMIN MANAGER
// =========================================================================
const KV_CART_STORAGE_KEY = 'kv_physical_cart_v1';

const kvPhysicalState = {
  products: [],
  myOrders: [],
  adminOrders: [],
  cart: [],
  activeCategory: 'সব',
  adminSubTab: 'products',
  deliveryFilter: 'all',
  editingProductId: null,
  cartStep: 'cart' // 'cart' | 'checkout'
};

const KV_PRODUCT_CATEGORIES = ['হার্ডকপি বই', 'ডায়েরি ও নোটবুক', 'বুকমার্ক ও ফ্রেম', 'গিফট বক্স', 'অন্যান্য প্রোডাক্ট'];

const KV_DELIVERY_STEPS = [
  { key: 'placed', label: 'অর্ডার প্রাপ্ত' },
  { key: 'confirmed', label: 'নিশ্চিত' },
  { key: 'packed', label: 'প্যাক করা হয়েছে' },
  { key: 'shipped', label: 'শিপড' },
  { key: 'out_for_delivery', label: 'ডেলিভারির পথে' },
  { key: 'delivered', label: 'ডেলিভারি সম্পন্ন' }
];

const KV_COURIERS = ['India Post', 'Delhivery', 'DTDC', 'BlueDart', 'Xpressbees', 'Ecom Express', 'Local Hand Delivery'];

function _kvEsc(str) {
  if (typeof escapeHtml === 'function') return escapeHtml(str ?? '');
  return String(str ?? '').replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function _kvGetEffectivePrice(p) {
  const mrp = Number(p.price || 0);
  const offer = Number(p.offer_price || 0);
  if (offer > 0 && offer < mrp) return offer;
  return mrp;
}

function _kvGetDiscountPercent(p) {
  const mrp = Number(p.price || 0);
  const offer = Number(p.offer_price || 0);
  if (offer > 0 && offer < mrp && mrp > 0) {
    return Math.round(((mrp - offer) / mrp) * 100);
  }
  return 0;
}

// ---------- CART HELPERS (LOCALSTORAGE PERSISTENT) ----------
function loadKvCart() {
  try {
    const raw = localStorage.getItem(KV_CART_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    kvPhysicalState.cart = Array.isArray(parsed) ? parsed : [];
  } catch {
    kvPhysicalState.cart = [];
  }
  return kvPhysicalState.cart;
}

function saveKvCart() {
  try {
    localStorage.setItem(KV_CART_STORAGE_KEY, JSON.stringify(kvPhysicalState.cart));
  } catch {}
}

function getKvCartItemQty(productId) {
  const found = kvPhysicalState.cart.find((c) => c.product_id === productId);
  return found ? Number(found.quantity || 0) : 0;
}

function getKvCartSummary() {
  let itemCount = 0;
  let subtotal = 0;
  let deliveryCharge = 0;
  let allCodAvailable = true;
  const detailed = [];

  for (const entry of kvPhysicalState.cart) {
    const prod = kvPhysicalState.products.find((p) => p.id === entry.product_id);
    if (!prod || !prod.is_active || Number(prod.stock_qty || 0) <= 0) continue;
    const qty = Math.max(1, Math.min(Number(prod.stock_qty), Number(entry.quantity || 1)));
    const unit = _kvGetEffectivePrice(prod);
    const lineTotal = unit * qty;
    itemCount += qty;
    subtotal += lineTotal;
    if (!prod.is_free_delivery && Number(prod.delivery_charge || 0) > deliveryCharge) {
      deliveryCharge = Number(prod.delivery_charge || 0);
    }
    if (!prod.cod_available) allCodAvailable = false;
    detailed.push({ product: prod, quantity: qty, unitPrice: unit, lineTotal });
  }

  return {
    items: detailed,
    itemCount,
    subtotal,
    deliveryCharge,
    grandTotal: subtotal + deliveryCharge,
    allCodAvailable: detailed.length > 0 && allCodAvailable
  };
}

function addToKvCart(productId, containerId = 'kv-physical-store-root', openDrawer = false) {
  loadKvCart();
  const prod = kvPhysicalState.products.find((p) => p.id === productId);
  if (!prod) return;
  const maxStock = Number(prod.stock_qty || 0);
  if (maxStock <= 0) {
    showToast('এই প্রোডাক্টটির স্টক শেষ হয়ে গেছে।', 'error');
    return;
  }

  const idx = kvPhysicalState.cart.findIndex((c) => c.product_id === productId);
  if (idx >= 0) {
    if (kvPhysicalState.cart[idx].quantity >= maxStock) {
      showToast(`সর্বোচ্চ ${maxStock} টি স্টকে আছে।`, 'error');
      return;
    }
    kvPhysicalState.cart[idx].quantity += 1;
  } else {
    kvPhysicalState.cart.push({ product_id: productId, quantity: 1 });
  }

  saveKvCart();
  if (!openDrawer) showToast(`"${prod.title}" কার্টে যোগ হয়েছে!`, 'success');
  renderPhysicalStoreSection(containerId, true);
  if (openDrawer) openKvCartModal('checkout');
}

function updateKvCartQty(productId, delta, containerId = 'kv-physical-store-root', refreshModal = false) {
  loadKvCart();
  const prod = kvPhysicalState.products.find((p) => p.id === productId);
  const maxStock = Number(prod?.stock_qty || 99);
  const idx = kvPhysicalState.cart.findIndex((c) => c.product_id === productId);
  if (idx < 0) return;

  const nextQty = Number(kvPhysicalState.cart[idx].quantity || 1) + delta;
  if (nextQty <= 0) {
    kvPhysicalState.cart.splice(idx, 1);
  } else if (nextQty > maxStock) {
    showToast(`সর্বোচ্চ ${maxStock} টি স্টকে আছে।`, 'error');
    return;
  } else {
    kvPhysicalState.cart[idx].quantity = nextQty;
  }

  saveKvCart();
  renderPhysicalStoreSection(containerId, true);
  if (refreshModal) openKvCartModal(kvPhysicalState.cartStep);
}

function removeFromKvCart(productId, containerId = 'kv-physical-store-root', refreshModal = false) {
  loadKvCart();
  kvPhysicalState.cart = kvPhysicalState.cart.filter((c) => c.product_id !== productId);
  saveKvCart();
  renderPhysicalStoreSection(containerId, true);
  if (refreshModal) openKvCartModal('cart');
}

function clearKvCart(containerId = 'kv-physical-store-root') {
  kvPhysicalState.cart = [];
  saveKvCart();
  renderPhysicalStoreSection(containerId, true);
  closeKvCartModal();
}

async function fetchPhysicalProducts(includeInactive = false) {
  let query = sb.from('physical_products').select('*').order('created_at', { ascending: false });
  if (!includeInactive) query = query.eq('is_active', true);
  const { data, error } = await query;
  if (error) {
    console.error('Physical products load error:', error);
    return [];
  }
  kvPhysicalState.products = data || [];
  return kvPhysicalState.products;
}

async function fetchMyPhysicalOrders() {
  if (!state?.user) {
    kvPhysicalState.myOrders = [];
    return [];
  }
  const { data, error } = await sb
    .from('physical_orders')
    .select('*')
    .eq('user_id', state.user.id)
    .order('created_at', { ascending: false });
  if (!error) kvPhysicalState.myOrders = data || [];
  return kvPhysicalState.myOrders;
}

// ---------- BUYER VIEW 1: ONLY PRODUCTS + ADD TO CART (NO TRACKING HERE) ----------
async function renderPhysicalStoreSection(containerId = 'kv-physical-store-root', skipFetch = false) {
  const root = document.getElementById(containerId);
  if (!root) return;

  loadKvCart();
  if (!skipFetch) {
    root.innerHTML = `<div class="py-10 text-center text-xs text-ivory/60 font-bengali">হার্ডকপি বই ও প্রোডাক্ট লোড হচ্ছে...</div>`;
    await fetchPhysicalProducts(false);
  }

  const cartSummary = getKvCartSummary();
  const categories = ['সব', ...KV_PRODUCT_CATEGORIES];
  const filtered = kvPhysicalState.activeCategory === 'সব'
    ? kvPhysicalState.products
    : kvPhysicalState.products.filter((p) => p.category === kvPhysicalState.activeCategory);

  root.innerHTML = `
    <section class="space-y-6 font-bengali fade-in">
      <!-- Top Action Bar: Title + Cart Button + Order Tracking Shortcut -->
      <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-3xl glass-panel border border-antiqueGold/25">
        <div>
          <span class="text-xs uppercase tracking-widest text-antiqueGold font-display">Hardcopy &amp; Physical Store</span>
          <h2 class="text-2xl sm:text-3xl font-bold gold-gradient-text mt-0.5">হার্ডকপি বই ও স্পেশাল প্রোডাক্ট</h2>
          <p class="text-xs text-ivory/70 mt-1">পছন্দের বই ও প্রোডাক্ট কার্টে যোগ করে একসাথে অর্ডার করুন।</p>
        </div>

        <div class="flex flex-wrap items-center gap-2.5">
          <button type="button" onclick="openKvCartModal('cart')"
            class="px-5 py-2.5 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold hover:opacity-90 transition inline-flex items-center gap-2">
            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
            <span>কার্ট দেখুন (${cartSummary.itemCount})</span>
            ${cartSummary.subtotal > 0 ? `<span class="px-2 py-0.5 rounded-lg bg-midnight/15 font-mono">₹${cartSummary.subtotal}</span>` : ''}
          </button>

          <button type="button" onclick="state.storeTab='my_orders'; renderCurrentRoute()"
            class="px-4 py-2.5 rounded-xl bg-deepPurple/60 border border-antiqueGold/30 text-antiqueGold hover:bg-deepPurple text-xs font-semibold transition inline-flex items-center gap-1.5">
            <i data-lucide="package-search" class="w-4 h-4"></i> আমার অর্ডার ট্র্যাক করুন
          </button>
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap gap-2">
        ${categories.map((cat) => `
          <button type="button" onclick="kvPhysicalState.activeCategory='${cat}'; renderPhysicalStoreSection('${containerId}', true)"
            class="px-3.5 py-1.5 rounded-xl text-xs border transition ${kvPhysicalState.activeCategory === cat ? 'bg-antiqueGold text-midnight border-antiqueGold font-bold' : 'bg-deepPurple/40 border-antiqueGold/25 text-ivory/80 hover:border-antiqueGold'}">
            ${_kvEsc(cat)}
          </button>
        `).join('')}
      </div>

      <!-- Product Grid -->
      ${filtered.length === 0 ? `
        <div class="glass-panel rounded-3xl p-10 text-center border border-antiqueGold/20 text-sm text-ivory/65">
          এই বিভাগে এখনো কোনো প্রোডাক্ট যোগ করা হয়নি।
        </div>
      ` : `
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          ${filtered.map((p) => {
            const effPrice = _kvGetEffectivePrice(p);
            const disc = _kvGetDiscountPercent(p);
            const outOfStock = Number(p.stock_qty || 0) <= 0;
            const inCartQty = getKvCartItemQty(p.id);

            return `
              <div class="glass-panel rounded-3xl overflow-hidden border border-antiqueGold/25 flex flex-col justify-between group">
                <div>
                  <div class="relative h-56 bg-midnight/80 overflow-hidden">
                    <img src="${_kvEsc(p.image_url || 'https://placehold.co/600x450/352343/C5A46D?text=KothaVerse')}" alt="${_kvEsc(p.title)}"
                      class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onerror="this.src='https://placehold.co/600x450/352343/C5A46D?text=KothaVerse'" />
                    <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-midnight/85 border border-antiqueGold/35 text-[10px] text-antiqueGold font-semibold">
                      ${_kvEsc(p.category)}
                    </span>
                    ${disc > 0 ? `
                      <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow">
                        ${disc}% ছাড়
                      </span>
                    ` : ''}
                    ${outOfStock ? `
                      <div class="absolute inset-0 bg-black/65 flex items-center justify-center">
                        <span class="px-4 py-1.5 rounded-xl bg-red-600 text-white text-xs font-bold">স্টক শেষ (Out of Stock)</span>
                      </div>
                    ` : ''}
                  </div>

                  <div class="p-5 space-y-2.5">
                    <h3 class="text-base sm:text-lg font-bold text-ivory leading-snug">${_kvEsc(p.title)}</h3>
                    ${p.description ? `<p class="text-xs text-ivory/70 line-clamp-2 leading-relaxed">${_kvEsc(p.description)}</p>` : ''}

                    <div class="flex items-baseline gap-2 pt-1">
                      <span class="text-xl font-bold font-mono text-antiqueGold">₹${effPrice}</span>
                      ${disc > 0 ? `<span class="text-xs font-mono text-ivory/45 line-through">₹${Number(p.price)}</span>` : ''}
                    </div>

                    <div class="flex flex-wrap items-center gap-2 text-[11px] pt-1">
                      ${p.is_free_delivery ? `
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/35 text-emerald-300 font-semibold">
                          <i data-lucide="truck" class="w-3.5 h-3.5"></i> ফ্রি ডেলিভারি
                        </span>
                      ` : `
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-deepPurple/60 border border-antiqueGold/25 text-ivory/80">
                          <i data-lucide="truck" class="w-3.5 h-3.5 text-antiqueGold"></i> ডেলিভারি: ₹${Number(p.delivery_charge || 0)}
                        </span>
                      `}
                      ${p.cod_available ? `<span class="px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-200">COD</span>` : ''}
                    </div>
                  </div>
                </div>

                <!-- Add to Cart / Quantity Stepper Footer -->
                <div class="px-5 pb-5 pt-2 space-y-2">
                  <div class="flex items-center justify-between text-[11px] ${outOfStock ? 'text-red-400' : 'text-ivory/55'}">
                    <span>${outOfStock ? 'স্টক নেই' : `স্টকে আছে: ${p.stock_qty} টি`}</span>
                    ${inCartQty > 0 ? `<span class="text-emerald-300 font-semibold">কার্টে আছে</span>` : ''}
                  </div>

                  ${outOfStock ? `
                    <button type="button" disabled class="w-full py-2.5 rounded-xl bg-ivory/10 text-ivory/40 text-xs font-bold cursor-not-allowed">
                      স্টক শেষ
                    </button>
                  ` : inCartQty > 0 ? `
                    <div class="flex items-center gap-2">
                      <div class="flex items-center justify-between flex-1 px-2 py-1.5 rounded-xl bg-midnight border border-antiqueGold/45">
                        <button type="button" onclick="updateKvCartQty('${p.id}', -1, '${containerId}')" class="w-7 h-7 rounded-lg bg-deepPurple text-antiqueGold font-bold hover:bg-antiqueGold hover:text-midnight transition">-</button>
                        <span class="font-mono font-bold text-sm text-ivory px-2">${inCartQty}</span>
                        <button type="button" onclick="updateKvCartQty('${p.id}', 1, '${containerId}')" class="w-7 h-7 rounded-lg bg-deepPurple text-antiqueGold font-bold hover:bg-antiqueGold hover:text-midnight transition">+</button>
                      </div>
                      <button type="button" onclick="openKvCartModal('cart')" class="px-4 py-2.5 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold">
                        কার্ট →
                      </button>
                    </div>
                  ` : `
                    <div class="flex items-center gap-2">
                      <button type="button" onclick="addToKvCart('${p.id}', '${containerId}', false)"
                        class="flex-1 py-2.5 rounded-xl bg-deepPurple/70 border border-antiqueGold/40 text-antiqueGold hover:bg-antiqueGold hover:text-midnight font-bold text-xs transition inline-flex items-center justify-center gap-1.5">
                        <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i> কার্টে যোগ করুন
                      </button>
                      <button type="button" onclick="addToKvCart('${p.id}', '${containerId}', true)"
                        class="px-4 py-2.5 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold hover:opacity-90 transition">
                        কিনুন
                      </button>
                    </div>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}

      <!-- Bottom Sticky Cart Summary Bar (Shows when cart has items) -->
      ${cartSummary.itemCount > 0 ? `
        <div class="p-4 rounded-2xl bg-gradient-to-r from-deepPurple/90 to-midnight border border-antiqueGold/45 shadow-gold flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-antiqueGold/20 border border-antiqueGold/40 flex items-center justify-center text-antiqueGold">
              <i data-lucide="shopping-bag" class="w-5 h-5"></i>
            </div>
            <div>
              <div class="text-sm font-bold text-ivory">কার্টে ${cartSummary.itemCount} টি আইটেম আছে</div>
              <div class="text-xs text-ivory/70">
                মোট: <strong class="text-antiqueGold font-mono">₹${cartSummary.grandTotal}</strong>
                (${cartSummary.deliveryCharge === 0 ? 'ফ্রি ডেলিভারি' : `ডেলিভারি ₹${cartSummary.deliveryCharge} সহ`})
              </div>
            </div>
          </div>
          <button type="button" onclick="openKvCartModal('checkout')" class="px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold hover:opacity-90 transition">
            চেকআউট করুন →
          </button>
        </div>
      ` : ''}
    </section>
  `;

  if (window.lucide) lucide.createIcons();
}

// ---------- BUYER VIEW 2: SEPARATED ORDER TRACKING (FOR "আমার অর্ডার ও ট্র্যাকিং" TAB) ----------
async function renderMyPhysicalOrdersSection(containerId = 'kv-physical-orders-root') {
  const root = document.getElementById(containerId);
  if (!root) return;

  if (!state?.user) {
    root.innerHTML = '';
    return;
  }

  root.innerHTML = `<div class="py-6 text-center text-xs text-ivory/60 font-bengali">হার্ডকপি ও প্রোডাক্ট অর্ডার লোড হচ্ছে...</div>`;
  await fetchMyPhysicalOrders();

  root.innerHTML = `
    <div class="glass-panel rounded-3xl p-5 sm:p-8 border border-antiqueGold/30 space-y-5 font-bengali fade-in">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 class="text-lg sm:text-xl font-bold text-antiqueGold flex items-center gap-2">
            <i data-lucide="truck" class="w-5 h-5"></i> হার্ডকপি বই ও প্রোডাক্ট ডেলিভারি ট্র্যাকিং
          </h3>
          <p class="text-xs text-ivory/65 mt-0.5">আপনার বুক করা সমস্ত ফিজিক্যাল প্রোডাক্টের লাইভ ডেলিভারি স্ট্যাটাস এখানে দেখুন।</p>
        </div>
        <button type="button" onclick="state.storeTab='physical'; renderCurrentRoute()" class="px-4 py-2 rounded-xl bg-deepPurple/60 border border-antiqueGold/30 text-antiqueGold text-xs font-semibold hover:bg-antiqueGold hover:text-midnight transition">
          + নতুন প্রোডাক্ট দেখুন
        </button>
      </div>

      ${kvPhysicalState.myOrders.length === 0 ? `
        <div class="p-8 rounded-2xl bg-midnight/60 border border-antiqueGold/15 text-center text-xs text-ivory/60">
          আপনার এখনো কোনো হার্ডকপি বই বা প্রোডাক্ট অর্ডার নেই।
        </div>
      ` : `
        <div class="space-y-4">
          ${kvPhysicalState.myOrders.map((ord) => {
            const isCancelled = ord.delivery_status === 'cancelled';
            const currentIdx = KV_DELIVERY_STEPS.findIndex((s) => s.key === ord.delivery_status);
            const itemsList = Array.isArray(ord.items) && ord.items.length > 0
              ? ord.items
              : [{ title: ord.product_title, quantity: ord.quantity, unit_price: ord.unit_price, image_url: ord.product_image }];

            return `
              <div class="p-4 sm:p-5 rounded-2xl bg-midnight/75 border border-antiqueGold/20 space-y-4">
                <div class="flex flex-wrap items-start justify-between gap-3 border-b border-antiqueGold/15 pb-3">
                  <div>
                    <div class="text-xs font-mono text-antiqueGold font-bold">অর্ডার #${_kvEsc(ord.order_code)}</div>
                    <div class="text-[11px] text-ivory/65 mt-0.5">
                      মোট প্রদেয়: <strong class="text-antiqueGold font-mono">₹${ord.total_amount}</strong>
                      (ডেলিভারি: ${Number(ord.delivery_charge || 0) === 0 ? 'ফ্রি' : `₹${ord.delivery_charge}`})
                      • ${_kvEsc(ord.payment_method)} (${_kvEsc(ord.payment_status)})
                    </div>
                  </div>
                  <div class="text-right text-[11px] text-ivory/65">
                    <div>${new Date(ord.created_at).toLocaleDateString('bn-IN')}</div>
                    ${ord.expected_delivery ? `<div class="text-emerald-300 font-semibold mt-0.5">সম্ভাব্য ডেলিভারি: ${_kvEsc(ord.expected_delivery)}</div>` : ''}
                  </div>
                </div>

                <!-- Ordered Items List -->
                <div class="space-y-2">
                  ${itemsList.map((it) => `
                    <div class="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-deepPurple/25 border border-antiqueGold/10 text-xs">
                      <div class="flex items-center gap-2.5 min-w-0">
                        <img src="${_kvEsc(it.image_url || 'https://placehold.co/60x60/352343/C5A46D?text=KV')}" class="w-10 h-10 rounded-lg object-cover border border-antiqueGold/20 shrink-0" />
                        <div class="min-w-0">
                          <div class="font-semibold text-ivory truncate">${_kvEsc(it.title)}</div>
                          <div class="text-[11px] text-ivory/60 font-mono">₹${Number(it.unit_price || 0)} × ${Number(it.quantity || 1)}</div>
                        </div>
                      </div>
                      <div class="font-mono font-bold text-antiqueGold shrink-0">₹${Number(it.line_total ?? (Number(it.unit_price || 0) * Number(it.quantity || 1)))}</div>
                    </div>
                  `).join('')}
                </div>

                <!-- Live 6-Step Delivery Progress -->
                ${isCancelled ? `
                  <div class="p-3 rounded-xl bg-red-500/15 border border-red-400/35 text-xs text-red-300">
                    এই অর্ডারটি বাতিল করা হয়েছে। ${ord.admin_note ? `কারণ: ${_kvEsc(ord.admin_note)}` : ''}
                  </div>
                ` : `
                  <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 text-center">
                    ${KV_DELIVERY_STEPS.map((st, idx) => {
                      const done = idx <= currentIdx;
                      return `
                        <div class="p-2 rounded-xl border text-[10px] ${done ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200 font-bold' : 'bg-deepPurple/25 border-ivory/10 text-ivory/40'}">
                          <div>${done ? '✓' : idx + 1}</div>
                          <div class="mt-0.5">${st.label}</div>
                        </div>
                      `;
                    }).join('')}
                  </div>
                `}

                <!-- Courier & Tracking Info -->
                ${ord.courier_name || ord.tracking_number ? `
                  <div class="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-deepPurple/40 border border-antiqueGold/20 text-xs">
                    <div>
                      <span class="text-ivory/65">কুরিয়ার:</span> <strong class="text-ivory">${_kvEsc(ord.courier_name || 'নির্ধারিত হচ্ছে')}</strong>
                      ${ord.tracking_number ? `<span class="mx-2 text-ivory/30">|</span> <span class="text-ivory/65">ট্র্যাকিং ID:</span> <strong class="font-mono text-antiqueGold">${_kvEsc(ord.tracking_number)}</strong>` : ''}
                    </div>
                    <div class="flex items-center gap-2">
                      ${ord.tracking_number ? `<button type="button" onclick="navigator.clipboard?.writeText('${_kvEsc(ord.tracking_number)}'); showToast('ট্র্যাকিং আইডি কপি হয়েছে!', 'success')" class="px-2.5 py-1 rounded-lg bg-midnight border border-antiqueGold/30 text-[11px] text-antiqueGold">কপি</button>` : ''}
                      ${ord.tracking_url ? `<a href="${_kvEsc(ord.tracking_url)}" target="_blank" rel="noopener noreferrer" class="px-3 py-1 rounded-lg bg-antiqueGold text-midnight font-bold text-[11px]">লাইভ ট্র্যাক করুন</a>` : ''}
                    </div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// ---------- CART & MULTI-ITEM CHECKOUT MODAL ----------
async function openKvCartModal(step = 'cart') {
  loadKvCart();
  if (kvPhysicalState.products.length === 0) {
    await fetchPhysicalProducts(false);
  }

  const summary = getKvCartSummary();
  if (step === 'checkout' && !state?.user) {
    showToast('চেকআউট করতে প্রথমে লগইন করুন।', 'error');
    if (typeof openAuthModal === 'function') openAuthModal('login');
    else if (typeof openModal === 'function') openModal('auth-modal');
    return;
  }

  kvPhysicalState.cartStep = summary.items.length === 0 ? 'cart' : step;

  let modal = document.getElementById('kv-cart-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'kv-cart-modal';
    modal.className = 'fixed inset-0 z-[95] bg-black/80 backdrop-blur-md hidden items-center justify-center p-3 sm:p-5 overflow-y-auto';
    document.body.appendChild(modal);
  }

  const upiId = state?.storeSettings?.upi_id || 'kothaverse@upi';
  const qrUrl = state?.storeSettings?.qr_image_url || state?.storeSettings?.upi_qr_url || '';

  modal.innerHTML = `
    <div class="w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-midnight border border-antiqueGold/40 shadow-card p-5 sm:p-7 font-bengali my-auto fade-in">
      <div class="flex items-center justify-between gap-3 pb-4 border-b border-antiqueGold/20">
        <div class="flex items-center gap-2">
          <i data-lucide="shopping-cart" class="w-5 h-5 text-antiqueGold"></i>
          <h3 class="text-lg sm:text-xl font-bold text-antiqueGold">
            ${kvPhysicalState.cartStep === 'cart' ? `আপনার শপিং কার্ট (${summary.itemCount})` : 'ডেলিভারি ঠিকানা ও পেমেন্ট'}
          </h3>
        </div>
        <button type="button" onclick="closeKvCartModal()" class="p-1.5 rounded-xl bg-deepPurple/60 text-ivory hover:text-antiqueGold">✕</button>
      </div>

      ${summary.items.length === 0 ? `
        <div class="py-12 text-center space-y-3">
          <i data-lucide="shopping-bag" class="w-10 h-10 text-ivory/35 mx-auto"></i>
          <p class="text-sm text-ivory/70">আপনার কার্ট বর্তমানে খালি আছে।</p>
          <button type="button" onclick="closeKvCartModal()" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-bold text-xs">
            প্রোডাক্ট দেখুন
          </button>
        </div>
      ` : kvPhysicalState.cartStep === 'cart' ? `
        <div class="space-y-4 mt-4">
          <div class="space-y-3 max-h-[45vh] overflow-y-auto pr-1">
            ${summary.items.map(({ product, quantity, unitPrice, lineTotal }) => `
              <div class="p-3 rounded-2xl bg-deepPurple/35 border border-antiqueGold/20 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3 min-w-0">
                  <img src="${_kvEsc(product.image_url || 'https://placehold.co/70x70/352343/C5A46D?text=KV')}" class="w-14 h-14 rounded-xl object-cover border border-antiqueGold/25 shrink-0" />
                  <div class="min-w-0">
                    <div class="font-bold text-xs sm:text-sm text-ivory truncate">${_kvEsc(product.title)}</div>
                    <div class="text-[11px] text-antiqueGold font-mono">₹${unitPrice} × ${quantity} = ₹${lineTotal}</div>
                    <div class="text-[10px] text-ivory/55">${product.is_free_delivery ? 'ফ্রি ডেলিভারি' : `ডেলিভারি ₹${product.delivery_charge}`}</div>
                  </div>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                  <button type="button" onclick="updateKvCartQty('${product.id}', -1, 'kv-physical-store-root', true)" class="w-7 h-7 rounded-lg bg-midnight border border-antiqueGold/35 text-antiqueGold font-bold">-</button>
                  <span class="w-6 text-center font-mono text-xs font-bold">${quantity}</span>
                  <button type="button" onclick="updateKvCartQty('${product.id}', 1, 'kv-physical-store-root', true)" class="w-7 h-7 rounded-lg bg-midnight border border-antiqueGold/35 text-antiqueGold font-bold">+</button>
                  <button type="button" onclick="removeFromKvCart('${product.id}', 'kv-physical-store-root', true)" class="p-1.5 rounded-lg bg-red-500/20 text-red-300 ml-1" title="সরিয়ে ফেলুন">
                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Bill Summary -->
          <div class="p-4 rounded-2xl bg-midnight/80 border border-antiqueGold/25 space-y-2 text-xs">
            <div class="flex justify-between text-ivory/75">
              <span>সাবটোটাল (${summary.itemCount} টি আইটেম)</span>
              <span class="font-mono">₹${summary.subtotal}</span>
            </div>
            <div class="flex justify-between text-ivory/75">
              <span>পার্সেল ডেলিভারি চার্জ</span>
              <span class="font-mono ${summary.deliveryCharge === 0 ? 'text-emerald-300 font-bold' : ''}">
                ${summary.deliveryCharge === 0 ? 'ফ্রি (₹0)' : `₹${summary.deliveryCharge}`}
              </span>
            </div>
            <div class="flex justify-between pt-2 border-t border-antiqueGold/20 text-sm font-bold">
              <span class="text-ivory">সর্বমোট প্রদেয়</span>
              <span class="font-mono text-antiqueGold text-base">₹${summary.grandTotal}</span>
            </div>
          </div>

          <div class="flex items-center justify-between gap-3">
            <button type="button" onclick="clearKvCart()" class="px-4 py-2.5 rounded-xl border border-red-400/35 text-red-300 text-xs hover:bg-red-500/15">
              কার্ট খালি করুন
            </button>
            <button type="button" onclick="openKvCartModal('checkout')" class="flex-1 py-3 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold hover:opacity-90 transition">
              ঠিকানা ও পেমেন্টে এগিয়ে যান →
            </button>
          </div>
        </div>
      ` : `
        <form onsubmit="submitKvCartOrder(event)" class="space-y-4 mt-4 text-xs sm:text-sm">
          <!-- Compact Order Summary -->
          <div class="p-3.5 rounded-2xl bg-deepPurple/40 border border-antiqueGold/25 flex items-center justify-between gap-2 text-xs">
            <div>
              <div class="font-bold text-ivory">${summary.itemCount} টি প্রোডাক্ট নির্বাচিত</div>
              <div class="text-ivory/65">সর্বমোট: <strong class="text-antiqueGold font-mono">₹${summary.grandTotal}</strong> (${summary.deliveryCharge === 0 ? 'ফ্রি ডেলিভারি' : `ডেলিভারি ₹${summary.deliveryCharge} সহ`})</div>
            </div>
            <button type="button" onclick="openKvCartModal('cart')" class="px-3 py-1.5 rounded-lg bg-midnight border border-antiqueGold/35 text-antiqueGold text-[11px]">কার্ট পরিবর্তন</button>
          </div>

          <!-- Shipping Address -->
          <div class="space-y-3">
            <div class="text-xs font-bold text-antiqueGold uppercase tracking-wider">ডেলিভারি ঠিকানা</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input id="po-name" required value="${_kvEsc(state?.profile?.full_name || '')}" placeholder="প্রাপকের সম্পূর্ণ নাম*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="po-phone" required type="tel" pattern="[0-9]{10}" placeholder="মোবাইল / WhatsApp (10 digit)*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
            </div>
            <textarea id="po-address" required rows="2" placeholder="বাড়ি নং / গ্রাম / পাড়া / পোস্ট অফিস*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25"></textarea>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input id="po-city" required placeholder="শহর / জেলা*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="po-state" required value="West Bengal" placeholder="রাজ্য*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
              <input id="po-pin" required type="text" pattern="[0-9]{6}" maxlength="6" placeholder="PIN Code (6 digit)*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 font-mono" />
            </div>
            <input id="po-landmark" placeholder="কাছাকাছি পরিচিত স্থান / Landmark (ঐচ্ছিক)" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
          </div>

          <!-- Payment Mode -->
          <div class="space-y-3">
            <div class="text-xs font-bold text-antiqueGold uppercase tracking-wider">পেমেন্ট মাধ্যম</div>
            <div class="grid grid-cols-2 gap-2.5 text-xs">
              <label class="flex items-center gap-2 p-3 rounded-xl bg-deepPurple/45 border border-antiqueGold/35 cursor-pointer">
                <input type="radio" name="po-pay-method" value="UPI" checked onchange="togglePhysicalPaymentFields()" class="accent-antiqueGold" />
                <span>UPI পেমেন্ট (প্রিপেইড)</span>
              </label>
              ${summary.allCodAvailable ? `
                <label class="flex items-center gap-2 p-3 rounded-xl bg-deepPurple/45 border border-antiqueGold/35 cursor-pointer">
                  <input type="radio" name="po-pay-method" value="COD" onchange="togglePhysicalPaymentFields()" class="accent-antiqueGold" />
                  <span>Cash on Delivery</span>
                </label>
              ` : `
                <div class="flex items-center justify-center p-3 rounded-xl bg-midnight/60 border border-ivory/10 text-ivory/45 text-[11px] text-center">
                  সব আইটেমে COD নেই
                </div>
              `}
            </div>

            <div id="po-upi-box" class="p-4 rounded-2xl bg-deepPurple/35 border border-antiqueGold/25 space-y-3">
              <div class="flex flex-col sm:flex-row items-center gap-4">
                ${qrUrl ? `<img src="${_kvEsc(qrUrl)}" alt="UPI QR" class="w-28 h-28 rounded-xl bg-white p-1.5 object-contain border border-antiqueGold/40" />` : ''}
                <div class="text-xs space-y-1 flex-1">
                  <div class="text-antiqueGold font-bold">সর্বমোট ₹${summary.grandTotal} নিচের UPI-তে পাঠান:</div>
                  <div class="font-mono text-ivory bg-midnight/80 px-3 py-1.5 rounded-lg border border-antiqueGold/25 inline-block">${_kvEsc(upiId)}</div>
                  <p class="text-[11px] text-ivory/65">পেমেন্ট শেষে ১২ সংখ্যার UPI UTR / Reference নম্বর নিচে দিন।</p>
                </div>
              </div>
              <input id="po-utr" required type="text" minlength="8" maxlength="24" placeholder="১২ সংখ্যার UPI UTR / Transaction ID*" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/30 font-mono text-xs" />
            </div>
          </div>

          <!-- Privacy & Refund Policy Consent -->
          <div class="text-[11px] text-ivory/65 leading-relaxed bg-midnight/70 px-3 py-2 rounded-xl border border-antiqueGold/15">
            অর্ডার কনফার্ম করার মাধ্যমে আপনি আমাদের
            <button type="button" onclick="openKvStorePolicyModal('privacy')" class="text-antiqueGold underline font-semibold">Privacy Policy</button>
            এবং
            <button type="button" onclick="openKvStorePolicyModal('refund')" class="text-antiqueGold underline font-semibold">Refund Policy</button>-তে সম্মতি দিচ্ছেন।
          </div>

          <button id="po-submit-btn" type="submit" class="w-full py-3 rounded-xl bg-antiqueGold text-midnight font-bold shadow-gold hover:opacity-90 transition">
            ₹${summary.grandTotal} অর্ডার কনফার্ম করুন
          </button>
        </form>
      `}
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) lucide.createIcons();
}

function closeKvCartModal() {
  const modal = document.getElementById('kv-cart-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function togglePhysicalPaymentFields() {
  const selected = document.querySelector('input[name="po-pay-method"]:checked')?.value || 'UPI';
  const upiBox = document.getElementById('po-upi-box');
  const utrInput = document.getElementById('po-utr');
  if (selected === 'COD') {
    upiBox?.classList.add('hidden');
    if (utrInput) { utrInput.required = false; utrInput.value = ''; }
  } else {
    upiBox?.classList.remove('hidden');
    if (utrInput) utrInput.required = true;
  }
}

async function submitKvCartOrder(e) {
  e.preventDefault();
  const btn = document.getElementById('po-submit-btn');
  const summary = getKvCartSummary();
  if (summary.items.length === 0) {
    showToast('আপনার কার্ট খালি আছে।', 'error');
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = 'অর্ডার জমা হচ্ছে...'; }

  try {
    const paymentMethod = document.querySelector('input[name="po-pay-method"]:checked')?.value || 'UPI';
    const utr = paymentMethod === 'UPI' ? (document.getElementById('po-utr')?.value || '').trim() : null;

    const rpcItems = summary.items.map((x) => ({
      product_id: x.product.id,
      quantity: x.quantity
    }));

    const { data, error } = await sb.rpc('create_physical_cart_order', {
      p_items: rpcItems,
      p_buyer_name: document.getElementById('po-name').value.trim(),
      p_phone: document.getElementById('po-phone').value.trim(),
      p_address_line: document.getElementById('po-address').value.trim(),
      p_city: document.getElementById('po-city').value.trim(),
      p_state: document.getElementById('po-state').value.trim(),
      p_pincode: document.getElementById('po-pin').value.trim(),
      p_landmark: document.getElementById('po-landmark').value.trim(),
      p_payment_method: paymentMethod,
      p_transaction_id: utr
    });

    if (error) {
      if (String(error.message || '').includes('unique_physical_order_utr')) {
        throw new Error('এই UTR নম্বরটি ইতিমধ্যেই ব্যবহৃত হয়েছে।');
      }
      throw error;
    }

    kvPhysicalState.cart = [];
    saveKvCart();
    closeKvCartModal();
    showToast(`অর্ডার সফল হয়েছে! অর্ডার কোড: #${data?.order_code || ''}`, 'success');

    state.storeTab = 'my_orders';
    renderCurrentRoute();
  } catch (err) {
    showToast(err?.message || 'অর্ডার সাবমিট ব্যর্থ হয়েছে।', 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = `₹${summary.grandTotal} অর্ডার কনফার্ম করুন`; }
  }
}

// =========================================================================
// ADMIN PANEL: PRODUCT SETTINGS & DELIVERY MANAGEMENT (MULTI-ITEM READY)
// =========================================================================
async function renderAdminPhysicalManager(containerId = 'kv-admin-physical-root') {
  const root = document.getElementById(containerId);
  if (!root) return;

  root.innerHTML = `<div class="py-8 text-center text-xs text-ivory/60 font-bengali">অ্যাডমিন প্রোডাক্ট ও ডেলিভারি প্যানেল লোড হচ্ছে...</div>`;
  await fetchPhysicalProducts(true);
  const { data: allOrders } = await sb.from('physical_orders').select('*').order('created_at', { ascending: false });
  kvPhysicalState.adminOrders = allOrders || [];

  const isProductsTab = kvPhysicalState.adminSubTab === 'products';
  const editingProd = kvPhysicalState.editingProductId
    ? kvPhysicalState.products.find((p) => p.id === kvPhysicalState.editingProductId)
    : null;

  const filteredOrders = kvPhysicalState.deliveryFilter === 'all'
    ? kvPhysicalState.adminOrders
    : kvPhysicalState.adminOrders.filter((o) => o.delivery_status === kvPhysicalState.deliveryFilter);

  root.innerHTML = `
    <div class="space-y-6 font-bengali fade-in">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <div class="flex gap-2">
          <button type="button" onclick="kvPhysicalState.adminSubTab='products'; renderAdminPhysicalManager('${containerId}')"
            class="px-4 py-2 rounded-xl text-xs font-bold border transition ${isProductsTab ? 'bg-antiqueGold text-midnight border-antiqueGold' : 'bg-deepPurple/45 border-antiqueGold/25 text-ivory/80'}">
            প্রোডাক্ট সেটিংস (${kvPhysicalState.products.length})
          </button>
          <button type="button" onclick="kvPhysicalState.adminSubTab='deliveries'; renderAdminPhysicalManager('${containerId}')"
            class="px-4 py-2 rounded-xl text-xs font-bold border transition ${!isProductsTab ? 'bg-antiqueGold text-midnight border-antiqueGold' : 'bg-deepPurple/45 border-antiqueGold/25 text-ivory/80'}">
            ডেলিভারি ম্যানেজমেন্ট (${kvPhysicalState.adminOrders.length})
          </button>
        </div>
      </div>

      ${isProductsTab ? `
        <div class="glass-panel rounded-3xl p-5 sm:p-7 border border-antiqueGold/30 space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-base sm:text-lg font-bold text-antiqueGold">
              ${editingProd ? 'প্রোডাক্ট আপডেট করুন' : 'নতুন হার্ডকপি বই / প্রোডাক্ট যোগ করুন'}
            </h3>
            ${editingProd ? `<button type="button" onclick="kvPhysicalState.editingProductId=null; renderAdminPhysicalManager('${containerId}')" class="text-xs text-red-300 underline">এডিট বাতিল</button>` : ''}
          </div>

          <form onsubmit="handleAdminSavePhysicalProduct(event, '${containerId}')" class="space-y-3 text-xs sm:text-sm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">প্রোডাক্ট / বইয়ের নাম*</label>
                <input id="ap-title" required value="${_kvEsc(editingProd?.title || '')}" placeholder="যেমন: রাতের কবিতা (হার্ডকভার)" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25" />
              </div>
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">বিভাগ (Category)*</label>
                <select id="ap-category" class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25">
                  ${KV_PRODUCT_CATEGORIES.map((c) => `<option value="${c}" ${editingProd?.category === c ? 'selected' : ''}>${c}</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">প্রোডাক্টের ছবি আপলোড করুন</label>
                <input id="ap-image-file" type="file" accept="image/*" class="w-full text-xs text-ivory/75 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-deepPurple file:text-antiqueGold" />
              </div>
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">অথবা ছবির URL (ঐচ্ছিক)</label>
                <input id="ap-image-url" type="url" value="${_kvEsc(editingProd?.image_url || '')}" placeholder="https://..." class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25 text-xs" />
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">আসল দাম (MRP ₹)*</label>
                <input id="ap-price" required type="number" min="0" step="1" value="${editingProd?.price ?? ''}" placeholder="299" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 font-mono" />
              </div>
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">অফার দাম (₹, ঐচ্ছিক)</label>
                <input id="ap-offer-price" type="number" min="0" step="1" value="${editingProd?.offer_price ?? ''}" placeholder="249" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 font-mono" />
              </div>
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">ডেলিভারি চার্জ (₹)</label>
                <input id="ap-delivery-charge" type="number" min="0" step="1" value="${editingProd?.delivery_charge ?? 40}" ${editingProd?.is_free_delivery ? 'disabled' : ''} class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 font-mono disabled:opacity-40" />
              </div>
              <div>
                <label class="block text-[11px] text-ivory/70 mb-1">স্টক সংখ্যা*</label>
                <input id="ap-stock" required type="number" min="0" value="${editingProd?.stock_qty ?? 20}" class="w-full px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 font-mono" />
              </div>
            </div>

            <div class="flex flex-wrap gap-4 pt-1 text-xs">
              <label class="inline-flex items-center gap-2 cursor-pointer">
                <input id="ap-free-delivery" type="checkbox" ${editingProd?.is_free_delivery ? 'checked' : ''}
                  onchange="const d=document.getElementById('ap-delivery-charge'); d.disabled=this.checked; if(this.checked) d.value=0;"
                  class="accent-emerald-400" />
                <span class="text-emerald-300 font-semibold">ফ্রি ডেলিভারি (Free Delivery)</span>
              </label>
              <label class="inline-flex items-center gap-2 cursor-pointer">
                <input id="ap-cod" type="checkbox" ${editingProd?.cod_available ? 'checked' : ''} class="accent-antiqueGold" />
                <span>Cash on Delivery (COD) চালু রাখুন</span>
              </label>
              <label class="inline-flex items-center gap-2 cursor-pointer">
                <input id="ap-active" type="checkbox" ${editingProd ? (editingProd.is_active ? 'checked' : '') : 'checked'} class="accent-antiqueGold" />
                <span>স্টোরে দৃশ্যমান (Active)</span>
              </label>
            </div>

            <textarea id="ap-desc" rows="2" placeholder="প্রোডাক্টের বিবরণ..." class="w-full px-3.5 py-2.5 rounded-xl bg-midnight border border-antiqueGold/25">${_kvEsc(editingProd?.description || '')}</textarea>

            <button id="ap-save-btn" type="submit" class="px-6 py-2.5 rounded-xl bg-antiqueGold text-midnight font-bold text-xs shadow-gold">
              ${editingProd ? 'আপডেট সংরক্ষণ করুন' : 'প্রোডাক্ট প্রকাশ করুন'}
            </button>
          </form>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${kvPhysicalState.products.map((p) => `
            <div class="p-4 rounded-2xl bg-midnight/75 border border-antiqueGold/20 flex gap-3.5 items-center justify-between">
              <div class="flex items-center gap-3 min-w-0">
                <img src="${_kvEsc(p.image_url || 'https://placehold.co/80x80/352343/C5A46D?text=KV')}" class="w-16 h-16 rounded-xl object-cover border border-antiqueGold/25 shrink-0" />
                <div class="min-w-0">
                  <div class="font-bold text-sm text-ivory truncate">${_kvEsc(p.title)}</div>
                  <div class="text-[11px] text-ivory/65">
                    ₹${_kvGetEffectivePrice(p)} ${p.offer_price && p.offer_price < p.price ? `<span class="line-through opacity-50">₹${p.price}</span>` : ''}
                    • ${p.is_free_delivery ? '<span class="text-emerald-300">Free Delivery</span>' : `ডেলিভারি ₹${p.delivery_charge}`}
                  </div>
                  <div class="text-[11px] mt-0.5 ${p.is_active ? 'text-emerald-300' : 'text-red-400'}">
                    ${p.is_active ? 'Active' : 'Hidden'} • স্টক: ${p.stock_qty}
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-1.5 shrink-0 text-[11px]">
                <button type="button" onclick="kvPhysicalState.editingProductId='${p.id}'; renderAdminPhysicalManager('${containerId}')" class="px-3 py-1 rounded-lg bg-deepPurple border border-antiqueGold/35 text-antiqueGold">এডিট</button>
                <button type="button" onclick="handleAdminDeletePhysicalProduct('${p.id}', '${containerId}')" class="px-3 py-1 rounded-lg bg-red-500/20 border border-red-400/35 text-red-300">ডিলিট</button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2 text-xs">
            ${[
              { k: 'all', l: 'সব অর্ডার' },
              { k: 'placed', l: 'নতুন (Placed)' },
              { k: 'confirmed', l: 'Confirmed' },
              { k: 'packed', l: 'Packed' },
              { k: 'shipped', l: 'Shipped' },
              { k: 'out_for_delivery', l: 'Out for Delivery' },
              { k: 'delivered', l: 'Delivered' },
              { k: 'cancelled', l: 'Cancelled' }
            ].map((f) => `
              <button type="button" onclick="kvPhysicalState.deliveryFilter='${f.k}'; renderAdminPhysicalManager('${containerId}')"
                class="px-3 py-1.5 rounded-xl border ${kvPhysicalState.deliveryFilter === f.k ? 'bg-antiqueGold text-midnight border-antiqueGold font-bold' : 'bg-midnight/70 border-antiqueGold/20 text-ivory/75'}">
                ${f.l}
              </button>
            `).join('')}
          </div>

          ${filteredOrders.length === 0 ? `
            <div class="p-8 rounded-2xl bg-midnight/60 border border-antiqueGold/20 text-center text-xs text-ivory/60">
              কোনো অর্ডার পাওয়া যায়নি।
            </div>
          ` : filteredOrders.map((ord) => {
            const itemsList = Array.isArray(ord.items) && ord.items.length > 0
              ? ord.items
              : [{ title: ord.product_title, quantity: ord.quantity, unit_price: ord.unit_price }];

            return `
              <div class="glass-panel rounded-2xl p-5 border border-antiqueGold/25 space-y-4 text-xs">
                <div class="flex flex-wrap items-start justify-between gap-3 border-b border-antiqueGold/15 pb-3">
                  <div>
                    <span class="font-mono text-antiqueGold font-bold">#${_kvEsc(ord.order_code)}</span>
                    <span class="mx-2 text-ivory/30">•</span>
                    <strong class="text-sm text-ivory">${itemsList.length} টি প্রোডাক্ট (মোট ${ord.quantity} পিস)</strong>
                    <div class="text-ivory/70 mt-1">
                      মোট: <strong class="text-antiqueGold">₹${ord.total_amount}</strong> (ডেলিভারি ₹${ord.delivery_charge})
                      • মাধ্যম: <strong>${_kvEsc(ord.payment_method)}</strong>
                      ${ord.transaction_id ? ` • UTR: <span class="font-mono text-emerald-300">${_kvEsc(ord.transaction_id)}</span>` : ''}
                    </div>
                  </div>
                  <a href="https://wa.me/91${_kvEsc(String(ord.phone || '').replace(/\D/g, '').slice(-10))}?text=${encodeURIComponent(`নমস্কার ${ord.buyer_name}, আপনার KothaVerse অর্ডার #${ord.order_code} আপডেট: ${ord.delivery_status}${ord.tracking_number ? ` | Tracking ID: ${ord.tracking_number}` : ''}`)}"
                    target="_blank" rel="noopener noreferrer"
                    class="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-semibold inline-flex items-center gap-1.5">
                    WhatsApp আপডেট পাঠান
                  </a>
                </div>

                <!-- Cart Items Breakdown for Packing -->
                <div class="p-3 rounded-xl bg-deepPurple/30 border border-antiqueGold/15 space-y-1">
                  <div class="text-[11px] font-bold text-antiqueGold">অর্ডারকৃত আইটেমসমূহ:</div>
                  ${itemsList.map((it) => `
                    <div class="flex justify-between text-ivory/85">
                      <span>• ${_kvEsc(it.title)} × <strong>${it.quantity}</strong></span>
                      <span class="font-mono text-antiqueGold">₹${Number(it.line_total ?? (Number(it.unit_price || 0) * Number(it.quantity || 1)))}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="p-3 rounded-xl bg-midnight/70 border border-antiqueGold/15 leading-relaxed text-ivory/80">
                  <strong class="text-ivory">${_kvEsc(ord.buyer_name)}</strong> (${_kvEsc(ord.phone)})<br/>
                  ${_kvEsc(ord.address_line)}, ${_kvEsc(ord.city)}, ${_kvEsc(ord.state)} - <strong class="font-mono text-antiqueGold">${_kvEsc(ord.pincode)}</strong>
                  ${ord.landmark ? `<br/><span class="text-ivory/60">Landmark: ${_kvEsc(ord.landmark)}</span>` : ''}
                </div>

                <form onsubmit="handleAdminUpdateDelivery(event, '${ord.id}', '${containerId}')" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  <select id="ord-pay-${ord.id}" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25">
                    <option value="pending" ${ord.payment_status === 'pending' ? 'selected' : ''}>Payment: Pending</option>
                    <option value="verified" ${ord.payment_status === 'verified' ? 'selected' : ''}>Payment: Verified (UPI)</option>
                    <option value="rejected" ${ord.payment_status === 'rejected' ? 'selected' : ''}>Payment: Rejected</option>
                    <option value="cod_pending" ${ord.payment_status === 'cod_pending' ? 'selected' : ''}>COD: Pending</option>
                    <option value="cod_paid" ${ord.payment_status === 'cod_paid' ? 'selected' : ''}>COD: Paid</option>
                  </select>

                  <select id="ord-del-${ord.id}" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25">
                    ${[...KV_DELIVERY_STEPS, { key: 'cancelled', label: 'বাতিল (Cancelled)' }].map((st) => `
                      <option value="${st.key}" ${ord.delivery_status === st.key ? 'selected' : ''}>Status: ${st.label}</option>
                    `).join('')}
                  </select>

                  <select id="ord-cour-${ord.id}" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25">
                    <option value="">-- কুরিয়ার নির্বাচন --</option>
                    ${KV_COURIERS.map((c) => `<option value="${c}" ${ord.courier_name === c ? 'selected' : ''}>${c}</option>`).join('')}
                  </select>

                  <input id="ord-trk-${ord.id}" value="${_kvEsc(ord.tracking_number || '')}" placeholder="Tracking / AWB Number" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25 font-mono" />
                  <input id="ord-url-${ord.id}" value="${_kvEsc(ord.tracking_url || '')}" placeholder="Tracking Link (ঐচ্ছিক)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
                  <input id="ord-eta-${ord.id}" value="${_kvEsc(ord.expected_delivery || '')}" placeholder="সম্ভাব্য তারিখ (যেমন: ৫ ডিসেম্বর)" class="px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />

                  <div class="sm:col-span-2 lg:col-span-3 flex flex-wrap gap-2 items-center">
                    <input id="ord-note-${ord.id}" value="${_kvEsc(ord.admin_note || '')}" placeholder="অ্যাডমিন নোট / বাতিলের কারণ (ঐচ্ছিক)" class="flex-1 min-w-[200px] px-3 py-2 rounded-xl bg-midnight border border-antiqueGold/25" />
                    <button type="submit" class="px-5 py-2 rounded-xl bg-antiqueGold text-midnight font-bold shadow-gold">স্ট্যাটাস আপডেট করুন</button>
                  </div>
                </form>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

async function handleAdminSavePhysicalProduct(e, containerId) {
  e.preventDefault();
  const btn = document.getElementById('ap-save-btn');
  const prevText = btn ? btn.textContent : 'প্রোডাক্ট প্রকাশ করুন';
  if (btn) { btn.disabled = true; btn.textContent = 'সংরক্ষণ হচ্ছে...'; }

  try {
    let imageUrl = (document.getElementById('ap-image-url')?.value || '').trim();
    const file = document.getElementById('ap-image-file')?.files?.[0];

    if (file) {
      const ext = (file.name.split('.').pop() || 'jpg').toLowerCase();
      const filePath = `prod_${Date.now()}_${Math.random().toString(36).slice(2, 7)}.${ext}`;
      const { error: upErr } = await sb.storage.from('product-images').upload(filePath, file, { upsert: true });
      if (upErr) throw upErr;
      const { data: pub } = sb.storage.from('product-images').getPublicUrl(filePath);
      imageUrl = pub.publicUrl;
    }

    const isFreeDelivery = document.getElementById('ap-free-delivery').checked;
    const offerRaw = document.getElementById('ap-offer-price').value;

    const payload = {
      title: document.getElementById('ap-title').value.trim(),
      category: document.getElementById('ap-category').value,
      description: document.getElementById('ap-desc').value.trim(),
      image_url: imageUrl,
      price: Number(document.getElementById('ap-price').value || 0),
      offer_price: offerRaw !== '' && Number(offerRaw) > 0 ? Number(offerRaw) : null,
      is_free_delivery: isFreeDelivery,
      delivery_charge: isFreeDelivery ? 0 : Number(document.getElementById('ap-delivery-charge').value || 0),
      stock_qty: Number(document.getElementById('ap-stock').value || 0),
      cod_available: document.getElementById('ap-cod').checked,
      is_active: document.getElementById('ap-active').checked,
      updated_at: new Date().toISOString()
    };

    let res;
    if (kvPhysicalState.editingProductId) {
      res = await sb.from('physical_products').update(payload).eq('id', kvPhysicalState.editingProductId);
    } else {
      res = await sb.from('physical_products').insert(payload);
    }
    if (res.error) throw res.error;

    kvPhysicalState.editingProductId = null;
    showToast('প্রোডাক্ট সফলভাবে সংরক্ষিত হয়েছে!', 'success');
    await renderAdminPhysicalManager(containerId);
  } catch (err) {
    showToast('প্রোডাক্ট সেভ ত্রুটি: ' + (err?.message || err), 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = prevText; }
  }
}

async function handleAdminDeletePhysicalProduct(productId, containerId) {
  if (!confirm('এই প্রোডাক্টটি স্থায়ীভাবে ডিলিট করতে চান?')) return;
  const { error } = await sb.from('physical_products').delete().eq('id', productId);
  if (error) {
    showToast('ডিলিট ত্রুটি: ' + error.message, 'error');
    return;
  }
  showToast('প্রোডাক্ট ডিলিট হয়েছে।', 'success');
  await renderAdminPhysicalManager(containerId);
}

async function handleAdminUpdateDelivery(e, orderId, containerId) {
  e.preventDefault();
  const payload = {
    payment_status: document.getElementById(`ord-pay-${orderId}`).value,
    delivery_status: document.getElementById(`ord-del-${orderId}`).value,
    courier_name: document.getElementById(`ord-cour-${orderId}`).value,
    tracking_number: document.getElementById(`ord-trk-${orderId}`).value.trim(),
    tracking_url: document.getElementById(`ord-url-${orderId}`).value.trim(),
    expected_delivery: document.getElementById(`ord-eta-${orderId}`).value.trim(),
    admin_note: document.getElementById(`ord-note-${orderId}`).value.trim()
  };

  const { error } = await sb.from('physical_orders').update(payload).eq('id', orderId);
  if (error) {
    showToast('আপডেট ত্রুটি: ' + error.message, 'error');
    return;
  }
  showToast('অর্ডার ও ডেলিভারি স্ট্যাটাস আপডেট হয়েছে!', 'success');
  await renderAdminPhysicalManager(containerId);
}

    async function initApp() {
      applyTheme(localStorage.getItem('kv_theme') || 'dark');
      applySiteSettings();
      audioEngine.init();
      await Promise.all([loadSessionAndProfile(), loadAllPublicContent()]);
      const rawHash = (window.location.hash || '').replace(/^#/, '').trim();
if (rawHash.startsWith('chithi/')) {
  const code = rawHash.split('/')[1];
  if (code) openChithiByCode(code);
  return;
}
      const initialRoute = (window.location.hash || '').replace(/^#/, '').trim() || 'home';
navigate(initialRoute, { replace: true, smoothScroll: false });
      initNotifications();
      setTimeout(() => checkAndShowSpecialPopup(false), 1200);


      sb.auth.onAuthStateChange(async () => {
        await loadSessionAndProfile();
      });
    }

    window.addEventListener('DOMContentLoaded', initApp);
    // =========================================================================
// PWA SERVICE WORKER & INSTALL PROMPT
// =========================================================================
let deferredPrompt = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.warn('SW registration failed:', err);
    });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('pwa-install-btn')?.classList.remove('hidden');
});

async function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    showToast('KothaVerse App ইনস্টল হচ্ছে!', 'success');
  }
  deferredPrompt = null;
  document.getElementById('pwa-install-btn')?.classList.add('hidden');
}

window.addEventListener('appinstalled', () => {
  document.getElementById('pwa-install-btn')?.classList.add('hidden');
  showToast('KothaVerse সফলভাবে ইনস্টল হয়েছে!', 'success');
});
