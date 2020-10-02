import Knex from 'knex';
import bcrypt from 'bcrypt';

export async function seed(knex:Knex) {
    const new_password = bcrypt.hashSync('admin', 10);
    
    await knex('users').insert([
        {
            username: 'admin',
            email: 'admin@gmail.com',
            password: new_password
        }
    ])
}