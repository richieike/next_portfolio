import {NextApiRequest, NextApiResponse} from 'next';
import {PrismaClient} from '@prisma/client';

export default async function (req: NextApiRequest, res: NextApiResponse){
    
    const prisma = new PrismaClient({log:["query"]});
    
    try {
        const {covidCase: covidcaseData} = req.body;
       
        const covidcase = await prisma.covidCase.create({
            data: {
                latitude: covidcaseData.latitude,
                longitude: covidcaseData.longitude,
            }
        });
        res.status(201);
        res.json({covidcase});

    } catch (error) {
        res.status(500);
        res.json({error: "Unable to save case"})
    } finally{
        await prisma.$disconnect();
    }

}
