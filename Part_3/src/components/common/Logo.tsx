import Image from "next/image";
// This is a Logo component which returns a JSX element
// containing a logo image wrapped in a link to the homepage.
// The component uses Next.js Image for optimized image handling.
export const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-shrink-0 items-center">
        <div className="relative h-16 w-16">
          <a href="/">
            <Image
              src="/ulb-logo-blanc.png"
              alt="Logo ULB"
              fill
              className="object-contain"
              priority
              quality={75}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
