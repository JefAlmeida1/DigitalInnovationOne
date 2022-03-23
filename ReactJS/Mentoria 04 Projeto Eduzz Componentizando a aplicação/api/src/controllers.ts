import {Request, Response} from 'express';

export const pingResult = (req: Request, res: Response) =>  {

    res.json({
        message:"Pong",
        data: {...req.body}

    })
};