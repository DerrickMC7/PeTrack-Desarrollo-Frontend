import Logo from '../atoms/Logo';
import SocialLink from '../atoms/SocialLink';
import ServicesLinks from '../molecules/ServicesLinks';
import ContactDetails from '../molecules/ContactDetails';
import instagramIcon from '../../assets/img/instagram.png';
import youtubeIcon from '../../assets/img/Youtube.png';
import twitterIcon from '../../assets/img/x.png';

const Footer = () => (
  <footer className="bg-[#045D5A] text-white">
    <div className="p-10 sm:p-20 flex flex-col sm:flex-row justify-evenly">
      <div className="flex flex-col">
        <Logo />
        <p className="text-2xl mt-8">
          Connecting Pets, Owners, and <br /> Caregivers for a Healthier Future.
        </p>
        <div className="flex flex-row justify-start mt-5">
          <SocialLink href="https://www.instagram.com" src={instagramIcon} alt="Instagram" />
          <SocialLink href="https://www.Youtube.com" src={youtubeIcon} alt="YouTube" />
          <SocialLink href="https://www.twitter.com" src={twitterIcon} alt="Twitter" />
        </div>
        <p className="text-2xl mt-5">© 2024 Petrack - All Rights Reserved</p>
      </div>
      <ServicesLinks />
      <ContactDetails />
    </div>
  </footer>
);

export default Footer;