// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function OnboardingPage() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [serviceName, setServiceName] = useState('');

//   const [showSignup, setShowSignup] = useState(false);
//   const [password, setPassword] = useState('');

//   const [form, setForm] = useState({
//     miles: '30 miles',
//     postcode: '',
//     name: '',
//     company: '',
//     email: '',
//     phone: '',
//     hasWebsite: '',
//     companySize: '',
//     availability: '',
//     timeSlots: '',
//     workType: '',
//     documents: { id: null, addressProof: null, businessLicense: null },
//   });

//   const milesOptions = ['10 miles','20 miles','30 miles','50 miles','100 miles'];
//   const companySizes = ['Self-Employed','2–10','11–50','51+'];
//   const availabilityOptions = ['Monday–Sunday','Weekdays only','Weekends only'];
//   const timeSlotOptions = ['Morning','Afternoon','Evening'];
//   const workTypeOptions = ['Full-time','Part-time','Weekends only'];

//   useEffect(() => {
//     const saved = localStorage.getItem('selectedService');
//     if (!saved) return router.push('/');
//     try {
//       const parsed = JSON.parse(saved);
//       if (!parsed?.name) return router.push('/');
//       setServiceName(parsed.name);
//     } catch {
//       router.push('/');
//     }
//   }, [router]);

//   const handleChange = (key, value) =>
//     setForm(prev => ({ ...prev, [key]: value }));
//   const handleFileChange = (key, file) =>
//     setForm(prev => ({ ...prev, documents: { ...prev.documents, [key]: file } }));

//   const submitForm = async () => {
//     try {
//       setLoading(true);
//       const data = new FormData();
//       Object.entries(form).forEach(([k,v]) => { if(k!=='documents') data.append(k,v) });
//       data.append('serviceName', serviceName);
//       Object.entries(form.documents).forEach(([k,v]) => { if(v) data.append(k,v) });

//       const res = await fetch('/api/onboarding', { method: 'POST', body: data });
//       if (!res.ok) throw new Error();

//       localStorage.removeItem('selectedService');
//       setShowSignup(true);

//     } catch {
//       alert('Something went wrong');
//     } finally { setLoading(false); }
//   };

//   const handleSignup = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch('/api/auth/onboarding-signup', {
//         method: 'POST',
//         headers: { 'Content-Type':'application/json' },
//         body: JSON.stringify({ name: form.name, email: form.email, password, serviceName }),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message);
//       router.push('/general-dashboard');
//     } catch (err) { alert(err.message || 'Signup failed'); }
//     finally { setLoading(false); }
//   };

//   return (
//     <div className="flex items-center justify-center px-4 py-6 bg-white">
//       <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto">
//         <div className="bg-gradient-to-r from-blue-600 to-blue-600 px-6 py-5 text-white">
//           <h2 className="text-lg font-semibold">Create Your Profile</h2>
//           <p className="text-xs">Service: <b>{serviceName}</b></p>
//           <p className="text-xs">Step {step} of 4</p>
//         </div>

//         <div className="p-5 space-y-6">
//           {step===1 && <>
//             <select className="input" value={form.miles} onChange={e=>handleChange('miles',e.target.value)}>
//               {milesOptions.map(m=><option key={m}>{m}</option>)}
//             </select>
//             <input className="input" placeholder="Postcode" value={form.postcode} onChange={e=>handleChange('postcode',e.target.value)} />
//             <button className="btn-primary" disabled={!form.postcode} onClick={()=>setStep(2)}>Continue</button>
//           </>}

//           {step===2 && <>
//             <input className="input" placeholder="Your name" value={form.name} onChange={e=>handleChange('name',e.target.value)} />
//             <input className="input" placeholder="Company" value={form.company} onChange={e=>handleChange('company',e.target.value)} />
//             <input className="input" type="email" placeholder="Email" value={form.email} onChange={e=>handleChange('email',e.target.value)} />

//             <div className="flex flex-wrap gap-2">
//               {companySizes.map(s=>(
//                 <button key={s} onClick={()=>handleChange('companySize',s)} className={`px-4 py-2 border rounded ${form.companySize===s?'bg-blue-600 text-white':''}`}>{s}</button>
//               ))}
//             </div>
//             <button className="btn-primary" disabled={!form.name || !form.email || !form.companySize} onClick={()=>setStep(3)}>Continue</button>
//           </>}

//           {step===3 && <>
//             <select className="input" onChange={e=>handleChange('availability',e.target.value)}>
//               <option value="">Availability</option>
//               {availabilityOptions.map(o=><option key={o}>{o}</option>)}
//             </select>
//             <select className="input" onChange={e=>handleChange('timeSlots',e.target.value)}>
//               <option value="">Time Slot</option>
//               {timeSlotOptions.map(o=><option key={o}>{o}</option>)}
//             </select>
//             <select className="input" onChange={e=>handleChange('workType',e.target.value)}>
//               <option value="">Work Type</option>
//               {workTypeOptions.map(o=><option key={o}>{o}</option>)}
//             </select>

