'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Education = function Education(props) {
  var myEducation = _react2.default.createElement(
    'div',
    null,
    props.education.map(function (edu) {
      return _react2.default.createElement(
        'div',
        { className: 'item', key: edu.degree },
        _react2.default.createElement(
          'h3',
          null,
          edu.degree,
          ' @ ',
          edu.institution,
          ' ',
          _react2.default.createElement(
            'span',
            null,
            edu.startDate,
            ' - ',
            edu.endDate
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          edu.description
        )
      );
    })
  );
  return _react2.default.createElement(
    'div',
    { className: 'title' },
    _react2.default.createElement('i', { className: 'fa fa-graduation-cap' }),
    _react2.default.createElement(
      'h2',
      null,
      'EDUCATION'
    ),
    myEducation
  );
};

exports.default = Education;

//# sourceMappingURL=Education.js.map