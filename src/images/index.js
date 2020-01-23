const imgUrl = `${process.env.PUBLIC_URL}/img`

export const LogoImg = `${imgUrl}/logo.png`
export const LogoTextImg = `${imgUrl}/logo-text.png`

export const CoverImg = `${imgUrl}/cover.jpg`

export const CityImg = `${imgUrl}/misc/city.svg`
export const EventImg = `${imgUrl}/misc/event.svg`
export const LandscapeImg = `${imgUrl}/misc/landscape.svg`
export const MenuImg = `${imgUrl}/misc/menu.svg`
export const PeopleImg = `${imgUrl}/misc/people.svg`
export const PortraitImg = `${imgUrl}/misc/portrait.svg`
export const PdfImg = `${imgUrl}/misc/pdf.svg`
export const ContactImg = `${imgUrl}/misc/contact.svg`
export const GalleryImg = `${imgUrl}/misc/gallery.svg`
export const AboutImg = `${imgUrl}/misc/about.svg`
export const HomeImg = `${imgUrl}/misc/home.svg`

export const InstagramImg = `${imgUrl}/misc/instagram.svg`
export const FacebookImg = `${imgUrl}/misc/facebook.svg`

export const InstagramImgLarge = `${imgUrl}/misc/instagram-large.png`
export const FacebookImgLarge = `${imgUrl}/misc/facebook-large.png`


const imagePaths = ({ dir, subdir, length }) => [...Array(length)].map((img, index) => `${imgUrl}/${dir}/${subdir}/img${index}.jpg`)

export const homeImages = () => imagePaths({ dir: 'gallery', subdir: 'home', length: 60 })
