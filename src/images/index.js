const imgUrl = `${process.env.PUBLIC_URL}/img`

export const LogoImg = `${imgUrl}/logo.png`

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

const imagePaths = ({ dir, subdir, length }) => [...Array(length)].map((img, index) => `${imgUrl}/${dir}/${subdir}/img${index}.jpg`)

export const homeImages = () => imagePaths({ dir: 'gallery', subdir: 'home', length: 40 })
