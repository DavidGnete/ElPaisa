import { ImageSeed } from "@/seed/seed";

import { HeadSlide } from "./(page)/Head/Slidepage";
import { ProfileDescription } from "./(page)/profile/ProfileDescription";
import { GallerySection } from "./(page)/GallerySection/GallerySection";
import { Footer } from "./(page)/Footer/footer";

import { Whattsap } from "@/components/feature/whattsap/whattsap";
import { BrandStatement } from "@/components/ui/brandState/BrandStatement";
import { BrandIcons } from "@/components/ui/brand-icon/BrandIcons";


export default function Home() {
  return (
    <main>
      <section className="relative">
        <HeadSlide 
        title={"Gallery Images"}
        images={ImageSeed.headSlide}
        className=""
        />
    </section>

    <div>    
    <BrandStatement />

      <div className="mb-24">   
        <ProfileDescription />
        {/* <BrandIcons /> */}
        <GallerySection
        text = "Pisos"
        images={ImageSeed.images}/>

        <GallerySection
        text = "Cocinas"
        images={ImageSeed.images}/>

        <Whattsap />
        <Footer />
        </div>

    </div>
    </main>
  );
}
