"use client"

import { useQuery } from "@tanstack/react-query"
import MultiStepForm from "../components/forms/MultiStepForm"

async function fetchQuestions() {
  const res = await fetch("http://localhost:3001/api/v1/questions", {
    headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE3NTkwOTUyMTV9.WWCrAPQWSwWT-_EY7SsM8OjmLixSINlUn8QC6S46cyY'}
  })
  if (!res.ok) throw new Error("Failed to fetch questions")
  return res.json()
}

export default function QuestionnairePage() {
  const { data, error, isLoading } = useQuery({ queryKey: ['questions'], queryFn: fetchQuestions })

  if (isLoading) return <p>Loading questions...</p>
  if (error) return <p>Error loading questions</p>

  console.log("data:", data)

  return <MultiStepForm questions={data} totalSteps={4} />
}
