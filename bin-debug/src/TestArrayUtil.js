/**
 * Created by tangben on 2015/7/6.
 */
var TestArrayUtil = (function () {
    function TestArrayUtil() {
        var arr = ["kanon", "tang", "1109", "aaaa"];
        console.log("findElementIndex: " + cn.geckos.utils.ArrayUtil.findElementIndex(arr, "1109"));
        var arr2 = [2, 5, 8, 1, 4, 6, 9, 21, 3, 35, 8, 64, 3];
        console.log("getMaxElementIndex: " + cn.geckos.utils.ArrayUtil.getMaxElementIndex(arr2));
        console.log("getMinElementIndex: " + cn.geckos.utils.ArrayUtil.getMinElementIndex(arr2));
        console.log("getUniqueAry: " + cn.geckos.utils.ArrayUtil.getUniqueAry([6, 3, 1, 10, 2, 2, 3, 7, 4]));
        var arr3 = [1, 1, 2, 3, 3, 4, 5, 6, 6, 7];
        var arr4 = [3, 23, 12, 3, 3, 14, 5, 16, 6, 7];
        console.log("getDifferAry: " + cn.geckos.utils.ArrayUtil.getDifferAry(arr3, arr4));
    }
    var __egretProto__ = TestArrayUtil.prototype;
    return TestArrayUtil;
})();
TestArrayUtil.prototype.__class__ = "TestArrayUtil";
