'use strict';var _0xd1148f=_0x57b5;(function(_0x5dec14,_0x1c81db){var _0x2bc90f=_0x57b5,_0x151c2a=_0x5dec14();while(!![]){try{var _0x2d3415=parseInt(_0x2bc90f(0xe9))/0x1*(-parseInt(_0x2bc90f(0xf7))/0x2)+parseInt(_0x2bc90f(0x10b))/0x3+parseInt(_0x2bc90f(0xea))/0x4+-parseInt(_0x2bc90f(0x105))/0x5+parseInt(_0x2bc90f(0xe0))/0x6+parseInt(_0x2bc90f(0xe6))/0x7*(-parseInt(_0x2bc90f(0xde))/0x8)+-parseInt(_0x2bc90f(0x10a))/0x9*(-parseInt(_0x2bc90f(0x109))/0xa);if(_0x2d3415===_0x1c81db)break;else _0x151c2a['push'](_0x151c2a['shift']());}catch(_0x7505c7){_0x151c2a['push'](_0x151c2a['shift']());}}}(_0x4fbe,0xae647));function _0x57b5(_0x2ba3c8,_0x5b5272){var _0x4fbe21=_0x4fbe();return _0x57b5=function(_0x57b54a,_0x52d37f){_0x57b54a=_0x57b54a-0xcf;var _0x1120e0=_0x4fbe21[_0x57b54a];return _0x1120e0;},_0x57b5(_0x2ba3c8,_0x5b5272);}var __decorate=this&&this['__decorate']||function(_0x5ce238,_0x18ca2c,_0x54fe95,_0x45b65d){var _0x3c57c5=_0x57b5,_0x21c0ca,_0x5a816d=arguments[_0x3c57c5(0xfa)],_0x577904=_0x5a816d<0x3?_0x18ca2c:null===_0x45b65d?_0x45b65d=Object[_0x3c57c5(0xee)](_0x18ca2c,_0x54fe95):_0x45b65d;if(_0x3c57c5(0x101)==typeof Reflect&&_0x3c57c5(0xe1)==typeof Reflect[_0x3c57c5(0x104)])_0x577904=Reflect[_0x3c57c5(0x104)](_0x5ce238,_0x18ca2c,_0x54fe95,_0x45b65d);else{for(var _0x36bfeb=_0x5ce238[_0x3c57c5(0xfa)]-0x1;0x0<=_0x36bfeb;_0x36bfeb--)(_0x21c0ca=_0x5ce238[_0x36bfeb])&&(_0x577904=(_0x5a816d<0x3?_0x21c0ca(_0x577904):0x3<_0x5a816d?_0x21c0ca(_0x18ca2c,_0x54fe95,_0x577904):_0x21c0ca(_0x18ca2c,_0x54fe95))||_0x577904);}return 0x3<_0x5a816d&&_0x577904&&Object[_0x3c57c5(0xd2)](_0x18ca2c,_0x54fe95,_0x577904),_0x577904;},__metadata=this&&this['__metadata']||function(_0x4420ee,_0x3e6435){var _0x769df7=_0x57b5;if(_0x769df7(0x101)==typeof Reflect&&_0x769df7(0xe1)==typeof Reflect['metadata'])return Reflect[_0x769df7(0x10c)](_0x4420ee,_0x3e6435);},__param=this&&this[_0xd1148f(0x103)]||function(_0x35d87b,_0x4c6378){return function(_0xea7d6,_0x769f19){var _0xdabced=_0x57b5;if(_0xdabced(0xe4)==='RqjNS')return this['jwtService'][_0xdabced(0xd0)](_0x833f34,{'secret':_0x499516[_0xdabced(0xf4)][_0xdabced(0xdc)],'expiresIn':_0x2535d8[_0xdabced(0xf4)][_0xdabced(0x114)]});else _0x4c6378(_0xea7d6,_0x769f19,_0x35d87b);};},__importDefault=this&&this['__importDefault']||function(_0x335055){var _0x468950=_0xd1148f;return _0x335055&&_0x335055[_0x468950(0x113)]?_0x335055:{'default':_0x335055};};Object[_0xd1148f(0xd2)](exports,_0xd1148f(0x113),{'value':!0x0}),exports[_0xd1148f(0x102)]=void 0x0;const common_1=require(_0xd1148f(0xdb)),user_service_1=require('../user/user.service'),jwt_1=require('@nestjs/jwt'),ms_1=__importDefault(require('ms')),bcrypt=(require('dotenv')['config'](),require(_0xd1148f(0x106)));let AuthService=class{constructor(_0x464601,_0x3d47be){var _0x451863=_0xd1148f;this[_0x451863(0x10f)]=_0x464601,this[_0x451863(0xdd)]=_0x3d47be;}async['validateUser'](_0x211a38,_0x7dc402){var _0x308c26=_0xd1148f;_0x211a38=await this[_0x308c26(0x10f)][_0x308c26(0xf1)](_0x211a38);if(_0x211a38&&bcrypt[_0x308c26(0xd5)](_0x7dc402,_0x211a38[_0x308c26(0xf9)]))return _0x211a38['password']=void 0x0,_0x211a38;throw new common_1['BadRequestException'](_0x308c26(0xe7));}async[_0xd1148f(0x112)](_0x1275a6,_0xf6cf62,_0x1ecc7a){var _0x46fb4a=_0xd1148f;const _0x57be9d={'email':_0x1275a6[_0x46fb4a(0xeb)],'phone':_0x1275a6[_0x46fb4a(0xd7)],'fullName':_0x1275a6[_0x46fb4a(0xff)],'role':_0x1275a6[_0x46fb4a(0xfe)],'sub':_0x1275a6[_0x46fb4a(0xe8)],'avatar':_0x1275a6&&_0x1275a6[_0x46fb4a(0xd6)]?_0x1275a6[_0x46fb4a(0xd6)]:_0x46fb4a(0xfc)};var _0x118593=this['createRefreshToken'](_0x57be9d);return await this[_0x46fb4a(0x10f)][_0x46fb4a(0x10d)](_0x1275a6[_0x46fb4a(0xe8)],_0x118593),_0xf6cf62[_0x46fb4a(0x111)](_0x46fb4a(0xe2),_0x118593,{'maxAge':(0x0,ms_1[_0x46fb4a(0xef)])(process[_0x46fb4a(0xf4)][_0x46fb4a(0x114)]),'httpOnly':!0x0}),null!=(_0xf6cf62=null==_0x1ecc7a?void 0x0:_0x1ecc7a[_0x46fb4a(0x108)])&&_0xf6cf62[_0x46fb4a(0xf3)]?new Promise((_0x5e888d,_0x595538)=>{var _0x2a74c0=_0x46fb4a,_0x3e4158;setTimeout(()=>{var _0x4af16f=_0x57b5;_0x4af16f(0xfd)==='TCfvm'?_0x262290({'access_token':this[_0x4af16f(0xdd)][_0x4af16f(0xd0)](_0x227a5b),'user':{'email':_0x5c0844['email'],'phone':_0x4ec1b5[_0x4af16f(0xd7)],'fullName':_0x416966['fullName'],'role':_0x3c7a35['role'],'avatar':_0x5089c6[_0x4af16f(0xd6)],'id':_0x3011d6[_0x4af16f(0xe8)]}}):_0x5e888d({'access_token':this['jwtService'][_0x4af16f(0xd0)](_0x57be9d),'user':{'email':_0x1275a6[_0x4af16f(0xeb)],'phone':_0x1275a6[_0x4af16f(0xd7)],'fullName':_0x1275a6[_0x4af16f(0xff)],'role':_0x1275a6[_0x4af16f(0xfe)],'avatar':_0x1275a6[_0x4af16f(0xd6)],'id':_0x1275a6[_0x4af16f(0xe8)]}});},+(null==(_0x3e4158=null==_0x1ecc7a?void 0x0:_0x1ecc7a[_0x2a74c0(0x108)])?void 0x0:_0x3e4158[_0x2a74c0(0xf3)]));}):{'access_token':this[_0x46fb4a(0xdd)]['sign'](_0x57be9d),'user':{'email':_0x1275a6[_0x46fb4a(0xeb)],'phone':_0x1275a6[_0x46fb4a(0xd7)],'fullName':_0x1275a6[_0x46fb4a(0xff)],'role':_0x1275a6[_0x46fb4a(0xfe)],'avatar':_0x1275a6['avatar'],'id':_0x1275a6[_0x46fb4a(0xe8)]}};}[_0xd1148f(0x10e)](_0x53dd9f){var _0x23bb3a=_0xd1148f;return this[_0x23bb3a(0xdd)][_0x23bb3a(0xd0)](_0x53dd9f,{'secret':process[_0x23bb3a(0xf4)][_0x23bb3a(0xdc)],'expiresIn':process['env'][_0x23bb3a(0x114)]});}async[_0xd1148f(0x107)](_0x532034){var {_id:_0x532034,phone:_0x1ef94c,email:_0x243bf4,fullName:_0x481ee9,role:_0x51e114,avatar:_0x57bb54}=_0x532034;return{'user':{'id':_0x532034,'email':_0x243bf4,'phone':_0x1ef94c,'fullName':_0x481ee9,'role':_0x51e114,'avatar':_0x57bb54}};}async[_0xd1148f(0xcf)](_0x17ec8f,_0x358725){var _0x520926=_0xd1148f;return _0x358725[_0x520926(0xd8)](_0x520926(0xe2)),await this[_0x520926(0x10f)][_0x520926(0xd3)](_0x17ec8f),'Logout\x20success.';}async['handleRefreshToken'](_0x16fc90,_0x49857f){var _0x181d74=_0xd1148f;if(null==(_0x148414=_0x16fc90[_0x181d74(0xed)])||!_0x148414[_0x181d74(0xe2)])throw new common_1[(_0x181d74(0xf8))](_0x181d74(0x110));const _0x26ca8a=_0x16fc90[_0x181d74(0xed)]['refresh_token'];var _0x148414=await this[_0x181d74(0x10f)][_0x181d74(0xfb)](_0x26ca8a);if(!_0x148414)throw new common_1[(_0x181d74(0xf8))](_0x181d74(0xe5));try{if(_0x181d74(0x100)===_0x181d74(0x100)){var _0x4421e1=this[_0x181d74(0xdd)][_0x181d74(0xf2)](_0x26ca8a,{'secret':process[_0x181d74(0xf4)]['JWT_REFRESH_SECRET']});if(_0x4421e1){var _0x4ac932={'email':_0x4421e1['email'],'phone':_0x148414[_0x181d74(0xd7)],'fullName':_0x148414[_0x181d74(0xff)],'role':_0x4421e1['role'],'sub':_0x4421e1[_0x181d74(0xe3)],'avatar':_0x148414&&_0x148414[_0x181d74(0xd6)]?_0x148414[_0x181d74(0xd6)]:_0x181d74(0xfc)};const _0x5fdf2d=this[_0x181d74(0x10e)](_0x4ac932);return await this[_0x181d74(0x10f)][_0x181d74(0x10d)](_0x4421e1['sub'],_0x5fdf2d),_0x49857f['cookie'](_0x181d74(0xe2),_0x5fdf2d,{'maxAge':(0x0,ms_1[_0x181d74(0xef)])(process['env'][_0x181d74(0x114)]),'httpOnly':!0x0}),{'access_token':this[_0x181d74(0xdd)][_0x181d74(0xd0)](_0x4ac932),'user':{'email':_0x4421e1[_0x181d74(0xeb)],'phone':_0x4421e1[_0x181d74(0xd7)],'fullName':_0x4421e1['fullName'],'role':_0x4421e1[_0x181d74(0xfe)],'avatar':_0x4421e1['avatar'],'id':_0x4421e1[_0x181d74(0xe3)]}};}}else{if(_0x181d74(0x101)==typeof _0x23b145&&_0x181d74(0xe1)==typeof _0x4907a9[_0x181d74(0x10c)])return _0x366eac[_0x181d74(0x10c)](_0x364862,_0x37e8c3);}}catch(_0xea8db){throw _0x49857f[_0x181d74(0xd8)](_0x181d74(0xe2)),new common_1['BadRequestException'](_0x181d74(0xec));}}};__decorate([__param(0x1,(0x0,common_1[_0xd1148f(0xd9)])({'passthrough':!0x0})),__param(0x2,(0x0,common_1['Req'])()),__metadata(_0xd1148f(0xf5),Function),__metadata('design:paramtypes',[Object,Object,Object]),__metadata(_0xd1148f(0xdf),Promise)],AuthService[_0xd1148f(0xd4)],_0xd1148f(0x112),null),__decorate([__param(0x1,(0x0,common_1['Res'])({'passthrough':!0x0})),__metadata(_0xd1148f(0xf5),Function),__metadata('design:paramtypes',[String,Object]),__metadata('design:returntype',Promise)],AuthService[_0xd1148f(0xd4)],_0xd1148f(0xcf),null),__decorate([__param(0x1,(0x0,common_1['Res'])({'passthrough':!0x0})),__metadata('design:type',Function),__metadata('design:paramtypes',[Object,Object]),__metadata(_0xd1148f(0xdf),Promise)],AuthService['prototype'],_0xd1148f(0xda),null),AuthService=__decorate([(0x0,common_1[_0xd1148f(0xf0)])(),__metadata(_0xd1148f(0xd1),[user_service_1[_0xd1148f(0xf6)],jwt_1['JwtService']])],AuthService),exports[_0xd1148f(0x102)]=AuthService;function _0x4fbe(){var _0x5fb64c=['logout','sign','design:paramtypes','defineProperty','handleUserLogout','prototype','compareSync','avatar','phone','clearCookie','Res','handleRefreshToken','@nestjs/common','JWT_REFRESH_SECRET','jwtService','786664nrpCAB','design:returntype','7657932osIABs','function','refresh_token','sub','lJpNs','Không\x20tồn\x20tại\x20refresh_token\x20ở\x20database.\x20Please\x20do\x20login\x20again.','21baWGOn','Thông\x20tin\x20đăng\x20nhập\x20không\x20chính\x20xác','_id','1386073bIYTep','1572748DUZMLh','email','Hết\x20hạn\x20refresh_token.\x20Please\x20do\x20login\x20again.','cookies','getOwnPropertyDescriptor','default','Injectable','findByUsername','verify','delay','env','design:type','UserService','2dtourU','BadRequestException','password','length','findUserByToken','c21f969b5f03d33d43e04f8f136e7682.png','tczGG','role','fullName','PQNJA','object','AuthService','__param','decorate','7000170UpXZuJ','bcryptjs','fetchAccount','body','10LWUbqf','18961362QnpSAd','57270mJtrny','metadata','updateUserToken','createRefreshToken','userService','Không\x20tồn\x20tại\x20refresh_token\x20ở\x20cookies.\x20Please\x20do\x20login\x20again.','cookie','login','__esModule','JWT_REFRESH_EXPIRE_IN'];_0x4fbe=function(){return _0x5fb64c;};return _0x4fbe();}