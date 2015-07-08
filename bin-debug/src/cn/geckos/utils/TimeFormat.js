/**
 * Created by tangben on 2015/7/8.
 */
/**
 * 毫秒转换工具
 * @author Kanon
 */
var cn;
(function (cn) {
    var geckos;
    (function (geckos) {
        var utils;
        (function (utils) {
            var TimeFormat = (function () {
                function TimeFormat() {
                }
                var __egretProto__ = TimeFormat.prototype;
                /**
                 * 秒数转换为时间形式。
                 * @param	time 秒数
                 * @param	partition 分隔符
                 * @param	showHour  是否显示小时
                 * @return  返回一个以分隔符分割的时, 分, 秒
                 *
                 * 比如: time = 4351; secondToTime(time)返回字符串01:12:31;
                 */
                TimeFormat.secondToTime = function (time, partition, showHour) {
                    if (time === void 0) { time = 0; }
                    if (partition === void 0) { partition = ":"; }
                    if (showHour === void 0) { showHour = true; }
                    var hours = Math.floor(time / 3600);
                    var minutes = Math.floor(time % 3600 / 60);
                    var seconds = Math.floor(time % 3600 % 60);
                    var h = hours.toString();
                    var m = minutes.toString();
                    var s = seconds.toString();
                    if (hours < 10)
                        h = "0" + h;
                    if (minutes < 10)
                        m = "0" + m;
                    if (seconds < 10)
                        s = "0" + s;
                    var timeStr;
                    if (showHour)
                        timeStr = h + partition + m + partition + s;
                    else
                        timeStr = m + partition + s;
                    return timeStr;
                };
                /**
                 * 时间形式转换为毫秒数。
                 * @param   time  以指定分隔符分割的时间字符串
                 * @param   partition  分隔符
                 * @param   strict  严谨模式（默认开启），如果给定时间格式不符合规范将抛出异常
                 * @return  毫秒数显示的字符串
                 * @throws  Error Exception
                 *
                 * 用法1 trace(MillisecondTransform.timeToMillisecond("00:60:00"))
                 * 输出   3600000
                 *
                 *
                 * 用法2 trace(MillisecondTransform.timeToMillisecond("00.60.00","."))
                 * 输出   3600000
                 */
                TimeFormat.timeToMillisecond = function (time, partition, strict) {
                    if (partition === void 0) { partition = ":"; }
                    if (strict === void 0) { strict = true; }
                    var _ary = time.split(partition);
                    var timeNum = 0;
                    var len = _ary.length;
                    for (var i = 0; i < len; i++) {
                        var n = _ary[i];
                        console.log("n " + n);
                        timeNum += n * Math.pow(60, (len - 1 - i));
                    }
                    timeNum *= 1000;
                    return timeNum.toString();
                };
                return TimeFormat;
            })();
            utils.TimeFormat = TimeFormat;
            TimeFormat.prototype.__class__ = "cn.geckos.utils.TimeFormat";
        })(utils = geckos.utils || (geckos.utils = {}));
    })(geckos = cn.geckos || (cn.geckos = {}));
})(cn || (cn = {}));
//# sourceMappingURL=TimeFormat.js.map