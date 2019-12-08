module.exports = {
    description: 'Generate component of a specified type.',
    prompts: [
        {
            type: 'list',
            name: 'type',
            message: 'What are we generating?',
            choices: ['Element', 'Construct', 'Section', 'View']
        },
        {
            type: 'input',
            name: 'name',
            message: (answers) => `${answers.type} name now, please!`,
        }
    ],
    actions: [
        {
            type: 'addMany',
            base: `templates/Component/`,
            destination: 'src/{{lowerCase type}}/{{pascalCase name}}',
            templateFiles: 'templates/Component/*.hbs'
        },
    ]
}