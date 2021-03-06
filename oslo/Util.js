'use strict';

const EscapeRegExp = /([^a-zA-Z0-9\\:_-])/g;
const EscapeMap = new Map();
const EscapeReplacer = (_, ch) => {

	let replacement = EscapeMap.get(ch);
	if (replacement === undefined) {
		const charCode = ch.charCodeAt(0).toString(16).toUpperCase();
		replacement = `\\u${charCode.padStart(4, '0')}`;
		EscapeMap.set(ch, replacement);
	}
	return replacement;
};

function escapeObjectName(name) {

	return name.replace(EscapeRegExp, EscapeReplacer);
}

function byFirstArrayItem(a, b) {

	const [a0] = a;
	const [b0] = b;

	return a0 < b0 ? -1 : a0 > b0 ? 1 : 0;
}

const BackSlashChar = '\\';
const BackSlashRegExp = /\\/g;
const ForwardSlashChar = '/';
const ForwardSlashRegExp = /\//g;

function forwardSlash(value) {

	return value.replace(BackSlashRegExp, ForwardSlashChar);
}

function backSlash(value) {

	return value.replace(ForwardSlashRegExp, BackSlashChar);
}

exports.byFirstArrayItem = byFirstArrayItem;
exports.escapeObjectName = escapeObjectName;
exports.forwardSlash = forwardSlash;
exports.backSlash = backSlash;
exports.ForwardSlashChar = ForwardSlashChar;
