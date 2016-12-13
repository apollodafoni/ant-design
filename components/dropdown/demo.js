webpackJsonp([15,204],{

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcNotification = __webpack_require__(158);

	var _rcNotification2 = _interopRequireDefault(_rcNotification);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultDuration = 1.5;
	var defaultTop = void 0;
	var messageInstance = void 0;
	var key = 1;
	var prefixCls = 'ant-message';
	function getMessageInstance() {
	    messageInstance = messageInstance || _rcNotification2.default.newInstance({
	        prefixCls: prefixCls,
	        transitionName: 'move-up',
	        style: { top: defaultTop }
	    });
	    return messageInstance;
	}
	function notice(content) {
	    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
	    var type = arguments[2];
	    var onClose = arguments[3];

	    var iconType = {
	        info: 'info-circle',
	        success: 'check-circle',
	        error: 'cross-circle',
	        warning: 'exclamation-circle',
	        loading: 'loading'
	    }[type];
	    var instance = getMessageInstance();
	    instance.notice({
	        key: key,
	        duration: duration,
	        style: {},
	        content: _react2.default.createElement(
	            'div',
	            { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
	            _react2.default.createElement(_icon2.default, { type: iconType }),
	            _react2.default.createElement(
	                'span',
	                null,
	                content
	            )
	        ),
	        onClose: onClose
	    });
	    return function () {
	        var target = key++;
	        return function () {
	            instance.removeNotice(target);
	        };
	    }();
	}
	exports.default = {
	    info: function info(content, duration, onClose) {
	        return notice(content, duration, 'info', onClose);
	    },
	    success: function success(content, duration, onClose) {
	        return notice(content, duration, 'success', onClose);
	    },
	    error: function error(content, duration, onClose) {
	        return notice(content, duration, 'error', onClose);
	    },

	    // Departed usage, please use warning()
	    warn: function warn(content, duration, onClose) {
	        return notice(content, duration, 'warning', onClose);
	    },
	    warning: function warning(content, duration, onClose) {
	        return notice(content, duration, 'warning', onClose);
	    },
	    loading: function loading(content, duration, onClose) {
	        return notice(content, duration, 'loading', onClose);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	        }
	        if (options.prefixCls !== undefined) {
	            prefixCls = options.prefixCls;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(130);

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dropdown = __webpack_require__(113);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _dropdownButton = __webpack_require__(209);

	var _dropdownButton2 = _interopRequireDefault(_dropdownButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_dropdown2.default.Button = _dropdownButton2.default;
	exports.default = _dropdown2.default;
	module.exports = exports['default'];

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(12);

	__webpack_require__(188);

	__webpack_require__(14);

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _rcDropdown = __webpack_require__(256);

	var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dropdown = function (_React$Component) {
	    (0, _inherits3.default)(Dropdown, _React$Component);

	    function Dropdown() {
	        (0, _classCallCheck3.default)(this, Dropdown);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    Dropdown.prototype.render = function render() {
	        var _props = this.props,
	            children = _props.children,
	            prefixCls = _props.prefixCls;

	        var dropdownTrigger = (0, _react.cloneElement)(children, {
	            className: (0, _classnames2.default)(children.props.className, prefixCls + '-trigger')
	        });
	        return _react2.default.createElement(
	            _rcDropdown2.default,
	            this.props,
	            dropdownTrigger
	        );
	    };

	    return Dropdown;
	}(_react2.default.Component);

	exports.default = Dropdown;

	Dropdown.defaultProps = {
	    transitionName: 'slide-up',
	    prefixCls: 'ant-dropdown',
	    mouseEnterDelay: 0.15,
	    mouseLeaveDelay: 0.1
	};
	module.exports = exports['default'];

/***/ },

/***/ 130:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 188:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 209:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends2 = __webpack_require__(7);

	var _extends3 = _interopRequireDefault(_extends2);

	var _slicedToArray2 = __webpack_require__(15);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _classCallCheck2 = __webpack_require__(3);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(5);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(4);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _dropdown = __webpack_require__(113);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _splitObject3 = __webpack_require__(18);

	var _splitObject4 = _interopRequireDefault(_splitObject3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ButtonGroup = _button2.default.Group;

	var DropdownButton = function (_React$Component) {
	    (0, _inherits3.default)(DropdownButton, _React$Component);

	    function DropdownButton() {
	        (0, _classCallCheck3.default)(this, DropdownButton);
	        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
	    }

	    DropdownButton.prototype.render = function render() {
	        var _splitObject = (0, _splitObject4.default)(this.props, ['type', 'overlay', 'trigger', 'align', 'children', 'className', 'onClick', 'prefixCls', 'disabled', 'visible', 'onVisibleChange']),
	            _splitObject2 = (0, _slicedToArray3.default)(_splitObject, 2),
	            _splitObject2$ = _splitObject2[0],
	            type = _splitObject2$.type,
	            overlay = _splitObject2$.overlay,
	            trigger = _splitObject2$.trigger,
	            align = _splitObject2$.align,
	            children = _splitObject2$.children,
	            className = _splitObject2$.className,
	            onClick = _splitObject2$.onClick,
	            prefixCls = _splitObject2$.prefixCls,
	            disabled = _splitObject2$.disabled,
	            visible = _splitObject2$.visible,
	            onVisibleChange = _splitObject2$.onVisibleChange,
	            restProps = _splitObject2[1];

	        var cls = (0, _classnames2.default)(prefixCls, className);
	        var dropdownProps = {
	            align: align,
	            overlay: overlay,
	            trigger: disabled ? [] : trigger,
	            onVisibleChange: onVisibleChange
	        };
	        if ('visible' in this.props) {
	            dropdownProps.visible = visible;
	        }
	        return _react2.default.createElement(
	            ButtonGroup,
	            (0, _extends3.default)({}, restProps, { className: cls }),
	            _react2.default.createElement(
	                _button2.default,
	                { type: type, onClick: onClick, disabled: disabled },
	                children
	            ),
	            _react2.default.createElement(
	                _dropdown2.default,
	                dropdownProps,
	                _react2.default.createElement(
	                    _button2.default,
	                    { type: type, disabled: disabled },
	                    _react2.default.createElement(_icon2.default, { type: 'down' })
	                )
	            )
	        );
	    };

	    return DropdownButton;
	}(_react2.default.Component);

	exports.default = DropdownButton;

	DropdownButton.defaultProps = {
	    align: {
	        points: ['tr', 'br'],
	        overlay: {
	            adjustX: 1,
	            adjustY: 1
	        },
	        offset: [0, 4],
	        targetOffset: [0, 0]
	    },
	    type: 'default',
	    prefixCls: 'ant-dropdown-button'
	};
	module.exports = exports['default'];

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(1529),
	    'dropdown-button': __webpack_require__(1530),
	    'event': __webpack_require__(1531),
	    'item': __webpack_require__(1532),
	    'overlay-visible': __webpack_require__(1533),
	    'sub-menu': __webpack_require__(1534),
	    'trigger': __webpack_require__(1535),
	}

/***/ },

/***/ 1529:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style5 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(53);

	var _menu = __webpack_require__(52);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "最简单的下拉菜单。"]],
	    "en-US": [["p", "The most basic dropdown menu."]]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/dropdown/demo/basic.md",
	    "id": "components-dropdown-demo-basic"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">target</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>_blank<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>noopener</span> <span class=\"token attr-name\">noreferrer\"</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://www.alipay.com/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1st menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">target</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>_blank<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>noopener</span> <span class=\"token attr-name\">noreferrer\"</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://www.taobao.com/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2nd menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">target</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>_blank<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>noopener</span> <span class=\"token attr-name\">noreferrer\"</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://www.tmall.com/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>3d menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Hover me <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var menu = _react2.default.createElement(
	      _menu2.default,
	      null,
	      _react2.default.createElement(
	        _menu2.default.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          { target: '_blank', rel: 'noopener noreferrer', href: 'http://www.alipay.com/' },
	          '1st menu item'
	        )
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          { target: '_blank', rel: 'noopener noreferrer', href: 'http://www.taobao.com/' },
	          '2nd menu item'
	        )
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        null,
	        _react2.default.createElement(
	          'a',
	          { target: '_blank', rel: 'noopener noreferrer', href: 'http://www.tmall.com/' },
	          '3d menu item'
	        )
	      )
	    );return _react2.default.createElement(
	      _dropdown2.default,
	      { overlay: menu },
	      _react2.default.createElement(
	        'a',
	        { className: 'ant-dropdown-link', href: '#' },
	        'Hover me ',
	        _react2.default.createElement(_icon2.default, { type: 'down' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style6 = __webpack_require__(14);

	var _button = __webpack_require__(13);

	var _button2 = _interopRequireDefault(_button);

	var _style7 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style8 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style9 = __webpack_require__(53);

	var _menu = __webpack_require__(52);

	var _menu2 = _interopRequireDefault(_menu);

	var _style10 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "左边是按钮，右边是额外的相关功能菜单。"]],
	    "en-US": [["p", "A button is on the left, and a related functional menu is on the right."]]
	  },
	  "meta": {
	    "order": 4,
	    "title": {
	      "zh-CN": "带下拉框的按钮",
	      "en-US": "Button with dropdown menu"
	    },
	    "filename": "components/dropdown/demo/dropdown-button.md",
	    "id": "components-dropdown-demo-dropdown-button"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">handleButtonClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on left button.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click left button'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">handleMenuClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Click on menu item.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">,</span> e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>handleMenuClick<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1st menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2nd menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>3d menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown.Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>handleButtonClick<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Dropdown\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown.Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown.Button</span>\n      <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>handleButtonClick<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span>\n      <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">></span></span>\n      Dropdown\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown.Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ghost<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        Button <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    function handleButtonClick(e) {
	      _message2.default.info('Click on left button.');console.log('click left button', e);
	    }function handleMenuClick(e) {
	      _message2.default.info('Click on menu item.');console.log('click', e);
	    }var menu = _react2.default.createElement(
	      _menu2.default,
	      { onClick: handleMenuClick },
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '1' },
	        '1st menu item'
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '2' },
	        '2nd menu item'
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '3' },
	        '3d menu item'
	      )
	    );return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _dropdown2.default.Button,
	        { onClick: handleButtonClick, overlay: menu, type: 'ghost' },
	        'Dropdown'
	      ),
	      _react2.default.createElement(
	        _dropdown2.default.Button,
	        { onClick: handleButtonClick, overlay: menu, type: 'ghost', disabled: true, style: { marginLeft: 8 } },
	        'Dropdown'
	      ),
	      _react2.default.createElement(
	        _dropdown2.default,
	        { overlay: menu },
	        _react2.default.createElement(
	          _button2.default,
	          { type: 'ghost', style: { marginLeft: 8 } },
	          'Button ',
	          _react2.default.createElement(_icon2.default, { type: 'down' })
	        )
	      )
	    );
	  }
	};

