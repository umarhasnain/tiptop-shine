// 'use client';

// import UserHeader from '@/components/UserHeader';
// import { FaUserCircle, FaCreditCard, FaBell } from 'react-icons/fa';

// export default function SettingsPage() {
//   return (
//    <div>
//     <UserHeader/>
//      <div className="min-h-screen w-full bg-white text-black">
//       {/* Centered content container */}
//       <div className="max-w-3xl mx-auto px-6 py-8">
//         <h1 className="text-xl font-semibold mb-6">Settings</h1>

//         {/* My Profile */}
//         <div className="mb-8">
//           <div className="flex items-center gap-2 mb-2">
//             <FaUserCircle className="text-black text-lg" />
//             <h2 className="text-md font-semibold">My Profile</h2>
//           </div>
//           <div className="ml-6 space-y-3 text-sm">
//             <SettingLink title="My Profile" desc="Your profile showcases your strengths, highlights what sets you apart and why clients should choose your service." />
//             <SettingLink title="Reviews" desc="All your customer feedback, gathered in one easy-to-access spot." />
//             <SettingLink title="Premium Status" desc="Boost your visibility and earn more trust with our Premium Pro features." />
//             <SettingLink title="Recognition Badges" desc="Earn badges to stand out—discover how they can enhance your credibility and attract more clients." />
//             <SettingLink title="Account Info" desc="Manage your login email, password, and contact numbers securely from here." />
//           </div>
//         </div>

//         {/* Credits & Payments */}
//         <div className="mb-8">
//           <div className="flex items-center gap-2 mb-2">
//             <FaCreditCard className="text-black text-lg" />
//             <h2 className="text-md font-semibold">Credits & Payments</h2>
//           </div>
//           <div className="ml-6 space-y-3 text-sm">
//             <SettingLink title="My Credits" desc="Check your credit balance, review your history, and purchase more to connect with new customers." />
//             <SettingLink title="Invoices & Billing" desc="Access your invoices and keep your billing information up to date." />
//             <SettingLink title="Payment Settings" desc="Manage your saved payment methods and preferences securely." />
//           </div>
//         </div>

//         {/* Notifications */}
//         <div className="mb-4">
//           <div className="flex items-center gap-2 mb-2">
//             <FaBell className="text-black text-lg" />
//             <h2 className="text-md font-semibold">Notifications</h2>
//           </div>
//           <div className="ml-6 space-y-3 text-sm">
//             <SettingLink title="Email Preferences" desc="Choose which types of emails you want to get from us." />
//             <SettingLink title="Browser Alerts" desc="Control the notifications you receive while using your web browser." />
//           </div>
//         </div>
//       </div>
//     </div>
//    </div>
//   );
// }

// function SettingLink({ title, desc }) {
//   return (
//     <div>
//       <p className="text-blue-600 font-medium hover:underline cursor-pointer">{title}</p>
//       <p className="text-[13px] text-gray-600">{desc}</p>
//     </div>
//   );
// }


"use client";

import UserHeader from "@/components/UserHeader";
import { User, CreditCard, Bell } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  const sections = [
    {
      title: "My Profile",
      icon: <User className="w-5 h-5 text-blue-500" />,
      items: [
        { label: "My Profile", desc: "Your Profile Showcases Your Strengths. Highlight What Sets You Apart And Why Clients Should Choose Your Service." },
        { label: "Reviews", desc: "All Your Customer Feedback, Gathered In One Easy-To-Access Spot." },
        { label: "Premium Status", desc: "Boost Your Visibility And Earn More Trust With Our Premium Pro Features." },
        { label: "Recognition Badges", desc: "Earn Badges To Stand Out—Discover How They Can Enhance Your Credibility And Attract More Clients." },
        { label: "Account Info", desc: "Manage Your Login Email, Password, And Contact Numbers Securely From Here." },
      ],
    },
    {
      title: "Lead Settings",
      icon: <CreditCard className="w-5 h-5 text-green-500" />,
      items: [
        { label: "My services", desc: "Check Your Services, Review Your services." },
        { label: "My locations", desc: "Access Your Location you provided in services." },
      ]
    },
    {
      title: "Credits & Payments",
      icon: <CreditCard className="w-5 h-5 text-green-500" />,
      items: [
        { label: "My Credits", desc: "Check Your Credit Balance, Review Your History, And Purchase More To Connect With New Customers." },
        { label: "Invoices & Billing", desc: "Access Your Invoices And Keep Your Billing Information Up To Date." },
        { label: "Payment Settings", desc: "Manage Your Saved Payment Methods And Preferences Securely." },
      ],
    },
    {
      title: "Notifications",
      icon: <Bell className="w-5 h-5 text-purple-500" />,
      items: [
        { label: "Email Preferences", desc: "Choose Which Types Of Emails You Want To Get From Us." },
        { label: "Browser Alerts", desc: "Control The Notifications You Receive While Using Your Web Browser." },
      ],
    },
  ];

  return (
    <div>
      <UserHeader/>
      <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">Settings</h1>

        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={idx}>
              {/* Section Header */}
              <div className="flex items-center space-x-2 mb-4">
                {section.icon}
                <h2 className="text-lg md:text-xl font-semibold">{section.title}</h2>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <Link href={`/setting/${item.label}`} className="text-blue-600 hover:underline font-medium">
                      {item.label}
                    </Link>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
