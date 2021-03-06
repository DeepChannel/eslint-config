module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-require-imports": 0,
      },
    },
  ],
  rules: {
    "no-debugger": ["warn"],
    "no-console": ["warn"],
    eqeqeq: ["warn", "smart"],
    "no-implicit-coercion": ["warn"],
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
      },
    ],
    "@typescript-eslint/ban-types": [
      "warn",
      {
        extendDefaults: false,
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Number: {
            message: "Use number instead",
            fixWith: "number",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },
          Function: {
            message:
              "The `Function` type accepts any function-like value.\nIt provides no type safety when calling the function, which can be a common source of bugs.\nIt also accepts things like class declarations, which will throw at runtime as they will not be called with `new`.\nIf you are expecting the function to accept certain arguments, you should explicitly define the function shape.",
          },
          Object: {
            message:
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.\n- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.\n- If you want a type meaning "any value", you probably want `unknown` instead.',
          },
        },
      },
    ],
    "@typescript-eslint/adjacent-overload-signatures": ["warn"],
    "@typescript-eslint/await-thenable": ["warn"],
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "@typescript-eslint/no-confusing-void-expression": ["warn"],
    "@typescript-eslint/no-floating-promises": ["warn"],
    "@typescript-eslint/switch-exhaustiveness-check": ["warn"],
    "@typescript-eslint/no-for-in-array": ["warn"],
    "@typescript-eslint/no-invalid-void-type": ["warn"],
    "@typescript-eslint/no-loss-of-precision": ["warn"],
    "@typescript-eslint/no-non-null-assertion": ["warn"],
    "@typescript-eslint/no-require-imports": ["warn"],
    "@typescript-eslint/no-unnecessary-condition": [
      "warn",
      { allowConstantLoopConditions: true },
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": ["warn"],
    "@typescript-eslint/no-unsafe-argument": ["warn"],
    "@typescript-eslint/no-unsafe-assignment": ["warn"],
    "@typescript-eslint/no-unsafe-call": ["warn"],
    "@typescript-eslint/no-unsafe-member-access": ["warn"],
    "@typescript-eslint/no-unsafe-return": ["warn"],
    "@typescript-eslint/prefer-as-const": ["warn"],
    "@typescript-eslint/prefer-for-of": ["warn"],
    "@typescript-eslint/prefer-nullish-coalescing": ["warn"],
    "@typescript-eslint/prefer-optional-chain": ["warn"],
    "@typescript-eslint/prefer-reduce-type-parameter": ["warn"],
    "@typescript-eslint/prefer-ts-expect-error": ["warn"],
    "@typescript-eslint/require-await": ["warn"],
    "@typescript-eslint/unbound-method": ["warn"],
    "@typescript-eslint/unified-signatures": ["warn"],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      { assertionStyle: "never" },
    ],
    "@typescript-eslint/restrict-plus-operands": [
      "warn",
      { checkCompoundAssignments: true },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "warn",
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: false,
        allowNullish: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": ["warn", { fixToUnknown: true }],
    "@typescript-eslint/no-misused-promises": [
      "warn",
      { checksConditionals: true, checksVoidReturn: true },
    ],
    curly: "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_" },
    ],
    "no-restricted-globals": [
      "warn",
      "event",
      "postMessage",
      "blur",
      "focus",
      "close",
      "frames",
      "self",
      "parent",
      "opener",
      "top",
      "length",
      "closed",
      "location",
      "origin",
      "name",
      "locationbar",
      "menubar",
      "personalbar",
      "scrollbars",
      "statusbar",
      "toolbar",
      "status",
      "frameElement",
      "navigator",
      "customElements",
      "external",
      "screen",
      "innerWidth",
      "innerHeight",
      "scrollX",
      "pageXOffset",
      "scrollY",
      "pageYOffset",
      "screenX",
      "screenY",
      "outerWidth",
      "outerHeight",
      "devicePixelRatio",
      "clientInformation",
      "screenLeft",
      "screenTop",
      "defaultStatus",
      "defaultstatus",
      "styleMedia",
      "onanimationend",
      "onanimationiteration",
      "onanimationstart",
      "onsearch",
      "ontransitionend",
      "onwebkitanimationend",
      "onwebkitanimationiteration",
      "onwebkitanimationstart",
      "onwebkittransitionend",
      "isSecureContext",
      "onabort",
      "onblur",
      "oncancel",
      "oncanplay",
      "oncanplaythrough",
      "onchange",
      "onclick",
      "onclose",
      "oncontextmenu",
      "oncuechange",
      "ondblclick",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "ondurationchange",
      "onemptied",
      "onended",
      "onerror",
      "onfocus",
      "oninput",
      "oninvalid",
      "onkeydown",
      "onkeypress",
      "onkeyup",
      "onload",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onmousedown",
      "onmouseenter",
      "onmouseleave",
      "onmousemove",
      "onmouseout",
      "onmouseover",
      "onmouseup",
      "onmousewheel",
      "onpause",
      "onplay",
      "onplaying",
      "onprogress",
      "onratechange",
      "onreset",
      "onresize",
      "onscroll",
      "onseeked",
      "onseeking",
      "onselect",
      "onstalled",
      "onsubmit",
      "onsuspend",
      "ontimeupdate",
      "ontoggle",
      "onvolumechange",
      "onwaiting",
      "onwheel",
      "onauxclick",
      "ongotpointercapture",
      "onlostpointercapture",
      "onpointerdown",
      "onpointermove",
      "onpointerup",
      "onpointercancel",
      "onpointerover",
      "onpointerout",
      "onpointerenter",
      "onpointerleave",
      "onafterprint",
      "onbeforeprint",
      "onbeforeunload",
      "onhashchange",
      "onlanguagechange",
      "onmessage",
      "onmessageerror",
      "onoffline",
      "ononline",
      "onpagehide",
      "onpageshow",
      "onpopstate",
      "onrejectionhandled",
      "onstorage",
      "onunhandledrejection",
      "onunload",
      "performance",
      "stop",
      "open",
      "print",
      "captureEvents",
      "releaseEvents",
      "getComputedStyle",
      "matchMedia",
      "moveTo",
      "moveBy",
      "resizeTo",
      "resizeBy",
      "getSelection",
      "find",
      "createImageBitmap",
      "scroll",
      "scrollTo",
      "scrollBy",
      "onappinstalled",
      "onbeforeinstallprompt",
      "crypto",
      "ondevicemotion",
      "ondeviceorientation",
      "ondeviceorientationabsolute",
      "indexedDB",
      "webkitStorageInfo",
      "chrome",
      "visualViewport",
      "speechSynthesis",
      "webkitRequestFileSystem",
      "webkitResolveLocalFileSystemURL",
      "openDatabase",
      "prompt",
      "alert",
      "confirm",
    ],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/typedef": [
      "warn",
      {
        "call-signature": true,
        "arrow-call-signature": true,
        parameter: true,
        arrowParameter: false,
        "property-declaration": true,
        "variable-declaration": true,
        "variable-declaration-ignore-function": true,
        "member-variable-declaration": true,
        "object-destructuring": true,
        "array-destructuring": true,
      },
    ],
    "@typescript-eslint/interface-name-prefix": ["off"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/no-inferrable-types": ["off"],
    "default-case": ["off"],
    "no-case-declarations": ["off"],
    "no-catch-shadow": ["off"],
    "no-async-promise-executor": ["off"],
    "require-atomic-updates": ["off"],
    "import/newline-after-import": ["off"],
    "@typescript-eslint/camelcase": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "import/prefer-default-export": ["off"],
    "@typescript-eslint/no-var-requires": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/explicit-member-accessibility": ["off"],
    "no-return-await": ["off"],
  },
};