/***/ },

/***/ 1531:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style5 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style6 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style7 = __webpack_require__(53);

	var _menu = __webpack_require__(52);

	var _menu2 = _interopRequireDefault(_menu);

	var _style8 = __webpack_require__(69);

	var _message = __webpack_require__(68);

	var _message2 = _interopRequireDefault(_message);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。"]],
	    "en-US": [["p", "An event will be triggered when you click menu items, in which you can make different operations according to item's key."]]
	  },
	  "meta": {
	    "order": 3,
	    "title": {
	      "zh-CN": "触发事件",
	      "en-US": "Click event"
	    },
	    "filename": "components/dropdown/demo/event.md",
	    "id": "components-dropdown-demo-event"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> onClick <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> key <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`Click on item </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>key<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onClick<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1st menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2nd memu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>3d menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Hover me<span class=\"token punctuation\">,</span> Click menu item <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var onClick = function onClick(_ref) {
	      var key = _ref.key;

	      _message2.default.info('Click on item ' + key);
	    };var menu = _react2.default.createElement(
	      _menu2.default,
	      { onClick: onClick },
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '1' },
	        '1st menu item'
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '2' },
	        '2nd memu item'
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '3' },
	        '3d menu item'
	      )
	    );return _react2.default.createElement(
	      _dropdown2.default,
	      { overlay: menu },
	      _react2.default.createElement(
	        'a',
	        { className: 'ant-dropdown-link', href: '#' },
	        'Hover me, Click menu item ',
	        _react2.default.createElement(_icon2.default, { type: 'down' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style5 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(53);

	var _menu = __webpack_require__(52);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "分割线和不可用菜单项。"]],
	    "en-US": [["p", "Divider and disabled menu item."]]
	  },
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "其他元素",
	      "en-US": "Other elements"
	    },
	    "filename": "components/dropdown/demo/item.md",
	    "id": "components-dropdown-demo-item"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">target</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>_blank<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>noopener</span> <span class=\"token attr-name\">noreferrer\"</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://www.alipay.com/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1st menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">target</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>_blank<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>noopener</span> <span class=\"token attr-name\">noreferrer\"</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://www.taobao.com/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2nd menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Divider</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token punctuation\">></span></span>3d menu item（disabled）<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Hover me <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var menu = _react2.default.createElement(
	      _menu2.default,
	      null,
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '0' },
	        _react2.default.createElement(
	          'a',
	          { target: '_blank', rel: 'noopener noreferrer', href: 'http://www.alipay.com/' },
	          '1st menu item'
	        )
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '1' },
	        _react2.default.createElement(
	          'a',
	          { target: '_blank', rel: 'noopener noreferrer', href: 'http://www.taobao.com/' },
	          '2nd menu item'
	        )
	      ),
	      _react2.default.createElement(_menu2.default.Divider, null),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '3', disabled: true },
	        '3d menu item\uFF08disabled\uFF09'
	      )
	    );return _react2.default.createElement(
	      _dropdown2.default,
	      { overlay: menu },
	      _react2.default.createElement(
	        'a',
	        { className: 'ant-dropdown-link', href: '#' },
	        'Hover me ',
	        _react2.default.createElement(_icon2.default, { type: 'down' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style5 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(53);

	var _menu = __webpack_require__(52);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "默认是点击关闭菜单，可以关闭此功能。"]],
	    "en-US": [["p", "The default is to close the menu when you click on menu items, this feature can be turned off."]]
	  },
	  "meta": {
	    "order": 6,
	    "title": {
	      "zh-CN": "菜单隐藏方式",
	      "en-US": "The way of hiding menu."
	    },
	    "filename": "components/dropdown/demo/overlay-visible.md",
	    "id": "components-dropdown-demo-overlay-visible"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> OverlayVisible <span class=\"token operator\">=</span> React<span class=\"token punctuation\">.</span><span class=\"token function\">createClass</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token function\">getInitialState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleMenuClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>key <span class=\"token operator\">===</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">handleVisibleChange</span><span class=\"token punctuation\">(</span>flag<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> flag <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleMenuClick<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Clicking me will not close the menu<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Clicking me will not close the menu also<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Clicking me will close the menu<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onVisibleChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleVisibleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          Hover me <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>OverlayVisible</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var OverlayVisible = _react2.default.createClass({
	      displayName: 'OverlayVisible',
	      getInitialState: function getInitialState() {
	        return { visible: false };
	      },
	      handleMenuClick: function handleMenuClick(e) {
	        if (e.key === '3') {
	          this.setState({ visible: false });
	        }
	      },
	      handleVisibleChange: function handleVisibleChange(flag) {
	        this.setState({ visible: flag });
	      },
	      render: function render() {
	        var menu = _react2.default.createElement(
	          _menu2.default,
	          { onClick: this.handleMenuClick },
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '1' },
	            'Clicking me will not close the menu.'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '2' },
	            'Clicking me will not close the menu also.'
	          ),
	          _react2.default.createElement(
	            _menu2.default.Item,
	            { key: '3' },
	            'Clicking me will close the menu'
	          )
	        );return _react2.default.createElement(
	          _dropdown2.default,
	          { overlay: menu, onVisibleChange: this.handleVisibleChange, visible: this.state.visible },
	          _react2.default.createElement(
	            'a',
	            { className: 'ant-dropdown-link', href: '#' },
	            'Hover me ',
	            _react2.default.createElement(_icon2.default, { type: 'down' })
	          )
	        );
	      }
	    });return _react2.default.createElement(OverlayVisible, null);
	  }
	};

/***/ },

/***/ 1534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style5 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(53);

	var _menu = __webpack_require__(52);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "传入的菜单里有多个层级。"]],
	    "en-US": [["p", "The menu has multiple levels."]]
	  },
	  "meta": {
	    "order": 5,
	    "title": {
	      "zh-CN": "多级菜单",
	      "en-US": "Cascading menu"
	    },
	    "filename": "components/dropdown/demo/sub-menu.md",
	    "id": "components-dropdown-demo-sub-menu"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> SubMenu <span class=\"token operator\">=</span> Menu<span class=\"token punctuation\">.</span>SubMenu<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>1st menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>2nd menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SubMenu</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub</span> <span class=\"token attr-name\">menu\"</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>3d menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span><span class=\"token punctuation\">></span></span>4th menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>SubMenu</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Cascading menu <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var SubMenu = _menu2.default.SubMenu;var menu = _react2.default.createElement(
	      _menu2.default,
	      null,
	      _react2.default.createElement(
	        _menu2.default.Item,
	        null,
	        '1st menu item'
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        null,
	        '2nd menu item'
	      ),
	      _react2.default.createElement(
	        SubMenu,
	        { title: 'sub menu' },
	        _react2.default.createElement(
	          _menu2.default.Item,
	          null,
	          '3d menu item'
	        ),
	        _react2.default.createElement(
	          _menu2.default.Item,
	          null,
	          '4th menu item'
	        )
	      )
	    );return _react2.default.createElement(
	      _dropdown2.default,
	      { overlay: menu },
	      _react2.default.createElement(
	        'a',
	        { className: 'ant-dropdown-link', href: '#' },
	        'Cascading menu ',
	        _react2.default.createElement(_icon2.default, { type: 'down' })
	      )
	    );
	  }
	};

/***/ },

/***/ 1535:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _style4 = __webpack_require__(95);

	var _dropdown = __webpack_require__(94);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _style5 = __webpack_require__(16);

	var _icon = __webpack_require__(11);

	var _icon2 = _interopRequireDefault(_icon);

	var _style6 = __webpack_require__(53);

	var _menu = __webpack_require__(52);

	var _menu2 = _interopRequireDefault(_menu);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": {
	    "zh-CN": [["p", "默认是移入触发菜单，可以点击触发。"]],
	    "en-US": [["p", "The default trigger mode is ", ["code", "hover"], ", you can change it to ", ["code", "click"], "."]]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "触发方式",
	      "en-US": "Trigger mode"
	    },
	    "filename": "components/dropdown/demo/trigger.md",
	    "id": "components-dropdown-demo-trigger"
	  },
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#zh-CN"
	  }, "zh-CN"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#en-US"
	  }, "en-US"]]],
	  "highlightedCode": ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Menu<span class=\"token punctuation\">,</span> Dropdown<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> menu <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://www.alipay.com/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>1st menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>http://www.taobao.com/<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>2nd menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Divider</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Menu.Item</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>3d menu item<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Menu</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dropdown</span> <span class=\"token attr-name\">overlay</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>menu<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">trigger</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'click'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-dropdown-link<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Click me <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>down<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dropdown</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }],
	  "preview": function jsonmlReactLoader() {
	    var menu = _react2.default.createElement(
	      _menu2.default,
	      null,
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '0' },
	        _react2.default.createElement(
	          'a',
	          { href: 'http://www.alipay.com/' },
	          '1st menu item'
	        )
	      ),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '1' },
	        _react2.default.createElement(
	          'a',
	          { href: 'http://www.taobao.com/' },
	          '2nd menu item'
	        )
	      ),
	      _react2.default.createElement(_menu2.default.Divider, null),
	      _react2.default.createElement(
	        _menu2.default.Item,
	        { key: '3' },
	        '3d menu item'
	      )
	    );return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _dropdown2.default,
	        { overlay: menu, trigger: ['click'] },
	        _react2.default.createElement(
	          'a',
	          { className: 'ant-dropdown-link', href: '#' },
	          'Click me ',
	          _react2.default.createElement(_icon2.default, { type: 'down' })
	        )
	      )
	    );
	  }
	};

/***/ }

});