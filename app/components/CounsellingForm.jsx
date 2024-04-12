// app/components/CounselingForm.js
'use client'

import { useState } from 'react'

export default function CounselingForm() {
  const [studentName, setStudentName] = useState('')
  const [studentId, setStudentId] = useState('')
  const [mood, setMood] = useState('')
  const [stressLevel, setStressLevel] = useState('')
  const [message, setMessage] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [transcription, setTranscription] = useState('')

  const provideCounseling = async (studentName, studentId, mood, stressLevel, message, phoneNumber) => {
    const apiKey = 'sk-w7l6ff8oeqyfku4fcklgvpxwmocs3csns93kcmu4yfxjv22hw9ygz7o3wlvdc97a69'
    const apiUrl = 'https://api.bland.ai/call'

    const options = {
      method: 'POST',
      headers: {
        authorization: apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        student_name: studentName,
        student_id: studentId,
        mood: mood,
        stress_level: stressLevel,
        message: message,
        phone_number: phoneNumber,
        task: `You are a mental health counselor providing support to a student named ${studentName} (ID: ${studentId}).
        
        Student Information:
        Name: ${studentName}
        ID: ${studentId}
        Current Mood: ${mood}
        Stress Level: ${stressLevel}
        Phone Number: ${phoneNumber}
        
        Message from the student:
        ${message}
        
        Provide a personalized counseling response to address the student's concerns and offer support based on their current mood and stress level.
        
        Counselor: "Hello ${studentName}, thank you for reaching out. I understand that you're currently feeling ${mood} and your stress level is ${stressLevel}. Let's discuss your concerns in more detail."
        
        Student: [Responds with more information about their concerns]
        
        Counselor: [Provides empathetic and supportive response, offers coping strategies and resources based on the student's specific needs]
        
        Student: [Expresses gratitude or asks follow-up questions]
        
        Counselor: [Addresses any follow-up concerns, provides additional support, and encourages the student to reach out again if needed]
        
        Closing:
        
        Counselor: "Remember, ${studentName}, your mental health is important, and there are always resources available to support you. If you need further assistance, feel free to reach out to us at any time. We're here to help. Take care of yourself."`,
      }),
    }

    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      console.log(data)
      
      // Extract the transcription from the response data
      const transcription = data.transcription
      setTranscription(transcription)
    } catch (error) {
      console.error('Error:', error)
      // Handle any errors that occurred during the API call
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await provideCounseling(studentName, studentId, mood, stressLevel, message, phoneNumber)
  }

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="studentName" className="block text-gray-700 font-bold mb-2">
            Student Name:
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="studentId" className="block text-gray-700 font-bold mb-2">
            Student ID:
          </label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mood" className="block text-gray-700 font-bold mb-2">
            Current Mood:
          </label>
          <select
            id="mood"
            name="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="anxious">Anxious</option>
            <option value="stressed">Stressed</option>
            <option value="angry">Angry</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="stressLevel" className="block text-gray-700 font-bold mb-2">
            Stress Level (1-10):
          </label>
          <input
            type="number"
            id="stressLevel"
            name="stressLevel"
            min="1"
            max="10"
            value={stressLevel}
            onChange={(e) => setStressLevel(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
            Enter PhoneNumber with country code:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Get Counseling
          </button>
        </div>
      </form>

      {/* Transcription Viewing Section */}
      {transcription && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Transcription</h2>
          <p className="text-lg">{transcription}</p>
        </div>
      )}
    </div>
  )
}