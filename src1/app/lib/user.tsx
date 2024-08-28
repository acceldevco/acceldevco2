import { PrismaClient } from '@prisma/client';
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
function user(id: any,token:any) {
    jwt.verify(token,process.env.TOKEN_SECRET!,(user:any,error:any)=>{
        
    })
    const user = prisma.user.findMany({
        where: {
            id: +id
        }
    })
    return user;
}

export default user
