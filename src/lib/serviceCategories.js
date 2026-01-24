//  const serviceCategories = [
//   // Home & Garden
//   { name: "House Cleaning", category: "Home & Garden", image: "/images/house-cleaning.webp", description: "Professional home cleaning with trusted staff & eco-friendly products." },
//   { name: "Commercial Cleaning", category: "Home & Garden", image: "/images/commercial-cleaning.jpeg", description: "Reliable office cleaning services for all business sizes." },
//   { name: "Pressure Washing", category: "Home & Garden", image: "/images/pressure.jpg", description: "High-pressure cleaning for driveways, patios, and exteriors." },
//   { name: "Gardening", category: "Home & Garden", image: "/images/gardening.webp", description: "Professional gardening services for your home and garden." },
//   { name: "Painting & Decoration", category: "Home & Garden", image: "/images/paingting&decoration.jpg", description: "Expert painting and decoration services for your home." },
//   { name: "Garden Clearance", category: "Home & Garden", image: "/images/garden-cleaning.jpg", description: "Keep your garden clean and well-maintained." },
//   { name: "Gutter Cleaning", category: "Home & Garden", image: "/images/gutter-cleaning.jpeg", description: "Keep your gutters free of debris and flowing smoothly." },
//   { name: "Architectural Services", category: "Home & Garden", image: "/images/archetectural.jpg", description: "Professional architectural services for your home." },
//   { name: "CCTV Installation", category: "Home & Garden", image: "/images/CCTV-Installation.jpg", description: "Secure your home with professional CCTV installation." },
//   { name: "Fence & Gate Installation", category: "Home & Garden", image: "/images/Gate-Installation.jpg", description: "High-quality fence and gate installation services." },

//   // Business & Professional
//   { name: "Accounting", category: "Business & Professional", image: "/images/accounting.jpg", description: "Professional accounting services for your business." },
//   { name: "Bookkeeping", category: "Business & Professional", image: "/images/bookkeeping.jpg", description: "Keep your financial records accurate and up to date." },
//   { name: "Business Consulting", category: "Business & Professional", image: "/images/bussiness-consulting.jpg", description: "Expert advice to grow and optimize your business." },
//   { name: "Web Design", category: "Business & Professional", image: "/images/web-design.webp", description: "Beautiful and functional website design services." },
//   { name: "Web Development", category: "Business & Professional", image: "/images/web-dev.jpg", description: "Beautiful and functional website design services." },
//   { name: "Mobile Software Development", category: "Business & Professional", image: "/images/mobile-soft.jpg", description: "Custom mobile apps for your business." },
//   { name: "SEO Specialists", category: "Business & Professional", image: "/images/seo.jpg", description: "Increase your website visibility with SEO." },
//   { name: "Social Media Marketing", category: "Business & Professional", image: "/images/smm.jpg", description: "Grow your brand on social media platforms." },
//   { name: "Security Guard Services", category: "Business & Professional", image: "/images/security.jpg", description: "Professional security solutions for your business." },

//   // Health & Wellness
//   { name: "Personal Trainers", category: "Health & Wellness", image: "/images/personal-trainer.webp", description: "Achieve your fitness goals with professional trainers." },
//   { name: "Counselling", category: "Health & Wellness", image: "/images/counselling.jpg", description: "Supportive counselling services for mental wellbeing." },
//   { name: "Therapist", category: "Health & Wellness", image: "/images/therapy.jpg", description: "Professional therapy sessions for your health." },
//   { name: "Hypnotherapy", category: "Health & Wellness", image: "/images/hypnothrerapy.jpg", description: "Transform your life with hypnotherapy." },
//   { name: "Massage Therapy", category: "Health & Wellness", image: "/images/massage-therapy.jpg", description: "Relax and rejuvenate with professional massage therapy." },
//   { name: "Nutritionists & Dietitians", category: "Health & Wellness", image: "/images/nutrition.jpg", description: "Expert nutrition guidance for a healthy lifestyle." },
//   { name: "Relationship and Marriage Counselling", category: "Health & Wellness", image: "/images/relationship-marraige.jpg", description: "Strengthen relationships with expert counselling." },

