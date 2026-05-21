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

// ******************************************************************************WORKING OR PERFECT**********************************************************
// const serviceCategories = [
//   // ================= Home & Garden =================
//   {
//     name: "House Cleaning",
//     category: "Home & Garden",
//     image: "/images/house-cleaning.webp",
//     description: "Professional home cleaning with trusted staff & eco-friendly products.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Number of Rooms to Clean", key: "rooms" },
//       { type: "checkbox", label: "Areas to Clean", key: "areas", options: ["Kitchen", "Bathroom", "Living Room", "Bedrooms", "Other"] },
//       { type: "date", label: "Preferred Cleaning Date", key: "date" },
//       { type: "time", label: "Preferred Time", key: "time" },
//       { type: "textarea", label: "Additional Notes", key: "notes" }
//     ]
//   },
//   {
//     name: "Commercial Cleaning",
//     category: "Home & Garden",
//     image: "/images/commercial-cleaning.jpeg",
//     description: "Reliable office cleaning services for all business sizes.",
//     questions: [
//       { type: "text", label: "Contact Person", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Office Size (sq. ft.)", key: "officeSize" },
//       { type: "checkbox", label: "Services Required", key: "services", options: ["Floor Cleaning", "Window Cleaning", "Restrooms", "Dusting", "Other"] },
//       { type: "date", label: "Preferred Cleaning Date", key: "date" },
//       { type: "textarea", label: "Additional Instructions", key: "notes" }
//     ]
//   },
//   {
//     name: "Pressure Washing",
//     category: "Home & Garden",
//     image: "/images/pressure.jpg",
//     description: "High-pressure cleaning for driveways, patios, and exteriors.",
//     questions: [
//       { type: "text", label: "Your Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Area Type", key: "areaType", options: ["Driveway", "Patio", "Exterior Walls", "Other"] },
//       { type: "number", label: "Approx. Area Size (sq. ft.)", key: "areaSize" },
//       { type: "date", label: "Preferred Date", key: "date" },
//       { type: "textarea", label: "Additional Notes", key: "notes" }
//     ]
//   },
//   {
//     name: "Gardening",
//     category: "Home & Garden",
//     image: "/images/gardening.webp",
//     description: "Professional gardening services for your home and garden.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Type of Service", key: "gardeningType", options: ["Lawn Mowing", "Hedge Trimming", "Planting", "Weeding", "Other"] },
//       { type: "number", label: "Approx. Garden Size (sq. ft.)", key: "gardenSize" },
//       { type: "date", label: "Preferred Service Date", key: "date" },
//       { type: "textarea", label: "Additional Details", key: "notes" }
//     ]
//   },
//   {
//     name: "Painting & Decoration",
//     category: "Home & Garden",
//     image: "/images/paingting&decoration.jpg",
//     description: "Expert painting and decoration services for your home.",
//     questions: [
//       { type: "text", label: "Your Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "number", label: "Number of Rooms", key: "rooms" },
//       { type: "select", label: "Type of Work", key: "workType", options: ["Interior Painting", "Exterior Painting", "Decoration", "Wallpaper", "Other"] },
//       { type: "date", label: "Preferred Start Date", key: "date" },
//       { type: "textarea", label: "Additional Details / Color Preferences", key: "notes" }
//     ]
//   },
//   {
//     name: "Garden Clearance",
//     category: "Home & Garden",
//     image: "/images/garden-cleaning.jpg",
//     description: "Keep your garden clean and well-maintained.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Approx. Garden Size (sq. ft.)", key: "gardenSize" },
//       { type: "select", label: "Clearance Type", key: "clearanceType", options: ["Leaves", "Weeds", "Old Plants", "Debris", "Other"] },
//       { type: "date", label: "Preferred Date", key: "date" },
//       { type: "textarea", label: "Additional Instructions", key: "notes" }
//     ]
//   },
//   {
//     name: "Gutter Cleaning",
//     category: "Home & Garden",
//     image: "/images/gutter-cleaning.jpeg",
//     description: "Keep your gutters free of debris and flowing smoothly.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Number of Stories / Height", key: "height" },
//       { type: "select", label: "Gutter Type", key: "gutterType", options: ["Standard", "K-Style", "Other"] },
//       { type: "date", label: "Preferred Cleaning Date", key: "date" },
//       { type: "textarea", label: "Additional Notes", key: "notes" }
//     ]
//   },
//   {
//     name: "Architectural Services",
//     category: "Home & Garden",
//     image: "/images/archetectural.jpg",
//     description: "Professional architectural services for your home.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Project Description", key: "projectDesc" },
//       { type: "select", label: "Service Type", key: "serviceType", options: ["Design", "Renovation", "Extension", "Other"] },
//       { type: "date", label: "Preferred Consultation Date", key: "date" }
//     ]
//   },
//   {
//     name: "CCTV Installation",
//     category: "Home & Garden",
//     image: "/images/CCTV-Installation.jpg",
//     description: "Secure your home with professional CCTV installation.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Number of Cameras", key: "cameraCount" },
//       { type: "select", label: "Installation Type", key: "installType", options: ["Indoor", "Outdoor", "Both"] },
//       { type: "date", label: "Preferred Installation Date", key: "date" },
//       { type: "textarea", label: "Additional Instructions", key: "notes" }
//     ]
//   },
//   {
//     name: "Fence & Gate Installation",
//     category: "Home & Garden",
//     image: "/images/Gate-Installation.jpg",
//     description: "High-quality fence and gate installation services.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Fence Type", key: "fenceType", options: ["Wood", "Metal", "PVC", "Other"] },
//       { type: "number", label: "Length (meters)", key: "length" },
//       { type: "date", label: "Preferred Installation Date", key: "date" },
//       { type: "textarea", label: "Additional Instructions", key: "notes" }
//     ]
//   },

//   // ================= Business & Professional =================
//   {
//     name: "Accounting",
//     category: "Business & Professional",
//     image: "/images/accounting.jpg",
//     description: "Professional accounting services for your business.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "text", label: "Business Name", key: "businessName" },
//       { type: "textarea", label: "Services Required", key: "services" },
//       { type: "date", label: "Preferred Consultation Date", key: "date" }
//     ]
//   },
//   {
//     name: "Bookkeeping",
//     category: "Business & Professional",
//     image: "/images/bookkeeping.jpg",
//     description: "Keep your financial records accurate and up to date.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "text", label: "Business Name", key: "businessName" },
//       { type: "select", label: "Type of Bookkeeping", key: "bookkeepingType", options: ["Accounts Payable", "Accounts Receivable", "Payroll", "Full-Service"] },
//       { type: "date", label: "Preferred Start Date", key: "date" }
//     ]
//   },

