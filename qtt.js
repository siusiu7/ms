// 赞赏:趣头条邀请码`A1040276307`,农妇山泉 -> 有点咸
const cookieName = '趣头条'
const signKey = 'senku_signKey_qtt'
const signXTKKey = 'senku_signXTK_qtt'
const readKey = 'senku_readKey_qtt'
const navCoinKey = 'senku_navCoinKey_qtt'
const senku = init()
const signVal = senku.getdata(&token=721d79nIHk-Gpwn6Z0PI7PB803cjBA2k7m-nYPryw3OeWIERjC4GgLDyOSkQS6YTrWA7ucbyY7GplMzZxtQ&uuid=3C3034CE-8047-42FB-B0D9-971B049C6FDD)
const signXTKVal = senku.getdata(ACJLvvQTw_9IWqSM11MyWg-hgATBtG6XsZU0NzUxNDk1MDg5NTIyNQ)
const readVal = senku.getdata(https://api.1sapp.com/content/readV2?qdata=MjJBOUU5QzE1QjcwMDI4ODM2MzhBM0M1NjBEMkFBNUIuY0dGeVlXMGZORGMxTVRRNU5UQTRPVFV5TWpWOE1VUkJRVEpDT1RNdE5FWkJOeTAwTVRKRUxVSTJPRGt0UmpsQk5ETTVOVEUyTlRGRkhuWmxjbk5wYjI0Zk5oNXdiR0YwWm05eWJSOXBiM01lWldNZk1RPT0uWnXAgr1Zcj0uFeToVaLEM%2BFRFY242kuCKxmWV5eoS%2Bgjtbh8bTuWLKW%2BeQL%2B5OCpEEWjjk6wFYcyV9wzH%2Bl45Yaon9W0K7J5hzew/5Tnsu3ZQ3yD47AgglFk8IMatuEaY%2B7SDJ/3PwYDYak%2B%2Bs10UV25V7JfUeEkH3ZG2/QBfQZU10TSvTr%2BBZoipYL0zGnTfh28hZ8AsmNlTfPol%2BiA7JvCplzIcV1BT84nl7OamCw%2BWXm%2BLCWFIopOkNg8c7FwpgbDImogi6GvILRmkDCZpVVnkyR0O6tGBj/slgldXsyu9D9bjQR6g4rfCJ77YS7NdvhfeDNhCcoMd0w/m%2Bp28pHRgOtNuPwwtNiCCakVOrfCQr2bIeC1omcyVQ7L/LOLJFHCIna7djTVYsfN4KMZ8gxfoZu%2BBtnznHs2KqCN0gYOE3YpJLfc2GRIdSU9I1HYJwHhRP4eL51uB4v0bmi%2BoWFdmP3sbFY7ICYWaBjNTUcbDdXR/117hOyvgUCWm5itoEkq57sX/1xNbubk6TvYfj98tlD/RT3vewzEZXmTPQ%2BzwH8Ug4ZXtwykK5gaO2NIq7nprY6yhoBPOU0zKPyEwaqJ%2BeBXTwxNXl4PZuUL/3feBuHnP6M8CB0Etw7FYqXYaTcEay52wN8p0gvF1YNRoilUVaQfJ%2BBn4hnxI4NabeJFGV45OIKiZ7YUQCqzy1j%2BNYQmmrmHp50VaMnpMcZbN0gPe2TFf3NtmMy7kNXF8AouMqCNwf/RIGC4B9c%2BVvyjf7XQxwI4KZpSHLP5lCEcaYKGY4%2BdcJqEyu%2BR76pirqc%2B/787QEiClfTdAhffmsYV7Ejvz4pbCSON/ujlIYsUzXIAVwwTP86sGPk1YrSzJ/2c0AKOijDIxdbrk8VhinV7VcT/ezrYyap7dTEoz68al3qpGqZZ38j61zx6EN9efU09hOXxcv6cl%2BlgmNoPkNmjxYTorg3QTAhyg93Y42yvocK4A%2B3Qn6e4Y4/adtGualLwA3IBShMV/XankkLU4Vicbhfg5g33XUjqRbptgdgFtqJawEkAiJvSvHlTeyAyOSETqQNvtOyzfp3dte0DFHUUzkWKPbwvihO16NJYb%2BpwG8jAzWItSylF4ZzPj0pIGLXRQq9ogRJyJo6xZa348MXyq52QtEcjSbLX44lXyQtlPOg74vFiDqyw9stTfcBqpw9DvqeldktIIBo7UIuy//X8jskV7QMPBR90A2m36KrnVkJAK72FM535Mn1thCzTXmWOybpB7vGbc%2BjUloAlJytXMEIrQgInCp%2BUYDc3f8kMKkAH/oMVu07PBFLRrldfiI0kcOBaWOKjM0gzvaWnJHl4SCKrNtIFAiKbNH8W%2BXoSgMoSjMz6MU4N18g4n/0WMI7WzvSDHo/Tc16MA2e7z1uJEjm6hhTHluYIkcYD0jeJiMta8Mmbdow05HafbMLDz6mBuf8F9NeHoooriFdyFOWAupKkcyMQWNtj%2Bo%2BAR3I%2BXdQzeu/RAvcmECsqL0kMYXwIcBuv5CEqM5wH8H0i%2Bp7ioLloOt5W6HWxccPXwmgK9h%2BZqIoLZMUrwVeRqRAYs8C%2B4e7BPRHeSno5c%2BApZpepF4POU3zMW3exUgSjRhqjBQYa4OGeUTNp51uS9MEa3f%2BV6kY3oXE77OaqvSqPckKVTiXS1BRL2KpJI3f2WPx1bNAYnrRvD1TvW6X7SQ5VKz8pxG1siXj9XDjMO92ay8VcszmRFfSGuz49I8EXcFnAq1C9oZtLZZ632seqBZH2Ee9xoMM8kpxHUC1BGXXOZ%2B/gqE%2Bk)
const navCoinVal = senku.getdata(navCoinKey)
const vsign = 'version=30967000&xhi=200' + signVal
const signurlVal = 'https://api.1sapp.com/sign/sign?' + vsign
const adUrl = 'https://api.1sapp.com/sign/adDone?' + vsign
const getinfoUrlVal = 'https://api.1sapp.com/sign/info?' + vsign
const hourUrlVal = 'https://api.1sapp.com/mission/intPointReward?' + vsign
const coinUrlVal = 'https://api.1sapp.com/app/ioscoin/getInfo?' + vsign
const readReawardVal = 'https://api.1sapp.com/app/ioscoin/readReward?type=content_config&' + vsign
const sleepUrlVal = 'https://mvp-sleeper.qutoutiao.net/v1/sleep/update?status=1&' + vsign
const sleepRewardVal = 'https://mvp-sleeper.qutoutiao.net/v1/reward?which=2&' + vsign
const sleepBagVal = 'https://mvp-sleeper.qutoutiao.net/v1/reward?which=3&' + vsign
const sleepStatusVal = 'https://mvp-sleeper.qutoutiao.net/v1/sleep/status?' + vsign
const luckyUrlVal = 'https://qtt-turntable.qutoutiao.net/press_trigger?' + vsign
const luckyRewardVal = 'https://qtt-turntable.qutoutiao.net/extra_reward?' + vsign
const raindropVal = 'https://work-for-coin.1sapp.com/raindrop/v1/click?sub_id=2&type=2&scene_id=2&' + vsign
const loginVal = 'https://api.1sapp.com/app/user/info/member/v1/get?' + vsign
const sleepNightVal = 'https://cj-activity.1sapp.com/v1/zfb/sleep/coin?from=pm&' + vsign
const sleepMorningVal = 'https://cj-activity.1sapp.com/v1/zfb/sleep/coin?from=am&' + vsign
const sleepinitVal = 'https://api.1sapp.com/dlc/ali/zfbSleepInit?' + vsign
const signinfo = {
  playList: [],
  luckyList: [],
  rainList: []
}

;
(sign = async () => {
  senku.log(`🔔 ${cookieName}`)
  await login()
  if (navCoinVal != undefined && navCoinVal.match(/\/x\/feed\/getReward\?qdata=[a-zA-Z0-9_-]+/)) {
    await navCoin()
  }
  if (readVal != undefined && readVal.match(/\/content\/readV2\?qdata=[a-zA-Z0-9_-]+/)) {
    await read()
    await getcoininfo()
    await getreadReward()
  }
  if (new Date().getHours() == 20 || new Date().getHours() == 12) {
    await sleepStatus()
    await sleepReward()
    await sleep()
    if (signinfo.sleepStatus.data.fortune_bag_can_reward) {
      await sleepBag()
    }
  }
  if (new Date().getHours() >= 20) {
    await sleepinit()
    await sleepNight()
  }
  if (new Date().getHours() >= 5 && new Date().getHours() <= 9) {
    await sleepinit()
    await sleepMorning()
  }
  if (new Date().getHours() == 8 || new Date().getHours() == 14) {
    await sleepReward()
  }
  await rain(0)
  await rain(1)
  await rain(2)
  if (new Date().getDay() == 5) {
    await luckyReward(3)
    await luckyReward(8)
    await luckyReward(15)
    await luckyReward(20)
    await luckyReward(30)
  }
  await signDay()
  await signHour()
  await signLucky()
  await playone()
  await playtwo()
  await playthree()
  await playfour()
  await getinfo()
  showmsg()
  senku.done()
})().catch((e) => senku.log(`❌ ${cookieName} 签到失败: ${e}`), senku.done())

// 每日登录
function login() {
  return new Promise((resolve, reject) => {
    const url = {
      url: loginVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} login- response: ${JSON.stringify(response)}`)
        signinfo.login = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `登录结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} signDay - 登录失败: ${e}`)
        senku.log(`❌ ${cookieName} signDay - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 
function sleepinit() {
  return new Promise((resolve, reject) => {
    const url = {
      url: sleepinitVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        resolve()
      } catch (e) {
        senku.msg(cookieName, `睡觉初始化结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} sleepinit - 睡觉初始化失败: ${e}`)
        senku.log(`❌ ${cookieName} sleepinit - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}
// 睡觉
function sleep() {
  return new Promise((resolve, reject) => {
    const url = {
      url: sleepUrlVal,
      headers: {
        'Host': 'mvp-sleeper.qutoutiao.net',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} sleep - response: ${JSON.stringify(response)}`)
        signinfo.sleep = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `睡觉结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} sleep - 睡觉失败: ${e}`)
        senku.log(`❌ ${cookieName} sleep - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}
// 早睡
function sleepNight() {
  return new Promise((resolve, reject) => {
    const url = {
      url: sleepNightVal,
      headers: {
        'Host': 'cj-activity.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} sleepNight - response: ${JSON.stringify(response)}`)
        signinfo.sleepNight = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `早睡结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} sleepNight - 早睡失败: ${e}`)
        senku.log(`❌ ${cookieName} sleepNight - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}
// 早起
function sleepMorning() {
  return new Promise((resolve, reject) => {
    const url = {
      url: sleepMorningVal,
      headers: {
        'Host': 'cj-activity.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} sleepMorning - response: ${JSON.stringify(response)}`)
        signinfo.sleepMorning = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `早起结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} sleepMorning - 早起失败: ${e}`)
        senku.log(`❌ ${cookieName} sleepMorning - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}
// 睡觉金币
function sleepReward() {
  return new Promise((resolve, reject) => {
    const url = {
      url: sleepRewardVal,
      headers: {
        'Host': 'mvp-sleeper.qutoutiao.net',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} sleepReward - response: ${JSON.stringify(response)}`)
        signinfo.sleepReward = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `睡觉结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} sleepReward - 睡觉失败: ${e}`)
        senku.log(`❌ ${cookieName} sleepReward - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 睡觉福袋
function sleepBag() {
  return new Promise((resolve, reject) => {
    const url = {
      url: sleepBagVal,
      headers: {
        'Host': 'mvp-sleeper.qutoutiao.net',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} sleepBag - response: ${JSON.stringify(response)}`)
        signinfo.sleepBag = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `睡觉福袋: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} sleepBag - 睡觉福袋: ${e}`)
        senku.log(`❌ ${cookieName} sleepBag - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 睡觉信息
function sleepStatus() {
  return new Promise((resolve, reject) => {
    const url = {
      url: sleepStatusVal,
      headers: {
        'Host': 'mvp-sleeper.qutoutiao.net',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} sleepStatus - response: ${JSON.stringify(response)}`)
        signinfo.sleepStatus = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `睡觉信息: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} sleepStatus - 睡觉信息: ${e}`)
        senku.log(`❌ ${cookieName} sleepStatus - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 雨滴金币
function rain(seri_num) {
  return new Promise((resolve, reject) => {
    const raindropUrl = raindropVal + '&serial_number=' + seri_num
    const url = {
      url: raindropUrl,
      headers: {
        'Host': 'work-for-coin.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} rain - response: ${JSON.stringify(response)}`)
        signinfo.rainList.push(JSON.parse(data))
        resolve()
      } catch (e) {
        senku.msg(cookieName, `雨滴结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} rain - 雨滴失败: ${e}`)
        senku.log(`❌ ${cookieName} rain - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 每日签到
function signDay() {
  return new Promise((resolve, reject) => {
    const url = {
      url: signurlVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} signDay - response: ${JSON.stringify(response)}`)
        signinfo.signDay = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} signDay - 签到失败: ${e}`)
        senku.log(`❌ ${cookieName} signDay - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 首页奖励
