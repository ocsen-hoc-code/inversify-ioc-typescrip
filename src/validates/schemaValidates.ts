import Joi from 'joi';
import express from 'express';

export const userSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
});

export const validateSchema = (schema: Joi.ObjectSchema, type?: string): any => {
    return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let data: any = null;
        switch (type) {
            case 'query':
                data = req.query;
                break;
            case 'params':
                data = req.params;
                break;
            case 'body':
            default:
                data = req.body;
        }

        const { error } = schema.validate(data);
        const valid = error == null;
        if (valid) {
            next();
        } else {
            res.status(400).json({ errors: error?.details });
        }
    };
}