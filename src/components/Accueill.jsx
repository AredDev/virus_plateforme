import text from "../assets/images/text.svg";
import img1 from "../assets/images/sary.svg";
import cn from "../assets/images/Cartoon_Network_logo.svg";
import booking from "../assets/images/Booking.com_logo.svg";
import dropbox from "../assets/images/Dropbox_logo.svg";
import toshiba from "../assets/images/Dropbox_logo.svg";
import spotify from "../assets/images/Booking.com_logo.svg";
import netflix from "../assets/images/Toshiba_logo.svg";

export default function Accueill() {
  return (
    <section className="relative overflow-hidden mt-14 text-white mb-[-80px]">
      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center">
        {/* Texte du haut */}
        <img
          src={text}
          alt="One fixed price"
          className="mb-3 w-44 md:w-52 opacity-90"
        />

        {/* Titre principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-5xl leading-tight">
          Surveillez l'évolution de{" "}
          <span className="block">l'épidémie en temps réel</span>
        </h1>

        {/* Texte descriptif */}
        <div className="text-white/90 text-base md:text-lg max-w-3xl mb-8 space-y-2">
          <p>
            Restez informé et adoptez les bons gestes pour vous protéger et
            protéger les autres.
          </p>
          <p>
            Adoptez les bons gestes pour vous protéger et protéger les autres.
          </p>
        </div>

        {/* Bouton */}
        <button className="bg-[#5b4a9d] hover:bg-[#6b5aad] text-white font-semibold px-8 py-4 cursor-pointer rounded-full text-lg transition-colors duration-200 mb-[-80px]">
          Consulter la cartes
        </button>

        <div className="relative w-full flex justify-center overflow-hidden">
          {/* Logos partenaires */}
          <div className="absolute top-[280px] left-1/2 -translate-x-1/2 flex justify-center items-center gap-6 md:gap-10 z-20">
            <img src={cn} alt="Cartoon Network" className="h-6 md:h-8" />
            <img src={booking} alt="Booking.com" className="h-6 md:h-8" />
            <img src={dropbox} alt="Dropbox" className="h-6 md:h-8" />
            <img src={toshiba} alt="Toshiba" className="h-6 md:h-8" />
            <img src={spotify} alt="Spotify" className="h-6 md:h-8" />
            <img src={netflix} alt="Netflix" className="h-6 md:h-8" />
          </div>

          {/* Image SVG coupée */}
          <div className="relative w-full flex justify-center overflow-hidden h-[350px]">
            <img
              src={img1}
              alt="Illustration épidémie"
              className="w-[95%] max-w-5xl object-cover object-top select-none pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
