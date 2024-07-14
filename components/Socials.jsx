import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/diouavi6161" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/dipen-pradhan-585286238?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bbfxus9XcSr21W5xWfyWrmw%3D%3D",
  },
  { icon: <FaMailBulk />, path: "mailto:avilinid035@gmail.com" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
