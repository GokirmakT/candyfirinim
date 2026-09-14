export const bakeryStyles = `
  :root { --ink: #24201c; --cream: #f6f1e8; --orange: #bd552f; --line: #d8d0c5; --muted: #777067; }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--cream); color: var(--ink); font-family: 'DM Sans', sans-serif; }
  a { color: inherit; text-decoration: none; }
  .site-shell { overflow: hidden; }
  .main-nav { background: #7d351f !important; border-bottom: 1px solid rgba(255,255,255,.18); color: #fff9f0 !important; }
  .nav-inner { min-height: 108px !important; max-width: 1440px; width: 100%; margin: auto; padding: 0 42px !important; justify-content: space-between; gap: 28px; }
  .brand { color: #fff9f0 !important; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; min-width: 235px; }
  .brand-name { font-family: Georgia, 'Times New Roman', serif; font-size: 30px; font-weight: 400; letter-spacing: .17em; line-height: 1; }
  .brand-tagline { font-family: 'DM Sans', sans-serif; font-size: 9px; font-weight: 500; letter-spacing: .24em; line-height: 1; }
  .desktop-links { display: flex; gap: 28px; margin-left: auto; font-size: 16px; letter-spacing: .04em; white-space: nowrap; }
  .desktop-links a, .footer-links a { transition: color .2s; }
  .desktop-links a, .desktop-links a:hover { color: #fff9f0; }
  .footer-links a:hover { color: var(--orange); }
  .social-links { display: flex; align-items: center; gap: 16px; margin-left: 8px; }
  .social-links a { display: flex; align-items: center; color: #fff9f0; transition: color .2s, transform .2s; }
  .social-links a:hover { color: #f4c3a4; transform: translateY(-2px); }
  .nav-actions { align-items: center; }
  .mobile-menu { display: none !important; color: #fff9f0 !important; }
  main { max-width: 1440px; margin: auto; }
  .hero-section { width: 100vw; max-width: none; margin-left: calc(50% - 50vw); min-height: calc(100vh - 108px); position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; background: #2b1710; }
  .hero-copy { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 90px 28px; color: white; }
  .hero-logo { width: 122px; height: 180px; object-fit: contain; margin-bottom: 28px; filter: drop-shadow(0 3px 12px rgba(0,0,0,.25)); }
  .eyebrow { color: var(--orange) !important; font-size: 10px !important; font-weight: 600 !important; letter-spacing: .2em !important; margin-bottom: 24px !important; text-transform: uppercase; }
  h1, h2, h3 { font-family: 'Playfair Display', serif !important; font-weight: 500 !important; }
  .hero-copy h1 { font-size: clamp(44px, 5.5vw, 78px) !important; line-height: .98 !important; letter-spacing: .01em !important; margin: 0 0 24px !important; color: white; text-transform: uppercase; }
  h1 i, h2 i { color: var(--orange); font-weight: 500; }
  .hero-copy p, .intro-section p, .stats-copy p, .newsletter-section p { color: var(--muted); font-size: 15px; line-height: 1.75; }
  .hero-copy p { margin: 0 0 30px; color: white; font-size: 18px; letter-spacing: .08em; text-transform: uppercase; }
  .dark-button { width: fit-content; border: 1px solid white !important; border-radius: 999px !important; color: #fff !important; background: transparent !important; padding: 13px 27px !important; font-size: 10px !important; letter-spacing: .17em !important; }
  .dark-button span, .text-button span, .outline-button span, .newsletter-form span, .story-card a span { margin-left: 15px; font-size: 17px; }
  .hero-image-wrap { position: absolute; inset: 0; overflow: hidden; }
  .hero-image { position: absolute; inset: 0; background: linear-gradient(rgba(24,17,12,.28), rgba(24,17,12,.28)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=90') center/cover; }
  .hero-stamp { position: absolute; right: 8%; bottom: 8%; width: 118px; height: 118px; border-radius: 50%; background: var(--orange); color: #fff; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; font-size: 8px; line-height: 1.25; letter-spacing: .18em; transform: rotate(12deg); }
  .hero-stamp span { color: #f4c3a4; font-size: 13px; }
  .intro-section { text-align: center; padding: 130px 20px 128px; max-width: 740px; margin: auto; }
  .intro-section h2, .section-heading h2, .stats-copy h2, .newsletter-section h2 { font-size: clamp(42px, 5vw, 67px) !important; line-height: 1.04 !important; letter-spacing: -.05em !important; margin: 0 0 24px !important; }
  .intro-section p { max-width: 480px; margin: auto auto 28px; }
  .text-button, .outline-button { border-radius: 0 !important; border-bottom: 1px solid var(--orange) !important; color: var(--ink) !important; font-size: 10px !important; letter-spacing: .15em !important; padding: 5px 0 !important; }
  .categories-section, .products-section, .stories-section { padding: 35px 6vw 120px; }
  .section-heading { display: flex; justify-content: space-between; align-items: end; margin-bottom: 42px; }
  .section-heading .eyebrow { margin-bottom: 18px !important; }
  .section-heading h2 { margin-bottom: 0 !important; }
  .category-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .category-card { display: block; position: relative; height: 380px; overflow: hidden; background: #d5c8bb; }
  .category-card img, .story-card img, .product-image-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s ease; }
  .category-card:hover img, .story-card:hover img, .product-card:hover img { transform: scale(1.05); }
  .category-label { position: absolute; bottom: 0; left: 0; right: 0; padding: 22px 20px; display: flex; align-items: center; justify-content: space-between; color: white; background: linear-gradient(transparent, rgba(0,0,0,.7)); padding-top: 60px; }
  .category-label p { font-family: 'Playfair Display', serif; font-size: 22px; }
  .category-label span { font-size: 24px; }
  .products-section { background: #ede6dc; }
  .slider-arrows { display: flex; gap: 6px; }
  .slider-arrows button { border: 1px solid var(--line); border-radius: 0; width: 42px; height: 42px; color: var(--ink); }
  .product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
  .product-card { background: transparent !important; border-radius: 0 !important; box-shadow: none !important; cursor: pointer; }
  .product-image-wrap { height: 330px; overflow: hidden; position: relative; background: #d8cec1; }
  .quick-view { position: absolute; top: 14px; right: 14px; background: var(--cream); padding: 8px 10px; font-size: 9px; letter-spacing: .1em; opacity: 0; transition: opacity .2s; }
  .product-card:hover .quick-view { opacity: 1; }
  .product-card .MuiCardContent-root { padding: 18px 0; }
  .product-name { font-family: 'Playfair Display', serif !important; font-size: 20px !important; }
  .product-detail, .story-date { color: var(--muted) !important; font-size: 11px !important; margin: 5px 0 12px !important; }
  .cakes-section { display: grid; grid-template-columns: 1.05fr .95fr; min-height: 620px; background: #f1dcd1; }
  .cakes-image { min-height: 620px; background: linear-gradient(rgba(53,24,18,.08), rgba(53,24,18,.08)), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1100&q=90') center/cover; }
  .cakes-copy { display: flex; flex-direction: column; justify-content: center; padding: 75px 8vw 70px; }
  .cakes-copy h2 { font-size: clamp(42px, 5vw, 67px) !important; line-height: 1.04 !important; letter-spacing: -.05em !important; margin: 0 0 24px !important; }
  .cakes-copy p { max-width: 410px; color: #765e56; font-size: 15px; line-height: 1.8; margin: 0 0 30px; }
  .cake-button { align-self: flex-start; border: 1px solid var(--ink) !important; border-radius: 0 !important; color: var(--ink) !important; padding: 13px 18px !important; font-size: 10px !important; letter-spacing: .14em !important; }
  .cake-button span { margin-left: 18px; font-size: 17px; }
  .cake-notes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; border-top: 1px solid rgba(36,32,28,.25); margin-top: 58px; padding-top: 18px; }
  .cake-notes b { display: block; color: var(--orange); font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 500; }
  .cake-notes span { display: block; color: #765e56; font-size: 10px; line-height: 1.4; margin-top: 7px; text-transform: uppercase; letter-spacing: .08em; }
  .stats-section { display: grid; grid-template-columns: 1fr 1fr; min-height: 590px; background: var(--orange); color: white; }
  .stats-image { background: url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1100&q=90') center/cover; filter: sepia(.2); }
  .stats-copy { padding: 90px 10vw; display: flex; flex-direction: column; justify-content: center; }
  .stats-copy .eyebrow { color: #f4c3a4 !important; }
  .stats-copy h2 { font-size: clamp(45px, 5vw, 70px) !important; }
  .stats-copy h2 i { color: #f6c6a6; }
  .stats-copy p { color: #f8d9c4; max-width: 420px; }
  .stats-row { display: flex; gap: 35px; border-top: 1px solid rgba(255,255,255,.35); padding-top: 24px; margin-top: 28px; }
  .stats-row b { display: block; font-family: 'Playfair Display', serif; font-size: 36px; }
  .stats-row span { font-size: 10px; color: #f8d9c4; text-transform: uppercase; letter-spacing: .1em; }
  .stories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .story-card img { height: 310px; margin-bottom: 20px; }
  .story-date { color: var(--orange) !important; letter-spacing: .1em; }
  .story-card h3 { font-size: 26px !important; margin: 0 0 18px !important; }
  .story-card a { font-size: 10px; letter-spacing: .14em; border-bottom: 1px solid var(--orange); padding-bottom: 7px; }
  .newsletter-section { background: #dbd0c3; text-align: center; padding: 110px 20px 125px; }
  .newsletter-section p { margin: -4px auto 32px; }
  .newsletter-form { display: flex; justify-content: center; max-width: 440px; margin: auto; border-bottom: 1px solid var(--ink); }
  .newsletter-form .MuiInputBase-root { flex: 1; font-size: 14px; }
  .newsletter-form input { padding: 14px 0; }
  .newsletter-form button { color: var(--orange); font-size: 10px; letter-spacing: .14em; }
  .subscribed { color: var(--orange) !important; font-family: 'Playfair Display', serif; font-size: 18px !important; }
  .footer { background: var(--ink); color: #eee5d9; padding: 80px 7vw 25px; display: flex; flex-wrap: wrap; align-items: start; justify-content: space-between; gap: 48px; }
  .footer-intro { align-self: start; }
  .footer-brand { color: #fff !important; font-family: 'Playfair Display', serif !important; font-size: 31px !important; font-weight: 500 !important; letter-spacing: -.04em !important; }
  .footer p { color: #aaa096; font-size: 12px; }
  .footer-intro p { margin: 8px 0 28px; color: var(--orange); text-transform: uppercase; letter-spacing: .14em; font-size: 10px; }
  .footer-intro address { color: #c5bbb0; font-size: 13px; font-style: normal; line-height: 1.8; }
  .footer-links { display: grid; grid-template-columns: repeat(3, minmax(110px, 1fr)); gap: 34px; flex: 1 1 500px; max-width: 620px; }
  .footer-links b { color: var(--orange); font-size: 10px; letter-spacing: .18em; display: block; margin-bottom: 20px; }
  .footer-links a, .footer-links span { display: block; color: #c5bbb0; font-size: 12px; margin-bottom: 11px; }
  .footer-map { flex: 0 1 300px; height: 190px; margin-top: 0; overflow: hidden; border: 1px solid #504941; position: relative; }
  .footer-map iframe { width: 100%; height: 100%; border: 0; display: block; filter: sepia(.2) saturate(.75); }
  .map-link { position: absolute; right: 10px; bottom: 10px; padding: 8px 10px; background: var(--ink); color: #fff; font-size: 9px; letter-spacing: .12em; }
  .map-link span { margin-left: 8px; font-size: 14px; }
  .footer .MuiDivider-root { width: 100%; border-color: #504941; }
  .copyright { width: 100%; color: #81776e; font-size: 10px !important; }
  .drawer-content { min-width: 260px; padding: 80px 30px; display: flex; flex-direction: column; gap: 25px; font-family: 'Playfair Display', serif; font-size: 28px; }
  .product-dialog { border-radius: 0 !important; background: var(--cream) !important; max-width: 760px !important; }
  .product-dialog .MuiDialogContent-root { display: grid; grid-template-columns: 1fr 1fr; gap: 35px; padding: 0 !important; }
  .product-dialog img { width: 100%; height: 390px; object-fit: cover; }
  .product-dialog > div > div:last-child { padding: 55px 35px 35px 0; }
  .product-dialog h2 { font-size: 38px !important; margin-bottom: 25px !important; }
  .product-dialog .dark-button { margin-top: 24px; }
  @media (max-width: 800px) {
    .nav-inner { min-height: 88px !important; padding: 0 18px !important; }
    .mobile-menu { display: inline-flex !important; }
    .desktop-links, .social-links { display: none; }
    .brand { min-width: 180px; }
    .brand-name { font-size: 22px; letter-spacing: .13em; }
    .brand-tagline { font-size: 7px; letter-spacing: .16em; }
    .hero-section { min-height: calc(100vh - 88px); }
    .hero-copy { padding: 70px 20px; }
    .hero-logo { width: 90px; height: 135px; margin-bottom: 22px; }
    .hero-copy h1 { font-size: clamp(34px, 9vw, 58px) !important; }
    .hero-copy p { font-size: 12px; }
    .stats-section { grid-template-columns: 1fr; }
    .intro-section { padding: 90px 28px; }
    .categories-section, .products-section, .stories-section { padding: 25px 20px 80px; }
    .section-heading { align-items: start; gap: 20px; flex-direction: column; }
    .category-grid, .product-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .category-card { height: 260px; }
    .category-label p { font-size: 17px; }
    .product-image-wrap { height: 230px; }
    .product-name { font-size: 17px !important; }
    .cakes-section { grid-template-columns: 1fr; }
    .cakes-image { min-height: 390px; }
    .cakes-copy { padding: 70px 28px; }
    .cakes-copy h2 { font-size: 48px !important; }
    .cake-notes { gap: 10px; margin-top: 45px; }
    .cake-notes span { font-size: 8px; }
    .stats-image { min-height: 340px; }
    .stats-copy { padding: 70px 28px; }
    .stats-row { gap: 15px; }
    .stats-row b { font-size: 28px; }
    .stats-row span { font-size: 8px; }
    .stories-grid { grid-template-columns: 1fr; gap: 45px; }
    .story-card img { height: 300px; }
    .footer { grid-template-columns: 1fr; gap: 45px; padding: 65px 28px 25px; }
    .footer-intro, .footer-links, .footer-map { flex-basis: 100%; max-width: none; }
    .footer-links { gap: 12px; }
    .product-dialog .MuiDialogContent-root { grid-template-columns: 1fr; }
    .product-dialog img { height: 260px; }
    .product-dialog > div > div:last-child { padding: 10px 25px 30px; }
  }
`
