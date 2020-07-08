const imgUrl = process.env.REACT_APP_IMG_URL

export const LogoImg = `${imgUrl}/logo.png`
export const LogoTextImg = `${imgUrl}/logo-text.png`

export const CoverImg = `${imgUrl}/cover.jpg`
export const AboutImg = `${imgUrl}/about.jpg`

export const MenuImg = `${imgUrl}/misc/menu.svg`

export const HomeImg = `${imgUrl}/misc/home.svg`

export const InstagramImg = `${imgUrl}/misc/instagram.svg`
export const FacebookImg = `${imgUrl}/misc/facebook.svg`

export const InstagramImgLarge = `${imgUrl}/misc/instagram-large.png`
export const FacebookImgLarge = `${imgUrl}/misc/facebook-large.png`

export const arrow = {
  previous: `${imgUrl}/misc/previous.svg`,
  next: `${imgUrl}/misc/next.svg`
}

export const X = `${imgUrl}/misc/x.svg`


// const imagePaths = ({ dir, subdir, length }) => [...Array(length)].map((img, index) => `${imgUrl}/${dir}/${subdir}/img${index}.jpg`)

const imagePaths = ({ dir, length }) => [...Array(length)].map((img, index) => `${imgUrl}/${dir}/img${index}.jpg`)

export const galleryImages = {
  'details': imagePaths({ dir: 'details', length: 32 }),
  'people': imagePaths({ dir: 'people', length: 137 }),
  'travels': imagePaths({ dir: 'travels', length: 163 }),
  'chill-vibez-battles': imagePaths({ dir: 'projects/chill-vibez-battles', length: 101 }),
  'supeus-case-study': imagePaths({ dir: 'projects/supeus-case-study', length: 26 }),
}
