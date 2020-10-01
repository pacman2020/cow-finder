import Knex from 'knex';
import bcrypt from 'bcrypt';

export async function seed(knex:Knex) {
    const new_password = bcrypt.hashSync('admin', 10);
    
    await knex('users').insert([
        {
            username: 'geraldo',
            email: 'geraldo@gmail.com',
            password: new_password
        },
        {
            username: 'luidy',
            email: 'luidy@gmail.com',
            password: new_password
        },
    ])
}