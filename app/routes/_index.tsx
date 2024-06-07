import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useLoaderData, useNavigate, Link } from "@remix-run/react";
import client from "~/client";

//server side - serves html data to client ?
export const loader = async ()  => {
  const surveys = await client.survey.findMany();
  return { surveys: surveys };
}

export default function SurveyList() {
// this is what actually renders to the client 
  const data = useLoaderData<typeof loader>(); 
  const surveys = data.surveys
  return (
    // get all existing surveys 
    <div className="flex flex-col center pl-5 pt-5">
        <h1 className="text-5xl pb-5"> Survey List </h1>
        {surveys.map((survey) => {
          return( 
            <div className="flex ">
              <p className="text-2xl pr-5"> {survey.title}</p>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded-full">
                <Link to="/createsurvey" > Take Survey </Link>
              </div>
            </div> 
          )
        }
      )
    }
    </div>




  )
}