export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  avgCost?: string;
}

export const COMPANY_INFO = {
  name: "RAM Fencing & Home Improvement",
  phone: "+1 908-943-7215",
  displayPhone: "(908) 943-7215",
  email: "rm502fencingnj@gmail.com",
  address: "Plainfield, NJ, United States, 07060",
  serviceAreas: ["Plainfield", "Westfield", "Scotch Plains", "Edison", "Summit", "Watchung", "Berkeley Heights", "Union County", "Middlesex County", "Somerset County", "Morris County", "Bergen County", "Essex County"],
  reviewsCount: 17, // kept in sync with REVIEWS.length (real reviews from reviews.txt)
  rating: 5.0,
  logoUrl: "https://res.cloudinary.com/xntykrc8/image/upload/v1793294360/Weathered_Gold_Ram_Village_Crest.png",
  heroVideo: "https://res.cloudinary.com/xntykrc8/video/upload/v1790006560/dwu93785.mp4",
  aboutImage: "https://res.cloudinary.com/xntykrc8/image/upload/v1793294358/11ea801a-0cd1-4d07-ae0b-7408a5594fab.jpg",
  reviewsStickyBg: "https://res.cloudinary.com/xntykrc8/image/upload/v1792779872/760x470xc.webp",
  contactStickyBg: "https://res.cloudinary.com/xntykrc8/image/upload/v1793294358/11ea801a-0cd1-4d07-ae0b-7408a5594fab.jpg",
  calculatorStickyBg: "https://res.cloudinary.com/xntykrc8/image/upload/v1789660118/A-Luxe-Modern-Living-Room-with-a-High-End-Media-Wall.jpg",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61560893801599",
    instagram: "https://www.instagram.com/r.m_502_fencing_llc",
    tiktok: "https://www.tiktok.com/@rm502fencingllc",
    youtube: "https://www.youtube.com/@RM502Fencingllc"
  }
};

// 5 Featured Services for Home Page
export const HOMEPAGE_SERVICES: ServiceItem[] = [
  {
    id: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    description: "Custom cabinetry, luxury countertops, and high-performance layouts.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789398943/512170452_1052340383665757_3626179142262041026_n.jpg",
    category: "Interior"
  },
  {
    id: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    description: "Modern walk-in showers, spa tiles, vanities, and premium fixtures.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789398948/805665945_1406438664922592_1170397082400950198_n.jpg",
    category: "Interior"
  },
  {
    id: "deck-construction",
    name: "Deck Construction",
    description: "Durable composite and treated wood decks engineered for outdoor living.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/deck_service.jpg",
    category: "Exterior"
  },
  {
    id: "painting",
    name: "Painting",
    description: "Flawless interior and exterior architectural coatings and precision finishes.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1787000801/painting_service_1.webp",
    category: "Finishing"
  },
  {
    id: "roofing",
    name: "Roofing",
    description: "Certified architectural shingle installation, leak protection, and replacements.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1787000803/roofing.jpg",
    category: "Exterior"
  }
];

