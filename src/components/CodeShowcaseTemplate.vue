<template lang="pug">
pre.pre-container.custom-scrollbar(v-highlightjs v-if="codeData")
    code.code-container.custom-scrollbar(:class="codeLanguage").
        {{codeData}}
    .info-corner
        span {{codeLanguage}}
        img(v-show="!copied" alt="copy icon" src="@/assets/images/icons/copy-clear.svg" @click="copyCode" :class="{'copied' : copied}")
        img(v-show="copied" alt="copied icon" src="@/assets/images/icons/copy-copied.svg" :class="{'copied' : copied}")
        p(v-show="copied" :style="{'opacity' : copied ? '1' : '0' }") copied
</template>

<script>
export default {
    name: 'CodeShowcaseTemplate',
    props: {
        codeData: {
            type: String,
            default: 'Missing code'
        },
        codeLanguage: {
            type: String,
            default: "c#"
        }
    },
    data() {
        return {
            copied: false
        };
    },
    methods: {
        async copyCode() {
            try {
                await navigator.clipboard.writeText(this.codeData);
                this.copied = true;
                setTimeout(() => {
                    this.copied = false;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    }
}

// --COMMON LANGUAGE NAMES--
//      js
//      swift
//      c#
//      gdscript
//      arduino
//      brainfuck


// for more
// https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md

</script>

<style scoped lang="scss">
.pre-container {
    width: 100%;
    overflow: auto;
    border-radius: 16px !important;
    box-sizing: border-box;
    display: flex;
    position: relative;
    font-size: 16px;

    .code-container {
        width: 100%;
        box-sizing: border-box;
        padding: 16px;
        background-color: var(--background-color);
        overflow: auto;
    }

    .info-corner {
        position: absolute;
        right: 16px;
        top: 16px;

        span {
            font-size: 20px;
            font-weight: 400;
            letter-spacing: -0.02em;
            color: var(--text-color);
            padding: 10px;
            opacity: 1;
            transition: opacity 0.2s ease;
        }
        img{
            position: absolute;
            right: 0;
            top: 0;
            transform: scale(1.2);
            background-color: var(--background-color-less);
            padding: 8px;
            border-radius: 10px;
            transition: opacity 0.2s ease, border 0.2s ease;
            opacity: 0;
            pointer-events: none;
            cursor: default;

            &.copied{
                border-radius: 4px 10px 10px 4px;
                opacity: 1;
            }
        }

        p {
            position: absolute;
            right: 16px;
            font-size: 16px;
            top: -4px;
            margin-right: 25px;
            color: var(--text-color);
            padding: 12px;
            border-radius: 10px 4px 4px 10px;
            background-color: var(--background-color-less);
        }
    }
    &:hover{

        span {
            opacity: 0;
        }

        img{
            cursor: pointer;
            pointer-events: auto;
            opacity: 1;
        }
    }
}

</style>

