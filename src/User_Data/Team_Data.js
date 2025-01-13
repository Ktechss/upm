
import member_1 from '../assets/team_member_images/Kamaljeet_k.png';
import member_3 from '../assets/team_member_images/teja_pic.png';

import baljit from '../assets/team_member_images/Baljit.jpg';
import facebook_icon from '../assets/social_link_icons/facebook.png';
import instagram_icon from '../assets/social_link_icons/instagram.png';
import linkedin_icon from '../assets/social_link_icons/linkedin.png';
import gmail_icon from '../assets/social_link_icons/gmail.png';
import youtube_icon from '../assets/social_link_icons/youtube.png';
const team_info = [
  {
    quote: "",
    name: "Baljit Singh",
    designation: "Director, Media Strategy",
    src: baljit,
    socialLinks: [
      { url: "https://www.linkedin.com/in/baljit-singh-6aba76192/", iconPath: linkedin_icon },
      { url: "mailto:unknownpixelmedia@gmail.com", iconPath: gmail_icon },
    ],
  },

  {
    quote: "",
    name: "Kamaljeet Kainth",
    designation: "Founder & Growth Strategist",
    src: member_1,
    socialLinks: [

      { url: "https://www.linkedin.com/in/kamaljeetkainth/", iconPath: linkedin_icon },
      { url: "https://www.instagram.com/kamaljeet.kainth/", iconPath: instagram_icon },
      { url: "mailto:unknownpixelmedia@gmail.com", iconPath: gmail_icon },
      { url: "https://www.youtube.com/@podcastbykk", iconPath: youtube_icon },
    ],
  },

  {
    quote: "",
    name: "S. Teja",
    designation: "Chief Marketing Officer",
    src: member_3,
    socialLinks: [
      { url: "https://www.linkedin.com/in/vanjarapusaiteja/", iconPath: linkedin_icon },
      { url: "mailto:unknownpixelmedia@gmail.com", iconPath: gmail_icon },
    ],
  },
  
];
export default team_info;