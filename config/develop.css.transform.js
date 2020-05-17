module.exports = function (css) {
    css = css
        ? css.replace(/:(\s)*(\d)*\.?(\d)*(\s)*;/g, function (str) {
            return str.replace(';', 'px;')
        })
        : '';
    return css;
};