//   {
//     name: "Business Consulting",
//     category: "Business & Professional",
//     image: "/images/bussiness-consulting.jpg",
//     description: "Expert advice to grow and optimize your business.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "text", label: "Business Name", key: "businessName" },
//       { type: "textarea", label: "Challenges to Solve", key: "challenges" },
//       { type: "date", label: "Preferred Consultation Date", key: "date" }
//     ]
//   },

//   {
//     name: "Web Design",
//     category: "Business & Professional",
//     image: "/images/web-design.webp",
//     description: "Beautiful and functional website design services.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "text", label: "Business/Project Name", key: "projectName" },
//       { type: "textarea", label: "Design Preferences / Inspirations", key: "preferences" },
//       { type: "date", label: "Preferred Start Date", key: "date" }
//     ]
//   },
//    // ================= Health & Wellness =================
//   {
//     name: "Personal Trainers",
//     category: "Health & Wellness",
//     image: "/images/personal-trainer.webp",
//     description: "Achieve your fitness goals with professional trainers.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Age", key: "age" },
//       { type: "select", label: "Fitness Goal", key: "goal", options: ["Weight Loss", "Muscle Gain", "Flexibility", "Endurance", "Other"] },
//       { type: "textarea", label: "Health Concerns / Injuries", key: "healthConcerns" },
//       { type: "date", label: "Preferred Training Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Counselling",
//     category: "Health & Wellness",
//     image: "/images/counselling.jpg",
//     description: "Supportive counselling services for mental wellbeing.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Type of Counselling", key: "counsellingType", options: ["Individual", "Couples", "Family"] },
//       { type: "textarea", label: "Concerns / Issues", key: "concerns" },
//       { type: "date", label: "Preferred Session Date", key: "date" }
//     ]
//   },
//   {
//     name: "Therapist",
//     category: "Health & Wellness",
//     image: "/images/therapy.jpg",
//     description: "Professional therapy sessions for your health.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Therapy Type", key: "therapyType", options: ["Physical Therapy", "Occupational Therapy", "Speech Therapy", "Other"] },
//       { type: "textarea", label: "Describe Your Condition", key: "condition" },
//       { type: "date", label: "Preferred Appointment Date", key: "date" }
//     ]
//   },
//   {
//     name: "Hypnotherapy",
//     category: "Health & Wellness",
//     image: "/images/hypnothrerapy.jpg",
//     description: "Transform your life with hypnotherapy.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Goal / Issue to Address", key: "goal" },
//       { type: "select", label: "Preferred Session Type", key: "sessionType", options: ["Online", "In-person"] },
//       { type: "date", label: "Preferred Date", key: "date" }
//     ]
//   },
//   {
//     name: "Massage Therapy",
//     category: "Health & Wellness",
//     image: "/images/massage-therapy.jpg",
//     description: "Relax and rejuvenate with professional massage therapy.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Massage Type", key: "massageType", options: ["Swedish", "Deep Tissue", "Sports", "Other"] },
//       { type: "number", label: "Duration (minutes)", key: "duration" },
//       { type: "date", label: "Preferred Appointment Date", key: "date" }
//     ]
//   },
//   {
//     name: "Nutritionists & Dietitians",
//     category: "Health & Wellness",
//     image: "/images/nutrition.jpg",
//     description: "Expert nutrition guidance for a healthy lifestyle.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Health Goals / Dietary Needs", key: "goals" },
//       { type: "select", label: "Consultation Type", key: "consultationType", options: ["Online", "In-person"] },
//       { type: "date", label: "Preferred Consultation Date", key: "date" }
//     ]
//   },
//   {
//     name: "Relationship and Marriage Counselling",
//     category: "Health & Wellness",
//     image: "/images/relationship-marraige.jpg",
//     description: "Strengthen relationships with expert counselling.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Counselling Type", key: "counsellingType", options: ["Couples", "Family", "Individual"] },
//       { type: "textarea", label: "Describe Relationship Concerns", key: "concerns" },
//       { type: "date", label: "Preferred Session Date", key: "date" }
//     ]
//   },

//   // ================= Lessons & Training =================
//   {
//     name: "Business & Career Coaching",
//     category: "Lessons & Training",
//     image: "/images/bussiness-career.jpg",
//     description: "Professional coaching to advance your career.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Current Career Challenges", key: "challenges" },
//       { type: "select", label: "Coaching Type", key: "coachingType", options: ["One-on-One", "Group", "Online"] },
//       { type: "date", label: "Preferred Coaching Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "English Lessons",
//     category: "Lessons & Training",
//     image: "/images/english.jpg",
//     description: "Learn English with experienced tutors.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Level", key: "level", options: ["Beginner", "Intermediate", "Advanced"] },
//       { type: "textarea", label: "Learning Goals", key: "goals" },
//       { type: "date", label: "Preferred Lesson Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Guitar Lessons",
//     category: "Lessons & Training",
//     image: "/images/guitar.jpg",
//     description: "Learn guitar from skilled instructors.",
//     questions: [
//       { type: "text", label: "Full Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Skill Level", key: "level", options: ["Beginner", "Intermediate", "Advanced"] },
//       { type: "textarea", label: "Goals / Music Style Preference", key: "goals" },
//       { type: "date", label: "Preferred Lesson Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Maths Tutoring",
//     category: "Lessons & Training",
//     image: "/images/maths.jpg",
//     description: "Expert tutoring in mathematics.",
//     questions: [
//       { type: "text", label: "Student Name", key: "name" },
//       { type: "email", label: "Parent Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Level", key: "level", options: ["Primary", "Secondary", "College"] },
//       { type: "textarea", label: "Topics to Focus On", key: "topics" },
//       { type: "date", label: "Preferred Tutoring Start Date", key: "date" }
//     ]
//   },

