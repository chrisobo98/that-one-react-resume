'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skills = function Skills(props) {
  var mySkills = _react2.default.createElement(
    'div',
    null,
    props.skills.map(function (skll) {
      return _react2.default.createElement(
        'div',
        { className: 'item w33', key: skll.name },
        _react2.default.createElement(
          'h3',
          null,
          skll.name
        ),
        _react2.default.createElement(
          'div',
          { className: 'skills' },
          _react2.default.createElement('span', { style: { width: skll.percentage } })
        )
      );
    })
  );
  return _react2.default.createElement(
    'div',
    { className: 'title' },
    _react2.default.createElement('i', { className: 'fa fa-code' }),
    _react2.default.createElement(
      'h2',
      null,
      'SKILLS'
    ),
    mySkills
  );
};

exports.default = Skills;

//# sourceMappingURL=Skills.js.map