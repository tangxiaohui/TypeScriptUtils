/**
 * Created by tangben on 2015/7/6.
 */
var TestString = (function () {
    function TestString() {
        console.log("trim():" + cn.geckos.utils.StringUtil.trim("   kanon tan g   "));
        //console.log("showUnicodeStr():" + cn.geckos.utils.StringUtil.showUnicodeStr("k"));
        console.log("matchChineseWord():" + cn.geckos.utils.StringUtil.matchChineseWord("k卡能tang"));
        var str = "kanon is aaa";
        console.log("matchChineseWord():" + cn.geckos.utils.StringUtil.replaceMatch(str, "aaa", "good", true));
        str = "<title>HelloWorld</title>";
        console.log("htmlSpecialChars():" + cn.geckos.utils.StringUtil.htmlSpecialChars(str));
        console.log("zfill():" + cn.geckos.utils.StringUtil.zfill('16', 5));
        console.log("reverse():" + cn.geckos.utils.StringUtil.reverse("kanon"));
        console.log("cutOff():" + cn.geckos.utils.StringUtil.cutOff("kanon is a good man", 5, 9));
    }
    var __egretProto__ = TestString.prototype;
    return TestString;
})();
TestString.prototype.__class__ = "TestString";
//# sourceMappingURL=TestString.js.map