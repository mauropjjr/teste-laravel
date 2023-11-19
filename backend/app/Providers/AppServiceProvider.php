<?php

namespace App\Providers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Validator::extend('cpf', function ($attribute, $value, $parameters, $validator) {
            $cpf = preg_replace('/[^0-9]/', '', $value);
    
            if (strlen($cpf) != 11 || preg_match('/(\d)\1{10}/', $cpf)) {
                return false;
            }
    
            for ($i = 9; $i < 11; $i++) {
                $sum = 0;
                for ($j = 0; $j < $i; $j++) {
                    $sum += $cpf[$j] * (($i + 1) - $j);
                }
                $remainder = $sum % 11;
                if ($remainder < 2) {
                    $digit = 0;
                } else {
                    $digit = 11 - $remainder;
                }
                if ($cpf[$i] != $digit) {
                    return false;
                }
            }
            return true;
        });
    }
}
