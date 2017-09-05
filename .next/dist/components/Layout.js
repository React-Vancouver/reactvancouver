'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styles = require('material-ui/styles');

var _colors = require('material-ui/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/thomasmirmotahari/Dropbox/web-development/code/reactvancouver/components/Layout.js';


var theme = function theme() {
  return (0, _styles.createMuiTheme)({
    palette: {
      primary: _colors.pink
      // secondary: green['A400'],
    },
    typography: {
      fontFamily: '-apple-system,system-ui,BlinkMacSystemFont,' + '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
      display3: {
        textTransform: 'uppercase',
        color: '#FFFFFF',
        fontWeight: 100,
        fontSize: '48px'
        // [theme.breakpoints.down('sm')]: {
        //   fontSize: '18px'
        // }
      },
      display1: {
        color: '#F5F5F5',
        fontWeight: 300
        // [theme.breakpoints.down('sm')]: {
        //   fontSize: '14px',
        //   lineHeight: '10px'
        // }
      },
      headline: {
        textTransform: 'uppercase',
        color: '#F5F5F5'
      },
      caption: {
        color: '#F5F5F5',
        position: 'fixed',
        bottom: '20px',
        right: '20px'
      }
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          margin: '10px'
        }
      }
    }
  });
};

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'React Vancouver' : _ref$title;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement('meta', { charset: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }), _react2.default.createElement('meta', {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }), _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, title), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
    integrity: 'sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ',
    crossorigin: 'anonymous',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }), _react2.default.createElement('script', { src: 'https://use.fontawesome.com/003c3f5408.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  })), _react2.default.createElement('header', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }), _react2.default.createElement(_styles.MuiThemeProvider, { theme: theme, __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, children), _react2.default.createElement('footer', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiTXVpVGhlbWVQcm92aWRlciIsImNyZWF0ZU11aVRoZW1lIiwiY3JlYXRlUGFsZXR0ZSIsImNyZWF0ZVR5cG9ncmFwaHkiLCJwaW5rIiwidGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiZGlzcGxheTMiLCJ0ZXh0VHJhbnNmb3JtIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJkaXNwbGF5MSIsImhlYWRsaW5lIiwiY2FwdGlvbiIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJvdmVycmlkZXMiLCJNdWlCdXR0b24iLCJyYWlzZWRQcmltYXJ5IiwibWFyZ2luIiwiY2hpbGRyZW4iLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFDRSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFTOzs7Ozs7O0FBRVQsSUFBTSxRQUFRLFNBQVIsQUFBUSxRQUFBOzs7QUFHQyxBQUNUO0FBSFcsQUFDSixBQUlUO0FBSlMsQUFDUDs7a0JBS0UsZ0RBRlEsQUFHUixBQUNGOzt1QkFBVSxBQUNPLEFBQ2Y7ZUFGUSxBQUVELEFBQ1A7b0JBSFEsQUFHSSxBQUNaO2tCQUFVLEFBQ1Y7QUFDQTtBQUNBO0FBWFEsQUFJQSxBQVNWO0FBVFUsQUFDUjs7ZUFRUSxBQUNELEFBQ1A7b0JBQVksQUFDWjtBQUNBO0FBQ0E7QUFDQTtBQW5CUSxBQWFBLEFBUVY7QUFSVSxBQUNSOzt1QkFPUSxBQUNPLEFBQ2Y7ZUF2QlEsQUFxQkEsQUFFRCxBQUVUO0FBSlUsQUFDUjs7ZUFHTyxBQUNBLEFBQ1A7a0JBRk8sQUFFRyxBQUNWO2dCQUhPLEFBR0MsQUFDUjtlQWxDUyxBQUtELEFBeUJELEFBSUEsQUFHWDtBQVBXLEFBQ1A7QUExQlEsQUFDVjs7OztrQkFQUSxBQUNaLEFBQWUsQUFxQ0YsQUFDRSxBQUNNLEFBQ0w7QUFESyxBQUNiO0FBRk8sQUFDVDtBQUZPLEFBQ1Q7QUF0Q1csQUFDYixHQURGO0FBREYsQUErQ0E7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3dCQUFILEFBQWE7TUFBYixBQUFhLG1DQUFiLEFBQXFCLG9CQUFyQjt5QkFDYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLDZDQUNRLFNBQU4sQUFBYztnQkFBZDtrQkFERixBQUNFLEFBQ0E7QUFEQTs7VUFDQSxBQUNPLEFBQ0w7YUFGRixBQUVVOztnQkFGVjtrQkFGRixBQUVFLEFBS0E7QUFMQTtBQUNFLHNCQUlGLGNBQUE7O2dCQUFBO2tCQUFBLEFBQVE7QUFBUjtBQUFBLEtBUEYsQUFPRSxBQUdBO1NBQUEsQUFDTSxBQUNKO1VBRkYsQUFFTyxBQUNMO2VBSEYsQUFHWSxBQUNWO2lCQUpGLEFBSWM7O2dCQUpkO2tCQVZGLEFBVUUsQUFRQTtBQVJBO0FBQ0UsZ0RBT00sS0FBUixBQUFZO2dCQUFaO2tCQWxCRixBQWtCRSxBQUdBO0FBSEE7O1NBR0EsQUFDTSxBQUNKO1VBRkYsQUFFTzs7Z0JBRlA7a0JBdEJKLEFBQ0UsQUFxQkUsQUFLRjtBQUxFO0FBQ0U7O2dCQUlKO2tCQTNCRixBQTJCRSxBQUVBO0FBRkE7QUFBQSxzQkFFQSxBQUFDLDBDQUFpQixPQUFsQixBQUF5QjtnQkFBekI7a0JBQUEsQUFBaUM7QUFBakM7S0E3QkYsQUE2QkUsQUFFQTs7Z0JBQUE7a0JBaENXLEFBQ2IsQUErQkU7QUFBQTtBQUFBO0FBaENKIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdGhvbWFzbWlybW90YWhhcmkvRHJvcGJveC93ZWItZGV2ZWxvcG1lbnQvY29kZS9yZWFjdHZhbmNvdXZlciJ9