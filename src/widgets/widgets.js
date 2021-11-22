const cities = {
    "臺北市":"Taipei",
    "新北市":"NewTaipei",
    "桃園市":"Taoyuan",
    "臺中市":"Taichung",
    "臺南市":"Tainan",
    "高雄市":"Kaohsiung",
    "基隆市":"Keelung",
    "新竹市":"Hsinchu",
    "新竹縣":"HsinchuCounty",
    "苗栗縣":"MiaoliCounty",
    "彰化縣":"ChanghuaCounty",
    "南投縣":"NantouCounty",
    "雲林縣":"YunlinCounty",
    "嘉義縣":"ChiayiCounty",
    "嘉義市":"Chiayi",
    "屏東縣":"PingtungCounty",
    "宜蘭縣":"YilanCounty",
    "花蓮縣":"HualienCounty",
    "臺東縣":"TaitungCounty",
    "金門縣":"KinmenCounty",
    "澎湖縣":"PenghuCounty",
    "連江縣":"LienchiangCounty"
};

function debounce (func, timeout=300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const searchHolders = {
    'routes': "請輸入欲查詢公車",
    'stops':  "請輸入欲查詢站牌名",
    'select': '縣市',
} 

export { cities, debounce, searchHolders };