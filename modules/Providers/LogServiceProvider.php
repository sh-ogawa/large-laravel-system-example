<?php


namespace Modules\Providers;

use Illuminate\Support\ServiceProvider;
use DB;
use Log;

class LogServiceProvider extends ServiceProvider
{
    public function register()
    {
        // SQL Log
        DB::listen(function ($query) {
            $sql = $query->sql;
            for ($i = 0; $i < count($query->bindings); $i++) {
                $sql = preg_replace("/\?/", $query->bindings[$i], $sql, 1);
            }

            Log::debug("SQL", ["time" => sprintf("%.2f ms", $query->time), "sql" => $sql]);
        });
    }
}
