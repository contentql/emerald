import Container from '../common/Container'

const featuresList = [
  {
    title: 'General features',
    features: [
      { featurePoint: 'Light, Dark and Auto version' },
      { featurePoint: 'Ready for Ghost 5.x' },
      { featurePoint: 'Fast, lightweight, clean, and minimal. All-in-one' },
      { featurePoint: 'Developed with TailwindCSS and Vanilla JS' },
      { featurePoint: 'No unnecessary CSS and JavaScript' },
      { featurePoint: 'Fully responsive' },
      { featurePoint: 'Custom Ads Support' },
      { featurePoint: 'Fully compatible with modern browsers' },
      { featurePoint: 'Excellent mobile experience' },
      { featurePoint: 'Encourages writing, content-focused' },
      { featurePoint: 'Custom-developed Lazyload for images and elements' },
      { featurePoint: 'Fast support' },
    ],
  },
  {
    title: 'Supported Inbuilt Ghost features',
    features: [
      { featurePoint: 'Translation Ready' },
      { featurePoint: 'Membership tiers' },
      { featurePoint: 'Native Search' },
      { featurePoint: 'Native Comments' },
      { featurePoint: 'Responsive images' },
      { featurePoint: 'Site cover image' },
      { featurePoint: 'Accent color' },
      { featurePoint: 'Brand logo' },
      { featurePoint: 'Post title and description' },
      { featurePoint: 'Post, page, tag and author page' },
      { featurePoint: 'Author avatar, bio, website and social accounts' },
      { featurePoint: 'Tag cover and description' },
      { featurePoint: 'Tags in post page' },
      { featurePoint: 'Multiple authors' },
      {
        featurePoint:
          'Audio, Blockquote, Bookmark, Button, Callout, File, Gallery, Header, Product, Toggle, Video, Signup Cards',
      },
      { featurePoint: 'Image card with normal, wide and full width' },
      { featurePoint: 'Secondary navigation' },
      { featurePoint: 'Reading time in post view' },
      { featurePoint: 'Related Posts' },
      { featurePoint: 'Two quotes style' },
      { featurePoint: 'WebP format support' },
    ],
  },
]

const Features = () => {
  return (
    <Container className='my-12 px-4 sm:my-24 md:max-w-2xl lg:px-0'>
      {featuresList?.map((feature, index) => (
        <div key={index}>
          <div className='mb-4 text-[1.72rem] font-bold'>{feature?.title}</div>
          <ul className='list-disc'>
            {feature?.features?.map((featurePoint, index) => (
              <li key={index} className='my-3 ml-5 text-lg text-[#3F3F46]'>
                {featurePoint?.featurePoint}
              </li>
            ))}
          </ul>
          {/* <hr className='my-14'></hr> */}
          {index < featuresList.length - 1 && (
            <div className='my-14 flex justify-center'>
              <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
              <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
              <span className='mx-2 inline-block h-1.5 w-1.5 rounded-full bg-base-300'></span>
            </div>
          )}
        </div>
      ))}
    </Container>
  )
}

export default Features
