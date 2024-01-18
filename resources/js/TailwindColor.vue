<template>
    <div class="">
        <div class="">
            <div v-if="swatches" class="flex gap-3">
                <div
                    v-for="swatch in swatches"
                    class="flex inline-block w-10 h-10 border border-gray-400 rounded cursor-pointer"
                    :class="{
                        'opacity-50 hover:opacity-100 scale-2 scale-125':
                            swatch.key !== value,
                    }"
                    :style="{ 'background-color': swatch.hex }"
                    @click="
                        () => {
                            update(swatch.key);
                        }
                    "
                >
                    <div
                        v-if="swatch.key === value"
                        class="flex items-center justify-center w-full h-full"
                    >
                        <div
                            class="flex items-center justify-center w-5 h-5 rounded-full bg-black/10"
                        >
                            <svg
                                version="1.1"
                                role="presentation"
                                width="12"
                                height="12"
                                viewBox="0 0 1792 1792"
                                class="text-white fill-current"
                            >
                                <path
                                    d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mixins: [Fieldtype],

    data() {
        return {
            swatches: this.getSwatchesAsArray(),
        };
    },

    watch: {
        value(value) {
            this.customColor = value;
        },
    },

    computed: {
        replicatorPreview() {
            const color = this.getHexColor(this.value);

            return this.value
                ? `<span class="little-dot" style="background-color:${color}"></span>`
                : null;
        },
    },

    methods: {
        customColorSelected(event) {
            this.customColor = event.target.value;
        },

        commitCustomColor() {
            this.update(this.customColor);
        },

        getHexColor(color) {
            console.log("🚀 ~ getHexColor ~ color:", color);
            return this.config.swatches[color];
        },

        getSwatchesAsArray() {
            if (!this.config.swatches) {
                return null;
            }

            return Object.keys(this.config.swatches).map((key) => {
                return {
                    key,
                    hex: this.config.swatches[key],
                };
            });
        },
    },
};
</script>