// All Services for Services Page (14 services as requested)
export const ALL_SERVICES: ServiceItem[] = [
  {
    id: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    description: "Custom cabinetry, luxury stone countertops, modern islands, and ergonomic workflow designs.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789398943/512170452_1052340383665757_3626179142262041026_n.jpg",
    category: "Interior"
  },
  {
    id: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    description: "Custom tiled walk-in showers, freestanding tubs, floating vanities, and moisture-proof upgrades.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789398948/805665945_1406438664922592_1170397082400950198_n.jpg",
    category: "Interior"
  },
  {
    id: "interior-remodeling",
    name: "Interior Remodeling",
    description: "Open concept layout conversions, structural load-bearing changes, drywall, and complete room updates.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789399643/interior_remodeling_ser.webp",
    category: "Interior"
  },
  {
    id: "exterior-remodeling",
    name: "Exterior Remodeling",
    description: "Full facade makeovers, porticos, outdoor entertainment structures, and exterior architectural accents.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789399508/exteror_remodel_ser.jpg",
    category: "Exterior"
  },
  {
    id: "siding-repair-installation",
    name: "Siding Repair & Installation",
    description: "Vinyl, fiber cement, and insulated siding systems engineered against New Jersey weather extremes.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/siding_service.jpg",
    category: "Exterior"
  },
  {
    id: "deck-construction",
    name: "Deck Construction",
    description: "Custom multi-tier composite, pressure-treated lumber, custom railings, and integrated LED lighting.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/deck_service.jpg",
    category: "Exterior"
  },
  {
    id: "painting",
    name: "Painting",
    description: "Premium Benjamin Moore / Sherwin-Williams finishes, crisp trim lines, and pressure-wash surface prep.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1787000801/painting_service_1.webp",
    category: "Finishing"
  },
  {
    id: "floor-tile",
    name: "Floor Tile",
    description: "Large format porcelain, ceramic, natural marble, mosaic inlays, and heated underlayment systems.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789394038/Floor_Tile_servcie.webp",
    category: "Flooring"
  },
  {
    id: "lvp-flooring",
    name: "LVP Flooring",
    description: "100% waterproof luxury vinyl plank installations with sound dampening underlayment and seamless transitions.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1790097041/lvp-flooring.jpg",
    category: "Flooring"
  },
  {
    id: "basement-remodeling",
    name: "Basement Remodeling",
    description: "Finished entertainment basements, home theaters, wet bars, guest suites, and subfloor moisture protection.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789399487/basement_remodel.jpg",
    category: "Interior"
  },
  {
    id: "roofing",
    name: "Roofing",
    description: "Heavy-duty architectural shingles, metal valleys, ridge vents, flashing, and full tear-offs.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1787000803/roofing.jpg",
    category: "Exterior"
  },
  {
    id: "cabinet-work",
    name: "Cabinet Work",
    description: "Built-in entertainment units, custom pantry systems, soft-close hardware, and architectural millwork.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789665449/cabnet.jpg",
    category: "Woodwork"
  },
  {
    id: "door-work",
    name: "Door Work",
    description: "Entry door systems, French patio doors, pocket doors, barn doors, and weather-sealed casings.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789665447/door.jpg",
    category: "Woodwork"
  },
  {
    id: "window-work",
    name: "Window Work",
    description: "Energy-efficient replacement windows, picture windows, bay windows, and custom interior casing trim.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789665447/window_wood.jpg",
    category: "Woodwork"
  },
  {
    id: "fencing",
    name: "Fencing Installation & Repair",
    description: "Privacy wood fencing, ornamental aluminum, vinyl perimeter fencing, and custom gate systems.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1786995735/fence_row_management.webp",
    category: "Exterior"
  },
  // --- New fencing specialities: photos served from public/service-images/ (spaces are %20-encoded) ---
  {
    id: "aluminum-fencing",
    name: "Aluminum Fencing",
    description: "Rust-proof ornamental aluminum perimeter fencing with powder-coated colors, pool-code compliant picket spacing, and matching drive/walk gates.",
    image: "/service-images/aluminum%20fencing%20service.jpe",
    category: "Exterior",
    avgCost: "$28 - $45 per linear ft"
  },
  {
    id: "chain-link-fencing",
    name: "Chain Link Fencing",
    description: "Galvanized and vinyl-coated chain link with steel line posts, tension hardware, and gates - the fastest, most budget-friendly way to secure a yard.",
    image: "/service-images/chain%20link%20fencing%20service.jpg",
    category: "Exterior",
    avgCost: "$14 - $24 per linear ft"
  },
  {
    id: "vinyl-fencing",
    name: "Vinyl (PVC) Fencing",
    description: "UV-stabilized solid privacy, semi-solid, split-rail, and picket PVC that never needs painting, rot-proof posts, and lifetime material warranty.",
    image: "/service-images/vinyl%20fencing%20service.jpe",
    category: "Exterior",
    avgCost: "$32 - $55 per linear ft"
  },
  {
    id: "staircase-construction",
    name: "Staircase Construction",
    description: "Custom hardwood treads, risers, modern iron balusters, handrails, and open-riser staircases.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789398948/722147724_1328427919390334_6746985090643650559_n.jpg",
    category: "Woodwork"
  }
];

