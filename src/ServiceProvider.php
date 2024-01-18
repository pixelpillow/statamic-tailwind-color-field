<?php

namespace Pixelpillow\StatamicTailwindColorSelector;

use Pixelpillow\StatamicTailwindColorSelector\FieldTypes\TailwindColor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $vite = [
        'input' => [
            'resources/js/tailwind_color-fieldtype.js',
        ],
        'publicDirectory' => 'resources/dist',
        'hotFile' => __DIR__.'/../resources/dist/hot',
    ];

    public function bootAddon()
    {
        TailwindColor::register();
    }
}