//   // Lessons & Training
//   { name: "Business & Career Coaching", category: "Lessons & Training", image: "/images/bussiness-career.jpg", description: "Professional coaching to advance your career." },
//   { name: "English Lessons", category: "Lessons & Training", image: "/images/english.jpg", description: "Learn English with experienced tutors." },
//   { name: "Guitar Lessons", category: "Lessons & Training", image: "/images/guitar.jpg", description: "Learn guitar from skilled instructors." },
//   { name: "Maths Tutoring", category: "Lessons & Training", image: "/images/maths.jpg", description: "Expert tutoring in mathematics." },
//   { name: "Piano Lessons", category: "Lessons & Training", image: "/images/piano.jpg", description: "Learn piano with professional teachers." },
//   { name: "Singing Lessons", category: "Lessons & Training", image: "/images/singing.jpg", description: "Improve your singing skills with lessons." },
//   { name: "Tutoring", category: "Lessons & Training", image: "/images/tutoring.jpg", description: "Personalized tutoring for all subjects." },

// //   // Personal Services
//   { name: "Life Coaching", category: "Personal Services", image: "/images/life-coaching.jpg", description: "Achieve your personal goals with life coaching." },
//   { name: "Personal Chef Services", category: "Personal Services", image: "/images/sheaf.jpg", description: "Hire a personal chef for your meals." },
//   { name: "Private Investigators", category: "Personal Services", image: "/images/investigator.jpg", description: "Professional investigation services." },
//   { name: "Domiciliary Nursing Care", category: "Personal Services", image: "/images/nurse.jpg", description: "Quality nursing care at your home." },
//   { name: "Family Counselling", category: "Personal Services", image: "/images/family.jpg", description: "Support your family with professional counselling." },
//   { name: "Virtual Personal Assistant", category: "Personal Services", image: "/images/virtual.jpg", description: "Hire a virtual assistant to manage tasks." },
//   { name: "Identity Theft Restoration", category: "Personal Services", image: "/images/personal-theft.jpg", description: "Recover and protect your identity." },

//   // Events & Entertainment
//   { name: "Catering", category: "Events & Entertainment", image: "/images/catering.jpg", description: "Professional catering for all events." },
//   { name: "DJ", category: "Events & Entertainment", image: "/images/dj.jpg", description: "Hire DJs for parties and events." },
//   { name: "Event & Party Planners", category: "Events & Entertainment", image: "/images/event-party.jpg", description: "Plan and execute amazing events." },
//   { name: "Magician", category: "Events & Entertainment", image: "/images/megician.jpg", description: "Hire magicians for entertainment." },
//   { name: "Wedding Car Hire", category: "Events & Entertainment", image: "/images/wedding-car.jpg", description: "Luxury cars for weddings and events." },
//   { name: "Wedding Catering", category: "Events & Entertainment", image: "/images/window-cleaning.webp", description: "Delicious catering for weddings." },
//   { name: "Wedding Flowers", category: "Events & Entertainment", image: "/images/wedding-flower.jpg", description: "Beautiful floral arrangements for weddings." },

//   // Other / More
//   { name: "Dog & Pet Grooming", category: "Other / More", image: "/images/dog-grooming.jpg", description: "Professional pet grooming services." },
//   { name: "Dog Training", category: "Other / More", image: "/images/dog-training.jpg", description: "Train your dog with experts." },
//   { name: "Dog Walking", category: "Other / More", image: "/images/dog-walking.jpg", description: "Reliable dog walking services." },
//   { name: "Limousine Hire", category: "Other / More", image: "/images/limousine.jpg", description: "Luxury limousine hire for events." },
//   { name: "General Photography", category: "Other / More", image: "/images/General-Photography.jpg", description: "Professional photography services." },
//   { name: "Graphic Design", category: "Other / More", image: "/images/graphic-design.jpg", description: "Creative graphic design solutions." },
//   { name: "Immigration Lawyers", category: "Other / More", image: "/images/lawer.jpg", description: "Expert immigration legal services." },
//   { name: "Wills and Estate Planning", category: "Other / More", image: "/images/event-party.jpg", description: "Plan your estate professionally." }
// ];

// export default serviceCategories

// serviceCategoriesWithQuestions.js


