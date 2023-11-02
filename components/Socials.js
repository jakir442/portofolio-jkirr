// links
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubFill,
  RiTwitchFill,
  RiGithubLine,
  RiTwitchLine,
  RiTwitterLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://youtube.com/@jakirapriyan5734'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={'https://instagram.com/jakirapriyan_19'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://github.com/jakir442'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