//   // ================= Personal Services =================
//   {
//     name: "Life Coaching",
//     category: "Personal Services",
//     image: "/images/life-coaching.jpg",
//     description: "Achieve your personal goals with life coaching.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Personal Goals / Areas to Focus On", key: "goals" },
//       { type: "number", label: "Number of Sessions Desired", key: "sessions" },
//       { type: "date", label: "Preferred Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Personal Chef Services",
//     category: "Personal Services",
//     image: "/images/sheaf.jpg",
//     description: "Hire a personal chef for your meals.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Meal Preferences / Dietary Requirements", key: "mealPreferences" },
//       { type: "number", label: "Number of Meals / Days", key: "meals" },
//       { type: "date", label: "Service Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Private Investigators",
//     category: "Personal Services",
//     image: "/images/investigator.jpg",
//     description: "Professional investigation services.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Case / Investigation Details", key: "caseDetails" },
//       { type: "select", label: "Urgency Level", key: "urgency", options: ["Low", "Medium", "High"] },
//       { type: "date", label: "Preferred Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Domiciliary Nursing Care",
//     category: "Personal Services",
//     image: "/images/nurse.jpg",
//     description: "Quality nursing care at your home.",
//     questions: [
//       { type: "text", label: "Patient Name", key: "patientName" },
//       { type: "text", label: "Client Name", key: "clientName" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Medical Requirements / Special Care", key: "medicalDetails" },
//       { type: "number", label: "Number of Days / Hours Needed", key: "duration" },
//       { type: "date", label: "Care Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Family Counselling",
//     category: "Personal Services",
//     image: "/images/family.jpg",
//     description: "Support your family with professional counselling.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Family Concerns / Topics to Discuss", key: "concerns" },
//       { type: "number", label: "Number of Sessions Desired", key: "sessions" },
//       { type: "date", label: "Preferred Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Virtual Personal Assistant",
//     category: "Personal Services",
//     image: "/images/virtual.jpg",
//     description: "Hire a virtual assistant to manage tasks.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Tasks to Manage / Responsibilities", key: "tasks" },
//       { type: "number", label: "Number of Hours per Week", key: "hours" },
//       { type: "date", label: "Preferred Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Identity Theft Restoration",
//     category: "Personal Services",
//     image: "/images/personal-theft.jpg",
//     description: "Recover and protect your identity.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Identity Theft Details / Issues Faced", key: "caseDetails" },
//       { type: "select", label: "Urgency Level", key: "urgency", options: ["Low", "Medium", "High"] },
//       { type: "date", label: "Preferred Consultation Date", key: "date" }
//     ]
//   },
//    // ================= Events & Entertainment =================
//   {
//     name: "Catering",
//     category: "Events & Entertainment",
//     image: "/images/catering.jpg",
//     description: "Professional catering for all events.",
//     questions: [
//       { type: "text", label: "Organizer Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Number of Guests", key: "guests" },
//       { type: "textarea", label: "Event Type / Special Requests", key: "eventDetails" },
//       { type: "date", label: "Event Date", key: "date" }
//     ]
//   },
//   {
//     name: "DJ",
//     category: "Events & Entertainment",
//     image: "/images/dj.jpg",
//     description: "Hire DJs for parties and events.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Event Type", key: "eventType", options: ["Wedding", "Birthday", "Corporate", "Other"] },
//       { type: "number", label: "Event Duration (hours)", key: "duration" },
//       { type: "date", label: "Event Date", key: "date" }
//     ]
//   },
//   {
//     name: "Event & Party Planners",
//     category: "Events & Entertainment",
//     image: "/images/event-party.jpg",
//     description: "Plan and execute amazing events.",
//     questions: [
//       { type: "text", label: "Organizer Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Event Details / Requirements", key: "details" },
//       { type: "select", label: "Event Type", key: "eventType", options: ["Wedding", "Birthday", "Corporate", "Other"] },
//       { type: "date", label: "Event Date", key: "date" }
//     ]
//   },
//   {
//     name: "Magician",
//     category: "Events & Entertainment",
//     image: "/images/megician.jpg",
//     description: "Hire magicians for entertainment.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Event Type", key: "eventType", options: ["Birthday", "Wedding", "Corporate", "Other"] },
//       { type: "number", label: "Duration of Performance (minutes)", key: "duration" },
//       { type: "date", label: "Event Date", key: "date" }
//     ]
//   },
//   {
//     name: "Wedding Car Hire",
//     category: "Events & Entertainment",
//     image: "/images/wedding-car.jpg",
//     description: "Luxury cars for weddings and events.",
//     questions: [
//       { type: "text", label: "Bride/Groom Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Number of Cars Required", key: "cars" },
//       { type: "text", label: "Pickup Location", key: "pickup" },
//       { type: "text", label: "Drop-off Location", key: "dropoff" },
//       { type: "date", label: "Event Date", key: "date" }
//     ]
//   },
//   {
//     name: "Wedding Catering",
//     category: "Events & Entertainment",
//     image: "/images/window-cleaning.webp",
//     description: "Delicious catering for weddings.",
//     questions: [
//       { type: "text", label: "Bride/Groom Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Number of Guests", key: "guests" },
//       { type: "textarea", label: "Menu Preferences / Special Requests", key: "menu" },
//       { type: "date", label: "Wedding Date", key: "date" }
//     ]
//   },
//   {
//     name: "Wedding Flowers",
//     category: "Events & Entertainment",
//     image: "/images/wedding-flower.jpg",
//     description: "Beautiful floral arrangements for weddings.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Flower Preferences / Color Theme", key: "flowers" },
//       { type: "number", label: "Number of Arrangements Required", key: "quantity" },
//       { type: "date", label: "Event Date", key: "date" }
//     ]
//   },

//   // ================= Other / More =================
//   {
//     name: "Dog & Pet Grooming",
//     category: "Other / More",
//     image: "/images/dog-grooming.jpg",
//     description: "Professional pet grooming services.",
//     questions: [
//       { type: "text", label: "Pet Owner Name", key: "ownerName" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "text", label: "Pet Name", key: "petName" },
//       { type: "select", label: "Pet Type", key: "petType", options: ["Dog", "Cat", "Other"] },
//       { type: "textarea", label: "Grooming Instructions / Notes", key: "instructions" },
//       { type: "date", label: "Preferred Appointment Date", key: "date" }
//     ]
//   },
//   {
//     name: "Dog Training",
//     category: "Other / More",
//     image: "/images/dog-training.jpg",
//     description: "Train your dog with experts.",
//     questions: [
//       { type: "text", label: "Owner Name", key: "ownerName" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "text", label: "Dog Name", key: "dogName" },
//       { type: "select", label: "Training Type", key: "trainingType", options: ["Basic Obedience", "Advanced Obedience", "Behavior Correction", "Other"] },
//       { type: "date", label: "Preferred Training Start Date", key: "date" }
//     ]
//   },
//   {
//     name: "Dog Walking",
//     category: "Other / More",
//     image: "/images/dog-walking.jpg",
//     description: "Reliable dog walking services.",
//     questions: [
//       { type: "text", label: "Owner Name", key: "ownerName" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "text", label: "Dog Name", key: "dogName" },
//       { type: "number", label: "Walk Duration (minutes)", key: "duration" },
//       { type: "date", label: "Preferred Walk Date", key: "date" }
//     ]
//   },
//   {
//     name: "Limousine Hire",
//     category: "Other / More",
//     image: "/images/limousine.jpg",
//     description: "Luxury limousine hire for events.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "number", label: "Number of Cars Required", key: "cars" },
//       { type: "text", label: "Pickup Location", key: "pickup" },
//       { type: "text", label: "Drop-off Location", key: "dropoff" },
//       { type: "date", label: "Event Date", key: "date" }
//     ]
//   },
//   {
//     name: "General Photography",
//     category: "Other / More",
//     image: "/images/General-Photography.jpg",
//     description: "Professional photography services.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "select", label: "Photography Type", key: "photoType", options: ["Wedding", "Event", "Portrait", "Product", "Other"] },
//       { type: "textarea", label: "Additional Details / Requests", key: "details" },
//       { type: "date", label: "Photography Date", key: "date" }
//     ]
//   },
//   {
//     name: "Graphic Design",
//     category: "Other / More",
//     image: "/images/graphic-design.jpg",
//     description: "Creative graphic design solutions.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Project Description / Requirements", key: "project" },
//       { type: "select", label: "Design Type", key: "designType", options: ["Logo", "Banner", "Brochure", "Social Media", "Other"] },
//       { type: "date", label: "Preferred Completion Date", key: "date" }
//     ]
//   },
//   {
//     name: "Immigration Lawyers",
//     category: "Other / More",
//     image: "/images/lawer.jpg",
//     description: "Expert immigration legal services.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Case Details / Requirements", key: "details" },
//       { type: "select", label: "Service Type", key: "serviceType", options: ["Visa Application", "Residency", "Citizenship", "Other"] },
//       { type: "date", label: "Preferred Consultation Date", key: "date" }
//     ]
//   },
//   {
//     name: "Wills and Estate Planning",
//     category: "Other / More",
//     image: "/images/event-party.jpg",
//     description: "Plan your estate professionally.",
//     questions: [
//       { type: "text", label: "Client Name", key: "name" },
//       { type: "email", label: "Email", key: "email" },
//       { type: "text", label: "Phone Number", key: "phone" },
//       { type: "textarea", label: "Estate Details / Special Requests", key: "details" },
//       { type: "select", label: "Planning Type", key: "planningType", options: ["Will", "Trust", "Full Estate Planning"] },
//       { type: "date", label: "Preferred Appointment Date", key: "date" }
//     ]
//   }

