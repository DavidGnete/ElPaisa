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

        <ProfileDescription />
        <div className=" bg-slate-200 ">   
        <GallerySection
        id="portafolio"
        text = "Cocinas"
        images={ImageSeed.cocinas}/>

        {/* segunda galleria */}
        <GallerySection
        id=""
        text = "Armarios"
        images={ImageSeed.armarios}/>

       {/*  tercera galleria */}
        <GallerySection
        id=""
        text = "Baños"
        images={ImageSeed.baños}/>

        </div>

        
        <BrandIcons />
      <div className=" bg-slate-200"> 
        <Whattsap />
        <Footer />
      </div>
    </div>
    </main>
  );
}
