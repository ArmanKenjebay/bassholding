import homeCard1 from '@/../../public/home-card1.jpg'
import homeCard2 from '@/../../public/home-card2.jpg'
import homeCard3 from '@/../../public/home-card3.jpg'
import homeCard4 from '@/../../public/home-card4.jpg'

const directionCards = [
  {
    link: 'bassgold',
    image: homeCard1,
    title: 'MINING',
    desc: 'mining',
    chips: ['subsoil_use', 'gold_mining'],
  },
  {
    link: 'pincode',
    image: homeCard2,
    title: 'HR TECH',
    desc: 'hr_tech',
    chips: ['HR TECH', 'career_guidance', 'personnel_assessment'],
  },
  {
    link: 'bass-eco',
    image: homeCard3,
    title: 'SHIPPING',
    desc: 'shipping_desc',
    chips: ['ecology', 'transport'],
  },
  {
    link: 'fintech',
    image: homeCard4,
    title: 'FINTECH',
    desc: 'fintech_desc',
    chips: ['crowdlending', 'factoring'],
  },
]

const getDirections = () => {
  return [...directionCards]
}

export default getDirections