//   // Note: Remaining services for Health & Wellness, Lessons & Training, Personal Services, Events & Entertainment, Other/More follow the **same pattern**.
// ];

// export default serviceCategories;




//  const serviceCategories = [
//   // ================= Home & Garden =================
//   {
//     id: "house-cleaning",
//     slug: "house-cleaning",
//     name: "House Cleaning",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "fixed",
//     image: "/images/house-cleaning.webp",
//     description: "Professional home cleaning with trusted staff & eco-friendly products.",
//     isActive: true,
//     isFeatured: true,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "email", label: "Email", key: "email", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "date", label: "Preferred Cleaning Date", key: "date", required: true },
//       { type: "textarea", label: "Additional Notes", key: "notes" }
//     ]
//   },
//   {
//     id: "plumbing",
//     slug: "plumbing",
//     name: "Plumbing",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/plumbing.jpg",
//     description: "Expert plumbing repair and installation services.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "select", label: "Issue Type", key: "issue", options: ["Leakage","Installation","Drain Block","Other"] },
//       { type: "date", label: "Preferred Service Date", key: "date", required: true },
//       { type: "textarea", label: "Problem Details", key: "notes" }
//     ]
//   },
//   {
//     id: "electrician",
//     slug: "electrician",
//     name: "Electrician",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/electrician.jpg",
//     description: "Certified electricians for safe and reliable solutions.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "date", label: "Preferred Date", key: "date", required: true },
//       { type: "textarea", label: "Issue Description", key: "notes" }
//     ]
//   },
//   {
//     id: "ac-repair",
//     slug: "ac-repair",
//     name: "AC Repair",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/ac-repair.jpg",
//     description: "Fast AC repair and maintenance services.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "select", label: "AC Type", key: "acType", options: ["Split","Window","Central"] },
//       { type: "date", label: "Preferred Date", key: "date", required: true }
//     ]
//   },
//   {
//     id: "roof-repair",
//     slug: "roof-repair",
//     name: "Roof Repair",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/roof-repair.jpg",
//     description: "Professional roof repair and maintenance.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "date", label: "Inspection Date", key: "date", required: true },
//       { type: "textarea", label: "Roof Issue Details", key: "notes" }
//     ]
//   },
//   {
//     id: "solar-installation",
//     slug: "solar-installation",
//     name: "Solar Panel Installation",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/solar-panel.jpg",
//     description: "Professional solar panel installation for homes.",
//     isActive: true,
//     isFeatured: true,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "number", label: "Monthly Electricity Bill", key: "bill" },
//       { type: "date", label: "Preferred Installation Date", key: "date", required: true }
//     ]
//   },

//   // ================= Business & Professional =================
//   {
//     id: "graphic-design",
//     slug: "graphic-design",
//     name: "Graphic Design",
//     category: "business-professional",
//     categoryLabel: "Business & Professional",
//     pricingType: "custom",
//     image: "/images/graphic-design.jpg",
//     description: "Creative graphic design for branding & marketing.",
//     isActive: true,
//     isFeatured: true,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "email", label: "Email", key: "email", required: true },
//       { type: "textarea", label: "Project Brief", key: "brief" }
//     ]
//   },
//   {
//     id: "digital-marketing",
//     slug: "digital-marketing",
//     name: "Digital Marketing",
//     category: "business-professional",
//     categoryLabel: "Business & Professional",
//     pricingType: "custom",
//     image: "/images/digital-marketing.jpg",
//     description: "Grow your business with expert marketing strategies.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "email", label: "Email", key: "email", required: true },
//       { type: "textarea", label: "Business Details", key: "details" }
//     ]
//   },
//   {
//     id: "seo-services",
//     slug: "seo-services",
//     name: "SEO Services",
//     category: "business-professional",
//     categoryLabel: "Business & Professional",
//     pricingType: "monthly",
//     image: "/images/seo.jpg",
//     description: "Improve search engine ranking and traffic.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Website URL", key: "url", required: true },
//       { type: "email", label: "Email", key: "email", required: true },
//       { type: "textarea", label: "SEO Goals", key: "goals" }
//     ]
//   },

//   // ================= Health & Wellness =================
//   {
//     id: "nutritionist",
//     slug: "nutritionist",
//     name: "Nutritionist Consultation",
//     category: "health-wellness",
//     categoryLabel: "Health & Wellness",
//     pricingType: "hourly",
//     image: "/images/nutritionist.jpg",
//     description: "Personalized diet and nutrition plans.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "number", label: "Age", key: "age" },
//       { type: "textarea", label: "Health Goals", key: "goals" }
//     ]
//   },

