<?php


namespace Modules\Domain\Models\Auth;

use Modules\Domain\Types\Auth\LoginId;
use Modules\Domain\Types\Auth\Password;

class Login
{
    /** @var LoginId */
    private $userName;

    /** @var Password */
    private $password;

    public function __construct(string $userName, string $password)
    {
        $this->userName = new LoginId($userName);
        $this->password = new Password($password);
    }

    /**
     * @return array(String loginId, String password)
     */
    public function getCredential(): array
    {
        return [
            $this->userName->toAuthString(),
            $this->password->toAuthString(),
        ];
    }

}
