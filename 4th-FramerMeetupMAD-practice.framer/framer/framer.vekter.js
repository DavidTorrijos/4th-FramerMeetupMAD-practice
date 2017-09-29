(function(scope) {var homeScreen = new Layer({"height":667,"name":"homeScreen","constraintValues":{"left":475,"height":667,"heightFactor":1,"width":375,"widthFactor":1,"top":-1},"backgroundColor":"#ffffff","clip":true,"width":375,"x":475,"y":-1});var loginScreen = new Layer({"height":667,"name":"loginScreen","constraintValues":{"height":667,"heightFactor":1,"width":375,"widthFactor":1},"gradient":new Gradient({angle: 0, start: new Color('rgb(10, 10, 10)').multiplyAlpha(1), end: new Color('rgb(42, 42, 42)').multiplyAlpha(1)}),"backgroundColor":null,"clip":true,"width":375});var __layer_0__ = new Layer({"parent":loginScreen,"name":"loginForm","backgroundColor":"transparent","width":290,"x":43,"height":210,"constraintValues":{"left":43,"height":210,"centerAnchorX":0.5013333333333333,"width":290,"bottom":134,"right":42,"top":null,"centerAnchorY":0.6416791604197901},"blending":"normal","clip":false,"borderStyle":"solid","y":323});var signUpButton = new Layer({"parent":__layer_0__,"name":"signUpButton","backgroundColor":"rgb(0, 170, 255)","width":290,"height":50,"constraintValues":{"height":50,"centerAnchorX":0.5,"width":290,"bottom":-91,"right":0,"top":null,"centerAnchorY":1.314285714285714},"blending":"normal","clip":false,"borderStyle":"solid","y":251});var __layer_1__ = new TextLayer({"parent":signUpButton,"backgroundColor":null,"width":75,"x":108,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":7,"css":{"fontSize":"18px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"SIGN UP"}],"alignment":"center"},"height":21,"constraintValues":{"left":null,"height":21,"centerAnchorX":0.5017241379310344,"width":75,"top":null,"centerAnchorY":0.51},"blending":"normal","autoSize":false,"y":15});var __layer_2__ = new Layer({"parent":__layer_0__,"name":"Toggle","backgroundColor":"transparent","width":246,"height":34,"constraintValues":{"height":34,"centerAnchorX":0.4241379310344828,"width":246,"bottom":0,"right":44,"top":null,"centerAnchorY":0.919047619047619},"blending":"normal","clip":false,"borderStyle":"solid","y":176});var __layer_3__ = new TextLayer({"parent":__layer_2__,"backgroundColor":null,"width":169,"x":77,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":11,"css":{"fontSize":"14px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgba(255, 255, 255, 0.5)"}}],"text":"Remember me"}]},"height":16,"constraintValues":{"left":null,"height":16,"centerAnchorX":0.6565040650406504,"width":169,"right":0,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":false,"y":9});var Toggle = new Layer({"parent":__layer_2__,"name":"Toggle","shadows":[],"borderWidth":1,"backgroundColor":"rgba(255, 255, 255, 0.12)","width":63,"borderColor":"rgba(255, 255, 255, 0.25)","height":34,"constraintValues":{"height":34,"centerAnchorX":0.1280487804878049,"width":63,"bottom":0,"centerAnchorY":0.5},"borderRadius":17,"blending":"normal","clip":true,"borderStyle":"solid"});var ToggleBackground = new Layer({"parent":Toggle,"name":"ToggleBackground","shadows":[],"backgroundColor":"rgb(0, 170, 255)","width":63,"height":34,"constraintValues":{"height":34,"centerAnchorX":0.5,"width":63,"bottom":0,"right":0,"centerAnchorY":0.5},"borderRadius":20,"blending":"normal","clip":false,"borderStyle":"solid"});var ToggleSelect = new Layer({"parent":Toggle,"name":"ToggleSelect","shadows":[{"spread":0,"x":0,"type":"box","y":0,"blur":4,"color":"rgba(0, 0, 0, 0.3)"}],"backgroundColor":"rgb(255, 255, 255)","width":32,"x":30,"height":32,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":32,"centerAnchorX":0.7301587301587301,"width":32,"bottom":1,"right":1,"top":1,"centerAnchorY":0.5},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid","y":1});var __layer_4__ = new Layer({"parent":__layer_0__,"name":"password","backgroundColor":"transparent","width":290,"height":58,"constraintValues":{"height":58,"centerAnchorX":0.5,"width":290,"bottom":64,"right":0,"top":null,"centerAnchorY":0.5571428571428572},"blending":"normal","clip":false,"borderStyle":"solid","y":88});var __layer_5__ = new TextLayer({"parent":__layer_4__,"backgroundColor":null,"width":169,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":8,"css":{"fontSize":"14px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgba(255, 255, 255, 0.5)"}}],"text":"Password"}]},"height":16,"constraintValues":{"height":16,"centerAnchorX":0.2913793103448276,"width":169,"centerAnchorY":0.1379310344827586},"blending":"normal","autoSize":false});var __layer_6__ = new TextLayer({"parent":__layer_4__,"backgroundColor":null,"width":169,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":12,"css":{"fontSize":"14px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"************"}]},"height":16,"constraintValues":{"height":16,"centerAnchorX":0.2913793103448276,"width":169,"bottom":11,"top":null,"centerAnchorY":0.6724137931034483},"blending":"normal","autoSize":false,"y":31});var __layer_7__ = new Layer({"parent":__layer_4__,"backgroundColor":"rgb(255, 255, 255)","width":290,"height":1,"constraintValues":{"height":1,"centerAnchorX":0.5,"width":290,"bottom":0,"right":0,"top":null,"centerAnchorY":0.9913793103448276},"blending":"normal","clip":false,"borderStyle":"solid","y":57});var __layer_8__ = new Layer({"parent":__layer_0__,"name":"email","backgroundColor":"transparent","width":290,"height":58,"constraintValues":{"height":58,"centerAnchorX":0.5,"width":290,"right":0,"centerAnchorY":0.1380952380952381},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_9__ = new TextLayer({"parent":__layer_8__,"backgroundColor":null,"width":169,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":5,"css":{"fontSize":"14px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgba(255, 255, 255, 0.5)"}}],"text":"Email"}]},"height":16,"constraintValues":{"height":16,"centerAnchorX":0.2913793103448276,"width":169,"centerAnchorY":0.1379310344827586},"blending":"normal","autoSize":false});var __layer_10__ = new TextLayer({"parent":__layer_8__,"backgroundColor":null,"width":169,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":20,"css":{"fontSize":"14px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"framer-user@mail.com"}]},"height":16,"constraintValues":{"height":16,"centerAnchorX":0.2913793103448276,"width":169,"bottom":11,"top":null,"centerAnchorY":0.6724137931034483},"blending":"normal","autoSize":false,"y":31});var __layer_11__ = new Layer({"parent":__layer_8__,"backgroundColor":"rgb(255, 255, 255)","width":290,"height":1,"constraintValues":{"height":1,"centerAnchorX":0.5,"width":290,"bottom":0,"right":0,"top":null,"centerAnchorY":0.9913793103448276},"blending":"normal","clip":false,"borderStyle":"solid","y":57});var __layer_12__ = new Layer({"parent":loginScreen,"name":"logo","backgroundColor":"transparent","width":375,"height":148,"constraintValues":{"height":148,"centerAnchorX":0.5,"width":375,"right":0,"top":98,"centerAnchorY":0.2578710644677661},"blending":"normal","clip":false,"borderStyle":"solid","y":98});var __layer_13__ = new Layer({"parent":__layer_12__,"backgroundColor":null,"width":70,"x":153,"height":100,"constraintValues":{"left":null,"height":100,"centerAnchorX":0.5013333333333333,"width":70,"centerAnchorY":0.3378378378378378,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/KZD3aN4wuBh8w39oLMwSaAmTkyKxOpip8QuoDhwcfXU6vmHcE1Zi9laxIFDZ3afLGwpkljVIx8zWX2KLeg.png","clip":false,"borderStyle":"solid"});var __layer_14__ = new TextLayer({"parent":__layer_12__,"backgroundColor":null,"width":375,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":16,"css":{"fontSize":"28px","letterSpacing":"0px","lineHeight":"1.2","tabSize":4,"fontFamily":"\".SFNSText-Semibold\", \"SFUIText-Semibold\", \".SFUIText-Semibold\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"#FramerMeetupMAD"}],"alignment":"center"},"height":33,"constraintValues":{"height":33,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.8885135135135135},"blending":"normal","autoSize":false,"y":115});var __layer_15__ = new Layer({"parent":loginScreen,"name":"statusBarFalse","shadows":[],"backgroundColor":null,"width":375,"height":21,"constraintValues":{"height":21,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.01574212893553223},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_16__ = new TextLayer({"parent":__layer_15__,"shadows":[],"backgroundColor":null,"width":51,"x":162,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":7,"css":{"fontSize":"12px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"8:30 AM"}],"alignment":"center"},"height":15,"constraintValues":{"left":null,"height":15,"centerAnchorX":0.5,"width":51,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":3});var __layer_17__ = new Layer({"parent":__layer_15__,"name":"Battery","shadows":[],"borderWidth":1,"backgroundColor":null,"width":22,"x":343,"borderColor":"rgb(255, 255, 255)","height":10,"constraintValues":{"left":null,"height":10,"centerAnchorX":0.944,"width":22,"right":10,"top":null,"centerAnchorY":0.5238095238095238},"borderRadius":2,"blending":"normal","clip":false,"borderStyle":"solid","y":6});var __layer_18__ = new Layer({"parent":__layer_17__,"shadows":[],"backgroundColor":null,"width":20,"x":1,"height":8,"constraintValues":{"left":1,"height":8,"centerAnchorX":0.5,"width":20,"bottom":1,"right":1,"top":1,"centerAnchorY":0.5},"borderRadius":1,"blending":"normal","clip":false,"borderStyle":"solid","y":1});var __layer_19__ = new Layer({"parent":__layer_18__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":12,"x":1,"height":6,"constraintValues":{"left":1,"height":6,"centerAnchorX":0.35,"width":12,"bottom":1,"top":1,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":1});var __layer_20__ = new Layer({"parent":__layer_17__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":2,"x":23,"height":4,"constraintValues":{"left":null,"height":4,"centerAnchorX":1.090909090909091,"width":2,"right":-3,"top":null,"centerAnchorY":0.5},"borderRadius":{"bottomLeft":0,"topLeft":0,"bottomRight":1,"topRight":1},"blending":"normal","clip":false,"borderStyle":"solid","y":3});var __layer_21__ = new Layer({"parent":__layer_15__,"name":"Signal","shadows":[],"backgroundColor":null,"width":29,"x":7,"height":5,"constraintValues":{"left":7,"height":5,"centerAnchorX":0.05733333333333333,"width":29,"top":null,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":8});var __layer_22__ = new Layer({"parent":__layer_21__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":5,"height":5,"constraintValues":{"height":5,"centerAnchorX":0.08620689655172414,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_23__ = new Layer({"parent":__layer_21__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":5,"x":6,"height":5,"constraintValues":{"left":6,"height":5,"centerAnchorX":0.293103448275862,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_24__ = new Layer({"parent":__layer_21__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":5,"x":12,"height":5,"constraintValues":{"left":null,"height":5,"centerAnchorX":0.5,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_25__ = new Layer({"parent":__layer_21__,"shadows":[],"borderWidth":1,"backgroundColor":null,"width":5,"x":18,"borderColor":"rgb(255, 255, 255)","height":5,"constraintValues":{"left":18,"height":5,"centerAnchorX":0.7068965517241379,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_26__ = new Layer({"parent":__layer_21__,"shadows":[],"borderWidth":1,"backgroundColor":null,"width":5,"x":24,"borderColor":"rgb(255, 255, 255)","height":5,"constraintValues":{"left":null,"height":5,"centerAnchorX":0.9137931034482759,"width":5,"bottom":0,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_27__ = new SVGLayer({"parent":__layer_15__,"name":"Wifi","shadows":[],"backgroundColor":null,"width":15,"x":41,"html":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":24,"width":24},"color":"rgb(255, 255, 255)","height":15,"constraintValues":{"left":41,"aspectRatioLocked":true,"height":15,"centerAnchorX":0.1293333333333333,"width":15,"bottom":3,"top":3,"centerAnchorY":0.5},"blending":"normal","y":3});var navBar = new Layer({"name":"navBar","shadows":[{"spread":0,"x":0,"type":"box","y":2,"blur":4,"color":"rgba(0, 0, 0, 0.1)"}],"backgroundColor":"rgb(0, 170, 255)","width":375,"height":67,"constraintValues":{"height":67,"centerAnchorX":0.5,"width":375,"top":-67,"centerAnchorY":-0.04572713643178411},"blending":"normal","clip":false,"borderStyle":"solid","y":-67});var __layer_28__ = new Layer({"parent":navBar,"name":"border","shadows":[],"backgroundColor":"rgba(0, 0, 0, 0.05)","width":375,"height":1,"constraintValues":{"height":1,"centerAnchorX":0.5,"width":375,"bottom":-1,"right":0,"top":null,"centerAnchorY":1.007462686567164},"blending":"normal","clip":false,"borderStyle":"solid","y":67});var back = new SVGLayer({"parent":navBar,"name":"back","shadows":[],"backgroundColor":null,"width":24,"x":16,"html":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":24,"width":24},"color":"rgb(255, 255, 255)","height":24,"constraintValues":{"left":16,"aspectRatioLocked":true,"height":24,"centerAnchorX":0.07466666666666667,"width":24,"bottom":16,"top":null,"centerAnchorY":0.582089552238806},"blending":"normal","y":27});var __layer_29__ = new SVGLayer({"parent":navBar,"shadows":[],"backgroundColor":null,"width":24,"x":345,"html":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":24,"width":24},"color":"rgb(255, 255, 255)","height":24,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":24,"centerAnchorX":0.952,"width":24,"bottom":16,"right":6,"top":null,"centerAnchorY":0.582089552238806},"blending":"normal","y":27});var __layer_30__ = new Layer({"parent":navBar,"name":"statusBar","shadows":[],"backgroundColor":null,"width":375,"height":21,"constraintValues":{"height":21,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.1567164179104478},"blending":"normal","clip":false,"borderStyle":"solid"});var __layer_31__ = new TextLayer({"parent":__layer_30__,"shadows":[],"backgroundColor":null,"width":51,"x":162,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":7,"css":{"fontSize":"12px","letterSpacing":"0px","lineHeight":"1.3","tabSize":4,"fontFamily":"\".SFNSText-Medium\", \"SFUIText-Medium\", \".SFUIText-Medium\", \"SF UI Text\", sans-serif","WebkitTextFillColor":"rgb(255, 255, 255)"}}],"text":"8:30 AM"}],"alignment":"center"},"height":15,"constraintValues":{"left":null,"height":15,"centerAnchorX":0.5,"width":51,"top":null,"centerAnchorY":0.5},"blending":"normal","autoSize":true,"y":3});var __layer_32__ = new Layer({"parent":__layer_30__,"name":"Battery","shadows":[],"borderWidth":1,"backgroundColor":null,"width":22,"x":343,"borderColor":"rgb(255, 255, 255)","height":10,"constraintValues":{"left":null,"height":10,"centerAnchorX":0.944,"width":22,"right":10,"top":null,"centerAnchorY":0.5238095238095238},"borderRadius":2,"blending":"normal","clip":false,"borderStyle":"solid","y":6});var __layer_33__ = new Layer({"parent":__layer_32__,"shadows":[],"backgroundColor":null,"width":20,"x":1,"height":8,"constraintValues":{"left":1,"height":8,"centerAnchorX":0.5,"width":20,"bottom":1,"right":1,"top":1,"centerAnchorY":0.5},"borderRadius":1,"blending":"normal","clip":false,"borderStyle":"solid","y":1});var __layer_34__ = new Layer({"parent":__layer_33__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":12,"x":1,"height":6,"constraintValues":{"left":1,"height":6,"centerAnchorX":0.35,"width":12,"bottom":1,"top":1,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":1});var __layer_35__ = new Layer({"parent":__layer_32__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":2,"x":23,"height":4,"constraintValues":{"left":null,"height":4,"centerAnchorX":1.090909090909091,"width":2,"right":-3,"top":null,"centerAnchorY":0.5},"borderRadius":{"bottomLeft":0,"topLeft":0,"bottomRight":1,"topRight":1},"blending":"normal","clip":false,"borderStyle":"solid","y":3});var __layer_36__ = new Layer({"parent":__layer_30__,"name":"Signal","shadows":[],"backgroundColor":null,"width":29,"x":7,"height":5,"constraintValues":{"left":7,"height":5,"centerAnchorX":0.05733333333333333,"width":29,"top":null,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid","y":8});var __layer_37__ = new Layer({"parent":__layer_36__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":5,"height":5,"constraintValues":{"height":5,"centerAnchorX":0.08620689655172414,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_38__ = new Layer({"parent":__layer_36__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":5,"x":6,"height":5,"constraintValues":{"left":6,"height":5,"centerAnchorX":0.293103448275862,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_39__ = new Layer({"parent":__layer_36__,"shadows":[],"backgroundColor":"rgb(255, 255, 255)","width":5,"x":12,"height":5,"constraintValues":{"left":null,"height":5,"centerAnchorX":0.5,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_40__ = new Layer({"parent":__layer_36__,"shadows":[],"borderWidth":1,"backgroundColor":null,"width":5,"x":18,"borderColor":"rgb(255, 255, 255)","height":5,"constraintValues":{"left":18,"height":5,"centerAnchorX":0.7068965517241379,"width":5,"bottom":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_41__ = new Layer({"parent":__layer_36__,"shadows":[],"borderWidth":1,"backgroundColor":null,"width":5,"x":24,"borderColor":"rgb(255, 255, 255)","height":5,"constraintValues":{"left":null,"height":5,"centerAnchorX":0.9137931034482759,"width":5,"bottom":0,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","borderRadius":"100%","clip":false,"borderStyle":"solid"});var __layer_42__ = new SVGLayer({"parent":__layer_30__,"name":"Wifi","shadows":[],"backgroundColor":null,"width":15,"x":41,"html":"<?xml version=\"1.0\"?><svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 0 0-6 0zm-4-4l2 2a7.074 7.074 0 0 1 10 0l2-2C15.14 9.14 8.87 9.14 5 13z\"><\/path><\/svg>","htmlIntrinsicSize":{"height":24,"width":24},"color":"rgb(255, 255, 255)","height":15,"constraintValues":{"left":41,"aspectRatioLocked":true,"height":15,"centerAnchorX":0.1293333333333333,"width":15,"bottom":3,"top":3,"centerAnchorY":0.5},"blending":"normal","y":3});__layer_25__.__framerInstanceInfo = {"hash":"#vekter|__layer_25__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_36__.__framerInstanceInfo = {"hash":"#vekter|__layer_36__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_10__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_10__","vekterClass":"TextNode","text":"framer-user@mail.com"};navBar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|navBar","targetName":"navBar","vekterClass":"RectangleNode"};__layer_35__.__framerInstanceInfo = {"hash":"#vekter|__layer_35__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_21__.__framerInstanceInfo = {"hash":"#vekter|__layer_21__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_31__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_31__","vekterClass":"TextNode","text":"8:30 AM"};homeScreen.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|homeScreen","targetName":"homeScreen","vekterClass":"FrameNode"};__layer_26__.__framerInstanceInfo = {"hash":"#vekter|__layer_26__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_18__.__framerInstanceInfo = {"hash":"#vekter|__layer_18__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_27__.__framerInstanceInfo = {"originalFilename":"wifi","framerClass":"SVGLayer","hash":"#vekter|__layer_27__","vekterClass":"SVGNode"};__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_14__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_14__","vekterClass":"TextNode","text":"#FramerMeetupMAD"};__layer_15__.__framerInstanceInfo = {"hash":"#vekter|__layer_15__","vekterClass":"RectangleNode","framerClass":"Layer"};ToggleSelect.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|ToggleSelect","targetName":"ToggleSelect","vekterClass":"OvalNode"};__layer_19__.__framerInstanceInfo = {"hash":"#vekter|__layer_19__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_13__.__framerInstanceInfo = {"originalFilename":"framer-logo.png","framerClass":"Layer","hash":"#vekter|__layer_13__","vekterClass":"ImageNode"};__layer_11__.__framerInstanceInfo = {"hash":"#vekter|__layer_11__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_39__.__framerInstanceInfo = {"hash":"#vekter|__layer_39__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_1__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_1__","vekterClass":"TextNode","text":"SIGN UP"};__layer_30__.__framerInstanceInfo = {"hash":"#vekter|__layer_30__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_22__.__framerInstanceInfo = {"hash":"#vekter|__layer_22__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_28__.__framerInstanceInfo = {"hash":"#vekter|__layer_28__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_3__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_3__","vekterClass":"TextNode","text":"Remember me"};__layer_5__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_5__","vekterClass":"TextNode","text":"Password"};__layer_9__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_9__","vekterClass":"TextNode","text":"Email"};back.__framerInstanceInfo = {"originalFilename":"arrow_back","framerClass":"SVGLayer","hash":"#vekter|back","targetName":"back","vekterClass":"SVGNode"};__layer_32__.__framerInstanceInfo = {"hash":"#vekter|__layer_32__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_42__.__framerInstanceInfo = {"originalFilename":"wifi","framerClass":"SVGLayer","hash":"#vekter|__layer_42__","vekterClass":"SVGNode"};Toggle.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Toggle","targetName":"Toggle","vekterClass":"RectangleNode"};__layer_41__.__framerInstanceInfo = {"hash":"#vekter|__layer_41__","vekterClass":"OvalNode","framerClass":"Layer"};ToggleBackground.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|ToggleBackground","targetName":"ToggleBackground","vekterClass":"RectangleNode"};__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_23__.__framerInstanceInfo = {"hash":"#vekter|__layer_23__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_37__.__framerInstanceInfo = {"hash":"#vekter|__layer_37__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_20__.__framerInstanceInfo = {"hash":"#vekter|__layer_20__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_40__.__framerInstanceInfo = {"hash":"#vekter|__layer_40__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_29__.__framerInstanceInfo = {"originalFilename":"more_vert","framerClass":"SVGLayer","hash":"#vekter|__layer_29__","vekterClass":"SVGNode"};__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_24__.__framerInstanceInfo = {"hash":"#vekter|__layer_24__","vekterClass":"OvalNode","framerClass":"Layer"};signUpButton.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|signUpButton","targetName":"signUpButton","vekterClass":"RectangleNode"};__layer_33__.__framerInstanceInfo = {"hash":"#vekter|__layer_33__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_38__.__framerInstanceInfo = {"hash":"#vekter|__layer_38__","vekterClass":"OvalNode","framerClass":"Layer"};__layer_16__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_16__","vekterClass":"TextNode","text":"8:30 AM"};__layer_34__.__framerInstanceInfo = {"hash":"#vekter|__layer_34__","vekterClass":"RectangleNode","framerClass":"Layer"};__layer_6__.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|__layer_6__","vekterClass":"TextNode","text":"************"};loginScreen.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|loginScreen","targetName":"loginScreen","vekterClass":"FrameNode"};__layer_17__.__framerInstanceInfo = {"hash":"#vekter|__layer_17__","vekterClass":"RectangleNode","framerClass":"Layer"};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {homeScreen, loginScreen, signUpButton, Toggle, ToggleBackground, ToggleSelect, navBar, back});scope["__vekterVariables"] = ["homeScreen", "loginScreen", "signUpButton", "Toggle", "ToggleBackground", "ToggleSelect", "navBar", "back"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);