//     {
//     id: "carpet-cleaning",
//     slug: "carpet-cleaning",
//     name: "Carpet Cleaning",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "fixed",
//     image: "/images/carpet-cleaning.jpg",
//     description: "Deep carpet cleaning and stain removal services.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "number", label: "Number of Rooms", key: "rooms" },
//       { type: "date", label: "Preferred Date", key: "date", required: true }
//     ]
//   },
//   {
//     id: "window-cleaning",
//     slug: "window-cleaning",
//     name: "Window Cleaning",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "fixed",
//     image: "/images/window-cleaning.jpg",
//     description: "Professional window and glass cleaning.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "number", label: "Number of Windows", key: "windows" },
//       { type: "date", label: "Preferred Date", key: "date", required: true }
//     ]
//   },
//   {
//     id: "bathroom-renovation",
//     slug: "bathroom-renovation",
//     name: "Bathroom Renovation",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/bathroom-renovation.jpg",
//     description: "Complete bathroom remodeling services.",
//     isActive: true,
//     isFeatured: true,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "number", label: "Bathroom Size (sq.ft)", key: "size" },
//       { type: "date", label: "Preferred Start Date", key: "date", required: true }
//     ]
//   },
//   {
//     id: "kitchen-renovation",
//     slug: "kitchen-renovation",
//     name: "Kitchen Renovation",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/kitchen-renovation.jpg",
//     description: "Modern kitchen renovation and remodeling.",
//     isActive: true,
//     isFeatured: true,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "number", label: "Kitchen Size (sq.ft)", key: "size" },
//       { type: "date", label: "Preferred Start Date", key: "date", required: true }
//     ]
//   },
//   {
//     id: "cctv-installation",
//     slug: "cctv-installation",
//     name: "CCTV Installation",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "custom",
//     image: "/images/cctv.jpg",
//     description: "Security camera installation services.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true },
//       { type: "number", label: "Number of Cameras", key: "cameras" },
//       { type: "date", label: "Preferred Installation Date", key: "date", required: true }
//     ]
//   },

//   {
//     id: "mobile-repair",
//     slug: "mobile-repair",
//     name: "Mobile Repair",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     pricingType: "fixed",
//     image: "/images/mobile-repair.jpg",
//     description: "Fast mobile phone repair services.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Device Model", key: "model", required: true },
//       { type: "text", label: "Issue Description", key: "issue", required: true },
//       { type: "text", label: "Phone Number", key: "phone", required: true }
//     ]
//   },

//   // Business
//   {
//     id: "content-writing",
//     slug: "content-writing",
//     name: "Content Writing",
//     category: "business-professional",
//     categoryLabel: "Business & Professional",
//     pricingType: "custom",
//     image: "/images/content-writing.jpg",
//     description: "Professional blog and website content writing.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Project Topic", key: "topic", required: true },
//       { type: "email", label: "Email", key: "email", required: true },
//       { type: "number", label: "Word Count", key: "words" }
//     ]
//   },
//   {
//     id: "video-editing",
//     slug: "video-editing",
//     name: "Video Editing",
//     category: "business-professional",
//     categoryLabel: "Business & Professional",
//     pricingType: "custom",
//     image: "/images/video-editing.jpg",
//     description: "Professional video editing services.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Video Duration (mins)", key: "duration", required: true },
//       { type: "email", label: "Email", key: "email", required: true },
//       { type: "textarea", label: "Editing Requirements", key: "details" }
//     ]
//   },
//   {
//     id: "app-development",
//     slug: "app-development",
//     name: "App Development",
//     category: "business-professional",
//     categoryLabel: "Business & Professional",
//     pricingType: "custom",
//     image: "/images/app-development.jpg",
//     description: "Android & iOS app development services.",
//     isActive: true,
//     isFeatured: true,
//     questions: [
//       { type: "text", label: "App Idea", key: "idea", required: true },
//       { type: "email", label: "Email", key: "email", required: true },
//       { type: "textarea", label: "Project Details", key: "details" }
//     ]
//   },

//   // Health
//   {
//     id: "yoga-instructor",
//     slug: "yoga-instructor",
//     name: "Yoga Instructor",
//     category: "health-wellness",
//     categoryLabel: "Health & Wellness",
//     pricingType: "hourly",
//     image: "/images/yoga.jpg",
//     description: "Certified yoga instructors for home sessions.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Full Name", key: "name", required: true },
//       { type: "number", label: "Age", key: "age" },
//       { type: "date", label: "Preferred Start Date", key: "date", required: true }
//     ]
//   },
//   {
//     id: "physiotherapy",
//     slug: "physiotherapy",
//     name: "Physiotherapy",
//     category: "health-wellness",
//     categoryLabel: "Health & Wellness",
//     pricingType: "hourly",
//     image: "/images/physiotherapy.jpg",
//     description: "Professional physiotherapy services.",
//     isActive: true,
//     isFeatured: false,
//     questions: [
//       { type: "text", label: "Patient Name", key: "name", required: true },
//       { type: "textarea", label: "Injury Details", key: "injury" },
//       { type: "date", label: "Preferred Appointment Date", key: "date", required: true }
//     ]
//   }

//   // 🔥 Continue same pattern if you want more niche services
// ];

// export default serviceCategories

//*************************************************************************CURENT  */
// const serviceCategories = [
//   // ================= HOME & GARDEN =================
//   {
//     id: "house-cleaning",
//     slug: "house-cleaning",
//     name: "House Cleaning",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "fixed",
//     image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop",
//     description: "Professional home cleaning services.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "deep-cleaning",
//     slug: "deep-cleaning",
//     name: "Deep Cleaning",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "fixed",
//     image: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=800&auto=format&fit=crop",
//     description: "Full house deep cleaning service.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "plumbing",
//     slug: "plumbing",
//     name: "Plumbing",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1581574205162-1a0f7f7d7d57?w=800&auto=format&fit=crop",
//     description: "Expert plumbing repair solutions.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "electrician",
//     slug: "electrician",
//     name: "Electrician",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1581093458791-9d2f71d2e5b9?w=800&auto=format&fit=crop",
//     description: "Certified electrical services.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "ac-repair",
//     slug: "ac-repair",
//     name: "AC Repair",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1601582585289-42c8b3d2b4a7?w=800&auto=format&fit=crop",
//     description: "AC maintenance & repair.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "roof-repair",
//     slug: "roof-repair",
//     name: "Roof Repair",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&auto=format&fit=crop",
//     description: "Roof repair specialists.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "solar-installation",
//     slug: "solar-installation",
//     name: "Solar Panel Installation",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&auto=format&fit=crop",
//     description: "Home solar installation services.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "carpet-cleaning",
//     slug: "carpet-cleaning",
//     name: "Carpet Cleaning",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "fixed",
//     image: "https://images.unsplash.com/photo-1581579188871-45ea61f2a1b7?w=800&auto=format&fit=crop",
//     description: "Deep carpet cleaning services.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "kitchen-renovation",
//     slug: "kitchen-renovation",
//     name: "Kitchen Renovation",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop",
//     description: "Modern kitchen remodeling.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "bathroom-renovation",
//     slug: "bathroom-renovation",
//     name: "Bathroom Renovation",
//     category: "home-garden",
//     categoryLabel: "Home & Garden",
//     categoryBg: "bg-green-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop",
//     description: "Complete bathroom renovation.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },

