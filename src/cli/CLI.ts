import * as inquirer from 'inquirer';

export interface UserAction {
    name: string;
    options: string[];
}

export class CLI {
    constructor() {}

    public prompt(): Promise<UserAction> {
        return inquirer.prompt([
            {
                name: 'answer',
                message: 'Input: '
            }
        ])
        .then(({ answer }) => {
            const parts: string[] = answer.split('');
            return {
                name: parts[0],
                options: parts.slice(1)
            };
        });
    }
}