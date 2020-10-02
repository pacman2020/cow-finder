import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('cows', db =>{
        db.increments('id').primary();
        db.string('image').notNullable();
        db.string('city').notNullable();
        db.string('uf',2).notNullable();
        db.string('address').notNullable();
        db.string('whatsapp').notNullable();
        db.string('email').notNullable();

        db.integer('user_id')
            .references('users.id')
            .notNullable()
            .onDelete('CASCADE');

        db.timestamp('created_at').defaultTo(knex.fn.now());
        db.timestamp('update_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('cows');
}