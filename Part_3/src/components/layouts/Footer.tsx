import Image from 'next/image';
/**
 * Footer component that returns a JSX element representing the footer section of the webpage.
 * It includes a series of horizontal colored bars and university information.
 * The colors are provided using inline CSS classes for individual segments.
 * The university information includes its name and address.
 * 
 * The structure is responsive, adjusting layout based on screen width, with flexbox used for alignment.
 */
export const Footer = () => {
  return (
    <footer className="text-white mt-auto">
      <div className="flex w-full">
        <div className="h-3 flex-1 bg-black"></div>
        <div className="h-3 flex-1 bg-[#E6027C]"></div>
        <div className="h-3 flex-1 bg-[#8FC149]"></div>
        <div className="h-3 flex-1 bg-[#0286B1]"></div>
        <div className="h-3 flex-1 bg-[#87888a]"></div>
        <div className="h-3 flex-1 bg-[#e62213]"></div>
        <div className="h-3 flex-1 bg-[#0269b5]"></div>
        <div className="h-3 flex-1 bg-[#6f4f9b]"></div>
        <div className="h-3 flex-1 bg-[#f9a823]"></div>
        <div className="h-3 flex-1 bg-[#0e4c9c]"></div>
        <div className="h-3 flex-1 bg-[#008438]"></div>
      </div>
      <div className="bg-[#00213F] bg-[url('/ulb-sceau.svg')] bg-[-300px_top] bg-no-repeat text-white text-sm select-none py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="relative h-12 w-32">
            <Image
              src="/logo-footer.png"
              alt="ULB Footer Logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p>Université libre de Bruxelles</p>
            <p>Avenue Franklin Roosevelt 50 - 1050 Bruxelles</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
