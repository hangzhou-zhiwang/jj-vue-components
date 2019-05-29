<template>
    <div ref="map" style="height:500px;"></div>
</template>
<script>
import chinaMap from "./chinaMap";
export default {
    methods: {
        init(cityData) {
            chinaMap({
                dom: this.$refs.map,
                getProvinceList: async () => {
                    return [];
                },
                getCityList: async id => {
                    return [];
                },
                getTownList: async id => {
                    return [];
                },
                time: 3000,
                timeLoop: () => {
                    return false
                }
            });
        },
        updateCityList(data, grep) {
            this.$emit("updateCityList", {
                data,
                grep
            });
        },
        handleMapData(data) {
            let arr = [];
            data.forEach(item => {
                let cityName = item.cityName
                    .replace("省", "")
                    .replace("市", "");
                if (cityName.indexOf("内蒙古") > -1) {
                    cityName = "内蒙古";
                }
                arr.push({
                    name: cityName.length > 3 ? cityName.slice(0, 2) : cityName,
                    value: item.progress
                });
            });
            return arr;
        }
    }
};
</script>
