<?php


namespace Modules\Auth\Form;

use Illuminate\Support\Arr;
use Modules\Domain\Models\Auth\Login;

class LoginForm
{
    /** @var Login */
    private $login;

    public function __construct(array $value)
    {
        $this->login = new Login(Arr::get($value, 'username'), Arr::get($value, 'password'));
    }

    public function getCredential(): array
    {
        [$username, $password] = $this->login->getCredential();
        return [
            'email' => $username,
            'password' => $password
        ];
    }

}
