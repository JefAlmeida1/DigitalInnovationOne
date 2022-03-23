import {Request, Response} from 'express';

export const pingResult = (req: Request, res: Response) =>  {

    res.json({
        message:"Pong",
        data: {...req.body}

    })
};

export const pingResultv2 = (req: Request, res: Response) =>  {
    res.status(201).json({
        message:"Pong",
        body: {...req.body}

    })
};