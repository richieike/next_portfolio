import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client';

export default async function (req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient({log: ["query"]});
    
    try {
        const covidcases = await prisma.covidCase.findMany();
        res.status(200)
        res.json({covidcases});
    } catch (error) {
        res.status(500);
        res.json({error: "unable to retrieve covid cases"})
    }finally{
        await prisma.$disconnect();
    }

}