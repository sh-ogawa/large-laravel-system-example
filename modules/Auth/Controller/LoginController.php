<?php

namespace Modules\Auth\Controller;

use App\Http\Controllers\Controller;
use Modules\Auth\Request\LoginRequest;

class LoginController extends Controller
{
    /**
     * ログインページ
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function show()
    {
        return view('login');
    }

    /**
     * ログインを試行
     *
     * @param LoginRequest $request
     * @return \Illuminate\Http\RedirectResponse|string
     */
    public function login(LoginRequest $request)
    {
        $login_form = $request->validatedForm();
        logger()->debug('', $login_form->getCredential());

        // とりあえずremember tokenをデフォルトで覚えさせておく
        $is_remember = (bool)$request->get('remember', true);
        if (auth()->attempt($login_form->getCredential(), $is_remember)) {
            return 'auth';
        }
        flash(__('auth.failed'))->error();
        return redirect()->back()->withInput();
    }

    /**
     * ログアウト
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout(): \Illuminate\Http\RedirectResponse
    {
        auth()->logout();
        return redirect()->route('login');

    }
}