// Why Choose Us cards for the horizontal reveal effect
export const WHY_CHOOSE_US_CARDS = [
  {
    id: "craftsmanship",
    title: "Master Craftsmen On Every Project",
    description: "Every cut, joint, tile, and coat of paint is executed with meticulous standards. We never cut corners.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789399643/interior_remodeling_ser.webp"
  },
  {
    id: "transparent",
    title: "Transparent Fixed Pricing",
    description: "Clear written estimates with detailed scope breakdowns so you know exactly what to expect. No hidden fees.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789660118/A-Luxe-Modern-Living-Room-with-a-High-End-Media-Wall.jpg"
  },
  {
    id: "licensed",
    title: "Licensed & Fully Insured in NJ",
    description: "Compliant with New Jersey building codes, safe work site practices, and full liability coverage.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1787000803/roofing.jpg"
  },
  {
    id: "timely",
    title: "Reliable Schedule & On-Time Delivery",
    description: "We respect your home and schedule. Consistent daily presence and active communication from start to clean finish.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1790007033/deck_service.jpg"
  },
  {
    id: "turnkey",
    title: "Complete End-to-End Solutions",
    description: "From demo and framing to plumbing, electrical coordination, tile, and finishes, we manage it all smoothly.",
    image: "https://res.cloudinary.com/xntykrc8/image/upload/v1789398943/512170452_1052340383665757_3626179142262041026_n.jpg"
  }
];

