import { useSpring, animated } from 'react-spring';
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    {name: "Pricing", link: "#pricing" },
    { name: "Contact Us", link: "#contact" },
    
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "We prioritize client satsfaction ",
      description: "",
      className: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2 text-purple",
      imgClassName: "w-full h-full",
      titleClassName: "justify-start",
      videoSrc: "/corp.mp4",
      
      spareImg: "",
    },
    {
      id: 2,
      title: "Sizzle Africa Marketing Limited is a leading provider of innovative marketing solutions and corporate branding. Our integrated, cutting-edge strategies are designed to help clients achieve their goals and maximize efficiency, boost ROI, and enhance brand competence. ",
      description: "",
      className: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
      imgClassName: "",
      titleClassName: "",
      img: "",
      spareImg: "",
      
    },
    {
      id: 3,
      title: "",
      description: "",
      className: "col-span-1 row-span-1 sm:col-span-3 sm:row-span-3 lg:col-span-1 lg:row-span-1",
      imgClassName: "w-full h-full",
      titleClassName: "justify-center",
      
    },
    {
      id: 4,
      title: "Let us re- DEFINE EXCELLENCE FOR YOU and take your brand to the next level.",
      description: "",
      className: "col-span-1 row-span-1 text-purple",
      imgClassName: "",
      titleClassName: "",
      img: "",
      spareImg: "",
      videoSrc: "/vid.mp4",
    },
    {
      id: 5,
      title: " Personalized Interactive Screens",
      description: "",
      className: "col-span-1 row-span-1 sm:col-span-4 sm:row-span-1 lg:col-span-1 lg:row-span-1",
      imgClassName: "w-full h-full object-contain",
      titleClassName: "",
      img: "/",
      spareImg: "",
      videoSrc: "/video.mp4",
    },
   
  ];
  
  export const projects = [
    {
      id: 1,
      title: "I need a heading here from MJ and the particular link to the post",
      des: "AND A DESCRIPTION OF THE IMAGE",
      img: "/h3.jpeg",
      iconLists: ["/insta.svg", "/link.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "",
    },
    {
      id: 2,
      title: "I need a heading here from MJ and the particular link to the post",
      des: "AND A DESCRIPTION OF THE IMAGE",
      img: "/h2.jpeg",
      iconLists: ["/insta.svg", "/link.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "",
    },
    {
      id: 3,
      title: "I need a heading here from MJ and the particular link to the post",
      des: "AND A DESCRIPTION OF THE IMAGE",
      img: "/h1.jpeg",
      iconLists: ["/insta.svg", "/link.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "",
    },
    {
      id: 4,
      title: "I need a heading here from MJ  and the particular link to the post",
      des: "AND A DESCRIPTION OF THE IMAGE",
      img: "/h4.jpeg",
      iconLists: ["/insta.svg", "/link.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "",
    },
  ];
  
  export const testimonials = [
    {
      quote:
       "This is where to be!! Anyone who has worked with Ms MaryJ and her team can testify! The attention to detail is always thorough. I like that the team is very creative. The turnaround time is within 24 hrs max for client briefs, and most times I get immediate response on things like quotation. Thank you for prioritizing your customers satisfaction. Will always be a return client.",
       name: "Lucy Wanjiku",
       title: "",
     },
    {
      quote:
        "Probably one of the most reliable team out there, Their level of execution was exemplary. Highly recommend anyone looking for an agency to try them out",
      name: "Brian Njoroge",
      title: "",
    },
    {
      quote:
        "They have the best strategy to market business. They are also attentive to detail and also advise accordingly. I highly recommend.",
      name: "Mary Muthoni",
      title: "",
    },
    {
      quote:
        "Very professional and the best branding company to work with.Makes sure everyone becomes the best version of themselves at what they do while offering the best of the best of the services ensuring clients satisfaction",
      name: "Carol Mwongeli",
      title: "",
    },
    {
      quote:
        "They treat your business like their own. I look forward to do more business, marketing and branding with team Sizzle Africa",
      name: "Mark Hizwe",
      title: "",
    },
    {
      quote:
        "Delighted to see how your turn ideas to a five star experience for all your clients. Going overboard to ensure the expectations are met and thorough. I highly recommend if you looking for a digital marketing agency to work with. Creative team, offering 360° marketing solutions",
      name: "James Kariuki",
      title: "",
    },

  ];
  
  export const companies = [
    {
      id: 1,
      name: "Safaricom",
      img: "/saf.svg",
      nameImg: "/saf1.svg",
    },
    {
      id: 2,
      name: "Moja",
      img: "/m.svg",
      nameImg: "/m1.svg",
    },
    {
      id: 3,
      name: "Sobreta",
      img: "/sob.svg",
      nameImg: "/sob1.svg",
    },
    {
      id: 4,
      name: "",
      img: "/",
      nameImg: "/",
    },
    {
      id: 5,
      name: "",
      img: "/",
      nameImg: "/",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Elevate Your Brand, Attract Customers",
      desc: "Let us help you tell your unique story and make a lasting impression that drives business growth.Our corporate branding services help you create a powerful, cohesive identity that resonates with your target audience.We craft compelling visual and messaging elements that capture your company's essence, setting you apart in a crowded marketplace. ",
      className: "md:col-span-2",
      thumbnails: ["/exp1.svg", "/exp2.svg/","/exp3.svg"]
    },
    {
      id: 2,
      title: "Interactive Screens: Engage, Inform, Impress",
      desc: "From wayfinding to product showcases, our screens adapt to your needs. Deliver tailored messages and experiences to your audience in real-time.Capture attention with vibrant, responsive touchscreens that invite interaction.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnails: ["/exp2.svg"]
    },
    {
      id: 3,
      title: " Promotional merchandise gift items, marketing collaterals",
      desc: "From pens to power banks, we offer a wide range of customizable items to showcase your brand in style.Delight clients and employees with thoughtful, branded gifts that leave a lasting impression.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnails: ["/exp3.svg"]
    },
    {
      id: 4,
      title: "Experientials events production, team buildings, route to market activations..",
      desc: "Our experiential services help you:Create memorable brand interactions, Strengthen team dynamics,Increase customer engagement, Drive product awareness and sales.",
      className: "md:col-span-2",
      thumbnails: ["/exp4.svg"]
    },
    {
      id: 1,
      title: "Reach Further: ATL Marketing & Media Solutions",
      desc: "Craft widespread brand awareness through mass media channels. Strategic placement across TV, radio, print, and digital platforms to reach your target audience. Dominate the outdoor space with eye-catching, strategically located billboards.",
      className: "md:col-span-2",
      thumbnails: ["/exp1.svg"]
    },
    {
      id: 2,
      title: "Insights That Drive Success: Market Research & Case Studies",
      desc: "Market Research: Uncover crucial information about your target audience, competitors, and industry trends.Case Studies: Showcase your success stories and demonstrate real-world impact.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnails: ["/exp2.svg"]
    },
    {
      id: 3,
      title: "Brand Ambassadors: Your Brand's Human Touch",
      desc: "Let our team of charismatic professionals become the face of your brand, creating meaningful connections and leaving lasting impressions.Increased brand awareness, Authentic customer connections, Boosted sales and lead generation, Valuable market insights.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnails: ["/exp3.svg"]
    },
    {
      id: 4,
      title: "Web Design and Development Services",
      desc: "Whether you are launching a new site or revamping an existing one, our team of expert designers and developers is ready to bring your digital vision to life. Let us create a website that not only looks great but also drives results for your business.",
      className: "md:col-span-2",
      thumbnails: ["/exp4.svg"]
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
    {
      id: 4,
      img: "/insta.svg",
    }
  ];