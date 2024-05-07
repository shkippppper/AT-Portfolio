<template lang="pug">
.content-container
    .table-container
        .table-content-item(v-for="(content, index) in projectData?.tableData" :key="`a${index}`" )
            .main-content-item(@click="contentClicked(content.scrollTo)")
                .indexing {{index+1}}
                p {{content.title}}
            .sub-content-item(v-for="(subcontent, subindex) in content.subTitles" :key="`b${index}`" @click="contentClicked(subcontent.scrollTo)" )
                .indexing {{index+1}}. {{subindex+1}}
                p {{subcontent.title}}
    .details-container
        //.details-header Project Details
        .details-listing
            .detail-cell(v-for="detail in projectData?.detailsData")
                .detail-cell-header {{detail.header}}
                .detail-cell-subitem {{detail.listing}}



</template>

<script>
export default {
    name: 'TableContentDetails',
    props: {
        projectData: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        contentClicked(scrollTo){
            this.$emit('contentClicked', scrollTo)
        }
    }
}

</script>

<style lang="scss" scoped>
.content-container{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    gap: 16px;

    .table-container,
    .details-container {
        background-color: var(--background-color);
        padding: 16px;
        border-radius: 16px;
    }

    .table-container{
        display: flex;
        gap: 10px;
        flex-direction: column;

        .table-content-item{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            cursor: pointer;
            flex-direction: column;
            gap: 6px;

            .indexing{
                font-size: 16px;
                font-weight: 500;
                line-height: 1.5;
                letter-spacing: -.02em;
                color: var(--text-color);
                width: 18px;
            }

            p {
                font-size: 16px;
                font-weight: 400;
                line-height: 1.5;
                letter-spacing: -.02em;
                color: var(--text-color);
            }

            .main-content-item{
                display: flex;
            }

            .sub-content-item{
                display: flex;
                margin-left: 30px;
                gap: 4px;
                .indexing {
                    display: flex;
                    flex-direction: row;
                    width: 30px;

                }
            }
        }
    }

    .details-container {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .details-header{
            font-size: 18px;
            font-weight: 400;
            line-height: 1.5;
            letter-spacing: -.02em;
            text-align: center;
            border-bottom: 1px solid var(--text-color-less);
            padding: 0 4px 4px;
        }

        .details-listing{
            display: flex;
            gap: 8px;
            align-items: flex-start;
            justify-content: space-evenly;
            flex-direction: column;
            height: 100%;

            .detail-cell {
                display: flex;
                justify-content: center;
                align-items: center;
                //flex-direction: column;
                gap: 0.25em;

                .detail-cell-header{
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 1.5;
                    letter-spacing: -.02em;
                    color: var(--text-color);
                }

                .detail-cell-subitem{
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 1.5;
                    letter-spacing: -.02em;
                    color: var(--text-color);
                }
            }
        }
    }
}


</style>