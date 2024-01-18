<?php

namespace Pixelpillow\StatamicTailwindColorSelector\FieldTypes;

use Statamic\Fields\Fieldtype;

class TailwindColor extends Fieldtype
{
    protected $categories = ['special'];

    public function icon()
    {
        return file_get_contents(__DIR__.'/../../resources/svg/tailwind-logo.svg');
    }

    protected function configFieldItems(): array
    {
        return [
            [
                'display' => __('Appearance & Behavior'),
                'fields' => [
                    'swatches' => [
                        'display' => 'Tailwind Colors',
                        'instructions' => 'Add the colors you want to use in the field. Use the key for the color name and the value for the hex code. Eg. for "bg-orange-500" you use "orange" => "#ff0000"',
                        'type' => 'array',
                        'key_header' => 'Color',
                        'value_header' => 'Hex Code',
                        'add_button' => 'Add Color',
                    ],
                    'default' => [
                        'display' => 'Default Color',
                        'instructions' => 'The default color that will be selected when the field is empty.',
                        'type' => 'text',
                        'placeholder' => 'orange',
                    ],
                ],
            ],
        ];
    }
}
