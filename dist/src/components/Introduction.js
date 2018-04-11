'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Introduction = function Introduction(props) {
    var myIntro = _react2.default.createElement(
        'div',
        null,
        props.introduction.map(function (intro) {
            return _react2.default.createElement(
                'div',
                { className: 'item', key: intro.introductionTitle },
                _react2.default.createElement(
                    'p',
                    null,
                    ' I am a freelance developer looking for a full-time position at a company with the opportunity for advancement. I have been working in web development for almost two years now. I got into it after running across a freelancing job, managing a WordPress site for a local restaurant called ',
                    _react2.default.createElement(
                        'a',
                        { href: 'http://www.elcerro.net/', target: '_blank', rel: 'noopener noreferrer' },
                        'El Cerro'
                    ),
                    '. I had no idea how to use WordPress or how websites worked, but not knowing how to do something never stopped me. I went on to build the site and it was a hit with the customers, it made it easier for them to find us, and see the menu. Even though my work was complete, I was not satisfied. ',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    '\xA0\xA0\xA0\xA0My OCD flared up whenever I saw the site, and the perfectionist in me didn\'t let me sleep knowing it wasn\'t as aesthetically pleasing as I wanted it to be. I went on to delve deeper into the word of web development, finding ways to customize sites how I wanted to, as opposed to being contained by the scarcity of options from themes. I started finding information on HTML5, and websites like W3Schools, Treehouse, freeCodeCamp, Codeacademy and more.',
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    '\xA0\xA0\xA0\xA0After discovering this newfound skill I spent countless hours learning web development. I decided to take it a step further by quitting my day job and enrolling in the UCF Coding Bootcamp, arming myself with the skills to jump right into the developer workforce. I now solely focus and rely on my developer skills, growing and learning something new every day.'
                )
            );
        })
    );
    return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement('i', { className: 'fa fa-rocket' }),
        _react2.default.createElement(
            'h2',
            null,
            'INTRODUCTION'
        ),
        myIntro
    );
};

exports.default = Introduction;

//# sourceMappingURL=Introduction.js.map