import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { Link } from "./components/Link";
import { Logo } from "./components/Logo";

const DynamicP5 = dynamic(() => import("./components/P5"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex overflow-y-scroll min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-between lg:p-24 p-12">
        <DynamicP5 />
        <div className="relative flex-1 flex flex-col lg:flex-row place-items-center z-[-1] gap-6 pb-12">
          <Logo
            className="relative dark:invert text-hue-2 h-6 lg:h-[53.5px] w-auto"
            alt="Alain Forte"
          />

          <p
            className={`m-0 max-w-[30ch] text-sm opacity-50 inline-flex lg:flex-col flex-row gap-2 lg:gap-0 `}
          >
            <span>Software</span>
            <span>Art</span>
            <span>Lessons</span>
          </p>
        </div>

        <div className="mb-32 grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="https://www.upwork.com/freelancers/~01919b7e4df9413fec"
            aria-description="Find in-depth information about my works and client reviews."
            icon={faBriefcase}
          >
            <span>Works</span>
          </Link>

          <Link
            href="https://github.com/alainux"
            aria-description="Lessons learned and journeys."
            icon={faGithub}
          >
            <span>Open source</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/alain-forte"
            aria-description="Find items for sale"
            icon={faLinkedin}
          >
            <span>Social media</span>
          </Link>

          <Link
            href="mailto:a@xhq.io"
            aria-description="Work with me"
            icon={faEnvelope}
          >
            <span>Contact</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
