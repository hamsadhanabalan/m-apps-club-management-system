"use client"

import { useState } from "react"

export default function CreateQuiz() {

  const [title, setTitle] = useState("")
  const [questions, setQuestions] = useState<any[]>([])

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        answer: 0
      }
    ])
  }

  const updateQuestion = (index:number,value:string) => {

    const newQuestions=[...questions]
    newQuestions[index].question=value
    setQuestions(newQuestions)

  }

  const updateOption = (qIndex:number,optIndex:number,value:string)=>{

    const newQuestions=[...questions]
    newQuestions[qIndex].options[optIndex]=value
    setQuestions(newQuestions)

  }

  const updateAnswer = (qIndex:number,value:number)=>{

    const newQuestions=[...questions]
    newQuestions[qIndex].answer=value
    setQuestions(newQuestions)

  }

  const publishQuiz = async () => {

    const res = await fetch("/api/admin/quiz/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title,
        questions
      })
    })

    const data = await res.json()

    alert("Quiz Published Successfully")

  }

  return(

    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Create Quiz
      </h1>

      <input
        placeholder="Quiz Title"
        className="border p-3 w-full mb-6 rounded"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      {questions.map((q,i)=>(

        <div key={i} className="border p-5 mb-6 rounded">

          <input
            placeholder="Enter Question"
            className="border p-2 w-full mb-4"
            value={q.question}
            onChange={(e)=>updateQuestion(i,e.target.value)}
          />

          {q.options.map((opt:any,j:number)=>(

            <div key={j} className="flex items-center mb-2">

              <input
                type="radio"
                name={`answer-${i}`}
                onChange={()=>updateAnswer(i,j)}
              />

              <input
                placeholder={`Option ${j+1}`}
                className="border p-2 ml-2 w-full"
                value={opt}
                onChange={(e)=>updateOption(i,j,e.target.value)}
              />

            </div>

          ))}

        </div>

      ))}

      <div className="flex gap-4">

        <button
          onClick={addQuestion}
          className="bg-gray-600 text-white px-5 py-2 rounded"
        >
          Add Question
        </button>

        <button
          onClick={publishQuiz}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Publish Quiz
        </button>

      </div>

    </div>

  )
}