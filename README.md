# `@deepchannel/eslint-config`

This package provides Deep Channel's base TS .eslintrc

## Install

Install this package:

```
npm i -D github:deepchannel/eslint-config#x.y.z
```

You should install required peer dependencies which can be listed using this:

```
npm info "github:deepchannel/eslint-config#x.y.z" peerDependencies
```

## Usage:

Basic usage of this would look like:

```json
{
  "extends": "@deepchannel/eslint-config",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
