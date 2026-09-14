import { useState } from 'react'
import {
  Alert, AppBar, Box, Button, Card, CardContent, Dialog, GlobalStyles,
  DialogContent, Divider, Drawer, IconButton, Snackbar, Stack, TextField,
  Toolbar, Typography,
} from '@mui/material'
import { bakeryStyles } from './muiStyles'

const categories = [
  { name: 'Ekşi Mayalı Ekmek', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85' },
  { name: 'Tartlar', image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85' },
  { name: 'Viyana Lezzetleri', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85' },
  { name: 'Kek & Kurabiye', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85' },
]

const products = [
  { name: 'Sandviç Ekşi Mayalı', detail: '600 g · Klasik Seri', price: '₺185', image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=720&q=85' },
  { name: 'Sade Kruvasan', detail: '4’lü paket · Tereyağlı', price: '₺240', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=720&q=85' },
  { name: 'Çilekli Mascarpone Tart', detail: '6 kişilik · Günün tatlısı', price: '₺490', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=720&q=85' },
  { name: 'Çikolatalı Cookie', detail: '6’lı paket · Yoğun kakao', price: '₺165', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=720&q=85' },
]

const stories = [
  { title: 'Ekşi mayalı ekmek rehberi', date: '12.04.2025', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85' },
  { title: 'Evde çıtır kruvasan sırları', date: '28.03.2025', image: 'https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=900&q=85' },
  { title: 'Mevsimin en güzel meyveleri', date: '08.03.2025', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85' },
]

const navItems = ['Ürünler', 'Hikayemiz', 'İlham', 'Bize Ulaşın']

function App() {
  const [cart, setCart] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [quickProduct, setQuickProduct] = useState(null)
  const [toast, setToast] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const addToCart = () => {
    setCart((current) => current + 1)
    setToast(true)
  }

  return (
    <Box className="site-shell">
      <GlobalStyles styles={bakeryStyles} />
      <Box className="notice-bar">Hafta içi 16:00’a kadar verilen siparişlerde ertesi gün teslimat <span>✦</span> İstanbul geneli</Box>
      <AppBar position="sticky" className="main-nav" elevation={0}>
        <Toolbar className="nav-inner">
          <IconButton className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Menüyü aç">☰</IconButton>
          <Typography className="brand" component="a" href="#top">FIRIN<span>IM</span></Typography>
          <Box className="desktop-links">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>)}</Box>
          <Stack direction="row" className="nav-actions"><IconButton aria-label="Arama" className="action-icon">⌕</IconButton><Button className="cart-button" onClick={() => setToast(true)}>Sepet <b>{cart}</b></Button></Stack>
        </Toolbar>
      </AppBar>

      <main id="top">
        <section className="hero-section">
          <Box className="hero-copy">
            <Typography className="eyebrow">GÜNÜN EN GÜZEL RİTÜELİ</Typography>
            <Typography component="h1">
              Pure joy,
              <br />
              <i>baked in.</i>
            </Typography>
            <p>
              Her gün taze, her lokmada gerçek.
              <br />
              Şehrin en sevilen fırın lezzetleri kapında.
            </p>
            <Button className="dark-button" href="#ürünler">
              KEŞFET <span>↗</span>
            </Button>
          </Box>
          <Box className="hero-image-wrap">
            <Box className="hero-image" />
            <Box className="hero-stamp">
              TUTKU
              <br />
              <span>+</span>
              <br />
              SABIR
              <br />
              <span>+</span>
              <br />
              ÖZEN
            </Box>
          </Box>
        </section>

        <section className="intro-section">
          <Typography className="eyebrow">FIRINIM’DA</Typography>
          <Typography component="h2">
            Yavaş pişen, <i>iyi</i> şeyler.
          </Typography>
          <p>
            En iyi malzemeleri seçiyor, zamana saygı duyuyoruz. Çünkü iyi ekmek aceleye gelmez; güzel bir gün de öyle.
          </p>
          <Button className="text-button">
            HİKAYEMİZİ OKU <span>↗</span>
          </Button>
        </section>

        <section className="categories-section" id="ürünler">
          <Box className="section-heading">
            <Box>
              <Typography className="eyebrow">VİTRİNDEKİLER</Typography>
              <Typography component="h2">
                Fırından <i>çıkanlar.</i>
              </Typography>
            </Box>
            <Button className="outline-button">
              TÜM MENÜ <span>↗</span>
            </Button>
          </Box>
          <Box className="category-grid">
            {categories.map((category) => (
              <a className="category-card" href="#products" key={category.name}>
                <img src={category.image} alt={category.name} />
                <Box className="category-label">
                  <Typography>{category.name}</Typography>
                  <span>↗</span>
                </Box>
              </a>
            ))}
          </Box>
        </section>

        <section className="products-section" id="products">
          <Box className="section-heading">
            <Box>
              <Typography className="eyebrow">ÇOK SEVİLENLER</Typography>
              <Typography component="h2">
                Bugün <i>ne yesek?</i>
              </Typography>
            </Box>
            <Box className="slider-arrows">
              <IconButton aria-label="Önceki">←</IconButton>
              <IconButton aria-label="Sonraki">→</IconButton>
            </Box>
          </Box>
          <Box className="product-grid">
            {products.map((product) => (
              <Card className="product-card" key={product.name} onClick={() => setQuickProduct(product)}>
                <Box className="product-image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="quick-view">HIZLI BAKIŞ</span>
                </Box>
                <CardContent>
                  <Typography className="product-name">{product.name}</Typography>
                  <Typography className="product-detail">{product.detail}</Typography>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography className="price">{product.price}</Typography>
                    <Button
                      className="add-button"
                      onClick={(event) => {
                        event.stopPropagation()
                        addToCart()
                      }}
                    >
                      +
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </section>

        <section className="stats-section">
          <Box className="stats-image" />
          <Box className="stats-copy">
            <Typography className="eyebrow">BİZİ BİZ YAPAN</Typography>
            <Typography component="h2">
              Tutku, sabır,
              <br />
              <i>mükemmellik.</i>
            </Typography>
            <p>
              1998’den beri hamura, fırına ve iyi bir sofraya inanıyoruz. Her sabah aynı heyecanla yoğuruyor, her ürünü el emeğiyle hazırlıyoruz.
            </p>
            <Box className="stats-row">
              <Box><b>26</b><span>yıllık deneyim</span></Box>
              <Box><b>48</b><span>günlük ürün</span></Box>
              <Box><b>100%</b><span>gerçek malzeme</span></Box>
            </Box>
          </Box>
        </section>

        <section className="stories-section" id="ilham">
          <Box className="section-heading">
            <Box>
              <Typography className="eyebrow">EVDE İLHAM</Typography>
              <Typography component="h2">
                Fırından <i>notlar.</i>
              </Typography>
            </Box>
            <Button className="outline-button">
              TÜM YAZILAR <span>↗</span>
            </Button>
          </Box>
          <Box className="stories-grid">
            {stories.map((story) => (
              <article className="story-card" key={story.title}>
                <img src={story.image} alt={story.title} />
                <Typography className="story-date">{story.date}</Typography>
                <Typography component="h3">{story.title}</Typography>
                <a href="#top">
                  DEVAMINI OKU <span>↗</span>
                </a>
              </article>
            ))}
          </Box>
        </section>

        <section className="newsletter-section">
          <Typography className="eyebrow">FIRINDAN SICAK HABERLER</Typography>
          <Typography component="h2">
            İyi şeyleri <i>kaçırma.</i>
          </Typography>
          <p>Yeni ürünler, mevsimsel tatlar ve fırından çıkan son haberler.</p>
          {subscribed ? (
            <Typography className="subscribed">Teşekkürler, listemize eklendin.</Typography>
          ) : (
            <Box
              component="form"
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault()
                if (email) setSubscribed(true)
              }}
            >
              <TextField
                variant="standard"
                placeholder="E-posta adresin"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button type="submit">KAYDOL <span>↗</span></Button>
            </Box>
          )}
        </section>
      </main>

      <footer className="footer" id="bize-ulaşın">
        <Box>
          <Typography className="brand footer-brand">
            FIRIN<span>IM</span>
          </Typography>
          <p>İyi ekmek, iyi gün.</p>
        </Box>
        <Box className="footer-links">
          <Box>
            <b>KEŞFET</b>
            <a href="#ürünler">Ürünler</a>
            <a href="#top">Hikayemiz</a>
            <a href="#ilham">İlham</a>
          </Box>
          <Box>
            <b>İLETİŞİM</b>
            <a href="mailto:merhaba@firinim.com">merhaba@firinim.com</a>
            <a href="tel:+902121234567">0212 123 45 67</a>
            <span>İstanbul, Türkiye</span>
          </Box>
          <Box>
            <b>BİZİ TAKİP ET</b>
            <a href="#top">Instagram</a>
            <a href="#top">Pinterest</a>
            <a href="#top">LinkedIn</a>
          </Box>
        </Box>
        <Divider />
        <Typography className="copyright">
          © 2025 Fırınım · Tüm hakları saklıdır.
        </Typography>
      </footer>

      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <Box className="drawer-content">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </Box>
      </Drawer>

      <Dialog
        open={Boolean(quickProduct)}
        onClose={() => setQuickProduct(null)}
        PaperProps={{ className: 'product-dialog' }}
      >
        {quickProduct && (
          <DialogContent>
            <img src={quickProduct.image} alt={quickProduct.name} />
            <Box>
              <Typography className="eyebrow">FIRINIM’DAN</Typography>
              <Typography component="h2">{quickProduct.name}</Typography>
              <Typography className="product-detail">
                {quickProduct.detail}
              </Typography>
              <Typography className="price">{quickProduct.price}</Typography>
              <Button
                className="dark-button"
                onClick={() => {
                  addToCart()
                  setQuickProduct(null)
                }}
              >
                SEPETE EKLE
              </Button>
            </Box>
          </DialogContent>
        )}
      </Dialog>

      <Snackbar
        open={toast}
        autoHideDuration={2200}
        onClose={() => setToast(false)}
      >
        <Alert severity="success" onClose={() => setToast(false)}>
          Ürün sepetine eklendi.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default App
