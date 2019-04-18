<?php

namespace Modules\Domain\Types\Auth;

class Password
{
    private $password;

    public function __construct(string $password)
    {
        $this->password = $password;
    }

    /**
     * 認証用の文字列を返す
     * @return string
     */
    public function toAuthString(): string
    {
        // authのなかでbcryptされるから文字列をそのまま返せばOK
        return $this->password;
    }

    /**
     * @return array
     */
    public static function rules(): array
    {
        return ['required', 'string'];
    }
}
