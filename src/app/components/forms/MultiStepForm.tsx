"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Question = {
  id: number
  position: number
  content: string
  question_type: "radio" | "multiple" | "text"
  parsed_options?: string[]
}

type Props = {
  questions: Question[]
  totalSteps?: number
}

export default function MultiStepForm({ questions, totalSteps = 4 }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, any>>({})

  const questionsPerStep = Math.ceil(questions.length / totalSteps)

  const handleChange = (qId: number, value: any) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }))
  }

  const next = () => setCurrentStep((s) => Math.min(s + 1, totalSteps - 1))
  const prev = () => setCurrentStep((s) => Math.max(s - 1, 0))
  const submit = () => {
    console.log("Submitted answers:", answers)
    alert("Form submitted!")
  }

  const start = currentStep * questionsPerStep
  const end = start + questionsPerStep
  const stepQuestions = questions.slice(start, end)
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100)

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
        <div
          className="bg-red-700 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h1 className="text-2xl font-bold text-center mb-8">Athlete Health Questionnaire</h1>

      <div className="space-y-6">
        {stepQuestions.map((q) => (
          <div key={q.id} className="p-6 bg-white rounded-lg shadow">
            <p className="font-medium mb-4">
              {q.position}. {q.content}
            </p>

            <div className="space-y-3">
              {q.question_type === "radio" &&
                q.parsed_options?.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="radio"
                      name={`q${q.id}`}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={() => handleChange(q.id, option)}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <label className="ml-3 block text-sm font-medium text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}

              {q.question_type === "multiple" &&
                q.parsed_options?.map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      name={`q${q.id}`}
                      value={option}
                      checked={answers[q.id]?.includes(option) || false}
                      onChange={(e) => {
                        const selected = answers[q.id] || []
                        if (e.target.checked) {
                          handleChange(q.id, [...selected, option])
                        } else {
                          handleChange(q.id, selected.filter((v: string) => v !== option))
                        }
                      }}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label className="ml-3 block text-sm font-medium text-gray-700">
                      {option}
                    </label>
                  </div>
                ))}

              {q.question_type === "text" && (
                <textarea
                  rows={4}
                  value={answers[q.id] || ""}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-6 pt-6">
        <Button onClick={prev} className={`${currentStep === 0 ? "hidden" : ""}`}>
          Previous
        </Button>
        {currentStep < totalSteps - 1 ? (
          <Button onClick={next}>Next</Button>
        ) : (
          <Button onClick={submit}>Submit</Button>
        )}
      </div>
    </div>
  )
}
