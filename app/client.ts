import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

async function main () {
    await client.survey.create({
        data: {
           title: 'Demo Survey',
           questions: {
            create: { questionText: 'Whats your favorite?' },
            }

            }
    })
}

const allSurveys = await client.survey.findMany()
console.dir(allSurveys)

export default client 