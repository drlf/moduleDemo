
��UglifyJS����/ѹ��/��ʽ�����Javascript
http://www.csser.com/board/4f3f516e38a5ebc978000509
UglifyJS�ǻ��� NodeJS ��Javascript�﷨����/ѹ��/��ʽ�����ߣ���֧���κ�CommonJSģ��ϵͳ��Javascriptƽ̨��ʵ���Լ���CommonJSƽ̨Ҳ�����£��� UglifyJSͨ��������������JS������﷨���������ͨ��AST���˽�����������������Լ�����һ����ͬ��ʵ�֡�UglifyJS���������� parse-js.js ��ʵ�ֵģ����Ƿǳ������ pars

��װ
npm install uglify-js


ʹ�ô��뷽ʽ
Ҫ����Javascript��ʹ��UglifyJS��⣬�ο������ʾ������NodeJSΪ������

var jsp = require("uglify-js").parser;
var pro = require("uglify-js").uglify;

var orig_code = "Javascript����";
var ast = jsp.parse(orig_code); // �������뷵�س�ʼ��AST
ast = pro.ast_mangle(ast); // ��ȡ�������ƴ��ҵ�AST
ast = pro.ast_squeeze(ast); // ��ȡ����ѹ���Ż���AST
var final_code = pro.gen_code(ast); // ѹ����Ĵ���

�����з�ʽʹ��
glifyJS�ṩ�������й��ߣ�֧��shell�ű��Ĳ�����Ҫ��

uglifyjs [ ѡ��... ] [ �ļ��� ]
���һ��������Ҫ�����JS�ļ����������ָ������ӱ�׼���루STDIN����ȡ��
���ӣ�
uglifyjs -b -o 1.js 1601TransCode.js 

֧�ֵ�ѡ�� ��

-b �� --beautify - �����ʽ�����룬������ò���������ĸ���ѡ�����ڸ����۵Ŀ��Ƹ�ʽ����
-i N �� --indent N - �������𣨿ո�������
-q �� --quote-keys - �Ƿ������������ַ�������ļ���Ĭ��ֻ�������ܱ���ȷ��־�ļ�����
--ascii -Ĭ�� UglifyJS �������ַ������ֱ����� Unicode �ַ���ͨ������ò�������ASCII������ַ�ת��Ϊ\cXXXX�����У�����ܰ���UTF8���룬�������ѡ���ܵõ�ASCII������������
-nm �� --no-mangle - ���ı��������
-ns �� --no-squeeze - ������ ast_squeeze() �������ú������������Ż�ʹ�ý����С���ɶ������н��ͣ�
-mt �� --mangle-toplevel - �ڶ�����������ұ������ƣ�Ĭ�ϲ�������
--no-seqs - ������ ast_squeeze() ����ϲ��������Ϊһ�����飬�� "a=10; b=20; foo()" ����ת��Ϊ "a=10,b=20,foo()"
--no-dead-code - Ĭ�� UglifyJS ����ɾ�������õ��Ĵ��룬����ò������ô˹��ܡ�
-nc �� --no-copyright - Ĭ�� uglifyjs ���������Ĵ�������Ӱ�Ȩ��Ϣ��ע�ʹ��룬����ò������ô˹��ܡ�
-o �ļ��� �� --output �ļ��� - ָ������ļ����������ָ�������ӡ����׼�����STDOUT��
--overwrite - ��������JS���������ļ������Ǳ�׼���룬����ò���������Ḳ�Ǹ��ļ���
--ast - ����ò�����õ�������﷨��������Javascript���Ե��Ի��˽��ڲ���������á�
-v �� --verbose - �ڱ�׼�������һЩ��Ϣ��Ŀǰ�İ汾�����������ʱ��
--extra - ���������Ż�����Щ�Ż���δ�õ�ȫ��Ĳ��ԡ�
--unsafe - �������������Ż�����Щ�Ż���֪���ض�����²�����ȫ��Ŀǰ��֧�֣�
foo.toString() ==> foo+����
--max-line-len ��Ĭ��32K�ֽڣ� - ��32K�ֽڳ����ӻ��з�������0���ô˹��ܡ�
--reserved-names - һЩ��������һЩ�������ò���ָ�������Ʋ��ᱻ������������ö��Ÿ�����