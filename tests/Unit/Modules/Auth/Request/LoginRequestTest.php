<?php

namespace Tests\Unit\Modules\Auth\Request;

use Illuminate\Support\Facades\Validator;
use Modules\Auth\Request\LoginRequest;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class LoginRequestTest extends TestCase
{

    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed', ['--class' => 'DevInitSeeder']);
    }

    /**
     * @test
     * @dataProvider confirmValidateProvider
     *
     * @param array $input
     * @param array $expect
     */
    public function confirmValidate(array $input, array $expect)
    {
        $rules = (new LoginRequest())->rules();
        /** @var \Illuminate\Validation\Validator $validator */
        $validator = Validator::make($input, $rules);
        $errors = $validator->errors();
        $actual = $errors->get('username');
        $this->assertEquals($expect['username'], $actual);

        $actual = $errors->get('password');
        $this->assertEquals($expect['password'], $actual);
    }

    public function confirmValidateProvider(): array
    {
        // input
        // expected
        return [
            '正常' => [
                ['username' => 'ooga04', 'password' => 'hoge'],
                ['username' => [], 'password' => []]
            ],
            '必須エラー' => [
                ['username' => '', 'password' => null],
                ['username' => ['The username field is required.'], 'password' => ['The password field is required.']]
            ],
        ];
    }
}
