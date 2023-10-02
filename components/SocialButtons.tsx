import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { FaTiktok } from 'react-Icons/fa';

type Props = {};

const socials = [
  {
    href: '',
    Icon: Facebook,
  },
  {
    href: '',
    Icon: Linkedin,
  },
  {
    href: '',
    Icon: Youtube,
  },
  {
    href: '',
    Icon: Instagram,
  },
  {
    href: '',
    Icon: FaTiktok,
  },
];

const SocialButtons = (props: Props) => {
  return (
    <div className="flex space-x-2 items-center">
      {socials.map(({ Icon, href }) => (
        <Link
          href={href}
          target="_blank"
          key={href}
          className="border border-white p-2 rounded-full inline-block"
        >
          <Icon
            color="white"
            className="transition duration-300 scale-95 hover:scale-110"
            size={20}
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialButtons;
