import Knex from 'knex';

export async function seed(knex:Knex) {
    await knex('users').insert([
        {
            username: 'geraldo',
            email: 'geraldo@gmail.com',
            password: 'admin'
        },
        {
            username: 'luidy',
            email: 'luidy@gmail.com',
            password: 'admin'
        },
    ])
}