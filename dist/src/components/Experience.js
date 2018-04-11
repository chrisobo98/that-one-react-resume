'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactVerticalTimelineComponent = require('react-vertical-timeline-component');

require('react-vertical-timeline-component/style.min.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Experience = function Experience(props) {
  var myExperience = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactVerticalTimelineComponent.VerticalTimeline,
      null,
      _react2.default.createElement(
        _reactVerticalTimelineComponent.VerticalTimelineElement,
        {
          className: 'vertical-timeline-element--work',
          date: '2016 - present',
          iconStyle: { background: 'rgb(34,139,34)', color: '#228B22' }
        },
        _react2.default.createElement(
          'h3',
          { className: 'vertical-timeline-element-title' },
          'El Cerro Restaurant'
        ),
        _react2.default.createElement(
          'h4',
          { className: 'vertical-timeline-element-subtitle' },
          'Clermont, FL'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Web Developer, Graphic Designer, Social Media and Marketing'
        )
      ),
      _react2.default.createElement(
        _reactVerticalTimelineComponent.VerticalTimelineElement,
        {
          className: 'vertical-timeline-element--work',
          date: '2010 - 2011',
          iconStyle: { background: 'rgb(34,139,34)', color: '#228B22' }
        },
        _react2.default.createElement(
          'h3',
          { className: 'vertical-timeline-element-title' },
          'Full Sail University'
        ),
        _react2.default.createElement(
          'h4',
          { className: 'vertical-timeline-element-subtitle' },
          'Orlando, FL'
        ),
        _react2.default.createElement(
          'p',
          null,
          'App Developer'
        )
      ),
      _react2.default.createElement(
        _reactVerticalTimelineComponent.VerticalTimelineElement,
        {
          className: 'vertical-timeline-element--work',
          date: '2008 - 2010',
          iconStyle: { background: 'rgb(34,139,34)', color: '#228B22' }
        },
        _react2.default.createElement(
          'h3',
          { className: 'vertical-timeline-element-title' },
          'Orlando Hoppers'
        ),
        _react2.default.createElement(
          'h4',
          { className: 'vertical-timeline-element-subtitle' },
          'Remote'
        ),
        _react2.default.createElement(
          'p',
          null,
          'User Experience, Visual Design'
        )
      )
    )
  );
  return _react2.default.createElement(
    'div',
    { className: 'title' },
    _react2.default.createElement('i', { className: 'fa fa-briefcase' }),
    _react2.default.createElement(
      'h2',
      null,
      'EXPERIENCE'
    ),
    myExperience
  );
};

exports.default = Experience;

//# sourceMappingURL=Experience.js.map