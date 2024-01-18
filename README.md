# Tailwind color Field

Tailwind color field is a Statamic addon that lets you define your Tailwind colors and use them in your blueprints.

## How to Install

Add this addon by running the following command in your terminal:

```bash
composer require pixelpillow/statamic-tailwind-color-field
```

## How to Use

### Field Configuration

You can add the fieldtype to your blueprints like you would any other fieldtype that is already part of Statamic. For
configuration, you simply add the Tailwind color fieldtype to your blueprint's fieldset. The fieldtype has the following
configuration options:

- **Tailwind Colors: (required)**: A list of all the colors you want to use in your blueprint. You can add as many as you want. The fieldtype will automatically add a color picker for each color you add here. Use the key for the color name and the value for the hex code. Eg. for "bg-orange-500" you use "orange" => "#ff0000"
- **Default Value**: Set a default value for the field eg. "orange"

... and that's it! You can now use the fieldtype in your blueprints.
