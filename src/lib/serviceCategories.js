 const serviceCategories = [
  // Home & Garden
  { name: "House Cleaning", category: "Home & Garden", image: "/images/house-cleaning.webp", description: "Professional home cleaning with trusted staff & eco-friendly products." },
  { name: "Commercial Cleaning", category: "Home & Garden", image: "/images/commercial-cleaning.jpeg", description: "Reliable office cleaning services for all business sizes." },
  { name: "Pressure Washing", category: "Home & Garden", image: "/images/pressure.jpg", description: "High-pressure cleaning for driveways, patios, and exteriors." },
  { name: "Gardening", category: "Home & Garden", image: "/images/gardening.webp", description: "Professional gardening services for your home and garden." },
  { name: "Painting & Decoration", category: "Home & Garden", image: "/images/paingting&decoration.jpg", description: "Expert painting and decoration services for your home." },
  { name: "Garden Clearance", category: "Home & Garden", image: "/images/garden-cleaning.jpg", description: "Keep your garden clean and well-maintained." },
  { name: "Gutter Cleaning", category: "Home & Garden", image: "/images/gutter-cleaning.jpeg", description: "Keep your gutters free of debris and flowing smoothly." },
  { name: "Architectural Services", category: "Home & Garden", image: "/images/archetectural.jpg", description: "Professional architectural services for your home." },
  { name: "CCTV Installation", category: "Home & Garden", image: "/images/CCTV-Installation.jpg", description: "Secure your home with professional CCTV installation." },
  { name: "Fence & Gate Installation", category: "Home & Garden", image: "/images/Gate-Installation.jpg", description: "High-quality fence and gate installation services." },

  // Business & Professional
  { name: "Accounting", category: "Business & Professional", image: "/images/accounting.jpg", description: "Professional accounting services for your business." },
  { name: "Bookkeeping", category: "Business & Professional", image: "/images/bookkeeping.jpg", description: "Keep your financial records accurate and up to date." },
  { name: "Business Consulting", category: "Business & Professional", image: "/images/bussiness-consulting.jpg", description: "Expert advice to grow and optimize your business." },
  { name: "Web Design", category: "Business & Professional", image: "/images/web-design.webp", description: "Beautiful and functional website design services." },
  { name: "Web Development", category: "Business & Professional", image: "/images/web-dev.jpg", description: "Beautiful and functional website design services." },
  { name: "Mobile Software Development", category: "Business & Professional", image: "/images/mobile-soft.jpg", description: "Custom mobile apps for your business." },
  { name: "SEO Specialists", category: "Business & Professional", image: "/images/seo.jpg", description: "Increase your website visibility with SEO." },
  { name: "Social Media Marketing", category: "Business & Professional", image: "/images/smm.jpg", description: "Grow your brand on social media platforms." },
  { name: "Security Guard Services", category: "Business & Professional", image: "/images/security.jpg", description: "Professional security solutions for your business." },

  // Health & Wellness
  { name: "Personal Trainers", category: "Health & Wellness", image: "/images/personal-trainer.webp", description: "Achieve your fitness goals with professional trainers." },
  { name: "Counselling", category: "Health & Wellness", image: "/images/counselling.jpg", description: "Supportive counselling services for mental wellbeing." },
  { name: "Therapist", category: "Health & Wellness", image: "/images/therapy.jpg", description: "Professional therapy sessions for your health." },
  { name: "Hypnotherapy", category: "Health & Wellness", image: "/images/hypnothrerapy.jpg", description: "Transform your life with hypnotherapy." },
  { name: "Massage Therapy", category: "Health & Wellness", image: "/images/massage-therapy.jpg", description: "Relax and rejuvenate with professional massage therapy." },
  { name: "Nutritionists & Dietitians", category: "Health & Wellness", image: "/images/nutrition.jpg", description: "Expert nutrition guidance for a healthy lifestyle." },
  { name: "Relationship and Marriage Counselling", category: "Health & Wellness", image: "/images/relationship-marraige.jpg", description: "Strengthen relationships with expert counselling." },

  // Lessons & Training
  { name: "Business & Career Coaching", category: "Lessons & Training", image: "/images/bussiness-career.jpg", description: "Professional coaching to advance your career." },
  { name: "English Lessons", category: "Lessons & Training", image: "/images/english.jpg", description: "Learn English with experienced tutors." },
  { name: "Guitar Lessons", category: "Lessons & Training", image: "/images/guitar.jpg", description: "Learn guitar from skilled instructors." },
  { name: "Maths Tutoring", category: "Lessons & Training", image: "/images/maths.jpg", description: "Expert tutoring in mathematics." },
  { name: "Piano Lessons", category: "Lessons & Training", image: "/images/piano.jpg", description: "Learn piano with professional teachers." },
  { name: "Singing Lessons", category: "Lessons & Training", image: "/images/singing.jpg", description: "Improve your singing skills with lessons." },
  { name: "Tutoring", category: "Lessons & Training", image: "/images/tutoring.jpg", description: "Personalized tutoring for all subjects." },

//   // Personal Services
  { name: "Life Coaching", category: "Personal Services", image: "/images/life-coaching.jpg", description: "Achieve your personal goals with life coaching." },
  { name: "Personal Chef Services", category: "Personal Services", image: "/images/sheaf.jpg", description: "Hire a personal chef for your meals." },
  { name: "Private Investigators", category: "Personal Services", image: "/images/investigator.jpg", description: "Professional investigation services." },
  { name: "Domiciliary Nursing Care", category: "Personal Services", image: "/images/nurse.jpg", description: "Quality nursing care at your home." },
  { name: "Family Counselling", category: "Personal Services", image: "/images/family.jpg", description: "Support your family with professional counselling." },
  { name: "Virtual Personal Assistant", category: "Personal Services", image: "/images/virtual.jpg", description: "Hire a virtual assistant to manage tasks." },
  { name: "Identity Theft Restoration", category: "Personal Services", image: "/images/personal-theft.jpg", description: "Recover and protect your identity." },

  // Events & Entertainment
  { name: "Catering", category: "Events & Entertainment", image: "/images/catering.jpg", description: "Professional catering for all events." },
  { name: "DJ", category: "Events & Entertainment", image: "/images/dj.jpg", description: "Hire DJs for parties and events." },
  { name: "Event & Party Planners", category: "Events & Entertainment", image: "/images/event-party.jpg", description: "Plan and execute amazing events." },
  { name: "Magician", category: "Events & Entertainment", image: "/images/megician.jpg", description: "Hire magicians for entertainment." },
  { name: "Wedding Car Hire", category: "Events & Entertainment", image: "/images/wedding-car.jpg", description: "Luxury cars for weddings and events." },
  { name: "Wedding Catering", category: "Events & Entertainment", image: "/images/window-cleaning.webp", description: "Delicious catering for weddings." },
  { name: "Wedding Flowers", category: "Events & Entertainment", image: "/images/wedding-flower.jpg", description: "Beautiful floral arrangements for weddings." },

  // Other / More
  { name: "Dog & Pet Grooming", category: "Other / More", image: "/images/dog-grooming.jpg", description: "Professional pet grooming services." },
  { name: "Dog Training", category: "Other / More", image: "/images/dog-training.jpg", description: "Train your dog with experts." },
  { name: "Dog Walking", category: "Other / More", image: "/images/dog-walking.jpg", description: "Reliable dog walking services." },
  { name: "Limousine Hire", category: "Other / More", image: "/images/limousine.jpg", description: "Luxury limousine hire for events." },
  { name: "General Photography", category: "Other / More", image: "/images/General-Photography.jpg", description: "Professional photography services." },
  { name: "Graphic Design", category: "Other / More", image: "/images/graphic-design.jpg", description: "Creative graphic design solutions." },
  { name: "Immigration Lawyers", category: "Other / More", image: "/images/lawer.jpg", description: "Expert immigration legal services." },
  { name: "Wills and Estate Planning", category: "Other / More", image: "/images/event-party.jpg", description: "Plan your estate professionally." }
];

export default serviceCategories