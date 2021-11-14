import { Request, Response, NextFunction } from 'express'

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if(err) {
        res.status(err.code || 500)
        res.json({ error: err.message })
    } else next()
}