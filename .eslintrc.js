module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
	'no-console': 'off',
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
