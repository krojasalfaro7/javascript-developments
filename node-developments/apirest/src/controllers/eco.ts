import { Request, Response } from 'express';


// Eco
export const eco = async(req: Request, res: Response) => {

    console.log(req.body);
    res.json(req.body);        
}
