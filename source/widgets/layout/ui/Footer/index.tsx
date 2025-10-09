import { GallerySection } from '@/source/widgets/layout/ui/Footer/GallerySection'
import { LowerSection } from '@/source/widgets/layout/ui/Footer/LowerSection'
import { UpperSection } from '@/source/widgets/layout/ui/Footer/UpperSection'

export const Footer = () => {
  return (
    <footer>
      <GallerySection />
      <UpperSection />
      <LowerSection />
    </footer>
  )
}
