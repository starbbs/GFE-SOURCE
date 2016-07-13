/**
 * Created by gaoerjun on 16/7/13.
 */
define("mathtool",function(){
    /**
     * 向右移动小数点 ,相当于乘10的_pointcount次幂
     * @param _number 操作的数字
     * @param _pointcount 向右移动的位数
     * @returns 移动以后的数字(number类型)
     */
    var moveRight = function (_number, _pointcount) {
        if (Number(_number) !== Number(_number)) {
            return _number;
        }
        var numStr = _number.toString();
        var strArr = numStr.split(".");
        var rightStr = strArr.length>1?strArr[1]:"";
        //在不足移动的位数后补0;
        if (rightStr.length < _pointcount) {
            var addZero = [];
            for (var i = rightStr.length; i < _pointcount; i++) {
                addZero.push("0");
            }
            rightStr = rightStr + addZero.join("");
        }
        return Number(strArr[0] + rightStr.substring(0, _pointcount) + "." + rightStr.substr(_pointcount));
    }
    /**
     * 向左移动小数点,相当于_number除以10的_pointcount次幂
     * @param _number 操作的数字
     * @param _pointcount 向左移动的位数
     * @returns 移动以后的数字(number类型)
     */
    var moveLeft = function (_number, _pointcount) {
        //判断是否为数字,非数字直接返回本身
        if (Number(_number) !== Number(_number)) {
            return _number;
        }
        //number转换为string ,方便后续操作。
        var numStr = _number.toString();
        //按照小数点分隔字符串,
        var strArr = numStr.split(".");
        var num = 0, zeroArr = [];
        //生成移动位数+1的0 ,补到分隔后的第一个字符串中,兼容0.XXX的情况。开头多余的零会在调用Number方法时去掉。
        while (num < _pointcount + 1) {
            zeroArr.push("0");
            num++;
        }
        var leftStr = zeroArr.join("") + strArr[0];
        var leftArr = leftStr.split("")
        //插入移动后的小数点。
        leftArr.splice((leftStr.length - _pointcount), 0, '.');
        var result = leftArr.join("");
        //拼接原始值小数点后的数字
        if (strArr.length > 1) {
            result += strArr[1];
        }
        return Number(result);
    };
    /**
     * 加法
     * @param _num1
     * @param _num2
     * @param precision 精度
     * @returns {*}
     */
    var add = function (_num1, _num2, precision) {
        if (!precision) {
            precision = 2;
        }
        return moveLeft(moveRight(_num1, precision) + moveRight(_num2, precision), precision)
    }
    /**
     * 减法
     * @param minuend
     * @param reduction
     * @returns {*}
     */
    var reduce = function (minuend, reduction, precision) {
        if (!precision) {
            precision = 2;
        }
        return moveLeft(moveRight(minuend, precision) - moveRight(reduction, precision), precision)
    };
    /**
     * 乘法
     * @param _num1
     * @param _num2
     * @returns {number}
     */
    var multiplication = function (_num1, _num2, precision) {
        if (!precision) {
            precision = 2;
        }
        return moveLeft(moveRight(_num1, precision) * moveRight(_num2, precision), precision * 2)
    }

    /**
     * 除法
     * @param _num1 被除数
     * @param _num2 除数
     * @param precision 精度 整形,几位小数
     * @returns {number}
     */
    var division = function (_num1, _num2, precision) {
        if (!precision) {
            precision = 2;
        }
        return moveRight(_num1, precision) / moveRight(_num2, precision);
    }
    return {
        add: add,
        reduce: reduce,
        multiplication: multiplication,
        division: division
    };
})
