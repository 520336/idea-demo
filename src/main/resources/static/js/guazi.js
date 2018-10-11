//ie8 兼容 indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) from += len;
        for (; from < len; from++) {
            if (from in this && this[from] === elt) return from;
        }
        return -1;
    }
}

window.selfSupport = 1;

//window.loanTotal = parseInt(Math.random() * 100000);
window.loanTotal = false;

window.selectData = {
    work: [{"option": "\u4e8b\u4e1a\u5355\u4f4d", "value": 1}, {
        "option": "\u4e0a\u73ed\u65cf",
        "value": 2
    }, {"option": "\u4f01\u4e1a\u4e3b", "value": 3}, {
        "option": "\u4e2a\u4f53\u6237",
        "value": 4
    }, {"option": "\u65e0\u56fa\u5b9a\u804c\u4e1a", "value": 5}, {"option": "\u672a\u77e5", "value": 99}],
    house: [{"option": "\u79df\u623f", "value": 1}, {
        "option": "\u96c6\u4f53\u5bbf\u820d",
        "value": 2
    }, {"option": "\u4e0e\u4eb2\u621a\u5408\u4f4f", "value": 3}, {
        "option": "\u6709\u623f\u6709\u8d37\u6b3e",
        "value": 4
    }, {"option": "\u6709\u623f\u65e0\u8d37\u6b3e", "value": 5}, {"option": "\u672a\u77e5", "value": 99}],
    credit_record: [{"option": "\u4fe1\u7528\u826f\u597d", "value": 1}, {
        "option": "\u5c11\u6570\u903e\u671f",
        "value": 2
    }, {"option": "\u957f\u671f\u591a\u6b21\u903e\u671f", "value": 3}, {
        "option": "\u65e0\u4fe1\u7528\u8bb0\u5f55",
        "value": 4
    }, {"option": "\u672a\u77e5", "value": 99}]
};

window.partnerData = [
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/b7a8b73bba18fa4ae8fa62d1f7b612c5.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/df5708fb3ccb99e39b2ea9d694f98ea9.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/213b19c4a090b8ed59eb844bcdb285ae.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/44ef43fa3322546d9aa64628122353f0.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/5de60e1ab20e24d69fdcea29383261b9.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/c22f1549b7729554030f1cb3908ec430.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/59/9ddbdd4ddcae013de68f4099cb3e06ad.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/59/25b33602063eafa54f31e2e00109da80.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/59/6653c7ef663e009ef83fd24125e9cd29.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/5376e0b04615052f72cabbafb4c268c9.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/58/393d79deb245a7a121aeced5e731a496.png'
    },
    {
        pic: '//image.guazistatic.com/gz01160812/20/59/9b1a23ca966eb86722147a01379c0396.png'
    }
];

window.commissionerData = [];

var ipCityInfo = {
    "id": "12",
    "city_code": "0",
    "standard_code": "110000",
    "script_index": "0",
    "parent_id": "1",
    "name": "\u5317\u4eac",
    "domain": "bj",
    "database": "beijing",
    "pinyin": "beijing",
    "location": "b116.407413,39.904214",
    "region_id": "12",
    "type": "2",
    "hotline": "400-060-8024"
};
window.showCity = ipCityInfo['pinyin'];

window.loanNum = 48307;

window.verifyCodeUrl = "\/bj\/web_v3\/getLoginQRCode";

window.isSpringFestivel = 0;
//    window.isSpringFestivel = true;

