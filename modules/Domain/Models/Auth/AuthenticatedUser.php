<?php


namespace Modules\Domain\Models\Auth;

use App\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;

/**
 * 認証済ユーザーモデル
 * @package Modules\Domain\Models\Auth
 */
class AuthenticatedUser
{
    /** @var Model|User */
    private $authenticatedUser;

    // モデルをそのままラップしてても旨みは低いような気がするから、そのうち何か考えるけど、
    // 権限周りがどーちゃらとかは、権限周りのtype object紐づけて、そこ上であーだこーだやるようになるから、
    // このオブジェクトは、その場合は、各type objectとのブリッジと処理の集約の役割になる
    /**
     * AuthenticatedUser constructor.
     * @param Authenticatable|User $user
     */
    public function __construct(Authenticatable $user)
    {
        $this->authenticatedUser = $user;
    }

    public function username()
    {
        return $this->authenticatedUser->name;
    }
}
