import insta1 from "../../assets/images/instagram1.png";
import insta2 from "../../assets/images/instagram2.png";
import insta3 from "../../assets/images/instagram3.png";
import insta4 from "../../assets/images/instagram4.png";
import insta5 from "../../assets/images/instagram5.png";
import insta6 from "../../assets/images/instagram6.png";
export const InstagramSection = () => {
  return (
    <div className="container mx-auto px-2 pt-5">
      <div className="grid md:grid-cols-4 text-center justify-center">
        <div>
          <img src={insta1} alt="instaphoto" />
        </div>
        <div>
          <img src={insta2} alt="instaphoto" />
        </div>
        <div>
          <img src={insta3} alt="instaphoto" />
        </div>
        <div className="row-span-3 my-auto p-3">
          <h5 className="italic text-[1.2rem] pb-2">Instagram</h5>
          <p className="text-[.7rem] pb-2 text-black">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs.
          </p>
          <h6 className="text-primary font-[600] text-[1.2rem]">
            #Outfit_Fashion
          </h6>
        </div>
        <div>
          <img src={insta4} alt="instaphoto" />
        </div>
        <div>
          <img src={insta5} alt="instaphoto" />
        </div>
        <div>
          <img src={insta6} alt="instaphoto" />
        </div>
      </div>
    </div>
  );
};
