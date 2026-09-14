export const bakeryStyles = `
  :root { --ink: #24201c; --cream: #f6f1e8; --orange: #bd552f; --line: #d8d0c5; --muted: #777067; }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--cream); color: var(--ink); font-family: 'DM Sans', sans-serif; }
  a { color: inherit; text-decoration: none; }
  .site-shell { overflow: hidden; }
  .notice-bar { background: var(--orange); color: #fff9f0; text-align: center; padding: 9px 20px; font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }
  .notice-bar span { padding: 0 15px; color: #f6c6a6; }
  .main-nav { background: rgba(246,241,232,.94) !important; border-bottom: 1px solid var(--line); color: var(--ink) !important; }
  .nav-inner { min-height: 76px !important; max-width: 1280px; width: 100%; margin: auto; padding: 0 42px !important; justify-content: space-between; }
  .brand { color: var(--ink) !important; font-size: 27px !important; font-weight: 600 !important; letter-spacing: -.08em !important; }
  .brand span { color: var(--orange); }
  .desktop-links { display: flex; gap: 34px; margin-left: 70px; font-size: 12px; text-transform: uppercase; letter-spacing: .12em; }
  .desktop-links a, .footer-links a { transition: color .2s; }
  .desktop-links a:hover, .footer-links a:hover { color: var(--orange); }
  .nav-actions { align-items: center; }
  .action-icon { font-size: 26px !important; color: var(--ink) !important; font-weight: 300 !important; }
  .cart-button { border: 1px solid var(--ink) !important; border-radius: 0 !important; color: var(--ink) !important; font-size: 11px !important; letter-spacing: .1em !important; padding: 9px 14px !important; }
  .cart-button b { margin-left: 8px; color: var(--orange); }
  .mobile-menu { display: none !important; color: var(--ink) !important; }
  main { max-width: 1440px; margin: auto; }
  .hero-section { min-height: 660px; display: grid; grid-template-columns: 43% 57%; background: #e5dbce; }
  .hero-copy { display: flex; flex-direction: column; justify-content: center; padding: 70px 7vw 70px 9vw; }
  .eyebrow { color: var(--orange) !important; font-size: 10px !important; font-weight: 600 !important; letter-spacing: .2em !important; margin-bottom: 24px !important; text-transform: uppercase; }
  h1, h2, h3 { font-family: 'Playfair Display', serif !important; font-weight: 500 !important; }
  .hero-copy h1 { font-size: clamp(58px, 7vw, 103px) !important; line-height: .94 !important; letter-spacing: -.06em !important; margin: 0 0 30px !important; }
  h1 i, h2 i { color: var(--orange); font-weight: 500; }
  .hero-copy p, .intro-section p, .stats-copy p, .newsletter-section p { color: var(--muted); font-size: 15px; line-height: 1.75; }
  .hero-copy p { margin-bottom: 34px; }
  .dark-button { width: fit-content; border-radius: 0 !important; color: #fff !important; background: var(--ink) !important; padding: 14px 22px !important; font-size: 10px !important; letter-spacing: .17em !important; }
  .dark-button span, .text-button span, .outline-button span, .newsletter-form span, .story-card a span { margin-left: 15px; font-size: 17px; }
  .hero-image-wrap { min-height: 660px; position: relative; overflow: hidden; }
  .hero-image { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(24,17,12,.1), transparent), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=90') center/cover; }
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
  .price { font-family: 'Playfair Display', serif !important; font-size: 20px !important; color: var(--orange) !important; }
  .add-button { min-width: 34px !important; height: 34px; border-radius: 50% !important; background: var(--ink) !important; color: white !important; font-size: 20px !important; font-weight: 300 !important; }
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
  .footer { background: var(--ink); color: #eee5d9; padding: 80px 7vw 25px; display: grid; grid-template-columns: 1fr 2fr; gap: 80px; }
  .footer-brand { color: #fff !important; }
  .footer p { color: #aaa096; font-size: 12px; }
  .footer-links { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
  .footer-links b { color: var(--orange); font-size: 10px; letter-spacing: .18em; display: block; margin-bottom: 20px; }
  .footer-links a, .footer-links span { display: block; color: #c5bbb0; font-size: 12px; margin-bottom: 11px; }
  .footer .MuiDivider-root { grid-column: 1 / -1; border-color: #504941; }
  .copyright { color: #81776e; font-size: 10px !important; grid-column: 1 / -1; }
  .drawer-content { min-width: 260px; padding: 80px 30px; display: flex; flex-direction: column; gap: 25px; font-family: 'Playfair Display', serif; font-size: 28px; }
  .product-dialog { border-radius: 0 !important; background: var(--cream) !important; max-width: 760px !important; }
  .product-dialog .MuiDialogContent-root { display: grid; grid-template-columns: 1fr 1fr; gap: 35px; padding: 0 !important; }
  .product-dialog img { width: 100%; height: 390px; object-fit: cover; }
  .product-dialog > div > div:last-child { padding: 55px 35px 35px 0; }
  .product-dialog h2 { font-size: 38px !important; margin-bottom: 25px !important; }
  .product-dialog .dark-button { margin-top: 24px; }
  @media (max-width: 800px) {
    .notice-bar { font-size: 9px; }
    .nav-inner { min-height: 64px !important; padding: 0 18px !important; }
    .mobile-menu { display: inline-flex !important; }
    .desktop-links, .action-icon { display: none; }
    .brand { font-size: 23px !important; }
    .hero-section, .stats-section { grid-template-columns: 1fr; }
    .hero-copy { padding: 80px 28px; }
    .hero-image-wrap { min-height: 430px; }
    .intro-section { padding: 90px 28px; }
    .categories-section, .products-section, .stories-section { padding: 25px 20px 80px; }
    .section-heading { align-items: start; gap: 20px; flex-direction: column; }
    .category-grid, .product-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .category-card { height: 260px; }
    .category-label p { font-size: 17px; }
    .product-image-wrap { height: 230px; }
    .product-name { font-size: 17px !important; }
    .stats-image { min-height: 340px; }
    .stats-copy { padding: 70px 28px; }
    .stats-row { gap: 15px; }
    .stats-row b { font-size: 28px; }
    .stats-row span { font-size: 8px; }
    .stories-grid { grid-template-columns: 1fr; gap: 45px; }
    .story-card img { height: 300px; }
    .footer { grid-template-columns: 1fr; gap: 45px; padding: 65px 28px 25px; }
    .footer-links { gap: 12px; }
    .product-dialog .MuiDialogContent-root { grid-template-columns: 1fr; }
    .product-dialog img { height: 260px; }
    .product-dialog > div > div:last-child { padding: 10px 25px 30px; }
  }
`
