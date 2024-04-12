// app/actions.js
'use server'

import axios from 'axios'

export async function provideCounseling(
  studentName,
  studentId,
  mood,
  stressLevel,
  message
) {
  const apiKey = process.env.BLANDAI_API_KEY
  const apiUrl = 'https://api.bland.ai/v1/calls'

  const headers = {
    Authorization: apiKey,
  }

  const data = {
    student_name: studentName,
    student_id: studentId,
    mood: mood,
    stress_level: stressLevel,
    message: message,
    task: `You are a mental health counselor providing support to a student named ${studentName} (ID: ${studentId}).
      
      Student Information:
      Name: ${studentName}
      ID: ${studentId}
      Current Mood: ${mood}
      Stress Level: ${stressLevel}
      
      Message from the student:
      ${message}
      
      Provide a personalized counseling response to address the student's concerns and offer support based on their current mood and stress level.
      
      Counselor: "Hello ${studentName}, thank you for reaching out. I understand that you're currently feeling ${mood} and your stress level is ${stressLevel}. Let's discuss your concerns in more detail."
      
      Student: [Responds with more information about their concerns]
      
      Counselor: [Provides empathetic and supportive response, offers coping strategies and resources based on the student's specific needs]
      
      Student: [Expresses gratitude or asks follow-up questions]
      
      Counselor: [Addresses any follow-up concerns, provides additional support, and encourages the student to reach out again if needed]
      
      Closing:
      
      Counselor: "Remember, ${studentName}, your mental health is important, and there are always resources available to support you. Don't hesitate to reach out if you need further assistance. Take care of yourself."`,
  }

  if (!apiKey) {
    throw new Error('Please add your Counseling API KEY')
  }

  const response = await axios.post(apiUrl, data, {
    headers,
  })

  const counselingResponse = response.data.counseling_response

  console.log('Counseling response:', counselingResponse)

  // You can further process the counseling response or update the UI accordingly
}