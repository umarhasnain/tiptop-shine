'use client';

import { useState } from 'react';

export default function MultiStepForm({ service }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    service: service.name,
    postcode: service.postcode,
  });

  const totalSteps = service.questions.length;

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    console.log("FINAL DATA:", formData);
    alert("Request Submitted Successfully!");
    localStorage.removeItem("requestData");
  };

  const currentQuestion = service.questions[step];

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-3xl p-10">

      <h2 className="text-2xl font-bold mb-2">
        {service.name}
      </h2>

      <p className="text-gray-500 mb-6">
        Postcode: {service.postcode}
      </p>

      {/* Progress */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{
            width: `${((step + 1) / totalSteps) * 100}%`,
          }}
        ></div>
      </div>

      <label className="block text-lg font-semibold mb-3">
        {currentQuestion.label}
      </label>

      {currentQuestion.type === "select" && (
        <select
          className="w-full border p-3 rounded-xl"
          onChange={(e) =>
            handleChange(currentQuestion.key, e.target.value)
          }
        >
          <option value="">Select</option>
          {currentQuestion.options.map((opt, i) => (
            <option key={i}>{opt}</option>
          ))}
        </select>
      )}

      {currentQuestion.type === "text" && (
        <input
          type="text"
          className="w-full border p-3 rounded-xl"
          onChange={(e) =>
            handleChange(currentQuestion.key, e.target.value)
          }
        />
      )}

      {currentQuestion.type === "number" && (
        <input
          type="number"
          className="w-full border p-3 rounded-xl"
          onChange={(e) =>
            handleChange(currentQuestion.key, e.target.value)
          }
        />
      )}

      <div className="flex justify-between mt-10">
        {step > 0 && (
          <button
            onClick={prevStep}
            className="px-6 py-2 bg-gray-200 rounded-xl"
          >
            Back
          </button>
        )}

        {step < totalSteps - 1 ? (
          <button
            onClick={nextStep}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 text-white rounded-xl"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}