import Designing_footage from '../assets/videos/Designing_Footage.mp4';
import Marketing_footage from '../assets/videos/Marketing_Footage.mp4';
import Consultancy_Footage from '../assets/videos/Consultancy_Footage.mp4';
import CallToAction from '../components/MediaPage/CallToAction';

const content = [
  {
    title: "Media Services",
    description:
      "Bring your creative vision to life with our top-tier media creation services. Whether it’s video production, graphic design, content creation, or brand storytelling, we deliver high-quality solutions tailored to your needs. From concept to execution, our team of experts collaborates closely with you to craft impactful visuals and compelling narratives that resonate with your audience. Elevate your brand and engage your stakeholders like never before with our innovative media creation services.",
      cta:<CallToAction buttonText="Let’s Create Magic" 
      link="/media" 
    />,
      videoUrl: Designing_footage,
  },
  {
    title: "Marketing Services",
    description:"Maximize your brand's potential with our expert marketing services. From strategic planning to innovative campaigns, we help you connect with your audience and achieve measurable results. Using cutting-edge tools and creative strategies, we build your brand presence and boost engagement. Let us help you stand out in today’s competitive landscape.",
          videoUrl: Marketing_footage,
      cta:<CallToAction buttonText="Let’s your brand do the talking" 
      link="/marketing" 
    />,
  },
  {
    title: "Consultancy Services",
    description:"Unlock your business’s potential with our premier consultancy services. We offer tailored solutions for strategy, operations, and growth, ensuring sustainable success. Our experts work closely with you to analyze, optimize, and transform your business. With deep industry insights, we empower informed decisions and drive impactful results.",  
    videoUrl: Consultancy_Footage,
    cta:<CallToAction buttonText="Schedule Your Consultation Today" 
      link="/consulting" 
    />,
  },
]

export default content;