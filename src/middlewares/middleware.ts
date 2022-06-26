import BodyParser from 'body-parser'

export const middleware: any = () => {
    return [
        BodyParser.json(),
        BodyParser.urlencoded({ extended: true }),
    ]
};