//   // ================= BUSINESS & TECH =================
//   {
//     id: "graphic-design",
//     slug: "graphic-design",
//     name: "Graphic Design",
//     category: "business",
//     categoryLabel: "Business & Tech",
//     categoryBg: "bg-blue-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop",
//     description: "Creative branding solutions.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "web-development",
//     slug: "web-development",
//     name: "Web Development",
//     category: "business",
//     categoryLabel: "Business & Tech",
//     categoryBg: "bg-blue-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
//     description: "Custom website development.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "app-development",
//     slug: "app-development",
//     name: "App Development",
//     category: "business",
//     categoryLabel: "Business & Tech",
//     categoryBg: "bg-blue-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop",
//     description: "iOS & Android apps.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "seo-services",
//     slug: "seo-services",
//     name: "SEO Services",
//     category: "business",
//     categoryLabel: "Business & Tech",
//     categoryBg: "bg-blue-100",
//     pricingType: "monthly",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
//     description: "Rank your website on Google.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "digital-marketing",
//     slug: "digital-marketing",
//     name: "Digital Marketing",
//     category: "business",
//     categoryLabel: "Business & Tech",
//     categoryBg: "bg-blue-100",
//     pricingType: "monthly",
//     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
//     description: "Social media & ads marketing.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },

//   // ================= HEALTH & FITNESS =================
//   {
//     id: "personal-trainer",
//     slug: "personal-trainer",
//     name: "Personal Trainer",
//     category: "health",
//     categoryLabel: "Health & Fitness",
//     categoryBg: "bg-red-100",
//     pricingType: "hourly",
//     image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop",
//     description: "Personal fitness coaching.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "yoga-instructor",
//     slug: "yoga-instructor",
//     name: "Yoga Instructor",
//     category: "health",
//     categoryLabel: "Health & Fitness",
//     categoryBg: "bg-red-100",
//     pricingType: "hourly",
//     image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop",
//     description: "Certified yoga sessions.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },
//   {
//     id: "nutritionist",
//     slug: "nutritionist",
//     name: "Nutritionist",
//     category: "health",
//     categoryLabel: "Health & Fitness",
//     categoryBg: "bg-red-100",
//     pricingType: "hourly",
//     image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop",
//     description: "Personalized diet plans.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   },

//   // ================= EVENTS =================
//   {
//     id: "event-planner",
//     slug: "event-planner",
//     name: "Event Planner",
//     category: "events",
//     categoryLabel: "Events & Media",
//     categoryBg: "bg-purple-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&auto=format&fit=crop",
//     description: "Professional event management.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "photography",
//     slug: "photography",
//     name: "Photography",
//     category: "events",
//     categoryLabel: "Events & Media",
//     categoryBg: "bg-purple-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop",
//     description: "Event & wedding photography.",
//     isActive: true,
//     isFeatured: true,
//     questions: []
//   },
//   {
//     id: "videography",
//     slug: "videography",
//     name: "Videography",
//     category: "events",
//     categoryLabel: "Events & Media",
//     categoryBg: "bg-purple-100",
//     pricingType: "custom",
//     image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&auto=format&fit=crop",
//     description: "Professional video production.",
//     isActive: true,
//     isFeatured: false,
//     questions: []
//   }
// ];

// // 🔥 TOTAL SERVICES: 40
// export default serviceCategories;


