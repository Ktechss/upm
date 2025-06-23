
import kamaljeet_image from '../assets/team_member_images/UPM-REQ-PIC-KAMALJEET.webp';
import teja_pic from '../assets/team_member_images/UPM-REQ-PIC-TEJA.webp';
import kartik_image from '../assets/team_member_images/UPM-REQ-PIC-KARTIK.webp'
import baljit from '../assets/team_member_images/UPM-REQ-PIC-BALJIT.webp';
import facebook_icon from '../assets/social_link_icons/facebook.png';
import instagram_icon from '../assets/social_link_icons/instagram.png';
import linkedin_icon from '../assets/social_link_icons/linkedin.png';
import gmail_icon from '../assets/social_link_icons/gmail.png';
import youtube_icon from '../assets/social_link_icons/youtube.png';
import personal_website from '../assets/social_link_icons/konnect (Animated Logo).png'
const team_info = [
  {
    quote: "",
    name: "Baljit Singh",
    designation: "Director, Media Strategy",
    src: baljit,
    socialLinks: [
      { url: "https://www.linkedin.com/in/baljit-singh-6aba76192/", iconPath: linkedin_icon },
      { url: "mailto:info@unknownpixelmedia.com", iconPath: gmail_icon },
    ],
  },

  {
    quote: "",
    name: "Kamaljeet Kainth",
    designation: "Founder & Growth Strategist",
    src: kamaljeet_image,
    socialLinks: [

      { url: "https://www.linkedin.com/in/kamaljeetkainth/", iconPath: linkedin_icon },
     // { url: "https://www.instagram.com/kamaljeet.kainth/", iconPath: instagram_icon },
      { url: "mailto:info@unknownpixelmedia.com", iconPath: gmail_icon },
      { url: "https://kamaljeetkainth.com", iconPath: personal_website },
    ],
  },

  {
    quote: "",
    name: "S. Teja",
    designation: "Chief Marketing Officer",
    src: teja_pic,
    socialLinks: [
      { url: "https://www.linkedin.com/in/vanjarapusaiteja/", iconPath: linkedin_icon },
      { url: "mailto:info@unknownpixelmedia.com", iconPath: gmail_icon },
    ],
  },
  {
    quote: "",
    name: "Kartik Naik",
    designation: "UI/UX Designer",
    src: kartik_image,
    socialLinks: [
      { url: "https://www.linkedin.com/in/kartiknaik/", iconPath: linkedin_icon },
      { url: "mailto:info@unknownpixelmedia.com", iconPath: gmail_icon },
    ],
  },
  
  
];
export default team_info;