// Real customer reviews — taken verbatim from reviews.txt (original Google reviews).
export interface ReviewItem {
  id: number;
  name: string;
  text: string;
  rating: number;
  service: string;
  source: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: "Damian Davey",
    rating: 5,
    service: "Fence Installation",
    source: "Google Review",
    text: "R&M 502 Fencing was phenomenal! Excellent customer service from start to finish. The team showed up on time, worked efficiently, and got the job done right. Very professional, reliable, and easy to work with. Highly recommend them for anyone looking for quality fencing work! 10/10"
  },
  {
    id: 2,
    name: "Samuel Lozano",
    rating: 5,
    service: "PVC Fence Installation",
    source: "Google Review",
    text: "Excellent experience from start to finish! The R&M 502 FENCING team was very professional and punctual. The installation of my PVC fence was impeccable, and they finished the job on time. Plus, the price was fair, and the area was left completely clean at the end. I highly recommend them if you're looking for quality and reliability. Great job by MARVIN and his team, thanks for the great work!"
  },
  {
    id: 3,
    name: "Serenity Peace",
    rating: 5,
    service: "Fencing & Home Improvement",
    source: "Google Review",
    text: "Professionalism from the very beginning. Marvin helped us to understand the process step by step and was patient in answering all of our questions! Prices were fair and reasonable. His staff was wonderful. Will use again for future projects. Will highly recommend!"
  },
  {
    id: 4,
    name: "Carol H-Azul",
    rating: 5,
    service: "Fencing & Home Improvement",
    source: "Google Review",
    text: "Excellent work, professional, good price, and the workers are very respectful."
  },
  {
    id: 5,
    name: "George Gardner",
    rating: 5,
    service: "Pool Fence Installation",
    source: "Google Review",
    text: "Marvin helped us install a pool fence and made sure everything was secure and safe. The installation was neat and completed on time."
  },
  {
    id: 6,
    name: "Jaxson Zimmerman",
    rating: 5,
    service: "Fence Pressure Wash & Paint",
    source: "Google Review",
    text: "R&M 502 Fencing LLC power washed and painted our fence, and it looks like new again. Great attention to detail and very reliable service."
  },
  {
    id: 7,
    name: "Gabriel Reynolds",
    rating: 5,
    service: "Chain Link Fence Replacement",
    source: "Google Review",
    text: "Had an old fence removed and replaced with a chain link fence. The work was done quickly and the area was cleaned up nicely after the job."
  },
  {
    id: 8,
    name: "Jake Elliott",
    rating: 5,
    service: "Aluminum Fence Installation",
    source: "Google Review",
    text: "Marvin and his crew installed our aluminum fence and made sure everything was done right. He explained the process clearly and delivered exactly what we expected."
  },
  {
    id: 9,
    name: "William Cole",
    rating: 5,
    service: "Wood Fence Installation",
    source: "Google Review",
    text: "We hired them for a wood fence installation and couldn’t be happier. The team was professional, worked efficiently, and the final result looks strong and well-built."
  },
  {
    id: 10,
    name: "Brandon Hughes",
    rating: 5,
    service: "Vinyl Fence Installation",
    source: "Google Review",
    text: "R&M 502 Fencing LLC installed a vinyl fence for our property and did an excellent job. The lines are straight, the finish looks clean, and the whole process was smooth from start to finish."
  },
  {
    id: 11,
    name: "Leslie Starr Muhammad",
    rating: 5,
    service: "Custom Fence Work",
    source: "Google Review",
    text: "I highly recommend this company. This is my first time using this company and it definitely will not be my last. Marvin and staff is very thorough, very professional, very respectful, they make sure their work is top notch at a reasonable price. And in good time. Takes many pictures to make sure you understand the work you want done and how it can be done. Friendly staff, it was a pleasure working with them. Nice finding a company that take pride in their work. Money well spent. — Leslie W"
  },
  {
    id: 12,
    name: "Genie Jean",
    rating: 5,
    service: "Cedar Fence Replacement",
    source: "Google Review",
    text: "Marvin and his team did a fantastic job on our fence. We reviewed a few places and Marvin gave a very fair price and we liked the idea of going with a local company. We had our old chain link fence removed and replaced it with cedar wood. It looks amazing and the team completed the job in two days. The installation crew was very professional. They did a great job communicating timeline and expectations. We're looking to hire them for additional home projects. Highly recommend!"
  },
  {
    id: 13,
    name: "Daniel Rogers",
    rating: 5,
    service: "Stairs & Facade Work",
    source: "Google Review",
    text: "Marvin and his crew is extremely talented, highly professional and in this present day supremely affordable. They do more than fences. They did steps to my home and some facade work. I will get them to do any jobs around my home. If you looking for excellent work at an affordable price call Marvin!!!!!"
  },
  {
    id: 14,
    name: "M&b Gonzalez Professional Cleaning Service LLC",
    rating: 5,
    service: "Fencing & Home Improvement",
    source: "Google Review",
    text: "I recommend this company. Very responsible professionals. They have a lot of experience 100% recommended"
  },
  {
    id: 15,
    name: "Correa Francisco",
    rating: 5,
    service: "Permit-Ready Contracting",
    source: "Google Review",
    text: "The best contractors I've worked with, Punctual, excellent work and best price!!! They all look for permits, talk to the city, they do everything!!! They take out the trash. I recommend them 100%"
  },
  {
    id: 16,
    name: "Yadira Hernandez-Correa",
    rating: 5,
    service: "Front Fence Installation",
    source: "Google Review",
    text: "I recommend this business 100%. they placed my front fence and it was an absolute success."
  },
  {
    id: 17,
    name: "Ofelia Ayu",
    rating: 5,
    service: "Fencing & Home Improvement",
    source: "Google Review",
    text: "It is a very good corporation, 100/100 recommended. They do very good work, the workers are very friendly"
  }
];


// Gallery Images — every photo lives in `public/gallery/` and is served locally.
// File names on disk look like "RAM 1 (12).jpg"; spaces are URL-encoded so they
// resolve correctly through next/image.
const GALLERY_FILE_COUNT = 46;

export const GALLERY_IMAGES = Array.from(
  { length: GALLERY_FILE_COUNT },
  (_, i) => ({
    id: `g${i + 1}`,
    url: `/gallery/${encodeURIComponent(`RAM 1 (${i + 1}).jpg`)}`,
    title: `RAM Fencing & Home Improvement — Project ${i + 1}`,
  })
);
