'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Certificate = function Certificate(props) {
  var myCertificates = _react2.default.createElement(
    'div',
    null,
    props.certificate.map(function (cert) {
      return _react2.default.createElement(
        'div',
        { className: 'item', key: cert.name },
        _react2.default.createElement(
          'h3',
          null,
          cert.name,
          ' @ ',
          cert.institution,
          ' ',
          _react2.default.createElement(
            'span',
            null,
            cert.date
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          cert.description
        )
      );
    })
  );
  return _react2.default.createElement(
    'div',
    { className: 'title' },
    _react2.default.createElement('i', { className: 'fa fa-trophy' }),
    _react2.default.createElement(
      'h2',
      null,
      'CERTIFICATES'
    ),
    myCertificates
  );
};

exports.default = Certificate;

//# sourceMappingURL=Certificate.js.map