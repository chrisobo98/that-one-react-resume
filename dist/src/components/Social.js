'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Social = function Social(props) {
  var socialNetworks = _react2.default.createElement(
    'ul',
    null,
    props.social.map(function (socialNetwork) {
      return _react2.default.createElement(
        'li',
        { key: socialNetwork.name },
        _react2.default.createElement(
          'a',
          { href: socialNetwork.url, target: '_blank', rel: 'noopener noreferrer' },
          _react2.default.createElement('i', { className: 'fa fa-' + socialNetwork.name + '-square' })
        )
      );
    })
  );
  return _react2.default.createElement(
    'div',
    { className: 'social' },
    socialNetworks
  );
};

exports.default = Social;

//# sourceMappingURL=Social.js.map