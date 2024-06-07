import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData, Link } from "@remix-run/react";
import client from "~/client";

let surveyName = ""
let questionText = ""

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


//server side - serves html data to client ?
export const loader = async ()  => {
  const surveys = await client.survey.findMany();
  return { surveys: surveys };
}

//this is getting the form data/survey name and updatitng the data structure, then returning (handling post requests)
export const action: ActionFunction = async ({request }) => {
  const data = await request.formData();


  const surveys = await client.survey.findMany()
  // getting the data from form 

  // await client.survey.create({
  const newSurvey = await client.survey.create({
    data: {
      title: data.get(surveyName)?.toString() || "name empty"
    }
  })
  const newQuestion = await client.question.create({
    data: {
      questionText: data.get(questionText)?.toString() || "question empty", 
      surveyId: newSurvey.id,
  },
  })

  // })
  // create a new survey based on the form 

  // getting a list of the updated survey 
}

export default function createSurvey() {
// this is what actually renders to the client 
  const data = useLoaderData<typeof loader>(); 
  const surveys = data.surveys
  return (
    // create  survey
    // get all existing surveys 
    /* ## specifies the content of a post request, and calls Action to actually handle the post req */
    <div>
             <h1 className="text-5xl pb-5"> Survey List </h1>
        {surveys.map((survey) => {
          return( 
            <div className="flex ">
              <p className="text-2xl pr-5"> {survey.title}</p>
            </div> 
          )
        }
      )
    }
      <Form method="post"> 
        <div>
          Survey Title:
           <input className="border rounded-md border-gray-300" type="text" name={surveyName} />
        </div>
        <div> 
          Question: 
            <input className="border rounded-md border-gray-300" type="text" name={questionText} />
        </div>
        <button type="submit"> Submit</button>
      </Form>
    </div>
  )
}