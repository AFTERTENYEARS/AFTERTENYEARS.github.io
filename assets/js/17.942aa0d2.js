(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{429:function(e,o,n){"use strict";n.r(o);var s=n(56),l=Object(s.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"mac上执行npm-install时报错-xcode-select-error-tool-xcodebuild-requires-xcode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mac上执行npm-install时报错-xcode-select-error-tool-xcodebuild-requires-xcode"}},[e._v("#")]),e._v(" Mac上执行npm install时报错：xcode-select: error: tool 'xcodebuild' requires Xcode")]),e._v(" "),n("blockquote",[n("p",[e._v("从github clone了一个node项目，在执行npm install命令安装依赖时报错：xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance")])]),e._v(" "),n("h2",{attrs:{id:"错误信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#错误信息"}},[e._v("#")]),e._v(" 错误信息")]),e._v(" "),n("div",{staticClass:"language-s extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('➜  hs-xxx git:(master) cnpm install\nxcode-select: error: tool \'xcodebuild\' requires Xcode, but active developer directory \'/Library/Developer/CommandLineTools\' is a command line tools instance\nxcode-select: error: tool \'xcodebuild\' requires Xcode, but active developer directory \'/Library/Developer/CommandLineTools\' is a command line tools instance\nTraceback (most recent call last):\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/gyp_main.py", line 16, in <module>\n    sys.exit(gyp.script_main())\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/__init__.py", line 545, in script_main\n    return main(sys.argv[1:])\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/__init__.py", line 538, in main\n    return gyp_main(args)\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/__init__.py", line 523, in gyp_main\n    generator.GenerateOutput(flat_list, targets, data, params)\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/generator/make.py", line 2170, in GenerateOutput\n    part_of_all=qualified_target in needed_targets)\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/generator/make.py", line 795, in Write\n    self.Pchify))\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/generator/make.py", line 1190, in WriteSources\n    cflags = self.xcode_settings.GetCflags(configname)\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/xcode_emulation.py", line 551, in GetCflags\n    archs = self.GetActiveArchs(self.configname)\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/xcode_emulation.py", line 420, in GetActiveArchs\n    xcode_archs_default = GetXcodeArchsDefault()\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/xcode_emulation.py", line 118, in GetXcodeArchsDefault\n    xcode_version, _ = XcodeVersion()\n  File "/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/gyp/pylib/gyp/xcode_emulation.py", line 1265, in XcodeVersion\n    version = re.match(r\'(\\d\\.\\d\\.?\\d*)\', version).groups()[0]\nAttributeError: \'NoneType\' object has no attribute \'groups\'\ngyp ERR! configure error \ngyp ERR! stack Error: `gyp` failed with exit code: 1\ngyp ERR! stack     at ChildProcess.onCpExit (/usr/local/lib/node_modules/cnpm/node_modules/node-gyp/lib/configure.js:336:16)\ngyp ERR! stack     at ChildProcess.emit (events.js:189:13)\ngyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:248:12)\ngyp ERR! System Darwin 19.3.0\ngyp ERR! command "/usr/local/bin/node" "/usr/local/lib/node_modules/cnpm/node_modules/npminstall/node-gyp-bin/node-gyp.js" "rebuild"\ngyp ERR! cwd /Users/ddy/workspace/workspace_ecoin/hs-airdrop/node_modules/_goosig@0.6.0@goosig\ngyp ERR! node -v v10.15.3\ngyp ERR! node-gyp -v v3.6.2\ngyp ERR! not ok \n✖ Install fail! Error: post install error, please remove node_modules before retry!\nRun "sh -c node-gyp rebuild" error, exit code 1\nError: post install error, please remove node_modules before retry!\nRun "sh -c node-gyp rebuild" error, exit code 1\n    at ChildProcess.proc.on.code (/usr/local/lib/node_modules/cnpm/node_modules/runscript/index.js:74:21)\n    at ChildProcess.emit (events.js:189:13)\n    at maybeClose (internal/child_process.js:970:16)\n    at Process.ChildProcess._handle.onexit (internal/child_process.js:259:5)\nnpminstall version: 3.3.0\nnpminstall args: /usr/local/bin/node /usr/local/lib/node_modules/cnpm/node_modules/npminstall/bin/install.js --china --userconfig=/Users/ddy/.cnpmrc --disturl=https://npm.taobao.org/mirrors/node --registry=https://registry.npm.taobao.org\n')])])]),n("h2",{attrs:{id:"报错原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#报错原因"}},[e._v("#")]),e._v(" 报错原因")]),e._v(" "),n("p",[e._v("当"),n("code",[e._v("CommandLineTools")]),e._v("先于"),n("code",[e._v("Xcode")]),e._v("安装时，会出现"),n("code",[e._v("xcode-select")]),e._v("的开发者目录指向了"),n("code",[e._v("/Library/Developer/CommandLineTools")]),e._v("路径，实际应当指向"),n("code",[e._v("/Applications/Xcode.app/Contents/Developer")]),e._v("路径。")]),e._v(" "),n("h2",{attrs:{id:"解决办法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[e._v("#")]),e._v(" 解决办法")]),e._v(" "),n("p",[e._v("1、安装"),n("code",[e._v("Xcode")]),e._v("，如果没有安装的话。https://appstore.com/mac/apple/xcode ，安装完成后需要注意检查Xcode是否安装到了 "),n("code",[e._v("/Applications")]),e._v(" 目录下。 (而不是"),n("code",[e._v("/Users/{user}/Applications")]),e._v(").")]),e._v(" "),n("blockquote",[n("p",[e._v("说明：正确的Xcode安装路径如下")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Xcode: /Applications/Xcode.app/Contents/Developer\n\nXcode-beta: /Applications/Xcode-beta.app/Contents/Developer\n")])])])]),e._v(" "),n("p",[e._v("2、重新安装"),n("code",[e._v("xcode-select")]),e._v("并将其指向"),n("code",[e._v("Xcode")]),e._v("的开发者目录路径")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#删除\n$ sudo rm -rf $(xcode-select -p)\n#重装\n$ sudo xcode-select --install\n")])])]),n("p",[e._v("3、使用以下命令将xcode-select指向Xcode开发者目录")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ sudo xcode-select -s /Applications/Xcode.app/Contents/Developer\n")])])]),n("p",[e._v("执行完以上操作后，报错问题得到了解决。依赖能够顺利安装了。")])])}),[],!1,null,null,null);o.default=l.exports}}]);