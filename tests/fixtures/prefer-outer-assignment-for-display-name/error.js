SyntaxError: <cwd>\tests\fixtures\prefer-outer-assignment-for-display-name\code.js: Support for the experimental syntax 'classProperties' isn't currently enabled (15:16):

  13 | 
  14 | class ClassComponent {
> 15 |   static Child = styled.div``;
     |                ^
  16 | }
  17 | 
  18 | class DoubleClassComponent {

Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.
    at Object._raise (<cwd>\node_modules\@babel\parser\src\parser\location.js:241:45)
    at Object.raiseWithData (<cwd>\node_modules\@babel\parser\src\parser\location.js:236:17)
    at Object.expectPlugin (<cwd>\node_modules\@babel\parser\src\parser\util.js:154:18)
    at Object.parseClassProperty (<cwd>\node_modules\@babel\parser\src\parser\statement.js:1617:12)
    at Object.pushClassProperty (<cwd>\node_modules\@babel\parser\src\parser\statement.js:1516:30)
    at Object.parseClassMemberWithIsStatic (<cwd>\node_modules\@babel\parser\src\parser\statement.js:1403:14)
    at Object.parseClassMember (<cwd>\node_modules\@babel\parser\src\parser\statement.js:1307:10)
    at callback (<cwd>\node_modules\@babel\parser\src\parser\statement.js:1225:14)
    at Object.withTopicForbiddingContext (<cwd>\node_modules\@babel\parser\src\parser\expression.js:2438:14)
    at Object.parseClassBody (<cwd>\node_modules\@babel\parser\src\parser\statement.js:1202:10)