const serviceCategories = [
  // ================= Home & Garden =================
  {
    name: "House Cleaning",
    category: "Home & Garden",
    image: "/images/house-cleaning.webp",
    description: "Professional home cleaning with trusted staff & eco-friendly products.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Number of Rooms to Clean", key: "rooms" },
      { type: "checkbox", label: "Areas to Clean", key: "areas", options: ["Kitchen", "Bathroom", "Living Room", "Bedrooms", "Other"] },
      { type: "date", label: "Preferred Cleaning Date", key: "date" },
      { type: "time", label: "Preferred Time", key: "time" },
      { type: "textarea", label: "Additional Notes", key: "notes" }
    ]
  },
  {
    name: "Commercial Cleaning",
    category: "Home & Garden",
    image: "/images/commercial-cleaning.jpeg",
    description: "Reliable office cleaning services for all business sizes.",
    questions: [
      { type: "text", label: "Contact Person", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Office Size (sq. ft.)", key: "officeSize" },
      { type: "checkbox", label: "Services Required", key: "services", options: ["Floor Cleaning", "Window Cleaning", "Restrooms", "Dusting", "Other"] },
      { type: "date", label: "Preferred Cleaning Date", key: "date" },
      { type: "textarea", label: "Additional Instructions", key: "notes" }
    ]
  },
  {
    name: "Pressure Washing",
    category: "Home & Garden",
    image: "/images/pressure.jpg",
    description: "High-pressure cleaning for driveways, patios, and exteriors.",
    questions: [
      { type: "text", label: "Your Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Area Type", key: "areaType", options: ["Driveway", "Patio", "Exterior Walls", "Other"] },
      { type: "number", label: "Approx. Area Size (sq. ft.)", key: "areaSize" },
      { type: "date", label: "Preferred Date", key: "date" },
      { type: "textarea", label: "Additional Notes", key: "notes" }
    ]
  },
  {
    name: "Gardening",
    category: "Home & Garden",
    image: "/images/gardening.webp",
    description: "Professional gardening services for your home and garden.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Type of Service", key: "gardeningType", options: ["Lawn Mowing", "Hedge Trimming", "Planting", "Weeding", "Other"] },
      { type: "number", label: "Approx. Garden Size (sq. ft.)", key: "gardenSize" },
      { type: "date", label: "Preferred Service Date", key: "date" },
      { type: "textarea", label: "Additional Details", key: "notes" }
    ]
  },
  {
    name: "Painting & Decoration",
    category: "Home & Garden",
    image: "/images/paingting&decoration.jpg",
    description: "Expert painting and decoration services for your home.",
    questions: [
      { type: "text", label: "Your Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "number", label: "Number of Rooms", key: "rooms" },
      { type: "select", label: "Type of Work", key: "workType", options: ["Interior Painting", "Exterior Painting", "Decoration", "Wallpaper", "Other"] },
      { type: "date", label: "Preferred Start Date", key: "date" },
      { type: "textarea", label: "Additional Details / Color Preferences", key: "notes" }
    ]
  },
  {
    name: "Garden Clearance",
    category: "Home & Garden",
    image: "/images/garden-cleaning.jpg",
    description: "Keep your garden clean and well-maintained.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Approx. Garden Size (sq. ft.)", key: "gardenSize" },
      { type: "select", label: "Clearance Type", key: "clearanceType", options: ["Leaves", "Weeds", "Old Plants", "Debris", "Other"] },
      { type: "date", label: "Preferred Date", key: "date" },
      { type: "textarea", label: "Additional Instructions", key: "notes" }
    ]
  },
  {
    name: "Gutter Cleaning",
    category: "Home & Garden",
    image: "/images/gutter-cleaning.jpeg",
    description: "Keep your gutters free of debris and flowing smoothly.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Number of Stories / Height", key: "height" },
      { type: "select", label: "Gutter Type", key: "gutterType", options: ["Standard", "K-Style", "Other"] },
      { type: "date", label: "Preferred Cleaning Date", key: "date" },
      { type: "textarea", label: "Additional Notes", key: "notes" }
    ]
  },
  {
    name: "Architectural Services",
    category: "Home & Garden",
    image: "/images/archetectural.jpg",
    description: "Professional architectural services for your home.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Project Description", key: "projectDesc" },
      { type: "select", label: "Service Type", key: "serviceType", options: ["Design", "Renovation", "Extension", "Other"] },
      { type: "date", label: "Preferred Consultation Date", key: "date" }
    ]
  },
  {
    name: "CCTV Installation",
    category: "Home & Garden",
    image: "/images/CCTV-Installation.jpg",
    description: "Secure your home with professional CCTV installation.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Number of Cameras", key: "cameraCount" },
      { type: "select", label: "Installation Type", key: "installType", options: ["Indoor", "Outdoor", "Both"] },
      { type: "date", label: "Preferred Installation Date", key: "date" },
      { type: "textarea", label: "Additional Instructions", key: "notes" }
    ]
  },
  {
    name: "Fence & Gate Installation",
    category: "Home & Garden",
    image: "/images/Gate-Installation.jpg",
    description: "High-quality fence and gate installation services.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Fence Type", key: "fenceType", options: ["Wood", "Metal", "PVC", "Other"] },
      { type: "number", label: "Length (meters)", key: "length" },
      { type: "date", label: "Preferred Installation Date", key: "date" },
      { type: "textarea", label: "Additional Instructions", key: "notes" }
    ]
  },

  // ================= Business & Professional =================
  {
    name: "Accounting",
    category: "Business & Professional",
    image: "/images/accounting.jpg",
    description: "Professional accounting services for your business.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "text", label: "Business Name", key: "businessName" },
      { type: "textarea", label: "Services Required", key: "services" },
      { type: "date", label: "Preferred Consultation Date", key: "date" }
    ]
  },
  {
    name: "Bookkeeping",
    category: "Business & Professional",
    image: "/images/bookkeeping.jpg",
    description: "Keep your financial records accurate and up to date.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "text", label: "Business Name", key: "businessName" },
      { type: "select", label: "Type of Bookkeeping", key: "bookkeepingType", options: ["Accounts Payable", "Accounts Receivable", "Payroll", "Full-Service"] },
      { type: "date", label: "Preferred Start Date", key: "date" }
    ]
  },

  {
    name: "Business Consulting",
    category: "Business & Professional",
    image: "/images/bussiness-consulting.jpg",
    description: "Expert advice to grow and optimize your business.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "text", label: "Business Name", key: "businessName" },
      { type: "textarea", label: "Challenges to Solve", key: "challenges" },
      { type: "date", label: "Preferred Consultation Date", key: "date" }
    ]
  },

  {
    name: "Web Design",
    category: "Business & Professional",
    image: "/images/web-design.webp",
    description: "Beautiful and functional website design services.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "text", label: "Business/Project Name", key: "projectName" },
      { type: "textarea", label: "Design Preferences / Inspirations", key: "preferences" },
      { type: "date", label: "Preferred Start Date", key: "date" }
    ]
  },
   // ================= Health & Wellness =================
  {
    name: "Personal Trainers",
    category: "Health & Wellness",
    image: "/images/personal-trainer.webp",
    description: "Achieve your fitness goals with professional trainers.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Age", key: "age" },
      { type: "select", label: "Fitness Goal", key: "goal", options: ["Weight Loss", "Muscle Gain", "Flexibility", "Endurance", "Other"] },
      { type: "textarea", label: "Health Concerns / Injuries", key: "healthConcerns" },
      { type: "date", label: "Preferred Training Start Date", key: "date" }
    ]
  },
  {
    name: "Counselling",
    category: "Health & Wellness",
    image: "/images/counselling.jpg",
    description: "Supportive counselling services for mental wellbeing.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Type of Counselling", key: "counsellingType", options: ["Individual", "Couples", "Family"] },
      { type: "textarea", label: "Concerns / Issues", key: "concerns" },
      { type: "date", label: "Preferred Session Date", key: "date" }
    ]
  },
  {
    name: "Therapist",
    category: "Health & Wellness",
    image: "/images/therapy.jpg",
    description: "Professional therapy sessions for your health.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Therapy Type", key: "therapyType", options: ["Physical Therapy", "Occupational Therapy", "Speech Therapy", "Other"] },
      { type: "textarea", label: "Describe Your Condition", key: "condition" },
      { type: "date", label: "Preferred Appointment Date", key: "date" }
    ]
  },
  {
    name: "Hypnotherapy",
    category: "Health & Wellness",
    image: "/images/hypnothrerapy.jpg",
    description: "Transform your life with hypnotherapy.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Goal / Issue to Address", key: "goal" },
      { type: "select", label: "Preferred Session Type", key: "sessionType", options: ["Online", "In-person"] },
      { type: "date", label: "Preferred Date", key: "date" }
    ]
  },
  {
    name: "Massage Therapy",
    category: "Health & Wellness",
    image: "/images/massage-therapy.jpg",
    description: "Relax and rejuvenate with professional massage therapy.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Massage Type", key: "massageType", options: ["Swedish", "Deep Tissue", "Sports", "Other"] },
      { type: "number", label: "Duration (minutes)", key: "duration" },
      { type: "date", label: "Preferred Appointment Date", key: "date" }
    ]
  },
  {
    name: "Nutritionists & Dietitians",
    category: "Health & Wellness",
    image: "/images/nutrition.jpg",
    description: "Expert nutrition guidance for a healthy lifestyle.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Health Goals / Dietary Needs", key: "goals" },
      { type: "select", label: "Consultation Type", key: "consultationType", options: ["Online", "In-person"] },
      { type: "date", label: "Preferred Consultation Date", key: "date" }
    ]
  },
  {
    name: "Relationship and Marriage Counselling",
    category: "Health & Wellness",
    image: "/images/relationship-marraige.jpg",
    description: "Strengthen relationships with expert counselling.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Counselling Type", key: "counsellingType", options: ["Couples", "Family", "Individual"] },
      { type: "textarea", label: "Describe Relationship Concerns", key: "concerns" },
      { type: "date", label: "Preferred Session Date", key: "date" }
    ]
  },

  // ================= Lessons & Training =================
  {
    name: "Business & Career Coaching",
    category: "Lessons & Training",
    image: "/images/bussiness-career.jpg",
    description: "Professional coaching to advance your career.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Current Career Challenges", key: "challenges" },
      { type: "select", label: "Coaching Type", key: "coachingType", options: ["One-on-One", "Group", "Online"] },
      { type: "date", label: "Preferred Coaching Start Date", key: "date" }
    ]
  },
  {
    name: "English Lessons",
    category: "Lessons & Training",
    image: "/images/english.jpg",
    description: "Learn English with experienced tutors.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Level", key: "level", options: ["Beginner", "Intermediate", "Advanced"] },
      { type: "textarea", label: "Learning Goals", key: "goals" },
      { type: "date", label: "Preferred Lesson Start Date", key: "date" }
    ]
  },
  {
    name: "Guitar Lessons",
    category: "Lessons & Training",
    image: "/images/guitar.jpg",
    description: "Learn guitar from skilled instructors.",
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Skill Level", key: "level", options: ["Beginner", "Intermediate", "Advanced"] },
      { type: "textarea", label: "Goals / Music Style Preference", key: "goals" },
      { type: "date", label: "Preferred Lesson Start Date", key: "date" }
    ]
  },
  {
    name: "Maths Tutoring",
    category: "Lessons & Training",
    image: "/images/maths.jpg",
    description: "Expert tutoring in mathematics.",
    questions: [
      { type: "text", label: "Student Name", key: "name" },
      { type: "email", label: "Parent Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Level", key: "level", options: ["Primary", "Secondary", "College"] },
      { type: "textarea", label: "Topics to Focus On", key: "topics" },
      { type: "date", label: "Preferred Tutoring Start Date", key: "date" }
    ]
  },

  // ================= Personal Services =================
  {
    name: "Life Coaching",
    category: "Personal Services",
    image: "/images/life-coaching.jpg",
    description: "Achieve your personal goals with life coaching.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Personal Goals / Areas to Focus On", key: "goals" },
      { type: "number", label: "Number of Sessions Desired", key: "sessions" },
      { type: "date", label: "Preferred Start Date", key: "date" }
    ]
  },
  {
    name: "Personal Chef Services",
    category: "Personal Services",
    image: "/images/sheaf.jpg",
    description: "Hire a personal chef for your meals.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Meal Preferences / Dietary Requirements", key: "mealPreferences" },
      { type: "number", label: "Number of Meals / Days", key: "meals" },
      { type: "date", label: "Service Start Date", key: "date" }
    ]
  },
  {
    name: "Private Investigators",
    category: "Personal Services",
    image: "/images/investigator.jpg",
    description: "Professional investigation services.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Case / Investigation Details", key: "caseDetails" },
      { type: "select", label: "Urgency Level", key: "urgency", options: ["Low", "Medium", "High"] },
      { type: "date", label: "Preferred Start Date", key: "date" }
    ]
  },
  {
    name: "Domiciliary Nursing Care",
    category: "Personal Services",
    image: "/images/nurse.jpg",
    description: "Quality nursing care at your home.",
    questions: [
      { type: "text", label: "Patient Name", key: "patientName" },
      { type: "text", label: "Client Name", key: "clientName" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Medical Requirements / Special Care", key: "medicalDetails" },
      { type: "number", label: "Number of Days / Hours Needed", key: "duration" },
      { type: "date", label: "Care Start Date", key: "date" }
    ]
  },
  {
    name: "Family Counselling",
    category: "Personal Services",
    image: "/images/family.jpg",
    description: "Support your family with professional counselling.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Family Concerns / Topics to Discuss", key: "concerns" },
      { type: "number", label: "Number of Sessions Desired", key: "sessions" },
      { type: "date", label: "Preferred Start Date", key: "date" }
    ]
  },
  {
    name: "Virtual Personal Assistant",
    category: "Personal Services",
    image: "/images/virtual.jpg",
    description: "Hire a virtual assistant to manage tasks.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Tasks to Manage / Responsibilities", key: "tasks" },
      { type: "number", label: "Number of Hours per Week", key: "hours" },
      { type: "date", label: "Preferred Start Date", key: "date" }
    ]
  },
  {
    name: "Identity Theft Restoration",
    category: "Personal Services",
    image: "/images/personal-theft.jpg",
    description: "Recover and protect your identity.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Identity Theft Details / Issues Faced", key: "caseDetails" },
      { type: "select", label: "Urgency Level", key: "urgency", options: ["Low", "Medium", "High"] },
      { type: "date", label: "Preferred Consultation Date", key: "date" }
    ]
  },
   // ================= Events & Entertainment =================
  {
    name: "Catering",
    category: "Events & Entertainment",
    image: "/images/catering.jpg",
    description: "Professional catering for all events.",
    questions: [
      { type: "text", label: "Organizer Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Number of Guests", key: "guests" },
      { type: "textarea", label: "Event Type / Special Requests", key: "eventDetails" },
      { type: "date", label: "Event Date", key: "date" }
    ]
  },
  {
    name: "DJ",
    category: "Events & Entertainment",
    image: "/images/dj.jpg",
    description: "Hire DJs for parties and events.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Event Type", key: "eventType", options: ["Wedding", "Birthday", "Corporate", "Other"] },
      { type: "number", label: "Event Duration (hours)", key: "duration" },
      { type: "date", label: "Event Date", key: "date" }
    ]
  },
  {
    name: "Event & Party Planners",
    category: "Events & Entertainment",
    image: "/images/event-party.jpg",
    description: "Plan and execute amazing events.",
    questions: [
      { type: "text", label: "Organizer Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Event Details / Requirements", key: "details" },
      { type: "select", label: "Event Type", key: "eventType", options: ["Wedding", "Birthday", "Corporate", "Other"] },
      { type: "date", label: "Event Date", key: "date" }
    ]
  },
  {
    name: "Magician",
    category: "Events & Entertainment",
    image: "/images/megician.jpg",
    description: "Hire magicians for entertainment.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Event Type", key: "eventType", options: ["Birthday", "Wedding", "Corporate", "Other"] },
      { type: "number", label: "Duration of Performance (minutes)", key: "duration" },
      { type: "date", label: "Event Date", key: "date" }
    ]
  },
  {
    name: "Wedding Car Hire",
    category: "Events & Entertainment",
    image: "/images/wedding-car.jpg",
    description: "Luxury cars for weddings and events.",
    questions: [
      { type: "text", label: "Bride/Groom Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Number of Cars Required", key: "cars" },
      { type: "text", label: "Pickup Location", key: "pickup" },
      { type: "text", label: "Drop-off Location", key: "dropoff" },
      { type: "date", label: "Event Date", key: "date" }
    ]
  },
  {
    name: "Wedding Catering",
    category: "Events & Entertainment",
    image: "/images/window-cleaning.webp",
    description: "Delicious catering for weddings.",
    questions: [
      { type: "text", label: "Bride/Groom Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Number of Guests", key: "guests" },
      { type: "textarea", label: "Menu Preferences / Special Requests", key: "menu" },
      { type: "date", label: "Wedding Date", key: "date" }
    ]
  },
  {
    name: "Wedding Flowers",
    category: "Events & Entertainment",
    image: "/images/wedding-flower.jpg",
    description: "Beautiful floral arrangements for weddings.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Flower Preferences / Color Theme", key: "flowers" },
      { type: "number", label: "Number of Arrangements Required", key: "quantity" },
      { type: "date", label: "Event Date", key: "date" }
    ]
  },

  // ================= Other / More =================
  {
    name: "Dog & Pet Grooming",
    category: "Other / More",
    image: "/images/dog-grooming.jpg",
    description: "Professional pet grooming services.",
    questions: [
      { type: "text", label: "Pet Owner Name", key: "ownerName" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "text", label: "Pet Name", key: "petName" },
      { type: "select", label: "Pet Type", key: "petType", options: ["Dog", "Cat", "Other"] },
      { type: "textarea", label: "Grooming Instructions / Notes", key: "instructions" },
      { type: "date", label: "Preferred Appointment Date", key: "date" }
    ]
  },
  {
    name: "Dog Training",
    category: "Other / More",
    image: "/images/dog-training.jpg",
    description: "Train your dog with experts.",
    questions: [
      { type: "text", label: "Owner Name", key: "ownerName" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "text", label: "Dog Name", key: "dogName" },
      { type: "select", label: "Training Type", key: "trainingType", options: ["Basic Obedience", "Advanced Obedience", "Behavior Correction", "Other"] },
      { type: "date", label: "Preferred Training Start Date", key: "date" }
    ]
  },
  {
    name: "Dog Walking",
    category: "Other / More",
    image: "/images/dog-walking.jpg",
    description: "Reliable dog walking services.",
    questions: [
      { type: "text", label: "Owner Name", key: "ownerName" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "text", label: "Dog Name", key: "dogName" },
      { type: "number", label: "Walk Duration (minutes)", key: "duration" },
      { type: "date", label: "Preferred Walk Date", key: "date" }
    ]
  },
  {
    name: "Limousine Hire",
    category: "Other / More",
    image: "/images/limousine.jpg",
    description: "Luxury limousine hire for events.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "number", label: "Number of Cars Required", key: "cars" },
      { type: "text", label: "Pickup Location", key: "pickup" },
      { type: "text", label: "Drop-off Location", key: "dropoff" },
      { type: "date", label: "Event Date", key: "date" }
    ]
  },
  {
    name: "General Photography",
    category: "Other / More",
    image: "/images/General-Photography.jpg",
    description: "Professional photography services.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "select", label: "Photography Type", key: "photoType", options: ["Wedding", "Event", "Portrait", "Product", "Other"] },
      { type: "textarea", label: "Additional Details / Requests", key: "details" },
      { type: "date", label: "Photography Date", key: "date" }
    ]
  },
  {
    name: "Graphic Design",
    category: "Other / More",
    image: "/images/graphic-design.jpg",
    description: "Creative graphic design solutions.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Project Description / Requirements", key: "project" },
      { type: "select", label: "Design Type", key: "designType", options: ["Logo", "Banner", "Brochure", "Social Media", "Other"] },
      { type: "date", label: "Preferred Completion Date", key: "date" }
    ]
  },
  {
    name: "Immigration Lawyers",
    category: "Other / More",
    image: "/images/lawer.jpg",
    description: "Expert immigration legal services.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Case Details / Requirements", key: "details" },
      { type: "select", label: "Service Type", key: "serviceType", options: ["Visa Application", "Residency", "Citizenship", "Other"] },
      { type: "date", label: "Preferred Consultation Date", key: "date" }
    ]
  },
  {
    name: "Wills and Estate Planning",
    category: "Other / More",
    image: "/images/event-party.jpg",
    description: "Plan your estate professionally.",
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "email", label: "Email", key: "email" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Estate Details / Special Requests", key: "details" },
      { type: "select", label: "Planning Type", key: "planningType", options: ["Will", "Trust", "Full Estate Planning"] },
      { type: "date", label: "Preferred Appointment Date", key: "date" }
    ]
  }

  // Note: Remaining services for Health & Wellness, Lessons & Training, Personal Services, Events & Entertainment, Other/More follow the **same pattern**.
];

export default serviceCategories;
