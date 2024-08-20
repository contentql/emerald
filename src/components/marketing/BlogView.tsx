import Image from 'next/image'
import Link from 'next/link'

const BlogView = () => {
  return (
    <div className='mx-auto my-12 flex flex-col items-center gap-2 px-4 sm:my-24 md:max-w-2xl  md:px-0'>
      <div className='flex w-full flex-col items-center gap-8'>
        <div className='flex'>
          <div className='text-secondary-content'>
            10 Nov 2023&nbsp;&nbsp;&nbsp;.
          </div>
          <div className='text-secondary-content'>
            &nbsp;&nbsp;&nbsp;2 min read
          </div>
        </div>
        <div className='text-center font-bold sm:text-4xl md:text-5xl'>
          Aureate Serpent and Celestial Sojourn
        </div>
        <p className='text-center text-lg text-secondary-content'>
          In the celestial ballet of myth, the Aureate Serpent&apos;s golden
          scales shimmer as heroes navigate cosmic realms. From East to West,
          the universal allure of mythical journeys echoes humanity&apos;s
          timeless quest for understanding.
        </p>
        <div className='flex items-center gap-2'>
          <Link href={`/author/celestia`} className='relative h-8 w-8'>
            <Image
              alt='Author'
              src='/images/home/2-1.webp'
              className='rounded-full'
              fill
            />
          </Link>
          <Link href={`/author/celestia`}>
            <p className='ml-2'>Celestia Lilly</p>
          </Link>
        </div>
        <div className='avatar w-full'>
          <div className='relative h-60 w-full rounded-xl md:h-96'>
            <Image
              alt='Post'
              src='https://elrond.hedwik.io/content/images/size/w1200/format/webp/2023/12/8.png'
              fill
            />
          </div>
        </div>
      </div>
      <div>
        <p className='mt-6 text-lg'>
          Embarking on the mythical odyssey of the Aureate Serpent, we plunge
          into the rich tapestry of global folklore. The golden dragon, a symbol
          echoing through the corridors of Chinese mythology, dances in the
          celestial realm, embodying the harmonious balance between nature and
          imperial rule. In European lore, the golden-hued dragons stand as both
          guardians and adversaries, challenging heroes on their quests and
          offering rewards steeped in symbolic significance. The cross-cultural
          allure of the Aureate Serpent, manifested in various mythologies,
          underscores the universality of human fascination with these majestic
          creatures.
        </p>
        <p className='mt-6 text-lg'>
          In examining the profound symbolism embedded in celestial sojourns, we
          unravel layers of meaning. These journeys become allegories for
          spiritual quests, mirroring the human quest for enlightenment and
          understanding of the cosmos. The ethereal landscape, navigated by gods
          and mortals alike, transforms into a stage where cultures articulate
          their cosmological perspectives, transcending temporal and spatial
          constraints.
        </p>
        <h1 className='mb-4 mt-10 text-2xl font-bold'>
          Navigating the Cosmic Landscape
        </h1>
        <p className='text-lg'>
          Venturing beyond earthly confines, the concept of celestial sojourn
          captivates the human psyche. Mythologies globally converge on the
          theme of cosmic exploration, with heroes and deities alike
          transcending mortal limitations. Whether traversing the celestial
          bridges of Norse mythology or riding chariots through the heavens in
          Hindu cosmology, these celestial sojourns paint a canvas of cosmic
          significance. The celestial realm becomes a playground for the
          extraordinary, mirroring humanity&apos;s innate desire to soar beyond
          the ordinary.
        </p>
        <p className='mt-6 text-lg'>
          In examining the profound symbolism embedded in celestial sojourns, we
          unravel layers of meaning. These journeys become allegories for
          spiritual quests, mirroring the human quest for enlightenment and
          understanding of the cosmos. The ethereal landscape, navigated by gods
          and mortals alike, transforms into a stage where cultures articulate
          their cosmological perspectives, transcending temporal and spatial
          constraints.
        </p>
        <h1 className='mb-4 mt-10 text-2xl font-bold'>Archetypal Encounters</h1>
        <p className='text-lg'>
          Within the cosmic ballet of myth, heroes and dragons engage in
          archetypal encounters that transcend cultural boundaries. The Aureate
          Serpent, with its celestial splendor, becomes a catalyst for heroism,
          challenging mortals to confront their deepest fears and desires.
          Whether battling for the favor of gods or safeguarding ancient
          treasures, the hero-dragon dynamic symbolizes the eternal struggle
          between chaos and order, light and darkness.
        </p>
        <p className='mt-6 text-lg'>
          The hero&apos;s journey, an intrinsic element of global mythologies,
          finds its apotheosis in celestial realms. From Joseph Campbell&apos;s
          monomyth to the hero&apos;s quest in Eastern tales, the celestial
          sojourn becomes a crucible for transformation. Through these
          narratives, societies explore the complexities of human existence,
          offering moral lessons and timeless insights into the human condition.
        </p>
      </div>
    </div>
  )
}

export default BlogView
