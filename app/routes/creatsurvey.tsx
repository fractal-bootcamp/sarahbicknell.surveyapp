// import type { ActionFunction, MetaFunction } from "@remix-run/node";
// import { Form, useLoaderData } from "@remix-run/react";
// import client from "~/client";


// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };


// //server side - serves html data to client ?
// export const loader = async ()  => {
//   const surveys = client.survey.findMany();
//   return { surveys: surveys };
// }


// //this is getting the form data/survey name and updatitng the data structure, then returning (handling post requests)
// export const action: ActionFunction = async ({request }) => {
//   const data = await request.formData();
//   // getting the data from form 

//   // await client.survey.create({

//   // })
//   // create a new survey based on the form 

//   // getting a list of the updated survey 
// }

// export default function Index() {
// // this is what actually renders to the client 
//   const data = useLoaderData<typeof loader>(); 
//   return (

//     // create  survey
//     // get all existing surveys 
//     <div>

//       <Form method="post"> 
//     {/* ## specifies the content of a post request, and calls Action to actually handle the post req */}
//         <h1> Survey List </h1>
//           Survey name 
//         </label>
//       </Form>
//     </div>
