import { bpm, franklin, healthyheels, jola, kwench } from "../assets";

export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];

export const clients = [
    {
        title: 'Franklin St. Market',
        type:'Consulting',
        icon: franklin,
        description: 'Created a strategic brand partnership between Celsius and a student-run festival company that resulted in a 15,000 dollar donation from Celsius to aid in event costs and a 10,000 dollar product donation for festival attendees and staff.'
    },
    {
        title: 'Jola House',
        type: 'Consulting',
        icon: jola,
        description: 'Successfully sourced and onboarded a dedicated student social media intern, enhancing Jola House\'s online presence and engagement. Crafted a comprehensive launch plan for their pioneering college ambassador program, harnessing the power of student networks to amplify their impact. '
    },
    {
        title: 'Kwench Juice Café',
        type: 'Social Media',
        icon: kwench,
        description: 'Established a Tik tok and Instagram account for the brand. Produced and published 80 engaging Instagram reels within six months. Grew Instagram page from to 400 followers. Best reel garnered 853 likes and 6000 views. Helped with grand opening planning, menu design, and more'
    },
    {
        title: 'UNC Healthy Heels',
        type: 'Social Media',
        icon: healthyheels,
        description: 'Consistently produced 1-2 reels per week on health topics with a high of 851 likes and 9.7k views. Proficiently managed Instagram engagement and interaction, played a critical role in account growth, with a 3.7% increase in followers, a 1265% increase in accounts engaged, and a 287% increase in accounts reached compared to the previous 90-day period.'
    },
    {
        title: 'Black Parent Magezine',
        type: 'Consulting',
        icon: bpm,
        description: 'Produced five live events on educational topics featuring black professionals, each averaging 4.6k views and 210k impressions. Negotiated partnerships with ten businesses to be featured in the annual holiday magazine. '
    }
]

export const services = [
  {
    type: 'Single Session Strategy',
    title: 'Unlocking Your Blueprint for Success',
    price: '200',
    bullets: [
      'Select a one-hour appointment',
      'Designate one area to focus on and recieve a plan by end of the month',
      'In-person or Virtual',
    ],
    moreInfo: "Select a one-hour appointment, either in-person or virtual. Your business can designate one area to focus on, such as refining your social media strategy, optimizing email communications, developing in-store promotion tactics, creating a social media calendar, or creating an ambassador program. Our team of consultants will tackle your business's challenges and consolidate feedback from all of us into a plan by the end of that business month.    "
  },
  {
    type: 'Continuous Growth',
    title: 'Your Monthly Pathway to Success',
    price: '150',
    bullets: [
      'Ideal for both established businesses and those seeking revitalization',
      'Monthly, one-hour appointments',
      'In-person or Virtual',
    ],
    moreInfo: "Ideal for both established businesses and those seeking revitalization. Enjoy a monthly, one-hour appointment, available in-person or virtual. Each month, companies can choose a specific area to focus on, such as refining social media strategy, optimizing email communications, developing in-store promotion tactics, enhancing graphic design, or creating an ambassador program. Our team of consultants will tackle your business's challenges and consolidate feedback from all of us into a plan by the end of that business month.    "
  },
  {
    type: 'Guiding Your Venture',
    title: 'New Business Consulting Excellence',
    price: '300',
    bullets: [
      'Tailored for emerging businesses',
      'Two monthly, one-hour appointments',
      'Each month, companies can allocate their focus to two specific areas',
    ],
    moreInfo: "It is tailored for emerging businesses. Benefit from two monthly, one-hour appointments, available in-person or virtual. Present your business challenge to our team of consultants and receive comprehensive feedback that will be synthesized into a business plan. Each month, companies can allocate their focus to two specific areas.    "
  },
  {
    type: 'Tailored Strategies',
    title: 'Your Custom Consulting Pathway',
    price: 'Varied',
    bullets: [
      'Personalized consulting plan, designed to match your needs.',
      'Monthly, one-hour appointments',
      'In-person or Virtual',
    ],
    moreInfo: "Introducing our personalized consulting plan, designed to match your unique needs. Pricing will be determined based on your comprehensive package, ensuring exceptional value for your investment. With a flexible monthly meeting schedule that aligns with your business rhythm, you can expect regular interactions that drive progress. Our holistic approach covers various areas, including refining your social media strategy, optimizing email communications, developing in-store promotion tactics, enhancing graphic design, and crafting an effective ambassador program. By presenting your Business Challenge to our adept team of consultants, you tap into diverse expertise, enabling us to synthesize collective insights into a coherent blueprint presentation. Your success story begins with a tailored plan that adapts to your business's journey.    "

  }
]