const serviceCategories = [
  // ================= HOME & GARDEN =================
  {
    id: "house-cleaning",
    slug: "house-cleaning",
    name: "House Cleaning",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "fixed",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop",
    description: "Professional house cleaning services.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Full Name", key: "name" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "date", label: "Cleaning Date", key: "date" },
    ],
  },

  {
    id: "plumbing",
    slug: "plumbing",
    name: "Plumbing",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&auto=format&fit=crop",
    description: "Professional plumbing services.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Customer Name", key: "name" },
      { type: "text", label: "Phone", key: "phone" },
      { type: "textarea", label: "Issue Details", key: "issue" },
    ],
  },

  {
    id: "electrician",
    slug: "electrician",
    name: "Electrician",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop",
    description: "Electrical repair and installation.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Name", key: "name" },
      { type: "text", label: "Phone", key: "phone" },
      { type: "textarea", label: "Requirement", key: "details" },
    ],
  },

  {
    id: "ac-repair",
    slug: "ac-repair",
    name: "AC Repair",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a7f1?w=800&auto=format&fit=crop",
    description: "AC repair and installation services.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Customer Name", key: "name" },
      { type: "text", label: "Phone", key: "phone" },
      { type: "select", label: "AC Type", key: "acType", options: ["Split AC", "Window AC"] },
    ],
  },

  {
    id: "roof-repair",
    slug: "roof-repair",
    name: "Roof Repair",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
    description: "Roof leakage and repair services.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Owner Name", key: "name" },
      { type: "text", label: "Phone Number", key: "phone" },
      { type: "textarea", label: "Roof Problem", key: "problem" },
    ],
  },

  {
    id: "solar-panel-installation",
    slug: "solar-panel-installation",
    name: "Solar Panel Installation",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    description: "Solar system setup services.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Customer Name", key: "name" },
      { type: "number", label: "House Size", key: "size" },
      { type: "text", label: "Location", key: "location" },
    ],
  },

  {
    id: "carpet-cleaning",
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "fixed",
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800",
    description: "Deep carpet cleaning services.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Name", key: "name" },
      { type: "number", label: "Number of Carpets", key: "count" },
      { type: "date", label: "Service Date", key: "date" },
    ],
  },

  {
    id: "window-cleaning",
    slug: "window-cleaning",
    name: "Window Cleaning",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "fixed",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800",
    description: "Professional window cleaning.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Customer Name", key: "name" },
      { type: "number", label: "Windows Count", key: "windows" },
      { type: "date", label: "Preferred Date", key: "date" },
    ],
  },

  {
    id: "bathroom-renovation",
    slug: "bathroom-renovation",
    name: "Bathroom Renovation",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    description: "Modern bathroom renovation.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Owner Name", key: "name" },
      { type: "textarea", label: "Renovation Details", key: "details" },
      { type: "date", label: "Start Date", key: "date" },
    ],
  },

  {
    id: "kitchen-renovation",
    slug: "kitchen-renovation",
    name: "Kitchen Renovation",
    category: "home-garden",
    categoryLabel: "Home & Garden",
    categoryBg: "bg-green-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    description: "Kitchen remodeling services.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Name", key: "name" },
      { type: "textarea", label: "Kitchen Requirements", key: "details" },
      { type: "number", label: "Kitchen Size", key: "size" },
    ],
  },

  // ================= BUSINESS & TECH =================

  {
    id: "graphic-design",
    slug: "graphic-design",
    name: "Graphic Design",
    category: "business",
    categoryLabel: "Business & Tech",
    categoryBg: "bg-blue-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    description: "Creative design services.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "select", label: "Design Type", key: "type", options: ["Logo", "Banner", "Flyer"] },
      { type: "textarea", label: "Project Details", key: "details" },
    ],
  },

  {
    id: "web-development",
    slug: "web-development",
    name: "Web Development",
    category: "business",
    categoryLabel: "Business & Tech",
    categoryBg: "bg-blue-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    description: "Website development services.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Business Name", key: "business" },
      { type: "select", label: "Website Type", key: "type", options: ["Business", "Ecommerce", "Portfolio"] },
      { type: "textarea", label: "Project Details", key: "details" },
    ],
  },

  {
    id: "seo-services",
    slug: "seo-services",
    name: "SEO Services",
    category: "business",
    categoryLabel: "Business & Tech",
    categoryBg: "bg-blue-100",
    pricingType: "monthly",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    description: "Professional SEO optimization.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Website URL", key: "website" },
      { type: "textarea", label: "Target Keywords", key: "keywords" },
      { type: "date", label: "Start Date", key: "date" },
    ],
  },

  {
    id: "digital-marketing",
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "business",
    categoryLabel: "Business & Tech",
    categoryBg: "bg-blue-100",
    pricingType: "monthly",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    description: "Social media and ads marketing.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Business Name", key: "business" },
      { type: "checkbox", label: "Platforms", key: "platforms", options: ["Facebook", "Instagram", "TikTok"] },
      { type: "number", label: "Budget", key: "budget" },
    ],
  },

  {
    id: "content-writing",
    slug: "content-writing",
    name: "Content Writing",
    category: "business",
    categoryLabel: "Business & Tech",
    categoryBg: "bg-blue-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
    description: "SEO content and blog writing.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Company Name", key: "company" },
      { type: "select", label: "Content Type", key: "type", options: ["Blog", "Website", "Product Description"] },
      { type: "textarea", label: "Requirements", key: "requirements" },
    ],
  },

  {
    id: "app-development",
    slug: "app-development",
    name: "App Development",
    category: "business",
    categoryLabel: "Business & Tech",
    categoryBg: "bg-blue-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    description: "Android and iOS app development.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Startup Name", key: "startup" },
      { type: "select", label: "Platform", key: "platform", options: ["Android", "iOS", "Both"] },
      { type: "textarea", label: "App Idea", key: "idea" },
    ],
  },

  // ================= EVENTS =================

  {
    id: "photography",
    slug: "photography",
    name: "Photography",
    category: "events",
    categoryLabel: "Events & Media",
    categoryBg: "bg-purple-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    description: "Professional event photography.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "select", label: "Event Type", key: "event", options: ["Wedding", "Birthday", "Corporate"] },
      { type: "date", label: "Event Date", key: "date" },
    ],
  },

  {
    id: "video-editing",
    slug: "video-editing",
    name: "Video Editing",
    category: "events",
    categoryLabel: "Events & Media",
    categoryBg: "bg-purple-100",
    pricingType: "custom",
    image:
      "https://images.unsplash.com/photo-1574717024453-3540562e6f2f?w=800",
    description: "Professional video editing.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Your Name", key: "name" },
      { type: "select", label: "Video Type", key: "videoType", options: ["YouTube", "Wedding", "Ads"] },
      { type: "textarea", label: "Project Details", key: "details" },
    ],
  },

  // ================= HEALTH =================

  {
    id: "personal-trainer",
    slug: "personal-trainer",
    name: "Personal Trainer",
    category: "health",
    categoryLabel: "Health & Fitness",
    categoryBg: "bg-red-100",
    pricingType: "hourly",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
    description: "Professional fitness coaching.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "number", label: "Age", key: "age" },
      { type: "select", label: "Fitness Goal", key: "goal", options: ["Weight Loss", "Muscle Gain"] },
    ],
  },

  {
    id: "nutritionist",
    slug: "nutritionist",
    name: "Nutritionist",
    category: "health",
    categoryLabel: "Health & Fitness",
    categoryBg: "bg-red-100",
    pricingType: "hourly",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800",
    description: "Diet and meal consultation.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Client Name", key: "name" },
      { type: "number", label: "Weight", key: "weight" },
      { type: "textarea", label: "Health Goals", key: "goals" },
    ],
  },

  {
    id: "yoga-instructor",
    slug: "yoga-instructor",
    name: "Yoga Instructor",
    category: "health",
    categoryLabel: "Health & Fitness",
    categoryBg: "bg-red-100",
    pricingType: "hourly",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
    description: "Private yoga training sessions.",
    isActive: true,
    isFeatured: true,
    questions: [
      { type: "text", label: "Student Name", key: "name" },
      { type: "select", label: "Yoga Goal", key: "goal", options: ["Flexibility", "Weight Loss", "Stress Relief"] },
      { type: "date", label: "Preferred Start Date", key: "date" },
    ],
  },

  {
    id: "physiotherapy",
    slug: "physiotherapy",
    name: "Physiotherapy",
    category: "health",
    categoryLabel: "Health & Fitness",
    categoryBg: "bg-red-100",
    pricingType: "hourly",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
    description: "Professional physiotherapy sessions.",
    isActive: true,
    isFeatured: false,
    questions: [
      { type: "text", label: "Patient Name", key: "name" },
      { type: "textarea", label: "Health Problem", key: "problem" },
      { type: "date", label: "Appointment Date", key: "date" },
    ],
  },

  // ================= EXTRA 18 SERVICES =================

{
  id: "pest-control",
  slug: "pest-control",
  name: "Pest Control",
  category: "home-garden",
  categoryLabel: "Home & Garden",
  categoryBg: "bg-green-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1581578021517-5d8c1b6d2e5f?w=800",
  description: "Professional pest control services.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Customer Name", key: "name" },
    { type: "text", label: "Phone Number", key: "phone" },
    { type: "select", label: "Pest Type", key: "pest", options: ["Termites", "Cockroaches", "Rats"] },
  ],
},

{
  id: "painting-services",
  slug: "painting-services",
  name: "Painting Services",
  category: "home-garden",
  categoryLabel: "Home & Garden",
  categoryBg: "bg-green-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800",
  description: "Interior and exterior painting.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Owner Name", key: "name" },
    { type: "number", label: "Rooms Count", key: "rooms" },
    { type: "textarea", label: "Painting Details", key: "details" },
  ],
},

{
  id: "furniture-assembly",
  slug: "furniture-assembly",
  name: "Furniture Assembly",
  category: "home-garden",
  categoryLabel: "Home & Garden",
  categoryBg: "bg-green-100",
  pricingType: "fixed",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  description: "Furniture setup and assembly services.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Customer Name", key: "name" },
    { type: "text", label: "Furniture Type", key: "type" },
    { type: "date", label: "Service Date", key: "date" },
  ],
},

{
  id: "laundry-service",
  slug: "laundry-service",
  name: "Laundry Service",
  category: "home-garden",
  categoryLabel: "Home & Garden",
  categoryBg: "bg-green-100",
  pricingType: "fixed",
  image:
    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800",
  description: "Wash and iron laundry services.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Customer Name", key: "name" },
    { type: "number", label: "Clothes Quantity", key: "quantity" },
    { type: "date", label: "Pickup Date", key: "date" },
  ],
},

