<?php

namespace Modules\Auth\Request;

use Illuminate\Foundation\Http\FormRequest;
use Modules\Auth\Form\LoginForm;
use Modules\Domain\Types\Auth\LoginId;
use Modules\Domain\Types\Auth\Password;

class LoginRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'username' => LoginId::rules(),
            'password' => Password::rules(),
        ];
    }

    public function validatedForm()
    {
        return new LoginForm($this->validated());
    }

}
