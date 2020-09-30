import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('cows', db =>{
        db.increments('id').primary();
        db.string('image').notNullable();
        db.string('city').notNullable();
        db.string('uf',2).notNullable();
        db.string('address').notNullable();
        db.string('whatsapp').notNullable();
        db.string('email').notNullable().unique();
        db.string('user_id')
            .notNullable()
            .references('id')
            .inTable('user')
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('cows');
}