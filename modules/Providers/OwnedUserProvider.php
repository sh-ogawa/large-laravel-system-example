<?php

namespace Modules\Providers;

use Illuminate\Auth\EloquentUserProvider;
use Modules\Domain\Models\Auth\AuthenticatedUser;

/**
 * ログイン後に、独自型をauth()->user()で取れるようにする認証プロバイダ
 * @package Modules\Providers
 */
class OwnedUserProvider extends EloquentUserProvider
{
    /**
     * @inheritDoc
     * @override
     */
    public function retrieveById($identifier)
    {
        $user = parent::retrieveById($identifier);
        return $user === null ? null : new AuthenticatedUser($user);
    }
}
