(function () {
	var api = {
		// 类名篇
		//给某个元素添加类名
		addClass: function (element, className) {
			element.className += '' + className;
		},
		// toggle 类名
		toggleClass: function (element, className) {
			var classNames = element.className.split(' '),
				len = classNames.length,
				i = 0,
				exitIndex = -1;
			for ( ;i < len; i++) {
				if (classNames[i] === className) {
					exitIndex = i;
				}
			}
			if (exitIndex >= 0) {
				classNames.splice(exitIndex, 1);
			} else {
				classNames.push(className);
			}
			element.className = classNames.join(' ');
		},
		//移除某个元素的类名
		removeClass: function (element, className) {
			var classNames = element.className.split(' '),
				len = classNames.length,
				exitIndex = -1,
				i = 0;
			for (; i < len; i++) {
				if (classNames[i] == className) {
					exitIndex = i;
				}
			}
			if (exitIndex >= 0) {
				classNames.splice(exitIndex, 1);
			} else {
				console.log("要移除的类名不存在");
			}
			element.className = classNames.join(' ');
		},
		//查找下一个元素节点
		nextElementNode: function (element) {
			var nextSibling = element.nextSibling;
			if (nextSibling.nodeType == 1) {
				return nextSibling;
			} else {
				return nextSibling.nextSibling;
			}
		},
		// 查找篇
		//查找所有同级节点
		siblings: function (element) {
			var parent = element.parentNode,
				children = parent.childNodes, // 或: parent.children
				len = children.length,
				i = 0,
				elementsArr = [];
			for ( ; i < len; i++) {
				if (children[i].nodeType == 1) {
					elementsArr.push(children[i]);
				}
			}
			return elementsArr;
		},
		//查找同级相同元素节点
		sameSiblings: function (element) {
			var parent = element.parentNode,
				children = parent.childNodes,
				len = children.length,
				i = 0,
				elementsArr = [],
				elementTagName = element.tagName;
			for ( ; i < len; i++) {
				if (children[i].tagName == elementTagName) {
					elementsArr.push(children[i]);
				}
			}
			return elementsArr;
		},
		// 插入篇
		// 在某元素之后插入节点
		insertAfter: function (element, targetElement) {
			/*
			思路: 先判断目标元素是不是最后一个元素，
			如果是最后一个元素，则用 appendChild 方法
			如果不是，则用 insertBefore 方法.
			先获取目标元素下一个节点，在该节点，之前插入
			即是在目标元素后面插入
			targetParentNode.insertBefore(element, targetElement)
			*/
			var targetElementParent = targetElement.parentNode,
				nextElementNode = this.nextElementNode(targetElement);
			if (targetElementParent.lastChild == targetElement) {
				targetElementParent.appendChild(element);
			} else {
				targetElementParent.insertBefore(element, nextElementNode);
			}
		}
	};
	this.DOM = api;
})();
