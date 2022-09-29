<?php

namespace Database\Seeders;

use App\Models\Users;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Users::create([
            'first_name' => 'Mario',
            'last_name' => 'Moreno',
            'email' => 'librarian@test.com',
            'role' => 'librarian'
        ]);

        Users::create([
            'first_name' => 'Mario',
            'last_name' => 'Student',
            'email' => 'student@test.com',
            'role' => 'student'
        ]);
    }
}
