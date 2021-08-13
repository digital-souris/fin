var me = document.currentScript;
(function (global) {
    var innerMe = {
        dataset: Object.assign({}, me.dataset),
        parentNode: me.parentNode,
        originNode: me,
        uid: uuidv4()
    };
    var document = global.document;
    var loadEvent = '__resizer__inited__';
    var frame = document.createElement('iframe');
    innerMe.frame = frame;
    var script = global.document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/iframe-resizer@4.2.1/js/iframeResizer.min.js';
    script.async = true;
    script.onload = function () {
        frame.onload = function () {
            global.iFrameResize({
                checkOrigin: false,
            }, frame);
        }
        script.parentNode.replaceChild(frame, script);
    }

    if (innerMe.dataset.inframe !== 'true') {
        global.addEventListener("message", function(event) {
            if (event.data.body && event.data.uid === innerMe.uid) {
                let widgetContainer = document.createElement('div');
                widgetContainer.innerHTML = event.data.head + event.data.body;
                let container = widgetContainer.querySelector('#app');
                
                container.setAttribute('id', innerMe.uid);

                innerMe.frame.parentNode.replaceChild(widgetContainer, innerMe.frame);
                nodeScriptReplace(widgetContainer, () => {
                    global.postMessage({
                        props: Object.assign({}, innerMe.dataset),
                        mountWidgetTo: innerMe.uid
                    }, '*');
                });
                if (!hasPortal()) {
                    placePortal();
                }
            }
        }, false);
    }

    var resourcePath = innerMe.dataset.inframe !== 'true'
        ? (innerMe.dataset.server || 'https://www.sravni.ru/widgets') + '/' + innerMe.dataset.product + '.html'
        : (innerMe.dataset.server || 'https://www.sravni.ru') + '/' + innerMe.dataset.product  + '/wl/';

    frame.src = resourcePath + '?' + 'uid=' + innerMe.uid + '&' + (Object.keys(innerMe.dataset).map(getQueryString).join('&'));
    
    frame.style = "width:100%;border:none;height:600px;min-width:320px;";
    if (innerMe.dataset.inframe !== 'true') {
        innerMe.parentNode.replaceChild(frame, innerMe.originNode);
    } else {
        innerMe.parentNode.replaceChild(script, innerMe.originNode);
    }

    function getQueryString(item){
        var dotPosition = item.indexOf('.');
        if (dotPosition > 0) { //disallow empty parent
            var parts = item.split('.');
            return parts[0] + '[' + parts[1] + ']=' + innerMe.dataset[item];
        }
        return item + '=' + innerMe.dataset[item];
    }
    function nodeScriptReplace(node, onLoad) {
        if (nodeScriptIs(node) === true) {
            if (node.getAttribute('resizer')) {
                return;
            }
            node.parentNode.replaceChild( nodeScriptClone(node, onLoad) , node );
        }
        else {
            var i = 0;
            var children = node.childNodes;
            while ( i < children.length ) {
                nodeScriptReplace( children[i++], onLoad );
            }
        }

        return node;
    }
    function nodeScriptIs(node) {
        return node.tagName === 'SCRIPT';
    }
    function nodeScriptClone(node, onLoad){
        var script  = document.createElement("script");
        script.text = node.innerHTML;
        for( var i = node.attributes.length-1; i >= 0; i-- ) {
            script.setAttribute( node.attributes[i].name, node.attributes[i].value );
        }
        if (onLoad) {
            script.onload = onLoad;
        }
        return script;
    }
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function hasPortal() {
        return document.body.querySelector('#portal.sravni-popup-portal');
    }

    function placePortal() {
        const portal = document.createElement('div');
        portal.setAttribute('id', 'portal');
        portal.setAttribute('class', 'sravni-popup-portal');
        document.body.appendChild(portal);
    }
})(window);