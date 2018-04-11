'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(_ref) {
  var avatar = _ref.avatar,
      name = _ref.name,
      profession = _ref.profession,
      bio = _ref.bio,
      address = _ref.address,
      social = _ref.social;

  return _react2.default.createElement(
    'div',
    { className: 'bio' },
    _react2.default.createElement(
      'div',
      { className: 'avatar' },
      _react2.default.createElement('img', { src: avatar, alt: name })
    ),
    _react2.default.createElement(
      'div',
      { className: 'title' },
      _react2.default.createElement(
        'h1',
        null,
        name
      ),
      _react2.default.createElement(
        'h2',
        null,
        profession
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'desc' },
      _react2.default.createElement(
        'p',
        null,
        bio
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'address' },
      _react2.default.createElement(
        'p',
        { className: 'willingToRelocate' },
        address
      )
    ),
    _react2.default.createElement(_Social2.default, { social: social }),
    _react2.default.createElement(
      'div',
      { style: { paddingTop: 20 }, className: 'pdf' },
      _react2.default.createElement(
        'button',
        { className: 'button', href: '#' },
        'Click for PDF'
      )
    )
  );
};

About.PropTypes = {
  avatar: _propTypes2.default.string,
  name: _propTypes2.default.string,
  profession: _propTypes2.default.string,
  bio: _propTypes2.default.string,
  address: _propTypes2.default.string,
  social: _propTypes2.default.node
};

exports.default = About;

//# sourceMappingURL=About.js.map