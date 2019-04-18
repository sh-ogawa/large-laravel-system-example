<?php


namespace Modules\Domain\Types\Auth;


class LoginId
{
    private $loginId;

    public function __construct(string $loginId)
    {
        $this->loginId = $loginId;
    }

    /**
     *  認証用の文字列を返す
     * @return mixed
     */
    public function toAuthString()
    {
        return $this->loginId;
    }

    /**
     * @return array
     */
    public static function rules(): array
    {
        return ['required', 'max:512'];
    }
}
