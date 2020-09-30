import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('users', db =>{
        db.increments('id').primary();
        db.string('username').notNullable();
        db.string('email').notNullable().unique();
        db.string('password').notNullable();
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('users');
}