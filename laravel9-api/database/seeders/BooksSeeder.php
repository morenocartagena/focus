<?php

namespace Database\Seeders;

use App\Models\Book;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Book::create([
            'title' => 'My U Library',
            'author' => 'Mario Efrain Moreno Cartagena',
            'published_year' => '2022',
            'genre' => 'Test',
            'stock' => 10
        ]);

        Book::create([
            'title' => 'Lord of the Rings',
            'author' => 'J.R.R. Tolkien',
            'published_year' => '1954',
            'genre' => 'Fantasy',
            'stock' => 1
        ]);

        Book::create([
            'title' => 'Don Quijote de la Mancha',
            'author' => 'Miguel de Cervantes',
            'published_year' => '1605',
            'genre' => 'Fiction',
            'stock' => 3
        ]);

        Book::create([
            'title' => 'El principito',
            'author' => 'Antoine de Saint-Exupery',
            'published_year' => '1943',
            'genre' => 'Childrens literature',
            'stock' => 5
        ]);
    }
}