function navCoin() {
  return new Promise((resolve, reject) => {
    const url = {
      url: navCoinVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} navCoin - response: ${JSON.stringify(response)}`)
        signinfo.navCoin = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `首页奖励: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} navCoin - 首页奖励失败: ${e}`)
        senku.log(`❌ ${cookieName} navCoin - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}
// 阅读部分
function read() {
  return new Promise((resolve, reject) => {
    const url = {
      url: readVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} read - response: ${JSON.stringify(response)}`)
        signinfo.read = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `阅读结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} read - 阅读失败: ${e}`)
        senku.log(`❌ ${cookieName} read - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 获取阅读奖励
function getreadReward() {
  return new Promise((resolve, reject) => {
    try {
      if (signinfo.coininfo.data) {
        const read_num = signinfo.coininfo.data.read_num
        if (read_num < 5 && read_num >= 1) {
          resolve(readReward(1))
        } else if (read_num < 15 && read_num >= 5) {
          resolve(readReward(5))
        } else if (read_num < 18 && read_num >= 15) {
          resolve(readReward(15))
        } else if (read_num == 18) {
          resolve(readReward(18))
        } else resolve()
      }
    } catch (e) {
      senku.msg(cookieName, `获取阅读奖励: 失败`, `说明: ${e}`)
      senku.log(`❌ ${cookieName} getreadReward - 获取阅读奖励失败: ${e}`)
      resolve()
    }
  })
}

// 阅读奖励请求
function readReward(reward_id) {
  return new Promise((resolve, reject) => {
    const readRewardUrl = readReawardVal + '&reward_id=' + reward_id
    const url = {
      url: readRewardUrl,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} readReward - response: ${JSON.stringify(response)}`)
        signinfo.readReward = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `阅读奖励请求: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} readReward - 阅读奖励请求失败: ${e}`)
        senku.log(`❌ ${cookieName} readReward - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 获取阅读信息
function getcoininfo() {
  return new Promise((resolve, reject) => {
    const url = {
      url: coinUrlVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} getcoininfo - response: ${JSON.stringify(response)}`)
        signinfo.coininfo = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} getcoininfo - 签到失败: ${e}`)
        senku.log(`❌ ${cookieName} getcoininfo - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// FIXME: 时段请求偶尔丢失或伪请求
function signHour() {
  return new Promise((resolve, reject) => {
    const url = {
      url: hourUrlVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} signHour - response: ${JSON.stringify(response)}`)
        signinfo.signHour = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `时段签到结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} signHour - 时段签到失败: ${e}`)
        senku.log(`❌ ${cookieName} signHour - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function signLucky() {
  return new Promise((resolve, reject) => {
    const url = {
      url: luckyUrlVal,
      headers: {
        'Host': 'qtt-turntable.qutoutiao.net',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} signLucky - response: ${JSON.stringify(response)}`)
        signinfo.signLucky = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `幸运转盘: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} signLucky - 幸运转盘失败: ${e}`)
        senku.log(`❌ ${cookieName} signLucky - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 幸运转盘额外奖励
function luckyReward(times) {
  return new Promise((resolve, reject) => {
    const luckyRewardUrl = luckyRewardVal + '&times=' + times
    const url = {
      url: luckyRewardUrl,
      headers: {
        'Host': 'qtt-turntable.qutoutiao.net',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} luckyReward - response: ${JSON.stringify(response)}`)
        signinfo.luckyList.push(JSON.parse(data))
        resolve()
      } catch (e) {
        senku.msg(cookieName, `转盘额外奖励请求: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} luckyReward - 转盘额外奖励请求失败: ${e}`)
        senku.log(`❌ ${cookieName} luckyReward - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

// 获取签到信息
function getinfo() {
  return new Promise((resolve, reject) => {
    const url = {
      url: getinfoUrlVal,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} getinfo - response: ${JSON.stringify(response)}`)
        signinfo.info = JSON.parse(data)
        resolve()
      } catch (e) {
        senku.msg(cookieName, `获取信息: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} getinfo - 获取信息失败: ${e}`)
        senku.log(`❌ ${cookieName} getinfo - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}


// 视频广告部分
function playone() {
  return new Promise((resolve, reject) => {
    const urlParameter = 'https://api.1sapp.com/sign/adDone?version=30967000&xhi=200&pos=one' + signVal
    const url = {
      url: urlParameter,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit / 605.1.15(KHTML, like Gecko) Mobile / 15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        signinfo.playList.push(JSON.parse(data))
        resolve()
      } catch (e) {
        senku.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} playAd - 签到失败: ${e}`)
        senku.log(`❌ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function playtwo() {
  return new Promise((resolve, reject) => {
    const urlParameter = 'https://api.1sapp.com/sign/adDone?version=30967000&xhi=200&pos=two' + signVal
    const url = {
      url: urlParameter,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit / 605.1.15(KHTML, like Gecko) Mobile / 15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        signinfo.playList.push(JSON.parse(data))
        resolve()
      } catch (e) {
        senku.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} playAd - 签到失败: ${e}`)
        senku.log(`❌ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function playthree() {
  return new Promise((resolve, reject) => {
    const urlParameter = 'https://api.1sapp.com/sign/adDone?version=30967000&xhi=200&pos=three' + signVal
    const url = {
      url: urlParameter,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit / 605.1.15(KHTML, like Gecko) Mobile / 15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        signinfo.playList.push(JSON.parse(data))
        resolve()
      } catch (e) {
        senku.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} playAd - 签到失败: ${e}`)
        senku.log(`❌ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}

function playfour() {
  return new Promise((resolve, reject) => {
    const urlParameter = 'https://api.1sapp.com/sign/adDone?version=30967000&xhi=200&pos=four' + signVal
    const url = {
      url: urlParameter,
      headers: {
        'Host': 'api.1sapp.com',
        'X-Tk': signXTKVal
      }
    }
    url.headers['User-Agent'] = 'Mozilla / 5.0(iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit / 605.1.15(KHTML, like Gecko) Mobile / 15E148'
    senku.get(url, (error, response, data) => {
      try {
        senku.log(`❕ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        signinfo.playList.push(JSON.parse(data))
        resolve()
      } catch (e) {
        senku.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        senku.log(`❌ ${cookieName} playAd - 签到失败: ${e}`)
        senku.log(`❌ ${cookieName} playAd - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}


// 将时间戳格式化
function tTime(timestamp) {
  const date = new Date(timestamp * 1000)
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = (date.getDate() + 1 < 10 ? '0' + date.getDate() : date.getDate()) + ' '
  const h = date.getHours() + ':'
  const m = (date.getMinutes() + 1 < 10 ? '0' + (date.getMinutes() + 1) : date.getMinutes() + 1) + ''
  return M + D + h + m
}

// 通知信息部分
function showmsg() {
  let subTitle = ``
  let detail = ``
  const name = signinfo.login.data.nickname ? signinfo.login.data.nickname : `未设置昵称或Cookie失效`
  // signDayMsg
  if (signinfo.info && signinfo.info.data.signIn.today == 1) {
    if (signinfo.signDay.code == 0) {
      subTitle += subTitle == `` ? `` : ` `
      const continuation = signinfo.info.data.signIn.continuation
      const amount = signinfo.info.data.signIn.amount
      const currentCoin = amount[continuation]
      const nextCoin = amount[continuation + 1]
      const coins = signinfo.info.data.show_balance_info.coins
      subTitle += `每日:成功`
      detail += `【每日签到】获得${currentCoin}💰,明日可得${nextCoin}💰\n`
    } else subTitle += ``
  } else {
    subTitle += `每日:失败`
    senku.log(`❌ ${cookieName} showmsg - 每日签到: ${JSON.stringify(signinfo.signDay)}`)
  }

  // signHourMsg
  subTitle += subTitle == `` ? `` : ` `
  if (signinfo.signHour && signinfo.signHour.code == 0) {
    subTitle += '时段:成功'
    const amount = signinfo.signHour.data.amount
    const next_time = tTime(signinfo.signHour.data.next_time)
    detail += `【时段签到】获得${amount}💰,下次签到:${next_time}\n`
  } else subTitle += `时段:时间未到`

  // readMsg
  if (signinfo.read && signinfo.read.data.status_code == 0) {
    if (signinfo.coininfo.data) {
      const desc = signinfo.coininfo.data.content_config.desc
      if (signinfo.readReward != undefined && signinfo.readReward.code == 0) {
        detail += `【阅读详情】${desc},奖励:成功\n`
      } else if (signinfo.readReward != undefined && signinfo.readReward.code == -113) {
        signinfo.coininfo.data.read_num == 18 ? detail += `` : detail += `【阅读详情】${desc},已获取阶段奖励\n`

      } else detail += `【阅读详情】${desc},手动获取金币\n`
    }
  } else detail += `【阅读详情】失败\n`

  // sleepMsg
  if (signinfo.sleep && signinfo.sleep.data.success) {
    detail += `【睡觉结果】已开始睡觉\n`
  } else if (signinfo.sleepReward && signinfo.sleepReward.data) {
    if (signinfo.sleepReward.data.success) {
      const coins = signinfo.sleepReward.data.coins
      coins == 0 ? detail += `` : detail += `【睡觉金币】获得${coins}💰\n`
    } else {
      detail += `【睡觉金币】金币获取失败\n`
    }
  } else if (signinfo.sleep == undefined) {
    detail += ``
    // sleepBagMsg
  } else if (signinfo.sleepBag && signinfo.sleepBag.code == 0) {
    const coins = signinfo.sleepBag.data.coins
    coins == 0 ? detail += `` : detail += `【睡觉福袋】获得${signinfo.sleepBag.data.coins}💰\n`
  } else {
    detail += `【睡觉结果】失败\n`
  }
  // 早睡
  if (signinfo.sleepNight && signinfo.sleepNight.code == 0) {
    if (signinfo.sleepNight.data && signinfo.sleepNight.data.coin) {
      const coin = signinfo.sleepNight.data.coin
      coin == 0 ? detail += `` : detail += `【早睡结果】获得${coin}💰\n`
    }
  }
  // 早起
  if (signinfo.sleepMorning && signinfo.sleepMorning.code == 0) {
    if (signinfo.sleepMorning.data && signinfo.sleepMorning.data.coin) {
      const coin = signinfo.sleepMorning.data.coin
      coin == 0 ? detail += `` : detail += `【早起结果】获得${coin}💰\n`
    }
  }

  // rainDropMsg
  if (signinfo.rainList) {
    for (const rains of signinfo.rainList) {
      87
      rains.code == 0 ? detail += `【金币雨滴】成功\n` : detail += ``
    }
  } else {
    detail += `【金币雨滴】失败\n`
  }

  // navCoinMsg
  if (signinfo.navCoin && signinfo.navCoin.code == 0) {
    if (signinfo.coininfo.data) {
      const cur_amount = signinfo.navCoin.data.cur_amount
      const total_times = signinfo.navCoin.data.total_times
      const done_times = signinfo.navCoin.data.done_times
      done_times == 15 ? detail += `` : detail += `【首页奖励】${cur_amount} 💰, 完成${done_times} /${total_times}\n`
    }
  } else if (signinfo.navCoin && signinfo.navCoin.code == -308) {
    detail += `【首页奖励】时间未到\n`
  } else if (signinfo.navCoin && signinfo.navCoin.code == -2) {
    detail += `【首页奖励】Cookie失效\n`
  } else detail += `【首页奖励】失败或Cookie不存在\n`

  // signLuckyMsg
  subTitle += subTitle == '' ? '' : ' '
  if (signinfo.signLucky && signinfo.signLucky.code == 1) {
    subTitle += `幸运转盘:成功`
    const amount_coin = signinfo.signLucky.amount_coin
    const count = signinfo.signLucky.count
    const count_limit = signinfo.signLucky.count_limit
    detail += `【幸运转盘】获得${amount_coin},抽奖情况:${count}/${count_limit}次\n`
  } else subTitle += ``

  // luckyExtraMsg
  if (signinfo.luckyList) {
    const times = [3, 8, 15, 20, 30]
    let i = 0
    for (const extra of signinfo.luckyList) {
      if (extra.code == 0) {
        detail += `【转盘额外】次数:${times[i]} 获得${extra.reward_coin}💰\n`
      } else if (extra.code == -2) {
        detail += `【转盘额外】次数:${times[i]} 重复领取\n`
      } else if (extra.code == -1) {
        detail += `【转盘额外】次数:${times[i]} 当前次数未达到\n`
      } else detail += `【转盘额外】未知错误\n`
      i += 1
    }
  } else detail += `【转盘额外】失败`

  // playAdsMsg
  subTitle += subTitle == '' ? '' : ' '
  if (signinfo.playList) {
    if (signinfo.playList[0].code == 0) {
      const icon = signinfo.info.data.signIn.ext_ad.icon
      const coins = signinfo.info.data.show_balance_info.coins
      const continuation = signinfo.info.data.signIn.continuation
      for (const poss of icon) {
        if (poss.next_time > 0) {
          const time = tTime(poss.next_time)
          detail += `【视频广告】下次🕥${time} 可获得${poss.amount}💰\n`
        }
      }
      detail += `【账户详情】共计:${coins}💰,连续签到${continuation}天`
    } else if (signinfo.playList[0].code == -126) subTitle += `广告:权限错误`
  } else subTitle += `广告:失败`

  senku.msg(cookieName + ` 用户:${name}`, subTitle, detail)
  senku.done()
}


function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return {
    isSurge,
    isQuanX,
    msg,
    log,
    getdata,
    setdata,
    get,
    post,
    done
  }
}