//             <div className="grid grid-cols-3 gap-4">
//               {['id','addressProof','businessLicense'].map(k=>(
//                 <input key={k} type="file" onChange={e=>handleFileChange(k,e.target.files[0])} />
//               ))}
//             </div>
//             <button className="btn-primary" disabled={!form.availability || !form.timeSlots || !form.workType} onClick={()=>setStep(4)}>Continue</button>
//           </>}

//           {step===4 && <button className="btn-primary" onClick={submitForm}>Go to Dashboard</button>}
//         </div>
//       </div>

//       {showSignup && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
//         <div className="bg-white p-6 rounded-2xl w-full max-w-md space-y-4">
//           <h3 className="text-xl font-bold text-center">Create Account</h3>
//           <input className="input" value={form.email} disabled />
//           <input className="input" type="password" placeholder="Create password" value={password} onChange={e=>setPassword(e.target.value)} />
//           <button className="btn-primary" disabled={!password || loading} onClick={handleSignup}>
//             {loading?'Creating...':'Create Account'}
//           </button>
//         </div>
//       </div>}

//       <style jsx>{`
//         .input { width:100%; padding:12px; border:1px solid #ccc; border-radius:10px }
//         .btn-primary { width:100%; padding:12px; background:#2563eb; color:#fff; border-radius:10px }
//       `}</style>
//     </div>
//   );
// }


