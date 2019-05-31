module.exports = function main(inputStr) {

	return output_lcd(inputStr);
};

function output_lcd(inputStr) {
	var numSign = {
		'0' : ['._.', '|.|', '|_|'],
	    '1' : ['...', '..|', '..|'],
	    '2' : ['._.', '._|', '|_.'],
	    '3' : ['._.', '._|', '._|'],
	    '4' : ['...', '|_|', '..|'],
	    '5' : ['._.', '|_.', '._|'],
	    '6' : ['._.', '|_.', '|_|'],
	    '7' : ['._.', '..|', '..|'],
	    '8' : ['._.', '|_|', '|_|'],
	    '9' : ['._.', '|_|', '..|']
	};

    const LINE = 3;    // 分三行扫描输出
    var outputStr = "";
    var len = inputStr.length;

    for (var i = 0; i < LINE; i++) {     
        for (var j = 0; j < len; j++) {
            outputStr += numSign[inputStr[j]][i];
            if (j !== len - 1) {    // 每行最后一个符号不加空格符，其余均加空格符
				outputStr += " ";
            }
        }
        outputStr += "\n";
    }
	return outputStr;
}