window.mapData = {
    nanchang: {
        name: '南昌',
        left: 240,
        top: 182,
        loanBase: 1000
    },
    hefei: {
        name: '合肥',
        left: 240,
        top: 157,
        loanBase: 1500
    },
    fuzhou: {
        name: '福州',
        left: 256,
        top: 196
    },
    xiamen: {
        name: '厦门',
        left: 251,
        top: 209,
        loanBase: 1000
    },
    quanzhou: {
        name: '泉州',
        left: 255,
        top: 205
    },
    jiujiang: {
        name: '九江',
        left: 237,
        top: 174
    },
    ganzhou: {
        name: '赣州',
        left: 232,
        top: 194
    },
    wuhu: {
        name: '芜湖',
        left: 248,
        top: 163
    },
    guangzhou: {
        name: '广州',
        left: 221,
        top: 218,
        loanBase: 1000
    },
    foshan: {
        name: '佛山',
        left: 219,
        top: 222
    },
    shenzhen: {
        name: '深圳',
        left: 228,
        top: 222,
        loanBase: 1500
    },
    zhongshan: {
        name: '中山',
        left: 223,
        top: 224
    },
    dongguan: {
        name: '东莞',
        left: 226,
        top: 217
    },
    huizhou: {
        name: '惠州',
        left: 232,
        top: 219
    },
    nanning: {
        name: '南宁',
        left: 192,
        top: 222,
        loanBase: 1500
    },
    wuhan: {
        name: '武汉',
        left: 222,
        top: 170,
        loanBase: 1500
    },
    xiangyang: {
        name: '襄阳',
        left: 215,
        top: 159
    },
    changsha: {
        name: '长沙',
        left: 218,
        top: 186,
        loanBase: 1500
    },
    zhuzhou: {
        name: '株洲',
        left: 219,
        top: 191
    },
    haerbin: {
        name: '哈尔滨',
        left: 271,
        top: 48,
        loanBase: 1000
    },
    changchun: {
        name: '长春',
        left: 273,
        top: 64
    },
    shenyang: {
        name: '沈阳',
        left: 262,
        top: 85,
        loanBase: 1500
    },
    dalian: {
        name: '大连',
        left: 261,
        top: 101,
        loanBase: 1000
    },
    huhehaote: {
        name: '呼和浩特',
        left: 203,
        top: 97,
        loanBase: 1500
    },
    wulumuqi: {
        name: '乌鲁木齐',
        left: 55,
        top: 85
    },
    nanjing: {
        name: '南京',
        left: 250,
        top: 153,
        loanBase: 1000
    },
    suzhou: {
        name: '苏州',
        left: 263,
        top: 156,
        loanBase: 1000
    },
    xuzhou: {
        name: '徐州',
        left: 244,
        top: 139
    },
    wuxi: {
        name: '无锡',
        left: 258,
        top: 156,
        loanBase: 1000
    },
    nantong: {
        name: '南通',
        left: 259,
        top: 150
    },
    changzhou: {
        name: '常州',
        left: 255,
        top: 152
    },
    shanghai: {
        name: '上海',
        left: 268,
        top: 156,
        loanBase: 1500
    },
    hangzhou: {
        name: '杭州',
        left: 259,
        top: 165,
        loanBase: 1500
    },
    shaoxing: {
        name: '绍兴',
        left: 263,
        top: 169
    },
    jinan: {
        name: '济南',
        left: 237,
        top: 120,
        loanBase: 1000
    },
    qingdao: {
        name: '青岛',
        left: 254,
        top: 123,
        loanBase: 1500
    },
    yangtai: {
        name: '烟台',
        left: 257,
        top: 112
    },
    zibo: {
        name: '淄博',
        left: 242,
        top: 119
    },
    weifang: {
        name: '潍坊',
        left: 248,
        top: 121,
        loanBase: 1000
    },
    jining: {
        name: '济宁',
        left: 236,
        top: 128
    },
    linyi: {
        name: '临沂',
        left: 244,
        top: 130
    },
    weihai: {
        name: '威海',
        left: 262,
        top: 112
    },
    zhengzhou: {
        name: '郑州',
        left: 220,
        top: 139,
        loanBase: 1500
    },
    luoyang: {
        name: '洛阳',
        left: 214,
        top: 140
    },
    xinxiang: {
        name: '新乡',
        left: 219,
        top: 132
    },
    nanyang: {
        name: '南阳',
        left: 218,
        top: 149
    },
    xian: {
        name: '西安',
        left: 191,
        top: 142,
        loanBase: 1500
    },
    chengdu: {
        name: '成都',
        left: 166,
        top: 171,
        loanBase: 1500
    },
    mianyang: {
        name: '绵阳',
        left: 173,
        top: 166
    },
    chongqing: {
        name: '重庆',
        left: 181,
        top: 175,
        loanBase: 1500
    },
    wanzhou: {
        name: '万州',
        left: 187,
        top: 168
    },
    dazhou: {
        name: '达州',
        left: 183,
        top: 162
    },
    kunming: {
        name: '昆明',
        left: 158,
        top: 209,
        loanBase: 1000
    },
    taiyuan: {
        name: '太原',
        left: 210,
        top: 116
    },
    shijiazhuang: {
        name: '石家庄',
        left: 223,
        top: 113
    },
    baoding: {
        name: '保定',
        left: 226,
        top: 105
    },
    beijing: {
        name: '北京',
        left: 230,
        top: 96,
        loanBase: 1500

    },
    tianjin: {
        name: '天津',
        left: 236,
        top: 102
    },
    tangshan: {
        name: '唐山',
        left: 242,
        top: 101,
        loanBase: 1000
    }
};