//************* new code  */

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [password, setPassword] = useState('');

  const [form, setForm] = useState({
    miles: '30 miles',
    postcode: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    hasWebsite: '',
    companySize: '',
    availability: '',
    timeSlots: '',
    workType: '',
    documents: { id: null, addressProof: null, businessLicense: null },
  });

  const milesOptions = ['10 miles', '20 miles', '30 miles', '50 miles', '100 miles'];
  const companySizes = ['Self-Employed', '2–10', '11–50', '51+'];
  const availabilityOptions = ['Monday–Sunday', 'Weekdays only', 'Weekends only'];
  const timeSlotOptions = ['Morning', 'Afternoon', 'Evening'];
  const workTypeOptions = ['Full-time', 'Part-time', 'Weekends only'];
  const yesNoOptions = ['Yes', 'No'];

  useEffect(() => {
    const saved = localStorage.getItem('selectedService');
    if (!saved) return router.push('/');
    try {
      const parsed = JSON.parse(saved);
      if (!parsed?.name) return router.push('/');
      setServiceName(parsed.name);
    } catch { router.push('/'); }
  }, [router]);

  const handleChange = (key, value) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const handleFileChange = (key, file) =>
    setForm(prev => ({ ...prev, documents: { ...prev.documents, [key]: file } }));

  const submitForm = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => { if (k !== 'documents') data.append(k, v) });
      data.append('serviceName', serviceName);
      Object.entries(form.documents).forEach(([k, v]) => { if (v) data.append(k, v) });

      const res = await fetch('/api/onboarding', { method: 'POST', body: data });
      if (!res.ok) throw new Error('Onboarding failed');

      localStorage.removeItem('selectedService');
      setShowSignup(true);
    } catch (err) { alert(err.message || 'Something went wrong'); }
    finally { setLoading(false); }
  };

  const handleSignup = async () => {
    try {
      setLoading(true);
      const payload = {
        name: form.name,
        email: form.email,
        password,
        serviceName,
        miles: form.miles,
        postcode: form.postcode,
        phone: form.phone,
        hasWebsite: form.hasWebsite,
        company: form.company,
        companySize: form.companySize,
        availability: form.availability,
        timeSlots: form.timeSlots,
        workType: form.workType,
      };
      const res = await fetch('/api/auth/onboarding-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Signup failed');

      router.push('/general-dashboard');
    } catch (err) { alert(err.message || 'Signup failed'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-600 p-6 text-white">
          <h2 className="text-3xl font-bold tracking-wide">Create Your Professional Profile</h2>
          <p className="text-sm mt-1 opacity-80">Service: <b>{serviceName}</b></p>
          <div className="mt-3 h-2 bg-blue-400 rounded-full">
            <div className={`h-2 bg-white rounded-full transition-all duration-300`} style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
          <p className="text-sm mt-1 text-right opacity-80">Step {step} of 4</p>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-6">
          {/* STEP 1 */}
          {step === 1 && <>
            <select className="input" value={form.miles} onChange={e => handleChange('miles', e.target.value)}>
              {milesOptions.map(m => <option key={m}>{m}</option>)}
            </select>
            <input className="input" placeholder="Postcode" value={form.postcode} onChange={e => handleChange('postcode', e.target.value)} />
            <button className="btn-primary w-full" disabled={!form.postcode} onClick={() => setStep(2)}>Continue</button>
          </>}

          {/* STEP 2 */}
          {step === 2 && <>
            <input className="input" placeholder="Full Name" value={form.name} onChange={e => handleChange('name', e.target.value)} />
            <input className="input" placeholder="Company Name" value={form.company} onChange={e => handleChange('company', e.target.value)} />
            <input className="input" type="email" placeholder="Email Address" value={form.email} onChange={e => handleChange('email', e.target.value)} />
            <input className="input" placeholder="Phone Number" value={form.phone} onChange={e => handleChange('phone', e.target.value)} />

            {/* <div className="flex flex-wrap gap-2 mt-2">
              {companySizes.map(s => (
                <button key={s} onClick={()=>handleChange('companySize',s)}
                  className={`px-5 py-2 border rounded-full transition-all ${form.companySize===s?'bg-blue-600 text-white shadow-lg':'hover:bg-blue-100'}`}>{s}</button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {yesNoOptions.map(o => (
                <button key={o} onClick={()=>handleChange('hasWebsite',o)}
                  className={`px-5 py-2 border rounded-full transition-all ${form.hasWebsite===o?'bg-blue-600 text-white shadow-lg':'hover:bg-blue-100'}`}>{o}</button>
              ))}
            </div>
             */}

            {/* COMPANY SIZE */}
            <div className="mt-4">
              <span className="text-sm font-medium text-gray-600 mb-1 block">Company Size</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {companySizes.map(s => (
                  <button key={s} onClick={() => handleChange('companySize', s)}
                    className={`px-5 py-2 border rounded-full transition-all ${form.companySize === s ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-blue-100'}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* HAS WEBSITE */}
            <div className="mt-4">
              <span className="text-sm font-medium text-gray-600 mb-1 block">Do you have a website?</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {yesNoOptions.map(o => (
                  <button key={o} onClick={() => handleChange('hasWebsite', o)}
                    className={`px-5 py-2 border rounded-full transition-all ${form.hasWebsite === o ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-blue-100'}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>


            <button className="btn-primary w-full mt-4" disabled={!form.name || !form.email || !form.companySize || !form.hasWebsite} onClick={() => setStep(3)}>Continue</button>
          </>}

          {/* STEP 3 */}
          {step === 3 && <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select className="input" onChange={e => handleChange('availability', e.target.value)}>
                <option value="">Availability</option>
                {availabilityOptions.map(o => <option key={o}>{o}</option>)}
              </select>
              <select className="input" onChange={e => handleChange('timeSlots', e.target.value)}>
                <option value="">Time Slot</option>
                {timeSlotOptions.map(o => <option key={o}>{o}</option>)}
              </select>
              <select className="input" onChange={e => handleChange('workType', e.target.value)}>
                <option value="">Work Type</option>
                {workTypeOptions.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {['id', 'addressProof', 'businessLicense'].map(k => (
                <label key={k} className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-all">
                  <span className="text-sm text-gray-500 mb-2">{form.documents[k]?.name ? `Uploaded: ${form.documents[k].name}` : `Upload ${k}`}</span>
                  <input type="file" className="hidden" onChange={e => handleFileChange(k, e.target.files[0])} />
                </label>
              ))}
            </div>

            <button className="btn-primary w-full mt-4" disabled={!form.availability || !form.timeSlots || !form.workType} onClick={() => setStep(4)}>Continue</button>
          </>}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <h1 className="text-lg text-gray-500 text-center mb-6">
                Almost done! Just one final step to complete your profile.
              </h1>

              <button
                className="btn-primary w-full mt-2"
                onClick={submitForm}
              >
                Submit & Sign Up
              </button>
            </>
          )}


        </div>
      </div>

      {/* SIGNUP POPUP */}
      {showSignup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-3xl w-full max-w-md space-y-4 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-blue-600">Create Account</h3>
            <input className="input" value={form.email} disabled />
            <input className="input" type="password" placeholder="Create Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="btn-primary w-full mt-2" disabled={!password || loading} onClick={handleSignup}>
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
  .input { 
    width:100%; 
    padding:14px; 
    border:1px solid #ccc; 
    border-radius:12px; 
    margin-top:10px; 
    transition:border 0.3s, box-shadow 0.3s; 
  }
  .input:focus { 
    border-color:#4f46e5; 
    outline:none; 
    box-shadow:0 0 12px rgba(79,70,229,0.3); 
  }

  .btn-primary { 
    width:100%;
    padding:14px; 
    background: linear-gradient(90deg, #4f46e5, #094eff); /* gradient */
    color:white; 
    font-weight:600; 
    border-radius:16px; 
    border:none; 
    box-shadow:0 4px 12px rgba(79,70,229,0.3); /* soft shadow */
    text-align:center; 
    transition: all 0.3s ease-in-out; 
    cursor:pointer;
    position: relative;
    overflow: hidden;
  }

  .btn-primary::after {
    content: '';
    position: absolute;
    left: -50%;
    top: 0;
    width: 200%;
    height: 100%;
    background: rgba(255,255,255,0.2);
    transform: translateX(-100%) skewX(-20deg);
    transition: all 0.5s;
  }

  .btn-primary:hover::after {
    transform: translateX(100%) skewX(-20deg);
  }

  .btn-primary:hover { 
    background: linear-gradient(90deg, #4338ca, #094eff); /* hover gradient */
    box-shadow: 0 6px 16px rgba(79,70,229,0.4);
  }

  .btn-primary:disabled {
    background: #094eff; 
    cursor: not-allowed;
    box-shadow: none;
  }
`}</style>

    </div>
  );
}
