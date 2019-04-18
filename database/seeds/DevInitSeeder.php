<?php

use Illuminate\Database\Seeder;

class DevInitSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\User::query()->create([
            'name' => 'ooga04',
            'password' => bcrypt('hoge'),
            'email' => 'syogo0417@gmail.com',
        ]);
    }
}
