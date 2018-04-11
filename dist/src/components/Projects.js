'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects(props) {
    var myProjects = _react2.default.createElement(
        'div',
        null,
        props.projects.map(function (pro) {
            return _react2.default.createElement(
                'div',
                { className: 'item', key: pro.projectTitle },
                _react2.default.createElement(
                    'h3',
                    null,
                    pro.projectSubtitle
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    pro.projectDescription
                )
            );
        })
    );
    return _react2.default.createElement(
        'div',
        { className: 'title' },
        _react2.default.createElement('i', { className: 'fa fa-pencil' }),
        _react2.default.createElement(
            'h2',
            null,
            'PROJECTS'
        ),
        myProjects
    );
};

exports.default = Projects;

//# sourceMappingURL=Projects.js.map