import ChinaMapJson from "./china.json";
import echarts from 'echarts'
/*中国地图三级下钻
     *@method chinaMap
     // 必传参数
     *@param{String}chinaData 加载地图的容器ID
     *@param{String}data 中国地图url地址
     *@param{String}mapName 省级url地址
     *@param{String}chinaData 市级url地址
     // 非必传参数
     *@param{Boolean}testData 是否开启测试数据
     *@param{String}maxColor 地图最深颜色
     *@param{String}minColor 地图最浅颜色
     *@param{String}hoverColor 鼠标选中颜色
     *@param{Number}scaleSize  放大数据比例
     *@return void

     // 暂时只包含省市县三级下钻，气泡悬浮提示功能
     // 组件依赖于echarts地图，
  */
// 获取所有市级邮编
var cityMap = {
    北京市: "110100",
    天津市: "120100",
    上海市: "310100",
    重庆市: "500100",
    崇明县: "310200",
    湖北省直辖县市: "429000",
    铜仁市: "522200",
    毕节市: "522400",
    石家庄市: "130100",
    唐山市: "130200",
    秦皇岛市: "130300",
    邯郸市: "130400",
    邢台市: "130500",
    保定市: "130600",
    张家口市: "130700",
    承德市: "130800",
    沧州市: "130900",
    廊坊市: "131000",
    衡水市: "131100",
    太原市: "140100",
    大同市: "140200",
    阳泉市: "140300",
    长治市: "140400",
    晋城市: "140500",
    朔州市: "140600",
    晋中市: "140700",
    运城市: "140800",
    忻州市: "140900",
    临汾市: "141000",
    吕梁市: "141100",
    呼和浩特市: "150100",
    包头市: "150200",
    乌海市: "150300",
    赤峰市: "150400",
    通辽市: "150500",
    鄂尔多斯市: "150600",
    呼伦贝尔市: "150700",
    巴彦淖尔市: "150800",
    乌兰察布市: "150900",
    兴安盟: "152200",
    锡林郭勒盟: "152500",
    阿拉善盟: "152900",
    沈阳市: "210100",
    大连市: "210200",
    鞍山市: "210300",
    抚顺市: "210400",
    本溪市: "210500",
    丹东市: "210600",
    锦州市: "210700",
    营口市: "210800",
    阜新市: "210900",
    辽阳市: "211000",
    盘锦市: "211100",
    铁岭市: "211200",
    朝阳市: "211300",
    葫芦岛市: "211400",
    长春市: "220100",
    吉林市: "220200",
    四平市: "220300",
    辽源市: "220400",
    通化市: "220500",
    白山市: "220600",
    松原市: "220700",
    白城市: "220800",
    延边朝鲜族自治州: "222400",
    哈尔滨市: "230100",
    齐齐哈尔市: "230200",
    鸡西市: "230300",
    鹤岗市: "230400",
    双鸭山市: "230500",
    大庆市: "230600",
    伊春市: "230700",
    佳木斯市: "230800",
    七台河市: "230900",
    牡丹江市: "231000",
    黑河市: "231100",
    绥化市: "231200",
    大兴安岭地区: "232700",
    南京市: "320100",
    无锡市: "320200",
    徐州市: "320300",
    常州市: "320400",
    苏州市: "320500",
    南通市: "320600",
    连云港市: "320700",
    淮安市: "320800",
    盐城市: "320900",
    扬州市: "321000",
    镇江市: "321100",
    泰州市: "321200",
    宿迁市: "321300",
    杭州市: "330100",
    宁波市: "330200",
    温州市: "330300",
    嘉兴市: "330400",
    湖州市: "330500",
    绍兴市: "330600",
    金华市: "330700",
    衢州市: "330800",
    舟山市: "330900",
    台州市: "331000",
    丽水市: "331100",
    合肥市: "340100",
    芜湖市: "340200",
    蚌埠市: "340300",
    淮南市: "340400",
    马鞍山市: "340500",
    淮北市: "340600",
    铜陵市: "340700",
    安庆市: "340800",
    黄山市: "341000",
    滁州市: "341100",
    阜阳市: "341200",
    宿州市: "341300",
    六安市: "341500",
    亳州市: "341600",
    池州市: "341700",
    宣城市: "341800",
    福州市: "350100",
    厦门市: "350200",
    莆田市: "350300",
    三明市: "350400",
    泉州市: "350500",
    漳州市: "350600",
    南平市: "350700",
    龙岩市: "350800",
    宁德市: "350900",
    南昌市: "360100",
    景德镇市: "360200",
    萍乡市: "360300",
    九江市: "360400",
    新余市: "360500",
    鹰潭市: "360600",
    赣州市: "360700",
    吉安市: "360800",
    宜春市: "360900",
    抚州市: "361000",
    上饶市: "361100",
    济南市: "370100",
    青岛市: "370200",
    淄博市: "370300",
    枣庄市: "370400",
    东营市: "370500",
    烟台市: "370600",
    潍坊市: "370700",
    济宁市: "370800",
    泰安市: "370900",
    威海市: "371000",
    日照市: "371100",
    莱芜市: "371200",
    临沂市: "371300",
    德州市: "371400",
    聊城市: "371500",
    滨州市: "371600",
    菏泽市: "371700",
    郑州市: "410100",
    开封市: "410200",
    洛阳市: "410300",
    平顶山市: "410400",
    安阳市: "410500",
    鹤壁市: "410600",
    新乡市: "410700",
    焦作市: "410800",
    濮阳市: "410900",
    许昌市: "411000",
    漯河市: "411100",
    三门峡市: "411200",
    南阳市: "411300",
    商丘市: "411400",
    信阳市: "411500",
    周口市: "411600",
    驻马店市: "411700",
    省直辖县级行政区划: "469000",
    武汉市: "420100",
    黄石市: "420200",
    十堰市: "420300",
    宜昌市: "420500",
    襄阳市: "420600",
    鄂州市: "420700",
    荆门市: "420800",
    孝感市: "420900",
    荆州市: "421000",
    黄冈市: "421100",
    咸宁市: "421200",
    随州市: "421300",
    恩施土家族苗族自治州: "422800",
    长沙市: "430100",
    株洲市: "430200",
    湘潭市: "430300",
    衡阳市: "430400",
    邵阳市: "430500",
    岳阳市: "430600",
    常德市: "430700",
    张家界市: "430800",
    益阳市: "430900",
    郴州市: "431000",
    永州市: "431100",
    怀化市: "431200",
    娄底市: "431300",
    湘西土家族苗族自治州: "433100",
    广州市: "440100",
    韶关市: "440200",
    深圳市: "440300",
    珠海市: "440400",
    汕头市: "440500",
    佛山市: "440600",
    江门市: "440700",
    湛江市: "440800",
    茂名市: "440900",
    肇庆市: "441200",
    惠州市: "441300",
    梅州市: "441400",
    汕尾市: "441500",
    河源市: "441600",
    阳江市: "441700",
    清远市: "441800",
    东莞市: "441900",
    中山市: "442000",
    潮州市: "445100",
    揭阳市: "445200",
    云浮市: "445300",
    南宁市: "450100",
    柳州市: "450200",
    桂林市: "450300",
    梧州市: "450400",
    北海市: "450500",
    防城港市: "450600",
    钦州市: "450700",
    贵港市: "450800",
    玉林市: "450900",
    百色市: "451000",
    贺州市: "451100",
    河池市: "451200",
    来宾市: "451300",
    崇左市: "451400",
    海口市: "460100",
    三亚市: "460200",
    三沙市: "460300",
    成都市: "510100",
    自贡市: "510300",
    攀枝花市: "510400",
    泸州市: "510500",
    德阳市: "510600",
    绵阳市: "510700",
    广元市: "510800",
    遂宁市: "510900",
    内江市: "511000",
    乐山市: "511100",
    南充市: "511300",
    眉山市: "511400",
    宜宾市: "511500",
    广安市: "511600",
    达州市: "511700",
    雅安市: "511800",
    巴中市: "511900",
    资阳市: "512000",
    阿坝藏族羌族自治州: "513200",
    甘孜藏族自治州: "513300",
    凉山彝族自治州: "513400",
    贵阳市: "520100",
    六盘水市: "520200",
    遵义市: "520300",
    安顺市: "520400",
    黔西南布依族苗族自治州: "522300",
    黔东南苗族侗族自治州: "522600",
    黔南布依族苗族自治州: "522700",
    昆明市: "530100",
    曲靖市: "530300",
    玉溪市: "530400",
    保山市: "530500",
    昭通市: "530600",
    丽江市: "530700",
    普洱市: "530800",
    临沧市: "530900",
    楚雄彝族自治州: "532300",
    红河哈尼族彝族自治州: "532500",
    文山壮族苗族自治州: "532600",
    西双版纳傣族自治州: "532800",
    大理白族自治州: "532900",
    德宏傣族景颇族自治州: "533100",
    怒江傈僳族自治州: "533300",
    迪庆藏族自治州: "533400",
    拉萨市: "540100",
    昌都地区: "542100",
    山南地区: "542200",
    日喀则地区: "542300",
    那曲地区: "542400",
    阿里地区: "542500",
    林芝地区: "542600",
    西安市: "610100",
    铜川市: "610200",
    宝鸡市: "610300",
    咸阳市: "610400",
    渭南市: "610500",
    延安市: "610600",
    汉中市: "610700",
    榆林市: "610800",
    安康市: "610900",
    商洛市: "611000",
    兰州市: "620100",
    嘉峪关市: "620200",
    金昌市: "620300",
    白银市: "620400",
    天水市: "620500",
    武威市: "620600",
    张掖市: "620700",
    平凉市: "620800",
    酒泉市: "620900",
    庆阳市: "621000",
    定西市: "621100",
    陇南市: "621200",
    临夏回族自治州: "622900",
    甘南藏族自治州: "623000",
    西宁市: "630100",
    海东地区: "632100",
    海北藏族自治州: "632200",
    黄南藏族自治州: "632300",
    海南藏族自治州: "632500",
    果洛藏族自治州: "632600",
    玉树藏族自治州: "632700",
    海西蒙古族藏族自治州: "632800",
    银川市: "640100",
    石嘴山市: "640200",
    吴忠市: "640300",
    固原市: "640400",
    中卫市: "640500",
    乌鲁木齐市: "650100",
    克拉玛依市: "650200",
    吐鲁番地区: "652100",
    哈密地区: "652200",
    昌吉回族自治州: "652300",
    博尔塔拉蒙古自治州: "652700",
    巴音郭楞蒙古自治州: "652800",
    阿克苏地区: "652900",
    克孜勒苏柯尔克孜自治州: "653000",
    喀什地区: "653100",
    和田地区: "653200",
    伊犁哈萨克自治州: "654000",
    塔城地区: "654200",
    阿勒泰地区: "654300",
    自治区直辖县级行政区划: "659000",
    台湾省: "710000",
    香港特别行政区: "810100",
    澳门特别行政区: "820000"
};
// chinaMap详细代码开始
function chinaMap({
    dom,
    getProvinceList,
    getCityList,
    getTownList,
    time,
    timeLoop,
}) {
    // 地图坐标
    var geoCoordMap = {};

    // 提示信息
    var toolTipData = [];
    //  气泡，定位点 最大、小值
    var max = 480,
        min = 9;
    var maxSize4Pin = 40,
        minSize4Pin = 40;

    // 定时器刷新

    // 中国地图、省级地图、市区级地图刷新
    var chianTime, provincesTime, cityTime;

    // 地图缩放值
    var _zoom = 1.2;
    // 初始化地图
    var chart = echarts.init(dom);

    //34个省、市、自治区的名字拼音映射数组
    var provinces = {
        //23个省
        台湾: "taiwan",
        河北: "hebei",
        山西: "shanxi",
        辽宁: "liaoning",
        吉林: "jilin",
        黑龙江: "heilongjiang",
        江苏: "jiangsu",
        浙江: "zhejiang",
        安徽: "anhui",
        福建: "fujian",
        江西: "jiangxi",
        山东: "shandong",
        河南: "henan",
        湖北: "hubei",
        湖南: "hunan",
        广东: "guangdong",
        海南: "hainan",
        四川: "sichuan",
        贵州: "guizhou",
        云南: "yunnan",
        陕西: "shanxi1",
        甘肃: "gansu",
        青海: "qinghai",
        //5个自治区
        新疆: "xinjiang",
        广西: "guangxi",
        内蒙古: "neimenggu",
        宁夏: "ningxia",
        西藏: "xizang",
        //4个直辖市
        北京: "beijing",
        天津: "tianjin",
        上海: "shanghai",
        重庆: "chongqing",
        //2个特别行政区
        香港: "xianggang",
        澳门: "aomen"
    };

    let mapUrl = process.env.NODE_ENV === "production" ? "/map" : "/map";

    //直辖市和特别行政区-只有二级地图，没有三级地图
    var special = ["北京", "天津", "上海", "重庆", "香港", "澳门"];
    var mapdata = []; //地图数据
    /*重绘地图数据
     *@method restMap
     *@for chinaMap
     *@param{Array}chinaData 基本地图信息
     *@param{Object}data 地图坐标信息，包含经纬度范围值
     *@param{String}mapName 地图上省/市/县名字
     *@return void
     */
    function restMap(chinaData, data, mapName, isCity) {
        toolTipData.length = 0;
        var renderData = [];
        data.features.forEach(function(v, i) {
            // 地区名称
            var name = v.properties.name;
            //初始化value值
            let _v = "",
                _pid = "";
            // 地区经纬度 示例:[121.509062, 25.044332]
            geoCoordMap[name] = v.properties.cp;

            // chinaData数组如果顺序和china.json内的顺序不相符，寻找相同省份绑定该数据
            if (!isCity) {
                for (let j = 0; j < chinaData.length; j++) {
                    if (name === chinaData[j].name) {
                        //如果省份名字相同，返回该省份value绑定到mapdata并中断循环
                        _v = chinaData[j].value;
                        _pid = chinaData[j].id;
                        break;
                    }
                }
            } else {
                _v = Math.round(Math.random() * 1000);
            }

            // 添加地图数据
            renderData.push({
                name: name,
                value: _v,
                id: _pid
            });
            // 添加提示数据
            toolTipData.push({
                name: name,
                value: [
                    {
                        name: "终端数量",
                        value: _v
                    }
                ]
            });
        });
        echarts.registerMap(mapName, data); //根据返回坐标点绘制地图
        //绘制地图
        renderMap(mapName, renderData); //地图填充数据
    }

    // 获取初始中国地图数据
    function getChian() {
        clearTimeout(chianTime);
        clearTimeout(provincesTime);
        clearTimeout(cityTime);
        async function intervalGetProvince() {
            var d = [];
            let provinceList = await getProvinceList();
            provinceList.forEach(element => {
                let obj = {
                    name: "",
                    value: "",
                    id: ""
                };
                if (element.name != null) {
                    var cityName;
                    switch (element.name) {
                        case "新疆维吾尔自治区":
                            cityName = "新疆省";
                            break;
                        case "广西壮族自治区":
                            cityName = "广西省";
                            break;
                        case "内蒙古自治区":
                            cityName = "内蒙古省";
                            break;
                        case "宁夏回族自治区":
                            cityName = "宁夏省";
                            break;
                        case "西藏自治区":
                            cityName = "西藏省";
                            break;
                        default:
                            cityName = element.name;
                            break;
                    }
                    obj.name = cityName.substr(0, cityName.length - 1);
                    obj.value = element.value;
                    if (obj.value > 10000) {
                        return (obj.value / 10000).toFixed(2) + "万";
                    }
                    // obj.name = element.name;

                    obj.id = element.id;
                    d.push(obj);
                }
            });
            restMap(d, ChinaMapJson, "china");
            clearTimeout(chianTime);
            if (timeLoop && timeLoop()) {
                chianTime = setTimeout(async () => {
                    await intervalGetProvince();
                }, time);
            }
        }
        intervalGetProvince();
    }
    getChian();
    //地图点击事件
    var _data = ""; //调用接口时存储数据，后期联调需要注意返回数据问题
    var isClick = true; //防止重复点击
    chart.on("click", function(params) {
        clearTimeout(provincesTime);
        clearTimeout(chianTime);
        toolTipData.length = 0;
        if (isClick) {
            isClick = false; //关闭
            setTimeout(function() {
                isClick = true; //开启，具体毫秒数待测试
            }, 800);
            if (params.name in provinces) {
                //如果点击的是34个省、市、自治区，绘制选中地区的二级地图
                if (
                    params.name == "甘肃" ||
                    params.name == "内蒙古" ||
                    params.name == "黑龙江" ||
                    params.name == "广东" ||
                    params.name == "辽宁"
                ) {
                    _zoom = 0.7;
                } else if (
                    params.name == "海南" ||
                    params.name == "四川" ||
                    params.name == "新疆"
                ) {
                    _zoom = 0.9;
                }

                _data = params.name;
                var d = [];
                clearTimeout(provincesTime);

                async function intervalGetCity() {
                    // chianTime,provincesTime,cityTime;
                    var d = [];
                    console.log(params);
                    let cityList = await getCityList(params.data.id);
                    cityList.forEach(element => {
                        var arr = {
                            name: "",
                            value: "",
                            id: ""
                        };
                        arr.name = element.name;
                        arr.value = element.value;
                        arr.id = element.id;
                        d.push(arr);
                    });
                    restMap(d, ChinaMapJson, params.name, false);
                    if (timeLoop && timeLoop()) {
                        provincesTime = setTimeout(async () => {
                            await intervalGetCity();
                        }, time);
                    }
                }
                intervalGetCity();
            }
        } else if (params.seriesName in provinces) {
            //如果是【直辖市/特别行政区】只有二级下钻
            _zoom = 1.2;
            if (special.indexOf(params.seriesName) >= 0) {
                getChian();
            } else {
                //如果县区级内容不为空显示县区级地图
                if (cityMap[params.name] == undefined) {
                    //地图数据缺失，现阶段只发现海南存在此情况。重定向到469000，默认是去除海口、三亚、三沙以外所有海南省的县区
                    cityMap[params.name] = 469000;
                }
                if (params.name != "") {
                    clearTimeout(provincesTime);
                    clearTimeout(cityTime);
                    // eslint-disable-next-line no-inner-declarations
                    async function intervalGetTownList() {
                        let townList = await getTownList(params.data.id);
                        let d = [];
                        townList.forEach(element => {
                            var obj = {
                                name: "",
                                value: "",
                                id: ""
                            };
                            obj.name = element.name;
                            obj.value = element.value;
                            obj.id = element.id;
                            d.push(obj);
                        });
                        restMap(d, ChinaMapJson, params.name, false);
                        clearTimeout(cityTime);
                        if (timeLoop && timeLoop()) {
                            cityTime = setTimeout(async () => {
                                await intervalGetTownList();
                            }, time);
                        }
                    }

                    intervalGetTownList();
                } else {
                    // 渲染中国地图
                    getChian();
                    //renderMap('china', mapdata);
                }
            }
        } else {
            // 渲染中国地图
            _zoom = 1.2;
            getChian();
        }
    });
    //   转换为气泡使用数据
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            // 取得具体经纬度信息
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name, //市/县/区名字
                    value: geoCoord.concat(data[i].value) //市/县/区经纬度及具体数值
                });
            }
        }
        return res;
    };

    /*设置渲染数据
     *@method renderMap
     *@for chinaMap
     *@param{String}map 地图subtext提示内容
     *@param{Object}data 地图数据 示例: [{name: '北京',value: 123},{name: '上海',value: 456}]
     *@return void
     *renderMap所有配置项均来自echarts官网配置中心，不再一一备注
     */
    function renderMap(map, data) {
        let pinArr = []; //地图气泡展示数组
        //遍历传入的数据，如果value==0||==''，不进行pinArr.push
        data.forEach(element => {
            if (element.value !== 0 && element.value !== "") {
                pinArr.push(element);
            }
        });
        var topThree = pinArr.length;
        // if (pinArr.length > 3) {
        //     topThree = 3;
        // }
        var option = {
            tooltip: {
                trigger: "item",
                formatter: function(params) {
                    if (typeof params.value[2] == "undefined") {
                        var toolTiphtml = "";
                        for (var i = 0; i < toolTipData.length; i++) {
                            if (params.name == toolTipData[i].name) {
                                toolTiphtml += toolTipData[i].name + ":<br>";
                                for (
                                    var j = 0;
                                    j < toolTipData[i].value.length;
                                    j++
                                ) {
                                    toolTiphtml +=
                                        toolTipData[i].value[j].name +
                                        ":" +
                                        toolTipData[i].value[j].value +
                                        "<br>";
                                }
                            }
                        }
                        return toolTiphtml;
                    } else {
                        var toolTiphtml = "";
                        for (var i = 0; i < toolTipData.length; i++) {
                            if (params.name == toolTipData[i].name) {
                                toolTiphtml += toolTipData[i].name + ":<br>";
                                for (
                                    var j = 0;
                                    j < toolTipData[i].value.length;
                                    j++
                                ) {
                                    toolTiphtml +=
                                        toolTipData[i].value[j].name +
                                        ":" +
                                        toolTipData[i].value[j].value +
                                        "<br>";
                                }
                            }
                        }
                        return toolTiphtml;
                    }
                }
            },
            visualMap: {
                show: false,
                // min: 0,
                // max: 100,
                left: "left",
                top: "bottom",
                // text: ["高", "低"], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    color: ["#73D0DF", "#73D0DF"]
                }
                // pieces: [
                //     //自定义『分段式视觉映射组件（visualMapPiecewise）』的每一段的范围，以及每一段的文字，以及每一段的特别的样式
                //     {
                //         min: 100,
                //         color: "#3CE6C0"
                //     },
                //     {
                //         min: 1,
                //         //   lte: 99,
                //         // color: '#73D0DF'
                //         color: "#73D0DF"
                //     },
                //     {
                //         lte: 0,
                //         color: "#20334B"
                //     }
                // ]
            },
            toolbox: {
                //工具栏暂时不显示
                show: false,
                orient: "vertical",
                left: "right",
                top: "center",
                feature: {
                    dataView: {
                        readOnly: true
                    },
                    restore: {},
                    saveAsImage: {}
                },
                iconStyle: {
                    normal: {
                        color: "#fff"
                    }
                }
            },
            geo: {
                map: map,
                zoom: _zoom,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: "#fff",
                        borderColor: "#fff",
                        color: "#3CE6C0"
                    },
                    emphasis: {
                        areaColor: "#fff",
                        borderColor: "#fff"
                    }
                }
            },
            series: [
                {
                    //series数组下位置不可更换，会引起地图数据错误
                    name: "散点",
                    type: "scatter",
                    coordinateSystem: "geo",
                    data: convertData(data),
                    symbolSize: 0,
                    show: false,
                    label: {
                        normal: {
                            show: false,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        }
                    }
                },
                {
                    name: map,
                    type: "map",
                    mapType: map,
                    roam: false,
                    zoom: _zoom,
                    nameMap: {
                        china: "中国"
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: "#323c48",
                            borderColor: "#1aa1a9"
                        },
                        emphasis: {
                            areaColor: "#73D0DF"
                        }
                    },
                    data: data
                },
                {
                    name: "设备数量",
                    type: "scatter",
                    coordinateSystem: "geo",
                    legendHoverLink: false, //是否启用图例 hover 时的联动高亮。
                    hoverAnimation: false, //是否开启鼠标 hover 的提示动画效果。
                    effectType: "ripple", //特效类型，目前只支持涟漪特效'ripple'。
                    showEffectOn: "emphasis", //配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效
                    symbol: "pin", //气泡
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    symbolOffset: [0, "-10%"],
                    data: convertData(
                        data
                            .sort(function(a, b) {
                                //数组进行排序，后期可能要加前十名高亮
                                return b.value - a.value;
                            })
                            .slice(0, pinArr.length)
                    ), //服务端返回数据会出现value为空的情况，当value为0或者空的时候不进行气泡展示
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            },
                            formatter: function(params) {
                                return params.data.value[2];
                            }
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: "#fff",
                            color: "#294862" //标志颜色
                        }
                    },
                    zlevel: 6
                },
                {
                    name: "Top 3",
                    type: "scatter",
                    coordinateSystem: "geo",
                    legendHoverLink: false, //是否启用图例 hover 时的联动高亮。
                    hoverAnimation: false, //是否开启鼠标 hover 的提示动画效果。
                    effectType: "ripple", //特效类型，目前只支持涟漪特效'ripple'。
                    showEffectOn: "emphasis", //配置何时显示特效。可选：'render' 绘制完成后显示特效。'emphasis' 高亮（hover）的时候显示特效
                    symbol: "pin", //气泡
                    symbolSize: function(val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return a * val[2] + b;
                    },
                    symbolOffset: [0, "-10%"],
                    data: convertData(
                        data
                            .sort(function(a, b) {
                                return b.value - a.value;
                            })
                            .slice(0, topThree)
                    ),
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            },
                            formatter: function(params) {
                                return params.data.value[2];
                            }
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: "#fff",
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: "#fff",
                            color: "#73D0DF" //标志颜色
                        }
                    },
                    zlevel: 6
                }
            ]
        };
        //渲染地图
        chart.setOption(option);
    }
}
export default chinaMap;