{
  id: "moving-service",
  slug: "moving-service",
  name: "Moving Service",
  category: "home-garden",
  categoryLabel: "Home & Garden",
  categoryBg: "bg-green-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800",
  description: "House shifting and moving services.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Customer Name", key: "name" },
    { type: "text", label: "Pickup Location", key: "pickup" },
    { type: "text", label: "Drop Location", key: "drop" },
  ],
},

{
  id: "data-entry",
  slug: "data-entry",
  name: "Data Entry",
  category: "business",
  categoryLabel: "Business & Tech",
  categoryBg: "bg-blue-100",
  pricingType: "hourly",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  description: "Professional data entry services.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Company Name", key: "company" },
    { type: "number", label: "Estimated Records", key: "records" },
    { type: "textarea", label: "Project Details", key: "details" },
  ],
},

{
  id: "virtual-assistant",
  slug: "virtual-assistant",
  name: "Virtual Assistant",
  category: "business",
  categoryLabel: "Business & Tech",
  categoryBg: "bg-blue-100",
  pricingType: "hourly",
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
  description: "Remote virtual assistant services.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Business Name", key: "business" },
    { type: "textarea", label: "Tasks Required", key: "tasks" },
    { type: "date", label: "Start Date", key: "date" },
  ],
},

{
  id: "social-media-management",
  slug: "social-media-management",
  name: "Social Media Management",
  category: "business",
  categoryLabel: "Business & Tech",
  categoryBg: "bg-blue-100",
  pricingType: "monthly",
  image:
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800",
  description: "Social media account handling services.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Brand Name", key: "brand" },
    { type: "checkbox", label: "Platforms", key: "platforms", options: ["Facebook", "Instagram", "LinkedIn"] },
    { type: "number", label: "Monthly Budget", key: "budget" },
  ],
},

{
  id: "ui-ux-design",
  slug: "ui-ux-design",
  name: "UI/UX Design",
  category: "business",
  categoryLabel: "Business & Tech",
  categoryBg: "bg-blue-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
  description: "Modern UI and UX designing services.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Startup Name", key: "startup" },
    { type: "textarea", label: "Project Requirements", key: "requirements" },
    { type: "date", label: "Deadline", key: "deadline" },
  ],
},

{
  id: "resume-writing",
  slug: "resume-writing",
  name: "Resume Writing",
  category: "business",
  categoryLabel: "Business & Tech",
  categoryBg: "bg-blue-100",
  pricingType: "fixed",
  image:
    "https://images.unsplash.com/photo-1516321310764-8d4f1d4e6f5d?w=800",
  description: "Professional CV and resume writing.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Full Name", key: "name" },
    { type: "text", label: "Profession", key: "profession" },
    { type: "textarea", label: "Experience Details", key: "experience" },
  ],
},

{
  id: "podcast-editing",
  slug: "podcast-editing",
  name: "Podcast Editing",
  category: "events",
  categoryLabel: "Events & Media",
  categoryBg: "bg-purple-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800",
  description: "Professional podcast editing services.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Podcast Name", key: "podcast" },
    { type: "number", label: "Episode Duration", key: "duration" },
    { type: "textarea", label: "Editing Notes", key: "notes" },
  ],
},

{
  id: "live-streaming",
  slug: "live-streaming",
  name: "Live Streaming",
  category: "events",
  categoryLabel: "Events & Media",
  categoryBg: "bg-purple-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
  description: "Professional live streaming setup.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Organizer Name", key: "name" },
    { type: "text", label: "Event Location", key: "location" },
    { type: "date", label: "Event Date", key: "date" },
  ],
},

{
  id: "dj-services",
  slug: "dj-services",
  name: "DJ Services",
  category: "events",
  categoryLabel: "Events & Media",
  categoryBg: "bg-purple-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
  description: "Professional DJ for parties and events.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Client Name", key: "name" },
    { type: "select", label: "Event Type", key: "event", options: ["Wedding", "Birthday", "Concert"] },
    { type: "date", label: "Event Date", key: "date" },
  ],
},

{
  id: "makeup-artist",
  slug: "makeup-artist",
  name: "Makeup Artist",
  category: "events",
  categoryLabel: "Events & Media",
  categoryBg: "bg-purple-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
  description: "Professional bridal and party makeup.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Client Name", key: "name" },
    { type: "select", label: "Makeup Type", key: "type", options: ["Bridal", "Party", "Fashion"] },
    { type: "date", label: "Booking Date", key: "date" },
  ],
},

{
  id: "dance-instructor",
  slug: "dance-instructor",
  name: "Dance Instructor",
  category: "health",
  categoryLabel: "Health & Fitness",
  categoryBg: "bg-red-100",
  pricingType: "hourly",
  image:
    "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
  description: "Professional dance training sessions.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Student Name", key: "name" },
    { type: "select", label: "Dance Style", key: "style", options: ["Hip Hop", "Contemporary", "Classical"] },
    { type: "date", label: "Preferred Date", key: "date" },
  ],
},

{
  id: "mental-health-coaching",
  slug: "mental-health-coaching",
  name: "Mental Health Coaching",
  category: "health",
  categoryLabel: "Health & Fitness",
  categoryBg: "bg-red-100",
  pricingType: "hourly",
  image:
    "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800",
  description: "Mental wellness and stress management coaching.",
  isActive: true,
  isFeatured: true,
  questions: [
    { type: "text", label: "Client Name", key: "name" },
    { type: "textarea", label: "Goals", key: "goals" },
    { type: "date", label: "Session Date", key: "date" },
  ],
},

{
  id: "martial-arts-training",
  slug: "martial-arts-training",
  name: "Martial Arts Training",
  category: "health",
  categoryLabel: "Health & Fitness",
  categoryBg: "bg-red-100",
  pricingType: "hourly",
  image:
    "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800",
  description: "Self defense and martial arts coaching.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Student Name", key: "name" },
    { type: "select", label: "Training Type", key: "type", options: ["Karate", "Taekwondo", "Boxing"] },
    { type: "date", label: "Joining Date", key: "date" },
  ],
},

{
  id: "diet-meal-planning",
  slug: "diet-meal-planning",
  name: "Diet Meal Planning",
  category: "health",
  categoryLabel: "Health & Fitness",
  categoryBg: "bg-red-100",
  pricingType: "custom",
  image:
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
  description: "Custom healthy diet meal plans.",
  isActive: true,
  isFeatured: false,
  questions: [
    { type: "text", label: "Client Name", key: "name" },
    { type: "number", label: "Current Weight", key: "weight" },
    { type: "textarea", label: "Diet Goals", key: "goals" },
  ],
},
];

export default serviceCategories;